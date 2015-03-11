define(function (require) {
    var defineComponent = require('flight/lib/component');
    var templates = require('js/templates'),
        template = templates['trainer/course_of_trainee'];
    var _ = require('lodash/lodash');

    return defineComponent(stations);

    function stations() {
        this.defaultAttrs({
        });

        this.renderCheckpoints = function () {
            var course = this.attr.courseOfTrainee;
            console.log(course);

            var groups = this.groupCheckpoints(course.checkpoints);
            console.log(groups);
            var html = template.render({
                groups: groups,
                name: course.name,
                sponsor: course.sponsor,
                trainer: course.trainer
            });

            $('#app').html(html).fadeIn();
        };

        this.groupCheckpoints = function (checkpoints) {
            var groupCheckpoints = [];
            var groupNames = _.uniq(_.pluck(checkpoints, 'type'));

            _.forEach(groupNames, function (groupName) {
                groupCheckpoints.push({groupName: groupName, checkpoints: _.where(checkpoints, {type: groupName})})
            });

            return groupCheckpoints;
        };

        this.after('initialize', function () {
            this.renderCheckpoints();
        });
    }
});
