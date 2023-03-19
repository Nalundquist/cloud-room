import * as classes from './Splash.module.css';

export const Splash = (props) => {

	const { handleSplashClick }  = props;

	return(
	<div className={classes.container}>
		<div className={classes.splashBox} onClick={handleSplashClick}>
			<p>Cloud</p>
			<p>Room</p>
			<p>Tattoo</p>
		</div>
	</div>
	)
}