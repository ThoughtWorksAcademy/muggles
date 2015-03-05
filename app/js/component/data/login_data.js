define(function (require) {
    var defineComponent = require('flight/lib/component');

    return defineComponent(login);

    function login() {

        this.defaultAttrs({
            tip: '#tip'
        });

        this.handleLogin = function (event, data) {
            var self = this;
            $.ajax('/api/trainees/login', {
                method: 'POST',
                data: data
            }).fail(function (data) {
                self.$node.find('#tip').text(data.responseText);
                self.trigger('uiTipShow', {tip: data.responseText});
            }).done(function (data) {
                self.trigger('uiSwitchPage', {name: 'courses'});
            });
        };

        this.after('initialize', function () {
            this.$tip = this.$node.find('#tip');
            this.on('uiLogin', this.handleLogin);
        });
    }
});
