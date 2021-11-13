/**
* Template Name: Bocor - v2.0.0
* Template URL: https://bootstrapmade.com/bocor-bootstrap-template-nice-animation/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
!(function ($) {
  "use strict";
  const bindItemGrammar = () => {
    data.forEach((element, index) => {
      var html = `
              <div class="col-lg-3 col-md-4 col-sm-6">
                  <div class="item-result" data-id="${element["id"]}">
                      <div class="item-header">
                          <p class="item-title">(${index + 1}) ${element["title"]}</p>
                          <strong class="item-note"> ${element["note"]}</strong>
                          <p> (${element["lesson"]})</p>

                      </div>
                  </div>
              </div> `;
      $('#grammar .box-result').append(html);
    });
  }


  const onLoad = () => {
    ///////////////
    var tablink = $(".tablink");
    tablink.each((e, i) => {
      $(i).removeClass("active");

    })
    $(tablink[0]).addClass("active");


    /////////////////////
    var tabcontent = $(".tabcontent");
    var tabcontentID = $(tablink[0]).attr('attr-tab')
    tabcontent.each((e, i) => {
      $(i).css({ display: "none" })
    })
    $(`#${tabcontentID}`).css({ display: "block" })



    if ($(".tablink.active").attr('attr-tab') == "sentences") {
      $("#inputTextMean").css({ display: "block" })

    }
    else {
      $("#inputTextMean").css({ display: "none" })

    }
  }

  const eventSearch = () => {



    var btnAdd = $('#btnAdd');
    var inputText = $('#inputText');
    var btndelKey = $('.delKey');


    var myModal = $('#myModal');
    var btnClose = $("#close");


    inputText.keyup(function () {
      var tablink = $(".tablink");
      if ($(tablink[0]).hasClass("active")) {
        console.log("object1")
      }
      if ($(tablink[1]).hasClass("active")) {
        let dataKey = this.value.toLowerCase();
        data.filter((item) => {
          $('.box-result').empty();
          return (
            item.title.toLowerCase().includes(dataKey) ||
            item.note.toLowerCase().includes(dataKey)
          );
        }).forEach((element, index) => {
          var html = `
        <div class="col-lg-3 col-md-4 col-sm-6">
            <div class="item-result" data-id="${element["id"]}">
                <div class="item-header">
                    <p class="item-title">(${index + 1}) ${element["title"]}</p>
                    <strong class="item-note"> ${element["note"]}</strong>
                    <p> (${element["lesson"]})</p>
    
                </div>
            </div>
        </div>
        
        `;
          $('#grammar .box-result').append(html);
        });

        if (dataKey.trim() != 0) {
          btnAdd.addClass("active");
          btndelKey.css({ display: "block" })
        }
        else {
          btnAdd.removeClass("active");
          btndelKey.css({ display: "none" })

        }


      }


    });

    btnAdd.click(function () {
      alert("Handler for .click() called.");
    });
    btndelKey.click(function () {
      inputText.val(null);
      $(this).css({ display: "none" })
      $('#grammar .box-result').empty();
      btnAdd.removeClass("active");

      setTimeout(100);
      bindItemGrammar();
    });

    btnClose.click(function (e) {
      myModal.css({ display: "none" })
    });

    $(window).click(function (e) {
      if (e.target.className == "modal") {
        myModal.css({ display: "none" })
      }
    });

    $('#grammar .box-result').on('click', ".item-result", function () {
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

    })
  }
  $(window).on('load', function () {
    onLoad();
    getCurrentTimeDate();
    eventSearch();
    bindItemGrammar();
    // Get the element with id="defaultOpen" and click on it
    $(".tablink").click(function () {
      var tablink = $(".tablink");
      tablink.each((e, i) => {
        $(i).removeClass("active");
      })
      $(this).addClass("active");
      if ($(".tablink.active").attr('attr-tab') == "sentences") {
        $("#inputTextMean").css({ display: "block" })

      }
      else {
        $("#inputTextMean").css({ display: "none" })

      }

      var tabcontent = $(".tabcontent");
      var tabcontentID = $(this).attr('attr-tab')
      tabcontent.each((e, i) => {
        $(i).css({ display: "none" })
      })
      $(`#${tabcontentID}`).css({ display: "block" })
    });




    $('#sentences .box-result').on('click', ".item-result ", function () {
        // document.addEventListener('play', function (e) {
        //   var audios = document.getElementsByTagName('audio');
        //   for (var i = 0, len = audios.length; i < len; i++) {
        //     if (audios[i] != e.target) {
        //       audios[i].pause();
        //     }
        //   }
        // }, true);
        // $(this).children().children("#myAudio").append(' <source src="../img/voice/phrase/accommodation_1.mp3" type="audio/mpeg">');


        // ($(this).children().children("#myAudio")).trigger("play");
      // fetch('http://localhost:3000/voice/'+ $(this).attr('name-voice'))+".mp3"
      var name =$(this).attr('name-voice');
        $(this).children().children("#myAudio").append(`F <source src="http://localhost:3000/voice/${name}.mp3" type="audio/mpeg">`);
      
        ($(this).children().children("#myAudio")).trigger("play");
      
    })

  });


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
  const getCurrentTimeDate = () => {
    let currentTimeDate = new Date();

    // var weekday = new Array(7);
    // weekday[0] = "Sunday";
    // weekday[1] = "Monday";
    // weekday[2] = "Tuesday";
    // weekday[3] = "Wednesday";
    // weekday[4] = "Thursday";
    // weekday[5] = "Friday";
    // weekday[6] = "Saturday";

    // var month = new Array();
    // month[0] = "January";
    // month[1] = "February";
    // month[2] = "March";
    // month[3] = "April";
    // month[4] = "May";
    // month[5] = "June";
    // month[6] = "July";
    // month[7] = "August";
    // month[8] = "September";
    // month[9] = "October";
    // month[10] = "November";
    // month[11] = "December";

    var weekday = new Array(7);
    weekday[0] = "日";
    weekday[1] = "月";
    weekday[2] = "火";
    weekday[3] = "水";
    weekday[4] = "木";
    weekday[5] = "金";
    weekday[6] = "土";

    var month = new Array();
    month[0] = "一";
    month[1] = "二";
    month[2] = "三";
    month[3] = "四";
    month[4] = "五";
    month[5] = "六";
    month[6] = "七";
    month[7] = "八";
    month[8] = "九";
    month[9] = "十";
    month[10] = "十一";
    month[11] = "十二";


    var hours = currentTimeDate.getHours();

    var minutes = currentTimeDate.getMinutes();
    var seconds = currentTimeDate.getSeconds();
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    //  var AMPM = hours >= 12 ? 'PM' : 'AM';

    // if(hours === 12){
    //     hours=12;

    // }else{

    //     hours = hours%12;

    // }



    var currentTime = `${hours}:${minutes}:${seconds}`;
    var currentDay = weekday[currentTimeDate.getDay()];

    var currentDate = currentTimeDate.getDate();


    // if(currentDate === 1){
    //   currentDate = currentDate + "st";

    // }
    // else if(currentDate === 2){
    //   currentDate = currentDate + "nd";

    // }
    // else if(currentDate === 3){
    //   currentDate = currentDate + "rd";

    // }else{
    //   currentDate = currentDate + "th";
    // }
    // var currentMonth = month[currentTimeDate.getMonth()];
    var currentMonth = currentTimeDate.getMonth() + 1;

    var CurrentYear = currentTimeDate.getFullYear();

    var fullDate = `${CurrentYear}年   ${currentMonth}月  ${currentDate}日 `;


    document.getElementById("time").innerHTML = currentTime;
    document.getElementById("day").innerHTML = currentDay + "曜日";
    document.getElementById("date").innerHTML = fullDate;

    setTimeout(getCurrentTimeDate, 500);

  }

  fetch('http://localhost:3000/noti').then(function (response) {
    // The API call was successful!
    return response.json();
  }).then(function (data) {
    // This is the JSON from our response
    // console.log(data);
    let number =1;
    for (const key in data) {
      data[key].forEach((e, i) => {

        var html = `
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="item-result" name-voice="${e["voice"]}">
                        <div class="item-header">
                            <p class="item-title">(${number}) ${e["japanese"]}</p>
                            <p> (${e["pinyin"]})</p>
                            <strong class="item-note"> ${e["vietnamese"]}</strong>
                            <audio id="myAudio"  data-id="${e["id"]}">
                          </audio>
                        </div>
                    </div>
                </div> `;
        // console.log(html)
        $('#sentences .box-result').append(html);
        number++

      });
    }

  }).catch(function (err) {
    // There was an error
    console.warn('Something went wrong.', err);
  });
})(jQuery);

                            // <source src="https://mina.mazii.net/db/phrase/${e["voice"]}.mp3" type="audio/mpeg">

