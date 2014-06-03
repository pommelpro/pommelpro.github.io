function filltable() {
    var specific = Parse.Object.extend('specific');
    var query = new Parse.Query(specific);

    query.limit(20);
    query.descending("createdAt");
    query.find({
        success: function (results) {
            for (var i = 0; i < results.length; i++) {
                $('#pic' + i).attr('src', results[i].get('urlPath'));
//                $('#letter' + i).html(results[i].get('category'));
            }
        }
    });




}


$(document).ready(function () {

    Parse.initialize("TohTpNrTgJf0MTUkm5Ax9LtzfXoyaEOmSaQKnGRl", "p7CQveFxWDaYln4pNawiV8qkXiRuda9iR3zBqw8v");
    filltable();


    $('#restart').click(function () {
        window.location.href = "index.html"
    });

});