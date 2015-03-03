define(function (require) {
    var defineComponent = require('flight/lib/component');
    var templates = require('js/templates'),
        template = templates['course'];

    return defineComponent(course);

    function course() {
        this.defaultAttrs({
            app : '#app'
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
            console.log(html);
            $('#app').html(html).fadeIn();
            self.select('app').append(html).fadeIn();
        };

        this.serverCourse = function () {

        };

        this.after('initialize', function () {
            this.renderCourse();
        });
    }
});
