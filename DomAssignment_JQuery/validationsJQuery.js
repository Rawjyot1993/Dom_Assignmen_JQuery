var firstname = document.forms["Registration_Form"]["firstname"].value;
var lastname = document.forms["Registration_Form"]["lastname"].value;
var paddress = document.forms["Registration_Form"]["paddress"].value;
var caddress = document.forms["Registration_Form"]["caddress"].value;
var email = document.forms["Registration_Form"]["email"].value;
var phone_no = document.forms["Registration_Form"]["ph_no"].value;
var password = document.forms["Registration_Form"]["password"].value;
var cpassword = document.forms["Registration_Form"]["cpassword"].value;
var firstname_reg = /[a-zA-Z].{3,}/; //var addr_valid = /{10,}/;
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var reg_password = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])*\w{8,}/;
var mobile_reg = /^(\+91|\+91-|0)?\d{10}$/; // Validating Phone Number according to India



function register() {



	if (firstname === "") {
		alert("Enter FirstName");
		return false;
	}
	if (!firstname_reg.test(firstname)) {
		alert("First Name is Invalid");
		return false;
	}
	if (paddress === "") {

		alert("Enter Parmanent Address");
		return false;
	}

	if (caddress === "") {

		alert("Enter Current Address");
		return false;
	}
	if (email === "") {
		alert("Enter Email");
		return false;

	}
	if (!mailformat.test(email)) {
		alert("Email Invalid");
		return false;
	}

	if (phone_no === "") {

		alert("Enter Phone Number");
		return false;
	}
	if (!mobile_reg.test(phone_no)) {
		alert("Enter Valid Phone Number");
		return false;

	}
	if (password === "") {
		alert("Enter Password");
		return false;
	}
	if (cpassword === "") {
		alert("Please Confirm Password");
		return false;
	}
	if (!reg_password.test(password)) {
		alert("Please Add Valid Password");
		return false;
	}
	if (password != cpassword) {
		alert("Password Not Same");
		return false;

	} else {


		var parentElement = document.getElementById("parent-right");
		var childElement = document.createElement("input");
		childElement.setAttribute("id", "child-button");
		childElement.setAttribute("title", email);
		childElement.setAttribute("value", firstname + " " + lastname);
		childElement.setAttribute("type", "button");
		childElement.setAttribute("class", "inputedit");
		parentElement.appendChild(childElement);


		var frm = document.getElementsByClassName("Registration_Form");
		frm.reset();
		alert("Registered");

	}



}


function fillAddress(f) {

	if (f.checkboxtype.checked == true) {

		f.caddress.value = f.paddress.value;
		document.getElementById("cadd").disabled = true;

	}
	if (f.checkboxtype.checked == false) {

		document.getElementById("cadd").disabled = false;

	}



}


function firstname() {

	if (firstname === "") {
		alert("Enter FirstName");
		return false;
	}

}

function p_address() {

	if (paddress === "") {

		alert("Enter Parmanent Address");
		return false;
	}

}

function c_address() {

	if (caddress === "") {

		alert("Enter Current Address");
		return false;
	}

}

function email() {


	if (email === "") {
		alert("Enter Email");
		return false;

	}


}


function phone() {

	if (phone_no === "") {

		alert("Enter Phone Number");


	}

}

function e_password() {


	if (password === "") {
		alert("Enter Password");
		return false;
	}

}

function e_password() {
	if (cpassword === "") {
		alert("Please Confirm Password");
		return false;
	}

}



window.onclick = function(event) {
	if (!event.target.matches('.dropbtn')) {

		var dropdowns = document.getElementsByClassName("dropdown-content");
		var i;
		for (i = 0; i < dropdowns.length; i++) {
			var openDropdown = dropdowns[i];
			if (openDropdown.classList.contains('show')) {
				openDropdown.classList.remove('show');
			}
		}
	}
}



window.onload = function() {
	var copy = document.getElementById("pass");
	copy.oncopy = function(e) {
		alert("Copy Not Allowed");
		e.preventDefault();
	}

}


window.onload = function() {
	var input = document.getElementById("cpass");
	input.onpaste = function(e) {
		alert("Paste Not Allowed");
		e.preventDefault();
	}

}

function mydropdownlanguage() {
	document.getElementById("droplist2").classList.toggle("show");
}



function mydropdownprofile() {
	document.getElementById("droplist").classList.toggle("show");
}