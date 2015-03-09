define(function (require) {
    var defineComponent = require('flight/lib/component');

    return defineComponent(login);

    function login() {
        this.defaultAttrs({
            uiLogin: '#uiLogin',
            username: '#username',
            password: '#password'
        });
        this.handleLogin = function () {
            var username = this.select('username');
            var password = this.select('password');

            this.trigger('uiLogin', {
                username: username.val(),
                password: password.val()
            });
        };


        this.after('initialize', function () {
            //this.on('#signup', 'click', this.handleLogin);
            this.on(document, 'click',
                {'uiLogin': this.handleLogin});
        });
    }
});
