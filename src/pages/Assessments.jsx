// Internal Imports
import { useEffect, useState } from "react";

// svgs
import ReadingTest from "../assets/svgs/ReadingTest.svg";
import Visibility from "../assets/svgs/Visibility.svg";
import ArrowLeft from "../assets/svgs/ArrowLeft.svg";

// Components
import {
	Switch,
	AssessmentCard,
	IconButton,
	InterviewCard,
	Icon,
	ReminderModal,
	UserProfile
} from "../components";

// pages
import CommunicationTest from "./CommunicationTest";

//context
import { TestProvider } from "../context";
import { useTest } from "../context/TestContext";

// Data
import { CommunicationAssessments, BehaviourAssessments, ReadingAssessments } from "../assets/data";

const Assessments = ({userName, userAvatar}) => {
	// States
	const [active, setActive] = useState(0);
	const [assessmentOpened, setAssessmentOpened] = useState(false);

	if (assessmentOpened) {
		return (
			<TestProvider>
				<OpennedAssessment
					visibilty={assessmentOpened}
					setVisibility={setAssessmentOpened}
				/>
			</TestProvider>
		);
	}

	const assessmentsAvailable = active==1 ? BehaviourAssessments : CommunicationAssessments;

	return (
		<TestProvider>
			<div className="assessments-container bg-gradient">
				{/* Toggler */}
				<div className="switch-container">
					<Switch
						options={["Communication", "Behaviour"]}
						active={active}
						setActive={setActive}
					/>
				</div>

				<UserProfile userName={userName} userAvatar={userAvatar}/>
				<h4>{active==0 ? "Communication" : "Behaviour"} Modules</h4>

				<div className="assessments-cards-wrapper">
					{
						assessmentsAvailable.map(
							(assessment) => (
								<AssessmentCard
									key={assessment.id}
									icon={assessment.icon}
									iconBgColor={
										assessment.iconBgColor
									}
									heading={
										assessment.heading
									}
									subHeading={
										assessment.subHeading
									}
									description={
										assessment.description
									}
									descriptionStyle={
										assessment.descriptionStyle
									}
									onButtonPress={() =>
										setAssessmentOpened(
											true
										)
									}
									style={assessment.style}
								/>
							)
						)
					}
				</div>
			</div>
		</TestProvider>
	);
};

const ViewReport = () => {
	return (
		<button className="view-report">
			<span>View report</span>
			<Icon icon={Visibility} style={{width: "20px", height: "20px", paddingBottom: "3px"}}/>
		</button>
	);
};

const OpennedAssessment = ({ visibilty, setVisibility }) => {
	const [activeTab, setActiveTab] = useState(0);
	const [showModal, setShowModal] = useState(false);

	// Contexts
	const { isTestStarted } = useTest();

	const tabs = [
		{
			id: 0,
			label: "All Tests",
			count: 12,
		},
		{
			id: 1,
			label: "Completed",
			count: 4,
		},
		{
			id: 3,
			label: "Not Completed",
			count: 8,
		},
	];

	const [data, setData] = useState(ReadingAssessments.all);

	useEffect(() => {
		if (activeTab === 0) setData(ReadingAssessments.all);
		else if (activeTab === 1) setData(ReadingAssessments.completed);
		else if (activeTab === 2) setData(ReadingAssessments.notCompleted);
	}, [activeTab]);

	return isTestStarted ? (
		<CommunicationTest />
	) : (
		<>
			<ReminderModal
				showModal={showModal}
				setShowModal={setShowModal}
			/>
			<div className="bg-gradient openned-assessment-container">
				<div className="top-bar">
					<div className="top-bar-left">
						<IconButton
							icon={ArrowLeft}
							style={{
								backgroundColor:
									"var(--color-green)",
							}}
							onClick={() =>
								setVisibility(!visibilty)
							}
						/>
					</div>
					<div className="top-bar-right">
						<div
							style={{ marginRight: "15px" }}
							className="top-bar-buttons"
						>
							<p>Filters</p>
							<i
								style={{ marginLeft: "5px" }}
								className="fa-solid fa-chevron-down"
							></i>
						</div>
						<div className="top-bar-buttons">
							<p>Sort</p>
						</div>
					</div>
				</div>
				<div className="navigator-wrapper">
					<div className="navigator">
						{tabs.map((tab, index) => (
							<div
								onClick={() => {
									setActiveTab(index);
								}}
								className="options"
								key={index}
								style={{
									borderBottom:
										index === activeTab
											? "2px solid var(--color-dark)"
											: "",
									marginRight:
										index + 1 ===
										tabs.length
											? "0px"
											: "",
								}}
							>
								<span className="title">
									{tab.label}
								</span>
								<span className="count">
									{tab.count}
								</span>
							</div>
						))}
					</div>
				</div>

				<div
					className="assessments-cards-wrapper"
					style={{
						paddingTop: "0px",
						paddingLeft: "0px",
						marginTop: "50px",
						marginLeft: "1em",
					}}
				>
					{
						// Reading Assessments
						data.map((assessment, index) => (
							<InterviewCard
								icon={ReadingTest}
								{...assessment}
								children={
									assessment.completed ===
									"100%" ? (
										<ViewReport />
									) : null
								}
								button={
									assessment.completed ===
									"100%"
										? "Retake"
										: assessment.completed ===
										  "0%"
										? "Start"
										: "Resume"
								}
								onButtonClick={() => {
									setShowModal(true);
								}}
								iconWrapperStyle={{
									height: "40px",
									width: "60px",
									borderRadius: "50%",
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
									backgroundColor:
										"rgba(235, 254, 255, 1)",
									marginRight: "15px",
								}}
								iconSize="30px"
								iconStyle={{
									marginLeft:
										"15px !important",
								}}
							/>
						))
					}
				</div>
			</div>
		</>
	);
};

export default Assessments;