window.addEventListener('DOMContentLoaded', () => {


});
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
    tabsContsnt[i].classList.toggle('hide');
    tabsContsnt[i].classList.add('fade');
    tabs[i].classList.toggle('tabheader__item_active');
}
function abc() {
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
abc();

tabsContsnt[3].src = "img/tabs/hamburger.jpg";