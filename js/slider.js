// $('.clients-slider').slick({
//   infinite: true,
//   slidesToShow: 6,
//   slidesToScroll: 1,
//   arrows: true,
//   dots: false,
// });

function myFunction(tabletSize, mobileSize) {
  // switch (size) {
  //   case desctopSize.matches:
  //     document.body.style.backgroundColor = 'red';
  //     $('.clients-slider').slick({
  //       infinite: true,
  //       slidesToShow: 6,
  //       slidesToScroll: 1,
  //       arrows: true,
  //       dots: false,
  //     });
  //     break;
  //   case tabletSize.matches:
  //     document.body.style.backgroundColor = 'pink';
  //     $('.clients-slider').slick({
  //       infinite: true,
  //       slidesToShow: 3,
  //       slidesToScroll: 1,
  //       arrows: false,
  //       dots: false,
  //     });
  //     break;

  //   default:
  //     document.body.style.backgroundColor = 'yellow';
  //     $('.clients-slider').slick({
  //       infinite: true,
  //       slidesToShow: 1,
  //       slidesToScroll: 1,
  //       arrows: false,
  //       dots: false,
  //     });
  //     break;
  // }

  if (mobileSize.matches) {
    // If media query matches
    document.body.style.backgroundColor = 'yellow';
    $('.clients-slider').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: false,
    });
  } else if (tabletSize.matches) {
    document.body.style.backgroundColor = 'pink';
    $('.clients-slider').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
      dots: false,
    });
  } else {
    document.body.style.backgroundColor = 'red';
    $('.clients-slider').slick({
      infinite: true,
      slidesToShow: 6,
      slidesToScroll: 1,
      arrows: true,
      dots: false,
    });
  }
}

var mobileSize = window.matchMedia('(max-width: 480px)');
var tabletSize =
  window.matchMedia('(min-width: 481px)') && window.matchMedia('(max-width: 1200px)');
var desctopSize = window.matchMedia('(min-width: 1201px)');

myFunction(tabletSize, mobileSize); // Call listener function at run time
mobileSize.addListener(myFunction); // Attach listener function on state changes
tabletSize.addListener(myFunction); // Attach listener function on state changes
desctopSize.addListener(myFunction); // Attach listener function on state changes
