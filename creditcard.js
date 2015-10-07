$(document).ready(function(){
	Parse.initialize("UH7MO8P4clCNUjUy0o33gZ7X8NzbXoMc044QkSw9", "QNcLaUAUmLrrmD0sYhqhLcZ9t97tMLr4w3egSvWs");
	setUpPage();

	$('#firstName').on("change", function () {
		firstName = document.getElementById("firstName").value;
		var element = document.getElementById("addressHeader");
		element.innerHTML = "Hi " + firstName + "!";
		var element2 = document.getElementById("experienceHeader");
		element2.innerHTML = "Thanks " + firstName + "!";
	});
	$('#middleName').on("change", function () {
		middleName = document.getElementById("middleName").value;
	});
	$('#lastName').on("change", function () {
		lastName = document.getElementById("lastName").value;
	});	
	$('#suffix').on("change", function () {
		suffix = document.getElementById("suffix").value;
	});


	$('#streetAddress').on("change", function () {
		streetAddress = document.getElementById("streetAddress").value;
		address = streetAddress + " " + aptNumber;
	});	
	$('#aptNumber').on("change", function () {
		aptNumber = document.getElementById("aptNumber").value;
		address = streetAddress + " " + aptNumber;
	});	
	$('#city').on("change", function () {
		city = document.getElementById("city").value;
	});	
	$('#states').on("change", function () {
		states = document.getElementById("states").value;
	});	
	$('#zip').on("change", function () {
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
		employmentStatus = document.getElementById("employmentStatus").value;
	});	
	$('#income').on("change", function () {
		income = document.getElementById("income").value  + ".00";
	});	
	$('#rent').on("change", function () {
		rent = document.getElementById("rent").value  + ".00";
	});	


	$('#job').on("change", function () {
		job = document.getElementById("job").value;
	});	
	$('#employerName').on("change", function () {
		employerName = document.getElementById("employerName").value;
	});
	$('#yearsEmployment').on("change", function () {
		yearsEmployment = document.getElementById("yearsEmployment").value;
	});
	$('#businessPhone').on("change", function () {
		businessPhone = document.getElementById("businessPhone").value;
	});
	$('#businessPhone').on("change", function () {
		education = document.getElementById("education").value;
	});
	$('#home').on("change", function () {
		home = document.getElementById("home").value;
	});
	$('#residenceNumber').on("change", function () {
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
		// if($('#checkbox').is(":checked")) {
		// 	event.preventDefault();
		// 	submit(email, password);
		// } else {
		// 	alert("check the box");
		// }
	});

});



function submit(email, password) {

	var PersonApplication = Parse.Object.extend("PersonApplication");
	var personApplication = new PersonApplication();

	personApplication.set("firstName", firstName);
	personApplication.set("middleName", middleName);
	personApplication.set("lastName", lastName);
	personApplication.set("suffix", suffix);

	personApplication.save(null, {
		success: function(personApplication) {
		// Execute any logic that should take place after the object is saved.
		location.reload();
		// alert('New object created with objectId: ' + personAccount.id);

	},
	error: function(personApplication, error) {
		// Execute any logic that should take place if the save fails.
		// error is a Parse.Error with an error code and message.
		location.reload();
		// alert('Failed to create new object, with error code: ' + error.message);
		}
	});	
}











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

	setDropdown(ending, "suffix");
	setDropdown(stateNames, "states");
	setDropdown(employment, "employmentStatus");
	setDropdown(profession, "job");
	setDropdown(highestEducation, "education");
	setDropdown(housingOp, "home");

	var firstName = 0;
	var middleName = 0;
	var lastName = 0;
	var suffix = 0;
	var streetAddress = 0;
	var aptNumber = 0;
	var address = 0;
	var city = 0;
	var states = 0;
	var zip = 0;
	var monthDOB = 0;
	var dayDOB = 0;
	var yearDOB = 0;
	var employmentStatus = 0;
	var income = 0;
	var rent = 0;
	var dateOfBirth = monthDOB + "/" + dayDOB + "/" + yearDOB;
	var job = 0;
	var employerName = 0;
	var yearsEmployment = 0;
	var businessPhone = 0;
	var education = 0;
	var home = 0;
	var residenceNumber = 0;
	var residenceUnit = "Years";
	var yesBank = false;
	var noBank = false;
	var yesSavings = false;
	var noSavings = false;
	var bank = null;
	var savings = null;
}

function validate() {

}



function setDropdown(array, name) {
	for(var i=0;i<array.length;i++){
		$('#' + name).append($('<option></option>').val(array[i]).html(array[i]));
	}
}


