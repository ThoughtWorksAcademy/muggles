define(function (require) {
    var defineComponent = require('flight/lib/component');

    return defineComponent(checkpoint);

    function checkpoint() {
        this.defaultAttrs({
            checkPointSelect: '.js-checkpoint-list'
        });

        this.renderCheckpoints = function (event, data) {
            console.log('in view handle');
            var checkPointTemplate = Hogan.compile(
                '{{#checkpoints}}<li><input type="checkbox">{{checkpoint}}</li>{{/checkpoints}}'
            );
            var html = checkPointTemplate.render(
                {checkpoints:[
                    {checkpoint: 'wang'},
                    {checkpoint: 'xi'},
                    {checkpoint: 'ming'}
                ]});
            this.select('checkPointSelect').append(html);
            console.log(data);
            this.select('checkPointSelect').append(data.makeup);

        };


        this.after('initialize', function () {
            this.on(document, 'dataCheckpointServed', this.renderCheckpoints);
            this.trigger('uiCheckpointsRequested');

            //this.renderCheckpoints();
        });
    }
});
