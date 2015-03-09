define(function (require) {
    'use strict';

    var defineComponent = require('flight/lib/component');


    return defineComponent(switchPage);

    function switchPage() {
        this.after('initialize', function () {
            this.on('uiSwitchPageTrainer', function (e, page) {
                this.attr[page.page](page.data);
            })
        });
    }
});