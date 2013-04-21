(function($) {
  // $('loginbutton').login()
  $.fn.login = function(headerText) {
    var validate = function() {
        return false;
      }

    this.click(function() {
      var modal = $('#myModal'),
          form = modal.find('form');

      modal.mustache('login', {
        header: headerText
      }).modal('show');

      modal.on('click', 'a.toggleSignup', function() {
        modal.find('.signup').toggle('slide');
      });

      modal.find('button.submit').click(function() {
        if(validate(form)) {
          // ?
        }
      });
    });

    return this;
  }
})(jQuery);