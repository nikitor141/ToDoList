$(function() {






  function span_css() {
    $('#left-h2')
      .css('margin-bottom', '74px');
    $('span')
      .css({
        'font-size': '16px',
        'color': '#8993ad'
      });
  }



  $('#right-button').click(function() {



    if ($('#box-parent').children().length < 3) {
      $('#box-parent').append('<div class="left-white-box"><div class="left-top-box"><div class="left-white-content"><h3 class="right-h3  left-h3"></h3><button class="cross"></button><button class="arrow"></button></div></div><div class="left-bottom-box"><div class="left-white-content"><p class="left-disc"></p></div></div></div>');





      var get_right_name = $('#right-name').val();
      $('.left-h3').last().html(get_right_name);

      var get_right_disc = $('#right-disc').val();
      $('.left-disc').last().html(get_right_disc);
    }

    $('#right-name , #right-disc').val('');


    $('#left-h2').css('margin-bottom', '29px');
    $('span').remove();
    if ($('#right-name', '#right-disc').val('')) {

    }
  });




  $('body').on("click", '.cross', function() {
    $(this)
      .parents('.left-white-box')
      .remove();
    if ($('#box-parent').children().length < 1) {
      $('#left-column').append('<span>Список пуст...</span>');
      span_css();
    }
  });








$('html').on('click', '.arrow' , function(){

  if($(this).parents('.left-white-box').children('.left-bottom-box').is(':visible')){

$(this).css('transform', 'rotate(90deg)');

    $(this).parents('.left-white-box').animate({
      'min-height': '50px',
      'height': '50px'
    }, 400);
    $(this).parents('.left-white-box').children('.left-bottom-box').fadeOut();
  }
else{
  $(this).css('transform', 'rotate(0deg)');

  $(this).parents('.left-white-box').animate({
    'min-height': '136px',
    'height': '136px'
  }, 400);
  $(this).parents('.left-white-box').children('.left-bottom-box').fadeIn(400);
}

});



  if ($('#box-parent').children().length < 1) {
    $('#left-column').append('<span>Список пуст...</span>');
    span_css();
  }









});
