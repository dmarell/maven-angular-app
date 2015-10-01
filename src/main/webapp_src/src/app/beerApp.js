'use strict';
var module = angular.module('beerApp', []);
module.controller('BeerCtrl', function ($scope, $http) {

    $scope.beers = [];

    $http.get('http://caglabs.se/beers').then(function(response){
        $scope.beers = response.data;
    }).catch(function() {
        $scope.beers = [
            {name: 'Tuborg', alcohol: 5},
            {name: 'Carlsberg', alcohol: 6}
        ];
    });

    $http.get('assets/version.json').then(function(response){
        $scope.appVersion = response.data.appVersion;
    });

    $scope.friendlyGreeting = 'Add beer here';
    $scope.addBeer = function(newBeer) {
        $scope.beers.push(newBeer);
        $scope.newBeer = {};
        //$http.post('http://caglabs.se/beers', newBeer);
    };

    $scope.deleteBeer = function(beerToDelete) {
        $scope.beers = $scope.beers.filter(function(beerInList) {
            return beerInList !== beerToDelete;
        });
    };

});