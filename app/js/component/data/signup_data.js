define(function (require) {
    var defineComponent = require('flight/lib/component');

    return defineComponent(login);

    function login() {

        this.handleSignUp = function (event, data) {
            console.log('there');
            $.ajax('/api/users/signup', {
                method: 'POST',
                data: data
            })
                .fail(function () {
                    console.log('注册失败');
                    console.log(data);

                })
                .done(function (data) {
                    console.log(data);
                    if( data.redirect) {
                        console.log(data.redirect);
                        location = data.redirect;
                    }
                });
        };

        this.after('initialize', function () {
            this.on('uiSignUp', this.handleSignUp);
        });
    }
});
