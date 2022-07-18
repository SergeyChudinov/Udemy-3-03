function forms() {
    // Forms
    const forms = document.querySelectorAll('form');
    const message = {
        loading: 'img/form/spinner.svg',
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так...'
    };
    forms.forEach(item => {
        bindPostData(item);
    });
    const postData = async (url, data) => {
        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: data
        });
        return await res.json();
    };

    function bindPostData(form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault();

            const statusMessage = document.createElement('img');
            statusMessage.src = message.loading;
            statusMessage.style.cssText = `
                display: block;
                margin: 0 auto;
            `;
            form.after(statusMessage);
            const formData = new FormData(form);
            console.log(formData);
            // const object = {};
            // formData.forEach(function (value, key) {
            //     object[key] = value;
            // });
            // const json = JSON.stringify(object);
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
                }).catch(() => {
                    showThanksModal(message.failure);
                }).finally(() => {
                    form.reset();
                    statusMessage.remove();
                })
        });
    }

    function showThanksModal(message) {
        prevModalDialog = document.querySelector('.modal__dialog');
        prevModalDialog.classList.add('hide');
        openModal();
        thanksModal = document.createElement('div');
        thanksModal.classList.add('modal__dialog');
        thanksModal.innerHTML = `
            <div class="modal__content">
                <div data-close class="modal__close">&times;</div>
                <div class="modal__title">${message}</div>
            </div>
        `;
        document.querySelector('.modal').append(thanksModal);
        modelDialogTimer = setTimeout(() => {
            // modelDialog();
            closeModal();
            thanksModal.remove();
            prevModalDialog.classList.remove('hide');
        }, 40000)
    }
    // function modelDialog() {
    //     thanksModal.remove();
    //     prevModalDialog.classList.remove('hide');
    // }
}
module.exports = forms;