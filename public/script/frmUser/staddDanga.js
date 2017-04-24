// 分页
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
    // 员工档案刷新
$('.table_xial').each(function(index, el) {
    el.tag = index;
    $(el).click(function() {
        var tag = this.tag;
        $('.table_xialX').each(function(index, el) {
            el.style.display = 'none';
        });
        $('.table_xialX').get(tag).style.display = 'block';
    })
});
$('.table_xialX>p').each(function(index, el) {
    $(el).click(function() {
        $(this).parent('div').css('display', 'none');
        $(this).parent().prev().html($(this).html() + '<span></span>');
    })
});


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