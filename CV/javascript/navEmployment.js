(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-navEmployment-open]"),
    closeModalBtn: document.querySelector("[data-navEmployment-close]"),
    modal: document.querySelector("[data-navEmployment]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden-navEmployment");
  }
})();
