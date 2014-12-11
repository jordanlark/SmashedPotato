angular.module('smashedpotato.services', ['ngResource']);


smashedpotato.services.factory('displayDict', function('$http'){


  $http.get('json/dictionary.json').success(function(data) {
        dict = data;
   });

   return dict;

}]);
