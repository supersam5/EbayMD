var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/challenge', function(req, res, next) {
    var challengeCode =req.query('challenge_code');
    var hostname = req.get('host');
    var endpoint = hostname+'/challenge';
    var verificationToken = 'jg65287het545263t56423_6t74h83rhjkbsd56_'
    const hash = createHash('sha256');
    hash.update(challengeCode);
    hash.update(verificationToken);
    hash.update(endpoint);
    const responseHash = hash.digest('hex');
console.log(new Buffer.from(responseHash).toString());
});

module.exports = router;


