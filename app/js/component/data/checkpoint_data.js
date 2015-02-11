define(function (require) {
    var defineComponent = require('flight/lib/component');
    var _ = require('lodash/lodash');

    return defineComponent(checkpoint);

    function checkpoint() {

        this.serveCheckpoints = function () {
            var self = this;
            console.log('in serverCheckpoint');
            $.ajax('/api/users/course/checkpoints', {
                method: 'get'
            })
                .fail(function () {
                    console.log('获取checkpoint失败');
                    console.log(data);

                })
                .done(function (data) {
                    self.trigger('dataCheckpointServed', {makeup: self.renderCheckpoint(data)});
                });
        };

        this.renderCheckpoint = function (checkpoints) {
            var groupedCheckpoint = this.groupCheckpoints(checkpoints);
            var checkPointTemplate = Hogan.compile(
                '{{#groups}}' +
                //'{{#groupedCheckpoint}}' +
                '<p>{{groupName}}</p>' +
                '{{#checkpoints}}<li><input type="checkbox">{{name}}</li>{{/checkpoints}}' +
                //'{{/groupedCheckpoint}}' +
                '{{/groups}}'
            );
            return checkPointTemplate.render(
                {groups: groupedCheckpoint});
        };

        this.groupCheckpoints = function (checkpoints) {
            var groupCheckpoints = [];
            var groupNames = _.uniq(_.pluck(checkpoints, 'type'));
            _.forEach(groupNames, function (groupName) {
                groupCheckpoints.push({groupName: groupName, checkpoints: _.where(checkpoints, {type: groupName})})
            });
            console.log(groupNames);
            console.log(groupCheckpoints[0]);
            return groupCheckpoints;
        };

        this.after('initialize', function () {
            this.on('uiCheckpointsRequested', this.serveCheckpoints);
        });
    }
});
