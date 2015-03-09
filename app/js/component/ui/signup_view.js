define(function (require) {
    var defineComponent = require('flight/lib/component');

    return defineComponent(signup);

    function signup() {
        this.defaultAttrs({
            username: '#username',
            password: '#password'
        });

        this.handleLogin = function () {
            var username = this.select('username');
            var password = this.select('password');

            this.trigger('uiSignUp', {
                username: username.val(),
                password: password.val()
            });
        };

        this.after('initialize', function () {
            this.on('#signup', 'click', this.handleLogin);
        });
    }
});
