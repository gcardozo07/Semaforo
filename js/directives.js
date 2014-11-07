(function (){
  angular.module('semaforo.directives', [])

  .config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('tabs', {
      url: "/tab",
      abstract: true,
      templateUrl: "templates/tabs.html"
    })
    .state('tabs.home', {
      url: "/home",
      views: {
        'home-tab': {
          templateUrl: "templates/home.html",
          controller: 'HomeTabCtrl'
        }
      }
    })
    .state('tabs.catalogo', {
      url: "/catalogo",
      views: {
        'home-tab': {
          templateUrl: "templates/catalogo.html"
        }
      }
    })
    .state('tabs.facts2', {
      url: "/facts2",
      views: {
        'home-tab': {
          templateUrl: "templates/facts2.html"
        }
      }
    })
    .state('tabs.catalogotab', {
      url: "/catalogotab",
      views: {
        'catalogotab-tab': {
          templateUrl: "templates/catalogotab.html"
        }
      }
    })
    .state('tabs.chevrolet', {
      url: "/chevrolet",
      views: {
        'catalogotab-tab': {
          templateUrl: "templates/chevrolet.html"
        }
      }
    })
    .state('tabs.aveo', {
      url: "/aveo",
      views: {
        'catalogotab-tab': {
          templateUrl: "templates/aveo.html"
        }
      }
    })
    .state('tabs.jeanbig', {
      url: "/jeanbig",
      views: {
        'catalogotab-tab': {
          templateUrl: "templates/jeanbig.html"
        }
      }
    })
    .state('tabs.contact', {
      url: "/contact",
      views: {
        'contact-tab': {
          templateUrl: "templates/contact.html"
        }
      }
    });


   $urlRouterProvider.otherwise("/tab/home");

})

})();