function filltable() {
    var stImg = Parse.Object.extend('stImg');
    var query = new Parse.Query(stImg);
    query.limit(22);
    query.descending("createdAt");
    query.find({
        success: function (results) {
            for (var i = 0; i < results.length; i++) {
                $('#pic' + i).attr('src', results[i].get('urlPath'));
            }
        }
    });

}


$(document).ready(function () {

    Parse.initialize("TohTpNrTgJf0MTUkm5Ax9LtzfXoyaEOmSaQKnGRl", "p7CQveFxWDaYln4pNawiV8qkXiRuda9iR3zBqw8v");
    filltable();


});