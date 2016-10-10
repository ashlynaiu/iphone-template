'use strict';

angular.module('iphoneTemplate')
	.controller('FrameCtrl', function ($scope, images) {

		images.items().success(function(data){
				$scope.images = data;
		});
	});