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



// 企业展示大图上传

var uodata2 = function() {
    var input = document.querySelector('.updata2'); //input 标签
    var result = document.querySelector('.firmUserImg'); //填充图片的标签
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
uodata2();

// 一大堆就选一个的单选按钮
$('.checkdball').each(function(i, el) {
    $(el).click(function() {
        if (this.checked) {
            $('.checkdball').each(function(i,el){
                el.checked=false;
            })
            $(this).parent().addClass('checkd_icon').siblings().removeClass('checkd_icon');
           this.checked=true;
        } else {
            $(this).parent().removeClass('checkd_icon');
        }
    })
})
$('.checkdbal').click(function(){
    if (this.checked) {
            $(this).parent().addClass('checkd_icon');
           this.checked=true;
        } else {
            $(this).parent().removeClass('checkd_icon');
        }
})
$('.checkdCur').each(function(i, el) {
    $(el).click(function() {
        if (this.checked) {
            $(this).parent().addClass('check_1_icon');
           this.checked=true;
        } else {
            $(this).parent().removeClass('check_1_icon');
        }
    })
})