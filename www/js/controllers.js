angular.module('smashedpotato.controllers', [])


.controller('AppCtrl', function($scope) {

})


.controller('DictionaryCtrl', function($scope, $http) {

      $http.get('json/dictionary.json').success(function(data) {
        $scope.dictionary = data;
      });

        //only run it new
        var fav = new localStorageDB("favs", localStorage);

        //create table
        if( fav.isNew() ) {
          fav.createTable("favorites", ["term", "definition"]);
        }
        //commit table
        fav.commit();

        $scope.pickFavorite = function (favW) {
           //insert into table
      		fav.insert("favorites", {term: favW.term, definition: favW.definition});
          //commit insert
          fav.commit();

          $scope.word = favW.term;
          $scope.def = favW.definition;
         }
})


    .controller('HomeCtrl', function($scope, $http) {

        $http.get('json/dictionary.json').success(function(data) {
            $scope.dictionary = data;


        var random_num = Math.floor(Math.random() * 2);
            var daily_word = data[random_num];
            $scope.message = daily_word ;
          });
    })



    .controller('ConverterCtrl', function($scope){


                 $scope.convertme = function(one, two, num){

                    var num_converted = num;

                    if( one == "teaspoons"){
                      if(two == "teaspoons"){
                        num_converted = num_converted * 7;
                      $scope.number =  "= " + num_converted;
                      }else if( two == "tablespoons"){
                        num_converted = num_converted * (1/3);
                        $scope.number =  "= " + num_converted;
                      }else if( two == "cups"){
                        num_converted = num_converted * 1/48;
                        $scope.number =  "= " + num_converted;
                      }else if( two == "pints"){
                        num_converted = num_converted * 1/96;
                        $scope.number =  "= " + num_converted;
                      }else if( two == "quarts"){
                        num_converted = num_converted * 1/192;
                        $scope.number =  "= " + num_converted;
                      }else if( two == "gallons"){
                        num_converted = num_converted * 1/786;
                        $scope.number =  "= " + num_converted;
                      }//end teaspoon -> gallons
                    }else if( one == "tablespoons"){
                      if(two == "teaspoons"){
                        num_converted = num_converted * 3;
                        $scope.number =  "= " + num_converted;
                      }else if( two == "tablespoons"){
                        num_converted = num_converted * 1;
                        $scope.number =  "= " + num_converted;
                      }else if( two == "cups"){
                        num_converted = num_converted * 1/16;
                        $scope.number =  "= " + num_converted;
                      }else if( two == "pints"){
                        num_converted = num_converted * 1/32;
                        $scope.number =  "= " + num_converted;
                      }else if( two == "quarts"){
                        num_converted = num_converted * 1/64;
                        $scope.number =  "= " + num_converted;
                      }else if( two == "gallons"){
                        num_converted = num_converted * 1/256;
                        $scope.number =  "= " + num_converted;
                      }
                    }else if( one == "cups"){
                      if(two == "teaspoons"){
                        num_converted = num_converted * 48;
                        $scope.number =  "= " + num_converted;
                      }else if( two == "tablespoons"){
                        num_converted = num_converted * 16;
                        $scope.number =  "= " + num_converted;
                      }else if( two == "cups"){
                        num_converted = num_converted * 1;
                        $scope.number =  "= " + num_converted;
                      }else if( two == "pints"){
                        num_converted = num_converted * 1/2;
                        $scope.number =  "= " + num_converted;
                      }else if( two == "quarts"){
                        num_converted = num_converted * 1/4;
                        $scope.number =  "= " + num_converted;
                      }else if( two == "gallons"){
                        num_converted = num_converted * 1/6;
                        $scope.number =  "= " + num_converted;
                      }
                    }else if( one == "pints"){
                      if(two == "teaspoons"){
                        num_converted = num_converted * 72;
                        $scope.number =  "= " + num_converted;
                      }else if( two == "tablespoons"){
                        num_converted = num_converted * 24;
                        $scope.number =  "= " + num_converted;
                      }else if( two == "cups"){
                        num_converted = num_converted * 2;
                        $scope.number =  "= " + num_converted;
                      }else if( two == "pints"){
                        num_converted = num_converted * 1;
                        $scope.number =  "= " + num_converted;
                      }else if( two == "quarts"){
                        num_converted = num_converted * 1/2;
                        $scope.number =  "= " + num_converted;
                      }else if( two == "gallons"){
                        num_converted = num_converted * 1/8;
                        $scope.number =  "= " + num_converted;
                      }
                    }else if( one == "quarts"){
                      if(two == "teaspoons"){
                        num_converted = num_converted * 192;
                        $scope.number =  "= " + num_converted;
                      }else if( two == "tablespoons"){
                        num_converted = num_converted * 64;
                        $scope.number =  "= " + num_converted;
                      }else if( two == "cups"){
                        num_converted = num_converted * 4;
                        $scope.number =  "= " + num_converted;
                      }else if( two == "pints"){
                        num_converted = num_converted * 2;
                        $scope.number =  "= " + num_converted;
                      }else if( two == "quarts"){
                        num_converted = num_converted * 1;
                        $scope.number =  "= " + num_converted;
                      }else if( two == "gallons"){
                        num_converted = num_converted * 1/4;
                        $scope.number =  "= " + num_converted;
                      }
                    }else if( one == "gallons"){
                      if(two == "teaspoons"){
                        num_converted = num_converted * 768;
                        $scope.number =  "= " + num_converted;
                      }else if( two == "tablespoons"){
                        num_converted = num_converted * 256;
                        $scope.number =  "= " + num_converted;
                      }else if( two == "cups"){
                        num_converted = num_converted * 16;
                        $scope.number =  "= " + num_converted;
                      }else if( two == "pints"){
                        num_converted = num_converted * 8;
                        $scope.number =  "= " + num_converted;
                      }else if( two == "quarts"){
                        num_converted = num_converted * 4;
                        $scope.number =  "= " + num_converted;
                      }else if( two == "gallons"){
                        num_converted = num_converted * 1;
                        $scope.number =  "= " + num_converted;
                      }
                    }
                }//end convertme
          $scope.convertit = function(one, two, num){

             var number_convert = num;

             if( one == "ounces"){
               if(two == "ounces"){
                 number_convert = number_convert * 1;
               $scope.numbertwo =  "= " + number_convert;
             }else if( two == "pounds"){
                 number_convert = number_convert * 1/16;
                 $scope.numbertwo =  "= " + number_convert;
               }
             }else if(one == "pounds"){
               if(two == "ounces"){
                 number_convert = number_convert * 16;
               $scope.numbertwo =  "= " + number_convert;
             }else if( two == "pounds"){
                 number_convert = number_convert * 1;
                 $scope.numbertwo = "= " + number_convert;
               }
             }
          }//end converit

    })

    .controller('TimerCtrl', function($scope){

      $scope.timer = '30:00';

      //$scope.times = function(amount)
      //var countup = new Timer();

    //  countup.start(); // starts the timer
  //    countup.timings(); // {duration: 5928, seconds: 48, minutes: 38, hours: 1}
    //  countup.pause(); // pauses the timer
    //  countup.reset(); // resets all values


    })

    .controller('CounterCtrl', function($scope){

      var num = 01;
      $scope.number = num;

        $scope.addUp = function(){
              $scope.num = num++;
              return $scope.num;
        }

       $scope.subtract = function(){
              if($scope.num >= 1){
                $scope.num--;
                return $scope.num;
              }else{
                $scope.num = 0;
                return $scope.num;
              }
       }

       $scope.clear = function(){
              $scope.num = 0;
              return $scope.num;
       }

  })
