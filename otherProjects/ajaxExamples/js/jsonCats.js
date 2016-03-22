$(document).ready(function() {


  $.getJSON("jsonDatabase/jsonCats.json", function(data) {
    alert("!")
    console.dir(data);
    var html = "";

    $.each(data, function(index, item) {
        html += '<div class="col-md-4 cat">' +
          '<div class="catName">' + item.name + '</div>' +
          '<div class="catType">' + item.type + '</div>' +
          '<div class="catGender">' + item.gender + '</div>' +
          '<img src="' + item.image + '"/>';

        html += '</div>';
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
    <div class="rentersLocation"></div>
    <div class="rentersStarts">
      //5starts, some full - some empty
    </div> //end of starts
</div> //end of comments container
</div> //end cat
*/
