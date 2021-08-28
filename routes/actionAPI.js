const actionController = require('../controllers/actionController.js');

module.exports = (router) => {

    router.route('/action')
        .get(actionController.getAllaction)

    router.route('/action/:id')
        .get(actionController.getbyId)

}