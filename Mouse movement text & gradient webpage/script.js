$(document).ready(function() {
  
  // Header shadow appears when scrolling
  var stickySidebar = $('.site-header').offset().top;
  $(window).scroll(function() {  
      if ($(window).scrollTop() > stickySidebar) {
          $('.site-header').addClass('site-header--stuck');
      }
      else {
          $('.site-header').removeClass('site-header--stuck');
      }  
  });
  
  // Add movement effect when moving mouse
  var moveForce = 5;
  var elementX = $('.container').width();
  var elementY = $('.container').height();
  var elementLeft = parseFloat($('.container').css('left'));
  var elementTop = parseFloat($('.container').css('top'));
  
  $(document).mousemove(function(e) {
      var moveX = ((e.pageX - elementX/2) / (elementX/2) * -moveForce) + elementLeft;
      var moveY = ((e.pageY - elementY/2) / (elementY/2) * -moveForce) + elementTop;
      $('.container').css('left', moveX+'px');
      $('.container').css('top', moveY+'px');
   });
  
  
  // Mouse over gradient effect
  var gradient = document.querySelector(".gradient");
  var getGradientColors = $('.gradient').css('background-image');
  function onMouseMove(event) {
    var mouseLocation = event.clientX + 'px ' + event.clientY + 'px';
    var replacePositionGradient = getGradientColors.replace('center', mouseLocation);
    var finalGradient = replacePositionGradient.replace('center', '');
    gradient.style.backgroundImage = finalGradient;
  }
  document.addEventListener("mousemove", onMouseMove);
  
});