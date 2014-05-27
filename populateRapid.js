function filltable() {
    var onePlayer = Parse.Object.extend('onePlayer');
    var query = new Parse.Query(onePlayer);

    query.limit(20);
    query.descending("createdAt");
    query.find({
        success: function (results) {
            for (var i = 0; i < results.length; i++) {
                $('#pic' + i).attr('src', results[i].get('urlPath'));
                $('#letter' + i).html(results[i].get('letter'));
            }
        }
    });




}


$(document).ready(function () {

    Parse.initialize("TohTpNrTgJf0MTUkm5Ax9LtzfXoyaEOmSaQKnGRl", "p7CQveFxWDaYln4pNawiV8qkXiRuda9iR3zBqw8v");
    filltable();


});