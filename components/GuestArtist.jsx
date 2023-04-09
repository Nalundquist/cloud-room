import * as classes from './Contact.module.css'
import React, { useState } from 'react';
import { db } from '../firebase'
import 
	{ addDoc,
		collection} from 'firebase/firestore';

export const GuestArtist = (props) => {

	const [ submitStatus, setSubmitStatus ] = useState();
	const [ error, setError ] = useState();

	const { setOverlayVisible } = props;

	const handleAddArtist = async (e) => {
		e.preventDefault();
		setSubmitStatus("Sending")
		const 
			{name,
			email, 
			phone, 
			website,
			subject, 
			startDate,
			endDate,
			message} = e.target.elements;
		let artistRequest = {
			name: name.value,
			email: email.value,
			phone: phone.value,
			website: website.value,
			subject: subject.value,
			startDate: startDate.value,
			endDate: endDate.value,
			message: message.value,
			accepted: "pending"
		};
		await addDoc(collection(db, "GuestArtists"), artistRequest)
		console.log("handleAddArtist")
		setSubmitStatus("Submit");
	}

	return(
		<div className={classes.contactFormContainer}>
			<form onSubmit={handleAddArtist}>
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
					<p>Website/Instagram</p>
					<input type="text" name="website" className={classes.subjectInput} />
					<p>Requested Start Date</p>
					<input type="date" name="startDate" className={classes.dateInput} />
					<p>Requested End Date</p>
					<input type="date" name="endDate" className={classes.dateInput} />
					<p>Message</p>
					<input type="text" name="message" className={classes.messageField} />
					<div className={classes.bottomButtons}>
						<button className={classes.submitButton} onClick={() => {handleAddArtist(event)}} type='submit'>
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