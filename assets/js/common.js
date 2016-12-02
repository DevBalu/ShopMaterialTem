/*Set attribute dropdown*/
(function() {
  var drop = $(".drop");
  var dropactive = $(".dropactive");

  for (var i = 0; i < drop.length; i++) {
    $(drop[i]).attr("id", "dropdown" + i);
    $(dropactive[i]).attr("data-activates", "dropdown" + i);
  }
})();
/*set attribute FILTER*/
(function() {
  var ff = $(".field-filter");
  var lff = $(".lable-field-filter");

  for (var i = 0; i < ff.length; i++) {
    $(ff[i]).attr("id", "test" + i);
    $(lff[i]).attr("for", "test" + i);
  }
})();

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
      gutter: 10, // Spacing from edge
      belowOrigin: true, // Displays dropdown below the button
      alignment: 'right' // Displays dropdown with edge aligned to the left of button
    }
  );
 /*END navbar*/
 /*Visualization Categori Content*/  
  $('.collapsible').collapsible({
      accordion: false, // A setting that changes the collapsible behavior to expandable instead of the default accordion style
      onOpen: function(el) { alert('Open'); }, // Callback for Collapsible open
      onClose: function(el) { alert('Closed'); } // Callback for Collapsible close
    }
  );
  /**/
  $('.parallax').parallax();
  /**/
  $('.materialboxed').materialbox();
/*END Visualization Categori Content*/
/*---------------------------------Price input RANGE*/
/*--------------------------------END Price input RANGE*/
});   