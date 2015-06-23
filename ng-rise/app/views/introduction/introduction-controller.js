;(function(app){

  app.controller('introductionController', ['$scope', 'TestService', function($scope, TestService){

    $scope.title = 'ng-rise';
    TestService.get({}, success, error);

    function success(response) {
    	$scope.message = response;
    }

    function error(response) {
    	$scope.message = response;
    }

  }]);
})(app);
