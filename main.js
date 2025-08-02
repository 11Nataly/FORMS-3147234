import { hideModal, showModal } from './modal.js';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('survey-form');
  const closeBtn = document.getElementById('close-modal');

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    showModal();
  });

  closeBtn.addEventListener('click', () => {
    hideModal();
  });
});
