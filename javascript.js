setTimeout(function() {
  $('.snake').css('margin-left', $(window).width()/2 - 2800 + 'px');
  setTimeout(function() {
    $('.headTop').css('transform', 'rotate(-30deg)');
    $('.headBottom').css('transform', 'rotate(30deg)');
  },100);

  setTimeout(function() {
    $('.headTop').css('transition', '0.25s');
    $('.headBottom').css('transition', '0.25s');
    $('.headTop').css('transform', 'rotate(0deg)');
    $('.headBottom').css('transform', 'rotate(0deg)');
  },4500);
  setTimeout(function() {
    $('.text').css('display', 'none');
  }, 4750);
  setTimeout(function() {
    $('.snake').css('transition', '3s ease-in');
    $('.snake').css('margin-left', $(window).width() * 2);
    $('.headTop').css('transition', '0.1s');
    $('.headBottom').css('transition', '0.1s');
  }, 6000)
  setTimeout(function() {
    $('.heart').fadeIn(5000);
  }, 10000)
}, 3500) // change later

$('body').click(function(){alert('lov u')});
$(window).focus(function() {
   document.title = "Happy Birthday!"
});

$(window).blur(function() {
  document.title = "Love you"
});
