const form = document.getElementById('inquiryForm');
const citySelect = document.getElementById('city');
const timeSelect = document.getElementById('time');
const successMessage = document.getElementById('formSuccess');

const slotsByCity = {
  Lagos: ['10:00 AM', '1:00 PM', '4:00 PM'],
  Abuja: ['11:00 AM', '2:00 PM', '5:00 PM']
};

const fillTimeSlots = () => {
  const city = citySelect.value;
  timeSelect.innerHTML = '<option value="">Select time slot</option>';
  (slotsByCity[city] || []).forEach((slot) => {
    const option = document.createElement('option');
    option.value = slot;
    option.textContent = slot;
    timeSelect.appendChild(option);
  });
};

citySelect?.addEventListener('change', fillTimeSlots);

const showError = (field, message) => {
  document.getElementById(`${field}Error`).textContent = message;
};

const clearErrors = () => {
  ['name', 'email', 'phone', 'city', 'date', 'time', 'message'].forEach((field) => showError(field, ''));
};

form?.addEventListener('submit', (event) => {
  event.preventDefault();
  clearErrors();
  successMessage.textContent = '';

  const data = new FormData(form);
  const name = data.get('name').trim();
  const email = data.get('email').trim();
  const phone = data.get('phone').trim();
  const city = data.get('city').trim();
  const date = data.get('date').trim();
  const time = data.get('time').trim();
  const message = data.get('message').trim();

  let valid = true;

  if (!name) { showError('name', 'Name is required.'); valid = false; }
  if (!/^\S+@\S+\.\S+$/.test(email)) { showError('email', 'Enter a valid email.'); valid = false; }
  if (phone.length < 10 || phone.length > 15) { showError('phone', 'Phone must be 10 to 15 digits.'); valid = false; }
  if (!city) { showError('city', 'Select a city.'); valid = false; }
  if (!date) { showError('date', 'Select a preferred date.'); valid = false; }
  if (!time) { showError('time', 'Select a time slot.'); valid = false; }
  if (!message) { showError('message', 'Message is required.'); valid = false; }

  if (valid) {
    successMessage.textContent = `Thanks, ${name}. Your inquiry for ${city} has been received.`;
    form.reset();
    fillTimeSlots();
  }
});
