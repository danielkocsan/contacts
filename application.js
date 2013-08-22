(function () {
    var Router = Backbone.Router.extend(
        {
            routes: {
                '': 'login',
                'home': 'home'
            },

            login: function () {
                require(
                    ['application/view/login.js'],
                    function (LoginView) {
                        var loginView = new LoginView();
                        loginView.render();
                        $('body').append(loginView.el);
                    }
                );
            },

            home: function () {
                $.ajax(
                    {
                        dataType: 'jsonp',
                        
                        url: 'https://www.google.com/m8/feeds/contacts/daniel.kocsan@gmail.com/full',
                        data: {
                            'access_token': gapi.auth.getToken().access_token,
                            'alt': 'json'
                        },
                        success: function (data) {
                            var entries = data.feed.entry,
                                l = entries.length,
                                i = 0,
                                contact;

                                for (; i < l; i += 1) {
                                    contact = entries[i];
                                    console.log(contact.title.$t);
                                }
                        }
                    }
                );
            }
        }
    );

    window.app = new Router();
    gapi.client.setApiKey('AIzaSyCKpx87jIRWoOE-rwCU4PM3P2MljLOwi3Y');
    Backbone.history.start();
}());