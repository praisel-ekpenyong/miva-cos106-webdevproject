const themeToggle = document.getElementById('themeToggle');
const prefersDark = localStorage.getItem('terraTheme') === 'dark';
if (prefersDark) {
  document.body.classList.add('dark-theme');
}

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    localStorage.setItem('terraTheme', document.body.classList.contains('dark-theme') ? 'dark' : 'light');
  });
}

document.querySelectorAll('img[data-fallback]').forEach((img) => {
  const showPlaceholder = () => img.closest('.image-box')?.classList.add('show-placeholder');
  img.addEventListener('error', showPlaceholder);
  if (img.complete && img.naturalWidth === 0) {
    showPlaceholder();
  }
});
