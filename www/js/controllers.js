angular.module('starter.controllers', [])


.controller('AppCtrl', function($scope) {

})


.controller('DictionaryCtrl', function($scope, $http) {
      $http.get('json/dictionary.json').success(function(data) {
        $scope.dictionary = data;
      });

        $scope.toggle = function(favtoggle){
            var favorites;
            $scope.pickFavorite = function(term){
                favorites = [term];
            }
        }
})

    .controller('HomeCtrl', function($scope, $http) {

        $http.get('json/dictionary.json').success(function(data) {
            $scope.dictionary = data;
        var random_num = Math.floor(Math.random() * 2);
            var daily_word = data[random_num];
            $scope.message = daily_word ;
           });

        $scope.pickfavorite = function (fav) {

        }
    })

    .controller('ConverterCtrl', function($scope){
      $scope.message = 'Converting is cool';
    })



    .controller('DoubleCtrl', function($scope){
      $scope.double = function(title, ingredient, amount, unit, ingredient1, amount1, unit1, ingredient2, amount2, unit2,
        ingredient3, amount3, unit3, ingredient4, amount4, unit4){

          var increase = amount * 2;
          var increase1 = amount1 *2;
          var increase2 = amount2 * 2;
          var increase3 = amount3 * 2;
          var increase4 = amount4 * 2;

          var recipe = [title, ingredient, increase, unit, ingredient1, increase1, unit1, ingredient2, increase2, unit2,
              ingredient3, increase3, unit3, ingredient4, increase4, unit4];
          var recipes = [ "term", "Blend", "definition", "To incorporate", "two or more ingredients thoroughly."];

          $scope.title = title;
          $scope.message = ingredient;
          $scope.message2 = increase;
          $scope.message3 = unit;
      }
    })


    .controller('TimerCtrl', function($scope){
       /* $scope.countdown(number, timer)
        var number = today.date();
      $scope.message = "52";*/
    })



/*$(function course2110(){
    $('.show2110').click(function hiddenStuff() {
        $(".hidden2110").slideToggle('normal',function slidetoggle(){ //Shows Nav area
            if ($('.hidden2110').is(':visible')) {
                $('.show2110').text('show less ^^^^');
            } else {
                $('.show2110').text('show more >>');
            } //end of if
        }); //end of slidetoggle
    }); //end of hiddenStuff
}); //end showContent*/
