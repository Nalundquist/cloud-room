import * as classes from './Contact.module.css'
import React, { useState } from 'react';

export const Contact = () => {

	const [ submitStatus, setSubmitStatus ] = useState();
	const [ error, setError ] = useState();

	const handleFormSubmission = async (e) => {
		e.preventDefault();
		setSubmitStatus("Sending")
		const {name, email, subject, message} = e.target.elements;
		let details = {
			name: name.value,
			email: email.value,
			subject: subject.value, 
			message: message.value
		};
		let response = await fetch("http://localhost:5000/contact", {
			method: "POST",
			headers: {
				"Content-Type": "application/json;charset=utf-8"
			},
			body: JSON.stringify(details)
		});
		setSubmitStatus("Submit");
		let result = await response.json();
		setError(result.status);
	}
	return(
		<div className={classes.contactFormContainer}>
			<form onSubmit={handleFormSubmission}>
				<div className={classes.contactForm}>
					
				</div>
			</form>

		</div>
	)
}