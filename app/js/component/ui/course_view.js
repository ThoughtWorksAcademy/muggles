define(function (require) {
    var defineComponent = require('flight/lib/component');
    var templates = require('js/templates'),
        template = templates['course'];

    return defineComponent(course);

    function course() {
        this.defaultAttrs({
            app : '#app',
            courseName: '.course_name'
        });
        this.renderCourse = function () {
            var self = this;
            var data = {
                name: '测试课程',
                trainer: 'sigh ',
                sponsor: '重新填写sponsor',
                checkpoints :[
                    {name: 'i'},
                    {name: 'i'}
                ]
            };

            var html = template.render(data);
            $('#app').html(html).fadeIn();
            self.select('app').append(html).fadeIn();
        };


        this.serveCourse = function (event) {
            var self = this;
            var id = event.target.id;
            console.log( 'id' + id);
            console.log('接下来获取' + id + '课程信息');
            $.ajax('/api/users/courses/' + id, {
                method: 'get'
            }).fail(function () {
                console.log('获取id为' + id + '的课程失败');
            }).done(function (data) {
                console.log(data);
                console.log('获取课程成功');
            });
        };

        this.after('initialize', function () {
            this.on(document, 'click',
                {'courseName': this.serveCourse});
            this.renderCourse();
        });
    }
});
