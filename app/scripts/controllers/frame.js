'use strict';

angular.module('iphoneTemplate')
	.controller('FrameCtrl', function ($scope, $state) {
		$scope.$state = $state;
		//create image states
		var imageNames = ['start'];
		$scope.imageStates = [];
		for (var i = 0; i < imageNames.length; i++) {
			var newVal = {
				name: imageNames[i],
				show: false
			};
			//Allow a start point
			if (imageNames[i] === 'start') {
				newVal.show = true;
			}
			$scope.imageStates.push(newVal);
		}
	});