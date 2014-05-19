<?php 

/* Theme preprocess functions for the Earthbox2 Theme */


function earthbox2_preprocess_html(&$variables){
	
  drupal_add_js("http://www.webrezpro.com/Javascript/embed_bookingrequest.js?hotel_id=584&date_format=mm-dd-yy&format=portrait&max_adults=40&max_child_age=4&max_children=40&num_adults=2&access_code=Password");
  
  /* Let the browser know we are responsive so display us as specified */
  $mobile_viewport = array(
    '#type' => 'html_tag',
    '#tag' => 'meta',
    '#attributes' => array(
      'name' =>  'viewport',
      'content' => 'width=device-width, initial-scale=1.0',
      )
  );
  drupal_add_html_head($mobile_viewport, 'mobile_viewport');
  
}

function earthbox2_imagecache($presetname, $path, $alt = '', $title = '', $attributes = NULL, $getsize = TRUE) {
  // Check is_null() so people can intentionally pass an empty array of
  // to override the defaults completely.
  if (is_null($attributes)) {
    $attributes = array('class' => 'imagecache imagecache-'. $presetname);
  }
  if ($getsize && ($image = image_get_info(imagecache_create_path($presetname, $path)))) {
    $attributes['width'] = $image['width'];
    $attributes['height'] = $image['height'];
  }

  $attributes = drupal_attributes($attributes);
  // here we add drupal_urlencode to make sure the path is encoded.
  $imagecache_url = imagecache_create_url($presetname, drupal_urlencode($path));
  return '<img class="mceItem" title="'. check_plain($title) .'" src="'.$imagecache_url.'" alt="'. check_plain($alt) .'">';
}


/*
 * Arrange the menu so that it can be displayed as an expanding menu on small devices by
 * - Building an expandable top level menu for the home page
 * - Scoping the menu to sub-sections of the site when the user is within those secions (like menu block)
 * - Adding a "Main Menu" link at the bottom of each expandable menu BUGBUG - NEED TO DO YET
 */
function earthbox2_preprocess_page(&$variables) {
  
  $top_menu_tree = menu_tree_all_data('main-menu');
  $left_menu_tree = menu_tree_all_data('menu-front-page-left');
  
  
  $top_tree = menu_tree_output($top_menu_tree);  
  $left_tree = menu_tree_output($left_menu_tree);

  $combined_tree = $left_tree + $top_tree;
  
  /* Add a style to each top-level menu item for pop-up menus */
  foreach($combined_tree as $menu_id => $menu_item) {
    if (is_numeric($menu_id)) {
      $combined_tree[$menu_id]['#attributes']['class'][] = 'main-menu-item';
    }
  }
  /* Put home at the top of the list */
  foreach ($combined_tree as $id => $menuitem) {
    if (is_numeric($id) && $menuitem['#title'] == "Home")
      $new_tree[$id] = $menuitem ;
  }
  
  /* Fill in the rest - yeah I know ther si a single function for this, but I'm on a plane w/o a book */
  foreach ($combined_tree as $id => $menuitem) {
    if (!is_numeric($id) || $menuitem['#title'] != "Home")
      $new_tree[$id] = $menuitem ;
  }
  
  $expand_string = 'Menu';
  
  $toggler = '<a href="#" class="toggler toggler-collapsed">'.$expand_string.'</a>';
  
  $variables['toggle_button'] = $toggler;
  
  $variables['combined-menu'] = $new_tree;
  
  // BUGBUG - Add "Main Menu" to sub-menus
  // BUGBUG - Break sub-menus into separately displayable menu
  // BUGBUG - Add classes to each menu to allow them to be expanded and hidden,
 
}
