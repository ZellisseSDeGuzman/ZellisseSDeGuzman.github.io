$(document).ready(function() {

    $.getJSON("jsonDatabase/cat.json", function(data) {

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

    $("#catData").append(html);
  })

})

/*
//one per cat
<div class="col-md-4 cat>
<div class="catName"></div>
<div class="catType"></div>
<div class="catGender"></div>
<img src=""/>

<div class="commentsContainer">
  //one per comment
    <div class="rentersName"></div>
    <div class="rentersComment"></div>
    <div class="rentersStars">
      //5starts, some full - some empty
    </div> //end of starts
</div> //end of comments container
</div> //end cat
*/
