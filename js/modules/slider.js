function slider({container, slide, nextArrow, prevArrow, totalCounter, currentCounter, wrapper, field}) {
    // Slider

    let offset = 0;
    let slideIndex = 0;
    const slides = document.querySelectorAll(slide);
    const slider = document.querySelector(container);
    const prev = document.querySelector(prevArrow);
    const next = document.querySelector(nextArrow);
    const total = document.querySelector(totalCounter);
    const current = document.querySelector(currentCounter);
    const slidesWrapper = document.querySelector(wrapper);
    const width = window.getComputedStyle(slidesWrapper).width;
    const slidesField = document.querySelector(field);
    
    current.textContent = ('0' + (slideIndex + 1)).slice(-2);
    if (slides.length < 10) {
        total.textContent = `0${slides.length}`;
    } else {
        total.textContent = slides.length;
    }
    slidesField.style.width = 100 * slides.length + '%';
    slidesField.style.display = 'flex';
    slidesField.style.transition = '0.5s all';
    slidesWrapper.style.overflow = 'hidden';
    slides.forEach(slide => {
        slide.style.width = width;
    });

    slider.style.position = 'relative';
    const indicators = document.createElement('ol');
    const dots = [];
    indicators.classList.add('carousel-indicators');
    indicators.style.cssText = `
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 15;
        display: flex;
        justify-content: center;
        margin-right: 15%;
        margin-left: 15%;
        list-style: none;
    `;
    slider.append(indicators);
    for (let i = 0; i < slides.length; i++) {
        // indicators.innerHTML += `<li>${i + 1}</li>`;
        const dot = document.createElement('li');
        dot.setAttribute('data-slide-to', i + 1);
        dot.style.cssText = `
            box-sizing: content-box;
            flex: 0 1 auto;
            width: 30px;
            height: 6px;
            margin-right: 3px;
            margin-left: 3px;
            cursor: pointer;
            background-color: #fff;
            background-clip: padding-box;
            border-top: 10px solid transparent;
            border-bottom: 10px solid transparent;
            opacity: .5;
            transition: opacity .6s ease;
        `;
        if (i == 0) {
            dot.style.opacity = 1;
        }
        indicators.append(dot);
        dots.push(dot);
    }

    prev.addEventListener('click', () => {
        if (offset == 0) {
            offset = removeLetters(width) * (slides.length - 1);
        } else {
            offset -= removeLetters(width);
        }
        slidesField.style.transform = `translateX(-${offset}px)`;
        if (slideIndex == 0) {
            slideIndex = slides.length - 1;
        } else {
            slideIndex--;
        }
        current.textContent = slidesLength(slideIndex);
        dotsOpasity(slideIndex);
    });
    next.addEventListener('click', () => {
        if (offset == removeLetters(width) * (slides.length - 1)) {
            offset = 0;
        } else {
            offset += removeLetters(width);
        }
        slidesField.style.transform = `translateX(-${offset}px)`;
        if (slideIndex == slides.length - 1) {
            slideIndex = 0;
        } else {
            slideIndex++;
        }
        current.textContent = slidesLength(slideIndex);
        dotsOpasity(slideIndex);
    });
    document.querySelectorAll('[data-slide-to]').forEach(el => {
        el.addEventListener('click', (event) => {
            slideIndex = event.target.getAttribute('data-slide-to') - 1;
            offset = removeLetters(width) * (slideIndex);
            slidesField.style.transform = `translateX(-${offset}px)`;
            current.textContent = slidesLength(slideIndex);
            dotsOpasity(slideIndex);
        })
    });
    function slidesLength(slideIndex) {
        if (slides.length < 10) {
            return `0${slideIndex + 1}`;
        } else {
            return slideIndex + 1;
        }
    };
    function dotsOpasity(slideIndex) {
        dots.forEach(dot => dot.style.opacity = '.3');
        dots[slideIndex].style.opacity = '1';
    };
    function removeLetters(width) {
        return +width.match(/\d+/);
    };
}
export default slider;