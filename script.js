$(function() {
    $(window).on("scroll", function() {
      if($(window).scrollTop() > 300) {
        $(".sidebar-wrapper").addClass("color");
      } else {
        $(".sidebar-wrapper").removeClass("color");
      }
    });
  });