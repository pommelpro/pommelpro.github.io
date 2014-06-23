// This function makes a call to the Parse API to returns the picture from 
// the 'urlPath' column of Parse.com and put it in the 'pic' + i cell of the table

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

//  clicking the restart button returns the player to index.html
    $('#restart').click(function () {
        window.location.href = "index.html"
    });

});