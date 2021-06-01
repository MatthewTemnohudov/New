$(document).ready(function() {

  //Tabs
  $('.tabs-wrap').each(function() {
    let ths = $(this);
    ths.find('.tabs__content').not(':first').hide();
    ths.find('.tabs__btn').click(function() {
      ths.find('.tabs__btn').removeClass('active').eq($(this).index()).addClass('active');
      ths.find('.tabs__content').hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass('active');
  });

  $('.tabs__item').on('click', function() {
    $('.tabs__label', this).addClass('active');
	});

  $('.rotate-wrap').on('click', function() {
    $(this).toggleClass('active');
    $('.tabs__plate', this).addClass('active');
    $('.tabs__label', this).addClass('active');
	});

  $('.visible-table__btn').on('click', function() {
		$('.table__wrap').slideToggle(500);
	});

  //DatePicker
  $(function(){
    $(".datepicker").datepicker();
  });

});