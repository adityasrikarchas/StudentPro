// Components
import Icon from "../Icon";

const IconButton = ({
	icon,
	onClick,
	style,
	iconStyle,
	iconSize,
	text,
	textStyle,
}) => {
	return (
		<div
			className="center"
			style={{
				flexDirection: "column",
			}}
		>
			<button
				className="icon-button center"
				onClick={onClick ? onClick : () => {}}
				style={style}
			>
				<Icon size={iconSize} icon={icon} style={iconStyle} />
			</button>
			{text && <p style={textStyle}>{text}</p>}
		</div>
	);
};

export default IconButton;