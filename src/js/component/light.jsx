import React, { useState } from "react";
import PropTypes from "prop-types";

export const Light = (props) => {
	const [active, setActive] = useState(false);
	function handleActive(actStatus) {
		console.log(props.color == "red" && props.lightStatus.red == true);
		if (props.color == "red" && actStatus.red) {
			console.log(props.lightStatus.red, "soy red");
			setActive((prev) => !prev);
		}
		if (props.color == "yellow" && actStatus.yellow) {
			setActive((prev) => !prev);
		}
		if (props.color == "green" && actStatus.green) {
			setActive((prev) => !prev);
		}
	}
	return (
		<div
			onClick={() => {
				props.glowing((prev) => {
					let newActive;
					if (props.color == "red") {
						newActive = {
							red: !prev.red,
							yellow: false,
							green: false,
						};
					}
					if (props.color == "yellow") {
						newActive = {
							red: false,
							yellow: !prev.yellow,
							green: false,
						};
					}
					if (props.color == "green") {
						newActive = {
							red: false,
							yellow: false,
							green: !prev.green,
						};
					}
					handleActive(newActive);
					return newActive;
				});
			}}
			className={`light ${props.color} ${active ? "glow" : ""}`}></div>
	);
};

Light.propTypes = {
	color: PropTypes.string,
	glowing: PropTypes.func,
	lightStatus: PropTypes.object,
};
