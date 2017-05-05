  var lis = document.querySelectorAll('.zc_contentCr_ul li');
  var firm_zc = document.querySelector('#firm_zc');
  var geren_zc = document.querySelector('#geren_zc');
  liclcik(lis[0]);
  liclcik(lis[1]);

  var inp1 = document.querySelector('.index_phone');
  var inp4 = document.querySelector('.index_phone2');
  var mobileReg = /^(^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$)|((13[0-9]|14[57]|15[0-9]|17[1378]|18[0-9])\d{8})$/;
  checkReg(inp1, mobileReg);
  checkReg(inp4, mobileReg);
  var inp2 = document.querySelector('.index_pass');
  var inp5 = document.querySelector('.index_pass2');
  var inp3 = document.querySelector('.index_pass1');
  var inp6 = document.querySelector('.index_pass12');
  var mobileReg = /^([a-zA-Z]|[0-9]|[!#$%^&*@\-_]){6,16}$/;
  checkReg(inp2, mobileReg, inp3);
  checkReg(inp5, mobileReg, inp6);

  // 触发原素  匹配元素
  chongfud(inp3, inp2);
  chongfud(inp6, inp5);


  document.querySelector('.firm_name').onblur = function() {
          if (this.value == '') {
              this.nextElementSibling.style.display = 'block';
              this.nextElementSibling.innerText = '企业名称不能为空'
          } else {
              this.nextElementSibling.style.display = 'none';
          }
      }
      // 注册切换
  function liclcik(el) {
      el.onclick = function() {
          lis[0].classList.remove('active');
          lis[0].innerHTML = '个人注册';
          lis[1].innerHTML = '企业注册';
          lis[1].classList.remove('active');
          this.classList.add('active');
          this.innerHTML += '<span> </span>';
          var id = this.getAttribute('data-id');
          firm_zc.style.display = 'none';
          geren_zc.style.display = 'none';
          document.querySelector("#" + id + "").style.display = 'block';
          //   隐藏掉企业名称输入框的错误提示
          document.querySelector('.firm_name').nextElementSibling.style.display = 'none';
      }
  }
  //   表单验证函数
  function checkReg(obj, reg, el) {
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
                  if (el) {
                      el.nextElementSibling.style.display = 'none';
                  }
              }
          }
      }
  }
  // 确认密码函数
  function chongfud(obj, el) {
      obj.onblur = function() {
          var val = this.value;
          var val2 = el.value;
          if (val2 !== '' && val == '') {
              // debugger
              this.nextElementSibling.style.display = 'block';
              this.nextElementSibling.innerText = '密码不能为空'
          } else if (val2 == '') {
              this.nextElementSibling.style.display = 'none';
          } else if (val !== inp2.value) {
              this.nextElementSibling.style.display = 'block';
              this.nextElementSibling.innerText = '您两次输入的密码不一致'
          }
      }
  }

  //   显示首页链接过来的相关部分
  if (window.location.hash) {
      if (window.location.hash == '#firm') {
          lis[0].classList.remove('active');
          lis[0].innerHTML = '个人注册';
          lis[1].classList.add('active');
          lis[1].innerHTML += '<span> </span>';
          geren_zc.style.display = 'none';
          firm_zc.style.display = 'block';
      }
  }