const searchInput = document.getElementById('productSearch');
const products = Array.from(document.querySelectorAll('.product-item'));
const countEl = document.getElementById('favoritesCount');
const storageKey = 'terraFavorites';

const getFavorites = () => JSON.parse(localStorage.getItem(storageKey) || '[]');
const setFavorites = (favorites) => localStorage.setItem(storageKey, JSON.stringify(favorites));
const updateCount = () => {
  countEl.textContent = getFavorites().length;
};

updateCount();

searchInput?.addEventListener('input', () => {
  const term = searchInput.value.trim().toLowerCase();
  products.forEach((product) => {
    product.style.display = product.dataset.name.includes(term) ? '' : 'none';
  });
});

document.querySelectorAll('button[data-product]').forEach((button) => {
  button.addEventListener('click', () => {
    const favorites = getFavorites();
    const name = button.dataset.product;
    if (!favorites.includes(name)) {
      favorites.push(name);
      setFavorites(favorites);
      updateCount();
    }
  });
});

document.querySelectorAll('img[data-fallback]').forEach((img) => {
  const showPlaceholder = () => img.closest('.image-box')?.classList.add('show-placeholder');
  img.addEventListener('error', showPlaceholder);
  if (img.complete && img.naturalWidth === 0) {
    showPlaceholder();
  }
});
