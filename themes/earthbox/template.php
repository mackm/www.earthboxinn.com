<?php 

function earthbox_preprocess_html(&$variables){
	
  drupal_add_js("http://www.webrezpro.com/Javascript/embed_bookingrequest.js?hotel_id=584&date_format=mm-dd-yy&format=portrait&max_adults=40&max_child_age=4&max_children=40&num_adults=2&access_code=Password");
  
 /*   drupal_add_js("http://www.webrezpro.com/Javascript/embed_bookingrequest.js?hotel_id=584&date_format=mm-dd-yy&font_style=font-size:10pt&format=portrait&max_adults=40&max_child_age=12&max_children=40&num_adults=2&access_code=on"); 
 */
  
}

function earthbox_imagecache($presetname, $path, $alt = '', $title = '', $attributes = NULL, $getsize = TRUE) {
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