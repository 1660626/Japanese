// call this on an HTMLElement node to make it a Draggable element
const Draggable = function(elem, props) {
	elem.style.position = 'relative';
	elem.style.top = '0px';
	elem.style.left = '0px';

	// a temporary object that will be pushed to the Draggable.elements array
	const obj = {};

	/*

	obj.node 					the HTMLElement node of the element

	obj.xAxis / obj.yAxis		booleans allowing movement in either axis

	obj.xBoundaryElement /		HTMLElement nodes that dictate where the limit
	obj.yBoundaryElement		of drag movement is in each axis

	obj.ondrop					function to run when the element is dropped

	*/

	obj.node = elem;
	obj.xAxis = props.xAxis;
	obj.yAxis = props.yAxis;
	obj.xBoundaryElement = props.xBoundaryElement;
	obj.yBoundaryElement = props.yBoundaryElement;
	obj.ondrop = props.ondrop ? props.ondrop : null;

	Draggable.elements.push(obj);

	elem.addEventListener('mousedown', function(e) {
		Draggable.currentElement = obj;

		Draggable.previousMouseX = e.clientX;
		Draggable.previousMouseY = e.clientY;

		Draggable.startLeft = this.style.left;
		Draggable.startTop = this.style.top;

		Draggable.disable_selection();
	});
}

// re-enabled text selection after a drag has been released
Draggable.enable_selection = function() {
	document.body.style.webkitUserSelect = '';
	document.body.style.mozUserSelect = '';
	document.body.style.msUserSelect = '';
}

// disabled text selection while a drag is happening
Draggable.disable_selection = function() {
	document.body.style.webkitUserSelect = 'none';
	document.body.style.mozUserSelect = 'none';
	document.body.style.msUserSelect = 'none';
}

// performs all necessary operations for when a drag is ended (completed or cancelled)
Draggable.release = function() {
	Draggable.enable_selection();
	Draggable.currentElement = null;
	Draggable.previousMouseX = null;
	Draggable.previousMouseY = null;
	Draggable.startX = null;
	Draggable.startY = null;
}

// performs drag completion specific actions
Draggable.complete = function() {
	Draggable.currentElement.ondrop(event);
}

// performs drag cancel specific actions
Draggable.cancel = function() {
	Draggable.currentElement.node.style.left = Draggable.startLeft;
	Draggable.currentElement.node.style.top = Draggable.startTop;
}

// array of objects for HTML elements that are draggable
Draggable.elements = [];

// logs the mouseX and mouseY values each time a mousemove event fires for calulating drag destination
Draggable.previousMouseX = null;
Draggable.previousMouseY = null;

// the element that is currently being dragged
Draggable.currentElement = null;

// handles a succesful drop
window.addEventListener('mouseup', function(event) {
	if (Draggable.currentElement) {
		Draggable.complete(event);
		Draggable.release();
	}
});

// handles the dragging if a Draggable element has been clicked on
window.addEventListener('mousemove', function(e) {
	if (Draggable.currentElement) {
		// the pixel difference between the last and current mousemove event
		// movementY is flipped because positive CSS top values go down in the browser, not up
		const movementX = e.clientX - Draggable.previousMouseX;
		const movementY = (e.clientY - Draggable.previousMouseY);

		// handles x-axis movement if allowed
		if (Draggable.currentElement.xAxis) {
			// the new node.style.left value if the drag is succesful
			const newCSSLeft = parseInt(Draggable.currentElement.node.style.left) + movementX;

			// checks the bounds of the boundary element against the potential drag destination
			if (Draggable.currentElement.xBoundaryElement) {
				const boundaryRect = Draggable.currentElement.xBoundaryElement.getBoundingClientRect();
				const dragElementRect = Draggable.currentElement.node.getBoundingClientRect();
				const dragDestination = dragElementRect.left + movementX;

				const notPastLeft = dragDestination >= boundaryRect.left;
				const notPastRight = dragDestination <= (boundaryRect.right - dragElementRect.width);

				// checks to see if the desination and the mouse are within
				// the confines of the boundary element
				if (notPastLeft && notPastRight) {
					if (e.clientX >= boundaryRect.left && e.clientX <= boundaryRect.right)
						Draggable.currentElement.node.style.left = newCSSLeft + 'px';
				}
			} else {
				Draggable.currentElement.node.style.left = newCSSLeft + 'px';
			}
		}

		// handles y-axis movement if allowed
		if (Draggable.currentElement.yAxis) {
			// the new node.style.top value if the drag is succesful
			const newCSSTop = parseInt(Draggable.currentElement.node.style.top) + movementY;

			// checks the bounds of the boundary element against the potential drag destination
			if (Draggable.currentElement.yBoundaryElement) {
				const boundaryRect = Draggable.currentElement.yBoundaryElement.getBoundingClientRect();
				const dragElementRect = Draggable.currentElement.node.getBoundingClientRect();
				const dragDestination = dragElementRect.top + movementY;

				const notPastTop = dragDestination >= boundaryRect.top;
				const notPastBottom = dragDestination <= (boundaryRect.bottom - dragElementRect.height);

				// checks to see if the desination and the mouse are within
				// the confines of the boundary element
				if (notPastTop && notPastBottom) {
					if (e.clientY >= boundaryRect.top && e.clientY <= boundaryRect.bottom)
						Draggable.currentElement.node.style.top = newCSSTop + 'px';
				}
			} else {
				Draggable.currentElement.node.style.top = newCSSTop + 'px';
			}
		}

		// logs the mouse position for comparison to the next mousemove event
		Draggable.previousMouseX = e.clientX;
		Draggable.previousMouseY = e.clientY;
	}
});

// Escape key releases drag elements, in the case of a bug
window.addEventListener('keydown', function(e) {
	if (e.key === 'Escape' && Draggable.currentElement) {
		Draggable.cancel();
		Draggable.release();
	}
});