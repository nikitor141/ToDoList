$(function() {






  $('#right-button').click(function(){
if($('#box-parent').children().length < 3){
    $('#box-parent').append('<div class="left-white-box"><div class="left-top-box"><div class="left-white-content"><h3 class="right-h3  left-h3"></h3><button class="cross"></button></div></div><div class="left-bottom-box"><div class="left-white-content"><p class="left-disc"></p></div></div></div>')



    var get_right_name = $('#right-name').val();//Получаем данные из input
    $('.left-h3').last().html(get_right_name);//Вставляем значение в тег

    var get_right_disc = $('#right-disc').val();
    $('.left-disc').last().html(get_right_disc);
}

  });

  $('.cross').click(function() {
    $(this)
    .parents('.left-white-box')
    .remove();
  });

  $('.cross').click(function() {

    if ($('#box-parent').children().length < 1) {

      $('#left-column').append('<span>Список пуст...</span>');

      $('#left-h2')
      .css('margin-bottom', '74px');
      $('span')
      .css({
        'font-size': '16px',
        'color': '#8993ad'
      });
    }
  });





});
