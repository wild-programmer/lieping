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
        case "INPUT":{
                return $("#" + id).val();
            } break;
        case "INPUT CHECKBOX": {
            checkboxarr.each(function () {
                if (this.checked) {
                    return $(this).val();
                }
            });
        } break;
        case "I": {
            return $("#" + id).attr('data-val');
        } break;

        default: return $("#" + id).val();

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
