// Styles
import "./styles.css";

// Internal Imports
import { useState, useEffect } from "react";

// Utils
import { formatTime } from "../../utils";

// Components
import Icon from "../Icon/index.jsx";

const TimerButton = ({ time, defaultStart, forward, style, format }) => {
	const [timer, setTimer] = useState(time);

	useEffect(() => {
		if (defaultStart) {
			const interval = setInterval(() => {
				if (forward) setTimer((timer) => timer + 1);
				else {
					if (timer === 0) clearInterval(interval);
					else setTimer((timer) => timer - 1);
				}
			}, 1000);
			return () => clearInterval(interval);
		}
	}, [defaultStart, forward, timer]);

	return (
		<div className="button-timer center" style={style}>
			<Icon
				name="Time"
				style={{
					marginRight: "10px",
				}}
			/>
			<p>{formatTime(timer, format)}</p>
		</div>
	);
};

export default TimerButton;