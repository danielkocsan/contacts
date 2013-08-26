(function () {
    Backbone.sync = function (method, model) {
        $.ajax(
            {
                dataType: 'jsonp',

                url: 'https://www.google.com/m8/feeds/contacts/daniel.kocsan@gmail.com/full',
                data: {
                    'access_token': gapi.auth.getToken().access_token,
                    'alt': 'json'
                },
                success: function (data) {
                    var contactList = data.feed.entry,
                        l = contactList.length,
                        i = 0,
                        contact = null,
                        userData = {};
                
                    for (; i < l; i += 1) {
                        userData = {};
                        contact = contactList[i];
                        model.add(
                            {
                                title: contact.title.$t,
                                email: contact.gd$email || [],
                                phoneNumber: contact.gd$phoneNumber || []
                            }
                        );
                    }
                }
            }
        );
    };

    var Router = Backbone.Router.extend(
        {
            routes: {
                '': 'home',
                'home': 'home'
            },

            login: function () {
                
            },

            home: function () {
                require(
                    [
                        'application/view/login.js',
                        'application/view/contacts.js',
                        'application/googleApi.js',
                        'application/collection/contacts.js'
                    ],
                    function (LoginView, ContactsView, GoogleApi, Contacts) {
                        var contacts = new Contacts(),
                            loginView = new LoginView(
                                {
                                    el: $('#login')
                                }
                            ),
                            contactsView = new ContactsView(
                                {
                                    model: contacts,
                                    el: $('#contactList')
                                }
                            ),
                            googleApi = new GoogleApi();

                        loginView.$el.on(
                            'login',
                            function () {
                                googleApi.login();
                            }
                        );
                        loginView.render();

                        googleApi.on(
                            'disconnected',
                            function () {
                                loginView.loginState();
                            }
                        );
                        googleApi.on(
                            'connected',
                            function (data) {
                                loginView.logoutState(data);

                                contacts.fetch();
                            }
                        );

                        googleApi.init();
                    }
                );
            }
        }
    );

    window.app = new Router();
    
    Backbone.history.start();
}());