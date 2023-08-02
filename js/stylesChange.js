const mobFilter = document.getElementById('mobFilter');
const tabletFilter = document.getElementById('tabletFilter');
const desctopFilter = document.getElementById('desctopFilter');

const mobileSize = window.matchMedia('(max-width: 480px)');
const tabletSize =
  window.matchMedia('(min-width: 481px)') && window.matchMedia('(max-width: 1200px)');
const desctopSize = window.matchMedia('(min-width: 1201px)');

function stylesChange(mobileSize, tabletSize, mobFilter, tabletFilter, desctopFilter) {
  if (mobileSize.matches) {
    mobFilter.hidden = false;
    tabletFilter.hidden = true;
    desctopFilter.hidden = true;
  } else if (tabletSize.matches) {
    mobFilter.hidden = true;
    tabletFilter.hidden = false;
    desctopFilter.hidden = true;
  } else {
    mobFilter.hidden = true;
    tabletFilter.hidden = true;
    desctopFilter.hidden = false;
  }
}

mobileSize.addListener(stylesChange);
tabletSize.addListener(stylesChange);
desctopSize.addListener(stylesChange);
