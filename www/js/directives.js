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
    .state('tabs.captiva', {
      url: "/captiva",
      views: {
        'catalogotab-tab': {
          templateUrl: "templates/captiva.html"
        }
      }
    })
    .state('tabs.cheyenne', {
      url: "/cheyenne",
      views: {
        'catalogotab-tab': {
          templateUrl: "templates/cheyenne.html"
        }
      }
    })
    .state('tabs.cobalt', {
      url: "/cobalt",
      views: {
        'catalogotab-tab': {
          templateUrl: "templates/cobalt.html"
        }
      }
    })
    .state('tabs.corsa', {
      url: "/corsa",
      views: {
        'catalogotab-tab': {
          templateUrl: "templates/corsa.html"
        }
      }
    })
    .state('tabs.corsaevol', {
      url: "/corsaevol",
      views: {
        'catalogotab-tab': {
          templateUrl: "templates/corsaevol.html"
        }
      }
    })
    .state('tabs.cruze', {
      url: "/cruze",
      views: {
        'catalogotab-tab': {
          templateUrl: "templates/cruze.html"
        }
      }
    })
    .state('tabs.dmax', {
      url: "/dmax",
      views: {
        'catalogotab-tab': {
          templateUrl: "templates/dmax.html"
        }
      }
    })
    .state('tabs.luv', {
      url: "/luv",
      views: {
        'catalogotab-tab': {
          templateUrl: "templates/luv.html"
        }
      }
    })
    .state('tabs.luv-dmax', {
      url: "/luv-dmax",
      views: {
        'catalogotab-tab': {
          templateUrl: "templates/luv-dmax.html"
        }
      }
    })
    .state('tabs.optra', {
      url: "/optra",
      views: {
        'catalogotab-tab': {
          templateUrl: "templates/optra.html"
        }
      }
    })
    .state('tabs.orlando', {
      url: "/orlando",
      views: {
        'catalogotab-tab': {
          templateUrl: "templates/orlando.html"
        }
      }
    })
    .state('tabs.sail', {
      url: "/sail",
      views: {
        'catalogotab-tab': {
          templateUrl: "templates/sail.html"
        }
      }
    })
    .state('tabs.silverado', {
      url: "/silverado",
      views: {
        'catalogotab-tab': {
          templateUrl: "templates/silverado.html"
        }
      }
    })
    .state('tabs.sonic', {
      url: "/sonic",
      views: {
        'catalogotab-tab': {
          templateUrl: "templates/sonic.html"
        }
      }
    })
    .state('tabs.spark', {
      url: "/spark",
      views: {
        'catalogotab-tab': {
          templateUrl: "templates/spark.html"
        }
      }
    })
    .state('tabs.sprint', {
      url: "/sprint",
      views: {
        'catalogotab-tab': {
          templateUrl: "templates/sprint.html"
        }
      }
    })
    .state('tabs.swift', {
      url: "/swift",
      views: {
        'catalogotab-tab': {
          templateUrl: "templates/swift.html"
        }
      }
    })
    .state('tabs.tracker', {
      url: "/tracker",
      views: {
        'catalogotab-tab': {
          templateUrl: "templates/tracker.html"
        }
      }
    })
    .state('tabs.vitara', {
      url: "/vitara",
      views: {
        'catalogotab-tab': {
          templateUrl: "templates/vitara.html"
        }
      }
    })
    .state('tabs.daihatsu', {
      url: "/daihatsu",
      views: {
        'catalogotab-tab': {
          templateUrl: "templates/daihatsu.html"
        }
      }
    })
    .state('tabs.terios', {
      url: "/terios",
      views: {
        'catalogotab-tab': {
          templateUrl: "templates/terios.html"
        }
      }
    })
    .state('tabs.dodge', {
      url: "/dodge",
      views: {
        'catalogotab-tab': {
          templateUrl: "templates/dodge.html"
        }
      }
    })
    .state('tabs.journey', {
      url: "/journey",
      views: {
        'catalogotab-tab': {
          templateUrl: "templates/journey.html"
        }
      }
    })
    .state('tabs.ram', {
      url: "/ram",
      views: {
        'catalogotab-tab': {
          templateUrl: "templates/ram.html"
        }
      }
    })
    .state('tabs.fiat', {
      url: "/fiat",
      views: {
        'catalogotab-tab': {
          templateUrl: "templates/fiat.html"
        }
      }
    })
    .state('tabs.strada', {
      url: "/strada",
      views: {
        'catalogotab-tab': {
          templateUrl: "templates/strada.html"
        }
      }
    })
    .state('tabs.ford', {
      url: "/ford",
      views: {
        'catalogotab-tab': {
          templateUrl: "templates/ford.html"
        }
      }
    })
    .state('tabs.ecosport', {
      url: "/ecosport",
      views: {
        'catalogotab-tab': {
          templateUrl: "templates/ecosport.html"
        }
      }
    })
    .state('tabs.edge', {
      url: "/edge",
      views: {
        'catalogotab-tab': {
          templateUrl: "templates/edge.html"
        }
      }
    })
    .state('tabs.escape', {
      url: "/escape",
      views: {
        'catalogotab-tab': {
          templateUrl: "templates/escape.html"
        }
      }
    })
    .state('tabs.explorer', {
      url: "/explorer",
      views: {
        'catalogotab-tab': {
          templateUrl: "templates/explorer.html"
        }
      }
    })
    .state('tabs.f150', {
      url: "/f150",
      views: {
        'catalogotab-tab': {
          templateUrl: "templates/f150.html"
        }
      }
    })
    .state('tabs.lobo', {
      url: "/lobo",
      views: {
        'catalogotab-tab': {
          templateUrl: "templates/lobo.html"
        }
      }
    })
    .state('tabs.ranger2014', {
      url: "/ranger2014",
      views: {
        'catalogotab-tab': {
          templateUrl: "templates/ranger2014.html"
        }
      }
    })
    .state('tabs.fiesta2014', {
      url: "/fiesta2014",
      views: {
        'catalogotab-tab': {
          templateUrl: "templates/fiesta2014.html"
        }
      }
    })
    .state('tabs.ranger2006', {
      url: "/ranger2006",
      views: {
        'catalogotab-tab': {
          templateUrl: "templates/ranger2006.html"
        }
      }
    })
    .state('tabs.foton', {
      url: "/foton",
      views: {
        'catalogotab-tab': {
          templateUrl: "templates/foton.html"
        }
      }
    })
    .state('tabs.tunland', {
      url: "/tunland",
      views: {
        'catalogotab-tab': {
          templateUrl: "templates/tunland.html"
        }
      }
    })
    .state('tabs.honda', {
      url: "/honda",
      views: {
        'catalogotab-tab': {
          templateUrl: "templates/honda.html"
        }
      }
    })
    .state('tabs.city', {
      url: "/city",
      views: {
        'catalogotab-tab': {
          templateUrl: "templates/city.html"
        }
      }
    })
    .state('tabs.civic', {
      url: "/civic",
      views: {
        'catalogotab-tab': {
          templateUrl: "templates/civic.html"
        }
      }
    })
    .state('tabs.crv2014', {
      url: "/crv2014",
      views: {
        'catalogotab-tab': {
          templateUrl: "templates/crv2014.html"
        }
      }
    })
    .state('tabs.integra', {
      url: "/integra",
      views: {
        'catalogotab-tab': {
          templateUrl: "templates/integra.html"
        }
      }
    })
    .state('tabs.hyundai', {
      url: "/hyundai",
      views: {
        'catalogotab-tab': {
          templateUrl: "templates/hyundai.html"
        }
      }
    })
    .state('tabs.accentnext', {
      url: "/accentnext",
      views: {
        'catalogotab-tab': {
          templateUrl: "templates/accentnext.html"
        }
      }
    })
    .state('tabs.accentvision', {
      url: "/accentvision",
      views: {
        'catalogotab-tab': {
          templateUrl: "templates/accentvision.html"
        }
      }
    })
    .state('tabs.atos', {
      url: "/atos",
      views: {
        'catalogotab-tab': {
          templateUrl: "templates/atos.html"
        }
      }
    })
    .state('tabs.genesis', {
      url: "/genesis",
      views: {
        'catalogotab-tab': {
          templateUrl: "templates/genesis.html"
        }
      }
    })
    .state('tabs.getz', {
      url: "/getz",
      views: {
        'catalogotab-tab': {
          templateUrl: "templates/getz.html"
        }
      }
    })
    .state('tabs.grandi10', {
      url: "/grandi10",
      views: {
        'catalogotab-tab': {
          templateUrl: "templates/grandi10.html"
        }
      }
    })
    .state('tabs.h1diesel', {
      url: "/h1diesel",
      views: {
        'catalogotab-tab': {
          templateUrl: "templates/h1diesel.html"
        }
      }
    })
    .state('tabs.i25', {
      url: "/i25",
      views: {
        'catalogotab-tab': {
          templateUrl: "templates/i25.html"
        }
      }
    })
    .state('tabs.i35', {
      url: "/i35",
      views: {
        'catalogotab-tab': {
          templateUrl: "templates/i35.html"
        }
      }
    })
    .state('tabs.santafe2006', {
      url: "/santafe2006",
      views: {
        'catalogotab-tab': {
          templateUrl: "templates/santafe2006.html"
        }
      }
    })
    .state('tabs.tucson', {
      url: "/tucson",
      views: {
        'catalogotab-tab': {
          templateUrl: "templates/tucson.html"
        }
      }
    })
    .state('tabs.tucsonix35', {
      url: "/tucsonix35",
      views: {
        'catalogotab-tab': {
          templateUrl: "templates/tucsonix35.html"
        }
      }
    })
    .state('tabs.jeep', {
      url: "/jeep",
      views: {
        'catalogotab-tab': {
          templateUrl: "templates/jeep.html"
        }
      }
    })
    .state('tabs.cherokee', {
      url: "/cherokee",
      views: {
        'catalogotab-tab': {
          templateUrl: "templates/cherokee.html"
        }
      }
    })
    .state('tabs.wrangler', {
      url: "/wrangler",
      views: {
        'catalogotab-tab': {
          templateUrl: "templates/wrangler.html"
        }
      }
    })
    .state('tabs.kia', {
      url: "/kia",
      views: {
        'catalogotab-tab': {
          templateUrl: "templates/kia.html"
        }
      }
    })
    .state('tabs.cerato', {
      url: "/cerato",
      views: {
        'catalogotab-tab': {
          templateUrl: "templates/cerato.html"
        }
      }
    })
    .state('tabs.koup', {
      url: "/koup",
      views: {
        'catalogotab-tab': {
          templateUrl: "templates/koup.html"
        }
      }
    })
    .state('tabs.newsoul', {
      url: "/newsoul",
      views: {
        'catalogotab-tab': {
          templateUrl: "templates/newsoul.html"
        }
      }
    })
    .state('tabs.picanto', {
      url: "/picanto",
      views: {
        'catalogotab-tab': {
          templateUrl: "templates/picanto.html"
        }
      }
    })
    .state('tabs.riospice', {
      url: "/riospice",
      views: {
        'catalogotab-tab': {
          templateUrl: "templates/riospice.html"
        }
      }
    })
    .state('tabs.riostylus', {
      url: "/riostylus",
      views: {
        'catalogotab-tab': {
          templateUrl: "templates/riostylus.html"
        }
      }
    })
    .state('tabs.sorento', {
      url: "/sorento",
      views: {
        'catalogotab-tab': {
          templateUrl: "templates/sorento.html"
        }
      }
    })
    .state('tabs.sportagefq', {
      url: "/sportagefq",
      views: {
        'catalogotab-tab': {
          templateUrl: "templates/sportagefq.html"
        }
      }
    })
    .state('tabs.sportagerevolution', {
      url: "/sportagerevolution",
      views: {
        'catalogotab-tab': {
          templateUrl: "templates/sportagerevolution.html"
        }
      }
    })
    .state('tabs.mahindra', {
      url: "/mahindra",
      views: {
        'catalogotab-tab': {
          templateUrl: "templates/mahindra.html"
        }
      }
    })
    .state('tabs.pickup', {
      url: "/pickup",
      views: {
        'catalogotab-tab': {
          templateUrl: "templates/pickup.html"
        }
      }
    })
    .state('tabs.mazda', {
      url: "/mazda",
      views: {
        'catalogotab-tab': {
          templateUrl: "templates/mazda.html"
        }
      }
    })
    .state('tabs.allegro', {
      url: "/allegro",
      views: {
        'catalogotab-tab': {
          templateUrl: "templates/allegro.html"
        }
      }
    })
    .state('tabs.bt50', {
      url: "/bt50",
      views: {
        'catalogotab-tab': {
          templateUrl: "templates/bt50.html"
        }
      }
    })
    .state('tabs.cx5', {
      url: "/cx5",
      views: {
        'catalogotab-tab': {
          templateUrl: "templates/cx5.html"
        }
      }
    })
    .state('tabs.mazda2', {
      url: "/mazda2",
      views: {
        'catalogotab-tab': {
          templateUrl: "templates/mazda2.html"
        }
      }
    })
    .state('tabs.mazda3', {
      url: "/mazda3",
      views: {
        'catalogotab-tab': {
          templateUrl: "templates/mazda3.html"
        }
      }
    })
    .state('tabs.mazda6', {
      url: "/mazda6",
      views: {
        'catalogotab-tab': {
          templateUrl: "templates/mazda6.html"
        }
      }
    })
    .state('tabs.mitsubishi', {
      url: "/mitsubishi",
      views: {
        'catalogotab-tab': {
          templateUrl: "templates/mitsubishi.html"
        }
      }
    })
    .state('tabs.l200', {
      url: "/l200",
      views: {
        'catalogotab-tab': {
          templateUrl: "templates/l200.html"
        }
      }
    })
    .state('tabs.montero', {
      url: "/montero",
      views: {
        'catalogotab-tab': {
          templateUrl: "templates/montero.html"
        }
      }
    })
    .state('tabs.nissan', {
      url: "/nissan",
      views: {
        'catalogotab-tab': {
          templateUrl: "templates/nissan.html"
        }
      }
    })
    .state('tabs.frontier', {
      url: "/frontier",
      views: {
        'catalogotab-tab': {
          templateUrl: "templates/frontier.html"
        }
      }
    })
    .state('tabs.march', {
      url: "/march",
      views: {
        'catalogotab-tab': {
          templateUrl: "templates/march.html"
        }
      }
    })
    .state('tabs.navara', {
      url: "/navara",
      views: {
        'catalogotab-tab': {
          templateUrl: "templates/navara.html"
        }
      }
    })
    .state('tabs.newversa', {
      url: "/newversa",
      views: {
        'catalogotab-tab': {
          templateUrl: "templates/newversa.html"
        }
      }
    })
    .state('tabs.notesense', {
      url: "/notesense",
      views: {
        'catalogotab-tab': {
          templateUrl: "templates/notesense.html"
        }
      }
    })
    .state('tabs.sentra', {
      url: "/sentra",
      views: {
        'catalogotab-tab': {
          templateUrl: "templates/sentra.html"
        }
      }
    })
    .state('tabs.tiida', {
      url: "/tiida",
      views: {
        'catalogotab-tab': {
          templateUrl: "templates/tiida.html"
        }
      }
    })
    .state('tabs.peugeot', {
      url: "/peugeot",
      views: {
        'catalogotab-tab': {
          templateUrl: "templates/peugeot.html"
        }
      }
    })
    .state('tabs.206', {
      url: "/206",
      views: {
        'catalogotab-tab': {
          templateUrl: "templates/206.html"
        }
      }
    })
    .state('tabs.rambig', {
      url: "/rambig",
      views: {
        'catalogotab-tab': {
          templateUrl: "templates/rambig.html"
        }
      }
    })
    .state('tabs.1500', {
      url: "/1500",
      views: {
        'catalogotab-tab': {
          templateUrl: "templates/1500.html"
        }
      }
    })
    .state('tabs.2500', {
      url: "/2500",
      views: {
        'catalogotab-tab': {
          templateUrl: "templates/2500.html"
        }
      }
    })
    .state('tabs.renault', {
      url: "/renault",
      views: {
        'catalogotab-tab': {
          templateUrl: "templates/renault.html"
        }
      }
    })
    .state('tabs.clio', {
      url: "/clio",
      views: {
        'catalogotab-tab': {
          templateUrl: "templates/clio.html"
        }
      }
    })
    .state('tabs.duster', {
      url: "/duster",
      views: {
        'catalogotab-tab': {
          templateUrl: "templates/duster.html"
        }
      }
    })
    .state('tabs.logan', {
      url: "/logan",
      views: {
        'catalogotab-tab': {
          templateUrl: "templates/logan.html"
        }
      }
    })
    .state('tabs.koleos', {
      url: "/koleos",
      views: {
        'catalogotab-tab': {
          templateUrl: "templates/koleos.html"
        }
      }
    })
    .state('tabs.megane1', {
      url: "/megane1",
      views: {
        'catalogotab-tab': {
          templateUrl: "templates/megane1.html"
        }
      }
    })
    .state('tabs.megan2', {
      url: "/megan2",
      views: {
        'catalogotab-tab': {
          templateUrl: "templates/megan2.html"
        }
      }
    })
    .state('tabs.sandero', {
      url: "/sandero",
      views: {
        'catalogotab-tab': {
          templateUrl: "templates/sandero.html"
        }
      }
    })
    .state('tabs.scenic', {
      url: "/scenic",
      views: {
        'catalogotab-tab': {
          templateUrl: "templates/scenic.html"
        }
      }
    })
    .state('tabs.symbol', {
      url: "/symbol",
      views: {
        'catalogotab-tab': {
          templateUrl: "templates/symbol.html"
        }
      }
    })
    .state('tabs.twingo', {
      url: "/twingo",
      views: {
        'catalogotab-tab': {
          templateUrl: "templates/twingo.html"
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