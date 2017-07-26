'use strict';

const myApp = angular.module('app', []);

myApp.factory('PlaceFactory', function($q, $http) {

	function getPlaces() {
		return $q( (resolve,reject) => {
			$http.get('../../data/guides.json')
			.then( (placeList) => {
				resolve(placeList);
			})
			.catch( (err) => {
				reject(err);
			});
		});
	}

	return {getPlaces};
});

myApp.controller('PlaceController', function($scope, PlaceFactory) {
	PlaceFactory.getPlaces()
	.then( (placeData) => {
		console.log(placeData);
		$scope.placeList = placeData.data.guides
	});
});
