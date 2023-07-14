import React from "react";

// Styles
import "./styles.css";

// Components
import Icon from "../Icon";

const CategoryCard = ({
	name,
	subHeading,
	description,
	descriptionStyle,
	tags,
	button,
	onButtonPress,
	icon,
	iconColor,
	style,
}) => {
	return (
		<div className="category-card-container" style={style}>
			<div
				className="category-card-img-container center"
				style={{
					background: iconColor,
				}}
			>
				<Icon name={icon} alt={name} size={"30px"} />
			</div>
			<h2>{name}</h2>
			<p>{subHeading}</p>
			<p className="description" style={descriptionStyle}>
				{description}
			</p>
			<div
				className="tags-container"
				style={{
					display: tags?.length > 0 ? "flex" : "none",
				}}
			>
				{tags?.map(
					(tag, index) =>
						index < 5 && (
							<p key={index} className="tag">
								{tag}
							</p>
						)
				)}
				{tags?.length > 5 && (
					<p className="tag tag-show-more">See More</p>
				)}
			</div>
			{button && (
				<button
					className="category-card-container-button center"
					onClick={onButtonPress}
				>
					{button}
				</button>
			)}
		</div>
	);
};

export default CategoryCard;
