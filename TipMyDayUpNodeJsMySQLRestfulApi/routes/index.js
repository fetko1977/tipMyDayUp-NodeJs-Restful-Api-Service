var express = require('express');
var router = express.Router();

/* GET home page. */
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
    
    var query = "SELECT c.name AS competitionName,\n" 
    + " t1.name AS homeTeamName,\n" 
    + " t2.name AS guestTeamName,\n" 
    + " tip.tip_content,\n" 
    + " tip.coefficient,\n" 
    + " tip.game_start,\n" 
    + " tip.status,\n" 
    + " tip.tip_outcome\n" 
    + " FROM tip AS tip\n" 
    + " INNER JOIN competition AS c ON tip.Competition_id = c.id\n" 
    + " INNER JOIN team AS t1 ON tip.Team_home_id = t1.id\n" 
    + " INNER JOIN team AS t2 ON tip.Team_guest_id = t2.id\n" 
    + " ORDER BY tip.game_start"
    
    mysqlConnection.query(query, function (err, result) {
        res.json({results: result});
    });

    
});

module.exports = router;