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

//  <p class="lp_xl_showoryue"> <span class="ceb_xialspan"></span></p>
//                             <div class="contqz_xiala_oryue clearfix">
//                                 <li class="lp_yearmo">年薪</li>
//                                 <li class="lp_moseney">月薪</li>
//                             </div>

// 日期下拉 lp_xiala
(function() {
    //首先要考虑到获取 多个showdata里面的值 点击谁获取谁上面的showdata 方法只有一个  记录是第几个日期插件  然后获取第几个的showdata值
    //     $('#xiala').on('click', function() {
    //     console.log(12);
    //     $('#xiala_show').toggle();
    // })
    var mr_months = document.querySelectorAll('.mr_month');
    var mr_years = document.querySelectorAll('.mr_year');
    var lp_showel = document.querySelectorAll('.lp_xl_showdata');
    // 年薪下拉
    var lp_yearmos = document.querySelectorAll('.lp_yearmo');
    var mr_yeva,
        mr_value;
    for (var j = 0; j < lp_showel.length; j++) {
        (function(i) {
            lp_showel[i].tag = i;
            lp_showel[i].onclick = function() {
                var lp_xl1 = document.querySelectorAll('.lp_xl')[this.tag];
                var lp_xl_showjT = document.querySelectorAll('.lp_xl_showjT')[this.tag];
                // lp_xl1.style.display = 'block';
                $(lp_xl1).toggle();
                if (lp_xl1.style.display == 'none') {
                    lp_xl_showjT.style.transform = 'rotate(45deg)';
                    lp_xl_showjT.style.borderColor = '#666';
                } else {
                    lp_xl_showjT.style.transform = 'rotate(-135deg)';
                    lp_xl_showjT.style.borderColor = '#e95513';
                }

            }
        })(j);
    }
    for (var i = 0; i < mr_months.length; i++) {
        // mr_months[i].tage = i;
        (function(i) {
            var k = i;

            var lis = mr_years[i].querySelectorAll('li');
            var lis2 = mr_months[i].querySelectorAll('li');
            for (var i = 0; i < lis.length; i++) {
                //記錄这个哪一个 日期下拉  要对应showdata
                lis[i].tage = k;
                (function(el) {
                    el.onclick = function() {
                        var All = this.parentNode.children;
                        for (var i = 0, pl = All.length; i < pl; i++) {
                            All[i].style.backgroundColor = "";
                        }
                        for (var i = 0, pl2 = lis2.length; i < pl2; i++) {
                            lis2[i].style.backgroundColor = "";
                        }
                        this.style.backgroundColor = "#e95513";
                        // lis[i].tage; 这是第几个showdata
                        mr_yeva = this.innerText;
                    }
                })(lis[i]);
                if (i < 12) {
                    (function(el2) {
                        el2.onclick = function() {
                            for (var i = 0, pl = lis2.length; i < pl; i++) {
                                lis2[i].style.backgroundColor = "";
                            }
                            this.style.backgroundColor = "#e95513";
                            var mr_mova = parseInt(this.innerText);
                            if (mr_mova < 10) {
                                mr_mova = '0' + mr_mova;
                            }
                            var riqi = document.querySelectorAll('.showdata')[lis[i].tage];
                            var lp_xl = document.querySelectorAll('.lp_xl')[lis[i].tage];
                            var lp_xl_showjT = document.querySelectorAll('.lp_xl_showjT')[lis[i].tage];
                            if (mr_yeva == undefined) {
                                mr_yeva = riqi.innerText.split('.')[0];
                            }
                            mr_value = mr_yeva + '.' + mr_mova;
                            riqi.innerText = mr_value;
                            // lp_xl.style.display = 'none';
                            $(lp_xl).toggle();
                            lp_xl_showjT.style.transform = 'rotate(45deg)';
                            lp_xl_showjT.style.borderColor = '#666';
                            mr_yeva = undefined;
                        }
                    })(lis2[i]);
                }
            }
        })(i)




    }


})()
//     $('#xiala').on('click', function() {
//     console.log(12);
//     $('#xiala_show').toggle();

// })
// 行业下拉
console.log($('#xial_qiw_show'));
(function() {
    var tag = 0,
        value = '';
    $("#xial_qiw").on('click', function() {
        $('#xiala_qiw_show').toggle();
        if ($('#xiala_qiw_show').css('display') == 'block') {
            $('#xiala_qiw_show').children().children().children('span').css('backgroundColor', 'white');
            // $('#xiala_qiw_show').siblings('i').html('');
            // console.log($('#xiala_qiw_show').children().children('span'));
            tag = 0;
        }
    })
    $('.xial_bc').click(function() {
        $('#xiala_qiw_show').toggle();
        $(this).parent().parent().siblings('i').html(value);
    })
    $('.xial_qx').click(function() {
        $('#xiala_qiw_show').toggle();
    })
    $("#xiala_qiw_show li").each(function(i, el) {
        // var xiala_qiw_show = $(this).parent();
        // xiala_qiw_show.value = 0;
        // console.log(xiala_qiw_show)
        // el.querySelector('span');
        el.style.zIndex = $('#xiala_qiw_show2 li').length - i;
        $(el).on('click', function() {
            if (tag < 3) {
                var val = $(this.querySelector('span')).html();
                console.log(val);
                if (tag == 0) {
                    value = '';
                    value += val;
                    tag++;
                } else {
                    value += ',' + val;
                    tag++;
                }
                // console.log(value);
                $(this.querySelector('span')).css('backgroundColor', '#e95513');
            }

        })

    })
})();
// 下拉
(function() {
    var tag = 0,
        value = '';
    $("#xial_qiw2").on('click', function() {
        $('#xiala_qiw_show2').toggle();
        if ($('#xiala_qiw_show2').css('display') == 'block') {
            $('#xiala_qiw_show2').children().children().children('span').css('backgroundColor', 'white');
            $('#xiala_qiw_show2').siblings('i').html('');
            // console.log($('#xiala_qiw_show2').children().children('span'));
            tag = 0;
        }
    })
    $('.xial_bc2').click(function() {
        $('#xiala_qiw_show2').toggle();
    })
    $('.xial_qx2').click(function() {
        $('#xiala_qiw_show2').toggle();
    })
    $("#xiala_qiw_show2 li").each(function(i, el) {
        el.style.zIndex = $('#xiala_qiw_show2 li').length * 1000 - i * 1000;
        $(el).on('click', function() {
            if (tag < 3) {
                var val = $(this.querySelector('span')).html();
                if (tag == 0) {
                    value += val;
                    tag++;
                } else {
                    value += ',' + val;
                    tag++;
                }
                // console.log(value);
                $(this.querySelector('span')).css('backgroundColor', '#e95513');
                $(this).parent().parent().siblings('i').html(value);
            }

        })

    })
})();


// 薪资下拉
$('.xiala').each(function(i, el) {
    el.index = i;
    $(el).on('click', function() {
        var k = this.index;
        // console.log(k);
        var that = this;
        var $el = $('.xiala_show').get(k);
        var $elspan = $('.xialaspan').get(k); //箭头元素
        $($el).toggle();
        if ($($el).css('display') == 'none') {
            // $($elspan).css('transform', 'rotate(45deg)', 'borderColor', '#666');
            $($elspan).css({
                'transform': 'rotate(45deg)',
                'borderColor': '#666',
                'marginTop': ''
            });
        } else {
            $($elspan).css({
                'transform': 'rotate(-135deg)',
                'borderColor': '#e95513',
                'marginTop': '7px'
            });
        }


        //下边是点击显示后 获取到value值  #xiala_show 下边的p元素
        var $xiala_show_p = $el.querySelectorAll('li');
        $($xiala_show_p).each(function(j, el) {
            // console.log(el);
            $(el).on('click', function() {
                // console.log($(that).siblings(i));
                var xiala_show_i = $(that).siblings(i)[0];
                xiala_show_i.innerText = $(this).html();
                $($el)[0].style.display = 'none';
                $('.xialaspan').get(k);
                $($elspan).css({
                    'transform': 'rotate(45deg)',
                    'borderColor': '#666',
                    'marginTop': ''
                });
            })
        })
    })
})



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
    // 给按钮注册点击事件
    //  var result = document.getElementById("result");

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

//我的评价下拉
$('.pingjia_topRclk').click(function() {
    document.querySelector('.pingjia_topRB').style.display = 'block';
    $('.pingjia_topRclk').css({
        'transform': 'rotate(-135deg)',
        'borderColor': '#e95513',
        'marginTop': '7px'
    })
})
$('.pingjia_topRB li').each(function(i, el) {
    $(el).on('click', function() {
        $('.pingjia_topRclk').siblings('i').html($(this).html());
        $('.pingjia_topRB').toggle();
        $('.pingjia_topRclk').css({
            'transform': 'rotate(45deg)',
            'borderColor': '#666',
            'marginTop': ''
        });
    })
})

// 个人申诉
$('.shensu_table').each(function(i, el) {
    $(el).on('click', function() {
        $('.lp_tousu').css('display', 'block');
    })
})
$('.lp_tousu_tj').click(function() {
    $('.lp_tousu').css('display', 'none');
    $('.pingjia_contentF').css('display', 'block')
})


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