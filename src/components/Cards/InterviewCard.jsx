import React from "react";

// Components
import Icon from "../Icon";
import ButtonGreen from "../Buttons/ButtonGreen";

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
						name={icon}
						size={iconSize ? iconSize : "40px"}
						style={{
							marginRight: "15px",
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
						name={"Meter"}
						size={"15px"}
						style={{
							marginRight: "5px",
						}}
					/>
					<p>{level}</p>
				</div>
				<div className="info center">
					<Icon
						name={"Clock"}
						size={"15px"}
						style={{
							marginRight: "5px",
						}}
					/>
					<p>{time}</p>
				</div>
				<div className="info center">
					<Icon
						name={"Question"}
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
					}}
				/>
				{children}
			</div>
		</div>
	);
};

export default InterviewCard;
