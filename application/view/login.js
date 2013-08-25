define(
    function () {
        return Backbone.View.extend(
            {
                tagName: 'div',
                className: 'navbar navbar-inverse navbar-fixed-top',
                events: {
                    'click button': 'onClick'
                },
                render: function () {

                },
                onClick: function () {
                    this.$el.trigger('login');
                },

                loginState: function () {
                    this.$el.html('<button class="btn btn-success">Google login</button>');
                },

                logoutState: function (data) {
                    this.$el.html('<label>Logged in</label><button class="btn">Logout</button>');
                }
            }
        );
    }
);