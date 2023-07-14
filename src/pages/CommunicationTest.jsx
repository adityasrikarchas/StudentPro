import { useState } from "react";
import { Aquestions } from "../assets/data/assesmentQuestions";
import { IconButton, Question, Header, TimerButton } from "../components";

const CommunicationTest = () => {
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [startCounter, setStartCounter] = useState(true);
	const TIME_LIMIT = 10800;
	const totalQuestions = Aquestions.length;
	const handlePrevBtn = () => {
		if (currentQuestion === 0) {
			return;
		}
		setCurrentQuestion(currentQuestion - 1);
	};
	const handleNextBtn = () => {
		if (currentQuestion === totalQuestions - 1) {
			return;
		}
		setCurrentQuestion(currentQuestion + 1);
	};
	return (
		<div className="cTestWrapper">
			<Header text={"Communication Test"} />
			<div className="timerSection">
				<span className="instruction">
					Read the following passage and answer the
					questions
				</span>
				<span className="timer">
					<span className="remainingTime">
						Remaining Time
					</span>
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
					<div className="passage">
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
						Questions {currentQuestion + 1}-
						{totalQuestions}
					</span>
					<Question
						question={
							Aquestions[currentQuestion].question
						}
						options={
							Aquestions[currentQuestion].options
						}
						index={currentQuestion}
					/>
					<hr />
					<div className="prevNextBtn">
						<IconButton
							icon="ArrowBack"
							style={{
								backgroundColor:
									"var(--color-green)",
							}}
							onClick={handlePrevBtn}
						/>
						&nbsp;&nbsp;&nbsp;
						<IconButton
							icon="ArrowForward"
							style={{
								backgroundColor:
									"var(--color-green)",
							}}
							onClick={handleNextBtn}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};
export default CommunicationTest;
