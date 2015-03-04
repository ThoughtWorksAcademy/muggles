'use strict';

define(function () {
    var checkpoint =
        '{{#groups}}' +
        '<p>{{groupName}}</p>' +
        '{{#checkpoints}}' +
        '{{#disable}}' +
        '{{#checked}}<li><input id="{{_id}}" class="checkpoint-item" type="checkbox" checked="true" disabled="true">{{name}}</li>{{/checked}}' +
        '{{^checked}}<li><input id="{{_id}}" class="checkpoint-item" type="checkbox" disabled="true">{{name}}</li>{{/checked}}' +
        '{{/disable}}' +
        '{{^disable}}' +
        '{{#checked}}<li><input id="{{_id}}" class="checkpoint-item" type="checkbox" checked="true" >{{name}}</li>{{/checked}}' +
        '{{^checked}}<li><input id="{{_id}}" class="checkpoint-item" type="checkbox">{{name}}</li>{{/checked}}' +
        '{{/disable}}' +
        '{{/checkpoints}}' +
        '{{/groups}}';

    return {
        checkpoint: checkpoint
    }
});