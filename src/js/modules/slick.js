module.exports = function() {

  // begin Slick slider

  $('#news-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  $('#team-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });


  $('#about-us__slider').slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '#about-us__timeline'
  });
  $('#about-us__timeline').slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '#about-us__slider',
    dots: true,
    centerMode: true,
    focusOnSelect: true
  });

  // end Slick slider

};