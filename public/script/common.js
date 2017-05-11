function GetVal(id) {
    var jQueryObject = $("#" + id);
    var checkboxarr = $('input[name="' + id + '"]');

    var domObject = jQueryObject[0];
    var tag = "";
    if (checkboxarr.length > 0) {
        tag = "INPUT CHECKBOX"
    } else {
        tag = domObject.tagName;
    }
    switch (tag) {
        case "INPUT":
            {
                return $("#" + id).val();
            }
            break;
        case "INPUT CHECKBOX":
            {

                var val = "";
                checkboxarr.each(function() {
                    if (this.checked) {
                        val = $(this).val()
                    }
                });
                console.log(val);
                return val;
            }
            break;
        case "I":
            {
                var val = $("#" + id).attr('data-val');
                if (val == undefined) {
                    val = document.getElementById(id).innerText;
                }
                return val;
            }
            break;

        default:
            {
                var val = $("#" + id).val();
                return val;
            }
    }
}

function SetVal(id, value) {
    var jQueryObject = $("#" + id);
    var domObject = jQueryObject[0];
    var tag = domObject.tagName;
    if (tag == "input" || tag == "select") {
        $("#" + id).val(value);
    }
    if (tag == "div") {
        jQueryObject.siblings('i').attr('data-val', value);
    }
}

function SetPageClick(pagename) {
    $("#sy").css("color", "");
    $("#rc").css("color", "");
    $("#qy").css("color", "");
    $("#lx").css("color", "");
    $("#gr").css("color", "");
    $("#qyyh").css("color", "");
    $("#" + pagename).css("color", "#e95513");
}

function ShowErrorMeg(id, Meg) {
    var sib = $("#" + id).siblings('div');
    if (sib.attr('class') == "er") {
        sib.html(Meg);
        return false;
    }
    sib = $("#" + id).parent().siblings('div')
    if (sib.attr('class') == "er") {
        sib.html(Meg);
        return false;
    }
    sib = $("#" + id).parent().parent().siblings('div')
    if (sib.attr('class') == "er") {
        sib.html(Meg);
        return false;
    }
    sib = $("#" + id).parent().find("div");
    sib.each(function() {
        if ($(this).attr('class') == "er") {
            $(this).html(Meg);
            return false;
        }
    });

    sib = $("#" + id).parent().parent().find("div");
    sib.each(function() {
        if ($(this).attr('class') == "er") {
            $(this).html(Meg);
            return false;
        }
    });
}

/* ------------ 提示框 -----------------------------------------*/
var zero = {};
/* 提示框-警告 */
zero.waring=function(meg,fun){
    zeroModal.alert({
        content: '提示!',
        contentDetail: meg,
        okFn: function () {
            fun()
        }
    });
}
/* 提示框-失败 */
zero.error = function (meg) {
    zeroModal.error(meg);
}
/* 提示框-成功 */
zero.success = function (meg) {
    zeroModal.success(meg);
}
/* 弹窗 title标题，content内容,width宽度，height高度，okfu成功回调函数，closefu关闭回调函数 */
zero.open = function (title, content, width, height,isshowok,okfu,closefu) {

    var buttons = [];
    if (isshowok == true) {
        buttons.push({ className: 'zeromodal-btn zeromodal-btn-primary', name: '确定', fn: function (opt) { okfu(); return false; } });
    }
    buttons.push({ className: 'zeromodal-btn zeromodal-btn-primary', name: '关闭', fn: function (opt) { closefu(); } });
    zeroModal.show({
        title: title,
        content: content,
        width: width,
        height: height,
     //   dragHandle: 'container',
        buttons: buttons
    });
}
/* -------------------------------------------------------------------*/


/**zc**/
// ajax提交 
// url：地址   method:  类型（get/post）   data: 数据键值对（{ a:b,c:d }）     callback: 成功的回调(function)   errorback:异常的回调（function）
function Ajax_Json(url, method, data, callback, errorback) {
    $.ajax({
        url: url,
        type: method,
        dataType: 'json',
        data: data,
        success: callback,
        error: errorback
    })
}

//  比较2个文本值  传入 id ，和错误内容，在第二个文本的下一个标签 显示错误信息
function two_check(id1, id2, errorMsg) {
    var flag = $("#" + id1).val() == $("#" + id2).val();
    if (flag == false) {
        $("#" + id2).next().show();
        $("#" + id2).next().html(errorMsg);
    }
    return flag;
}


//  提交信息简单的判断提示  
function check_input(obj, type) {
    var v = obj.val();
    obj.next().html(obj.next().attr("data-err" + type));
    switch (parseInt(type)) {
        case 1:
            if (v == "" || v.replace(" ", "").length == 0) {
                obj.next().show();
                obj.attr("data-sub", "1"); //0:ok  1:no
            } else {
                obj.next().hide();
                obj.attr("data-sub", "0"); //0:ok  1:no
            }
            break;
        case 2:
            var vl = v.replace(" ", "").length;
            var maxL = parseInt(obj.attr("maxlength"));
            var minL = parseInt(obj.attr("data-minlength"));
            if (vl <= maxL && vl >= minL) {
                obj.next().hide();
                obj.attr("data-sub", "0"); //0:ok  1:no
            } else {
                obj.next().show();
                obj.attr("data-sub", "1"); //0:ok  1:no
            }
            break;
    }
}

function checkRegV2(name, type) {
    $("#" + name).find("input[type!='checkbox']").each(function() {
        check_input($(this), type);
    })
    return $("#" + name + " input[data-sub='1']").length;
}


/********end*********/