


$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });


  $('.btn-team').click(function(){
    $('#abt-team').css('left',"0");
  $('#services').css('opacity',".2") .css("transition","all 1s");
  $('#wWeDo').css('opacity',".2") .css("transition","all 1s");
 });

  $('.heroContent').fadeOut(0);
  $('.heroContent').fadeIn(3000 );


$('nav').fadeOut(0);
  $('nav').fadeIn(1500);


$('.scroll').fadeOut(0);
  $('.scroll').fadeIn(4500);

  window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}


});



