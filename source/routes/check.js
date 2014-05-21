
/*
 * Check the validity of a word against a word set
 */

module.exports = function (dictionary) {
    return {
        isValid: function (req, res) {
            console.log('Param to isvalid ' + req.query.word);
            var valid = dictionary.find(req.query.word);
            if( valid )
                res.render('check', { title: req.query.word + ' is valid' });
            else
                res.render('check', { title: req.query.word + ' is NOT valid' });
        },

        getWords: function (req, res) {
            var letters = req.query.letters;
            var size = req.query.size;
            dictionary.createBoard(3);
            var wordsFound = dictionary.findWords(letters, size);
            res.render('check', {
                title: 'Results',
                letters: letters,
                size: size,
                words: wordsFound,
            });
        }
    };
};

