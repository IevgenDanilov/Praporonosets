getFavorites('all');

function getFavorites(c) {
  var x, i;
  x = document.getElementsByClassName('heartBtn');
  if (c == 'all') c = '';
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    removeFromFavorites(x[i], 'heartBtn');
    if (x[i].className.indexOf(c) > -1) addToFavorites(x[i], 'show');
  }
}

// Show filtered elements
function addToFavorites(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(' ');
  arr2 = name.split(' ');
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += ' ' + arr2[i];
    }
  }
}

// Hide elements that are not selected
function removeFromFavorites(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(' ');
  arr2 = name.split(' ');
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(' ');
}

// Add active class to the current control button (highlight it)
var btnContainer = document.getElementById('myBtnContainer');
var btns = btnContainer.getElementsByClassName('button');
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', function () {
    var current = document.getElementsByClassName('active');
    current[0].className = current[0].className.replace(' active', '');
    this.className += ' active';
  });
}
