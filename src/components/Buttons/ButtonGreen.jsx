// Styles
import Icon from "../Icon";
import "./styles.css";

const ButtonGreen = ({ text, onClick, icon, style, iconStyle, iconSize }) => {
	return (
		<button
			className="button-green center"
			onClick={onClick ? onClick : () => {}}
			style={style}
		>
			{text}
			{icon && (
				<Icon
					style={iconStyle}
					name={icon}
					alt={text}
					size={iconSize || "20px"}
				/>
			)}
		</button>
	);
};

export default ButtonGreen;
