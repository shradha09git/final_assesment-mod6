let globalIsSubmitted = false 

function validate(isSubmitted = false) {
	let firstName = document.getElementById('first-name').value
	let lastName = document.getElementById('last-name').value
	let email = document.getElementById('email').value
	let city = document.getElementById('city').value
	let country = document.getElementById('country').value
	let phone_no = document.getElementById('phone_no').value
    let gender1 = document.getElementById('male').checked
    let gender2 = document.getElementById('female').checked
    let gender3 = document.getElementById('others').checked
	let tnC = document.getElementById('t-and-c').checked
	let error = false

	if(isSubmitted) {``
		globalIsSubmitted = true
	}

	if(globalIsSubmitted) {
		if(firstName.length >= 3) {
			document.getElementById('first-name-valid').style.display = 'block'
			document.getElementById('first-name-invalid').style.display = 'none'
		} else {
			document.getElementById('first-name-invalid').style.display = 'block'
			document.getElementById('first-name-valid').style.display = 'none'
			error = true
		}

		if(lastName.length >= 3) {
			document.getElementById('last-name-valid').style.display = 'block'
			document.getElementById('last-name-invalid').style.display = 'none'
		} else {
			document.getElementById('last-name-invalid').style.display = 'block'
			document.getElementById('last-name-valid').style.display = 'none'
			error = true
		}

		if (
			email.includes("@") &&
			email.includes(".") &&
			email.indexOf("@") != 0 &&
			email.length - email.lastIndexOf(".") >= 3
		) {
			document.getElementById("email-valid").style.display = "block";
			document.getElementById("email-invalid").style.display = "none";
		} else {
			document.getElementById("email-invalid").style.display = "block";
			document.getElementById("email-valid").style.display = "none";
			error = true
		}

		if(city.length >= 3) {
			document.getElementById('city-valid').style.display = 'block'
			document.getElementById('city-invalid').style.display = 'none'
		} else {
			document.getElementById('city-invalid').style.display = 'block'
			document.getElementById('city-valid').style.display = 'none'
			error = true
		}

		if(country != 'None') {
			document.getElementById('country-valid').style.display = 'block'
			document.getElementById('country-invalid').style.display = 'none'
		} else {
			document.getElementById('country-invalid').style.display = 'block'
			document.getElementById('country-valid').style.display = 'none'
			error = true
		}

		let phone_noNumber = parseInt(phone_no)
		if(phone_no.length === 10 && !isNaN(phone_noNumber)) {
			document.getElementById('phone_no-valid').style.display = 'block'
			document.getElementById('phone_no-invalid').style.display = 'none'
		} else {
			document.getElementById('phone_no-invalid').style.display = 'block'
			document.getElementById('phone_no-valid').style.display = 'none'
			error = true
		}

        if(gender1 || gender2 || gender3) {
			document.getElementById('gender-valid').style.display = 'block'
			document.getElementById('gender-invalid').style.display = 'none'
		} else {
			document.getElementById('gender-invalid').style.display = 'block'
			document.getElementById('gender-valid').style.display = 'none'
			error = true
		}

		if(tnC) {
			document.getElementById('t-and-c-invalid').style.display = 'none'
		} else {
			document.getElementById('t-and-c-invalid').style.display = 'block'
			error = true
		}

		if(!error && isSubmitted) {
			alert('Your details have been saved successfully!')

			document.getElementById('registration-form').reset()

			let validFeedbacks = document.getElementsByClassName('valid-feedback')
			for(let i = 0; i < validFeedbacks.length; i++) {
				validFeedbacks[i].style.display = 'none'
			}
			let invalidFeedbacks = document.getElementsByClassName('invalid-feedback')
			for(let i = 0; i < invalidFeedbacks.length; i++) {
				invalidFeedbacks[i].style.display = 'none'
			}
		}
	}
}
