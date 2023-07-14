import "./style.css";

const Question = ({ index, question, options }) => {
	return (
		<div>
			<div className="questionText">
				<span>
					Q{index + 1}. {question}
				</span>
			</div>
			{options.map((value, i) => (
				<div className="options">
					<input
						type="radio"
						name={`question-${index}`}
						value={options[i]}
					/>
					&nbsp;
					<label htmlFor={`question-${index}`}>
						{options[i]}
					</label>
				</div>
			))}
		</div>
	);
};
export default Question;