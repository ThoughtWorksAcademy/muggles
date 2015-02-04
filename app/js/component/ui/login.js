define(function (require) {
  var defineComponent = require('flight/lib/component');

  return defineComponent(login);

 function login () {
    this.defaultAttrs({
      userName: '#userName',
      userPassword: '#userPassword'
    });

    this.handleLogin = function (event) {
      var userName = this.select('userName');
      var userPassword = this.select('userPassword');

      console.log(userName.val());
      console.log(userPassword.val());
      this.trigger('uiLogin', {
        userName: userName.val(),
        userPassword : userPassword.val()
        });
    };

    this.after('initialize', function () {
      this.on('#login', 'click', this.handleLogin);
    });
  }
});
