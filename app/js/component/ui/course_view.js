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

            var html = template.render({groups: groups});
            $('#app').html(html).fadeIn();
            this.on('.checkpoint-item', 'click', this.handleChecked);
            //this.select('app').append(html).fadeIn();
        };

        this.handleChecked = function (event) {
            var id = event.target.id;
            var data = event.target.checked;
            $.ajax('/api/users/course/checkpoints/' + id, {
                method: 'patch',
                data: {checked: data}
            }).fail(function () {
                console.log('checkpoint 更新失败');
            }).done(function (data) {
                console.log(data);
                console.log('checkpoint 更新成功');
            });

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
            this.renderCourse();
        });
    }
});
