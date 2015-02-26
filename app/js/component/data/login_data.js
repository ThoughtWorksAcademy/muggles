define(function (require) {
    var defineComponent = require('flight/lib/component');

    return defineComponent(login);

    function login() {

        this.handleLogin = function (event, data) {
            $.ajax('/api/users/login', {
                method: 'POST',
                data: data
            }).fail(function () {
                console.log('登录失败');
                console.log(data);

            }).done(function (data) {
                    console.log('登陆成功');
                    location = 'views/course.html';
                });
        };

        this.after('initialize', function () {
            this.on('uiLogin', this.handleLogin);
        });
    }
});
