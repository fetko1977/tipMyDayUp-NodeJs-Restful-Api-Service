var express = require('express');
var router = express.Router();

/* GET Teams listing. */
router.get('/', function (req, res) {
    var mysql = require('mysql');
    
    var mysqlConnection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'tipmydayup_db',
        debug: false
    });
    
    mysqlConnection.connect();
    
    var query = "SELECT * FROM competitions WHERE 1 ORDER BY competitions.name";
    
    mysqlConnection.query(query, function (err, result) {
        res.json({ results: result });
    });
});

module.exports = router;