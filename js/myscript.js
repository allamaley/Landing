$(document).ready(function(){
	//fading in the first part
	$('.paral').fadeIn(1000);
// Add soft angle-down scroll
  $("#angle-down").on('click', function(event) {
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
//end soft  angle-down scroll
// Add soft  angle-up scroll
  $("#angle-up").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 700, function(){
        window.location.hash = hash;
      });
    } // End if
  });
//end soft scroll

// Add soft anchor links scroll
var anchors = [$("#a-home"), $("#a-about"), $("#a-news"),$("#a-section4"),$("#a-section5"),$("#a-section6"),$("#a-contacts")];
for ( var i = 0, l = anchors.length; i < l; i++ ) {
	anchors[i].on('click', function(event) {
		if (this.hash !== "") {
			event.preventDefault();
			var hash = this.hash;
			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 700, function(){
				window.location.hash = hash;
			});
		} // End if
	});
};

//end soft scroll

//scrollspy nav
$('body').scrollspy({ target: '#nav' })
//end of scrollspy nav
//Switch fa icon arrow in accordion
function toggleIcon(e) {
        $(e.target)
            .prev('.card-header')
            .find("i")
            .toggleClass('fa-rotate-180');
    }
    $('#accordion').on('hidden.bs.collapse', toggleIcon);
    $('#accordion').on('shown.bs.collapse', toggleIcon);
//end of switching

});
