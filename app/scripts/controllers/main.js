'use strict';

angular.module('buddyPpApp')
    .controller('MainCtrl', function ($scope, Payment) {
        $scope.handleStripe = function(status, response) {
            if (response.error) {

            } else {
                var token = response.id;
                var payment = {stripeToken: token, stripeEmail: 'herp@derp.com'}
                Payment.save(payment)
            }
        };
    });
