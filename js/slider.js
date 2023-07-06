const mobileSize = window.matchMedia('(max-width: 480px)');
const tabletSize =
  window.matchMedia('(min-width: 481px)') && window.matchMedia('(max-width: 1200px)');
const desctopSize = window.matchMedia('(min-width: 1201px)');

function sliderChange(mobileSize, tabletSize) {
  if (mobileSize.matches) {
    // If media query matches
    // document.body.style.backgroundColor = 'yellow';
    $('.clients-slider').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: false,
    });
  } else if (tabletSize.matches) {
    // document.body.style.backgroundColor = 'pink';
    $('.clients-slider').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
      dots: false,
    });
  } else {
    // document.body.style.backgroundColor = 'red';
    $('.clients-slider').slick({
      infinite: true,
      slidesToShow: 6,
      slidesToScroll: 1,
      arrows: true,
      dots: false,
    });
  }
}

sliderChange(mobileSize, tabletSize); // Call listener function at run time
mobileSize.addListener(sliderChange); // Attach listener function on state changes
tabletSize.addListener(sliderChange); // Attach listener function on state changes
desctopSize.addListener(sliderChange); // Attach listener function on state changes
