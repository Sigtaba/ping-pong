// // Back End Logic //
//
//
//   for (var i=1; i <= userInput; i++)
//   {
//       if (i % 15 == 0)
//           $("#output").append("<li>" + "ping-pong" + "</li>");
//       else if (i % 3 == 0)
//           $("#output").append("<li>" + "ping" + "</li>");
//       else if (i % 5 == 0)
//           $("#output").append("<li>" + "pong" + "</li>");
//       else
//           $("#output").append("<li>" + i + "</li>");
//   }

// Front End Logic //
$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    ;debugger
    var userInput = parseInt($("#number").val());
    for (var index = 1; index <= userInput; index += 1)
    {
        if (index % 15 == 0) {
            $("#output").append("<li>" + "ping-pong" + "</li>");
        } else if (index % 3 == 0) {
            $("#output").append("<li>" + "ping" + "</li>");
        } else if (index % 5 == 0) {
            $("#output").append("<li>" + "pong" + "</li>");
        } else
            $("#output").append("<li>" + index + "</li>");
        }
  });
})
