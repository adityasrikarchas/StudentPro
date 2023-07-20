import "./style.css";

const Question = ({ index, question, options, fontSize, changeAnswerColor }) => {
	return (
		<div>
			<div className="questionText">
				<span style={{fontSize: fontSize}}>
					Q{index + 1}. {question}
				</span>
			</div>
			{options.map((value, i) => (
				<div className="options" style={{fontSize: fontSize}}>
					<input
						type="radio"
						name={`question-${index}`}
						value={options[i]}
						onFocus={()=>changeAnswerColor(index)}
					/>
					&nbsp;
					<label htmlFor={`question-${index}`}>
						{options[i]}
					</label>
				</div>
			))}
			<hr />
		</div>
	);
};
export default Question;