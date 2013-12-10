'use strict';

/* App Module */

var phonecatApp = angular.module('frmApp', [
  'ngRoute',
  'frmAnimations',
  'frmControllers',
  'frmFilters',
  'frmServices'
]);

phonecatApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/dash', {
        templateUrl: 'partials/frm-dash.html',
        controller: 'FRMAppDashCtrl',
        resolve: {
          myVar: function(){
            //code to be executed before route change goes here
            //alert('hi');
          }
        }
      }).
      when('/examday', {
        templateUrl: 'partials/frm-examday.html',
        controller: 'FRMAppDashCtrl'}).      
      when('/readings', {
        templateUrl: 'partials/frm-readings.html',
        controller: 'FRMAppDashCtrl'
      }).      
      when('/login', {
        templateUrl: 'partials/frm-login.html',
        controller: 'FRMAppDashCtrl'
      }).      
      when('/myaccount', {
        templateUrl: 'partials/frm-myaccount.html',
        controller: 'FRMAppDashCtrl'
      }).      
	  /*
	  .		
      when('/phones', {
        templateUrl: 'partials/phone-list.html',
        controller: 'PhoneListCtrl'
      }).
      when('/phones/:phoneId', {
        templateUrl: 'partials/phone-detail.html',
        controller: 'PhoneDetailCtrl'
      }).*/
      otherwise({
        redirectTo: '/login'
      });
	  
  }]);


