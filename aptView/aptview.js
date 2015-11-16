$( document ).ready(function() {
	var favoritesList = [];
	var totalList = [];
	var sortedArr = [];
	var which = "totalList";
	totalList = initialize();
	fillPage(totalList);
	$(function(){
		if ('ontouchstart' in window)
		{
			$('body').removeClass('no-touch').addClass('touch');
			$('div.boxInner img').click(function(){
				$(this).closest('.boxInner').toggleClass('touchFocus');
			});
		}
	});
	$('.az').click(function() {
		if(which == "favorites"){
			sortedArr = favoritesList.slice(0);;
		} else {
			sortedArr = totalList.slice(0);;
		}
		sortedArr = sorter(sortedArr);
		fillPage(sortedArr);
	});
	$('.za').click(function() {
		if(which == "favorites"){
			sortedArr = favoritesList.slice(0);;
		} else {
			sortedArr = totalList.slice(0);;
		}
		fillPage(sortedArr.reverse());
	});
	$('.box').click(function() {
		favoritesList = favorite(this, favoritesList);
	});
	$('.favs').click(function() {
		which = "favorites";
		fillPage(favoritesList);
	});
	$('.total').click(function() {
		which = "totalList";
		fillPage(totalList);
	});
});

function nextChar(c) {
	return String.fromCharCode(c.charCodeAt(0) + 1);
}
function initialize() {
	var arr = [];
	var idName = 'a';
	for (var i =0; i<100; i++) {
		var box  = document.createElement("DIV");
		var boxInner = document.createElement("DIV");
		var imgBack = document.createElement("IMG");
		var imgFav = document.createElement("IMG");
		var titleBox = document.createElement("DIV");

		box.setAttribute('class', 'box');
		boxInner.setAttribute('class', 'boxInner');
		var ranNum = Math.floor((Math.random() * 6) + 1);
		imgBack.src = 'imgs/aptTile' + ranNum + '.png';
		imgBack.setAttribute('class', 'backImg');
		imgFav.src = 'imgs/favorite.png';
		imgFav.className = "favoriteImg blur";
		titleBox.setAttribute('class', 'titleBox');
		if (i <= 25) {
			box.id = idName.toUpperCase();
			titleBox.innerHTML = box.id + (i+1) + " - " + addressArr[ranNum - 1];
			idName = nextChar(idName);
			if (idName == '{') { idName = 'a'; }
		} else if (i <= 51) {
			box.id = idName.toUpperCase() + idName.toUpperCase();
			titleBox.innerHTML = box.id + (i+1) + " - " + addressArr[ranNum - 1];
			idName = nextChar(idName);
			if (idName == '{') { idName = 'a'; }
		}
		else if (i <= 77) {
			box.id = idName.toUpperCase() + idName.toUpperCase() + idName.toUpperCase();
			titleBox.innerHTML = box.id + (i+1) + " - " + addressArr[ranNum - 1];
			idName = nextChar(idName);
			if (idName == '{') { idName = 'a'; }
		} else {
			box.id = idName.toUpperCase() + idName.toUpperCase() + idName.toUpperCase() + idName.toUpperCase();
			titleBox.innerHTML = box.id + (i+1) + " - " + addressArr[ranNum - 1];
			idName = nextChar(idName);			
		}
		boxInner.appendChild(imgBack);
		boxInner.appendChild(imgFav);
		boxInner.appendChild(titleBox);
		box.appendChild(boxInner);
		var name = box.id;
		arr.push(box);
	}
	return arr;
}
function fillPage(arr) {
	var wrap = document.getElementsByClassName("wrap")[0];
	while (wrap.firstChild) {
		wrap.removeChild(wrap.firstChild);
	}
	if (!arr.length) { 
		alert("You haven't selected any favorites!");
	}
	for (var i=0; i < arr.length; i++) {
		wrap.appendChild(arr[i]);
	}
}
function favorite(e, arr) {
	$(e).find(".favoriteImg").toggleClass('blur');
	var blurred = $(e).find(".favoriteImg").hasClass('blur');
	if (!blurred) {
		arr.push(e);
	}
	else { 
		var index = arr.indexOf(e);
		arr.splice(index, 1);
	}
	return arr;
}
function sorter(arr) {
	return arr.sort(function (a, b) {
		if (a.id > b.id) {
			return 1;
		}
		if (a.id < b.id) {
			return -1;
		}
			return 0;
	});
}
var addressArr = [
	"468 W Huron St, Chicago, IL",
	"1600 Pennsylvania Ave NW, Washington, DC 20500",
	"Moscow, Russia, 103073",
	"2700 Point Dr, Highland Park, IL 60035",
	"Middle of Nowhere Yert",
	"224 Park Ave, Highland Park IL 60035"
];