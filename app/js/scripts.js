if (!String.prototype.startsWith) {
  String.prototype.startsWith = function(searchString, position) {
    position = position || 0;
    return this.indexOf(searchString, position) === position;
  };
}

(function(document, window, $) {
  // Animate scrolling of main menu clicks to site sections.
  $('a', '#main-nav').click(function(e){
    var hash = $.attr(this, 'href');

    if (hash.startsWith('#')) {
      e.preventDefault();

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 500);

      if (window.history && window.history.pushState) {
        history.pushState(null, null, hash);
      }
    }
  });

  // Gallery slideshow
  $('.project--gallery').bxSlider({
    controls: false,
    mode: 'fade',
    video: true
  });
})(document, window, jQuery);
