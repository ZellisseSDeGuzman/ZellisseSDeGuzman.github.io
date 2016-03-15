$("#getClients").on("click", function() {

  var url = "http://ZellisseSDeGuzman.github.io/otherProjects/ajaxExamples/jsonDatabase/clients.json"
  $.getJSON(url, function (data){

  //$.getJSON("http://ZellisseSDeGuzman.github.io/otherProjects/ajaxExamples/jsonDatabase/clients.json")

  alert(data);
  console.dir(data);

})//getJSON


})//click
