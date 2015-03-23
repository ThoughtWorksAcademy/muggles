define(function (require) {
    var defineComponent = require('flight/lib/component');
    var templates = require('js/templates'),
        template = templates['trainer/courses_of_trainee'];
    var _ = require('lodash/lodash');

    return defineComponent(stations);

    function stations() {
        this.defaultAttrs({
            courseOfTrainee: '.courseOfTrainee'
        });

        this.renderCheckpoints = function () {
            var courses = this.attr.coursesOfTrainee;
            console.log(courses);
            var html = template.render({courses: courses});
            $('#app').html(html).fadeIn();
        };

        this.serveCourse = function (event) {
            var self = this;
            var id = event.target.id;
            var traineeId = this.attr.traineeId;

            $.ajax('/api/users/' + traineeId + '/courses/' + id, {
                method: 'get'

            }).fail(function () {
                console.log('获取id为' + id + '的课程失败');

            }).done(function (data) {
                self.trigger('uiSwitchPage',
                    {
                        name: 'courseOfTrainee',
                        data: {data: data, traineeId: traineeId}
                    });
            });
        };

        this.after('initialize', function () {
            this.on(document, 'click',
                {'courseOfTrainee': this.serveCourse});
            this.renderCheckpoints();
        });
    }
});
