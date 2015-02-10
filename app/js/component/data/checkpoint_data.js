define(function (require) {
    var defineComponent = require('flight/lib/component');

    return defineComponent(checkpoint);

    function checkpoint() {

        this.serveCheckpoints = function () {
            console.log('in serverCheckpoint');
            //$.ajax('/api/users/course/checkpoint', {
            //    method: 'get',
            //    data: data
            //})
            //    .fail(function () {
            //        console.log('获取checkpoint失败');
            //        console.log(data);
            //
            //    })
            //    .done(function (data) {
            //        console.log('获取checkpoint成功');
            //    });
            this.trigger('dataCheckpointServed', {makeup: this.renderCheckpoint()});
        };

        this.renderCheckpoint = function () {
            var checkPointTemplate = Hogan.compile(
                '{{#checkpoints}}<li><input type="checkbox">{{checkpoint}}</li>{{/checkpoints}}'
            );
            return checkPointTemplate.render(
                {checkpoints:[
                    {checkpoint: 'wang'},
                    {checkpoint: 'xi'},
                    {checkpoint: 'ming'}
                ]});
        };

        this.after('initialize', function () {
            this.on('uiCheckpointsRequested', this.serveCheckpoints);
        });
    }
});
