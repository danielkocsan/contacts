define(
    function () {
        var GoogleApi = function () {
            
        };

        GoogleApi.prototype = {
            init: function () {
                gapi.client.setApiKey('AIzaSyCKpx87jIRWoOE-rwCU4PM3P2MljLOwi3Y');
    
                if (!gapi || !gapi.client) {
                    this.trigger('disconnected');
                }
            },
            
            login: function () {
                var config = {
                    'client_id': '489292482025.apps.googleusercontent.com',
                    'scope': 'https://www.google.com/m8/feeds/'
                };

                gapi.auth.authorize(
                    config,
                    this.connected.bind(this)
                );
            },

            connected: function () {
                this.trigger('connected');
            }
        };

        _.extend(
            GoogleApi.prototype,
            Backbone.Events
        );

        return GoogleApi;
    }
);