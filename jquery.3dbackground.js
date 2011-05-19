jQuery.fn.parallaxBackground =  function(){
  var args = arguments[0] || {};  
  var dataSource = args.dataSource;
  var pagingStart = args.pagingStart;

  


  var pixelsToMove = 300;
  var numLayers = 3;
  var offsetPix = 0;
  $(window).scroll(function(scrollEvent){
    var scrollPercent = 0;
    if( $(window).scrollLeft() < offsetPix - $(window).width()/2 ){
      scrollPercent = 0;
    }else if( $(window).scrollLeft() < offsetPix + $(window).width()/2 ){
      scrollPercent = -1*($(window).scrollLeft() - offsetPix) / $(document).width();
    }else{
      scrollPercent = -1*(($(window).width()*.5)/ $(document).width());
    }

    //console.log(scrollPercent);

    $('#bg-3').offset( {left: (1/1)*pixelsToMove*scrollPercent + offsetPix} );
    $('#bg-2').offset( {left: (1/2)*pixelsToMove*scrollPercent + offsetPix} );
    $('#bg-1').offset( {left: (1/3)*pixelsToMove*scrollPercent + offsetPix} );
  });//end window.scroll


  return this.each(function() {
    var xdiff = $(this).offset().left - $(window).scrollLeft();
    var theta = Math.atan( xdiff / ( $(this).css('z-index') || 1 ) );
    console.log( 'theta:'+theta );
    console.log( $(this).css('z-index') || 1 );
  });
}
