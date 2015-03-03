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
    var login =
        'Hello world' +
        '<div class="container">' +
        '<form class="form-signin js-login">' +
        '<h2 class="form-signin-heading">登陆</h2>' +
        '<label for="username" class="sr-only">Email address</label>' +
        '<input type="email" id="username" class="form-control" placeholder="用户名" required autofocus>' +
        '<label for="password" class="sr-only">Password</label>' +
        '<input type="password" id="password" class="form-control" placeholder="密码" required>' +
        '<a id="uiLogin" class="btn btn-default">登陆</a>' +
        '</form>' +
        '</div>';

    return {
        checkpoint: checkpoint,
        login: login
    }
});