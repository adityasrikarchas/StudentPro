// // Internal Imports
import { useState } from "react";

// Components
import ModalWrapper from "../ModalWrapper";
import Icon from "../../Icon";
import ButtonGreen from "../../Buttons/ButtonGreen";
// Modal
import InstructionsModal from "./Reading/InstructionsModal";

// Styles
import "../styles.css";

// Modal
const ReminderModal = ({ showModal, setShowModal, style }) => {
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
							<Icon name="GreenTick" />
						</div>
						<hr />
						<div className="remainder-modal__recommends">
							<div>
								<p>Resolution (Laptop)</p>
								<p className="text-down">
									1366*768
								</p>
							</div>
							<Icon name="LaptopWindows" />
						</div>
						<hr />
						<div className="remainder-modal__recommends">
							<div>
								<p>Recommended (Browser)</p>
								<p className="text-down">
									Google Chrome
								</p>
							</div>
							<Icon name="GoogleChrome" />
						</div>
					</div>
				</div>
				<div className="remainder-modal_btn">
					<ButtonGreen
						text="Proceed"
						onClick={showInstructionModalHandler}
					/>
				</div>
			</div>
		</ModalWrapper>
	);
};

export default ReminderModal;
