var fcheck = false;
var addresscheck = false;
var caddresscheck = false;
var emailcheck = false;
var phonecheck = false;
var passcheck = false;
var cpasscheck = false;
var passmatch = false;



// Validating Phone Number according to India



$("#fname").blur(function() {
	var firstname_reg = /[a-zA-Z].{3,}/; //var addr_valid = /{10,}/;
	var firstname = $("#fname").val();
	if (firstname == "" && !firstname_reg.test(firstname)) {
		fcheck = false;
		register();
		alert("First Name Should be filled and Should be valid");


	} else {

		fcheck = true;
		register();
	}



});

$("#adds").blur(function() {

	var text = $("#adds").val();
	if (text == "") {
		addresscheck = false;
		register();
		alert("Please fill Address");


	} else {

		addresscheck = true;
		register();
	}

});

$("#cadd").blur(function() {
	var cadd = $("#cadd").val();
	if (cadd == "") {
		caddresscheck = false;
		register();
		alert("Please fill Current Address");


	} else {
		caddresscheck = true;
		register();
	}

});
$("#email").blur(function() {
	var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	var email = $("#email").val();
	if (email == "" && !mailformat.test(email)) {
		emailcheck = false;
		register();
		alert("Please Enter valid email");

	} else {

		emailcheck = true;
		register();
	}

});


$("#phone").blur(function() {

	var mobile_reg = /^(\+91|\+91-|0)?\d{10}$/;
	var phone = $("#phone").val();
	if (phone == "" && !mobile_reg.test(phone)) {
		phonecheck = false;
		register();
		alert("Please fill  valid Phone Number");


	} else {
		phonecheck = true;
		register();
	}
});

$("#pass").blur(function() {
	var reg_password = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])*\w{8,}/;
	var pass = $("#pass").val();
	if (pass == "" && !reg_password.test(pass)) {
		passcheck = false;
		register();
		alert("Please Enter Valid Password");

	} else {


		passcheck = true;
		cpasscheck = true;
		register();
	}



});

$("#cpass").blur(function() {
	var pass = $("#pass").val();
	var cpass = $("#cpass").val();
	if (cpass == "" && pass != cpass) {
		passmatch = false;
		register();
		alert("Password Not Matched");


	} else {

		passmatch = true;
		register();

	}



});



function register() {


	if (fcheck && addresscheck && caddresscheck && emailcheck && passcheck && phonecheck && cpasscheck && passmatch) {

		$("#btn").prop("disabled", false);
		$("#btn").css('color', 'green');

	} else {

		$("#btn").prop('disabled', true);
		$("#btn").css('color', 'black');
	}



}

$("#btn").click(function() {


	var firstname = $("#fname").val();
	var lasname = $("#lname").val();
	$("#parent-right").append("<button class='data'>" + firstname + " " + lasname + "</button>");

	alert("Registered");



});



$("#btn").click(function() {
	var div = $(".body_left_h");
	div.animate({
		width: '300px',
		opacity: '0.4'
	}, "slow");

});


$("#filladdress").on("change", function() {
	if (this.checked) {
		$("[id='cadd']").val($("[id='adds']").val());
		$("#cadd").attr('disabled', 'disabled');
		caddresscheck = addresscheck;
	} else {

		$("#cadd").removeAttr('disabled');


	}
});



$('#cpass').bind("cut copy paste", function(e) {
	e.preventDefault();
	alert("Paste Not Allowed");
});