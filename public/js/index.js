const contactModal = document.querySelector("#contact-modal-bg");
const contactBtn = document.querySelector("#contact-btn");
const closeModalEl = document.querySelector("#close-modal");
const sendMessBtn = document.querySelector("#send-message-button");
contactBtn.addEventListener("click", function () {
  contactModal.classList.replace("contact-modal-bg", "modal-activate");
});
closeModalEl.addEventListener("click", function () {
  contactModal.classList.replace("modal-activate", "contact-modal-bg");
});
sendMessBtn.addEventListener("click", function () {
  contactModal.classList.replace("modal-activate", "contact-modal-bg");
});
