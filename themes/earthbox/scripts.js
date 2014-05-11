function EmbedBookingRequest_OnLoad2()
	{
	(function($) {
		$("#date_from").datepicker({dateFormat:'mm-dd-yy',beforeShowDay: checkDate});
		})(jQuery);
								    
	}

function StuffGACookieInForm(context)
{   
          (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
          (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
          m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
          })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
          ga('create', 'UA-10083903-1', 'auto', {'allowLinker' : true});
		  ga('require', 'linker');
          ga('linker:autoLink', ['worldweb.com', 'webrezpro.com', 'webrez.com']);
          ga('send', 'pageview');

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
    }
  }
 
  Drupal.behaviors.gaclick = {
	 attach: function (context, settings) {
     $('#edit-submit', context).click(function () {
		ga(function(tracker) {
		window.mmlinkerParam = tracker.get('linkerParam');});
	    jQuery("#gacookie").attr("value",window.mmlinkerParam);	
      });
    }
	};
 

})(jQuery);