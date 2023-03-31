import * as classes from './Contact.module.css'
import React, { useState } from 'react';

export const Contact = (props) => {

	const [ submitStatus, setSubmitStatus ] = useState();
	const [ error, setError ] = useState();

	const { setOverlayVisible } = props;

	const handleFormSubmission = async (e) => {
		e.preventDefault();
		setSubmitStatus("Sending")
		const {name, email, phone, subject, message} = e.target.elements;
		let details = {
			name: name.value,
			email: email.value,
			phone: phone.value,
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
				<div className={classes.formHeader}>
					<p>Put a message and any relevant contact info into the form below and we'll get back to you as soon as possible</p>
					<p>- Cloud Room</p>
				</div>
				<div className={classes.contactForm}>
					<p>Name</p>
					<input type="text" name="name" className={classes.smallInput} />
					<p>Email</p>
					<input type="text" name="email" className={classes.smallInput} />
					<p>Phone Number</p>
					<input type="text" name="phone" className={classes.smallInput} />
					<p>Subject</p>
					<input type="text" name="subject" className={classes.subjectInput} />
					<p>Message</p>
					<input type="text" name="message" className={classes.messageField} />
					<div className={classes.bottomButtons}>
						<button className={classes.submitButton} type='submit'>
							Send
						</button>
						<button className={classes.returnButton} onClick={() => {setOverlayVisible()}} >
							Home
						</button>
					</div>
				</div>
			</form>
		</div>
	)
}