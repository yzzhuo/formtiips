/*============================================================*/
/*==========================公共方法和类======================*/
/*============================================================*/

/*添加each方法*/
Array.prototype.each = function(fn) {
    return this.length ? [fn(this.slice(0, 1))].concat(this.slice(1).each(fn)) : [];
};

function checkPasswords() {
    var passl = document.getElementById("pwd");
    var pass2 = document.getElementById("pwd1");
    if (passl.value != pass2.value) {
        pass2.setCustomValidity("两次密码必须输入一致！");
    } else {
        pass2.setCustomValidity('');
    }
}

function checkUserName() {
    var name = document.getElementById('username');
    var judge = function(json) {
        if (json.state != 'undefined' && json.state != null) {
            switch (json.state) {
                case true:
                    // 用户名存在
                    name.setCustomValidity("用户名已被注册，请重试其他用户名");
                    break;
                case false:
                    //用户名不存在
                    name.setCustomValidity('');
                    break;
            }
        }
    }
    Ajax({
        url: 'url:/souchewei/findUser',
        data: {
            username: name.value
        },
        call1: judge
    });
}

function check() {
    document.getElementById('ok').disabled = 'disabled';
}

function updateAuth() {
    document.getElementById('auth-img').src = '/souchewei/verifier/getValidateCode' + new Date().getTime();
}