<?php

/**
 *****    Earthbox2 Responsive Theme *****
 * 
 * @file
 * Default theme implementation to display a single Drupal page.
 *
 * Available variables:
 *
 * General utility variables:
 * - $base_path: The base URL path of the Drupal installation. At the very
 *   least, this will always default to /.
 * - $directory: The directory the template is located in, e.g. modules/system
 *   or themes/bartik.
 * - $is_front: TRUE if the current page is the front page.
 * - $logged_in: TRUE if the user is registered and signed in.
 * - $is_admin: TRUE if the user has permission to access administration pages.
 *
 * Site identity:
 * - $front_page: The URL of the front page. Use this instead of $base_path,
 *   when linking to the front page. This includes the language domain or
 *   prefix.
 * - $logo: The path to the logo image, as defined in theme configuration.
 * - $site_name: The name of the site, empty when display has been disabled
 *   in theme settings.
 * - $site_slogan: The slogan of the site, empty when display has been disabled
 *   in theme settings.
 *
 * Navigation:
 * - $main_menu (array): An array containing the Main menu links for the
 *   site, if they have been configured.
 * - $secondary_menu (array): An array containing the Secondary menu links for
 *   the site, if they have been configured.
 * - $breadcrumb: The breadcrumb trail for the current page.
 *
 * Page content (in order of occurrence in the default page.tpl.php):
 * - $title_prefix (array): An array containing additional output populated by
 *   modules, intended to be displayed in front of the main title tag that
 *   appears in the template.
 * - $title: The page title, for use in the actual HTML content.
 * - $title_suffix (array): An array containing additional output populated by
 *   modules, intended to be displayed after the main title tag that appears in
 *   the template.
 * - $messages: HTML for status and error messages. Should be displayed
 *   prominently.
 * - $tabs (array): Tabs linking to any sub-pages beneath the current page
 *   (e.g., the view and edit tabs when displaying a node).
 * - $action_links (array): Actions local to the page, such as 'Add menu' on the
 *   menu administration interface.
 * - $feed_icons: A string of all feed icons for the current page.
 * - $node: The node object, if there is an automatically-loaded node
 *   associated with the page, and the node ID is the second argument
 *   in the page's path (e.g. node/12345 and node/12345/revisions, but not
 *   comment/reply/12345).
 *
 * Regions:
 * - $page['help']: Dynamic help text, mostly for admin pages.
 * - $page['highlighted']: Items for the highlighted content region.
 * - $page['content']: The main content of the current page.
 * - $page['sidebar_first']: Items for the first sidebar.
 * - $page['sidebar_second']: Items for the second sidebar.
 * - $page['header']: Items for the header region.
 * - $page['footer']: Items for the footer region.
 *
 * @see template_preprocess()
 * @see template_preprocess_page()
 * @see template_process()
 */
?>
  <?php /* Mack - 2/22/12 -Added page color class to wrapper div  */ ?>
  
  
  <?php
    if ((!empty($node)) && (!empty($node->field_color['und'][0]['tid']))) {
			$colorid = $node->field_color['und'][0]['tid'];
			switch($colorid) {
				case 5: $color = 'blue'; break;
				case 1: $color = 'grass'; break;
				case 2: $color = 'orange';break;
				case 3: $color = 'papaya'; break;
				case 4: $color = 'papaya'; break;
			}
			print('<div id="page-wrapper" class="'.$color.'_page">');
	}
	else 
	    print('<div id="page-wrapper">');
  ?>

    <div id="header"><div class="section clearfix">

      <!-- 
      Colin added Code for logo below 2012 02 01
      Added 
      Mack 2014 02 12 - added to header for mobile - BUGBUG clean these both up
      --> 
      
      <div id="logo-top"> 
      <a href="/">
      <?php print('<img src="'.file_create_url(file_build_uri('/images/eb-combi.jpg')).'">'); ?>
      </a>
      </div>
        <!--
        end logo code
        -->
        <a class="toggler toggler-collapsed" href="#">Main Menu</a>

      <?php if ($logo): ?>
        <a href="<?php print $front_page; ?>" title="<?php print t('Home'); ?>" rel="home" id="logo">
          <img src="<?php print $logo; ?>" alt="<?php print t('Home'); ?>" />
        </a>
      <?php endif; ?>

      <?php if ($site_name || $site_slogan): ?>
        <div id="name-and-slogan">
          <?php if ($site_name): ?>
            <?php if ($title): ?>
              <div id="site-name"><strong>
                <a href="<?php print $front_page; ?>" title="<?php print t('Home'); ?>" rel="home"><span><?php print $site_name; ?></span></a>
              </strong></div>
            <?php else: /* Use h1 when the content title is empty */ ?>
              <h1 id="site-name">
                <a href="<?php print $front_page; ?>" title="<?php print t('Home'); ?>" rel="home"><span><?php print $site_name; ?></span></a>
              </h1>
            <?php endif; ?>
          <?php endif; ?>

          <?php if ($site_slogan): ?>
            <div id="site-slogan"><?php print $site_slogan; ?></div>
          <?php endif; ?>
        </div> <!-- /#name-and-slogan -->
      <?php endif; ?>

      <?php print render($page['header']); ?>
      <div id='site-menu'>
        <?php // print render($combined_menu)?>
      </div>
      <?php print render($toggle_button)?>

    </div></div> <!-- /.section, /#header -->
    <div id="photo">
    <img id="photo-transparency" src="/sites/www.earthboxinn.com/themes/earthbox2/images/eb2-trans.gif" />
    <?php print render($page['photo']);?>
    </div><!-- /#photo -->

    <?php if ($main_menu || $secondary_menu): ?>
      <div id="navigation"><div class="section">
        <?php print theme('links__system_main_menu', array('links' => $main_menu, 'attributes' => array('id' => 'main-menu', 'class' => array('links', 'inline', 'clearfix')), 'heading' => t('Main menu'))); ?>
        <?php print theme('links__system_secondary_menu', array('links' => $secondary_menu, 'attributes' => array('id' => 'secondary-menu', 'class' => array('links', 'inline', 'clearfix')), 'heading' => t('Secondary menu'))); ?>
      </div></div> <!-- /.section, /#navigation -->
    <?php endif; ?>
    
    <div id="drop-down-menu">
    <?php print render($variables['combined-menu']); ?>
    <?php $lh_secondary_menu = render($page['highlighted']['menu_block_2']); ?>
    <?php print $lh_secondary_menu; ?>
    </div>

    <?php print $messages; ?>

    <div id="main-wrapper"><div id="main" class="clearfix">
      <?php if ($page['sidebar_first']): ?>
      <div id="sidebar-first" class="column sidebar">
      <!-- 
      Colin added Code for logo below 2012 02 01
      Added 
      --> 
        <div id="logo"> 

      <a href="/">
      <?php print('<img class="logo-left" src="'.file_create_url(file_build_uri('/images/ebi-left.jpg')).'">'); ?>
      <?php print('<img class="logo-right" style="position:relative; top:11px; left:-5px" src="'.file_create_url(file_build_uri('/images/ebi-right.jpg')).'">'); ?>
      </a>
      </div>
        <!--
        end logo code
        -->
        
        <div class="section">
          <?php print render($page['sidebar_first']); ?>
        </div></div> <!-- /.section, /#sidebar-first -->
      <?php endif; ?>

      <div id="content" class="column"><div class="section">
        <?php if ($page['highlighted']): ?><div id="highlighted"><?php print render($page['highlighted']); print $lh_secondary_menu; ?></div><?php endif; ?>
        <a id="main-content"></a>
        <?php print render($title_prefix); ?>
        <?php if ($title): ?><h1 class="title" id="page-title"><?php print $title; ?></h1><?php endif; ?>
        <?php print render($title_suffix); ?>
        <?php if ($tabs): ?><div class="tabs"><?php print render($tabs); ?></div><?php endif; ?>
        <?php print render($page['help']); ?>
        <?php if ($action_links): ?><ul class="action-links"><?php print render($action_links); ?></ul><?php endif; ?>
        <?php print render($page['content']); ?>
        <?php print $feed_icons; ?>
      </div></div> <!-- /.section, /#content -->


    </div></div> <!-- /#main, /#main-wrapper -->

    <div id="footer"><div class="section">
      <?php print render($page['footer']); ?>
      <?php print $messages ?>
    </div></div> <!-- /.section, /#footer -->

  </div></div> <!-- /#page, /#page-wrapper -->
