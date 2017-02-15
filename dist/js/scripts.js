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

  // Ajax for projects
  $('.project--link').click(function(e) {
    e.preventDefault();

    var href = $.attr(this, 'href');

    $('#project-full').load(href + 'index.html', function() {
      // Gallery slideshow
      $('.project--gallery').bxSlider({
        controls: false,
        mode: 'fade',
        video: true
      });

      // Close button
      var close = $('<button>', {
        text: '✕',
        'class': ['project--full--close']
      });

      $('.project--full').prepend(close);

      $('html,body').animate({
        scrollTop: $('#project-full').offset().top
      }, 500);

      $('.project--full--close').click(function(e) {
        e.preventDefault();

        $('#project-full').slideUp({
          duration: 500,
          complete: function() {
            $(this)
              .html('')
              .attr('style', '');
          }
        });
      });
    });
  });
})(document, window, jQuery);
