$(document).ready(function() {
  $("#madlib form").submit(function() {
    event.preventDefault();
    $("form label").each(function(x){
      var xId = $(this).attr('for');
      $("."+xId).text($(this).siblings('input').val());
    });
    $("#story").show();
  });

  $("#self-letter form").submit(function() {
    var username = $('#user-name').val();

    $('.user-name-output').text(username);
    $('#user-name').fadeOut();
    $("#response-letter").slideDown();

    event.preventDefault();
  });
});
