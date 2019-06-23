(function($){
var winW = $(window).width();
var tab = 768;
var pc = 1366;

if(tab < winW && 1367 > winW){
  var gnb      = $('.main_gnb');
  var gnbTitle = gnb.children('a');
  var gnbUl    = gnb.children('ul');
  var gnbLi = gnbUl.children('li');

  gnbTitle.on('mouseenter',function(e){
      e.preventDefault();
    gnbUl.stop().slideDown();
  });


$('#headBox').on('mouseleave',function(e) {
  e.preventDefault();
  gnbUl.stop().slideUp();
});
//====================card
  $('.card').on('mouseenter',function(e){
      e.preventDefault();
    $(this).stop().animate({marginTop: '0px'},300);
  });


$('.card').on('mouseleave',function(e) {
  e.preventDefault();
  $(this).stop().animate({marginTop: '1.875rem'},300);
});
// ===============================================================
}//if end


})(jQuery);




// if(winW > pc){
//   console.log('pcFull');

// 1366px end=============================================








