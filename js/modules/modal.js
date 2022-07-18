function modal() {
    // Module window
    const modalTrigger = document.querySelectorAll('[data-modal]');
    const modal = document.querySelector('.modal');

    function openModal() {
        modal.classList.add('show');
        document.body.style.overflow = 'hidden';
        clearTimeout(modalTimerId);
        window.removeEventListener('scroll', showModalByScroll);
    }
    let thanksModal;
    let prevModalDialog;

    function closeModal() {
        modal.classList.remove('show');
        document.body.style.overflow = '';
        if (thanksModal) {
            // modelDialog();
            clearTimeout(modelDialogTimer);
        }
    };
    modalTrigger.forEach(el => {
        el.addEventListener('click', openModal);
    });
    modal.addEventListener('click', event => {
        if (event.target.closest('[data-close]') || !event.target.closest('.modal__dialog')) {
            closeModal();
        }
    });
    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && modal.classList.contains('show')) {
            closeModal();
        }
    });
    modalTimerId = setTimeout(openModal, 500000);

    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            openModal();
        }
    }
    window.addEventListener('scroll', showModalByScroll);
}
module.exports = modal;