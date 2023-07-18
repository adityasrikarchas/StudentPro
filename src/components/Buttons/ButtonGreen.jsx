// Styles
import "./styles.css";

const ButtonGreen = ({text, onClick, style}) => {
	return (
		<button
			className="button-green center"
			onClick={onClick ? onClick : () => {}}
			style={{backgroundColor: "var(--color-green)", ...style}}
		>
			{text} &#10140;
		</button>
	);
};

export default ButtonGreen;
