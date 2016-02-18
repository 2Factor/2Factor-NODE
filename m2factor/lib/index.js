/**
  * @module 2factor
  *  
  * 2Factor.in provides extremely simple to use APIs for implementing 2Factor Authentication ( Phone verification ) with just 1 API Call.
Best Part of 2Factor.in solution is its Fast, Reliable & Economical too.
  */

var configuration = require('./configuration'),
    ADDONSERVICESController = require('./Controllers/ADDONSERVICESController'),
    SMSOTPController = require('./Controllers/SMSOTPController'),
    VOICEOTPController = require('./Controllers/VOICEOTPController');


function initializer(){}

//Main functional components of 2factor
initializer.configuration = configuration;
initializer.ADDONSERVICESController = ADDONSERVICESController;
initializer.SMSOTPController = SMSOTPController;
initializer.VOICEOTPController = VOICEOTPController;

//Main Models of 2factor

module.exports = initializer;