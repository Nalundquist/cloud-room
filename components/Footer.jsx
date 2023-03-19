import * as classes from "./Footer.module.css";

export const Footer = (props) => {

	const { handleFormDisplay } = props;

	return(
		<div className={classes.contactBar}>
			<div 
				className={classes.contact} 
				onClick={() => handleFormDisplay("generalContact")}
				>
				<p>General Contact</p>
			</div>
			<p className={classes.separate}>
				//
			</p>
			<div 
				className={classes.contact} 
				onClick={() => handleFormDisplay("guestArtistContact")}
				>
				<p>Guest Artist</p>
			</div>
		</div>
	)

}

