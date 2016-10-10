'use strict';

angular.module('iphoneTemplate')
	.controller('MainCtrl', function ($scope, $state, $timeout) {
		//Set the state
		$scope.$state = $state;

		$scope.standardStep = function(currentStep) {
			//Don't allow click at end of image loop
			if(currentStep === $scope.images.length - 1) {
				return;
			}
			else {
				//Set up current and next step variables
				var current = currentStep;
				var next = currentStep + 1;
				$scope.images[next].show = true;

				//Allow a timeout for background image to disappear
				$timeout(function() {
					$scope.images[current].show = false;
				}, 300);
			}
		};
	});
