import * as classes from './Contact.module.css'
import React, { useState } from 'react';
import { useRef } from 'react';
import { db } from '../firebase'
import 
	{ addDoc,
		collection} from 'firebase/firestore';
import { CLIENT_STATIC_FILES_RUNTIME_WEBPACK } from 'next/dist/shared/lib/constants';

export const GuestArtist = (props) => {

	const [ submitStatus, setSubmitStatus ] = useState();
	const [ error, setError ] = useState();

	const nameInputRef = useRef();
	const emailInputRef = useRef();
	const phoneInputRef = useRef();
	const websiteInputRef = useRef();
	const subjectInputRef = useRef();
	const startDateInputRef = useRef();
	const endDateInputRef = useRef();
	const messageInputRef = useRef();

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
					<label htmlFor='name'>Name</label>
					<input 
						type="text" 
						id="name" 
						name="name" 
						className={classes.smallInput}
						ref={nameInputRef} />
					<label htmlFor='email'>Email</label>
					<input 
						type="text" 
						id="email" 
						name="email" 
						className={classes.smallInput} 
						ref={emailInputRef} />
					<label htmlFor='phone'>Phone Number</label>
					<input 
						type="text" 
						id="phone" 
						name="phone" 
						className={classes.smallInput} 
						ref={phoneInputRef} />
					<label htmlFor='subject'>Subject</label>
					<input 
						type="text" 
						id="subject" 
						name="subject" 
						className={classes.subjectInput} 
						ref={subjectInputRef} />
					<label htmlFor='website'>Website/Instagram</label>
					<input 
						type="text" 
						id="website" 
						name="website" 
						className={classes.subjectInput} 
						ref={websiteInputRef} />
					<label htmlFor='startDate'>Requested Start Date</label>
					<input 
						type="date" 
						id="startDate" 
						name="startDate" 
						className={classes.dateInput} 
						ref={startDateInputRef} />
					<label htmlFor='endDate'>Requested End Date</label>
					<input 
						type="date" 
						id="endDate" 
						name="endDate" 
						className={classes.dateInput} 
						ref={endDateInputRef} />
					<label htmlFor='message'>Message</label>
					<input 
						type="text" 
						id="message" 
						name="message" 
						className={classes.messageField} 
						ref={messageInputRef}/>
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