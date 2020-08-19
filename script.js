$(function() {
  $('.cross')
    .click(function(){
      $(this).toggle().parent().parent().parent().css('background-color', 'red');

    });
});
