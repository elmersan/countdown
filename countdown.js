$(document).ready(function () {
  $(".number").countdown("2020/12/24 11:59:59", function (event) {
    $("#days").html(event.strftime("%D"));
    $("#hours").html(event.strftime("%H"));
    $("#minutes").html(event.strftime("%M"));
    $("#seconds").html(event.strftime("%S"));
  });
});
