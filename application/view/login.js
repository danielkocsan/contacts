define(
    function () {
        return Backbone.View.extend(
            {
                tagName: 'button',
                className: 'login',
                events: {
                    'click': 'onClick'
                },
                render: function () {
                    this.el.innerHTML = 'Login';
                },
                onClick: function () {
                    var config = {
                        'client_id': '489292482025.apps.googleusercontent.com',
                        'scope': 'https://www.google.com/m8/feeds/'
                    };

                    gapi.auth.authorize(
                        config,
                        function () {
                            app.navigate('home', {trigger: true});
                        }
                    );
                }
            }
        );
    }
);