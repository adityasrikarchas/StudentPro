// // Internal Imports
import { useState } from "react";

// svgs
import Cookies from "../../../assets/svgs/Cookies.svg";
import LaptopWindow from "../../../assets/svgs/LaptopWindow.svg";
import ChromeIcon from "../../../assets/svgs/google-chrome-icon.svg";

// Components
import ModalWrapper from "../ModalWrapper";
import Icon from "../../Icon";
import ButtonGreen from "../../Buttons/ButtonGreen";
// Modal
import InstructionsModal from "./Reading/InstructionsModal";

// Styles
import "../styles.css";

// Modal
const RemainderModal = ({ showModal, setShowModal, style }) => {
	const [showInstructionModal, setShowInstructionModal] = useState(false);
	const showInstructionModalHandler = () => {
		setShowInstructionModal(true);
	};
	return showInstructionModal ? (
		<InstructionsModal
			showModal={showInstructionModal}
			setShowModal={() => {
				setShowInstructionModal(false);
				setShowModal(false);
			}}
		/>
	) : (
		<ModalWrapper
			showModal={showModal}
			setShowModal={() => setShowModal(false)}
		>
			<div className="remainder-modal-container" style={style}>
				<h2>Reminder</h2>
				<hr />
				<div className="remainder-modal-content">
					<div className="remainder-modal-description">
						<p>
							This platform is designed to provide
							practice to improve communication
							skills
						</p>
						<ul>
							<li>
								This mock and section-wise test
								can be accessed on your desktop
								& laptop.
								<br /> Please note that this
								product may
								<span>
									&nbsp;not be compatible
									with your mobile device.
								</span>
							</li>
							<br />
							<li>
								This mock & section-wise test is
								<span>
									&nbsp;compatible in Google
									Chrome browser only.
								</span>
							</li>
						</ul>
						<h3>Click on Proceed to Start the Test</h3>
					</div>
					<div className="remiander-modal-recommendsDiv">
						<div className="remainder-modal__recommends">
							<div>
								<p>Cookies</p>
								<p className="text-down">
									Enabled
								</p>
							</div>
							<Icon icon={Cookies} />
						</div>
						<hr />
						<div className="remainder-modal__recommends">
							<div>
								<p>Resolution (Laptop)</p>
								<p className="text-down">
									1366*768
								</p>
							</div>
							<Icon icon={LaptopWindow} />
						</div>
						<hr />
						<div className="remainder-modal__recommends">
							<div>
								<p>Recommended (Browser)</p>
								<p className="text-down">
									Google Chrome
								</p>
							</div>
							<Icon icon={ChromeIcon} />
						</div>
					</div>
				</div>
				<div className="remainder-modal_btn">
					<ButtonGreen
						text="Proceed"
						onClick={showInstructionModalHandler}
						style={{borderRadius: "50px"}}
					/>
				</div>
			</div>
		</ModalWrapper>
	);
};

export default RemainderModal;
