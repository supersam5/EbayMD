var express = require('express');
var router = express.Router();
var crypto = require('crypto');


/* GET home page. */
router.get('/', function(req, res, next) {
    var challengeCode =req.query.challenge_code;
    var hostname = req.get('host');
    var endpoint = hostname+'/challenge';
    console.log(challengeCode)
    console.log(endpoint)
    var verificationToken = 'jg65287heEt545263t56423_6t7JKh83rhjkbsd-56'
    const hash = crypto.createHash('sha256');
    hash.update(challengeCode);
    hash.update(verificationToken);
    hash.update(endpoint);
    const responseHash = hash.digest('hex');
    res.header({'Content-Type': 'application/json'})
    res.status(200).json({
        'challengeResponse': responseHash.toString()
    })
console.log(new Buffer.from(responseHash).toString());
});
   

module.exports = router;


