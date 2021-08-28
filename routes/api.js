const router = require ('express').Router();

//AJOUT  des routings
/*require('./productAPI')(router);*/

require('./itemAPI')(router);


module.exports = router;