import { useState } from "react";
import { Aquestions } from "../assets/data/assesmentQuestions";
import { Question, Header, TimerButton, ExitCard } from "../components";
import RoundedIconButton from "../components/Buttons/RoundedIconButton";

const ReadingCommunicationTest = (props) => {
	const FIXED_FONT = 16;
	const [fontSize, setFontSize] = useState(FIXED_FONT);
	const [answerColor, setAnswerColor] = useState(new Array(Aquestions.length).fill("rgba(217, 217, 217, 1)"));
	const [startCounter, setStartCounter] = useState(true);
	const [exitPage, setExitPage] = useState(false);
	const TIME_LIMIT = 86400;
	const totalQuestions = Aquestions.length;

	const increaseFontSize = () => {
		setFontSize(fontSize + 2);
	}

	const fixedFontSize = () => {
		setFontSize(FIXED_FONT);
	}

	const decreaseFontSize = () => {
		setFontSize(fontSize - 2);
	}

	const showExitPage = () => {
		setExitPage(!exitPage);
	}

	const changeAnswerColor = (idx) => {
		answerColor[idx] = "rgba(62, 185, 111, 1)";
		setAnswerColor([...answerColor]);
	}

	return (
		<div className="cTestWrapper">
			<Header text={"Communication Test"} />
			<div className="timerSection">
				<span className="instruction">
					Read the following passage and answer the
					questions
				</span>

				<div className="change-font-size">
					<RoundedIconButton action={decreaseFontSize} style={{ background: "white", boxShadow: "1px 2px 3px grey", width: "36px", height: "36px" }}>
						A<sup>-</sup>
					</RoundedIconButton>
					<RoundedIconButton action={fixedFontSize} style={{ background: "white", boxShadow: "1px 2px 3px grey", width: "36px", height: "36px" }}>
						A
					</RoundedIconButton>
					<RoundedIconButton action={increaseFontSize} style={{ background: "white", boxShadow: "1px 2px 3px grey", width: "36px", height: "36px" }}>
						A<sup>+</sup>
					</RoundedIconButton>
				</div>

				<span className="timer">
					&nbsp;
					<TimerButton
						time={TIME_LIMIT}
						defaultStart={startCounter}
						format="hh:mm:ss"
					/>
				</span>
			</div>

			<div className="testCards">
				<div className="Card pCard">
					<div className="passageHeading">
						Passage Heading
					</div>
					<div className="passage" style={{ fontSize: fontSize }}>
						Having a strong sense of discipline means
						that you possess the ability to control your
						impulses and focus your efforts and energy
						on achieving your objectives. Discipline
						involves setting clear goals, establishing
						routines and systems to support those goals,
						and holding yourself accountable to follow
						through on your commitments. You tend to be
						highly organized and efficient, managing
						your time and resources effectively in order
						to achieve your objectives. You are able to
						prioritize your tasks and responsibilities,
						and to resist distractions or temptations
						that might interfere with your progress. You
						are also able to adapt to changing
						circumstances and adjust your plans as
						needed, without losing sight of your overall
						objectives. Self-control is an important
						component of discipline, as it involves the
						ability to manage your own emotions and
						impulses in order to stay focused and on
						track. This often involves making choices
						and sacrifices in the short-term in order to
						achieve long-term goals. For example, you
						might choose to skip a social event in order
						to stay home and work on a project, or to
						resist the temptation to indulge in
						unhealthy foods in order to maintain a
						healthy lifestyle. Developing discipline
						requires commitment and effort, but can lead
						to many benefits in both your personal and
						professional life. Discipline can help you
						achieve your goals and aspirations, build
						self-confidence and self-esteem, and improve
						your overall sense of well-being. It can
						also lead to greater success and fulfillment
						in areas such as career, education, health,
						and relationships.
					</div>
				</div>
				<div className="Card">
					<span className="totalQuestions">
						Questions {1}-{totalQuestions}
					</span>
					<hr />
					<div className="questions">
						{
							Aquestions.map((data, index) => (
								<Question
									index={index}
									question={data.question}
									options={data.options}
									fontSize={fontSize}
									changeAnswerColor={changeAnswerColor}
								/>
							))
						}
					</div>
				</div>
			</div>

			<div className="page-buttons">
				{
					Aquestions.map((data, index) => (
						<RoundedIconButton style={{ background: answerColor[index], marginLeft: "8px", width: "50px", height: "50px", }}>
							{index + 1}
						</RoundedIconButton>
					))
				}
				{exitPage ? <ExitCard action={showExitPage} /> : <button className="exit" onClick={showExitPage}>EXIT</button>}

			</div>
		</div>
	);
};
export default ReadingCommunicationTest;