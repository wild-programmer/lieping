// 薪资下拉
$('.xiala').each(function(i, el) {
    el.index = i;
    $(el).on('click', function() {
        // $(document.body).on('click', $(el), function() {
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
        console.log($('.continer_content .firmUserImg')[this.index].childNodes[0])
        if ($($('.continer_content .firmUserImg')[this.index]).children('img').length == 1) {
            $('.continer_contentimg:eq(' + [this.index] + ')').html($('.continer_content .firmUserImg')[this.index].childNodes[0]);

        }
    })
})
$('.outsidep_xiugai').each(function(i, el) {
    el.index = i;
    $(el).click(function() {
        $('.firmUserImg')[this.index].style.paddingTop = '0px';
        $('.firmUserImg')[this.index].innerHTML = $('.continer_contentimg')[this.index].innerHTML;
        $('.outsidep_shanchu')[this.index].style.display = 'none';
        $('.outsidep_xiugai')[this.index].style.display = 'none';
        $('.continer_content1')[this.index].style.display = 'none';
        $('.continer_content')[this.index].style.display = 'block';
    })
})


// //我的评价下拉
// $('.pingjia_topRclk').click(function() {
//     document.querySelector('.pingjia_topRB').style.display = 'block';
//     $('.pingjia_topRclk').css({
//         'transform': 'rotate(-135deg)',
//         'borderColor': '#e95513',
//         'marginTop': '7px'
//     })
// })
// $('.pingjia_topRB li').each(function(i, el) {
//     $(el).on('click', function() {
//         $('.pingjia_topRclk').siblings('i').html($(this).html());
//         $('.pingjia_topRB').toggle();
//         $('.pingjia_topRclk').css({
//             'transform': 'rotate(45deg)',
//             'borderColor': '#666',
//             'marginTop': ''
//         });
//     })
// })

// // 个人申诉
// $('.shensu_table').each(function(i, el) {
//     $(el).on('click', function() {
//         $('.lp_tousu').css('display', 'block');
//     })
// })
// $('.lp_tousu_tj').click(function() {
//     $('.lp_tousu').css('display', 'none');
//     $('.pingjia_contentF').css('display', 'block')
// })

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