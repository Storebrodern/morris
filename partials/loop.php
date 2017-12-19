<!-- Define stuff  -->

  <?php
    $args = array(
       'post_type' => 'product',
       'post_status' => 'publish',
       'posts_per_page' => -1,
       'caller_get_posts'=> 1,
       'order'=> 'ASC',
       'orderby' => 'title'
    );
  ?>

  <?php query_posts($args); ?>
  <?php $original_posts = array(); ?>
  <?php if (have_posts()) : $current_letter = ''; ?>
  <?php while (have_posts()) : the_post(); ?>

  <?php

    $terms = get_the_terms($product->id, 'pa_bookauthor');
    $post_content = get_the_content($product->id);
    $name = $terms[0]->name;

    //echo 'AUTHOR: ' . $name;

    array_push($original_posts, array(
      'post' =>  get_post(),
      'author' => $name
    ));

    endwhile; endif;

    $sort = array();

    foreach ($original_posts as $post => $row) {
      $sort[$post] = $row['author'];
    }

    array_multisort($sort, SORT_ASC, $original_posts);

  ?>

<ul class="accordion">

<!-- Print stuff  -->

<!-- Ugly solution, fix later  -->

<ul>
<li>

<?php foreach ($original_posts as $post) : ?>

  <?php
    $title_letter = strtoupper(substr($post['author'],0,1));
    if ($title_letter != $current_letter) {
      echo '</ul></li><li><a class="toggle plus" href="javascript:void(0);">' . $title_letter . '</a><ul class="inner titles" id="myURL">';
      $current_letter = $title_letter;
    }
  ?>

  <?php
    $stylesheet_directory = get_stylesheet_directory_uri();
    $id = $post['post']->ID;
    $price = get_post_meta($id, '_regular_price', true);
    $product_sku = get_post_meta( $id, '_sku', true );
    echo '<li><a href="#" class="toggle plus" data-rel="' . $stylesheet_directory . '/images/item.jpg" data-meta="' . $post['author'] . " - ".  get_the_title($id) . '"><div class="item"><div class="item-author">' . $post['author'] . '</div><div class="item-title">' . get_the_title($id) . '</div></div><div class="item-price">' . $price . '</div></a>';
    echo '<div class="inner description-item"><div class="imagearea-mobile"></div><div class="item-description"><p>' . get_post_field('post_content',$id) . '</p><p>Article: ' . $product_sku . '</p><div class="button">Order</div></div></div></li>';
  ?>

<?php endforeach; ?>

<!-- Close accordion -->

</ul>

</li>
</ul>
