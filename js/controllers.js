(function (){
  angular.module('app.controllers', [])
  
  .controller('marcasController', ['$scope', function($scope) {

 $scope.marcas =[

        {
          "nombre": "Chevrolet",
          "image": "img/chevrolet.jpg",
          "modelo": [
            {"nombre":"Aveo", "tab":"aveo", "modelo":"1990-2014", "repuestos":
              [
                {"nombre":"Espejos", "cantidad":"8", "articulos":[{"nombre":"Espejo Marca 01","material":"Metal-Plastico","imagenes":[{"image":"img/farola.jpg"},{"image":"img/farola.jpg"}]}]},
                {"nombre":"Exploradoras", "cantidad":"4"},
                {"nombre":"Farolas", "cantidad":"9"},
                {"nombre":"Sonido", "cantidad":"8"},
                {"nombre":"Stops", "cantidad":"10"}
              ]
            },
            {"nombre":"Captiva", "tab":"captiva"},
            {"nombre":"Corsa", "tab":"corsa"},
            {"nombre":"Cruze", "tab":"cruze"},
            {"nombre":"Grand Vitara", "tab":"grand-vitara"},
            {"nombre":"Luv D-Max", "tab":"luv-dmax"},
            {"nombre":"Optra", "tab":"optra"},
            {"nombre":"Rodeo", "tab":"rodeo"},
            {"nombre":"Sail", "tab":"sail"},
            {"nombre":"Spark", "tab":"spark"},
            {"nombre":"Tracker", "tab":"tracker"},
            {"nombre":"Trail Blazer", "tab":"trail-blazer"},
            {"nombre":"Tropper", "tab":"tropper"}
            ],
          "tab": "chevrolet"
        },
        {
          "nombre": "Citroen",
          "image": "img/citroen.jpg",
          "modelo": [
            {"nombre":"Allure", "tab":"allure"},
            {"nombre":"C2", "tab":"c2"},
            {"nombre":"C3", "tab":"c3"},
            {"nombre":"C6", "tab":"c6"},
            {"nombre":"Picasso", "tab":"picasso"},
            {"nombre":"Saxxo", "tab":"saxxo"},
            {"nombre":"Xsara", "tab":"xsara"},
            {"nombre":"Zx", "tab":"zx"}
            ],
          "tab": "aveo"
        },
        {
          "nombre": "Dodge",
          "image": "img/dodge.jpg",
          "modelo": [
            {"nombre":"Avenger", "tab":"avenger"},
            {"nombre":"Challenger", "tab":"challenger"},
            {"nombre":"Charger", "tab":"charger"},
            {"nombre":"Dakota", "tab":"dakota"},
            {"nombre":"Durango", "tab":"durango"},
            {"nombre":"Nitro", "tab":"nitro"},
            {"nombre":"Ram", "tab":"ram"},
            {"nombre":"Ford", "tab":"ford"},
            {"nombre":"Escape", "tab":"escape"},
            {"nombre":"Explorer", "tab":"explorer"},
            {"nombre":"F-100", "tab":"f-100"},
            {"nombre":"Falcon", "tab":"falcon"},
            {"nombre":"Fiesta", "tab":"fiesta"},
            {"nombre":"Ranger", "tab":"ranger"}
            ],
          "tab": "aveo"
        },
        {
          "nombre": "Honda",
          "image": "img/honda.jpg",
          "modelo": [
            {"nombre":"Accord", "tab":"accord"},
            {"nombre":"Civic", "tab":"civic"},
            {"nombre":"Legend", "tab":"legend"},
            {"nombre":"Passport", "tab":"passport"},
            {"nombre":"Prelude", "tab":"prelude"}
            ],
          "tab": "aveo"
        },
        {
          "nombre": "Hyundai",
          "image": "img/hyundai.jpg",
          "modelo": [
            {"nombre":"accent", "tab":"accent"},
            {"nombre":"elantra", "tab":"elantra"},
            {"nombre":"i25", "tab":"i25"},
            {"nombre":"Santa Fe", "tab":"santafe"},
            {"nombre":"Scoupe", "tab":"scoupe"},
            {"nombre":"Sonata", "tab":"sonata"},
            {"nombre":"Tucson", "tab":"tucson"},
            {"nombre":"Veracruz", "tab":"veracruz"}
            ],
          "tab": "aveo"
        },
        {
          "nombre": "Jeep",
          "image": "img/jeep.jpg",
          "modelo": [
            {"nombre":"Cj", "tab":"cj"},
            {"nombre":"Cherokee", "tab":"cherokee"},
            {"nombre":"Comando", "tab":"comando"},
            {"nombre":"Liberty", "tab":"liberty"},
            {"nombre":"Wagoneer", "tab":"wagoneer"},
            {"nombre":"Willys", "tab":"willys"},
            {"nombre":"Wrangler", "tab":"Wrangler"}
            ],
          "tab": "aveo"
        },
        {
          "nombre": "Kia",
          "image": "img/kia.jpg",
          "modelo": [
            {"nombre":"Cerato", "tab":"cerato"},
            {"nombre":"Clarus", "tab":"clarus"},
            {"nombre":"Picanto", "tab":"picando"},
            {"nombre":"Rio", "tab":"rio"},
            {"nombre":"Sportage", "tab":"sportage"},
            {"nombre":"Stylus", "tab":"stylus"}
            ],
          "tab": "aveo"
        },
        {
          "nombre": "Mazda",
          "image": "img/mazda.jpg",
          "modelo": [
            {"nombre":"Mazda 2", "tab":"mazda2"},
            {"nombre":"Mazda 3", "tab":"mazda3"},
            {"nombre":"Mazda 5", "tab":"mazda5"},
            {"nombre":"Mazda 6", "tab":"mazda6"}
            ],
          "tab": "aveo"
        },
        {
          "nombre": "Mitsubishi",
          "image": "img/mitsubishi.jpg",
          "modelo": [
            {"nombre":"Advancer", "tab":"advancer"},
            {"nombre":"Eclipse", "tab":"eclipse"},
            {"nombre":"Gt", "tab":"gt"},
            {"nombre":"Lancer", "tab":"lancer"},
            {"nombre":"Montero", "tab":"montero"},
            {"nombre":"Nativa", "tab":"nativa"},
            {"nombre":"Sigma", "tab":"sigma"}
            ],
          "tab": "aveo"
        },
        {
          "nombre": "Nissan",
          "image": "img/nissan.jpg",
          "modelo": [
            {"nombre":"Murano", "tab":"murano"},
            {"nombre":"Navara", "tab":"navara"},
            {"nombre":"Pathfinder", "tab":"pathfinder"},
            {"nombre":"Patrol", "tab":"patrol"},
            {"nombre":"Sentra", "tab":"sentra"},
            {"nombre":"Tiida", "tab":"tiida"},
            {"nombre":"X Trail", "tab":"x-trail"}
            ],
          "tab": "aveo"
        },
        {
          "nombre": "Peugeot",
          "image": "img/peugeot.jpg",
          "modelo": [
            {"nombre":"206", "tab":"206"},
            {"nombre":"207", "tab":"207"},
            {"nombre":"306", "tab":"306"},
            {"nombre":"406", "tab":"406"},
            {"nombre":"Sentra", "tab":"sentra"},
            {"nombre":"Tiida", "tab":"tiida"},
            {"nombre":"X Trail", "tab":"x-trail"}
            ],
          "tab": "aveo"
        },
        {
          "nombre": "Renault",
          "image": "img/renault.jpg",
          "modelo": [
            {"nombre":"Clio", "tab":"clio"},
            {"nombre":"Duster", "tab":"duster"},
            {"nombre":"Koleos", "tab":"koleos"},
            {"nombre":"Megane", "tab":"megane"},
            {"nombre":"Sandero", "tab":"sandero"},
            {"nombre":"Twingo", "tab":"twindo"},
            {"nombre":"X Trail", "tab":"x-trail"}
            ],
          "tab": "aveo"
        },
        {
          "nombre": "SsangYong",
          "image": "img/ssangyong.jpg",
          "modelo": [
            {"nombre":"Family", "tab":"family"},
            {"nombre":"Korando", "tab":"korando"},
            {"nombre":"Rodius", "tab":"rodius"}
            ],
          "tab": "aveo"
        },
        {
          "nombre": "Suzuki",
          "image": "img/suzuki.jpg",
          "modelo": [
            {"nombre":"Family", "tab":"family"},
            {"nombre":"Korando", "tab":"korando"},
            {"nombre":"Rodius", "tab":"rodius"}
            ],
          "tab": "aveo"
        },
        {
          "nombre": "Toyota",
          "image": "img/toyota.jpg",
          "modelo": [
            {"nombre":"Corolla", "tab":"corolla"},
            {"nombre":"FJ", "tab":"fj"},
            {"nombre":"Fortuner", "tab":"fortuner"},
            {"nombre":"Hilux", "tab":"hilux"},
            {"nombre":"Land Cruiser", "tab":"land-cruiser"},
            {"nombre":"Fortuner", "tab":"fortuner"},
            {"nombre":"Prado", "tab":"prado"},
            {"nombre":"Rav4", "tab":"rav4"},
            {"nombre":"Samurai", "tab":"Samurai"}
            ],
          "tab": "aveo"
        },
        {
          "nombre": "Volkswagen",
          "image": "img/volkswagen.jpg",
          "modelo": [
            {"nombre":"Bora", "tab":"bora"},
            {"nombre":"Fox", "tab":"fox"},
            {"nombre":"Gol", "tab":"gol"},
            {"nombre":"Golf", "tab":"golf"},
            {"nombre":"Jetta", "tab":"jetta"},
            {"nombre":"Santana", "tab":"santana"},
            {"nombre":"Vento", "tab":"vento"}
            ],
          "tab": "aveo"
        }
      ];

      $scope.selectedModel = "Chevrolet";


      $scope.custom = true;
        $scope.toggleCustom = function() {
            $scope.custom = $scope.custom === false ? true: false;
        };

 
  }])

  .controller('MyController', ['$scope', '$firebase',
        function($scope, $firebase) {
          //CREATE A FIREBASE REFERENCE
          var ref = new Firebase("https://modelos.firebaseio.com");

          // GET MESSAGES AS AN ARRAY
          $scope.messages = $firebase(ref).$asArray();

          //ADD MESSAGE METHOD
          $scope.addMessage = function(e) {

            //LISTEN FOR RETURN KEY
            
              //ALLOW CUSTOM OR ANONYMOUS USER NAMES
              var nombre = $scope.nombre || 'anonymous';
              var correo = $scope.correo || 'anonymous';
              var marca = $scope.marca || 'anonymous';
              var modelo = $scope.modelo || 'anonymous';
              var accesorio = $scope.accesorio || 'anonymous';

              //ADD TO FIREBASE
              $scope.messages.$add({
                from: nombre,
                mail: correo,
                marca: marca,
                modelo: modelo,
                accesorio: accesorio
              });

              $scope.isUnchanged = function(user) {
      return angular.equals(user, $scope.master);
    };

              //RESET MESSAGE
              $scope.nombre = "";
              $scope.correo = "";
              $scope.marca = "";
              $scope.modelo = "";
              $scope.accesorio = "";
            
          };
        }
      ])

  .controller('HomeTabCtrl', function($scope) {
    console.log('HomeTabCtrl');
  })

  .factory('JsonService', function($http) {
  return {
    all: function(callback) {
      return $http.jsonp('http://www.garsoncepte.com/json.php?callback=JSON_CALLBACK', {cache: true})
      .then(function(response) {
          return response.data;
        }
      );
    }
   };
 })

  .controller('formCtrl',['$scope', function($scope){
        $scope.custom = true;
        $scope.toggleCustom = function() {
            $scope.custom = $scope.custom === false ? true: false;
        };
}])




  .controller('MyCtrl', function($scope, JsonService) {
  JsonService.all().then(function(data) {
    $scope.items = data;
  });
  
});

})();