$(document).ready(function() {

  /*
  - click
  - blur
  - focus
  - change
  - mouseenter & mouseleave

  $("#").on("", function(){
  });
  */
  $("#mySingleLineText").on("focus", function() {
      $("#log").append("<br>colour yello");
      $(this).css("background-color", "yellow");
    })
    .on("blur", function() {
      $("#log").append("<br>colour white");
      $(this).css("background-color", "white");
    });

  $("#mySelect").on("change", function() {

    var val = $(this).val();
    $("#log").append("<br>selelct change");
    $("#mySelectMessage").html(val + " is a nice selection!");
  });

  $("#myButton").on("mouseenter", function() {
      $("#log").append("<br>Buttom mouseenter");
      $(this).text("Order Now")
    })
    .on("mouseleave", function() {
      $("#log").append("<br>button mouseleave");
      $(this).text("Click Me")
    });

  //user click the button
  //$("#log").append("<br>added some text");
  $("#myButton").on("click", function() {

    var myInput = $("#mySingleLineText").val();
    var myTextarea = $("myTextArea").val();
    var mySelect = $("myTSelect").val();
    var myRadio = $("[name='gender']:checked").val();

    var myCheckValues = [];
    //each is a jquery Loop for objects/arreys
    //each thing that is seleced, do the funtion
    //"this" is the element we are currently looking at

    $("[name='vehicle']:checked").each(function() {
      myCheckValues.pushes($(this).val());
    });

    $("#log").append("<br>User clicked the button");

    $("#log").append("<br>Value of input is:" + myInput);
    $("#log").append("<br>Value of textarea is:" + myTextArea);
    $("#log").append("<br>Value of select is:" + mySelect);
    $("#log").append("<br>Value of radio button is:" + myRadio);
    $("#log").append("<br>Value of checks is:" + myCheckValues.join());

  })

});
