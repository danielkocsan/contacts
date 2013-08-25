define(
    function () {
        return Backbone.View.extend(
            {
                initialize: function () {
                    this.listenTo(
                        this.model,
                        'add',
                        this.addItem
                    );
                },
                addItem: function (model) {
                    this.$el.append(
                        '<div class="list-group-item"><h4 class="list-group-item-heading">' + model.attributes.title + '</h4><label class="label label-default">' + model.getPhone() + '</label><label class="label label-default">' + model.getEmail() + '</label></div>'
                    );
                }
            }
        );
    }
);