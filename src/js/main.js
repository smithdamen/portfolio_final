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
  
  
  //WAYPOINTS
  var animationMainName="animated fadeInUp";
    
  $('#main-title').waypoint(function() {
    $('#main-title').addClass(animationMainName);
  });
    
  var animationName="animated fadeInRight";
    
  $('#about-title').waypoint(function() {
    $('#about-title').addClass(animationName);
  } , { offset : '70%' });
    
  $('#portfolio-title').waypoint(function() {
    $('#portfolio-title').addClass(animationName);
  } , { offset : '70%' });
    
  $('#contact-title').waypoint(function() {
    $('#contact-title').addClass(animationName);
  } , { offset : '70%' });
  
  //Owl-Carousel
 
  $("#owl-example").owlCarousel({
 
      autoPlay: 3000, //Set AutoPlay to 3 seconds
 
      items : 4,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3]
 
  });

});

