function EmbedBookingRequest_OnLoad2()
	{
	(function($) {
		$("#date_from").datepicker({dateFormat:'mm-dd-yy',beforeShowDay: checkDate});
		})(jQuery);
								    
	}

function StuffGACookieInForm(context)
{   

	// Grab the analytics cooke and stuff it in the hidden form field
	ga(function(tracker) {
		window.mmlinkerParam = tracker.get('linkerParam');
	});
	
	jQuery("#gacookie").attr("value",window.mmlinkerParam);
	// Load the link decorator plugin while we are here 
    ga('require', 'linker');
    ga('linker:autoLink', ['worldweb.com', 'webrezpro.com', 'webrez.com']);
	
}


(function ($) {

  Drupal.behaviors.webres = {
	
    attach :  function (context, settings) {
		EmbedBookingRequest_OnLoad2() 
	}
  }
  
  
  Drupal.behaviors.gaimmediate = {
	  attach: function (context, settings) {
		  StuffGACookieInForm(context);
    }
  }
  

})(jQuery);