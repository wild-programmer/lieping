
$('.m-pagination-group').addClass('clearfix')
// 员工档案刷新

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


$('body').on('click', '.table_xial', function (event) {
    // event.stopPropagation();
    stopPro(event);
    if ($('.table_xialX').hasClass('active')) {
        $('.table_xialX').removeClass('active');
        $('.table_xial >span').removeClass('actives');
    } else {
        $(this).siblings('div').addClass('active').end().children('span').addClass('actives');
    }
});
$('body').on('click', function () {
    $('.table_xialX').removeClass('active');
    $('.table_xial span').removeClass('actives');
});
$('body').on('click', '.table_xialX p', function (event) {
    // event.stopPropagation();
    stopPro(event);
    $(this).parent().siblings().children('i').text($(this).text());
    $(this).parent().removeClass('active').siblings().children('span').removeClass('actives');
})



// 企业头像上传
var upheader = function () {

    var input = document.querySelector('input[type=file]'); //input 标签
    var result = document.querySelector('.reader_fileboxCT');
    var filebox = document.querySelector('.reader_filebox');
    var bc = document.querySelector('.reader_file_bc');
    document.querySelector('.ceb_active').onclick = function () {
        filebox.style.display = 'block'; //  点击删除显示摩太狂
    }
    document.querySelector('.updatahidden').onclick = function () {
        filebox.style.display = 'none';
    }
    document.querySelector('.reader_file_qx').onclick = function () {
        filebox.style.display = 'none';
        result.innerHTML = document.querySelector('.ceb_nav_top').innerHTML;
    }
    document.querySelector('.reader_file_bc').onclick = function () {
        alert('dsdasdaasd');
        var file = new FormData();
        file.append("UploadType", "CompanyLogo");
        file.append("file", $("#companylogfile").get(0).files[0]);
        $.ajax({
            url: "/UploadFile/Index",
            type: "POST",
            processData: false,
            contentType: false,
            async: false,
            data: file,
            success: function (data) {
                if (data.Stata == 200) {
                    filebox.style.display = 'none';
                    var img = result.innerHTML;
                    $('.ceb_nav_top').children('img').remove();
                    $('.ceb_nav_top').append(img);
                }
                else {
                    alert(data.Message);
                }
            }
        })
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

        reader.onload = function (e) {
            result.innerHTML = '<img src="' + this.result + '" alt=""/>';
        }
    }
}
upheader();