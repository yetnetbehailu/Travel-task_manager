$('.sidenav').sidenav({edge:'right'});
$('.collapsible').collapsible();
$('.tooltipped').tooltip();
$("select").formSelect();
$(".datepicker").datepicker({
        format: "dd mmm, yyyy",
        yearRange: 3,
        showClearBtn: true,
        i18n: {
            done: "Select"
        }
    });