$(function () {
  $('#myModal').modal({
    show: false
  });

  $('#loginButton').login('jQuery plugin Hooray!');

  $.getJSON('data.json', function(profiles) {
    $('.container.profiles').mustache('profiles', {
      profiles: profiles
    });
  });


}());