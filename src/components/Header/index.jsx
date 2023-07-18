import "./style.css";
import Icon from "../Icon";
import Logo from "../../assets/svgs/Logo.svg";

const Header = ({ text }) => {
	return (
		<div className="pageHeader">
			<h1>{text}</h1>
			<div className="logo">
				<Icon icon={Logo} style={{height: '35px', width: '35px'}}/>
			</div>
		</div>
	);
};
export default Header;