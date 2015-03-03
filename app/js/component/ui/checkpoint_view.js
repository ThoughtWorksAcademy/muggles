define(function (require) {
    var defineComponent = require('flight/lib/component');

    return defineComponent(checkpoint);

    function checkpoint() {
        this.defaultAttrs({
            checkPointSelect: '.js-checkpoint-list',
            checkPointCheck: '.checkpoint-item'
        });

        this.renderCheckpoints = function (event, data) {
            this.select('checkPointSelect').append(data.makeup);
            this.on('.checkpoint-item', 'click', this.handleChecked);
        };

        this.handleChecked = function () {
            var checkedIdList = [];
            this.select('checkPointCheck').toArray().forEach(function (el) {
                if (el.checked) {
                    checkedIdList.push({id: el.getAttribute('id')});
                }
            });

            this.trigger('uiChangeCheckedIdList', {checkedIdList: checkedIdList});
        };

        this.after('initialize', function () {
            this.on(document, 'dataCheckpointServed', this.renderCheckpoints);
            this.trigger('uiCheckpointsRequested');
        });
    }
});
