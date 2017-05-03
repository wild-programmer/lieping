$('.contentr_bar span').each(function(i, el) {
    $(el).on('click', function() {
        $('.contentrC').each(function(i, el) {
            $(el).css('display', 'none');
        })
        $('.ulshow').each(function(i, el) {
            $(el).css('display', 'block');
        })
        $(this).parent().siblings('.contentrC').css('display', 'block').end().siblings('ul').css('display', 'none');
    })
})

var tijiao = function(el) {
    $('.' + el + '').each(function(i, el) {
        $(el).on('click', function() {
            $(this).parent().parent().css('display', 'none').siblings('ul').css('display', 'block');
        })
    })
}
tijiao('quxiao');
tijiao('baocun');

// 头像上传
$('.xiug').on('click', function() {
    $('.reader_filebox').css('display', 'block')
})
$('.updatahidden').on('click', function() {
    $('.reader_filebox').css('display', 'none')
})
$('.reader_file_qx').on('click', function() {
    $('.reader_filebox').css('display', 'none')
})
$('.reader_file_bc').on('click', function() {
    $('.reader_filebox').css('display', 'none');
    var data = $(this).parent().prev().children('.reader_fileboxCT')[0].innerHTML
    $(this).parent().prev().children('.reader_fileboxCT')[0].innerHTML = '';
    document.querySelector('.contentl_herde').innerHTML = data;
})
$('.chac').on('click', function() {
    $(this).parent().parent().parent().prev()[0].innerHTML = '<img src="../../public/uploade/lke.png" alt="">';
})
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
uodata2('.updataclick', '.reader_fileboxCT');