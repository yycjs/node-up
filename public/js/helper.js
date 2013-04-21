(function($, undefined) {
  $.fn.mustache = function(src, data) {
    var scriptTag = $('#' + src),
      template = scriptTag.length ? scriptTag.text() : src,
      content = Mustache.render(template, data || {});

    return this.html(content);
  };
})(jQuery);