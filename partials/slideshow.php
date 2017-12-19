<?php if( have_rows('slideshow', 'option') ): ?>

  <div class="slick-slider">

    <?php while( have_rows('slideshow', 'option') ) : the_row(); ?>

      <div class="slick-slide" style="background: url(<?php the_sub_field('slideshow-image'); ?>) no-repeat center center; -webkit-background-size: cover; -moz-background-size: cover; -o-background-size: cover; background-size: cover;"></div>

    <?php endwhile; ?>

  </div>

<?php endif; ?>
