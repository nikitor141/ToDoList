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
});

$('#right-button').click(function(){
//get_right_name();
//get_right_disc();
//$('#right-name').val(function get_right_disc())
//let input = document.querySelector('input');
$('#box-parent').append(($(get_right_name()))) ;
});



function get_right_name(){

  alert($('#right-name').val());
};
//function get_right_disc() {

  //$(this).val(($('#right-disc')))
//}





/*$('#right-button').click(function(){
  $('#box-parent').html('<div class="left-white-box">

    ''<div class="left-top-box">
      <div class="left-white-content">
        <h3 class="right-h3  left-h3">Купить лошадь</h3>
        <button class="cross"></button>
      </div>
    </div>

    <div class="left-bottom-box">
      <div class="left-white-content">
        <p class="left-disc">По цене 300 т.р. за штуку </p>
      </div>
    </div>

  </div>')
})*/


});
