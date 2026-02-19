const eventItems = Array.from(document.querySelectorAll('.event-item'));
const countdownEl = document.getElementById('countdown');

const getNearestEvent = () => {
  const now = new Date();
  return eventItems
    .map((item) => ({ item, date: new Date(item.dataset.date) }))
    .filter((event) => event.date >= now)
    .sort((a, b) => a.date - b.date)[0] || null;
};

const nearest = getNearestEvent();
if (nearest) {
  nearest.item.classList.add('nearest');
}

const updateCountdown = () => {
  if (!nearest) {
    countdownEl.textContent = 'All listed events have passed.';
    return;
  }
  const diff = nearest.date - new Date();
  if (diff <= 0) {
    countdownEl.textContent = 'The nearest event is happening now!';
    return;
  }
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  countdownEl.textContent = `${days}d ${hours}h ${minutes}m until ${nearest.item.querySelector('h3').textContent}.`;
};

updateCountdown();
setInterval(updateCountdown, 60000);
