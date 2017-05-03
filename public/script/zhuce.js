var inp1 = document.querySelector('.index_phone');
var mobileReg = /^(^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$)|((13[0-9]|14[57]|15[0-9]|17[1378]|18[0-9])\d{8})$/;
checkReg(inp1, mobileReg);
var inp2 = document.querySelector('.index_pass');
var inp3 = document.querySelector('.index_pass1');
var mobileReg = /^([a-zA-Z]|[0-9]|[!#$%^&*@\-_]){6,16}$/;
checkReg(inp2, mobileReg);
// ^(?![\d]+$)(?![a-zA-Z]+$)(?![^\da-zA-Z]+$).{6,20}$
function checkReg(obj, reg) {
    obj.onblur = function() {
        if (reg.test(this.value)) {
            //说明是合法
            this.nextElementSibling.style.display = 'none';
        } else {
            this.nextElementSibling.style.display = 'block';
            var val = this.value;
            if (val.length < 6 || val.length > 16) {
                this.nextElementSibling.innerText = '输入长度不符合要求'
            } else {
                this.nextElementSibling.innerText = '输入格式有误！请重新输入 '
            }
            if (val == '') {
                this.nextElementSibling.style.display = 'none';
            }
        }
    }
}
inp3.onblur = function() {
    if (this.value !== inp2.value) {
        this.nextElementSibling.style.display = 'block';
        this.nextElementSibling.innerText = '您两次输入的密码不一致'
    } else {
        this.nextElementSibling.style.display = 'none';
        if (val == '' || inp2.value == '') {
            this.nextElementSibling.style.display = 'none';
        }
    }
}