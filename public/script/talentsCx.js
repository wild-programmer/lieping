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

//下拉展示
$('.contqz_xiala_oryue').each(function(i, el) {
    el.index = i;
    $(el).children('li').each(function(i, el) {
        el.onclick = function() {
            document.querySelectorAll('.xiala_content')[$(el).parent()[0].index].innerHTML = this.innerHTML;
            $(el).parent().css('display', 'none');
            $($('.xiala_show')[$(el).parent()[0].index]).css({
                'transform': 'rotate(45deg)',
                'top': '0px',
                'border-color': '#666'
            })
        }
    })
})
$('.xiala_show').each(function(i, el) {
    el.onclick = function() {
        el.nextElementSibling.style.display = 'block';
        $(this).css({
            'transform': 'rotate(-135deg)',
            'top': '9px',
            'border-color': '#e95513'
        })
    }

})