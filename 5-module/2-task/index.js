function toggleText() {
  const btn = document.querySelector('.toggle-text-button');
  const text = document.querySelector('#text');
  btn.addEventListener('click', function () {
    if (text.getAttribute('hidden') === "hidden") {
      text.removeAttribute('hidden');
    } else {
      text.setAttribute('hidden', 'hidden')
    }
  })
}
