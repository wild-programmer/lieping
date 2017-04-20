var inp1 = document.querySelector('.index_phone');
var mobileReg = /^(13[0-9]|14[57]|15[0-9]|17[1378]|18[0-9])\d{8}$/;
checkReg(inp1, mobileReg);
var inp2 = document.querySelector('.index_pass');
var mobileReg = /^([a-zA-Z]|[0-9]|\S){6,16}$/;
checkReg(inp2, mobileReg);

function checkReg(obj, reg) {
    obj.onblur = function() {

        console.log(this.value);
        if (reg.test(this.value)) {
            //说明是合法
        } else {
            document.querySelector('.mimayanz >p').innerHTML = '您输入的格式有误请修改';
            document.querySelector('.daBge').style.display = 'block';
            document.querySelector('.mimayanz').style.display = 'block';
        }
    }
}
document.querySelector('.daBge').onclick = function() {
    document.querySelector('.mimayanz').style.display = 'none';
    this.style.display = 'none';
}