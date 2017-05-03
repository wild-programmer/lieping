(function(window) {

    var firmUser = {
        init: function() {
            var that = this;
            that.dropDown();
        },
        dropDown: function() {
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

            function dropDownSwitch() {
                $('body').on('click', '.content .continer_content02 .xiala', function(event) {
                    // event.stopPropagation();
                    stopPro(event);
                    if ($('.contqz_xiala_oryue').hasClass('active')) {
                        $('.contqz_xiala_oryue').removeClass('active');
                        $('.xialaspan').removeClass('actives');
                    } else {
                        $(this).next('div').addClass('active').parent().parent().siblings().find('div').find('div').removeClass('active');
                        $(this).find('span').addClass('actives').parent().parent().parent().siblings().find('div').find('p').find('span').removeClass('active');
                    }
                });
                $('body').on('click', function() {
                    $('.contqz_xiala_oryue').removeClass('active');
                    $('.xialaspan').removeClass('actives');
                });
                $('body').on('click', '.contqz_xiala_oryue li', function(event) {
                    // event.stopPropagation();
                    stopPro(event);
                    $(this).parent().siblings('i').text($(this).text());
                    $(this).parent().removeClass('active').siblings('p').children().removeClass('actives');
                })
                $('body').on('click', '.suoshuhangye ', function(event) {
                    stopPro(event);
                })
            };
            dropDownSwitch();
        }

    };

    $(function() {
        firmUser.init();
    });

    window.firmUser = firmUser;

})(window)




// 企业头像上传
var upheader = function() {

    var input = document.querySelector('input[type=file]'); //input 标签
    var result = document.querySelector('.reader_fileboxCT');
    var filebox = document.querySelector('.reader_filebox');
    var bc = document.querySelector('.reader_file_bc');
    document.querySelector('.ceb_active').onclick = function() {
        filebox.style.display = 'block'; //  点击删除显示摩太狂
    }
    document.querySelector('.updatahidden').onclick = function() {
        filebox.style.display = 'none';
    }
    document.querySelector('.reader_file_qx').onclick = function() {
        filebox.style.display = 'none';
        result.innerHTML = document.querySelector('.ceb_nav_top').innerHTML;
    }
    document.querySelector('.reader_file_bc').onclick = function() {
        filebox.style.display = 'none';
        var img = result.innerHTML;
        $('.ceb_nav_top').children('img').remove();
        $('.ceb_nav_top').append(img);
    }
    $('.ceb_active').next().click(function() {
            if ($('.ceb_nav_top').children('img')) {
                $('.ceb_nav_top').children('img').remove();
            }
            if ($('.reader_fileboxCT').children('img')) {
                $('.reader_fileboxCT').children('img').remove();
            }
        })
        // 给按钮注册点击事件
        //  var result = document.getElementById("result");

    if (typeof FileReader === 'undefined') {
        result.innerHTML = "抱歉，你的浏览器不支持 FileReader";
        input.setAttribute('disabled', 'disabled');
    } else {
        input.addEventListener('change', readFile1, false);
    }


    function readFile1() {
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
}
upheader();



// 企业展示大图上传 updata2 firmUserImg1

var uodata2 = function(elclick, elshow) {
    var input = document.querySelector(elclick); //input 标签
    var result = document.querySelector(elshow); //填充图片的标签
    console.log(result)
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
            result.style.paddingTop = '0px';
            result.innerHTML = '<img src="' + this.result + '" alt=""/>';

        }
    }


}
uodata2('.updata2', '.firmUserImg1');
uodata2('.updata3', '.firmUserImg2');

// 一大堆就选一个的单选按钮
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
    //单选
$('.checkdbal').click(function() {
    if (this.checked) {
        $(this).parent().addClass('checkd_icon');
        this.checked = true;
    } else {
        $(this).parent().removeClass('checkd_icon');
    }
})
$('.checkdCur').each(function(i, el) {
    $(el).click(function() {
        if (this.checked) {
            $(this).parent().addClass('check_1_icon');
            this.checked = true;
        } else {
            $(this).parent().removeClass('check_1_icon');
        }
    })
})


//状态切换
// outsidep_shanchu  outsidep_xiugai 顶部图标点击元素
// 状态1 continer_content      点击元素firmUser_bc  firmUser_qx
// 状态2 continer_content1
//点击保存  让顶部栏图标显示  让状态2显示  continer_contentimg
var imglen = document.querySelectorAll('.firmUserImg').length;
$('.firmUser_qx').each(function(i, el) {
    el.index = i;
    $(el).click(function() {
        $('.outsidep_shanchu')[this.index].style.display = 'block';
        $('.outsidep_xiugai')[this.index].style.display = 'block';
        $('.continer_content1')[this.index].style.display = 'block';
        $('.continer_content')[this.index].style.display = 'none';
    })
})
$('.firmUser_bc').each(function(i, el) {
    el.index = i;
    $(el).click(function() {
        $('.outsidep_shanchu')[this.index].style.display = 'block';
        $('.outsidep_xiugai')[this.index].style.display = 'block';
        $('.continer_content1')[this.index].style.display = 'block';
        $('.continer_content')[this.index].style.display = 'none';
        // if($('.continer_content .firmUserImg').children('img')){}
        if ($($('.continer_content .firmUserImg')[this.index]).children('img').length == 1) {
            $('.continer_contentimg:eq(' + [this.index] + ')').html($('.continer_content .firmUserImg')[this.index].childNodes[0]);

        }
    })
})
$('.outsidep_xiugai').each(function(i, el) {
    el.index = i;
    $(el).click(function() {
        if (this.index < imglen) {
            $('.firmUserImg')[this.index].style.paddingTop = '0px';
            $('.firmUserImg')[this.index].innerHTML = $('.continer_contentimg')[this.index].innerHTML;
        }
        $('.outsidep_shanchu')[this.index].style.display = 'none';
        $('.outsidep_xiugai')[this.index].style.display = 'none';
        $('.continer_content1')[this.index].style.display = 'none';
        $('.continer_content')[this.index].style.display = 'block';
    })
})

// (function($) {
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
                        $('.lp_xl').removeClass('active');
                        $(lp_xl_showjT).removeClass('actives');
                        mr_yeva = undefined;
                    }
                })(lis2[i]);
            }
        }
    })(i)
}


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
    // 行业下拉
$('.suoshuhangyecontentl li').on('click', function() {
    $(this).siblings().removeClass('suoshuhangyeactiv');
    $(this).addClass('suoshuhangyeactiv');
    var that = this;
    $('.suoshuhangyecontentr p').each(function(i, el) {
        if (i == $(that).index()) {
            // alert(1);
            $(this).siblings().css('display', 'none');
            $(this).css('display', 'block');
            // $(this).children('span').each(function(i, el) {
            //     console.log(el)
            //     $(el).on('click', function() {
            //         alert(1);
            //         $('.suoshuhangye').siblings(i).index() = $(this).index();
            //     })
            // })
        }
    })

})
$('.suoshuhangyecontentr span').each(function(i, el) {
    $(el).on('click', function() {
        $('.suoshuhangye').siblings('i').html($(this).html());
        $('.suoshuhangye').siblings('p').children('span').removeClass('actives');
        $('.suoshuhangye').removeClass('active');
    })
})
$('.suoshuhangyequx').on('click', function() {
    $('.suoshuhangye').siblings('p').children('span').removeClass('actives');
    $('.suoshuhangye').removeClass('active');
})

// 下拉框数据填充
// $('.xialaval')

$('.showval').each(function(i, el) {
    $(el).on('click', function() {
        $(this).parent().siblings('i').attr('data-val', $(this).attr('data-val'));
    })
})