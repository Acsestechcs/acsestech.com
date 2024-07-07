$( document ).ready(function() {
    new WOW().init();
});

// navbar toggle
$(function() {
    $('#ChangeToggle').click(function() {
        $('#navbar-hamburger').toggleClass('show');
        $('#navbar-close').toggleClass('show');  
    });
});