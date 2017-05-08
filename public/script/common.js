function GetVal(id) {
    var jQueryObject = $("#" + id);
    var checkboxarr = $('input[name="' + id + '"]');

    var domObject = jQueryObject[0];
    var tag = "";
    if (checkboxarr.length > 0) {
        tag = "INPUT CHECKBOX"
    }
    else {
        tag = domObject.tagName;
    }
    switch (tag) {
        case "INPUT": {
            return $("#" + id).val();
        } break;
        case "INPUT CHECKBOX": {

            var val = "";
            checkboxarr.each(function () {
                if (this.checked) {
                    val = $(this).val()
                }
            });
            console.log(val);
            return val;
        } break;
        case "I": {
            var val = $("#" + id).attr('data-val');
            if (val == undefined) {
                val = document.getElementById(id).innerText;
            }
            return val;
        } break;

        default: {
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
    $("#sy").css("color", ""); $("#rc").css("color", ""); $("#qy").css("color", "");
    $("#lx").css("color", ""); $("#gr").css("color", ""); $("#qyyh").css("color", "");
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
    sib.each(function () {
        if ($(this).attr('class') == "er") {
            $(this).html(Meg);
            return false;
        }
    });

    sib = $("#" + id).parent().parent().find("div");
    sib.each(function () {
        if ($(this).attr('class') == "er") {
            $(this).html(Meg);
            return false;
        }
    });
}


/**zc**/
function Ajax_Json(url, method, data, callback, errorback) {
    $.ajax({
        url: url,
        type: 'post',
        dataType: 'json',
        data: data,
        success: callback,
        error: errorback
    })
}

function two_check(id1, id2, errorMsg) {
    var flag = $("#" + id1).val() == $("#" + id2).val();
    if (flag == false) {
        $("#" + id2).next().show();
        $("#" + id2).next().html(errorMsg);
    }
    return flag;
}

function check_input(obj, type) {
    var v = obj.val();
    obj.next().html(obj.next().attr("data-err" + type));
    switch (parseInt(type)) {
        case 1:
            if (v == "" || v.replace(" ", "").length == 0) {
                obj.next().show();
                obj.attr("data-sub", "1");//0:ok  1:no
            } else {
                obj.next().hide();
                obj.attr("data-sub", "0");//0:ok  1:no
            }
            break;
        case 2:
            var vl = v.replace(" ", "").length;
            var maxL = parseInt(obj.attr("maxlength"));
            var minL = parseInt(obj.attr("data-minlength"));
            if (vl <= maxL && vl >= minL) {
                obj.next().hide();
                obj.attr("data-sub", "0");//0:ok  1:no
            } else {
                obj.next().show();
                obj.attr("data-sub", "1");//0:ok  1:no
            }
            break;
    }
}

function checkRegV2(name, type) {
    $("#" + name).find("input").each(function () {
        check_input($(this), type);
    })
    return $("#" + name + " input[data-sub='1']").length;
}


/********end*********/