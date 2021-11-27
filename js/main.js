$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY < 20) {
            $('.nav-bar').addClass("nav--toTop");
        } else {
            $('.nav-bar').removeClass("nav--toTop");
        }

    })

    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();
    
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 1500);
    });


    const menuBurger = $('.btn-burger');
    const menuList = $('.nav-bar__sub-ul');

    menuBurger.click(function(e) {
        menuBurger.toggleClass('active-burger');
        menuList.toggleClass('list--block');
    })

});
