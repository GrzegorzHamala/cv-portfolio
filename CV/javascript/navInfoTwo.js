(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-navInfoTwo-open]"),
    closeModalBtn: document.querySelector("[data-navInfoTwo-close]"),
    modal: document.querySelector("[data-navInfoTwo]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden-navInfoTwo");
  }
})();
