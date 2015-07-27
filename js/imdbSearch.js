$(document).ready(function() {

  $('.movieFinder').on('submit', function(e) {

    e.preventDefault();

    var url = 'http://www.omdbapi.com/?t=' + $('input.movieSearch').val() + '&r=json';

    var template = $('template').html();

    $.get(url, function(info) {
      if (info.Response === 'True') {
        $('.container').html(Mustache.render(template, info));
      }
      else {
        $('.container').text('No Movie Found.');
      }
    }).always(clear());
  });
});




var clear = function() {
  $('input.username').val('');
}
