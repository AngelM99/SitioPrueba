$(document).ready(function(){

    

    $('#owl-carousel').owlCarousel({
        loop: true,
        margin: 30,
        dots: false,
        nav: true,
        items: 1,
    })
    
    $('#owl-carousel2').owlCarousel({
        loop: true,
        margin: 30,
        dots: false,
        nav: true,
        items: 1,
    })

    const menusNav = document.querySelectorAll(".owl-nav")[1];
    menusNav.classList.add('idPrueba');

    const buttonsDos = document.querySelectorAll(".owl-nav button")[2];
    buttonsDos.classList.add('bottonLeft');
    const buttonsTree = document.querySelectorAll(".owl-nav button")[3];
    buttonsTree.classList.add('bottonRight');



});

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


