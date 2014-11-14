'use strict';

angular.module('buddyPpApp')
    .factory('Payment', function($resource, APIHost) {
        var Item = $resource(APIHost + '/api/v1/payments.json', {},{});
        return Item;
    });
