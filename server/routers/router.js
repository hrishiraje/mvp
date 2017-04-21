var controllers = require('../controllers/controllers');
var router = require('express').Router();

router.get('/api', controllers.home.get);
router.get('/api/category', controllers.category.get);
router.get('/api/image', controllers.image.get);

module.exports = router;