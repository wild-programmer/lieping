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

function SetPageClick(pagename)
{
    $("#sy").css("color", "");$("#rc").css("color", ""); $("#qy").css("color", "");
    $("#lx").css("color", "");$("#gr").css("color", "");$("#qyyh").css("color", "");
    $("#" + pagename).css("color", "#e95513");
}

function ShowErrorMeg(id,Meg)
{
    var sib = $("#" + id).siblings('div');
    if (sib.attr('class') == "er")
    {
        sib.html(Meg);
        return false;
    }
    sib=$("#" + id).parent().siblings('div')
    if (sib.attr('class') == "er")
    {
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
