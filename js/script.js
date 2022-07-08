window.addEventListener('DOMContentLoaded', () => {
    // const tabs = document.querySelectorAll('.tabheader__item'),
    //       tabsContsnt = document.querySelectorAll('.tabcontent'),
    //       tabsParent = document.querySelector('.tabheader__items');
    // function hideTabContent() {
    //     tabsContsnt.forEach(el => {
    //         el.style.display = "none";
    //     });
    //     tabs.forEach(el => {
    //         el.classList.remove('tabheader__item_active');
    //     })
    // };
    // function showTabContent(i = 0) {
    //     tabsContsnt[i].style.display = 'block';
    //     tabs[i].classList.toggle('tabheader__item_active');
    // }
    // function abc() {
    //     tabsParent.addEventListener('click', event => {
    //         if (!event.target.closest('.tabheader__item')) {
    //             return;
    //         }
    //         tabs.forEach((item, index) => {
    //             if (event.target == item) {
    //                 hideTabContent();                       
    //                 showTabContent(index); 
    //             }    
    //         })
    //     })
    // }
    // hideTabContent();
    // showTabContent();
    // abc();

    const tabs = document.querySelectorAll('.tabheader__item'),
        tabsContsnt = document.querySelectorAll('.tabcontent'),
        tabsParent = document.querySelector('.tabheader__items');

    function hideTabContent() {
        tabsContsnt.forEach(el => {
            el.classList.add('hide');
            el.classList.remove('fade');
        });
        tabs.forEach(el => {
            el.classList.remove('tabheader__item_active');
        })
    };

    function showTabContent(i = 0) {
        tabsContsnt[i].classList.remove('hide');
        tabsContsnt[i].classList.add('fade');
        tabs[i].classList.add('tabheader__item_active');
    }

    function eventListener() {
        tabsParent.addEventListener('click', event => {
            if (!event.target.closest('.tabheader__item')) {
                return;
            }
            tabs.forEach((item, index) => {
                if (event.target == item) {
                    hideTabContent();
                    showTabContent(index);
                }
            })
        })
    }
    hideTabContent();
    showTabContent();
    eventListener();
    tabsContsnt[3].src = "img/tabs/hamburger.jpg";


    // let timerSeconds = document.querySelector('#seconds');
    // let timerMinutes = document.querySelector('#minutes');
    // let timerHours = document.querySelector('#hours');
    // let timerDays = document.querySelector('#days');
    // // const deadLine = '2022-06-28 19:27';
    // const deadLine = '2022-07-28 00:00';
    // function getTimeRemaining(endtime) {
    //     let t = Date.parse(endtime)- Date.parse(new Date()); 
    //     if (t < 0) {
    //         document.querySelector('.timer').previousElementSibling.textContent = 'Вы проебали акцию!!!';
    //         timerSeconds.textContent = 0;
    //         timerMinutes.textContent = 0;
    //         timerHours.textContent = 0;
    //         timerDays.textContent = 0;
    //         return;
    //     }
    //     // timerSeconds.textContent = ('0' + Math.floor((t / (1000)) % 60)).slice(-2);
    //     // timerMinutes.textContent = ('0' + Math.floor((t / (1000 * 60)) % 60)).slice(-2);
    //     // timerHours.textContent = ('0' + Math.floor((t / (1000 * 60 * 60)) % 24)).slice(-2);
    //     // timerDays.textContent = ('0' + Math.floor((t / (1000 * 60 * 60 * 24)))).slice(-2);
    //     timerSeconds.textContent = Math.floor((t / (1000)) % 60);
    //     timerMinutes.textContent = Math.floor((t / (1000 * 60)) % 60);
    //     timerHours.textContent = Math.floor((t / (1000 * 60 * 60)) % 24);
    //     timerDays.textContent = Math.floor((t / (1000 * 60 * 60 * 24)));
    // }
    // getTimeRemaining(deadLine);
    // timerId = setInterval(seconds, 1000);
    // function seconds() {
    //     if (timerSeconds.textContent > 0) {
    //         timerSeconds.textContent--;
    //     } else {
    //         timerSeconds.textContent = 59;
    //         minutes();
    //     }
    // }
    // function minutes() {
    //     if (timerMinutes.textContent > 0) {
    //         timerMinutes.textContent--;
    //     } else {
    //         timerMinutes.textContent = 59;
    //         hours();
    //     }
    // }
    // function hours() {
    //     if (timerHours.textContent > 0) {
    //         timerHours.textContent--;
    //     } else {
    //         timerHours.textContent = 23;
    //         days();
    //     }
    // }
    // function days() {
    //     if (timerDays.textContent > 0) {
    //         timerDays.textContent--;
    //     } else {
    //         clearInterval(timerId);
    //         timerSeconds.textContent = 0;
    //         timerMinutes.textContent = 0;
    //         timerHours.textContent = 0;
    //         document.querySelector('.timer').previousElementSibling.textContent = 'Вы проебали акцию!!!'
    //     }
    // }

    // const deadLine = '2022-06-28 17:29';
    const deadLine = '2022-07-22 20:00';

    function getTimeRemaining(endtime) {
        const t = Date.parse(endtime) - Date.parse(new Date()),
            days = Math.floor((t / (1000 * 60 * 60 * 24))),
            hours = Math.floor((t / (1000 * 60 * 60)) % 24),
            minutes = Math.floor((t / (1000 * 60)) % 60),
            seconds = Math.floor((t / (1000)) % 60);
        return {
            total: t,
            days: days,
            hours: hours,
            minutes: minutes,
            seconds: seconds
        }
    }

    function getZero(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }

    function setClock(selector, endtime) {
        const timer = document.querySelector(selector),
            days = timer.querySelector('#days'),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds');
        timeInterval = setInterval(updateClock, 1000);
        updateClock();

        function updateClock() {
            const t = getTimeRemaining(endtime);
            // days.textContent = ('0' + t.days).slice(-2);
            // hours.textContent = ('0' + t.hours).slice(-2);
            // minutes.textContent = ('0' + t.minutes).slice(-2);
            // seconds.textContent = ('0' + t.seconds).slice(-2);
            days.textContent = getZero(t.days);
            hours.textContent = getZero(t.hours);
            minutes.textContent = getZero(t.minutes);
            seconds.textContent = getZero(t.seconds);
            if (t.total <= 0) {
                clearInterval(timeInterval);
                days.textContent = 0;
                hours.textContent = 0;
                minutes.textContent = 0;
                seconds.textContent = 0;
            }
        }
    }
    setClock('.timer', deadLine);

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
            modelDialog();
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
    modalTimerId = setTimeout(openModal, 50000);

    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            openModal();
        }
    }
    window.addEventListener('scroll', showModalByScroll);


    const menu = document.querySelector('.menu__field .container');
    menu.innerHTML = '';
    class Menu {
        constructor(img, alt, header, text, price, parentSelector, ...classes) {
            this.img = img;
            this.alt = alt;
            this.header = header;
            this.text = text;
            this.price = price;
            this.parent = document.querySelector(parentSelector);
            this.classes = classes;
            this.transfer = 27;
            this.chsngeToUAH();
        }
        chsngeToUAH() {
            this.price = this.price * this.transfer;
        }
        // drawElements() {
        //     menu.innerHTML += this.getMarkup();
        // }
        render() {
            const element = document.createElement('div');
            if (this.classes.length === 0) {
                this.element = 'menu__item';
                element.classList.add(this.element);
            } else {
                this.classes.forEach(className => element.classList.add(className))
            }
            element.innerHTML = `
                <img src=${this.img} alt=${this.alt}>
                <h3 class="menu__item-subtitle">${this.header}</h3>
                <div class="menu__item-descr">${this.text}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${this.price}</span> руб/день</div>
                </div>
            `;
            this.parent.append(element);
        }
    }
    const fitnessMenu = new Menu(
        "img/tabs/vegy.jpg",
        'vegy',
        'Меню "Фитнес"',
        'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
        '229',
        '.menu__field .container',
        'menu__item',
        'big');
    const premiumMenu = new Menu(
        "img/tabs/elite.jpg",
        'elite',
        'Меню “Премиум”',
        'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
        '550',
        '.menu__field .container',
        'menu__item',
        'big');
    const leanMenu = new Menu(
        "img/tabs/post.jpg",
        'post',
        'Меню "Постное"',
        'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
        '430',
        '.menu__field .container',
        'menu__item',
        'big');
    fitnessMenu.render();
    premiumMenu.render();
    leanMenu.render();

    const forms = document.querySelectorAll('form');
    const message = {
        loading: 'img/form/spinner.svg',
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так...'
    };
    forms.forEach(item => {
        postData(item);
    });

    function postData(form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault();

            const statusMessage = document.createElement('img');
            statusMessage.src = message.loading;
            statusMessage.style.cssText = `
                display: block;
                margin: 0 auto;
            `;
            form.append(statusMessage);

            const request = new XMLHttpRequest();
            request.open('POST', 'server.php');

            // request.setRequestHeader('Content-type', 'multipart/form-data');
            request.setRequestHeader('Content-type', 'application/json');
            const formData = new FormData(form);

            console.log(form);
            const object = {};
            formData.forEach(function (value, key) {
                object[key] = value;
            });
            console.log(object);
            const json = JSON.stringify(object);
            // Для тестирования
            setTimeout(() => {
                request.send(json);
            }, 3000);
            // request.send(json);

            console.log(request.response);
            request.addEventListener('load', () => {
                if (request.status === 200) {
                    console.log(request.response);
                    showThanksModal(message.success);
                    form.reset();
                    // document.querySelectorAll('input').forEach(el => {
                    //     el.value = '';
                    // });
                    statusMessage.remove();
                } else {
                    // statusMessage.textContent = message.failure;
                    showThanksModal(message.failure);
                    form.reset();
                    statusMessage.remove();
                }
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
            modelDialog();
            closeModal();
        }, 400000)
    }
    function modelDialog() {
        thanksModal.remove();
        prevModalDialog.classList.remove('hide');
    }
});
