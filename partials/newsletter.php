<!-- Define stuff  -->

    <a class="toggle-meta plus" href="javascript:void(0);">Newsletter</a>
    <ul class="inner">
      <li>
        <div class="input">
          <input type="text" name="newsletter" placeholder="Skriv upp din mejladress och tryck enter för att prenumerera" class="input-field"></input><button class="input-button">↲</button>
        </div>
      </li>
      <li>
      <a class="toggle-meta plus" href="javascript:void(0);">Tidigare nyhetsbrev</a>

      <?php if( have_rows('newsletter', 'option') ): ?>

        <ul class="inner">

          <?php while( have_rows('newsletter', 'option') ) : the_row(); ?>

            <?php
            $attachment = get_sub_field('newsletter-pdf');
            $url = $attachment['url'];
            $title = $attachment['title'];
            $attachment_id = $attachment['id'];
            $date = get_the_date('d.m.y', $attachment_id);
            $content = get_sub_field('newsletter-pdf');
            ?>

            <li>

              <a target="_blank" href="<?php echo $url ?>" class="toggle-download download">

                <table class="listview"><th><?php echo $date ?></th><th><?php echo $title ?></th></table>

              </a>

            </li>

          <?php endwhile; ?>

        </ul>

      <?php endif; ?>

    </ul>
