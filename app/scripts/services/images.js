'use strict';
angular.module('iphoneTemplate').factory('images', function($http) {
    return{
        items : function() {
            return $http({
                url: '/scripts/json/images.json',
                method: 'GET'
            });
        }
    };
});