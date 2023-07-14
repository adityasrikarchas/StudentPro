// Components
import ModalWrapper from "../../ModalWrapper";
import ButtonGreen from "../../../Buttons/ButtonGreen";

// Styles
import "./style.css";

// contexts
import { useTest } from "../../../../context/TestContext";

// Modal
const InstructionsModal = ({ showModal, setShowModal, style }) => {
	const { setIsTestStarted } = useTest();
	return (
		<ModalWrapper showModal={showModal} setShowModal={setShowModal}>
			<div className="instruction-Modal-Container">
				<h2>Overview</h2>
				<div className="greetingtext">
					<p>
						This test has various number questions to
						practice on. All the best!
					</p>
				</div>
				<div className="instructionList">
					<ul>
						<li>Answer all the questions</li>
						<li>
							You can change your answers at any
							time during the test
						</li>
					</ul>
				</div>
				<div className="tasktable">
					<table>
						<thead>
							<tr>
								<th>Part</th>
								<th>Task</th>
								<th>Questions</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>A</td>
								<td>Reading</td>
								<td>20</td>
							</tr>
						</tbody>
					</table>
				</div>
				<h3>To start test, Click Proceed</h3>
				<div className="instruction-modal_btn">
					<ButtonGreen
						text="Proceed"
						onClick={() => {
							setIsTestStarted(true);
						}}
					/>
				</div>
			</div>
		</ModalWrapper>
	);
};
export default InstructionsModal;
