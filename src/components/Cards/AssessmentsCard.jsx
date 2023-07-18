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
				<Icon icon={icon} alt={heading} size={"20px"} />
			</div>
			<h4>{subHeading}</h4>
			<p style={{ ...descriptionStyle }}>{description}</p>
			<div className="assessments-bottom">
				<h4>{heading}</h4>
				<ButtonGreen
					text={"Get Started"}
					onClick={onButtonPress}
					style={{
						padding: "12px 25px",
						borderRadius: "26px",
						fontSize: "15px",
						fontWeight: "400",
					}}
				/>
			</div>
		</div>
	);
};

export default AssessmentCard;
