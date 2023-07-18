// Internal Imports
import React from "react";

// Styles
import "./styles.css";

const Switch = ({ options, active, setActive, style }) => {
	const handleClick = (idx) => {
		setActive(idx);
	};

	return (
		<div id="switch-button">
			{options.map((option, index) => {
				return (
					<div
						className="switch-item"
						style={{
							backgroundColor:
								active === index
									? "ghostwhite"
									: "var(--bg-highlight)",
							color:
								active === index
									? "var(--bg-highlight)"
									: "white",
							style: {...style},
						}}
						id={index}
						onClick={() => handleClick(index)}
					>
						{option}
					</div>
				);
			})}
		</div>
	);
};

export default Switch;
