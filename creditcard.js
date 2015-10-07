$(document).ready(function(){
	Parse.initialize("UH7MO8P4clCNUjUy0o33gZ7X8NzbXoMc044QkSw9", "QNcLaUAUmLrrmD0sYhqhLcZ9t97tMLr4w3egSvWs");
	setUpPage();
	var firstName = "";
	var middleName = "";
	var lastName = "";
	var suffix = "Suffix (Optional)";
	var streetAddress = "";
	var aptNumber = "";
	var address = "";
	var city = "";
	var states = "Please Select";
	var zip = "";
	var monthDOB = "01";
	var dayDOB = "01";
	var yearDOB = "1900";
	var dateOfBirth = monthDOB + "/" + dayDOB + "/" + yearDOB;
	var employmentStatus = "Please Select";;
	var income = "";
	var fullIncome = "";
	var rent = "";
	var fullRent = "";
	var job = "Please Select";
	var employerName = "";
	var yearsEmployment = "";
	var businessPhone = "";
	var education = "Please Select";
	var home = "Please Select";
	var residenceNumber = "";
	var residenceUnit = "Years";
	var yesBank = false;
	var noBank = true;
	document.getElementById("noBank").checked = true;
	var yesSavings = false;
	var noSavings = true;
	document.getElementById("noSavings").checked = true;
	var bank = false;
	var savings = false;


	$('#firstName').on("change", function () {
		$( ".firstName" ).removeClass( "has-error" );
		firstName = document.getElementById("firstName").value;
		var element = document.getElementById("addressHeader");
		element.innerHTML = "Hi " + firstName + "!";
		var element2 = document.getElementById("experienceHeader");
		element2.innerHTML = "Thanks " + firstName + "!";
	});
	$('#middleName').on("change", function () {
		if (checkAlphaNumeric(middleName) && notEmpty(middleName)) {
			middleName = document.getElementById("middleName").value;
		}
	});
	$('#lastName').on("change", function () {
		$( ".lastName" ).removeClass( "has-error" );
		lastName = document.getElementById("lastName").value;
	});	
	$('#suffix').on("change", function () {
		suffix = document.getElementById("suffix").value;
	});
	$('#streetAddress').on("change", function () {
		$( ".streetAddress" ).removeClass( "has-error" );
		streetAddress = document.getElementById("streetAddress").value;
		address = streetAddress + " " + aptNumber;
	});	
	$('#aptNumber').on("change", function () {
		aptNumber = document.getElementById("aptNumber").value;
		address = streetAddress + " " + aptNumber;
	});	
	$('#city').on("change", function () {
		$( ".city" ).removeClass( "has-error" );
		city = document.getElementById("city").value;
	});	
	$('#states').on("change", function () {
		$( ".states" ).removeClass( "has-error" );
		states = document.getElementById("states").value;
	});	
	$('#zip').on("change", function () {
		$( ".zip" ).removeClass( "has-error" );
		zip = document.getElementById("zip").value;
	});	
	$('#monthDOB').on("change", function () {
		monthDOB = document.getElementById("monthDOB").value;
		dateOfBirth = monthDOB + "/" + dayDOB + "/" + yearDOB;
	});	
	$('#dayDOB').on("change", function () {
		dayDOB = document.getElementById("dayDOB").value;
		dateOfBirth = monthDOB + "/" + dayDOB + "/" + yearDOB;
	});	
	$('#yearDOB').on("change", function () {
		yearDOB = document.getElementById("yearDOB").value;
		dateOfBirth = monthDOB + "/" + dayDOB + "/" + yearDOB;
	});	
	$('#employmentStatus').on("change", function () {
		$( ".employmentStatus" ).removeClass( "has-error" );
		employmentStatus = document.getElementById("employmentStatus").value;
	});	
	$('#income').on("change", function () {
		$( ".income" ).removeClass( "has-error" );
		income = document.getElementById("income").value
		fullIncome = document.getElementById("income").value  + ".00";
	});	
	$('#rent').on("change", function () {
		$( ".rent" ).removeClass( "has-error" );
		rent = document.getElementById("rent").value
		fullRent = document.getElementById("rent").value  + ".00";
	});	
	$('#job').on("change", function () {
		$( ".job" ).removeClass( "has-error" );
		job = document.getElementById("job").value;
	});	
	$('#employerName').on("change", function () {
		$( ".employerName" ).removeClass( "has-error" );
		employerName = document.getElementById("employerName").value;
	});
	$('#yearsEmployment').on("change", function () {
		yearsEmployment = document.getElementById("yearsEmployment").value;
	});
	$('#businessPhone').on("change", function () {
		if(notEmpty(businessPhone) && realNumber(businessPhone)) {
			businessPhone = document.getElementById("businessPhone").value;
		}
	});
	$('#education').on("change", function () {
		$( ".education" ).removeClass( "has-error" );
		education = document.getElementById("education").value;
	});
	$('#home').on("change", function () {
		$( ".home" ).removeClass( "has-error" );
		home = document.getElementById("home").value;
	});
	$('#residenceNumber').on("change", function () {
		$( ".residenceNumber" ).removeClass( "has-error" );
		residenceNumber = document.getElementById("residenceNumber").value;
	});
	$('#residenceUnit').on("change", function () {
		residenceUnit = document.getElementById("residenceUnit").value;
	});
	$('#yesBank').on("change", function () {
		yesBank = document.getElementById("yesBank").checked;
		noBank = document.getElementById("noBank").checked;
		if(yesBank) {
			bank = true;
		} else if(noBank) {
			bank = false
		}
	});
	$('#noBank').on("change", function () {
		yesBank = document.getElementById("yesBank").checked;
		noBank = document.getElementById("noBank").checked;
		if(yesBank) {
			bank = true;
		} else if(noBank) {
			bank = false
		}
	});
	$('#yesSavings').on("change", function () {
		yesSavings = document.getElementById("yesSavings").checked;
		noSavings = document.getElementById("noSavings").checked;
		if(yesSavings) {
			savings = true;
		} else if(noSavings) {
			savings = false
		}
	});
	$('#noSavings').on("change", function () {
		yesSavings = document.getElementById("yesSavings").checked;
		noSavings = document.getElementById("noSavings").checked;
		if(yesSavings) {
			savings = true;
		} else if(noSavings) {
			savings = false
		}
	});




	$(".submitBtn").click(function(){
		var error = new Array(15).fill(0);
		if( !(checkAlphaNumeric(firstName) && notEmpty(firstName)) ) {
			error[0] = "firstName";
		} else {error[0] = 0;}
		if( !(checkAlphaNumeric(lastName) && notEmpty(lastName)) ) {
			error[1] = "lastName";
		} else {error[1] = 0;}
		if( !(notEmpty(streetAddress)) ) {
			error[2] = "streetAddress";
		} else {error[2] = 0;}
		if( !(checkAlphaNumeric(city) && notEmpty(city)) ) {
			error[3] = "city";
		} else {error[3] = 0;}
		if( !(notEmpty(zip) && zip.length == 5 && realNumber(zip)) ) {
			error[4] = "zip";
		} else {error[4] = 0;}
		if( !(states != "Please Select") ) {
			error[5] = "states";
		} else {error[5] = 0;}
		if( !(notEmpty(income) && realNumber(income)) ) {
			error[6] = "income";
		} else {error[6] = 0;}
		if( !(notEmpty(rent) && realNumber(rent)) ) {
			error[7] = "rent";
		} else {error[7] = 0;}
		if( !(employmentStatus != "Please Select") ) {
			error[8] = "employmentStatus";
		} else {error[8] = 0;}
		if( !(job != "Please Select") ) {
			error[9] = "job";
		} else {error[9] = 0;}
		if( !(notEmpty(employerName)) ) {
			error[10] = "employerName";
		} else {error[10] = 0;}
		if( !(notEmpty(yearsEmployment) && realNumber(yearsEmployment)) ) {
			error[11] = "yearsEmployment";
		} else {error[11] = 0;}
		if( !(education != "Please Select") ) {
			error[12] = "education";
		} else {error[12] = 0;}
		if( !(home != "Please Select") ) {
			error[13] = "home";
		} else {error[13] = 0;}
		if( !(notEmpty(residenceNumber) && realNumber(residenceNumber))  ) {
			error[14] = "residenceNumber";
		} else {error[14] = 0;}
		console.log(error);
		checkError(error);

		// if(checkAlphaNumeric(firstName) && notEmpty(firstName) &&
		// 	checkAlphaNumeric(lastName) && notEmpty(lastName) &&
		// 	notEmpty(streetAddress) &&
		// 	checkAlphaNumeric(city) && notEmpty(city) &&
		// 	notEmpty(zip) && zip.length == 5 && realNumber(zip) &&
		// 	states != "Please Select" &&
		// 	notEmpty(income) && realNumber(income) &&
		// 	notEmpty(rent) && realNumber(rent) &&
		// 	employmentStatus != "Please Select" &&
		// 	job != "Please Select" &&
		// 	notEmpty(employerName) &&
		// 	notEmpty(yearsEmployment) && realNumber(yearsEmployment) &&
		// 	education != "Please Select" &&
		// 	home != "Please Select" &&
		// 	notEmpty(residenceNumber) && realNumber(residenceNumber)) 
		// {
		// 	if(suffix == "Suffix (Optional)") {suffix = "";}
		// 	if(businessPhone.length != 10) {businessPhone = "";}
		// 	console.log("passed tests");
		// } else {
		// 	console.log("fill out more");
		// }
		// 	console.log("entered correctly")
		// } else {
		// 	console.log("entered bad")
		// }
		// if($('#checkbox').is(":checked")) {
		// 	event.preventDefault();
		// 	submit(email, password);
		// } else {
		// 	alert("check the box");
		// }
	});

});



// function submit(email, password) {

// 	var PersonApplication = Parse.Object.extend("PersonApplication");
// 	var personApplication = new PersonApplication();

// 	personApplication.set("firstName", firstName);
// 	personApplication.set("middleName", middleName);
// 	personApplication.set("lastName", lastName);
// 	personApplication.set("suffix", suffix);

// 	personApplication.save(null, {
// 		success: function(personApplication) {
// 		// Execute any logic that should take place after the object is saved.
// 		location.reload();
// 		// alert('New object created with objectId: ' + personAccount.id);

// 	},
// 	error: function(personApplication, error) {
// 		// Execute any logic that should take place if the save fails.
// 		// error is a Parse.Error with an error code and message.
// 		location.reload();
// 		// alert('Failed to create new object, with error code: ' + error.message);
// 		}
// 	});	
// }











function setUpPage() {
	$(function () {
	  $('[data-toggle="popover"]').popover()
	})
	var housingOp = [
		"Please Select",
		"Own home",
		"Rent",
		"Other"
	]
	var profession = [
		"Please Select",
		"Agriculture",
		"Art/Design/Media Entertainment",
		"Attorney/Judge",
		"Construction/Mining/Oil",
		"Doctor/Dentist/Pharmacist",
		"Education",
		"Executive Professional",
		"Finance/Banking/Accounting",
		"Government (Local/St/Fed)",
		"Nurse/Health Provider/Svcs",
		"IT",
		"Maint/Cleaning/Other Labor",
		"Management Professional",
		"Office/Administrative",
		"Police/Fire/Military",
		"Production/Manufacturing",
		"Restaurant/Food Service",
		"Sales/Insurance/Realty",
		"Hospitality/Travel/Other Svc",
		"Scientist/Engineer",
		"Trade (Plumber, Electrician)",
		"Transportation/Trucking",
		"Other"
	]
	var highestEducation = [
		"Please Select",
		"Less than a high school diploma",
		"High school diploma or GED",
		"Some college or associate degree",
		"Bachelor's Degree",
		"Advanced/Graduate Degree"
	]
	var ending= [
		"Suffix (Optional)",
		"JR",
		"SR",
		"II",
		"III",
		"IV",
		"V"
	]
	var employment = [
		"Please Select",
		"Employed Full-Time",
		"Employed Part-Time",
		"Self-Employed",
		"Unemployed",
		"Retired",
		"Student",
		"Other"
	]
	var stateNames= [
		"Please Select",
		"Alabama",
		"Alaska",
		"Arizona",
		"Arkansas",
		"California",
		"Colorado",
		"Connecticut",
		"Delaware",
		"Florida",
		"Georgia",
		"Hawaii",
		"Idaho",
		"Illinois",
		"Indiana",
		"Iowa",
		"Kansas",
		"Kentucky",
		"Louisiana",
		"Maine",
		"Maryland",
		"Massachusetts",
		"Michigan",
		"Minnesota",
		"Mississippi",
		"Missouri",
		"Montana",
		"Nebraska",
		"Nevada",
		"New Hampshire",
		"New Jersey",
		"New Mexico",
		"New York",
		"North Carolina",
		"North Dakota",
		"Ohio",
		"Oklahoma",
		"Oregon",
		"Pennsylvania",
		"Rhode Island",
		"South Carolina",
		"South Dakota",
		"Tennessee",
		"Texas",
		"Utah",
		"Vermont",
		"Virginia",
		"Washington",
		"West Virginia",
		"Wisconsin",
		"Wyoming"
	];
	var monthInput = [
		"01","02","03","04","05","06","07","08","09","10","11","12"
	];
	var dayInput = [
		"01","02","03","04","05","06","07","08","09"
	];
	var yearInput = [];
	var j;
	for (var i=9; i<31; i++) {
		j = i+1;
		dayInput[i] = j.toString();
	}
	j=2016;
	for (var i=0;i<117;i++){
		yearInput[i] = j;
		j--;
	}


	setDropdown(ending, "suffix");
	setDropdown(stateNames, "states");
	setDropdown(employment, "employmentStatus");
	setDropdown(profession, "job");
	setDropdown(highestEducation, "education");
	setDropdown(housingOp, "home");
	setDropdown(monthInput, "monthDOB");
	setDropdown(dayInput, "dayDOB");
	setDropdown(yearInput, "yearDOB");

}

function checkAlphaNumeric(input) {
	if (/[^a-zA-Z\s]/.test(input)){
		return false;
	}
	return true;
}
function realNumber(input){
	if (/[0-9]/.test(input) && input.indexOf('-') === -1 && input % 1 == 0){
		return true;
	}
	return false;
}
function notEmpty(input) {
	if (input == "") {
		return false;
	}
	return true;
}


function setDropdown(array, name) {
	for(var i=0;i<array.length;i++){
		$('#' + name).append($('<option></option>').val(array[i]).html(array[i]));
	}
}


function checkError(errArr) {
	for (var i=0; i<errArr.length; i++) {
		if(errArr[i] != 0){
			$( "." + errArr[i] ).addClass( "has-error" );
		}
	}
}

