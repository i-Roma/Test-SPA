app.directive('phoneInfo', function() { 
  return { 
    restrict: 'E', 
    scope: {
    	info: '='
    }, 
    templateUrl: 'js/directives/phoneInfo.html' 
  }; 
});