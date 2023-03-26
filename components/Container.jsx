import { Splash } from "./Splash";
import { useEffect, useState } from "react";
import { Artists } from "./Artists";
import * as classes from "./Container.module.css"
export const Container = () => {
	
	const [ visibleDisplay, setVisibleDisplay ] = useState(null);
	const [ mobileVersion, setMobileVersion ] = useState(false);

	useEffect(() => {
		const mobileDisplay = window.matchMedia("(max-width: 724px)");

		if (mobileDisplay) {
			setMobileVersion(true);
			console.log(mobileVersion)
		}

		if (visibleDisplay == null){
			setVisibleDisplay(<Splash handleSplashClick={handleSplashClick} />)
			console.log(visibleDisplay);
		}
	}, [mobileVersion, visibleDisplay])


	const handleSplashClick = () => {
		setVisibleDisplay(<Artists mobileVersion={mobileVersion} />);
	}

	return(
		<div className={classes.container}>
			{visibleDisplay}
			{/* <Splash />
			<Artists /> */}
		</div>
	)
}
