var express = require('express');
var router = express.Router();

/* GET Admin Index Page. */
router.get('/', function (req, res) {
    res.render('admin', { title: 'Express' });
});

module.exports = router;