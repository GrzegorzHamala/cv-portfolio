(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-navInfo-open]"),
    closeModalBtn: document.querySelector("[data-navInfo-close]"),
    modal: document.querySelector("[data-navInfo]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden-navInfo");
  }
})();
