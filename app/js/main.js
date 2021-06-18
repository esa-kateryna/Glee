$(function(){
    $('.top-slider__inner').slick({
        dots: true,
        arrows: false,
        fade: true
        
    });

    $('.related-slider').slick({
      dots: false,
      arrows: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      infinite: false
      
  });

    $('.details-slide__thumb').slick({
      asNavFor: '.details-slide__big',
      focusOnSelect: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      vertical: true,
      draggable: false,
      arrows: false
    });
    $('.details-slide__big').slick({
      asNavFor: '.details-slide__thumb',
      draggable: false,
      arrows: false,
      fade: true
    });


    $('.filter-price__input').ionRangeSlider({
      type: "double",
      prefix: "$",
      postfix: ".00",
      onStart: function (data){
        $('.filter-price__show-from').text(data.from);
        $('.filter-price__show-to').text(data.to);
      },
      onChange: function (data){
        $('.filter-price__show-from').text(data.from);
        $('.filter-price__show-to').text(data.to);
      }
    })

    $(['.filter-recent__star', '.star']).rateYo({
      starWidth: "11px",
      normalFill: "#d6d6d6",
      ratedFill: "#ffcc00",
      numStars: 5,
      readOnly: true,
      spacing: "5px"
    });

    $('.details-page__content-num').styler();

    $('.details-tabs__top-item').on('click', function(e){
      e.preventDefault();
      $('.details-tabs__top-item').removeClass('details-tabs__top-item--active');
      $(this).addClass('details-tabs__top-item--active');

      $('.details-tabs__content-item').removeClass('details-tabs__content-item--active');
      $($(this).attr('href')).addClass('details-tabs__content-item--active');
    });

  var containerEl1 = document.querySelector('[data-ref="container-1"]');
  var containerEl2 = document.querySelector('[data-ref="container-2"]');
 
  var config = {
    controls: {
      scope: 'local'
    }
  };
 
  var mixer1 = mixitup(containerEl1, config);
  var mixer2 = mixitup(containerEl2, config);
    

});
