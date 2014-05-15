
/*
 * Check the validity of a word against a word set
 */

exports.isValid = function (req, res) {
    var from = req.params[0];
    console.log('Param to isvalid ' + req.query[0]);
    res.render('check', { title: 'Check a word' });
};

exports.getWords = function (req, res) {
    var from = req.params[0];
    res.render('getWords', { title: 'Given letters, get words' });
};
