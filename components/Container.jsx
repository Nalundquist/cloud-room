import { Splash } from "./Splash";
import { useState } from "react";
import { Artists } from "@/Artists";

export const Container = () => {
	
	const [ visibleDisplay, setVisibleDisplay ] = useState(<Splash />);

	const handleSplashClick = () => {
		setVisibleDisplay(<Artists />);
	}
	
	return(
		<>
			{visibleDisplay}
		</>
	)
}
