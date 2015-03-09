define(function (require) {
    var defineComponent = require('flight/lib/component');
    var templates = require('js/templates'),
        template = templates['courses_table'];

    return defineComponent(courses);

    function courses() {
        this.defaultAttrs({
            coursePanel: '.courses-tbody',
            stationName: '.station_name'
        });


        this.serveStations = function (callback) {
            $.ajax('/api/trainer/stations', {
                method: 'get'
            }).fail(function () {
                console.log('获取courses失败');

            }).done(function (data) {
                callback(data);
            });
        };

        this.renderStations = function () {
            var self = this;

            this.serveStations(function (data) {
                var html = template.render({courses: data});

                self.select('coursePanel').append(html);
            });
        };


        this.serveStation = function (event) {
            var self = this;
            var id = event.target.id;
            $.ajax('/api/users/courses/' + id, {
                method: 'get'
            }).fail(function () {
                console.log('获取id为' + id + '的课程失败');
            }).done(function (data) {
                self.trigger('uiSwitchPage',
                    {
                        name: 'course',
                        data: data
                    });
            });
        };

        this.after('initialize', function () {
            this.on(document, 'click',
                {'stationName': this.serveStation});
            this.renderStations();
        });
    }
});
