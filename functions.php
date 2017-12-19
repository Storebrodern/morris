<?php

  // Declare WooCommerce support

  function woocommerce_support() {
      add_theme_support( 'woocommerce' );
  }

  add_action( 'after_setup_theme', 'woocommerce_support' );

  if( function_exists('acf_add_options_page') ) {

	acf_add_options_page('Newsletter');
  acf_add_options_page('Slideshow');

  }

?>
