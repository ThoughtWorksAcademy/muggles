define(function (require) {
    var defineComponent = require('flight/lib/component');
    var templates = require('js/templates'),
        template = templates['course'];
    var _ = require('lodash/lodash');


    return defineComponent(course);

    function course() {
        this.defaultAttrs({
            app: '#app',
            courseName: '.course_name'
        });
        this.renderCourse = function () {
            var groups = this.groupCheckpoints(this.attr.course.checkpoints);

            var html = template.render(groups);
            this.select('app').append(html).fadeIn();
        };

        this.groupCheckpoints = function (checkpoints) {
            var groupCheckpoints = [];
            var groupNames = _.uniq(_.pluck(checkpoints, 'type'));
            console.log(groupNames);
            console.log(checkpoints);
            _.forEach(groupNames, function (groupName) {
                groupCheckpoints.push({groupName: groupName, checkpoints: _.where(checkpoints, {type: groupName})})
            });
            console.log(groupCheckpoints);
            return groupCheckpoints;
        };

        this.after('initialize', function () {
            this.renderCourse();
        });
    }
});
