import * as classes from "./Artists.module.css";
import { Footer } from "./Footer";
import { Contact } from "./Contact";
import { GuestArtist } from "./GuestArtist";
import { useState } from "react"

export const Artists = (props) => {
	
	const { mobileVersion } = props;

	const [ overlayVisible, setOverlayVisible ] = useState(null); 

	const handleFormDisplay = (formName) => {
		const generalContact = 
			<div className={classes.formContainer}>
				<Contact />
			</div>
		const guestArtistContact = 
			<div className={classes.formContainer}>
				<GuestArtist />
			</div>
		
		if (formName == "generalContact"){
			setOverlayVisible(generalContact);
		} else if (formName == "guestArtistContact"){
			setOverlayVisible(guestArtistContact);
		} else { 
			setOverlayVisible(); 
		}
	}

	return(
		<div>
			<div className={classes.artistColumn}>
				<div className={classes.artistRow}>
					<div className={classes.artistCard}>
						<p className={classes.artistFont}>Freak Body</p>
					</div>
					<div className={classes.artistCard}>
						<p className={classes.artistFont}>Ibuprofane</p>
					</div>
				</div>
				<div className={classes.artistCard}>
					<p className={classes.artistFont}>Shell Station</p>
				</div>
			</div>
			<Footer handleFormDisplay={handleFormDisplay}/>
			{overlayVisible}
		</div>
	)
}



