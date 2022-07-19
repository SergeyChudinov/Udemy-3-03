function tabs(tabsSelector, tabsContentSelector, tabsParentSelector, activeClass) {
    //Tabs

    const tabs = document.querySelectorAll(tabsSelector),
        tabsContsnt = document.querySelectorAll(tabsContentSelector),
        tabsParent = document.querySelector(tabsParentSelector);

    function hideTabContent() {
        tabsContsnt.forEach(el => {
            el.classList.add('hide');
            el.classList.remove('fade');
        });
        tabs.forEach(el => {
            el.classList.remove(activeClass);
        })
    };

    function showTabContent(i = 0) {
        tabsContsnt[i].classList.remove('hide');
        tabsContsnt[i].classList.add('fade');
        tabs[i].classList.add(activeClass);
    }

    function eventListener() {
        tabsParent.addEventListener('click', event => {
            if (!event.target.closest(tabsSelector)) {
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
}
export default tabs;