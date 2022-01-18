(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-navEdu-open]"),
    closeModalBtn: document.querySelector("[data-navEdu-close]"),
    modal: document.querySelector("[data-navEdu]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden-navEdu");
  }
})();
