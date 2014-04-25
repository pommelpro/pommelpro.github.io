var buswait = new Array();


// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/**
 * Global variable containing the query we'd like to pass to Flickr.
 *
 * @type {string}
 */
var query = new Array();
query[0] = 'audi';
query[1] = 'kitten';
query[2] = 'puppy';
query[3] = 'backpack';
query[4] = 'iPhone';
query[5] = 'oreo';
query[6] = 'Red Mango';
query[7] = 'AEPi';
query[8] = 'bmw';


var randomnumber = Math.floor((Math.random()*8)+1);

var PhotoGenerator = {
  /**
   * Flickr URL that will give us lots and lots of whatever we're looking for.
   *
   * See http://www.flickr.com/services/api/flickr.photos.search.html for
   * details about the construction of this URL.
   *
   * @type {string}
   * @private
   */
  searchOnFlickr_: 'https://secure.flickr.com/services/rest/?' +
      'method=flickr.photos.search&' +
      'api_key=90485e931f687a9b9c2a66bf58a3861a&' +
      'text=' + encodeURIComponent(query[randomnumber]) + '&' +
      'safe_search=1&' +
      'content_type=1&' +
      'sort=interestingness-desc&' +
      'per_page=8',

  /**
   * Sends an XHR GET request to grab photos of lots and lots of photos. The
   * XHR's 'onload' event is hooks up to the 'showPhotos_' method.
   *
   * @public
   */
  requestPhotos: function() {
    var req = new XMLHttpRequest();
    req.open("GET", this.searchOnFlickr_, true);
    req.onload = this.showPhotos_.bind(this);
    req.send(null);
  },

  /**
   *
   * @param {ProgressEvent} e The XHR ProgressEvent.
   * @private
   */
  showPhotos_: function (e) {
	var Photos = e.target.responseXML.querySelectorAll('photo');
	for (var i = 0; i < Photos.length; i++) {
		buswait[i] = this.constructPhotoURL_(Photos[i]);
    }
  },


  constructPhotoURL_: function (photo) {
    return "http://farm" + photo.getAttribute("farm") +
        ".static.flickr.com/" + photo.getAttribute("server") +
        "/" + photo.getAttribute("id") +
        "_" + photo.getAttribute("secret") +
        "_c.jpg";
  }
};


function getNewImage()
{
	randomnumber = Math.floor((Math.random()*8)+1);
	PhotoGenerator.requestNewPhoto();


}



$(document).ready(function()
{
    PhotoGenerator.requestPhotos();
	$('body').hide().fadeIn(1000);
	$('#populate').click(function()
	{
		for(var i = 0; i < 8; i++){
			$('#pic' + i).attr('src',buswait[i]);}
		$('#headder').html(query[randomnumber]);
	});
	$('#random').click(function () {
	    location.reload();
//		randomnumber = Math.floor((Math.random()*8)+1);
//		PhotoGenerator.requestPhotos();
	});
});