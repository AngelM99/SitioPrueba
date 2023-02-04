const tabs = document.querySelectorAll(".panel-filters__item");


tabs.forEach(function (tab, index) {
    tab.addEventListener('click', function() {

        const filters = document.querySelectorAll(".panel-filters__item");
        const tabs = document.querySelectorAll(".tab");
        
        filters.forEach(function (tab) {
            tab.classList.remove("active__filters");
        });
        tab.classList.add("active__filters");

        tabs.forEach(function (tabContent) {
            tabContent.classList.remove("active");
        });
        tabs[index].classList.add("active");
        
    })
    
});