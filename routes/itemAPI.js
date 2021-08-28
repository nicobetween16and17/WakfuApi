const itemController = require ('../controllers/itemController.js');

module.exports = (router) => {

  router.route('/items')
  .get(itemController.getAll)


  router.route('/items/:ref')
  .get(itemController.getOne)


  router.route('/items/:ref/:range')
  .get(itemController.getSome)

  router.route('/items/:ref/:range/:type')
  .get(itemController.getSelected)

}