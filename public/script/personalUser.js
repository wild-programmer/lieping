// 底部熟练程度
(function() {
    var val = '',
        va = [''];
    $('.setUp_contjinengbc').on('click', function() {
        var value = $('.cont_jineng').val(); //技能语言
        val = $('.shuliand').html(); //熟练程度
        for (var i = 0; i < va.length; i++) {
            if (va[i] == value) {
                $('.show_jin').each(function(i, el) {
                    var value1 = el.innerHTML;
                    if (value1 == value) {
                        if (val == '一般') {
                            $(el).parent().siblings('div').removeClass('cont_color');
                            $(el).parent().siblings('div').eq(1).addClass('cont_color');
                            $(el).siblings().html(val);
                        } else if (val == '良好') {
                            $(el).parent().siblings('div').removeClass('cont_color');
                            $(el).parent().siblings('div').eq(1).addClass('cont_color');
                            $(el).parent().siblings('div').eq(2).addClass('cont_color');
                        } else if (val == '熟练') {
                            $(el).parent().siblings('div').removeClass('cont_color');
                            $(el).parent().siblings('div').eq(1).addClass('cont_color');
                            $(el).parent().siblings('div').eq(2).addClass('cont_color');
                            $(el).parent().siblings('div').eq(3).addClass('cont_color');
                        } else if (val == '精通') {
                            $(el).parent().siblings('div').removeClass('cont_color');
                            $(el).parent().siblings('div').addClass('cont_color');
                        } else {
                            return
                        }
                    }
                })

            } else if (va[i] != value && i == va.length - 1 && value != '') {
                setTimeout(function() {
                    va.push(value);
                    if (val == '一般') {
                        var Html = '<div class="setUp_contjineng20L">' +
                            '<div class="TBbox4 Tb"></div>' +
                            '<div class="TBbox1 Tb cont_color"></div>' +
                            '<div class="TBbox2 Tb"></div>' +
                            '<div class="TBbox3 Tb"></div>' +
                            '<span class="TBboxPotion">' +
                            '<p class="show_jin">' + value + '</p>' +
                            '<p class="show_try">' + val + '</p>' +
                            '<i class="TBboxhidden">' +
                            '</i>' +
                            '</span>' +
                            '</div>'
                    } else if (val == '良好') {
                        var Html = '<div class="setUp_contjineng20L">' +
                            '<div class="TBbox4 "></div>' +
                            '<div class="TBbox1 cont_color"></div>' +
                            '<div class="TBbox2 cont_color"></div>' +
                            '<div class="TBbox3 "></div>' +
                            '<span class="TBboxPotion">' +
                            '<p class="show_jin">' + value + '</p>' +
                            '<p class="show_try">' + val + '</p>' +
                            '<i class="TBboxhidden">' +
                            '</i>' +
                            '</span>' +
                            '</div>'
                    } else if (val == '熟练') {
                        var Html = '<div class="setUp_contjineng20L">' +
                            '<div class="TBbox4 "></div>' +
                            '<div class="TBbox1 cont_color"></div>' +
                            '<div class="TBbox2 cont_color"></div>' +
                            '<div class="TBbox3 cont_color"></div>' +
                            '<span class="TBboxPotion">' +
                            '<p class="show_jin">' + value + '</p>' +
                            '<p class="show_try">' + val + '</p>' +
                            '<i class="TBboxhidden">' +
                            '</i>' +
                            '</span>' +
                            '</div>';
                    } else if (val == '精通') {
                        var Html = '<div class="setUp_contjineng20L">' +
                            '<div class="TBbox4 cont_color"></div>' +
                            '<div class="TBbox1 cont_color"></div>' +
                            '<div class="TBbox2 cont_color"></div>' +
                            '<div class="TBbox3 cont_color"></div>' +
                            '<span class="TBboxPotion">' +
                            '<p class="show_jin">' + value + '</p>' +
                            '<p class="show_try">' + val + '</p>' +
                            '<i class="TBboxhidden">' +
                            '</i>' +
                            '</span>' +
                            '</div>'

                    } else {
                        return
                    }
                    document.querySelector('.setUp_contjineng20C').innerHTML += Html;
                }, 200)

            }
        }
        document.querySelector('.cont_jineng').value = ''
    })
    $('.setUp_contjinengqx').on('click', function() {
        document.querySelector('.cont_jineng').value = ''
    })
})()
$(document).ready(function() {
    $(".setUp_contjineng20C").on("click", '.TBboxhidden', function() {
        $(this).parent().parent().remove();
    });
});
// 点击元素
// [
//     {初始化状态的点击元素},记录外层的位置。记录内层的位置
//     {完善中的点击保存元素},
//     {完善中的点击取消元素},
//     {完善后的点击元素}
// ]
// 操作的元素
// [{
//     // 初始化状态下要操作的元素
//     0: {},
//     1: {},
//     2: {},
// }, {
//     // 完善中状态下要点击的元素
//     0: {},
//     1: {},
//     2: {},
// }, {
//     // 完善后状态下要点击的元素
//     0: {},
//     1: {},
//     2: {},
//     3: {},
// }, 
// ]
jianliTag();

function jianliTag() {
    var continer_zpzwspan = document.querySelectorAll("#continer_zpzwspan");
    // var jibenxinx3 = document.querySelectorAll(".jibenxinx3");
    var len = continer_zpzwspan.length;
    var newlyclick = function(el1, el2, el3, el4) {
        el1.style.display = "block";
        el2.style.display = "none";
        el3.style.display = "none";
        if (el4) {
            el4.style.display = "none";
        }
    }

    var clickarr = [],
        caozuoarr = [];
    clickarr = [{
        '0': 'jibenxinx1',
        '1': 'setUp_contqiuzhi0',
        '2': 'setUp_contjiaoyu0',
        '3': 'setUp_contjingyan0',
        '4': 'setUp_contxiangmu0',
        '5': 'setUp_contjineng0',
    }, {
        '0': 'setUp_jibenxinxbc',
        '1': 'setUp_qiuzhiyixbc',
        '2': 'setUp_contjiaoyubc',
        '3': 'setUp_contjingyanbc',
        '4': 'setUp_contxiangmubc',
        '5': 'setUp_contjinengbc',
    }, {
        '0': 'setUp_jibenxinxqx',
        '1': 'setUp_qiuzhiyixqx',
        '2': 'setUp_contjiaoyuqx',
        '3': 'setUp_contjingyanqx',
        '4': 'setUp_contxiangmuqx',
        '5': 'setUp_contjinengqx',
    }, {
        '0': 'jibenxinx3',
        '1': 'setUp_contqiuzhi21',
        '2': 'setUp_contjiaoyu21',
        '3': 'setUp_contjingyan21',
        '4': 'setUp_contxiangmu21',
        '5': 'setUp_contjineng21',
    }]
    caozuoarr = [{ //显示 隐藏 隐藏
        '0': ['jibenxinx', 'jibenxinx2', 'jibenxinx1'],
        '1': ['setUp_contqiuzhi1', 'setUp_contqiuzhi01', 'setUp_contqiuzhi0'],
        '2': ['setUp_contjiaoyu1', 'setUp_contjiaoyu01', 'setUp_contjiaoyu0'],
        '3': ['setUp_contjingyan1', 'setUp_contjingyan01', 'setUp_contjingyan0'],
        '4': ['setUp_contxiangmu1', 'setUp_contxiangmu01', 'setUp_contxiangmu0'],
        '5': ['setUp_contjineng1', 'setUp_contjineng01', 'setUp_contjineng0'],
    }, { //显示 显示 隐藏
        '0': ['setUp_perfect', 'jibenxinx3', 'jibenxinx'],
        '1': ['setUp_contqiuzhi20', 'setUp_contqiuzhi21', 'setUp_contqiuzhi1'],
        '2': ['setUp_contjiaoyu20', 'setUp_contjiaoyu21', 'setUp_contjiaoyu1'],
        '3': ['setUp_contjingyan20', 'setUp_contjingyan21', 'setUp_contjingyan1'],
        '4': ['setUp_contxiangmu20', 'setUp_contxiangmu21', 'setUp_contxiangmu1'],
        '5': ['setUp_contjineng20', 'setUp_contjineng21', 'setUp_contjineng1'],
    }, {
        '0': ['setUp_perfect', 'jibenxinx3', 'jibenxinx'],
        '1': ['setUp_contqiuzhi20', 'setUp_contqiuzhi21', 'setUp_contqiuzhi1'],
        '2': ['setUp_contjiaoyu20', 'setUp_contjiaoyu21', 'setUp_contjiaoyu1'],
        '3': ['setUp_contjingyan20', 'setUp_contjingyan21', 'setUp_contjingyan1'],
        '4': ['setUp_contxiangmu20', 'setUp_contxiangmu21', 'setUp_contxiangmu1'],
        '5': ['setUp_contjineng20', 'setUp_contjineng21', 'setUp_contjineng1'],
    }, { //显示 隐藏 隐藏 隐藏
        '0': ['jibenxinx', 'jibenxinx2', 'setUp_perfect', 'jibenxinx3'],
        '1': ['setUp_contqiuzhi1', 'setUp_contqiuzhi01', 'setUp_contqiuzhi20', 'setUp_contqiuzhi21'],
        '2': ['setUp_contjiaoyu1', 'setUp_contjiaoyu01', 'setUp_contjiaoyu20', 'setUp_contjiaoyu21'],
        '3': ['setUp_contjingyan1', 'setUp_contjingyan01', 'setUp_contjingyan20', 'setUp_contjingyan21'],
        '4': ['setUp_contxiangmu1', 'setUp_contxiangmu01', 'setUp_contxiangmu20', 'setUp_contxiangmu21'],
        '5': ['setUp_contjineng1', 'setUp_contjineng01', 'setUp_contjineng20', 'setUp_contjineng21'],
    }]

    for (var i = 0; i < clickarr.length; i++) {
        var clickelall = clickarr[i];
        for (var j = 0; j < len; j++) {
            var clickel = document.querySelector('.' + clickelall[j]);
            clickel.flag = i;
            clickel.index = j;
            (function(el) {
                var k0 = clickel.flag,
                    k1 = clickel.index;

                var caozuo = caozuoarr[k0][k1];
                var el1, el2, el3, el4;
                if (k0 === 0) {
                    // 就是初始化状态的点击元素
                    el1 = queryslect(caozuo[0]);
                    el2 = queryslect(caozuo[1]);
                    el3 = queryslect(caozuo[2]);
                    el.onclick = function() {
                        newlyclick(el1, el2, el3)
                    }
                } else if (k0 === 1 || k0 === 2) {
                    // 就是完善中的点击保存元素
                    el1 = queryslect(caozuo[0]);
                    el2 = queryslect(caozuo[1]);
                    el3 = queryslect(caozuo[2]);
                    el.onclick = function() {
                        el1.style.display = "block";
                        el2.style.display = "block";
                        el3.style.display = "none";
                    }
                } else {
                    // 就是完善后的点击元素
                    el1 = queryslect(caozuo[0]);
                    el2 = queryslect(caozuo[1]);
                    el3 = queryslect(caozuo[2]);
                    el4 = queryslect(caozuo[3]);
                    el.onclick = function() {
                        newlyclick(el1, el2, el3, el4);
                    }
                }

                function queryslect(clas) {
                    return document.querySelector('.' + clas);
                }

            })(clickel)
        }
    }
}

// 行业下拉
hangye('xiala_qiw_show');
hangye('xiala_qiw_show2');

function hangye(el) {
    var len = 2000,
        tag = 0,
        xialvalue = '';
    $('#' + el + ' li').each(function(i, el) {
        $(el).css('z-index', "" + len - i * 10 + "");
        $(el).on('click', function() {

            // console.log($(this).children('span').css('backgroundColor'))
            if ($(this).children('span').css('backgroundColor') == 'rgb(233, 85, 19)') {
                $(this).children('span').css('backgroundColor', '');
                tag--;
            } else if (tag <= 2) {
                $(this).children('span').css('backgroundColor', '#e95513');
                tag++;
            }
        })
    })
    $('#' + el + ' .xial_bc').on('click', function() {
        // console.log(xialvalue)
        tag = 0;
        $('#' + el + ' span').each(function(i, el) {
            if ($(el).css('backgroundColor') == 'rgb(233, 85, 19)') {
                xialvalue += $(el).html() + " ";
            }
            $(el).css('backgroundColor', 'white');
        })
        $('#' + el + '').siblings('i').html(xialvalue);
        $('#' + el + '').removeClass('active');
        $(this).parent().parent().siblings('.xial_qiw').children('.xial_qiw_span').removeClass('actives');
        xialvalue = '';
    })
    $('#' + el + ' .xial_qx').on('click', function() {
        // console.log(xialvalue)
        tag = 0;
        xialvalue = '';
        $('#' + el + '').removeClass('active');
        $('#' + el + ' span').each(function(i, el) {
            $(el).css('backgroundColor', 'white');
        })
        $(this).parent().parent().siblings('.xial_qiw').children('.xial_qiw_span').removeClass('actives');
    })
}

(function() {
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
    $('body').on('click', '.pingjia_topRclk', function(event) {
        stopPro(event);
        if ($('.pingjia_topRB').hasClass('active')) {
            $('.pingjia_topRB').removeClass('active');
            $(this).removeClass('actives');
        } else {
            $(this).siblings('div').addClass('active').end().addClass('actives');
        }
    });
    $('body').on('click', '.hidexial2', function(event) {
        stopPro(event);
        if ($('.contqz_xiala_oryue').hasClass('active')) {
            $('.contqz_xiala_oryue').removeClass('active');
            $('.hidexial2 >span').removeClass('actives');
        } else {
            $(this).siblings('div').addClass('active').end().children('span').addClass('actives');
        }
    });
    $('body').on('click', '.hidexial1', function(event) {
        stopPro(event);
        if ($('.lp_xl').hasClass('active')) {
            $('.lp_xl').removeClass('active');
            $('.hidexial1 >span').removeClass('actives');
        } else {
            $(this).parent().siblings('div').addClass('active').end().end().children('span').addClass('actives');
        }
    });
    $('body').on('click', function() {
        $('.contqz_xiala_oryue').removeClass('active');
        $('.lp_xl').removeClass('active');
        $('.pingjia_topRB').removeClass('active');
        $('.hidexial2 span').removeClass('actives');
        $('.hidexial1 span').removeClass('actives');
        $('.pingjia_topRclk').removeClass('actives');
    });


    $('body').on('click', '.lp_xl', function(event) {
        stopPro(event);
    })
    $('body').on('click', '#xiala_qiw_show', function(event) {
        stopPro(event);
    })
    $('body').on('click', '#xiala_qiw_show2', function(event) {
        stopPro(event);
    })
    $('body').on('click', '.contqz_xiala_oryue  li', function(event) {
        stopPro(event);
        $(this).parent().siblings('i').text($(this).text());
        $(this).parent().removeClass('active').siblings('p').children('span').removeClass('actives');
    })
    $('body').on('click', '.xiala_show  li', function(event) {
        stopPro(event);
        $(this).parent().siblings('div').children('i').text($(this).text());
        $(this).parent().removeClass('active').siblings('div').children('p').children('span').removeClass('actives');
    })
    $('body').on('click', '.pingjia_topRB  li', function(event) {
        stopPro(event);
        $(this).parent().siblings('i').text($(this).text());
        $(this).parent().removeClass('active').siblings('span').removeClass('actives');
    })
})()

// 侧边栏选项卡
$('.ceb_navul li').each(function(i, el) {
    $(el).click(function() {
        $(this).append('<m></m>').siblings().children('m').remove().end().end().addClass('ceb_navback').siblings().removeClass('ceb_navback');
        var elname = $(this).attr('data-navname');
        if (elname == 'resume_tianx') {
            $('#' + elname).css('display', 'block').next().css('display', 'none');
        } else if (elname == 'resume_pingj') {
            $('#' + elname).css('display', 'block').prev().css('display', 'none');
        }
    })
})
$("#lp_page").pagination({
    pageIndex: 2, //当前页数
    pageSize: 2, //每页显示的数据
    total: 100,
    debug: true,
    // showInfo: true, //是否显示分页信息
    showJump: true, //是否显示跳转页
    // showPageSizes: true, // 是否显示选择每页数量
    pageElementSort: ['$page', '$size', '$jump', '$info']
});
// 头像上传

var input = document.querySelector('input[type=file]'); //input 标签
var result = document.querySelector('.reader_fileboxCT');
var filebox = document.querySelector('.reader_filebox');
var bc = document.querySelector('.reader_file_bc');

$('.ceb_active').next().click(function() {
    $('.ceb_nav_img').html('');
})
document.querySelector('.ceb_updata').onclick = function() {
    filebox.style.display = 'block';
}
document.querySelector('.updatahidden').onclick = function() {
    filebox.style.display = 'none';
}
document.querySelector('.reader_file_qx').onclick = function() {
    filebox.style.display = 'none';
    result.innerHTML = document.querySelector('.ceb_nav_img').innerHTML;
}
document.querySelector('.reader_file_bc').onclick = function() {
    filebox.style.display = 'none';
    var img = result.innerHTML;
    document.querySelector('.ceb_nav_img').innerHTML = img;
}

if (typeof FileReader === 'undefined') {
    result.innerHTML = "抱歉，你的浏览器不支持 FileReader";
    input.setAttribute('disabled', 'disabled');
} else {
    input.addEventListener('change', readFile, false);
}


function readFile() {
    var file = this.files[0];
    if (!/image\/\w+/.test(file.type)) {
        alert("请确保文件为图像类型");
        return false;
    }
    var reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = function(e) {
        result.innerHTML = '<img src="' + this.result + '" alt=""/>';
    }
}
// 底部性别选择
$('.xingbie').each(function(i, el) {
    $(el).on('click', function() {
        $(this).siblings('button').removeClass('activexb');
        $(this).addClass('activexb');
    })
})

// 时间日期插件
$('.lp_datepicker').datepicker({
    format: 'yyyy-mm-dd',
    language: 'zh-CN',
    endDate: '0d'
})