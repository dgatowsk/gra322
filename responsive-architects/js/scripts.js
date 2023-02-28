$('.menu-button').click(function(){
    $('nav').toggleClass('open');
}); 
// Intialize Animte on Scroll
AOS.init();

// Initialize Jaralax 
$('.jarallax').jarallax({
    speed: -1,
  });

  // Initialize Rellax
  var rellax = new Rellax('.rellax', {
    speed: -2,
    center: false,
    wrapper: null,
    round: true,
    vertical: true,
    horizontal: false
  });
  