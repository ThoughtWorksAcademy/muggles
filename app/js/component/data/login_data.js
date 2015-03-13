define(function (require) {
    var defineComponent = require('flight/lib/component');
    return defineComponent(login);

    function login() {

        this.defaultAttrs({
            tip: '#tip'
        });

        this.handleLogin = function (event, data) {
            var self = this;
            if (data.userType == 'trainee') {

                $.ajax('/api/trainees/login', {
                    method: 'POST',
                    data: data

                }).fail(function (data) {
                    self.$node.find('#tip').text(data.responseText);
                    self.trigger('uiTipShow', {tip: data.responseText});

                }).done(function (user) {
                    self.trigger('uiSwitchPage', {name: 'courses'});
                });
            } else if(data.userType == 'trainer') {
                $.ajax('/api/trainers/login', {
                    method: 'POST',
                    data: data

                }).fail(function (data) {
                    self.$node.find('#tip').text(data.responseText);
                    self.trigger('uiTipShow', {tip: data.responseText});

                }).done(function (user) {
                    self.trigger('uiSwitchPage', {
                        name: 'station',
                        data: 'station'
                    });
                });
            }

        };

        this.after('initialize', function () {
            this.$tip = this.$node.find('#tip');
            this.on('uiLogin', this.handleLogin);
        });
    }
});
