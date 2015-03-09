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
            var username = this.select('username');
            var password = this.select('password');
            var userTypes = this.select('userType');
            var user = 'trainee';
            _.forEach(userTypes, function(userType) {
                if(userType.checked) {
                    user = userType.value;
                }
            });
            this.trigger('uiLogin', {
                username: username.val(),
                password: password.val(),
                userType: user
            });
        };


        this.after('initialize', function () {
            //this.on('#signup', 'click', this.handleLogin);
            this.on(document, 'click',
                {'uiLogin': this.handleLogin});
        });
    }
});
