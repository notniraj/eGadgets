//  Javascript Code


// About us slide Functionality Part............................
var slideIndex = 1;
displaySlides(slideIndex);

function plusSlide(n)
{
	displaySlides(slideIndex = slideIndex + n);
}

function displaySlides(n)
{
	var i;
	var x = document.getElementsByClassName("slide");

	if (n > x.length)
	{
		slideIndex = 1;
	}

	if (n < 1) 
	{
		slideIndex = x.length;
	}

	for (i = 0; i < x.length; i++)
	{
		x[i].style.display = "none";
	}

	x[slideIndex - 1].style.display = "block";
}

// About us slide Functionality Part End............................

// Contact form validation function

function validateForm() {

	// Accessing elements

	var name = document.forms["contact-form"]["name"].value;
	var email = document.forms["contact-form"]["email"].value;
	var subject = document.forms["contact-form"]["subject"].value;
	var message = document.forms["contact-form"]["message"].value;

	// Checking if the input fields are Empty

	if (name == "" || email == "" || subject == "" || message == ""){
		alert("Empty fields found. Please fill the required fields.");
	}	
	else {
		alert("Thank you for the message. We'll get back to you soon.");
	}
}

