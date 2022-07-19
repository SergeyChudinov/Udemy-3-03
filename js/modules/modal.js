function openModal(modalSelector, modalTimerId) {
    const modal = document.querySelector(modalSelector);
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
    if (modalTimerId) {                   //    !!!!!!!!!!!!!!!!!
        clearTimeout(modalTimerId); 
    }
}

function closeModal(modalSelector) {
    const modal = document.querySelector(modalSelector);
    modal.classList.remove('show');
    document.body.style.overflow = '';
    // if (thanksModal) {
    //     // modelDialog();
    //     clearTimeout(modelDialogTimer);  !!!!!!!!!!
    // }
};
function modal(triggerSelector, modalSelector, modalTimerId) {
    // Module
    const modalTrigger = document.querySelectorAll(triggerSelector);
    const modal = document.querySelector(modalSelector);
    let thanksModal;
    let prevModalDialog;


    modalTrigger.forEach(el => {
        el.addEventListener('click', () => openModal(modalSelector, modalTimerId));
    });
    modal.addEventListener('click', event => {
        if (event.target.closest('[data-close]') || !event.target.closest('.modal__dialog')) { // e.target === modal
            closeModal(modalSelector);
        }
    });
    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && modal.classList.contains('show')) {
            closeModal(modalSelector);
        }
    });

    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            openModal(modalSelector, modalTimerId);
            window.removeEventListener('scroll', showModalByScroll); 
        }
    }
    window.addEventListener('scroll', showModalByScroll);
}
export default modal;
export {openModal};
export {closeModal};