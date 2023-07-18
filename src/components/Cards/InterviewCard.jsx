import React from "react";

// Components
import Icon from "../Icon";
import ButtonGreen from "../Buttons/ButtonGreen";

// svgs
import Meter from "../../assets/svgs/Meter.svg";
import Clock from "../../assets/svgs/Clock.svg";
import Question from "../../assets/svgs/Question.svg";

//stylesheets
import "./styles.css";

const getColor = (completed) => {
	if(completed == "0%") {
		return "rgba(62, 185, 111, 1)";
	}
	else if(completed == "100%") {
		return "rgba(2, 128, 212, 1)";
	}
	else {
		return "rgba(220, 161, 29, 1)";
	}
}

const InterviewCard = ({
	name,
	subHeading,
	icon,
	iconStyle,
	iconWrapperStyle,
	description,
	level,
	time,
	questions,
	completed,
	status,
	button,
	onButtonClick,
	iconSize,
	style,
	children,
}) => {
	return (
		<div className="interview-card-container" style={style}>
			<div className="interview-card-header">
				<div style={iconWrapperStyle}>
					<Icon
						icon={icon}
						size={iconSize ? iconSize : "40px"}
						style={{
							...iconStyle,
						}}
					/>
				</div>
				<div className="interview-card-heading">
					<h1>{name}</h1>
					<p>{subHeading}</p>
				</div>
			</div>

			<p>{description}</p>

			<div className="info-container">
				<div className="info center">
					<Icon
						icon={Meter}
						size={"15px"}
						style={{
							marginRight: "5px",
						}}
					/>
					<p>{level}</p>
				</div>
				<div className="info center">
					<Icon
						icon={Clock}
						size={"15px"}
						style={{
							marginRight: "5px",
						}}
					/>
					<p>{time}</p>
				</div>
				<div className="info center">
					<Icon
						icon={Question}
						size={"15px"}
						style={{
							marginRight: "5px",
						}}
					/>
					<p>{questions}</p>
				</div>
			</div>

			<div className="interview-card-progress-bar-container">
				<div className="interview-card-progress-bar">
					<div
						className="interview-card-progress-bar-fill"
						style={{
							width:
								completed === "0%"
									? "5px"
									: completed,
						}}
					></div>
				</div>
				<p>{status}</p>
			</div>

			<div
				style={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
				}}
			>
				<ButtonGreen
					text={button}
					onClick={onButtonClick}
					style={{
						marginTop: "20px",
						backgroundColor: getColor(completed)
					}}
				/>
				{children}
			</div>
		</div>
	);
};

export default InterviewCard;
