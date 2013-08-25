define(
    function () {
        return Backbone.Model.extend(
            {
                getPhone: function () {
                    var result = '';
                    if (this.attributes.phoneNumber[0]) {
                        result = this.attributes.phoneNumber[0].$t;
                    }
                    return result;
                },
                getEmail: function () {
                    console.log(this.attributes);
                    var result = '';
                    if (this.attributes.email[0]) {
                        result = this.attributes.email[0].address;
                    }
                    return result;
                }
            }
        );
    }
);