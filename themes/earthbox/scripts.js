function EmbedBookingRequest_OnLoad2()
	{
	(function($) {
		$("#date_from").datepicker({dateFormat:'mm-dd-yy',beforeShowDay: checkDate});
		})(jQuery);
								    
	}



(function ($) {

  Drupal.behaviors.webres = {

    attach :  function (context, settings) {
		EmbedBookingRequest_OnLoad2() 
	}
  }

})(jQuery);