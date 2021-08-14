$(document).ready(function () {
  $(".number").countdown("2021/08/15 18:00:00", function (event) {
    $("#days").html(event.strftime("%D"));
    $("#hours").html(event.strftime("%H"));
    $("#minutes").html(event.strftime("%M"));
    $("#seconds").html(event.strftime("%S"));
  });
});
