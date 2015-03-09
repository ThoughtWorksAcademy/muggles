define(function (require) {
    var defineComponent = require('flight/lib/component');
    var templates = require('js/templates'),
        template = templates['trainer/stations'];

    return defineComponent(stations);

    function stations() {
        this.defaultAttrs({
            stationBody: '.stations-body',
            stationName: '.station_name'
        });


        this.serveStations = function (callback) {
            $.ajax('/api/trainers/stations', {
                method: 'get'
            }).fail(function () {
                console.log('获取stations失败');

            }).done(function (data) {
                callback(data);
            });
        };

        this.renderStations = function () {
            var self = this;

            this.serveStations(function (data) {
                console.log(data);
                var html = template.render({stations: data});

                self.select('stationBody').append(html).fadeIn();
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
