import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Light } from "./light.jsx";

//create your first component
const Home = () => {
	const [color, setColor] = useState();
	const [lightOn, setLightOn] = useState({
		red: false,
		yellow: false,
		green: false,
	});
	return (
		<div>
			<div className="top">
				<div className="blackBar"></div>
			</div>
			<div className="bottom">
				<div className="blackBox">
					<Light
						color="red"
						glowing={setLightOn}
						lightStatus={lightOn}
					/>
					<Light
						color="yellow"
						glowing={setLightOn}
						lightStatus={lightOn}
					/>
					<Light
						color="green"
						glowing={setLightOn}
						lightStatus={lightOn}
					/>
				</div>
			</div>
		</div>
	);
};

export default Home;
