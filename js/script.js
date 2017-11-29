$(document).ready(function() {
  $.ajax({
    method: 'GET',
    url: 'https://jsonplaceholder.typicode.com/photos'
  }).done(function(response) {
    response.splice(0, 100).map(function(photo) {
      var title = '<div class="photo"><h1>' + photo.title + '</h1>';
      var image = '<img src="' + photo.thumbnailUrl + '" alt="photo" /></div>';
      var photo = title + image;

      $('.photos').append(photo)
    }).fail(function(errors) {
      $('.photos').html(errors);
    });
  });
});
