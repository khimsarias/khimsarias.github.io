$(window).scroll(function() {
      if ($(this).scrollTop() > 1){
      $("HEADER").addClass('sticky');
      }
      else{
      $("HEADER").removeClass('sticky');
      }});
