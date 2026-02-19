const modal = document.getElementById('trusteeModal');
const modalTitle = document.getElementById('modalTitle');
const modalText = document.getElementById('modalText');
const closeModalButton = document.getElementById('closeModal');

const closeModal = () => {
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
};

document.querySelectorAll('.trustee-card').forEach((card) => {
  card.addEventListener('click', () => {
    const member = card.dataset.member;
    modalTitle.textContent = member;
    modalText.textContent = `${member} serves on the Terra Tribe Fashion Board of Trustees.`;
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
  });
});

closeModalButton?.addEventListener('click', closeModal);

modal?.addEventListener('click', (event) => {
  if (event.target === modal) {
    closeModal();
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeModal();
  }
});

document.querySelectorAll('img[data-fallback]').forEach((img) => {
  const showPlaceholder = () => img.closest('.image-box')?.classList.add('show-placeholder');
  img.addEventListener('error', showPlaceholder);
  if (img.complete && img.naturalWidth === 0) {
    showPlaceholder();
  }
});
