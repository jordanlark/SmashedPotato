angular.module('starter.controllers', [])


.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})


.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('DictionaryCtrl', function($scope) {
      $http.get('www/json/dictionary.json').success(function(data) {
        $scope.dictionary = data;
      });
})

.controller('AppCtrl', function($scope){
  $scope.message = 'App this is cool';
})
.controller('HomeCtrl', function($scope){
  $scope.message = 'OHome this is cool';
})
    .controller('ConverterCtrl', function($scope){
      $scope.message = 'Converter this is cool';
    })
    .controller('DoubleCtrl', function($scope){
      $scope.message = 'Dourlber this is cool';
    })
    .controller('TimerCtrl', function($scope){
      $scope.message = 'Timer this is cool';
    })


/* term :  Caramelize ,  definition  :   To heat sugar in order to turn it brown and give it a special taste.  ,
    term :  Chop ,  definition  :   To cut solids into pieces with a sharp knife or other chopping device.  ,
    term :  Clarify ,  definition  :   To separate and remove solids from a liquid, thus making it clear.  ,
    term :  Cream ,  definition  :   To soften a fat, especially butter, by beating it at room temperature. Butter and sugar are often creamed together, making a smooth, soft paste.  ,
    term :  Cure ,  definition  :   To preserve meats by drying and salting and/or smoking.  ,
    term :  Deglaze ,  definition  :   To dissolve the thin glaze of juices and brown bits on the surface of a pan in which food has been fried, sauteed or roasted. To do this, add liquid and stir and scrape over high heat, thereby adding flavor to the liquid for use as a sauce.  ,
    term :  Degrease ,  definition  :   To remove fat from the surface of stews, soups, or stock. Usually cooled in the refrigerator so that fat hardens and is easily removed   ,
    term :  Dice ,  definition  :   To cut food in small cubes of uniform size and shape   ,
    term :  Dissolve ,  definition  :   To cause a dry substance to pass into solution in a liquid  ,
    term :  Dredge ,  definition  :   To sprinkle or coat with flour or other fine substance.  ,
    term :  Drizzle ,  definition  :   To sprinkle drops of liquid lightly over food in a casual manner   ,
    term :  Dust ,  definition  :   To sprinkle food with dry ingredients. Use a strainer or a jar with a perforated cover, or try the good, old-fashioned way of shaking things together in a paper bag   ,
    term :  Fillet ,  definition  :   As a verb, to remove the bones from meat or fish. A fillet (or filet) is the piece of flesh after it has been boned   ,
    term :  Flake ,  definition  :   To break lightly into small pieces.  ,
    term :  Flambe  ,  definition  :   To flame foods by dousing in some form of potable alcohol and setting alight  ,
    term :  Fold ,  definition  :  To incorporate a delicate substance, such as whipped cream or beaten egg whites, into another substance without releasing air bubbles. Cut down through mixture with spoon, whisk, or fork; go across bottom of bowl, up and over, close to surface. The process is repeated, while slowing rotating the bowl, until the ingredients are thoroughly blended  ,
    term :   Fricassee ,  definition  :   To cook by braising; usually applied to fowl or rabbit   ,
    term :  Fry ,  definition  :  To cook in hot fat. To cook in a fat is called pan-frying or sauteing; to cook in a one-to-two inch layer of hot fat is called shallow-fat frying; to cook in a deep layer of hot fat is called deep-fat frying.  ,
    term :  Garnish ,  definition  :   To decorate a dish both to enhance its appearance and to provide a flavorful foil. Parsley, lemon slices, raw vegetables, chopped chives, and other herbs are all forms of garnishes.  ,
    term :  Glaze ,  definition  :   To cook with a thin sugar syrup cooked to crack stage; mixture may be thickened slightly. Also, to cover with a thin, glossy icing.  ,
    term :  Grate ,  definition  :   To rub on a grater that separates the food in various sizes of bits or shreds.  ,
    term :  Gratin ,  definition  :   From the French word for  crust.  Term used to describe any oven-baked dish--usually cooked in a shallow oval gratin dish--on which a golden brown crust of bread crumbs, cheese or creamy sauce is form.  ,
    term :  Grill ,  definition  :   To cook on a grill over intense heat.  ,
    term :  Grind ,  definition  :   To process solids by hand or mechanically to reduce them to tiny particles.  ,
    term :  Julienne ,  definition  :   To cut vegetables, fruits, or cheeses into thin strips.  ,
    term :  Knead ,  definition  :   To work and press dough with the palms of the hands or mechanically, to develop the gluten in the flour.  ,
    term :  Lukewarm ,  definition  :   Neither cool nor warm; approximately body temperature.  ,
    term :  Marinate ,  definition  :   To flavor and moisturize pieces of meat, poultry, seafood or vegetable by soaking them in or brushing them with a liquid mixture of seasonings known as a marinade. Dry marinade mixtures composed of salt, pepper, herbs or spices may also be rubbed into meat, poultry or seafood.  ,
    term :  Meuniere ,  definition  :   Dredged with flour and sauteed in butter.  ,
    term :  Mince ,  definition  :   To cut or chop food into extremely small pieces.  ,
    term :  Mix ,  definition  :   To combine ingredients usually by stirring.  ,
    term :  Pan-broil ,  definition  :   To cook uncovered in a hot fry pan, pouring off fat as it accumulates.  ,
    term :  Pan-fry ,  definition  :   To cook in small amounts of fat.  ,
    term :  Parboil ,  definition  :   To boil until partially cooked; to blanch. Usually this procedure is followed by final cooking in a seasoned sauce.  ,
    term :  Pare ,  definition  :   To remove the outermost skin of a fruit or vegetable.  ,
    term :  Peel ,  definition  :   To remove the peels from vegetables or fruits.  ,
    term :  Pickle ,  definition  :   To preserve meats, vegetables, and fruits in brine.  ,
    term :  Pinch ,  definition  :   A pinch is the trifling amount you can hold between your thumb and forefinger.  ,
    term :  Pit ,  definition  :   To remove pits from fruits.  ,
    term :  Planked ,  definition  :   Cooked on a thick hardwood plank.  ,
    term :  Plump ,  definition  :   To soak dried fruits in liquid until they swell.  ,
    term :  Poach ,  definition  :   To cook very gently in hot liquid kept just below the boiling point.  ,
    term :  Puree ,  definition  :   To mash foods until perfectly smooth by hand, by rubbing through a sieve or food mill, or by whirling in a blender or food processor.  ,
    term :  Reduce ,  definition  :   To boil down to reduce the volume.  ,
    term :  Refresh ,  definition  :   To run cold water over food that has been parboiled, to stop the cooking process quickly.  ,
    term :  Render ,  definition  :   To make solid fat into liquid by melting it slowly.  ,
    term :  Roast ,  definition  :   To cook by dry heat in an oven.  ,
    term :  Saute ,  definition  :   To cook and/or brown food in a small amount of hot fat.  ,
    term :  Scald ,  definition  :   To bring to a temperature just below the boiling point.  ,
    term :  Scalloped ,  definition  :   To bake a food, usually in a casserole, with sauce or other liquid. Crumbs often are sprinkled over.  ,
    term :  Score ,  definition  :   To cut narrow grooves or gashes partway through the outer surface of food.  ,
    term :  Sear ,  definition  :   To brown very quickly by intense heat. This method increases shrinkage but develops flavor and improves appearance.  ,
    term :  Shred ,  definition  :   To cut or tear in small, long, narrow pieces.  ,
    term :  Sift ,  definition  :   To put one or more dry ingredients through a sieve or sifter.  ,
    term :  Simmer ,  definition  :   To cook slowly in liquid over low heat at a temperature of about 180°. The surface of the liquid should be barely moving, broken from time to time by slowly rising bubbles.  ,
    term :  Skim ,  definition  :   To remove impurities, whether scum or fat, from the surface of a liquid during cooking, thereby resulting in a clear, cleaner-tasting final produce.  ,
    term :  Steam ,  definition  :   To cook in steam in a pressure cooker, deep well cooker, double boiler, or a steamer made by fitting a rack in a kettle with a tight cover. A small amount of boiling water is used, more water being added during steaming process, if necessary.  ,
    term :  Steep ,  definition  :   To extract color, flavor, or other qualities from a substance by leaving it in water just below the boiling point.  ,
    term :  Sterilize ,  definition  :   To destroy micro organisms by boiling, dry heat, or steam.  ,
    term :  Stew ,  definition  :   To simmer slowly in a small amount of liquid for a long time.  ,
    term :  Stir ,  definition  :   To mix ingredients with a circular motion until well blended or of uniform consistency.  ,
    term :  Toss ,  definition  :   To combine ingredients with a lifting motion.  ,
    term :  Truss ,  definition  :   To secure poultry with string or skewers, to hold its shape while cooking.  ,
    term :  Whip ,  definition  :   To beat rapidly to incorporate air and produce expansion, as in heavy cream or egg whites.
*/