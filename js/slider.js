const mobileSize = window.matchMedia('(max-width: 480px)');
const tabletSize =
  window.matchMedia('(min-width: 481px)') && window.matchMedia('(max-width: 1200px)');
const desctopSize = window.matchMedia('(min-width: 1201px)');

function sliderChange(mobileSize, tabletSize) {
  if (mobileSize.matches) {
    $('.clients-slider').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: false,
    });
  } else if (tabletSize.matches) {
    $('.clients-slider').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      dots: false,
    });
  } else {
    $('.clients-slider').slick({
      infinite: true,
      slidesToShow: 6,
      slidesToScroll: 1,
      arrows: true,
      dots: false,
    });
  }
}

sliderChange(mobileSize, tabletSize);
mobileSize.addListener(sliderChange);
tabletSize.addListener(sliderChange);
desctopSize.addListener(sliderChange);
