// Define the `PhoneListController` controller on the `phonecatApp` module
'use strict';

angular.module('showDetailList').
  component('showDetailList', {
    templateUrl:'detail-component/detail-list-template.html',
    controller: ['$routeParams', '$http', '$scope',
      function PhoneDetailController($routeParams, $http, $scope, CodedataOp) {
        this.postId = $routeParams.postId;
        var self = this, 
        	CodedataOp,
        	addressVal; 
      
        $scope.CodedataOp = CodedataOp;
        
        console.log(this.postId);
        console.log(CodedataOp);

        $scope.customer = {
          name: 'Srini',
          designation: 'UI developer'
        }
      }
    ]
  })
  .directive('myCustomer', function() {
    return {
      templateUrl: 'detail-component/map-user-template.html',
      link: function(scope, ele, attr){
        console.log('link method');
      }
    };
  });