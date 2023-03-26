import * as classes from "./Artists.module.css";
import webLogo from "../public/img/www-logo-img.png"
import instaLogo from "../public/img/insta-logo-img.png"
import { Footer } from "./Footer";
import { Contact } from "./Contact";
import { GuestArtist } from "./GuestArtist";
import { useState } from "react"

export const Artists = () => {
	const [ overlayVisible, setOverlayVisible ] = useState(null); 

	console.log(webLogo);
	console.log(instaLogo);

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
						<img src={webLogo} alt="Website Logo and Link for Freak Body Tattoo" />
						<img src={instaLogo} alt="Instagram Logo and Link for Freak Body Tattoo" />
					</div>
					<div className={classes.artistCard}>
						<p className={classes.artistFont}>Ibuprofane</p>
						<img src={webLogo} alt="Website Logo and Link for Ibuprofane Tattoo" />
						<img src={instaLogo} alt="Instagram Logo and Link for Ibuprofane Tattoo" />
					</div>
				</div>
				<div className={classes.artistCard}>
					<p className={classes.artistFont}>Shell Station</p>
					<img src={webLogo} alt="Website Logo and Link for Shell Station Tattoo" />
						<img src={instaLogo} alt="Instagram Logo and Link for Shell Station Tattoo" />
				</div>
			</div>
			<Footer handleFormDisplay={handleFormDisplay}/>
			{overlayVisible}
		</div>
	)
}



