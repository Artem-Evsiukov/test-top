$(document).ready(function () {
  //ajax
  function loadMe() {
    $.get('slider.html', function (data) {
      $('.content').html(data);
    });
    $('.load__btn').hide();
  }

  //kicks things off
  $('.load-js').on('click', '.load__btn', function () {
    //starts load animation
    $(this).find('span').html('');
    $(this).addClass('active');
    //sim load time and run ajax function
    setTimeout(loadMe, 5000);
  });

  //restarts demo
  $('.content').on('click', '.reset', function () {
    $('.content').html('');
    $('.load__btn').removeClass('bar').find('span').html('Начать демонстрацию');
    $('.load__btn').fadeIn();
  });
});
