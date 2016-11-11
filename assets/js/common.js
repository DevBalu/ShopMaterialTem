$(document).ready(function(){
  /*SlideshowNav*/
	$('.slider').slider({
		full_width: true,
		height: 800,
		indicators: false
	});
  /*Navbar*/
	$('.dropdown-button').dropdown({
      inDuration: 3,
      outDuration: 225,
      constrain_width: false, // Does not change width of dropdown to that of the activator
      hover: true, // Activate on hover
      gutter: 0, // Spacing from edge
      belowOrigin: false, // Displays dropdown below the button
      alignment: 'right' // Displays dropdown with edge aligned to the left of button
    }
  );
   /*Visualization Categori Content*/
  $('.collapsible').collapsible();
  /**/
  $('.parallax').parallax();
  /**/
  $('.materialboxed').materialbox();
});   