define(function (require) {
    var defineComponent = require('flight/lib/component');
    var templates = require('js/templates'),
        template = templates['trainer/courses'];

    return defineComponent(stations);

    function stations() {
        this.defaultAttrs({
                'traineesOfCourse': '.traineesOfCourse'
            }
        );

        this.renderStationCourses = function () {
            var courses = this.attr.stationCourses;
            var html = template.render({courses: courses});
            $('#app').html(html).fadeIn();
        };

        this.serveCourseTrainees = function () {
            var self = this;
            var id = event.target.id;
            console.log(id);
            $.ajax('/api/courses/' + id + '/trainees/', {
                method: 'get'

            }).fail(function () {
                console.log('获取id为' + id + '的课程的所有学生失败');

            }).done(function (data) {
                self.trigger('uiSwitchPage',
                    {
                        name: 'traineesOfCourse',
                        data: data
                    });
            });
        };


        this.after('initialize', function () {
            this.on(document, 'click',
                {'traineesOfCourse': this.serveCourseTrainees});
            this.renderStationCourses();
        });
    }
});
