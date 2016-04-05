$(document).ready(function(){

//gets all the nav li, add click evens
$(".nav").find("li").on("click", function(){

//remove all active class
$(".nav").find("li").removeClass("active");

//add actuve class to clicked event
$(this).addClass("active");

var page = $(this).attr("id");
getPartial(page);

})//click

function getPartial(partial){

  if(partial == "homePage") { //ajax get home.html
    $.get("partials/homePage.html", function(data) {
      $("#pageContent").html(data);
      $('.carousel').carousel()

    })

  } else if (partial == "seeCatsPage") {
    $.getJSON("jsonDataBase/finalProject.json", function(data) {

      console.dir(data);
      var html = "";

    $.each(data, function(index, item) {
        html += '<div class="col-md-4 cat">' +
          '<div class="catName">' + item.name + '</div>' +
          '<div class="catType">' + item.type + '</div>' +
          '<div class="catGender">' + item.gender + '</div>' +
          '<img class="catImage" src="' + item.image + '"/>'; +
          '<div class="commentsContainer">';
          $.each(item.comments, function(ind, i) {
            html += '<div class="rentersName">'+ i.username + '</div>' +
              '<div class="rentersComment">'+ i.comment + '</div>' +
              '<div class="rentersStars">';

                for (var j = 1; j <= 5; j++) {
                  if(j <= i.stars){
                    html+='<img src="images/fullstar.png"/>';
                  }
                  else {
                    html+='<img src="images/emptystar.png"/>';
                  }
                }
              html=+'</div>'; //end stars
          }) // each comment

        html += '</div>' + //commentsContainer
                '</div>'; //col-md-4
      }) //end cat

    $("#pageContent").html(html);
  })



  } else if (partial == "orderPage") {
    $.get("partials/order.html", function(data) {
      $("#pageContent").html(data);
      $("#myButton").on("mouseenter", function() {
      $("#log").append("<br>Button mouseenter");
      $(this).text("ORDER NOW!!!");
    })
    .on("mouseleave", function() {
      $("#log").append("<br>Button mouseleave");
      $(this).text("Click Me!");
    });


  //change the backgrund color on focus, blue
  $("#mySingleLineText").on("focus", function() {
      $("#log").append("<br>input focus");
      $(this).css("background-color", "#F7F8E0");
    })
    .on("blur", function() {
      $("#log").append("<br>input blur");
      $(this).css("background-color", "#FFF");
    });

  //give the user a message about their selection
  $("#mySelect").on("change", function() {

    var val = $(this).val();
    $("#log").append("<br>select change");
    $("#mySelectMessage").html(val + " is a nice selection!");

  });

  //user clicks the button
  $("#myButton").on("click", function() {

    $("#log").append("<br>User clicked the button");

    var userOrder = {};

    userOrder.myInput = $("#mySingleLineText").val();
    userOrder.myTextarea = $("#myTextarea").val();
    userOrder.mySelect = $("#mySelect").val();
    userOrder.myRadio = $("[name='gender']:checked").val();
    userOrder.myCheckValues = [];

    $("[name='vehicle']:checked").each(function() {
      userOrder.myCheckValues.push($(this).val());
    });

    $("#log").append("<br>Value of input is: " + userOrder.myInput);
    $("#log").append("<br>Value of textarea is: " + userOrder.myTextarea);
    $("#log").append("<br>Value of select is: " + userOrder.mySelect);
    $("#log").append("<br>Value of radio button is: " + userOrder.myRadio);
    $("#log").append("<br>Value of checks is: " + userOrder.myCheckValues.join());
    $("#log").append("<br><br>Value of userOrder is: " + JSON.stringify(userOrder));

    /*
        var myInput = $("#mySingleLineText").val();
        var myTextarea = $("#myTextarea").val();
        var mySelect = $("#mySelect").val();
        var myRadio = $("[name='gender']:checked").val();
        var myCheckValues = [];
        //each is a jquery loop for objects/arrays
        //each thing that is selected, do the function
        //"this" is the element we are currently looking at
        $("[name='vehicle']:checked").each(function() {
          myCheckValues.push($(this).val());
        });
        $("#log").append("<br>User clicked the button");
        $("#log").append("<br>Value of input is: " + myInput);
        $("#log").append("<br>Value of textarea is: " + myTextarea);
        $("#log").append("<br>Value of select is: " + mySelect);
        $("#log").append("<br>Value of radio button is: " + myRadio);
        $("#log").append("<br>Value of checks is: " + myCheckValues.join());
    */
  })


});

  }

}

//begin program
getPartial("homePage");

})//ready
