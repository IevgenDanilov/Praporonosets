addCode();

function addCode() {
  const codeElemCollection = document.querySelectorAll('.products__code');

  for (let i = 0; i < codeElemCollection.length; i++) {
    const element = codeElemCollection[i];
    element.innerHTML = element.parentElement.parentElement.parentElement.id.replace('ID', 'Код: ');
  }
}
