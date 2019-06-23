/* nc_main.js */
(function($){
  var ww = $(window).width(); 
    // console.log(winw);
  var mob = 480;
  var tab = 768;
  var pc = 1366;
  var device; 
 
  var div = function(ww){
    if(ww <= mob){device = "mob"}
    else if(mob < ww && tab >= ww){device = "tab"}
    else if(tab < ww && pc >= ww){device = "pc"}
    else {device = "pcfull"}
  };
var before = div(ww);
// reload========================
$(window).on('resize', function () {
  var nw = $(window).width();
  var nowD = div(nw);
  if(before !== nowD){
  location.reload();
  }; }); 


})(jQuery);