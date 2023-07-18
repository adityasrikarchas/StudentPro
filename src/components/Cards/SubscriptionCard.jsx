import React from "react";
import "./styles.css";
import CheckO from "../../assets/svgs/check-o.svg";
import Icon from "../Icon";

const SubscriptionCard = ({
	title,
	price,
	content
}) => {
	
	return (
		<div className="subscription-card-container">
			<div className="banner">
				<h2>{title}</h2>
				<h6>{price}</h6>
			</div>
			{
				content.map((data) => (
					<div className="subscription-card-description">
						<p>
						<i class='fa fa-check-circle' style={{color: 'gray'}} /> {data}
						</p>
					</div>
				))
			}
		</div>
	);
};

export default SubscriptionCard;