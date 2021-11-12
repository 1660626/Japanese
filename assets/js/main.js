/**
* Template Name: Bocor - v2.0.0
* Template URL: https://bootstrapmade.com/bocor-bootstrap-template-nice-animation/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
!(function ($) {
  "use strict";

  $(window).on('load', function () {
    data.forEach((element,index) => {
      var html = `
    <div class="col-md-3">
        <div class="item-result" data-id="${element["id"]}">
            <div class="item-header">
                <p class="item-title">(${index+1}) ${element["title"]}</p>
                <strong class="item-note"> ${element["note"]}</strong>
                <p> (${element["lesson"]})</p>

            </div>
        </div>
    </div>
    
    `;
      $('.box-result').append(html);
    });

    var btnAdd = $('#btnAdd');
    var inputText = $('#inputText');
    var itemBox = $('.item-result');
    var myModal = $('#myModal');
    var btnClose = $("#close");


    inputText.keyup(function () {
      let data = this.value;
      if (data.trim() != 0) {
        btnAdd.addClass("active");
      }
      else {
        btnAdd.removeClass("active");
      }
    });

    btnAdd.click(function () {
      alert("Handler for .click() called.");
    });

    itemBox.click(function (e) {
      let dataID = $(this).attr('data-id');
      $('.grammar-item-title').empty();
      $('.grammar-item-title-mean').empty();
      $('.grammar-item-title').append(data[dataID - 1].title);
      $('.grammar-item-title-mean').append(data[dataID - 1].note);

      $('.item-description').empty();
      console.log(data[dataID - 1].description)

      if (!(data[dataID - 1].description) || data[dataID - 1].description == []) {
        $('.item-description').append(`<p class="text-center" >Hiện đang cập nhật....</p>`);

      }
      else {
        data[dataID - 1].description.forEach((element, index) => {
          console.log(element)
          let htmlDes = `<div class="gr-use-description">${element}</div>`;
          $('.item-description').append(htmlDes);
          let html = htmlItemExamplen(data, index, dataID);
          $('.item-description').append(html);
          ;
        })

      }


      myModal.css({ display: "block" })
    });
    btnClose.click(function (e) {
      let dataID = $(this).attr('data-id');
      myModal.css({ display: "none" })
    });
    $(window).click(function (e) {
      if (e.target.className == "modal") {
        myModal.css({ display: "none" })
      }
    });

  });


  getCurrentTimeDate();

  const htmlItemExamplen = (data, index, dataID) => {

    let grExample = ""
    data[dataID - 1].example[index].forEach((example, i) => {
      let exam = ` <div class="example">
      ${i + 1}. ${example}
      </div>`
      let examMean = `<div class="example-mean">
          ${data[dataID - 1].exampleMean[0][i]}
      </div>`;
      grExample += `<div class="gr-example">
      ${exam} ${examMean}
  </div>`
    })
    return grExample;
    // $('.item-description').empty();

    // $('.grammar-item-title').empty();
    // $('.grammar-item-title-mean').empty();
    // $('.gr-use-description').empty();


    // if(!(data[dataID-1].description) ||  data[dataID-1].description == ""){
    //   $('.gr-use-description').append(`<p class="text-center" >Hiện đang cập nhật....</p>`);

    // }
    // else{
    //   $('.gr-use-description').append(data[dataID-1].description);

    // }

  }

})(jQuery);


