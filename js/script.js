$(document).ready(function() {

  console.log("Document ready");

  // Slick

  $('.slick-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 5000
  });

  // List

  $('.toggle').click(function(e) {
    e.preventDefault();

    var $this = $(this);

    if ($this.next().hasClass('show')) {
      $this.find('.item .item-title').removeClass('full-item-title');
      $this.find('.item .item-author').removeClass('full-item-title');
      $this.next().removeClass('show');
      $this.removeClass('minus');
      $this.addClass('plus');
      $this.next().slideUp(250, 'swing');
    } else {
      $this.parent().parent().find('li .toggle .item .item-title').removeClass('full-item-title');
      $this.parent().parent().find('li .toggle .item .item-author').removeClass('full-item-title');
      $this.find('.item .item-title').addClass('full-item-title');
      $this.find('.item .item-author').addClass('full-item-title');
      $this.parent().parent().find('li .inner').removeClass('show');
      $this.next().toggleClass('show');
      $this.parent().parent().find('li .toggle').removeClass('minus');
      $this.parent().parent().find('li .toggle').addClass('plus');
      $this.addClass('minus');
      $this.removeClass('plus');
      $this.parent().parent().find('li .inner').slideUp(250, 'swing');
      $this.next().slideToggle(250, 'swing');
    }
  });

  // Search function

  var searchTimer;

  $('#searchFilter').on('keyup', function() {

    // Declare variables

    var input = $(this).val().toUpperCase();
    var matches = [];

    clearTimeout(searchTimer);
    if (input.length > 1) {
      $('.search-headline').text('Searching for "' + input + '"');
      searchTimer = setTimeout(function () {
        $('.titles').each(function() {
          var title = $(this).find('.toggle').each(function() {
            var title = $(this).data('meta');
            if (title.toUpperCase().indexOf(input) > -1) {
              matches.push($(this).parent().clone(true));
            }
          })
        });

        $('.searchResults').empty();

        for (var i = 0; i < matches.length; i++) {
          $('.searchResults').append(matches[i]).addClass('show');
        }

        $('.search-headline').text('Found ' + matches.length + ' matches for "' + input + '"');

      }, 1000);
    } else {
      $('.searchResults').empty();
      $('.search-headline').text('Search');
    }

  });

  // List meta

  $('.toggle-meta').click(function(e) {
    e.preventDefault();

    var $this = $(this);

    if ($this.next().hasClass('show')) {
      $this.next().removeClass('show');
      $this.next().slideUp(250, 'swing');
      $this.removeClass('minus');
      $this.addClass('plus');
    } else {
      $this.parent().parent().find('li .inner').removeClass('show');
      $this.parent().parent().find('li .inner').slideUp(250, 'swing');
      $this.next().slideToggle(250, 'swing');
      $this.next().toggleClass('show');
      $this.parent().parent().find('li .toggle-meta').removeClass('minus');
      $this.parent().parent().find('li .toggle-meta').addClass('plus');
      $this.addClass('minus');
      $this.removeClass('plus');
    }
  });

  // Scroll to Fixed

  // Dock each headline as it arrives just below the docked header, pushing the previous headline up the page

  var headlines = $('.headline');
  headlines.each(function(i) {
    var headline = $(headlines[i]);
    var next = headlines[i + 1];

    headline.scrollToFixed({
      preFixed: function() {
        $(this).css('border-bottom', '0px solid #fff');
      },
      postFixed: function() {
        $(this).css('border-bottom', '0');
      },
      marginTop: 16,
      limit: function() {
        var limit = 0;
        if (next) {
          limit = $(next).offset().top - $(this).outerHeight(true) - 0;
        } else {
          limit = $('.footer').offset().top - $(this).outerHeight(true) - 0;
        }
        return limit;
      },
      zIndex: 999
    });
  });

  // Load Article Image on click

  $(".toggle").click(function() {
    var imgUrl = $(this).data('rel');
    var articleMeta = $(this).data('meta');
    var img = new Image();
    img.onload = function() {
      // image is loaded
    }
    img.src = imgUrl;
    if (imgUrl == null) {
      $("#imagearea").css({
        'background': 'transparent',
        'z-index': '0'
      });
      $("#imagearea").empty();
    } else if (imgUrl == "empty") {
      $("#imagearea").css({
        'background': 'black',
        'z-index': '555'
      });
      $("#imagearea").empty();
      $("#imagearea").html("<div class='articleimage'>No image</div>");
    } else {
      $("#imagearea").css({
        'background': 'black',
        'z-index': '555'
      });
      $("#imagearea").empty();
      $("#imagearea").html("<img class='articleimage' src='" + imgUrl + "' /><div class='slick-caption ty'>" + articleMeta + "</div>");
      $(this).siblings(".inner").children(".imagearea-mobile").html("<img class='articleimage-mobile' src='" + imgUrl + "' />");
    }
  });

  // Add item to basket

  $(".button").click(function() {
    $(".cart").addClass("cart-full");
    $(".cart").css('display', 'block');
  });

  // Open chart

  $(".cart").click(function() {
    $(".cart").addClass("cart-open");
  });

  // Replace all SVG images with inline SVG

  jQuery('img.svg').each(function() {
    var $img = jQuery(this);
    var imgID = $img.attr('id');
    var imgClass = $img.attr('class');
    var imgURL = $img.attr('src');

    jQuery.get(imgURL, function(data) {
      // Get the SVG tag, ignore the rest
      var $svg = jQuery(data).find('svg');

      // Add replaced image's ID to the new SVG
      if (typeof imgID !== 'undefined') {
        $svg = $svg.attr('id', imgID);
      }
      // Add replaced image's classes to the new SVG
      if (typeof imgClass !== 'undefined') {
        $svg = $svg.attr('class', imgClass + ' replaced-svg');
      }

      // Remove any invalid XML tags as per http://validator.w3.org
      $svg = $svg.removeAttr('xmlns:a');

      // Replace image with new SVG
      $img.replaceWith($svg);

    }, 'xml');

  });
});
