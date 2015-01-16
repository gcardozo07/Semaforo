(function (){
  angular.module('app.controllers', [])
  
  .controller('marcasController', ['$scope', function($scope) {

 $scope.marcas =[

        {
          "nombre": "Chevrolet",
          "image": "img/chevrolet.jpg",
          "modelo": [
            {"nombre":"Aveo", "tab":"aveo", "repuestos":
              [
                {"nombre":"Farolas", "image":"img/chevrolet/aveo/aveo1.jpg", "cantidad":"2", "articulos":[
                  {"nombre":"Farola Marca 01","material":"Metal-Plastico","imagenes":[
                  {"image":"img/chevrolet/aveo/aveo1.jpg"},
                  {"image":"img/chevrolet/aveo/aveo2.jpg"},
                  ]}
                ]},
                {"nombre":"Camaras", "cantidad":"1", "articulos":[
                  {"imagenes":[
                    {"image":"img/chevrolet/aveo/aveo3.jpg"}
                    ]}
                ]},
                {"nombre":"Alerones", "cantidad":"3", "articulos":[
                  {"imagenes":[
                    {"image":"img/chevrolet/aveo/aveo4.jpg"},
                    {"image":"img/chevrolet/aveo/aveo5.jpg"},
                    {"image":"img/chevrolet/aveo/aveo6.jpg"}
                    ]}
                ]},
                {"nombre":"Persianas", "cantidad":"1", "articulos":[
                  {"imagenes":[
                    {"image":"img/chevrolet/aveo/aveo7.jpg"}
                    ]}
                ]}
              ]
            },
            {"nombre":"Captiva", "tab":"captiva", "repuestos":
              [
                {"nombre":"one", "cantidad":"1", "articulos":[
                  {"imagenes":[
                    {"image":"img/semaforo-icon.png"}
                    ]}
                ]},
                {"nombre":"two", "cantidad":"1", "articulos":[
                  {"imagenes":[
                    {"image":"img/semaforo-icon.png"}
                    ]}
                ]}
              ]
            },
            {"nombre":"Cheyenne", "tab":"cheyenne", "repuestos":
              [
                {"nombre":"one", "cantidad":"1", "articulos":[
                  {"imagenes":[
                    {"image":"img/semaforo-icon.png"}
                    ]}
                ]},
                {"nombre":"two", "cantidad":"1", "articulos":[
                  {"imagenes":[
                    {"image":"img/semaforo-icon.png"}
                    ]}
                ]}
              ]
            },
            {"nombre":"Cobalt", "tab":"cobalt", "repuestos":
              [
                {"nombre":"one", "cantidad":"1", "articulos":[
                  {"imagenes":[
                    {"image":"img/semaforo-icon.png"}
                    ]}
                ]},
                {"nombre":"two", "cantidad":"1", "articulos":[
                  {"imagenes":[
                    {"image":"img/semaforo-icon.png"}
                    ]}
                ]}
              ]
            },
            {"nombre":"Corsa", "tab":"corsa", "repuestos":
              [
                {"nombre":"Farolas", "cantidad":"1", "articulos":[
                  {"imagenes":[
                    {"image":"img/chevrolet/corsa/corsa1.jpg"}
                    ]}
                ]},
                {"nombre":"Stops", "cantidad":"1", "articulos":[
                  {"imagenes":[
                    {"image":"img/chevrolet/corsa/corsa2.jpg"}
                    ]}
                ]}
              ]
            },
            {"nombre":"Corsa Evolution", "tab":"corsaevol", "repuestos":
              [
                {"nombre":"Farolas", "cantidad":"1", "articulos":[
                  {"imagenes":[
                    {"image":"img/chevrolet/corsaevol/corsaevol1.jpg"}
                    ]}
                ]},
                {"nombre":"Alerones", "cantidad":"1", "articulos":[
                  {"imagenes":[
                    {"image":"img/chevrolet/corsaevol/corsaevol2.jpg"}
                    ]}
                ]}
              ]
            },
            {"nombre":"Cruze", "tab":"cruze", "repuestos":
              [
                {"nombre":"one", "cantidad":"1", "articulos":[
                  {"imagenes":[
                    {"image":"img/semaforo-icon.png"}
                    ]}
                ]},
                {"nombre":"two", "cantidad":"1", "articulos":[
                  {"imagenes":[
                    {"image":"img/semaforo-icon.png"}
                    ]}
                ]}
              ]
            },
            {"nombre":"Dmax 2014", "tab":"dmax", "repuestos":
              [
                {"nombre":"Ganchos", "cantidad":"1", "articulos":[
                  {"imagenes":[
                    {"image":"img/chevrolet/dmax/dmax1.jpg"}
                    ]}
                ]},
                {"nombre":"two", "cantidad":"1", "articulos":[
                  {"imagenes":[
                    {"image":"img/semaforo-icon.png"}
                    ]}
                ]}
              ]
            },
            {"nombre":"Luv", "tab":"luv", "repuestos":
              [
                {"nombre":"Stops", "cantidad":"1", "articulos":[
                  {"imagenes":[
                    {"image":"img/chevrolet/luv/luv1.jpg"}
                    ]}
                ]},
                {"nombre":"two", "cantidad":"1", "articulos":[
                  {"imagenes":[
                    {"image":"img/semaforo-icon.png"}
                    ]}
                ]}
              ]
            },
            {"nombre":"Luv Dmax 2005-2008", "tab":"luv-dmax", "repuestos":
              [
                {"nombre":"Persianas", "cantidad":"1", "articulos":[
                  {"imagenes":[
                    {"image":"img/chevrolet/luv-dmax/luv-dmax1.jpg"}
                    ]}
                ]},
                {"nombre":"Ganchos", "cantidad":"1", "articulos":[
                  {"imagenes":[
                    {"image":"img/chevrolet/luv-dmax/luv-dmax2.jpg"}
                    ]}
                ]},
                {"nombre":"Tubos", "cantidad":"1", "articulos":[
                  {"imagenes":[
                    {"image":"img/chevrolet/luv-dmax/luv-dmax3.jpg"}
                    ]}
                ]}
              ]
            },
            {"nombre":"Optra", "tab":"optra", "repuestos":
              [
                {"nombre":"Camaras", "cantidad":"1", "articulos":[
                  {"imagenes":[
                    {"image":"img/chevrolet/optra/optra1.jpg"}
                    ]}
                ]},
                {"nombre":"Alerones", "cantidad":"1", "articulos":[
                  {"imagenes":[
                    {"image":"img/chevrolet/optra/optra2.jpg"}
                    ]}
                ]}                
              ]
            },
            {"nombre":"Orlando", "tab":"orlando", "repuestos":
              [
                {"nombre":"one", "cantidad":"1", "articulos":[
                  {"imagenes":[
                    {"image":"img/semaforo-icon.png"}
                    ]}
                ]},
                {"nombre":"two", "cantidad":"1", "articulos":[
                  {"imagenes":[
                    {"image":"img/semaforo-icon.png"}
                    ]}
                ]}
              ]
            },
            {"nombre":"Sail", "tab":"sail", "repuestos":
              [
                {"nombre":"Alerones", "cantidad":"1", "articulos":[
                  {"imagenes":[
                    {"image":"img/chevrolet/sail/sail1.jpg"}
                    ]}
                ]},
                {"nombre":"Spoilers", "cantidad":"1", "articulos":[
                  {"imagenes":[
                    {"image":"img/chevrolet/sail/sail2.jpg"}
                    ]}
                ]}
              ]
            },
            {"nombre":"Silverado", "tab":"silverado", "repuestos":
              [
                {"nombre":"one", "cantidad":"1", "articulos":[
                  {"imagenes":[
                    {"image":"img/semaforo-icon.png"}
                    ]}
                ]},
                {"nombre":"two", "cantidad":"1", "articulos":[
                  {"imagenes":[
                    {"image":"img/semaforo-icon.png"}
                    ]}
                ]}
              ]
            },
            {"nombre":"Sonic", "tab":"sonic", "repuestos":
              [
                {"nombre":"one", "cantidad":"1", "articulos":[
                  {"imagenes":[
                    {"image":"img/semaforo-icon.png"}
                    ]}
                ]},
                {"nombre":"two", "cantidad":"1", "articulos":[
                  {"imagenes":[
                    {"image":"img/semaforo-icon.png"}
                    ]}
                ]}
              ]
            },
            {"nombre":"Spark", "tab":"spark", "repuestos":
              [
                {"nombre":"Camaras", "cantidad":"1", "articulos":[
                  {"imagenes":[
                    {"image":"img/chevrolet/spark/spark1.jpg"}
                    ]}
                ]},
                {"nombre":"Estribos", "cantidad":"1", "articulos":[
                  {"imagenes":[
                    {"image":"img/chevrolet/spark/spark2.jpg"}
                    ]}
                ]}
              ]
            },
            {"nombre":"Sprint", "tab":"sprint", "repuestos":
              [
                {"nombre":"Stops", "cantidad":"1", "articulos":[
                  {"imagenes":[
                    {"image":"img/chevrolet/sprint/sprint1.jpg"}
                    ]}
                ]},
                {"nombre":"two", "cantidad":"1", "articulos":[
                  {"imagenes":[
                    {"image":"img/semaforo-icon.png"}
                    ]}
                ]}
              ]
            },
            {"nombre":"Swift", "tab":"swift", "repuestos":
              [
                {"nombre":"Stops", "cantidad":"1", "articulos":[
                  {"imagenes":[
                    {"image":"img/chevrolet/swift/swift1.jpg"}
                    ]}
                ]},
                {"nombre":"two", "cantidad":"1", "articulos":[
                  {"imagenes":[
                    {"image":"img/semaforo-icon.png"}
                    ]}
                ]}
              ]
            },
            {"nombre":"Tracker", "tab":"tracker", "repuestos":
              [
                {"nombre":"one", "cantidad":"1", "articulos":[
                  {"imagenes":[
                    {"image":"img/semaforo-icon.png"}
                    ]}
                ]},
                {"nombre":"two", "cantidad":"1", "articulos":[
                  {"imagenes":[
                    {"image":"img/semaforo-icon.png"}
                    ]}
                ]}
              ]
            },
            {"nombre":"Vitara", "tab":"vitara", "repuestos":
              [
                {"nombre":"Stops", "cantidad":"1", "articulos":[
                  {"imagenes":[
                    {"image":"img/chevrolet/vitara/vitara1.jpg"}
                    ]}
                ]},
                {"nombre":"two", "cantidad":"1", "articulos":[
                  {"imagenes":[
                    {"image":"img/semaforo-icon.png"}
                    ]}
                ]}
              ]
            }
            ],
          "tab": "chevrolet"
        },
        {
          "nombre": "Daihatsu",
          "image": "img/daihatsu.jpg",
          "modelo": [
            {"nombre":"Terios", "tab":"terios", "repuestos":
              [
                {"nombre":"Tapas", "cantidad":"1", "articulos":[
                  {"imagenes":[
                  {"image":"img/daihatsu/terios/terios1.jpg"},
                  ]}
                ]},
                {"nombre":"Tapas2", "cantidad":"1", "articulos":[
                  {"imagenes":[
                    {"image":"img/daihatsu/terios/terios2.jpg"}
                    ]}
                ]}
              ]
            }
            ],
          "tab": "daihatsu"
        },
        {
          "nombre": "Dodge",
          "image": "img/dodge.jpg",
          "modelo": [
            {"nombre":"Journey", "tab":"journey", "repuestos":
              [
                {"nombre":"One", "cantidad":"1", "articulos":[
                  {"imagenes":[
                  {"image":"img/semaforo-icon.png"},
                  ]}
                ]},
                {"nombre":"Two", "cantidad":"1", "articulos":[
                  {"imagenes":[
                    {"image":"img/semaforo-icon.png"}
                    ]}
                ]}
              ]
            },
            {"nombre":"Ram", "tab":"ram", "repuestos":
              [
                {"nombre":"Farolas", "cantidad":"1", "articulos":[
                  {"imagenes":[
                  {"image":"img/dodge/ram/ram1.jpg"},
                  ]}
                ]},
                {"nombre":"Stops", "cantidad":"1", "articulos":[
                  {"imagenes":[
                    {"image":"img/dodge/ram/ram2.jpg"}
                    ]}
                ]}
              ]
            }
            ],
          "tab": "dodge"
        },
        {
          "nombre": "Fiat",
          "image": "img/fiat.jpg",
          "modelo": [
            {"nombre":"Strada", "tab":"strada", "repuestos":
              [
                {"nombre":"One", "cantidad":"1", "articulos":[
                  {"imagenes":[
                  {"image":"img/semaforo-icon.png"},
                  ]}
                ]},
                {"nombre":"Two", "cantidad":"1", "articulos":[
                  {"imagenes":[
                    {"image":"img/semaforo-icon.png"}
                    ]}
                ]}
              ]
            }
            ],
          "tab": "fiat"
        },
        {
          "nombre": "Ford",
          "image": "img/ford.jpg",
          "modelo": [
            {"nombre":"Ecosport 2014", "tab":"ecosport", "repuestos":
              [
                {"nombre":"Tapas", "cantidad":"1", "articulos":[
                  {"imagenes":[
                  {"image":"img/ford/ecosport/ecosport1.jpg"},
                  ]}
                ]},
                {"nombre":"Two", "cantidad":"1", "articulos":[
                  {"imagenes":[
                    {"image":"img/semaforo-icon.png"}
                    ]}
                ]}
              ]
            },
            {"nombre":"Edge 2014", "tab":"edge", "repuestos":
              [
                {"nombre":"One", "cantidad":"1", "articulos":[
                  {"imagenes":[
                    {"image":"img/semaforo-icon.png"}
                    ]}
                ]},
                {"nombre":"Two", "cantidad":"1", "articulos":[
                  {"imagenes":[
                    {"image":"img/semaforo-icon.png"}
                    ]}
                ]}
              ]
            },
            {"nombre":"Escape 2014", "tab":"escape", "repuestos":
              [
                {"nombre":"One", "cantidad":"1", "articulos":[
                  {"imagenes":[
                    {"image":"img/semaforo-icon.png"}
                    ]}
                ]},
                {"nombre":"Two", "cantidad":"1", "articulos":[
                  {"imagenes":[
                    {"image":"img/semaforo-icon.png"}
                    ]}
                ]}
              ]
            },
            {"nombre":"Explorer", "tab":"explorer", "repuestos":
              [
                {"nombre":"Farolas", "cantidad":"1", "articulos":[
                  {"imagenes":[
                    {"image":"img/ford/explorer/explorer1.jpg"}
                    ]}
                ]},
                {"nombre":"Stops", "cantidad":"3", "articulos":[
                  {"imagenes":[
                    {"image":"img/ford/explorer/explorer2.jpg"},
                    {"image":"img/ford/explorer/explorer3.jpg"},
                    {"image":"img/ford/explorer/explorer4.jpg"}
                    ]}
                ]}
              ]
            },
            {"nombre":"F-150", "tab":"f150", "repuestos":
              [
                {"nombre":"Farolas", "cantidad":"1", "articulos":[
                  {"imagenes":[
                    {"image":"img/ford/f150/f1501.jpg"}
                    ]}
                ]},
                {"nombre":"Stops", "cantidad":"2", "articulos":[
                  {"imagenes":[
                    {"image":"img/ford/f150/f1502.jpg"},
                    {"image":"img/ford/f150/f1503.jpg"}
                    ]}
                ]}
              ]
            },
            {"nombre":"F-150 Lobo", "tab":"lobo", "repuestos":
              [
                {"nombre":"Farolas", "cantidad":"3", "articulos":[
                  {"imagenes":[
                    {"image":"img/ford/lobo/lobo1.jpg"},
                    {"image":"img/ford/lobo/lobo2.jpg"},
                    {"image":"img/ford/lobo/lobo3.jpg"}
                    ]}
                ]},
                {"nombre":"Two", "cantidad":"1", "articulos":[
                  {"imagenes":[
                    {"image":"img/semaforo-icon.png"}
                    ]}
                ]}
              ]
            },
            {"nombre":"Nueva Ranger 2014", "tab":"ranger2014", "repuestos":
              [
                {"nombre":"One", "cantidad":"1", "articulos":[
                  {"imagenes":[
                    {"image":"img/semaforo-icon.png"}
                    ]}
                ]},
                {"nombre":"Two", "cantidad":"1", "articulos":[
                  {"imagenes":[
                    {"image":"img/semaforo-icon.png"}
                    ]}
                ]}
              ]
            },
            {"nombre":"Nuevo Fiesta 2014", "tab":"fiesta2014", "repuestos":
              [
                {"nombre":"One", "cantidad":"1", "articulos":[
                  {"imagenes":[
                    {"image":"img/semaforo-icon.png"}
                    ]}
                ]},
                {"nombre":"Two", "cantidad":"1", "articulos":[
                  {"imagenes":[
                    {"image":"img/semaforo-icon.png"}
                    ]}
                ]}
              ]
            },
            {"nombre":"Ranger 2006-2012", "tab":"ranger2006", "repuestos":
              [
                {"nombre":"One", "cantidad":"1", "articulos":[
                  {"imagenes":[
                    {"image":"img/semaforo-icon.png"}
                    ]}
                ]},
                {"nombre":"Two", "cantidad":"1", "articulos":[
                  {"imagenes":[
                    {"image":"img/semaforo-icon.png"}
                    ]}
                ]}
              ]
            }
            ],
          "tab": "ford"
        },
        {
          "nombre": "Foton",
          "image": "img/foton.jpg",
          "modelo": [
            {"nombre":"Tunland", "tab":"tunland", "repuestos":
              [
                {"nombre":"One", "cantidad":"1", "articulos":[
                  {"imagenes":[
                    {"image":"img/semaforo-icon.png"}
                    ]}
                ]},
                {"nombre":"Two", "cantidad":"1", "articulos":[
                  {"imagenes":[
                    {"image":"img/semaforo-icon.png"}
                    ]}
                ]}
              ]
            }
            ],
          "tab": "foton"
        },
        {
          "nombre": "Honda",
          "image": "img/honda.jpg",
          "modelo": [
            {"nombre":"City", "tab":"city", "repuestos":
              [
                {"nombre":"One", "cantidad":"1", "articulos":[
                  {"imagenes":[
                    {"image":"img/semaforo-icon.png"}
                    ]}
                ]},
                {"nombre":"Two", "cantidad":"1", "articulos":[
                  {"imagenes":[
                    {"image":"img/semaforo-icon.png"}
                    ]}
                ]}
              ]
            },
            {"nombre":"Civic 98", "tab":"civic", "repuestos":
              [
                {"nombre":"Farolas", "cantidad":"1", "articulos":[
                  {"imagenes":[
                    {"image":"img/honda/civic/civic1.jpg"}
                    ]}
                ]},
                {"nombre":"Two", "cantidad":"1", "articulos":[
                  {"imagenes":[
                    {"image":"img/semaforo-icon.png"}
                    ]}
                ]}
              ]
            },
            {"nombre":"CRV 2014 On", "tab":"crv2014", "repuestos":
              [
                {"nombre":"Bompers", "cantidad":"1", "articulos":[
                  {"imagenes":[
                    {"image":"img/honda/crv/crv1.jpg"}
                    ]}
                ]},
                {"nombre":"Two", "cantidad":"1", "articulos":[
                  {"imagenes":[
                    {"image":"img/semaforo-icon.png"}
                    ]}
                ]}
              ]
            },
            {"nombre":"Integra", "tab":"integra", "repuestos":
              [
                {"nombre":"Farolas", "cantidad":"1", "articulos":[
                  {"imagenes":[
                    {"image":"img/honda/integra/integra1.jpg"}
                    ]}
                ]},
                {"nombre":"Two", "cantidad":"1", "articulos":[
                  {"imagenes":[
                    {"image":"img/semaforo-icon.png"}
                    ]}
                ]}
              ]
            }
            ],
          "tab": "honda"
        },
        {
          "nombre": "Hyundai",
          "image": "img/hyundai.jpg",
          "modelo": [
            {"nombre":"Accent Next", "tab":"accentnext", "repuestos":
              [
                {"nombre":"One", "cantidad":"1", "articulos":[
                  {"imagenes":[
                    {"image":"img/semaforo-icon.png"}
                    ]}
                ]},
                {"nombre":"Two", "cantidad":"1", "articulos":[
                  {"imagenes":[
                    {"image":"img/semaforo-icon.png"}
                    ]}
                ]}
              ]
            },
            {"nombre":"Accent Vision", "tab":"accentvision", "repuestos":
              [
                {"nombre":"One", "cantidad":"1", "articulos":[
                  {"imagenes":[
                    {"image":"img/semaforo-icon.png"}
                    ]}
                ]},
                {"nombre":"Two", "cantidad":"1", "articulos":[
                  {"imagenes":[
                    {"image":"img/semaforo-icon.png"}
                    ]}
                ]}
              ]
            },
            {"nombre":"Atos", "tab":"atos", "repuestos":
              [
                {"nombre":"Alerones", "cantidad":"1", "articulos":[
                  {"imagenes":[
                    {"image":"img/hyundai/atos/atos1.jpg"}
                    ]}
                ]},
                {"nombre":"Two", "cantidad":"1", "articulos":[
                  {"imagenes":[
                    {"image":"img/semaforo-icon.png"}
                    ]}
                ]}
              ]
            },
            {"nombre":"Genesis", "tab":"genesis", "repuestos":
              [
                {"nombre":"Farolas", "cantidad":"1", "articulos":[
                  {"imagenes":[
                    {"image":"img/hyundai/genesis/genesis1.jpg"}
                    ]}
                ]},
                {"nombre":"Two", "cantidad":"1", "articulos":[
                  {"imagenes":[
                    {"image":"img/semaforo-icon.png"}
                    ]}
                ]}
              ]
            },
            {"nombre":"Getz", "tab":"getz", "repuestos":
              [
                {"nombre":"Alerones", "cantidad":"1", "articulos":[
                  {"imagenes":[
                    {"image":"img/hyundai/getz/getz1.jpg"}
                    ]}
                ]},
                {"nombre":"Two", "cantidad":"1", "articulos":[
                  {"imagenes":[
                    {"image":"img/semaforo-icon.png"}
                    ]}
                ]}
              ]
            },
            {"nombre":"Grand i10", "tab":"grandi10", "repuestos":
              [
                {"nombre":"One", "cantidad":"1", "articulos":[
                  {"imagenes":[
                    {"image":"img/semaforo-icon.png"}
                    ]}
                ]},
                {"nombre":"Two", "cantidad":"1", "articulos":[
                  {"imagenes":[
                    {"image":"img/semaforo-icon.png"}
                    ]}
                ]}
              ]
            },
            {"nombre":"H1 Diesel", "tab":"h1diesel", "repuestos":
              [
                {"nombre":"One", "cantidad":"1", "articulos":[
                  {"imagenes":[
                    {"image":"img/semaforo-icon.png"}
                    ]}
                ]},
                {"nombre":"Two", "cantidad":"1", "articulos":[
                  {"imagenes":[
                    {"image":"img/semaforo-icon.png"}
                    ]}
                ]}
              ]
            },
            {"nombre":"i25", "tab":"i25", "repuestos":
              [
                {"nombre":"Alerones", "cantidad":"1", "articulos":[
                  {"imagenes":[
                    {"image":"img/hyundai/i25/i251.jpg"}
                    ]}
                ]},
                {"nombre":"Two", "cantidad":"1", "articulos":[
                  {"imagenes":[
                    {"image":"img/semaforo-icon.png"}
                    ]}
                ]}
              ]
            },
            {"nombre":"i35", "tab":"i35", "repuestos":
              [
                {"nombre":"Alerones", "cantidad":"1", "articulos":[
                  {"imagenes":[
                    {"image":"img/hyundai/i35/i351.jpg"}
                    ]}
                ]},
                {"nombre":"Two", "cantidad":"1", "articulos":[
                  {"imagenes":[
                    {"image":"img/semaforo-icon.png"}
                    ]}
                ]}
              ]
            },
            {"nombre":"Santafe 2014", "tab":"santafe2014", "repuestos":
              [
                {"nombre":"One", "cantidad":"1", "articulos":[
                  {"imagenes":[
                    {"image":"img/semaforo-icon.png"}
                    ]}
                ]},
                {"nombre":"Two", "cantidad":"1", "articulos":[
                  {"imagenes":[
                    {"image":"img/semaforo-icon.png"}
                    ]}
                ]}
              ]
            },
            {"nombre":"Santafe 2006-2012", "tab":"santafe2006", "repuestos":
              [
                {"nombre":"One", "cantidad":"1", "articulos":[
                  {"imagenes":[
                    {"image":"img/semaforo-icon.png"}
                    ]}
                ]},
                {"nombre":"Two", "cantidad":"1", "articulos":[
                  {"imagenes":[
                    {"image":"img/semaforo-icon.png"}
                    ]}
                ]}
              ]
            },
            {"nombre":"Tucson", "tab":"tucson", "repuestos":
              [
                {"nombre":"One", "cantidad":"1", "articulos":[
                  {"imagenes":[
                    {"image":"img/semaforo-icon.png"}
                    ]}
                ]},
                {"nombre":"Two", "cantidad":"1", "articulos":[
                  {"imagenes":[
                    {"image":"img/semaforo-icon.png"}
                    ]}
                ]}
              ]
            },
            {"nombre":"Tucson IX-35", "tab":"tucsonix35", "repuestos":
              [
                {"nombre":"Farolas", "cantidad":"1", "articulos":[
                  {"imagenes":[
                    {"image":"img/hyundai/tucsonix35/tucsonix351.jpg"}
                    ]}
                ]},
                {"nombre":"Estribos", "cantidad":"1", "articulos":[
                  {"imagenes":[
                    {"image":"img/hyundai/tucsonix35/tucsonix352.jpg"}
                    ]}
                ]}
              ]
            }
            ],
          "tab": "hyundai"
        },
        {
          "nombre": "Jeep",
          "image": "img/jeep.jpg",
          "modelo": [
            {"nombre":"Cherokee", "tab":"cherokee", "repuestos":
              [
                {"nombre":"Stops", "cantidad":"1", "articulos":[
                  {"imagenes":[
                    {"image":"img/jeep/cherokee/cherokee1.jpg"}
                    ]}
                ]},
                {"nombre":"Two", "cantidad":"1", "articulos":[
                  {"imagenes":[
                    {"image":"img/semaforo-icon.png"}
                    ]}
                ]}
              ]
            },
            {"nombre":"Wrangler", "tab":"wrangler", "repuestos":
              [
                {"nombre":"Stops", "cantidad":"1", "articulos":[
                  {"imagenes":[
                    {"image":"img/semaforo-icon.png"}
                    ]}
                ]},
                {"nombre":"Two", "cantidad":"1", "articulos":[
                  {"imagenes":[
                    {"image":"img/semaforo-icon.png"}
                    ]}
                ]}
              ]
            }
            ],
          "tab": "jeep"
        },
        {
          "nombre": "Kia",
          "image": "img/kia.jpg",
          "modelo": [
            {"nombre":"Cerato", "tab":"cerato", "repuestos":
              [
                {"nombre":"One", "cantidad":"1", "articulos":[
                  {"imagenes":[
                    {"image":"img/semaforo-icon.png"}
                    ]}
                ]},
                {"nombre":"Two", "cantidad":"1", "articulos":[
                  {"imagenes":[
                    {"image":"img/semaforo-icon.png"}
                    ]}
                ]}
              ]
            },
            {"nombre":"Koup", "tab":"koup", "repuestos":
              [
                {"nombre":"One", "cantidad":"1", "articulos":[
                  {"imagenes":[
                    {"image":"img/semaforo-icon.png"}
                    ]}
                ]},
                {"nombre":"Two", "cantidad":"1", "articulos":[
                  {"imagenes":[
                    {"image":"img/semaforo-icon.png"}
                    ]}
                ]}
              ]
            },
            {"nombre":"New Soul", "tab":"newsoul", "repuestos":
              [
                {"nombre":"One", "cantidad":"1", "articulos":[
                  {"imagenes":[
                    {"image":"img/semaforo-icon.png"}
                    ]}
                ]},
                {"nombre":"Two", "cantidad":"1", "articulos":[
                  {"imagenes":[
                    {"image":"img/semaforo-icon.png"}
                    ]}
                ]}
              ]
            },
            {"nombre":"Picanto", "tab":"picanto", "repuestos":
              [
                {"nombre":"One", "cantidad":"1", "articulos":[
                  {"imagenes":[
                    {"image":"img/semaforo-icon.png"}
                    ]}
                ]},
                {"nombre":"Two", "cantidad":"1", "articulos":[
                  {"imagenes":[
                    {"image":"img/semaforo-icon.png"}
                    ]}
                ]}
              ]
            },
            {"nombre":"Rio Spice", "tab":"riospice", "repuestos":
              [
                {"nombre":"One", "cantidad":"1", "articulos":[
                  {"imagenes":[
                    {"image":"img/semaforo-icon.png"}
                    ]}
                ]},
                {"nombre":"Two", "cantidad":"1", "articulos":[
                  {"imagenes":[
                    {"image":"img/semaforo-icon.png"}
                    ]}
                ]}
              ]
            },
            {"nombre":"Rio Stylus", "tab":"riostylus", "repuestos":
              [
                {"nombre":"One", "cantidad":"1", "articulos":[
                  {"imagenes":[
                    {"image":"img/semaforo-icon.png"}
                    ]}
                ]},
                {"nombre":"Two", "cantidad":"1", "articulos":[
                  {"imagenes":[
                    {"image":"img/semaforo-icon.png"}
                    ]}
                ]}
              ]
            },
            {"nombre":"Sorento", "tab":"sorento", "repuestos":
              [
                {"nombre":"One", "cantidad":"1", "articulos":[
                  {"imagenes":[
                    {"image":"img/semaforo-icon.png"}
                    ]}
                ]},
                {"nombre":"Two", "cantidad":"1", "articulos":[
                  {"imagenes":[
                    {"image":"img/semaforo-icon.png"}
                    ]}
                ]}
              ]
            },
            {"nombre":"Sportage FQ", "tab":"sportagefq", "repuestos":
              [
                {"nombre":"One", "cantidad":"1", "articulos":[
                  {"imagenes":[
                    {"image":"img/semaforo-icon.png"}
                    ]}
                ]},
                {"nombre":"Two", "cantidad":"1", "articulos":[
                  {"imagenes":[
                    {"image":"img/semaforo-icon.png"}
                    ]}
                ]}
              ]
            },
            {"nombre":"Sportage Revolution", "tab":"sportagerevolution", "repuestos":
              [
                {"nombre":"Farolas", "cantidad":"1", "articulos":[
                  {"imagenes":[
                    {"image":"img/kia/sportagerevolution/sportagerevolution1.jpg"}
                    ]}
                ]},
                {"nombre":"Persianas", "cantidad":"1", "articulos":[
                  {"imagenes":[
                    {"image":"img/kia/sportagerevolution/sportagerevolution2.jpg"}
                    ]}
                ]},
                {"nombre":"Otros", "cantidad":"1", "articulos":[
                  {"imagenes":[
                    {"image":"img/kia/sportagerevolution/sportagerevolution3.jpg"}
                    ]}
                ]}
              ]
            }
            ],
          "tab": "kia"
        },
        {
          "nombre": "Mahindra",
          "image": "img/mahindra.jpg",
          "modelo": [
            {"nombre":"Pick Up", "tab":"pickup", "repuestos":
              [
                {"nombre":"One", "cantidad":"1", "articulos":[
                  {"imagenes":[
                    {"image":"img/semaforo-icon.png"}
                    ]}
                ]},
                {"nombre":"Two", "cantidad":"1", "articulos":[
                  {"imagenes":[
                    {"image":"img/semaforo-icon.png"}
                    ]}
                ]}
              ]
            }
            ],
          "tab": "mahindra"
        },
        {
          "nombre": "Mazda",
          "image": "img/mazda.jpg",
          "modelo": [
            {"nombre":"Allegro", "tab":"allegro", "repuestos":
              [
                {"nombre":"One", "cantidad":"1", "articulos":[
                  {"imagenes":[
                    {"image":"img/semaforo-icon.png"}
                    ]}
                ]},
                {"nombre":"Two", "cantidad":"1", "articulos":[
                  {"imagenes":[
                    {"image":"img/semaforo-icon.png"}
                    ]}
                ]}
              ]
            },
            {"nombre":"BT-50 2006-2014", "tab":"bt50", "repuestos":
              [
                {"nombre":"One", "cantidad":"1", "articulos":[
                  {"imagenes":[
                    {"image":"img/semaforo-icon.png"}
                    ]}
                ]},
                {"nombre":"Two", "cantidad":"1", "articulos":[
                  {"imagenes":[
                    {"image":"img/semaforo-icon.png"}
                    ]}
                ]}
              ]
            },
            {"nombre":"CX-5", "tab":"cx5", "repuestos":
              [
                {"nombre":"One", "cantidad":"1", "articulos":[
                  {"imagenes":[
                    {"image":"img/semaforo-icon.png"}
                    ]}
                ]},
                {"nombre":"Two", "cantidad":"1", "articulos":[
                  {"imagenes":[
                    {"image":"img/semaforo-icon.png"}
                    ]}
                ]}
              ]
            },
            {"nombre":"Mazda 2", "tab":"mazda2", "repuestos":
              [
                {"nombre":"One", "cantidad":"1", "articulos":[
                  {"imagenes":[
                    {"image":"img/semaforo-icon.png"}
                    ]}
                ]},
                {"nombre":"Two", "cantidad":"1", "articulos":[
                  {"imagenes":[
                    {"image":"img/semaforo-icon.png"}
                    ]}
                ]}
              ]
            },
            {"nombre":"Mazda 3", "tab":"mazda3", "repuestos":
              [
                {"nombre":"Alerones", "cantidad":"1", "articulos":[
                  {"imagenes":[
                    {"image":"img/mazda/mazda3/mazda31.jpg"}
                    ]}
                ]},
                {"nombre":"Two", "cantidad":"1", "articulos":[
                  {"imagenes":[
                    {"image":"img/semaforo-icon.png"}
                    ]}
                ]}
              ]
            },
            {"nombre":"Mazda 6", "tab":"mazda6", "repuestos":
              [
                {"nombre":"Farolas", "cantidad":"1", "articulos":[
                  {"imagenes":[
                    {"image":"img/mazda/mazda6/mazda61.jpg"}
                    ]}
                ]},
                {"nombre":"Alerones", "cantidad":"1", "articulos":[
                  {"imagenes":[
                    {"image":"img/mazda/mazda6/mazda62.jpg"}
                    ]}
                ]}
              ]
            }
            ],
          "tab": "mazda"
        },
        {
          "nombre": "Mitsubishi",
          "image": "img/mitsubishi.jpg",
          "modelo": [
            {"nombre":"L200", "tab":"l200", "repuestos":
              [
                {"nombre":"Farolas", "cantidad":"1", "articulos":[
                  {"imagenes":[
                    {"image":"img/mitsubishi/l200/l2001.jpg"}
                    ]}
                ]},
                {"nombre":"Two", "cantidad":"1", "articulos":[
                  {"imagenes":[
                    {"image":"img/semaforo-icon.png"}
                    ]}
                ]}
              ]
            },
            {"nombre":"Montero", "tab":"montero", "repuestos":
              [
                {"nombre":"Tapas", "cantidad":"1", "articulos":[
                  {"imagenes":[
                    {"image":"img/mitsubishi/montero/montero1.jpg"}
                    ]}
                ]},
                {"nombre":"Two", "cantidad":"1", "articulos":[
                  {"imagenes":[
                    {"image":"img/semaforo-icon.png"}
                    ]}
                ]}
              ]
            }
            ],
          "tab": "mitsubishi"
        },
        {
          "nombre": "Nissan",
          "image": "img/nissan.jpg",
          "modelo": [
            {"nombre":"Frontier", "tab":"frontier", "repuestos":
              [
                {"nombre":"Farolas", "cantidad":"1", "articulos":[
                  {"imagenes":[
                    {"image":"img/nissan/frontier/frontier1.jpg"}
                    ]}
                ]},
                {"nombre":"Stops", "cantidad":"1", "articulos":[
                  {"imagenes":[
                    {"image":"img/nissan/frontier/frontier2.jpg"}
                    ]}
                ]}
              ]
            },
            {"nombre":"March", "tab":"march", "repuestos":
              [
                {"nombre":"One", "cantidad":"1", "articulos":[
                  {"imagenes":[
                    {"image":"img/semaforo-icon.png"}
                    ]}
                ]},
                {"nombre":"Two", "cantidad":"1", "articulos":[
                  {"imagenes":[
                    {"image":"img/semaforo-icon.png"}
                    ]}
                ]}
              ]
            },
            {"nombre":"Navara", "tab":"navara", "repuestos":
              [
                {"nombre":"One", "cantidad":"1", "articulos":[
                  {"imagenes":[
                    {"image":"img/semaforo-icon.png"}
                    ]}
                ]},
                {"nombre":"Two", "cantidad":"1", "articulos":[
                  {"imagenes":[
                    {"image":"img/semaforo-icon.png"}
                    ]}
                ]}
              ]
            },
            {"nombre":"New Versa", "tab":"newversa", "repuestos":
              [
                {"nombre":"One", "cantidad":"1", "articulos":[
                  {"imagenes":[
                    {"image":"img/semaforo-icon.png"}
                    ]}
                ]},
                {"nombre":"Two", "cantidad":"1", "articulos":[
                  {"imagenes":[
                    {"image":"img/semaforo-icon.png"}
                    ]}
                ]}
              ]
            },
            {"nombre":"Note Sense", "tab":"notesense", "repuestos":
              [
                {"nombre":"One", "cantidad":"1", "articulos":[
                  {"imagenes":[
                    {"image":"img/semaforo-icon.png"}
                    ]}
                ]},
                {"nombre":"Two", "cantidad":"1", "articulos":[
                  {"imagenes":[
                    {"image":"img/semaforo-icon.png"}
                    ]}
                ]}
              ]
            },
            {"nombre":"Sentra", "tab":"sentra", "repuestos":
              [
                {"nombre":"Farolas", "cantidad":"1", "articulos":[
                  {"imagenes":[
                    {"image":"img/nissan/sentra/sentra1.jpg"}
                    ]}
                ]},
                {"nombre":"Two", "cantidad":"1", "articulos":[
                  {"imagenes":[
                    {"image":"img/semaforo-icon.png"}
                    ]}
                ]}
              ]
            },
            {"nombre":"Tiida", "tab":"tiida", "repuestos":
              [
                {"nombre":"One", "cantidad":"1", "articulos":[
                  {"imagenes":[
                    {"image":"img/semaforo-icon.png"}
                    ]}
                ]},
                {"nombre":"Two", "cantidad":"1", "articulos":[
                  {"imagenes":[
                    {"image":"img/semaforo-icon.png"}
                    ]}
                ]}
              ]
            }
            ],
          "tab": "nissan"
        },
        {
          "nombre": "Peugeot",
          "image": "img/peugeot.jpg",
          "modelo": [
            {"nombre":"206", "tab":"206", "repuestos":
              [
                {"nombre":"Farolas", "cantidad":"1", "articulos":[
                  {"imagenes":[
                    {"image":"img/peugeot/206/2061.jpg"}
                    ]}
                ]},
                {"nombre":"Two", "cantidad":"1", "articulos":[
                  {"imagenes":[
                    {"image":"img/semaforo-icon.png"}
                    ]}
                ]}
              ]
            }
            ],
          "tab": "peugeot"
        },
        {
          "nombre": "Ram",
          "image": "img/ram.jpg",
          "modelo": [
            {"nombre":"1500", "tab":"1500", "repuestos":
              [
                {"nombre":"One", "cantidad":"1", "articulos":[
                  {"imagenes":[
                    {"image":"img/semaforo-icon.png"}
                    ]}
                ]},
                {"nombre":"Two", "cantidad":"1", "articulos":[
                  {"imagenes":[
                    {"image":"img/semaforo-icon.png"}
                    ]}
                ]}
              ]
            },
            {"nombre":"2500", "tab":"2500", "repuestos":
              [
                {"nombre":"One", "cantidad":"1", "articulos":[
                  {"imagenes":[
                    {"image":"img/semaforo-icon.png"}
                    ]}
                ]},
                {"nombre":"Two", "cantidad":"1", "articulos":[
                  {"imagenes":[
                    {"image":"img/semaforo-icon.png"}
                    ]}
                ]}
              ]
            }
            ],
          "tab": "rambig"
        },
        {
          "nombre": "Renault",
          "image": "img/renault.jpg",
          "modelo": [
            {"nombre":"Clio", "tab":"clio", "repuestos":
              [
                {"nombre":"Farolas", "cantidad":"1", "articulos":[
                  {"imagenes":[
                    {"image":"img/renault/clio/clio1.jpg"}
                    ]}
                ]},
                {"nombre":"Stops", "cantidad":"2", "articulos":[
                  {"imagenes":[
                    {"image":"img/renault/clio/clio2.jpg"},
                    {"image":"img/renault/clio/clio3.jpg"}
                    ]}
                ]}
              ]
            },
            {"nombre":"Duster", "tab":"duster", "repuestos":
              [
                {"nombre":"Spoilers", "cantidad":"1", "articulos":[
                  {"imagenes":[
                    {"image":"img/renault/duster/duster1.jpg"}
                    ]}
                ]},
                {"nombre":"Two", "cantidad":"1", "articulos":[
                  {"imagenes":[
                    {"image":"img/semaforo-icon.png"}
                    ]}
                ]}
              ]
            },
            {"nombre":"Koleos", "tab":"koleos", "repuestos":
              [
                {"nombre":"One", "cantidad":"1", "articulos":[
                  {"imagenes":[
                    {"image":"img/semaforo-icon.png"}
                    ]}
                ]},
                {"nombre":"Two", "cantidad":"1", "articulos":[
                  {"imagenes":[
                    {"image":"img/semaforo-icon.png"}
                    ]}
                ]}
              ]
            },
            {"nombre":"Logan", "tab":"logan", "repuestos":
              [
                {"nombre":"Stops", "cantidad":"1", "articulos":[
                  {"imagenes":[
                    {"image":"img/renault/logan/logan1.jpg"}
                    ]}
                ]},
                {"nombre":"Two", "cantidad":"1", "articulos":[
                  {"imagenes":[
                    {"image":"img/semaforo-icon.png"}
                    ]}
                ]}
              ]
            },
            {"nombre":"Megane", "tab":"megane1", "repuestos":
              [
                {"nombre":"One", "cantidad":"1", "articulos":[
                  {"imagenes":[
                    {"image":"img/semaforo-icon.png"}
                    ]}
                ]},
                {"nombre":"Two", "cantidad":"1", "articulos":[
                  {"imagenes":[
                    {"image":"img/semaforo-icon.png"}
                    ]}
                ]}
              ]
            },
            {"nombre":"Megane II", "tab":"megan2", "repuestos":
              [
                {"nombre":"Farolas", "cantidad":"1", "articulos":[
                  {"imagenes":[
                    {"image":"img/renault/megan2/megan21.jpg"}
                    ]}
                ]},
                {"nombre":"Two", "cantidad":"1", "articulos":[
                  {"imagenes":[
                    {"image":"img/semaforo-icon.png"}
                    ]}
                ]}
              ]
            },
            {"nombre":"Sandero", "tab":"sandero", "repuestos":
              [
                {"nombre":"Spoilers", "cantidad":"1", "articulos":[
                  {"imagenes":[
                    {"image":"img/renault/sandero/sandero1.jpg"}
                    ]}
                ]},
                {"nombre":"Two", "cantidad":"1", "articulos":[
                  {"imagenes":[
                    {"image":"img/semaforo-icon.png"}
                    ]}
                ]}
              ]
            },
            {"nombre":"Scenic", "tab":"scenic", "repuestos":
              [
                {"nombre":"One", "cantidad":"1", "articulos":[
                  {"imagenes":[
                    {"image":"img/semaforo-icon.png"}
                    ]}
                ]},
                {"nombre":"Two", "cantidad":"1", "articulos":[
                  {"imagenes":[
                    {"image":"img/semaforo-icon.png"}
                    ]}
                ]}
              ]
            },
            {"nombre":"Symbol", "tab":"symbol", "repuestos":
              [
                {"nombre":"One", "cantidad":"1", "articulos":[
                  {"imagenes":[
                    {"image":"img/semaforo-icon.png"}
                    ]}
                ]},
                {"nombre":"Two", "cantidad":"1", "articulos":[
                  {"imagenes":[
                    {"image":"img/semaforo-icon.png"}
                    ]}
                ]}
              ]
            },
            {"nombre":"Twingo", "tab":"twingo", "repuestos":
              [
                {"nombre":"Farolas", "cantidad":"1", "articulos":[
                  {"imagenes":[
                    {"image":"img/renault/twingo/twingo1.jpg"}
                    ]}
                ]},
                {"nombre":"Stops", "cantidad":"1", "articulos":[
                  {"imagenes":[
                    {"image":"img/renault/twingo/twingo2.jpg"}
                    ]}
                ]},
                {"nombre":"Spoilers", "cantidad":"1", "articulos":[
                  {"imagenes":[
                    {"image":"img/renault/twingo/twingo3.jpg"}
                    ]}
                ]}
              ]
            }
            ],
          "tab": "renault"
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