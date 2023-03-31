import * as classes from "./Artists.module.css";
import webLogo from "../public/img/www-logo-img-2.png"
import instaLogo from "../public/img/insta-logo-img.png"
import Link from 'next/link'
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
				<Contact setOverlayVisible={setOverlayVisible}/>
			</div>
		const guestArtistContact = 
			<div className={classes.formContainer}>
				<GuestArtist  setOverlayVisible={setOverlayVisible}/>
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
				<div className={classes.artistCard} id={classes.card1}>
					<p className={classes.artistFont}>Cloud Room</p>
					{/* <Link href="https://www.instagram.com/shell_station_tattoo/?hl=en">
						<Image 
							src={webLogo} 
							alt="Website Logo and Link for Ibuprofane Tattoo" 
							width={50}
							height={50}/>
					</Link> */}
					<Link href='https://www.instagram.com/CloudRoomTattoo/?hl=en'>
						<Image 
							src={instaLogo} 
							alt="Instagram Logo and Link for Cloud Room Tattoo" 
							width={50}
							height={50}/>
					</Link>
				</div>
				<div className={classes.artistRow}>
					<div className={classes.artistCard} id={classes.card2}>
						<p className={classes.artistFont}>Freak Body</p>
						<Link href='https://freakbodytattoo.com'>
							<Image 
								src={webLogo} 
								alt="Website Logo and Link for Freak Body Tattoo"
								width={50}
								height={50}/>
						</Link>
						<Link href='https://www.instagram.com/freak_body/?hl=en'>
							<Image 
								src={instaLogo} 
								alt="Instagram Logo and Link for Freak Body Tattoo" 
								width={50}
								height={50}/>
						</Link>
					</div>
					<div className={classes.artistCard} id={classes.card3}>
						<p className={classes.artistFont}>Ibuprofane</p>
						{/* <Link href="https://www.instagram.com/shell_station_tattoo/?hl=en">
							<Image 
								src={webLogo} 
								alt="Website Logo and Link for Ibuprofane Tattoo" 
								width={50}
								height={50}/>
						</Link> */}
						<Link href='https://www.instagram.com/ibuprofane.tattoo/?hl=en'>
							<Image 
								src={instaLogo} 
								alt="Instagram Logo and Link for Ibuprofane Tattoo" 
								width={50}
								height={50}/>
						</Link>
					</div>
				</div>
				<div className={classes.artistCard} id={classes.card4}>
					<p className={classes.artistFont}>Shell Station</p>
					{/* <Link href='https://www.instagram.com/shell_station_tattoo/?hl=en'>
						<Image 
							src={webLogo} 
							alt="Website Logo and Link for Shell Station Tattoo" 
							width={50}
							height={50}/>
					</Link> */}
					<Link href='https://www.instagram.com/shell_station_tattoo/?hl=en'>
						<Image 
							src={instaLogo} 
							alt="Instagram Logo and Link for Shell Station Tattoo" 
							width={50}
							height={50}/>
					</Link>
				</div>
			</div>
			<Footer handleFormDisplay={handleFormDisplay} />
			{overlayVisible}
		</div>
	)
}



