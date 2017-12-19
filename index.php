<!DOCTYPE html>
<html>

<?php get_template_part('partials/head'); ?>

<body>


  <div data-role="page" class="ui-content-left">
    <div class="container">

    <!-- Get header -->

      <?php get_template_part('partials/header'); ?>

    <ul class="accordion">

    <!-- Get in touch -->

    <li>
      <?php get_template_part('partials/contact'); ?>
    </li>

    <!-- Newsletter -->

    <li>
      <?php get_template_part('partials/newsletter'); ?>
    </li>

  </ul>

  <!-- Search -->

  <div class="headline search-headline" id="scrollToFixed">Search</div>

  <ul class="accordion">
    <li>
      <input type="text" id="searchFilter" placeholder="Type your search here..." autofocus>
    </li>
    <ul class="searchResults">
    </ul>
  </ul>

  <!-- Index -->

  <div class="headline" id="scrollToFixed">A to Ö</div>

    <?php get_template_part('partials/loop'); ?>

<div class="footer type-s">
  <div class="col-50">
    Second-hand bookshop, specialized in hard-to-find titles about typography, graphic design, calligraphy, bibliography, book binding, papermaking, ex libris, history of the book & printing, illustration & illustrators and more.
    Do not hesitate to ask for full descriptions in English. Digital images available upon request. Welcome to send your wantlists.<br>
    <br>
    CONTACT<br>
    Phone 08-550 304 10<br>
    Mobile 070-773 46 00<br>
    Email <a href="">info@antikvariatmorris.se</a><br>
    <br>
    ADDRESS<br>
    Antikvariat Morris<br>
    Badhusgatan 16<br>
    151 73 Södertälje<br>
    Stockholm<br>
    <br>
    By appointment only<br>
</div>
<div class="col-50">
  NEWSLETTERS<br>
  Register me as recipient of the newsletter <br>
  <br>
  IMPRINT<br>
  Design Research and Development and New Management.<br>
  Programming New Management<br>
  ©2017 Antikvariat Morris<br>
  <br>
  COOKIES<br>
  We have placed cookies on your device to help make this website better.
  You can use this tool to change your cookie settings. Otherwise, we’ll assume you’re OK to continue.
</div>
</div>

  </div>

  </div>

    <div class="ui-content-right">

      <!-- <div class="cart cart-open cart-full">Your cart contains 1 item, total £9.00     </div> -->

      <!-- Item image -->
      <div id="imagearea"></div>

      <!-- Slideshow -->
      <?php get_template_part('partials/slideshow'); ?>

    </div>

</body>
</html>
