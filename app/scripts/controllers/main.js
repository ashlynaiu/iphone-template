'use strict';

angular.module('iphoneTemplate')
	.controller('MainCtrl', function ($scope, $state) {
		$scope.$state = $state;
		$scope.delayFade = false;
	});
