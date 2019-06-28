const firebase = require('firebase/app')
require('firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyBMgzblqqn56mhhq_HMZtT-tNlRZ1eZCiQ",
    authDomain: "group-project-pokemon.firebaseapp.com",
    databaseURL: "https://group-project-pokemon.firebaseio.com",
    projectId: "group-project-pokemon",
    storageBucket: "group-project-pokemon.appspot.com",
    messagingSenderId: "229416045485",
    appId: "1:229416045485:web:7f268df45e8a2e90"
  };

firebase.initializeApp(firebaseConfig)

let db = firebase.firestore()
let data = [
    {
        name : 'Charizard',
        health : 100,
        attack : [
            {
                name : 'ember',
                point : 20
            },
            {
                name  : 'dragon rage',
                point  : 17
            },
            {
                name : 'flamethrower',
                point : 47
            },
            {
                name : 'inverno', 
                point : 62
            }
        ],
        image : [
            {
                cover : 'https://vignette.wikia.nocookie.net/pokemon/images/1/1f/Charizard_BW.gif/revision/latest?cb=20120627233613',
                attack : 
                    [
                        'https://vignette.wikia.nocookie.net/pokemon/images/c/cc/Charizard-AttackAnimation-XY-2.gif/revision/latest/scale-to-width-down/180?cb=20160626213652',
                        'https://vignette.wikia.nocookie.net/pokemon/images/8/8a/Charizard-AttackAnimation-XY-3.gif/revision/latest/scale-to-width-down/180?cb=20160626213751', 
                        'https://vignette.wikia.nocookie.net/pokemon/images/2/29/Charizard-AttackAnimation-XY-4.gif/revision/latest/scale-to-width-down/180?cb=20160626213828'
                    ],
                idle : 'https://vignette.wikia.nocookie.net/pokemon/images/7/74/Charizard_XY.gif/revision/latest?cb=20140319080812'

            }
        ]
    },
    {
        name : 'Blastoise',
        health : 100,
        attack : [
            {
                name : 'water pulse',
                point : 29
            },
            {
                name : 'aqua tail',
                point : 33
            },
            {
                name : 'hydro pump',
                point : 60
            },
            {
                name : 'rain dance',
                point : 54
            }
        ],
        image : [
            {
                cover : 'https://vignette.wikia.nocookie.net/pokemon/images/a/ab/Blastoise_BW.gif/revision/latest?cb=20120627233632',
                attack : [
                    'https://vignette.wikia.nocookie.net/pokemon/images/a/a4/Blastoise-AttackAnimation-XY-2.gif/revision/latest/scale-to-width-down/180?cb=20160625134702',
                    'https://vignette.wikia.nocookie.net/pokemon/images/2/22/Blastoise-AttackAnimation-XY-3.gif/revision/latest/scale-to-width-down/180?cb=20160625134729',
                    'https://vignette.wikia.nocookie.net/pokemon/images/b/b7/Blastoise-AttackAnimation-XY-4.gif/revision/latest/scale-to-width-down/180?cb=20160625134800'
                ],
                idle : 'https://vignette.wikia.nocookie.net/pokemon/images/7/71/Blastoise_XY.gif/revision/latest?cb=20140319082224'
            }
        ]
    },
    {
        name : 'Pikachu',
        health : 100,
        attack : [
            {
                name : 'thunder',
                point : 58
            },
            {
                name : 'thuder bolt',
                point : 42
            },
            {
                name : 'spark',
                point : 26
            },
            {
                name : 'electro ball',
                point : 23
            }
        ],
        image : [
            {
                cover : 'https://vignette.wikia.nocookie.net/pokemon/images/3/3c/Pikachu_BW.gif/revision/latest?cb=20120627233813',
                attack : [
                    'https://vignette.wikia.nocookie.net/pokemon/images/9/94/Pikachu-AttackAnimation-XY-1.gif/revision/latest?cb=20161014095829',
                    'https://vignette.wikia.nocookie.net/pokemon/images/f/fc/Pikachu-AttackAnimation-XY-2.gif/revision/latest?cb=20161014095858',
                    'https://vignette.wikia.nocookie.net/pokemon/images/0/01/Pikachu-AttackAnimation-XY-3.gif/revision/latest?cb=20161014095913',
                    'https://vignette.wikia.nocookie.net/pokemon/images/f/f2/Pikachu-AttackAnimation-XY-4.gif/revision/latest?cb=20161014095927'
                ],
                idle : 'https://vignette.wikia.nocookie.net/pokemon/images/7/72/Pikachu_XY.gif/revision/latest?cb=20140319085812'
            }
        ]
    },
    {
        name : 'Alakazam',
        health : 100,
        attack : [
            {
                name : 'confusion',
                point : 16
            },
            {
                name : 'psybeam',
                point : 21
            },
            {
                name : 'telekinensis',
                point : 33
            },
            {
                name : 'psychic',
                point : 38
            }
        ],
        image : [
            {
                cover : 'https://vignette.wikia.nocookie.net/pokemon/images/7/72/Alakazam_BW.gif/revision/latest?cb=20120628004632',
                attack : [
                    'https://vignette.wikia.nocookie.net/pokemon/images/9/99/Alakazam-AttackAnimation-XY-2.gif/revision/latest/scale-to-width-down/180?cb=20160625012653',
                    'https://vignette.wikia.nocookie.net/pokemon/images/0/05/Alakazam-AttackAnimation-XY-3.gif/revision/latest/scale-to-width-down/180?cb=20160625012731'
                ],
                idle : 'https://vignette.wikia.nocookie.net/pokemon/images/e/ea/Alakazam_XY.gif/revision/latest?cb=20140831204553'
            }
        ]
    },
    {
        name : 'Gengar',
        health : 100,
        attack : [
            {
                name : 'curse',
                point : 12
            },
            {
                name : 'sucker punch',
                point : 22
            },
            {
                name : 'dream eater',
                point : 39
            },
            {
                name : 'dark pulse',
                point : 34
            }
        ],
        image : [
            {
                cover : 'https://vignette.wikia.nocookie.net/pokemon/images/2/23/E_094_front.gif/revision/latest?cb=20120626211420',
                attack : [
                    'https://vignette.wikia.nocookie.net/pokemon/images/3/3e/Gengar_AttackAnimation_1_XY.gif/revision/latest?cb=20140901010946',
                    'https://vignette.wikia.nocookie.net/pokemon/images/6/63/Gengar_AttackAnimation_2_XY.gif/revision/latest?cb=20140901010945'
                ],
                idle : 'https://vignette.wikia.nocookie.net/pokemon/images/4/40/Gengar_XY.gif/revision/latest?cb=20140901010937'
            }
        ]
    },
    {
        name : 'Vaporeon',
        health : 100,
        attack : [
            {
                name : 'water gun',
                point : 20
            },
            {
                name : 'muddy water',
                point : 25
            },
            {
                name : 'hydro pump',
                point : 30
            },
            {
                name : 'haze',
                point : 20
            }
        ],
        image : [
            {
                cover : 'https://vignette.wikia.nocookie.net/pokemon/images/0/02/Vaporeon_BW.gif/revision/latest?cb=20120628010442',
                attack : [
                    'https://vignette.wikia.nocookie.net/pokemon/images/f/fd/Vaporeon-AttackAnimation-XY-1.gif/revision/latest?cb=20160820121754',
                    'https://vignette.wikia.nocookie.net/pokemon/images/0/02/Vaporeon-AttackAnimation-XY-2.gif/revision/latest?cb=20160820121810',
                    'https://vignette.wikia.nocookie.net/pokemon/images/c/cb/Vaporeon-AttackAnimation-XY-3.gif/revision/latest?cb=20160820121826'
                ],
                idle : 'https://vignette.wikia.nocookie.net/pokemon/images/1/15/Vaporeon_XY.gif/revision/latest?cb=20140721002516'
            }
        ]
    },
    {
        name : 'Flareon',
        health : 100,
        attack : [
            {
                name : 'bite',
                point : 20
            },
            {
                name : 'lava plume',
                point : 30
            },
            {
                name : 'scary face',
                point : 25
            },
            {
                name : 'flare blitz',
                point : 30
            }
        ],
        image : [
            {
                cover : 'https://vignette.wikia.nocookie.net/pokemon/images/e/e3/Flareon_BW.gif/revision/latest?cb=20120628010451',
                attack : [
                    'https://vignette.wikia.nocookie.net/pokemon/images/1/10/Flareon-AttackAnimation-XY-1.gif/revision/latest?cb=20160822140851',
                    'https://vignette.wikia.nocookie.net/pokemon/images/a/a0/Flareon-AttackAnimation-XY-2.gif/revision/latest?cb=20160822140906',
                    'https://vignette.wikia.nocookie.net/pokemon/images/0/0c/Flareon-AttackAnimation-XY-3.gif/revision/latest?cb=20160822140919'
                ],
                idle : 'https://vignette.wikia.nocookie.net/pokemon/images/a/a3/Flareon_XY.gif/revision/latest?cb=20140721002515'
            }
        ]
    },
    {
      name : 'Blaziken',
      health : 100,
      attack : [
          {
              name : 'slash',
              point : 20
          },
          {
              name : 'sky uppercut',
              point : 30
          },
          {
              name : 'high jump kick',
              point : 20
          },
          {
              name : 'blaze kick',
              point : 30
          }
      ],
      image : [
          {
              cover : 'https://vignette.wikia.nocookie.net/pokemon/images/0/0c/Flareon-AttackAnimation-XY-3.gif/revision/latest?cb=20160822140919',
              attack : [
                  'https://vignette.wikia.nocookie.net/pokemon/images/d/d7/Blaziken_AttackAnimation_1_XY.gif/revision/latest/scale-to-width-down/180?cb=20140826212546',
                  'https://vignette.wikia.nocookie.net/pokemon/images/4/4b/Blaziken_AttackAnimation_2_XY.gif/revision/latest/scale-to-width-down/180?cb=20140826212548',
                  'https://vignette.wikia.nocookie.net/pokemon/images/b/b5/Blaziken_AttackAnimation_3_XY.gif/revision/latest/scale-to-width-down/180?cb=20140826212550'
              ],
              idle : 'https://vignette.wikia.nocookie.net/pokemon/images/1/1c/Blaziken_Shiny_XY.gif/revision/latest?cb=20140826212448'
          }
      ]  
    },
    {
        name : 'Gardevoir',
        health : 100,
        attack : [
            {
                name : 'psychic',
                point : 12
            },
            {
                name : 'hypnosis',
                point : 23
            },
            {
                name : 'magical leaf',
                point : 25
            },
            {
                name : 'captivate',
                point : 20
            }
        ],
        image : [
            {
                cover : 'https://vignette.wikia.nocookie.net/pokemon/images/8/87/Gardevoir_BW.gif/revision/latest?cb=20120622075915',
                attack : [
                    'https://vignette.wikia.nocookie.net/pokemon/images/d/dd/Gardevoir-AttackAnimation-XY-1.gif/revision/latest?cb=20160706063531',
                    'https://vignette.wikia.nocookie.net/pokemon/images/2/25/Gardevoir-AttackAnimation-XY-2.gif/revision/latest?cb=20160706063543'
                ],
                idle : 'https://vignette.wikia.nocookie.net/pokemon/images/a/a6/Gardevoir_XY.gif/revision/latest?cb=20140709160635'
            }
        ]
    },
    {
        name : 'Mawile',
        health : 1000,
        attack : [
            {
                name : 'crich',
                point : 20
            },
            {
                name : 'bite',
                point : 30
            },
            {
                name : 'swallow',
                point : 25
            },
            {
                name : 'iron head',
                point : 17
            }
        ],
        image : [
            {
                cover : 'https://vignette.wikia.nocookie.net/pokemon/images/a/a5/Mawile_BW.gif/revision/latest?cb=20120622080224',
                attack : [
                    'https://vignette.wikia.nocookie.net/pokemon/images/4/4f/Mawile-AttackAnimation-XY-1.gif/revision/latest?cb=20161024095025',
                    'https://vignette.wikia.nocookie.net/pokemon/images/4/4f/Mawile-AttackAnimation-XY-2.gif/revision/latest?cb=20161024095040'
                ],
                idle : 'https://vignette.wikia.nocookie.net/pokemon/images/f/fe/Mawile_XY.gif/revision/latest?cb=20140608160516'
            }
        ]
    },
    {
        name : 'Aggron',
        health : 100,
        attack : [
            {
                name : 'iron tail',
                point : 20
            },
            {
                name : 'take down',
                point : 19
            },
            {
                name : 'roar',
                point : 10
            },
            {
                name : 'metal claw',
                point : 26
            }
        ],
        image : [
            {
                cover : 'https://vignette.wikia.nocookie.net/pokemon/images/e/e2/Aggron_BW.gif/revision/latest?cb=20120622080242',
                attack : [
                    'https://vignette.wikia.nocookie.net/pokemon/images/a/a4/Aggron-AttackAnimation-XY-2.gif/revision/latest/scale-to-width-down/180?cb=20160625012009', 
                    'https://vignette.wikia.nocookie.net/pokemon/images/e/e4/Aggron-AttackAnimation-XY-3.gif/revision/latest/scale-to-width-down/180?cb=20160625012039'
                ],
                idle : 'https://vignette.wikia.nocookie.net/pokemon/images/2/2b/Aggron_XY.gif/revision/latest?cb=20141122051153'
            }
        ]
    },
    {
        name : 'Altaria',
        health : 100,
        attack : [
            {
                name : 'peck',
                point : 10
            },
            {
                name : 'dragon dance',
                point : 20
            },
            {
                name : 'take down',
                point : 23
            },
            {
                name : 'dragon breateh',
                point : 30
            }
        ],
        image : [
            {
                cover : 'https://vignette.wikia.nocookie.net/pokemon/images/d/d7/Altaria_BW.gif/revision/latest?cb=20120622080947',
                attack : [
                    'https://vignette.wikia.nocookie.net/pokemon/images/2/2c/Altaria-AttackAnimation-XY-2.gif/revision/latest/scale-to-width-down/180?cb=20160625130119',
                    'https://vignette.wikia.nocookie.net/pokemon/images/5/50/Altaria-AttackAnimation-XY-3.gif/revision/latest/scale-to-width-down/180?cb=20160625130156'
                ],
                idle : 'https://vignette.wikia.nocookie.net/pokemon/images/9/97/Altaria_XY.gif/revision/latest?cb=20140606121057'
            }
        ]
    },
    {
        name : 'Absol',
        health : 100,
        attack : [
            {
                name : 'night slash',
                point : 23
            },
            {
                name : 'pshyco cut',
                point : 27
            },
            {
                name : 'razor wind',
                point : 30
            },
            {
                name : 'future sight',
                point : 20
            }
        ],
        image : [
            {
                cover : 'https://vignette.wikia.nocookie.net/pokemon/images/c/cd/Absol_BW.gif/revision/latest?cb=20120622081430',
                attack : [
                    'https://vignette.wikia.nocookie.net/pokemon/images/a/a6/Absol-AttackAnimation-XY-1.gif/revision/latest?cb=20160721035642',
                    'https://vignette.wikia.nocookie.net/pokemon/images/c/ce/Absol-AttackAnimation-XY-2.gif/revision/latest?cb=20160721040408'
                ],
                idle : 'https://vignette.wikia.nocookie.net/pokemon/images/0/00/Absol_XY.gif/revision/latest?cb=20141113050137'
            }
        ]
    },
    {
        name : 'Leafon',
        health : 100,
        attack : [
            {
                name : 'razor wind',
                point : 17
            },
            {
                name : 'quick attack',
                point : 20
            },
            {
                name : 'Magical Leaf',
                point : 25
            },
            {
                name : 'leaf blade',
                point : 20
            }
        ],
        image : [
            {
                cover : 'https://vignette.wikia.nocookie.net/pokemon/images/5/51/Leafeon_BW.gif/revision/latest?cb=20120622083344',
                attack : [
                    'https://vignette.wikia.nocookie.net/pokemon/images/3/30/Leafeon-AttackAnimation-XY-1.gif/revision/latest?cb=20160520114123',
                    'https://vignette.wikia.nocookie.net/pokemon/images/9/91/Leafeon-AttackAnimation-XY-2.gif/revision/latest?cb=20160520114337',
                    'https://vignette.wikia.nocookie.net/pokemon/images/2/2d/Leafeon-AttackAnimation-XY-3.gif/revision/latest?cb=20160520114410'
                ],
                idle : 'https://vignette.wikia.nocookie.net/pokemon/images/e/ef/Leafeon_XY.gif/revision/latest?cb=20150119044457'
            }
        ]
    },
    {
        name : 'Glaceon',
        health : 100,
        attack : [
            {
                name : 'icy wind',
                point : 20
            },
            {
                name : 'ice shard',
                point : 30
            },
            {
                name : 'barrier',
                point : 21
            },
            {
                name : 'bariier',
                point : 20
            }
        ],
        image : [
            {
                cover : 'https://vignette.wikia.nocookie.net/pokemon/images/c/cd/Glaceon_BW.gif/revision/latest?cb=20120622083350',
                attack : [
                    'https://vignette.wikia.nocookie.net/pokemon/images/0/01/Glaceon-AttackAnimation-XY-1.gif/revision/latest?cb=20160520122947',
                    'https://vignette.wikia.nocookie.net/pokemon/images/6/6e/Glaceon-AttackAnimation-XY-2.gif/revision/latest?cb=20160520122959',
                    'https://vignette.wikia.nocookie.net/pokemon/images/e/e6/Glaceon-AttackAnimation-XY-3.gif/revision/latest?cb=20160520123011'
                ],
                idle : 'https://vignette.wikia.nocookie.net/pokemon/images/d/d8/Glaceon_XY.gif/revision/latest?cb=20140722033907'
            }
        ]
    },
    {
        name : 'Greninja',
        health : 100,
        attack : [
            {
                name : 'quick attack',
                point : 20
            },
            {
                name : 'double team',
                point : 21
            },
            {
                name : 'haze',
                point : 10
            },
            {
                name : 'night slash',
                point : 20
            }
        ],
        image : [
            {
                cover : 'https://vignette.wikia.nocookie.net/pokemon/images/1/1c/Greninja_XY.gif/revision/latest?cb=20140319092130',
                attack : [
                    'https://vignette.wikia.nocookie.net/pokemon/images/0/06/Greninja-AttackAnimation-XY-1.gif/revision/latest?cb=20160914115035',
                    'https://vignette.wikia.nocookie.net/pokemon/images/0/00/Greninja-AttackAnimation-XY-2.gif/revision/latest?cb=20160914115045',
                    'https://vignette.wikia.nocookie.net/pokemon/images/b/be/Greninja-AttackAnimation-XY-3.gif/revision/latest?cb=20160914115056'
                ],
                idle : 'https://vignette.wikia.nocookie.net/pokemon/images/1/1c/Greninja_XY.gif/revision/latest?cb=20140319092130'
            }
        ]
    },
    {
        name : 'Delphox',
        health : 100,
        attack : [
            {
                name : 'fire punch',
                point : 25
            },
            {
                name : 'shock wave',
                point : 10
            },
            {
                name : 'thunder punch',
                point : 20
            },
            {
                name : 'zen headbutt',
                point : 20
            }
        ],
        image : [
            {
                cover : 'https://vignette.wikia.nocookie.net/pokemon/images/3/31/Delphox_XY.gif/revision/latest?cb=20140319093018',
                attack : [
                    'https://vignette.wikia.nocookie.net/pokemon/images/f/fb/Delphox-AttackAnimation-XY-1.gif/revision/latest?cb=20160707103804',
                    'https://vignette.wikia.nocookie.net/pokemon/images/2/25/Delphox-AttackAnimation-XY-2.gif/revision/latest?cb=20160707103819',
                    'https://vignette.wikia.nocookie.net/pokemon/images/1/1b/Delphox-AttackAnimation-XY-3.gif/revision/latest?cb=20160707103832'
                ],
                idle : 'https://vignette.wikia.nocookie.net/pokemon/images/3/31/Delphox_XY.gif/revision/latest?cb=20140319093018'
            }
        ]
    },
    {
        name : 'Gallade',
        health : 100,
        attack : [
            {
                name : 'aerial ace',
                point : '20'
            },
            {
                name : 'wide guard',
                point : '26'
            },
            {
                name : 'pshyco cuy',
                point : 30
            },
            {
                name : 'teleport',
                point : 21
            }
        ],
        image : [
            {
                cover : 'https://vignette.wikia.nocookie.net/pokemon/images/9/9a/Gallade_BW.gif/revision/latest?cb=20120622073926',
                attack : [
                    'https://vignette.wikia.nocookie.net/pokemon/images/d/da/Gallade-AttackAnimation-XY-1.gif/revision/latest?cb=20160706065249',
                    'https://vignette.wikia.nocookie.net/pokemon/images/c/cf/Gallade-AttackAnimation-XY-2.gif/revision/latest?cb=20160706065302'
                ],
                idle : 'https://vignette.wikia.nocookie.net/pokemon/images/0/08/MGallade_ORAS.gif/revision/latest?cb=20141214185814'
            }
        ]
    },
    {
        name : 'Chesnaught',
        health : 100,
        attack : [
            {
                name : 'focus blast',
                point : 20
            },
            {
                name : 'attract',
                point : 10
            },
            {
                name : 'gyro bell',
                point : 8
            },
            {
                name : 'subtitude',
                point : 35
            }
        ],
        image : [
            {
                cover : 'https://vignette.wikia.nocookie.net/pokemon/images/a/ad/Chesnaught_XY.gif/revision/latest?cb=20140319091349',
                attack : [
                    'https://vignette.wikia.nocookie.net/pokemon/images/e/e7/Chesnaught-AttackAnimation-XY-2.gif/revision/latest/scale-to-width-down/180?cb=20160626220236',
                    'https://vignette.wikia.nocookie.net/pokemon/images/2/24/Chesnaught-AttackAnimation-XY-3.gif/revision/latest/scale-to-width-down/180?cb=20160626220318',
                    'https://vignette.wikia.nocookie.net/pokemon/images/a/a0/Chesnaught-AttackAnimation-XY-4.gif/revision/latest/scale-to-width-down/180?cb=20160626220357'
                ],
                idle : 'https://vignette.wikia.nocookie.net/pokemon/images/1/11/Chesnaught_Shiny_XY.gif/revision/latest?cb=20150201063911'
            }
        ]
    }
]

for (let i = 0; i < data.length; i++){
    db.collection("PokemonList").add(data[i])
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
}