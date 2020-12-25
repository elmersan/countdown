$(document).ready(function () {
  $(".number").countdown("2020/12/24 24:00:00", function (event) {
    $("#days").html(event.strftime("%D"));
    $("#hours").html(event.strftime("%H"));
    $("#minutes").html(event.strftime("%M"));
    $("#seconds").html(event.strftime("%S"));
  });
});
