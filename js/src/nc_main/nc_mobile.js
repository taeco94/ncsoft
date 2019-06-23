// nc_mobile.js
(function($){
var winW = $(window).width();
var mob = 480;
  
  // console.log(winw);

if(winW <= mob ){
    
//gnb_btn============================================
var btn = $('.gnb_btn');
var close_btn = $('.active_btn');
var timed = 1000
var view_menue = btn.siblings('ul');
var gnbBox = $('.gnbBox')

btn.on('click' , function(e){
      e.preventDefault();
      btn.stop().toggleClass('active_btn');

             
});
btn.on('click' , function(e){
    e.preventDefault();
    gnbBox.stop().toggleClass('view_menu');
});

// =========================================


// nc slide banner===================================
    var indi = $('.indi_wrap');
    var indiLi = indi.children('li');
    var num = 0 ;

    var next = $('.media_next');
    var prev = $('.media_prev');  


    var indiClone = indiLi.last().clone(true);
      indiClone.prependTo(indi);
      indiLi = indi.children('li');
    var lilen = indiLi.length;
    //사이즈 재설정
    indi.css({width:lilen * 100 + '%', marginLeft:-100 + '%', position:'rerative', left: -100 + '%' });
    indiLi.css({width: 100 + '%' /lilen + '%'});


      var indiF = function(num){
        indi.stop(true,false).animate({left: num * - 100 + '%'},150);
      };

      indiF(num);
// next btn====================================================
        next.on('click' , function(e){
          e.preventDefault();
          if(num >= 2 ){
            indi.css({left:  100 + '%'});
            num = 0 ; 
            indiF(num);
          }else{
              num += 1;
              indiF(num);}
          // console.log(num);
//next end====================================================
       
        });
//auto slide============================================
          var go;
          var play = function(){
          go = setInterval(function(){
          next.trigger('click');},4000);};
          play();

          var stop = function(){
          stop = clearInterval(go);}
          indi.on({'mouseenter':stop,'mouseleave':play});
          next.on({'mouseenter':stop,'mouseleave':play});
          prev.on({'mouseenter':stop,'mouseleave':play});
//prev btn=============================================          
  prev.on('click' , function(e){
    e.preventDefault();
    num -= 1;
    if(num < 0){
      num = lilen - 2 ;
      indi.animate({left:num *  -100 + '%'},30,function(){
      $(this).css({left:num * -100 + '%'});});
    }else{
      num < 0 ; 
      indiF(num)
    }

  });
//prev end================================

//topbutton js==============================================

var topBtn = $('#bring_btn');
var win = $(window);


var scr = function(){
          var st = win.scrollTop();
          if(st <= 500){topBtn.fadeOut();}else{topBtn.fadeIn();}
        };
        scr();
          
     
        win.on('scroll' ,function(){
        scr();
});
//topbutton end==============================================

// service indi slide===========================================
var service=(function(){

var indi = $('.banner_action') ;
var indiLi = indi.children('li');
var num = 0;


var next = $('.section_next');
var prev = $('.section_prev');

var indiClone = indiLi.last().clone(true);
      indiClone.prependTo(indi);
      indiLi = indi.children('li');
    var lilen = indiLi.length;
    //사이즈 재설정
    indi.css({width:lilen * 100 + '%', marginLeft:-100 + '%', position:'rerative', left: -100 + '%' });
    indiLi.css({width: 100 + '%' /lilen + '%'});


      var indiF = function(num){
        indi.stop(true,false).animate({left: num * - 100 + '%'},150);
      };

      indiF(num);

// next btn====================================================
        next.on('click' , function(e){
          e.preventDefault();
          if(num >= 2 ){
            num = 0 ; 
            indi.css({left: 100 + '%'});
            indiF(num);
            
          }else{
              num += 1;
              indiF(num);}
          // console.log(num);
//next end====================================================
       
        });
//auto slide============================================
          var go;
          var play = function(){
          go = setInterval(function(){
          next.trigger('click');},4000);};
          play();

          var stop = function(){
          stop = clearInterval(go);}
          indi.on({'mouseenter':stop,'mouseleave':play});
          next.on({'mouseenter':stop,'mouseleave':play});
          prev.on({'mouseenter':stop,'mouseleave':play});
//prev btn=============================================          
  prev.on('click' , function(e){
    e.preventDefault();
    num -= 1;
    if(num < 0){
      num = lilen - 2;
      indi.animate({left:num *  -100 + '%'},30,function(){
      $(this).css({left:num * -100 + '%'});});
    }else{
      num < 0 ; 
      indiF(num)
    }

  });
//prev end================================

});//============================service indi slide end
service();








};
//========================if(winW <= mob ) end=================================

// width 480px lock==================
})(jQuery); 