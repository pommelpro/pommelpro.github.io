var userdata = "";
$( document ).ready(function() {
	$('body').hide();
	var prevId = "";
	$('body').fadeIn(500);
	userdata = noJSONAvail();
	if(userdata != "") {
		buildTable();
		$('dd').hide();
	}
});
function buildTable() {
	userdata.sort(function(a, b) {
		return a.name.localeCompare(b.name);
	});
	for (var i=0; i < userdata.length; i++) {
		var node = document.createElement("LI");
		node.id = userdata[i].id.toString();
		var dl = document.createElement("DL");
		var dt1 = document.createElement("DT");
		var dt2 = MakeDT2(userdata[i]);
		var textnode = document.createTextNode(userdata[i].name);
		var emailNode = document.createTextNode(" - " + userdata[i].email);
		var bold = document.createElement("b");
		bold.appendChild(textnode);
		if (userdata[i].phone != "" ) {
			var imgNode = MakePhone(userdata[i].phone, 1);
		} else {
			var imgNode = MakePhone(userdata[i].phone, 0);
		}
		dt1.appendChild(imgNode);
		dt1.appendChild(bold);
		dt1.appendChild(emailNode);
		dl.appendChild(dt1);
		dl.appendChild(dt2);
		node.appendChild(dl);
		$("#userInfo")[0].appendChild(node);
	}
}
function MakePhone(phone, bool) {
	var imgNode = document.createElement('img');
	if(bool == 1) {
		imgNode.setAttribute('src', 'img/phoneicon.png');
		imgNode.setAttribute('alt', 'telephone');
	} else {
		imgNode.setAttribute('src', 'img/nophoneicon.png');
		imgNode.setAttribute('alt', 'notelephone');
	}
	return imgNode;
}
function MakeDT2(obj) {
	var dt2 = document.createElement("DT");
	var noPhone = true;
	if (obj.phone == "") {var noPhone = false;}

	var ddUserName = document.createElement("DD");
	var ddEmail = document.createElement("DD");
	var ddAddress = document.createElement("DD");
	if (noPhone) {var ddPhone = document.createElement("DD");}
	var ddWebSite = document.createElement("DD");

	var textnode1 = document.createTextNode("Username: " + obj.username);
	var textnode2 = document.createTextNode("Email: " + obj.email);
	var textnode3 = document.createTextNode("Address: " + obj.address.street + ", " + obj.address.suite + ", " + obj.address.city + " " + obj.address.zipcode);
	if (noPhone) { var textnode4 = document.createTextNode("Phone: " + obj.phone); }

	var a = document.createElement('a');
	var textnode5a = document.createTextNode(obj.website);
	var textnode5b = document.createTextNode("Website: ");
	a.appendChild(textnode5a);
	a.title = obj.website;
	a.href = "http://" + obj.website;

	ddUserName.appendChild(textnode1);
	ddEmail.appendChild(textnode2);
	ddAddress.appendChild(textnode3);
	if (noPhone) { ddPhone.appendChild(textnode4); }
	ddWebSite.appendChild(textnode5b);
	ddWebSite.appendChild(a);

	ddUserName.className = obj.id.toString();
	ddEmail.className = obj.id.toString();
	ddAddress.className = obj.id.toString();
	if (noPhone) { ddPhone.className = obj.id.toString(); }
	ddWebSite.className = obj.id.toString();

	dt2.appendChild(ddUserName);
	dt2.appendChild(ddEmail);
	dt2.appendChild(ddAddress);
	if (noPhone) { dt2.appendChild(ddPhone); }
	dt2.appendChild(ddWebSite);
	return dt2;
}
function noJSONAvail() {
	var userdata2 = 
	[
		{
			"id": 1,
			"name": "Leanne Graham",
			"username": "Bret",
			"email": "Sincere@april.biz",
			"address": {
				"street": "Kulas Light",
				"suite": "Apt. 556",
				"city": "Gwenborough",
				"zipcode": "92998­3874",
				"geo": {
					"lat": "­37.3159",
					"lng": "81.1496"
				}
			},
			"phone": "",
			"website": "hildegard.org",
			"company": {
				"name": "Romaguera­Crona",
				"catchPhrase": "Multi­layered client­server neural­net",
				"bs": "harness real­time e­markets"
			}
		},
		{
			"id": 2,
			"name": "Ervin Howell",
			"username": "Antonette",
			"email": "Shanna@melissa.tv",
			"address": {
				"street": "Victor Plains",
				"suite": "Suite 879",
				"city": "Wisokyburgh",
				"zipcode": "90566­7771",
				"geo": {
					"lat": "­43.9509",
					"lng": "­34.4618"
				}
			},
			"phone": "010­692­6593 x09125",
			"website": "anastasia.net",
			"company": {
				"name": "Deckow­Crist",
				"catchPhrase": "Proactive didactic contingency",
				"bs": "synergize scalable supply­chains"
			}
		},
		{
			"id": 3,
			"name": "Clementine Bauch",
			"username": "Samantha",
			"email": "Nathan@yesenia.net",
			"address": {
				"street": "Douglas Extension",
				"suite": "Suite 847",
				"city": "McKenziehaven",
				"zipcode": "59590­4157",
				"geo": {
					"lat": "­68.6102",
					"lng": "­47.0653"
				}
			},
			"phone": "",
			"website": "ramiro.info",
			"company": {
				"name": "Romaguera­Jacobson",
				"catchPhrase": "Face to face bifurcated interface",
				"bs": "e­enable strategic applications"
			}
		},
		{
			"id": 4,
			"name": "Patricia Lebsack",
			"username": "Karianne",
			"email": "Julianne.OConner@kory.org",
			"address": {
				"street": "Hoeger Mall",
				"suite": "Apt. 692",
				"city": "South Elvis",
				"zipcode": "53919­4257",
				"geo": {
					"lat": "29.4572",
					"lng": "­164.2990"
				}
			},
			"phone": "493­170­9623 x156",
			"website": "kale.biz",
			"company": {
				"name": "Robel­Corkery",
				"catchPhrase": "Multi­tiered zero tolerance productivity",
				"bs": "transition cutting­edge web services"
			}
		},
		{
			"id": 5,
			"name": "Chelsey Dietrich",
			"username": "Kamren",
			"email": "Lucio_Hettinger@annie.ca",
			"address": {
				"street": "Skiles Walks",
				"suite": "Suite 351",
				"city": "Roscoeview",
				"zipcode": "33263",
				"geo": {
					"lat": "­31.8129",
					"lng": "62.5342"
				}
			},
			"phone": "(254)954­1289",
			"website": "demarco.info",
			"company": {
				"name": "Keebler LLC",
				"catchPhrase": "User­centric fault­tolerant solution",
				"bs": "revolutionize end­to­end systems"
			}
		},
		{
			"id": 6,
			"name": "Mrs. Dennis Schulist",
			"username": "Leopoldo_Corkery",
			"email": "Karley_Dach@jasper.info",
			"address": {
				"street": "Norberto Crossing",
				"suite": "Apt. 950",
				"city": "South Christy",
				"zipcode": "23505­1337",
				"geo": {
					"lat": "­71.4197",
					"lng": "71.7478"
				}
			},
			"phone": "",
			"website": "ola.org",
			"company": {
				"name": "Considine­Lockman",
				"catchPhrase": "Synchronised bottom­line interface",
				"bs": "e­enable innovative applications"
			}
		},
		{
			"id": 7,
			"name": "Kurtis Weissnat",
			"username": "Elwyn.Skiles",
			"email": "Telly.Hoeger@billy.biz",
			"address": {
				"street": "Rex Trail",
				"suite": "Suite 280",
				"city": "Howemouth",
				"zipcode": "58804­1099",
				"geo": {
					"lat": "24.8918",
					"lng": "21.8984"
				}
			},
			"phone": "210.067.6132",
			"website": "elvis.io",
			"company": {
				"name": "Johns Group",
				"catchPhrase": "Configurable multimedia task­force",
				"bs": "generate enterprise e­tailers"
			}
		},
		{
			"id": 8,
			"name": "Nicholas Runolfsdottir V",
			"username": "Maxime_Nienow",
			"email": "Sherwood@rosamond.me",
			"address": {
				"street": "Ellsworth Summit",
				"suite": "Suite 729",
				"city": "Aliyaview",
				"zipcode": "45169",
				"geo": {
					"lat": "­14.3990",
					"lng": "­120.7677"
				}
			},
			"phone": "586.493.6943 x140",
			"website": "jacynthe.com",
			"company": {
				"name": "Abernathy Group",
				"catchPhrase": "Implemented secondary concept",
				"bs": "e­enable extensible e­tailers"
			}
		},
		{
			"id": 9,
			"name": "Glenna Reichert",
			"username": "Delphine",
			"email": "Chaim_McDermott@dana.io",
			"address": {
				"street": "Dayna Park",
				"suite": "Suite 449",
				"city": "Bartholomebury",
				"zipcode": "76495­3109",
				"geo": {
					"lat": "24.6463",
					"lng": "­168.8889"
				}
			},
			"phone": "(775)976­6794 x41206",
			"website": "conrad.com",
			"company": {
				"name": "Yost and Sons",
				"catchPhrase": "Switchable contextually­based project",
				"bs": "aggregate real­time technologies"
			}
		}
	];
	return userdata2;
}