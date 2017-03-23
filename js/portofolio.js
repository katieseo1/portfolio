(function($) {
  'use strict'
  $('.page-scroll a').bind('click', function(event) {
    var $anchor = $(this)
    $('html, body').stop().animate({
      scrollTop: ($($anchor.attr('href')).offset().top - 50)
    }, 1250, 'easeInOutExpo')
    event.preventDefault()
  })
  $('body').scrollspy({
    target: '.navbar-fixed-top',
    offset: 51
  })
  $('#mainNav').affix({
    offset: {
      top: 100
    }
  })
})(jQuery)
