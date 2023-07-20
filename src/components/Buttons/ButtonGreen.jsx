// Styles
import "./styles.css";

const ButtonGreen = ({text, onClick, style, showIcon}) => {
	return (
		<button
			className="button-green center"
			onClick={onClick ? onClick : () => {}}
			style={{backgroundColor: "var(--color-green)", ...style}}
		>
			{text} 
			{showIcon ? null : <span>&#10140;</span>}
		</button>
	);
};

export default ButtonGreen;
