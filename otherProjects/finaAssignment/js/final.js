
$(document).ready(function() {

    //get all the nav li, add click event
    $(".nav").find("li").on("click", function() {
        $("#pageContent").hide().html("");
        //remove all active class
        $(".nav").find("li").removeClass("active");
        //add active class to clicked li
        $(this).addClass("active");

        //get the correct page according to click
        var page = $(this).attr("id");
        getPartial(page);

      }) //click

    //get the parital via JSON, add to page, activiate associating js
    function getPartial(partial) {

      if (partial == "homePage") { //ajax get home.html
        $.get("partials/home.html", function(data) {
          $("#pageContent").html(data);
          $('.carousel').carousel();
        })
      } else if (partial == "seeCatsPage") { //ajax models.html
        //paste the getJSON here; change the append id; change the file name
        $.getJSON("jsonDatabase/finalCats.json", function(data) {

            var html = "";

            $.each(data, function(index, item) {
                html += '<div class="col-xs-12 col-md-4 jsonCat">' +
                  '<div class="catName">' + item.name + '</div>' +
                  '<div class="catType"><small>type </small>' + item.type + '</div>' +
                  '<div class="catGender"><small>gender </small>' + item.gender + '</div>' +
                  '<img class="catImage" src="' + item.image + '"/>' +
                  //deleted commentsContainer
                  '<div class="panel panel-default">' + //added
                  '<div class="panel-heading">Renter Comments</div>'; //added
                $.each(item.comments, function(ind, i) {
                    html += '<div class="panel-body">' + //added
                      '<div class="renterName"><small>' + i.username + '</small></div>' +
                      '<div class="renterComment">' + i.comment + '</div>' +
                      '<div class="renterStars">';

                    for (var j = 1; j <= 5; j++) {

                      if (j <= i.stars) {
                        html += '<img src="images/fullStar.png"/>';
                      } else {
                        html += '<img src="images/emptyStar.png"/>';
                      }
                    }
                    html += '</div>' + //end stars
                      '</div>'; //panel body
                  }) //each comment

                html += '</div>' + //panel
                  '</div>'; //col-md-4
              }) //each cat

            $("#pageContent").html(html);

          }) //getJSON
      } else if (partial == "orderPage") { //ajax get order.html
        $.get("partials/order2.html", function(data) {
            $("#pageContent").html(data);
            $('#startRentDate, #endRentDate').datepicker({});


            //activate the datepicker
            $('#startRentDate, #endRentDate').datepicker({});

            //user clicks submit
            $("#submitButton").on("click", function() {

              //add the error class to div of empty inputs
                //get all empty inputs and selects
                //add error class to div container
              $("input, select").filter(function() {
                return !this.value;
              }).closest("div").addClass("has-error")

              //remove the error class from all filled inputs
              $("input, select").filter(function() {
                return this.value;
              }).closest("div").removeClass("has-error");

              //get all errors
              var hasError = $(".has-error");


              //if no errors
              if (hasError.length < 1) {
                sendConfirmation();
              }

            })

          }) //get
      }
      $("#pageContent").fadeIn();

    }

    //do when order valid
    function sendConfirmation() {

      //we will store all our order information here
      var order = {};

      //get all input values
      var inputs = $("input, select");

      //put all the input values into object ; this each can be done with jquery objects
      inputs.each(function() {
        var id = $(this).attr("id");
        order[id] = $(this).val();
      })

      //act as if sending to databse
      alert("send to databse: " + JSON.stringify(order));

      //show success message
      $("#successMsg").html("Order Received!<br/><br/>" +
        order.catSelect + " will be delivered on " + order.startRentDate + "<img id='paws' src='images/catPaws.jpeg'>");
    }//end sendConfirmation

    //begin the program, get the homepage
    getPartial("homePage");

  }) //ready
