
/*
 * Check the validity of a word against a word set
 */

exports.isValid = function (req, res) {
    var from = req.params[0];
    console.log('Param to isvalid ' + req.query[0]);
    res.render('check', { title: 'Check a word' });
};

JLB support  getWords to get a list of words given some letters
exports.getWords = function (req, res) {
    var from = req.params[0];
    console.log('Param to isvalid ' + req.query[0]);
    res.render('check', { title: 'Check a word' });
};
getWords