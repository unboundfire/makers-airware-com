// HB helper to turn a list of reviewers into a readable string
module.exports = function(reviewers) {

    return reviewers.reduce(function(prev, curr, i, arr) {

        if ( i != 0 ) {
            if (arr.length > 2 ) prev += ', ';
            if ( i == arr.length -1 ) prev += ' and ';
        }

        prev += curr.nickname;

        return prev;

    }, '');

};