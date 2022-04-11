import React, { useState } from "react";
import PropTypes from "prop-types";

export const Light = (props) => {
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
					return newActive;
				});
			}}
			className={`light ${props.color} 
				${
					props.lightStatus.red && props.color == "red"
						? "glowRed"
						: props.lightStatus.yellow && props.color == "yellow"
						? "glowYellow"
						: props.lightStatus.green && props.color == "green"
						? "glowGreen"
						: ""
				}`}></div>
	);
};

Light.propTypes = {
	color: PropTypes.string,
	glowing: PropTypes.func,
	lightStatus: PropTypes.object,
};
