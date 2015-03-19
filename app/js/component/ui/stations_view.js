define(function (require) {
    var defineComponent = require('flight/lib/component');
    var templates = require('js/templates'),
        template = templates['trainer/stations'];

    return defineComponent(stations);

    function stations() {
        this.defaultAttrs({
            stationBody: '.stations-body',
            stationName: '.station_name',
            stationCourses: '.stationCourses',
            stationStudents: '.stationStudents'
        });


        this.serveStations = function (callback) {
            var userId = $('body').data('_id');

            $.ajax('/api/trainers/' + userId + '/stations', {
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
                var html = template.render({stations: data});
                self.select('stationBody').append(html).fadeIn();
            });
        };


        this.serveStationCourses = function (event) {
            var self = this;
            var id = event.target.id;
            var userId = $('body').data('_id');

            $.ajax('/api/trainers/stations/' + id + '/courses', {
                //$.ajax('/api/trainers/' + userId + '/stations/' + id + '/courses', {
                method: 'get'

            }).fail(function () {
                console.log('获取id为' + id + '的课程失败');

            }).done(function (data) {
                self.trigger('uiSwitchPage',
                    {
                        name: 'stationCourses',
                        data: {data: data, id: id}
                    });
            });
        };

        this.serveStationStudents = function (event) {
            var self = this;
            var id = event.target.id;
            var userId = $('body').data('_id');

            $.ajax('/api/trainers/stations/' + id + '/trainees', {
                //$.ajax('/api/trainers/' + userId + '/stations/' + id + '/trainees', {
                method: 'get'

            }).fail(function () {
                console.log('获取id为' + id + '的trainees失败');

            }).done(function (data) {
                self.trigger('uiSwitchPage',
                    {
                        name: 'stationTrainees',
                        data: data
                    });
            });
        };

        this.after('initialize', function () {
            this.on(document, 'click',
                {
                    'stationCourses': this.serveStationCourses,
                    'stationStudents': this.serveStationStudents
                });
            this.renderStations();
        });
    }
});
