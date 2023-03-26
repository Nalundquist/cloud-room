import * as classes from "./Artists.module.css";
import webLogo from "../public/img/www-logo-img.png"
import instaLogo from "../public/img/insta-logo-img.png"
import Image from 'next/image';
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
						<Image 
							src={webLogo} 
							alt="Website Logo and Link for Freak Body Tattoo"
							width={75}
							height={75}/>
						<Image 
							src={instaLogo} 
							alt="Instagram Logo and Link for Freak Body Tattoo" 
							width={75}
							height={75}/>
					</div>
					<div className={classes.artistCard}>
						<p className={classes.artistFont}>Ibuprofane</p>
						<Image 
							src={webLogo} 
							alt="Website Logo and Link for Ibuprofane Tattoo" 
							width={75}
							height={75}/>
						<Image 
							src={instaLogo} 
							alt="Instagram Logo and Link for Ibuprofane Tattoo" 
							width={75}
							height={75}/>
					</div>
				</div>
				<div className={classes.artistCard}>
					<p className={classes.artistFont}>Shell Station</p>
					<Image 
						src={webLogo} 
						alt="Website Logo and Link for Shell Station Tattoo" 
						width={75}
						height={75}/>
					<Image 
						src={instaLogo} 
						alt="Instagram Logo and Link for Shell Station Tattoo" 
						width={75}
						height={75}/>
				</div>
			</div>
			<Footer handleFormDisplay={handleFormDisplay}/>
			{overlayVisible}
		</div>
	)
}



