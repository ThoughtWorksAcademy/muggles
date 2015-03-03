define(function (require) {
    var defineComponent = require('flight/lib/component');

    return defineComponent(login);

    function login() {
        this.handleLogin = function (event, data) {
            var self = this;
            $.ajax('/api/users/login', {
                method: 'POST',
                data: data
            }).fail(function (data) {
                console.log(data.responseText);
                console.log('登陆失败');
            }).done(function (data) {
                console.log(data);

                console.log('登陆成功');
                self.trigger('uiSwitchPage', {name: 'courses'});
            });
        };

        this.after('initialize', function () {
            this.on('uiLogin', this.handleLogin);
        });
    }
});
