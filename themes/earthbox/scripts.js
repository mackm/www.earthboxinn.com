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
		  ga('require', 'linker');
          ga('linker:autoLink', ['worldweb.com', 'webrezpro.com', 'webrez.com']);
    }
  }
  
  Drupal.behaviors.gaclick = {
	 attach: function (context, settings) {
     $('#edit-submit', context).click(function () {
			StuffGACookieInForm('main');
      });
    }
	};
  

})(jQuery);