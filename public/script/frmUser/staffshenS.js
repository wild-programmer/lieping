// 下拉框
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

// 分页设置
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
$('.m-pagination-group').addClass('clearfix')


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

// 点击body隐藏下拉
clickbody();

function clickbody() {
    $('body').on('click', '.pingjia_topRclk', function(event) {
        // event.stopPropagation();
        stopPro(event);
        if ($('.pingjia_topRB').hasClass('active')) {
            $('.pingjia_topRB').removeClass('active');
            $('.pingjia_topRclk').removeClass('actives');
        } else {
            $(this).siblings('div').addClass('active').end().addClass('actives');
        }
    });
    $('body').on('click', function() {
        $('.pingjia_topRB').removeClass('active');
        $('.pingjia_topRclk').removeClass('actives');
        $('.lp_tousu').css('display', 'none')
    });
    $('body').on('click', '.pingjia_topRB li', function(event) {
        // event.stopPropagation();
        stopPro(event);
        $(this).parent().siblings('i').text($(this).text());
        $(this).parent().removeClass('active').siblings('span').removeClass('actives');
    })
    $('body').on('click', '.shensu_table', function(event) {
        // event.stopPropagation();
        stopPro(event);
        $('.lp_tousu').css('display', 'block');
    })

    $('body').on('click', '.lp_tousu', function(event) {
        stopPro(event);
    })
    $('body').on('click', '.lp_tousu .lp_tousu_tj', function(event) {
        // event.stopPropagation();
        stopPro(event);
        $('.lp_tousu').css('display', 'none');
    })
}