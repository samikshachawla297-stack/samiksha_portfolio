const backLink = document.querySelector('.brand-mark');

backLink?.addEventListener('click', (event) => {
  if (window.scrollY > 0) {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
});
