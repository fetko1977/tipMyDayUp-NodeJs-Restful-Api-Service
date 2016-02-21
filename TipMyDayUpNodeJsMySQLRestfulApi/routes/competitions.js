var express = require('express');
var router = express.Router();

/* GET Teams listing. */
router.get('/', function (req, res) {
    var mysql = require('mysql');
    
    var localhostSettings = {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'tipmydayup_db',
        debug: false
    }

    var testServerSettings = {
        host: 'localhost',
        user: 'fetkoli_fladmin',
        password: 'krisani1977',
        database: 'fetkoli_tipmydayup',
        debug: false
    }

    var mysqlConnection = mysql.createConnection(localhostSettings);
    
    mysqlConnection.connect();
    
    var query = "SELECT * FROM competitions WHERE 1 ORDER BY competitions.name";
    
    mysqlConnection.query(query, function (err, result) {
        res.json({ results: result });
    });
});

module.exports = router;