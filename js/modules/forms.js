import {openModal, closeModal} from './modal';
import {postData} from '../services/services';

function forms(formSelector, modalTimerId) {
    // Forms
    const forms = document.querySelectorAll(formSelector);
    const message = {
        loading: 'img/form/spinner.svg',
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так...'
    };
    forms.forEach(item => {
        bindPostData(item);
    });


    function bindPostData(form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault();

            const statusMessage = document.createElement('img');
            statusMessage.src = message.loading;
            statusMessage.style.cssText = `
                display: block;
                margin: 0 auto;
            `;
            // form.after(statusMessage);
            form.insertAdjacentElement('afterend', statusMessage);
            const formData = new FormData(form);
            console.log(formData);
            const json = JSON.stringify(Object.fromEntries(formData.entries()));
            console.log(json);
            // Для тестирования
            // setTimeout(() => {
            //     request.send(json);
            // }, 3000);
            postData('http://localhost:3000/requests', json)
                .then(data => {
                    console.log(data);
                    showThanksModal(message.success);
                    statusMessage.remove();
                }).catch(() => {
                    showThanksModal(message.failure);
                }).finally(() => {
                    form.reset();
                    // statusMessage.remove();
                })
        });
    }

    function showThanksModal(message) {
        prevModalDialog = document.querySelector('.modal__dialog');
        prevModalDialog.classList.add('hide');
        openModal('.modal', modalTimerId);
        thanksModal = document.createElement('div');
        thanksModal.classList.add('modal__dialog');
        thanksModal.innerHTML = `
            <div class="modal__content">
                <div data-close class="modal__close">&times;</div>
                <div class="modal__title">${message}</div>
            </div>
        `;
        document.querySelector('.modal').append(thanksModal);
        setTimeout(() => { // modelDialogTimer = 
            // modelDialog();
            thanksModal.remove();
            prevModalDialog.classList.remove('hide');
            closeModal('.modal');
        }, 4000)
    }
    // function modelDialog() {
    //     thanksModal.remove();
    //     prevModalDialog.classList.remove('hide');
    // }
}
export default forms;