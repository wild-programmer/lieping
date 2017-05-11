// 多个只选一个 checkdcula checkd1_icon  checkdball checkd_icon
$('.checkdball').each(function(i, el) {
    $(el).click(function() {
        if (this.checked) {
            $('.checkdball').each(function(i, el) {
                el.checked = false;
            })
            $(this).parent().addClass('checkd_icon').siblings().removeClass('checkd_icon');
            this.checked = true;
        } else {
            $(this).parent().removeClass('checkd_icon');
        }
    })
})
$('.checkdcula').each(function(i, el) {
    $(el).click(function() {
        if (this.checked) {
            $('.checkdcula').each(function(i, el) {
                el.checked = false;
            })
            $(this).parent().addClass('checkd1_icon').siblings().removeClass('checkd1_icon');
            this.checked = true;
        } else {
            $(this).parent().removeClass('checkd1_icon');
        }
    })
})

// checkdcull checkd1_icon
$('.checkdcull').each(function(i, el) {
    $(el).click(function() {
        if (this.checked) {
            $(this).parent().addClass('checkd1_icon');
        } else {
            $(this).parent().removeClass('checkd1_icon');
        }

    })
})



function stopPro(e) {
    if (navigator.appName == "Microsoft Internet Explorer" && (navigator.appVersion.match(/7./i) == "7." || navigator.appVersion.match(/8./i) == "8.")) {

        if (event.stopPropagation) {
            // this code is for Mozilla and Opera 
            event.stopPropagation();
        } else if (window.event) {
            // this code is for IE 
            window.event.cancelBubble = true;
        }
    } else {
        e.stopPropagation();
    }
}


$('body').on('click', '.xiala_show', function(event) {
    // event.stopPropagation();
    stopPro(event);
    if ($('.contqz_xiala_oryue').hasClass('active')) {
        $('.contqz_xiala_oryue').removeClass('active');
        $('.xiala_show').removeClass('actives');
    } else {
        $(this).next('div').addClass('active').parent().parent().siblings().find('div').find('div').removeClass('active');
        $(this).addClass('actives').parent().parent().parent().siblings().find('div').find('p').find('span').removeClass('active');
    }
});
$('body').on('click', function() {
    $('.contqz_xiala_oryue').removeClass('active');
    $('.xiala_show').removeClass('actives');
});
$('body').on('click', '.contqz_xiala_oryue li', function(event) {
    // event.stopPropagation();
    stopPro(event);
    $(this).parent().siblings('.xiala_content').text($(this).text());
    $(this).parent().removeClass('active').siblings('.xiala_show').removeClass('actives');
})