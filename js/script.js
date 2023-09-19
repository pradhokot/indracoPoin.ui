$(window).ready(function () {
    $('#navtopBelanja').css('top', ($('#topbar').height()));
    $('#sidebarBelanja').css('height', ($('#sidebarBelanja').height() - ($('#topbar').height() + $('#navtopBelanja').height() + $('#navdown').height())));
    $('#sidebarBelanja').css('top', ($('#topbar').height() + $('#navtopBelanja').height()));

    $('#triggerSidebarBelanja').click(function () {
        $(this).toggleClass('active');
        $('#navtopBelanja .nav .nav-item:last-child .nav-link.active').toggleClass('overlapse');
    });
});