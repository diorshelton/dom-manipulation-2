$(document).ready(function() {
  $("button").click(function() {
    $("ul.motivation").after('<img src="img/yougotthis.jpg">', '<img src="img/believe.jpg">');
    $("img").click(function() {
      $(this).remove("img");
    });
  });
});