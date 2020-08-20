$(function() {
  $('.cross').click(function() {
    $(this)
      .parents('.left-white-box')
      .remove();


    });


$('.cross').click(function(){

  if($('#box-parent').children().length < 1) {



      $('#left-column').append('<span>Список пуст...</span>');

      $('#left-h2')
      .css('margin-bottom', '74px');
      $('span')
      .css({
        'font-size': '16px',
        'color': '#8993ad'
      });


  }
})









    /*
    $('.cross').each(function(){

      if($(this).children(none) ){
        $(this).css('');


      }


    }));



$('.cross').first().click(function(){

  $('#left-column').append('<span>Список пуст...</span>');

  $('#left-h2')
  .css('margin-bottom', '74px');
  $('span')
  .css({
    'font-size': '16px',
    'color': '#8993ad'
  });

});*/




});
