define(function (require) {
    var defineComponent = require('flight/lib/component');
    var _ = require('lodash/lodash');

    return defineComponent(login);

    function login() {
        this.defaultAttrs({
            uiLogin: '#uiLogin',
            username: '#username',
            password: '#password',
            userType: '.userType'
        });

        this.handleLogin = function () {
            $('.app').find('#tip').text('');
            var username = this.select('username');
            var password = this.select('password');
            var userTypes = this.select('userType');
            var user = 'trainee';

            _.forEach(userTypes, function (userType) {
                if (userType.checked) {
                    user = userType.value;
                }
            });

            this.trigger('uiLogin', {
                username: username.val(),
                password: password.val(),
                userType: user
            });

            return false;
        };

        this.changeUrl = function () {
            history.pushState({ path: '/#login' }, '', '/#login');
        };

        this.after('initialize', function () {
            this.changeUrl();
            this.on(document, 'submit', this.handleLogin);
            this.on(window, 'popstate', function () {
                console.log('trigger popstate');
                console.log(history.state);
            });

            this.on(window, 'pushstate', function () {
                console.log('trigger pushstate');
            });
        });
    }
});
