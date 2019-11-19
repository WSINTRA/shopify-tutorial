var resizePopup = function(){$('.ui.popup').css('max-height', $(window).height());};

$(window).resize(function(e){
    resizePopup();
});





$('.menu .browse').popup({
    inline     : true,
    hoverable  : true,
    position   : 'bottom left',
    lastResort: 'bottom left',
    onShow: function(){
            resizePopup();
        },
    delay: {
      show: 300,
      hide: 800
    }
  })