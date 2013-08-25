define(
    ['application/model/contact.js'],
    function (contact) {
        return Backbone.Collection.extend(
            {
                model: contact
            }
        );
    }
);