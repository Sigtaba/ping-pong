// Back End Logic //


function pingPong(userInput) {
  var solution = [];

  for (var index = 1; index <= userInput; index += 1)
  {
    if (index % 15 == 0) {
      solution.push("<li>" + "<strong>" + "ping-pong" + "</strong>"  + "</li>");
    } else if (index % 3 == 0) {
      solution.push("<li>" + "<strong>" + "ping" + "</strong>"  + "</li>");
    } else if (index % 5 == 0) {
      solution.push("<li>" + "<strong>" + "pong" + "</strong>"  + "</li>");
    } else
      solution.push("<li>" + index + "</li>");
  };
  return solution;
}

// Front End Logic //

$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($("#number").val());
    var result = pingPong(userInput);
    $("#output li").remove();
    $("#output").append(result);
  });
})
