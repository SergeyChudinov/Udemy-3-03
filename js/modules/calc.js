function calc() {
    // Calculate
    const result = document.querySelector('.calculating__result span');
    let sex, height, weight, age, ratio;
    if (localStorage.getItem('sex')) {
        sex = localStorage.getItem('sex');
    } else {
        sex = 'female';
        localStorage.setItem('sex', sex);
    }
    if (localStorage.getItem('ratio')) {
        ratio = localStorage.getItem('ratio');
    } else {
        ratio = 1.375;
        localStorage.setItem('ratio', ratio);
    }
    function initLocalSettings(selector, activeClass) {
        const elements = document.querySelectorAll(selector);
        elements.forEach(elem => {
            elem.classList.remove(activeClass);
            if (elem.getAttribute('id') === localStorage.getItem('sex')) {
                elem.classList.add(activeClass);
            }
            if (elem.getAttribute('data-ratio') === localStorage.getItem('ratio')) {
                elem.classList.add(activeClass);
            }
        });
    }
    initLocalSettings('#gender div', 'calculating__choose-item_active');
    initLocalSettings('.calculating__choose_big div', 'calculating__choose-item_active');
    function calcTotal() {
        if (localStorage.getItem('height')) {
            height = localStorage.getItem('height');
            document.querySelector('#height').value = height;
        }
        if (localStorage.getItem('weight')) {
            weight = localStorage.getItem('weight');
            document.querySelector('#weight').value = weight;
        }
        if (localStorage.getItem('age')) {
            age = localStorage.getItem('age');
            document.querySelector('#age').value = age;
        }
        if (!sex || !height || !weight || !age || !ratio) {
            result.textContent = 
            '____';
            return;
        }
        if (document.querySelector('#female').classList.contains('calculating__choose-item_active')) {
            result.textContent = 
            Math.floor((447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * ratio);
        } else {
            result.textContent = 
            Math.floor((88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * ratio);
        }
    }
    calcTotal();
    function getStaticInformation(selector, activeClass) {
        const elements = document.querySelectorAll(selector);
        elements.forEach(elem => {
            elem.addEventListener('click', (e) => {
                if (e.target.getAttribute('data-ratio')) {
                    ratio = +e.target.getAttribute('data-ratio');
                    localStorage.setItem('ratio', ratio);
                } else {
                    sex = e.target.getAttribute('id');
                    localStorage.setItem('sex', sex);
                }
                elements.forEach(elem => {
                    elem.classList.remove(activeClass);
                });
                e.target.classList.add(activeClass);
                calcTotal();
            });
        });
    }
    getStaticInformation('#gender div', 'calculating__choose-item_active');
    getStaticInformation('.calculating__choose_big div', 'calculating__choose-item_active');
    function getDynamicInformation(selector) {
        const input = document.querySelector(selector);

        input.addEventListener('input', () => {
            if (/\D/.test(input.value)) {
                input.style.border = '2px solid rgb(224, 94, 94)';
            } else {
                input.style.border = '';
            }
            switch(input.getAttribute('id')) {
                case "height":
                    height = input.value;
                    localStorage.setItem('height', height);
                    break;
                case "weight":
                    weight = input.value;
                    localStorage.setItem('weight', weight);
                    break;
                case "age":
                    age = input.value;
                    localStorage.setItem('age', age);
                    break;
            }
            calcTotal();
        });
    }
    getDynamicInformation('#height');
    getDynamicInformation('#weight');
    getDynamicInformation('#age');
}
export default calc;