import React from "react";

// Styles
import "./styles.css";

// Components
import Icon from "../Icon";
import ButtonGreen from "../Buttons/ButtonGreen";

const AssessmentCard = ({
	icon,
	iconBgColor,
	heading,
	subHeading,
	description,
	descriptionStyle,
	onButtonPress,
	style,
}) => {
	return (
		<div className="assessment-card-container" style={style}>
			<div
				className="assessment-card-icon-container center"
				style={{
					background: iconBgColor,
				}}
			>
				<Icon name={icon} alt={heading} size={"30px"} />
			</div>
			<h2>{subHeading}</h2>
			<p style={{ ...descriptionStyle }}>{description}</p>
			<div className="assessments-bottom">
				<h2>{heading}</h2>
				<ButtonGreen
					text={"Get Started"}
					icon={"ArrowRight"}
					onClick={onButtonPress}
					style={{
						padding: "12px 25px",
						borderRadius: "15px",
						fontSize: "15px",
						fontWeight: "400",
					}}
					iconStyle={{
						color: "#fff",
						marginLeft: "10px",
					}}
				/>
			</div>
		</div>
	);
};

export default AssessmentCard;
