





(function ($) {



	var toggleMenu = function(which_menu) {
	

		var ctx_menuitems = $('.main-menu-item');
		var ctx_displayed = ($(ctx_menuitems[0]).css('display') == 'list-item');
/*
		var main_menuitems = $('.main-menu-below');
		var main_displayed = ($(main_menuitems[0]).css('display') == 'list-item');
		
		var secondary_menuitems = $('.secondary-menu-item');
		var islands_menuitems = $('.islands-menu-item');
		
	*/
		
		
		if (which_menu == 'context') {
/*			if (main_displayed) {
				islands_menuitems.toggle('600');
				secondary_menuitems.toggle('600');
				main_menuitems.toggle('fast');

				// switch icon on main togggle
			}
*/
			
			ctx_menuitems.toggle('600');
/*
			if (ctx_displayed) {
				$('.toggler').removeClass('toggler-expanded');
				$('.toggler').addClass('toggler-collapsed');
			}
			else {
				$('.toggler').removeClass('toggler-collapsed');
				$('.toggler').addClass('toggler-expanded');

			}
*/
				
	  }
	
		
		if (which_menu == 'main') {
			if (ctx_displayed) {
				ctx_menuitems.toggle('fast');
				$('.toggler').removeClass('toggler-expanded');
				$('.toggler').addClass('toggler-collapsed');
			  main_menuitems.toggle('600');
				secondary_menuitems.toggle('600');
				islands_menuitems.toggle('600');
		  }
    }
  } 
	
	Drupal.behaviors.earthbox2Expand1 = {
	  attach: function (context, settings) {
      $('.toggler', context).click(function () {
				toggleMenu('context');
				return false;
      });
    }
  };	 	
	/*
	Drupal.behaviors.earthbox2Expand2 = {
		attach: function (context, settings) {
      $('.main-button', context).click(function () {
				toggleMenu('main');
				return false;
      });
    }
	};
	*/


})(jQuery);