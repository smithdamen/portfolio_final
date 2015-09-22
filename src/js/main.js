$(document).ready(function(){
  
  //fitText script for title sections
  $(".fitText").fitText(1.2, {
    minFontSize: '20px',
    maxFontSize: '40px'
  });
  
  $(".fitText-main").fitText(1.2, {
    minFontSize: '20px',
    maxFontSize: '60px'
  });
  
  $('.mix-container').mixItUp();
  
  //Waypoints
  function onScrollInit( items, trigger ) {
    items.each( function() {
      var osElement = $(this),
        osAnimationClass = osElement.attr('data-os-animation'),
        osAnimationDelay = osElement.attr('data-os-animation-delay');
 
      osElement.css({
        '-webkit-animation-delay':  osAnimationDelay,
        '-moz-animation-delay':     osAnimationDelay,
        'animation-delay':          osAnimationDelay
      });
 
      var osTrigger = ( trigger ) ? trigger : osElement;
 
      osTrigger.waypoint(function() {
        osElement.addClass('animated').addClass(osAnimationClass);
      },{
        triggerOnce: true,
        offset: '90%'
      });
    });
  }
  
  onScrollInit( $('.os-animation') );
  
});