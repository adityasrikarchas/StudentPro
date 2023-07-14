// Internal Imports
import React from "react";

// Styles
import "./styles.css";

const Switch = ({ options, active, setActive }) => {
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
									? "var(--bg-highlight)"
									: "transparent",
							color:
								active === index
									? "var(--color-dark)"
									: "var(--bg-highlight)",
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
