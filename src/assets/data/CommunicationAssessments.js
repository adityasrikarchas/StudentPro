import ReadingTest from "../svgs/ReadingTest.svg";
import SpeakingTest from "../svgs/SpeakingTest.svg";
import ListeningTest from "../svgs/ListeningTest.svg";
import WritingTest from "../svgs/WritingTest.svg";

const ComunicationAssessments = [
	{
		id: 1,
		icon: ReadingTest,
		iconBgColor: "rgba(235, 254, 255, 1)",
		heading: "Reading",
		subHeading: "Comprehensive Reading Test",
		description:
			"Analyse your reading ability and enhance your skills by taking up multiple test with your convenient.",

		testsAvailable: [
			{
				id: 1,
				testName: "Comprehensive Reading Test - 1",
				testDescription:
					"Analyse your writing ability and enhance your skills",
				testDuration: "16",
				completed: "0%",
				level: "Easy",
				noOfQuestions: "10",
			},
			{
				id: 2,
				testName: "Comprehensive Reading Test - 2",
				testDescription:
					"Analyse your writing ability and enhance your skills",
				testDuration: "30",
				completed: "30%",
				level: "Medium",
				noOfQuestions: "10",
			},
			{
				id: 3,
				testName: "Comprehensive Reading Test - 3",
				testDescription:
					"Analyse your writing ability and enhance your skills",
				testDuration: "60",
				completed: "10%",
				level: "Hard",
				noOfQuestions: "10",
			},
			{
				id: 4,
				testName: "Comprehensive Reading Test - 4",
				testDescription:
					"Analyse your writing ability and enhance your skills",
				testDuration: "16",
				completed: "0%",
				level: "Easy",
				noOfQuestions: "10",
			},
			{
				id: 5,
				testName: "Comprehensive Reading Test - 5",
				testDescription:
					"Analyse your writing ability and enhance your skills",
				testDuration: "30",
				completed: "0%",
				level: "Medium",
				noOfQuestions: "10",
			},
			{
				id: 6,
				testName: "Comprehensive Reading Test - 6",
				testDescription:
					"Analyse your writing ability and enhance your skills",
				testDuration: "60",
				completed: "10%",
				level: "Hard",
				noOfQuestions: "10",
			},
			{
				id: 7,
				testName: "Comprehensive Reading Test - 7",
				testDescription:
					"Analyse your writing ability and enhance your skills",
				testDuration: "16",
				completed: "0%",
				level: "Easy",
				noOfQuestions: "10",
			},
			{
				id: 8,
				testName: "Comprehensive Reading Test - 8",
				testDescription:
					"Analyse your writing ability and enhance your skills",
				testDuration: "30",
				completed: "0%",
				level: "Medium",
				noOfQuestions: "10",
			},
		],
	},
	{
		id: 2,
		icon: SpeakingTest,
		iconBgColor: "rgba(239, 239, 251, 1)",
		heading: "Speaking",
		subHeading: "Comprehensive Speaking Test",
		description:
			"Analyse your speaking ability and enhance your skills by taking up multiple test with your convenient.",
	},
	{
		id: 3,
		icon: ListeningTest,
		iconBgColor: "rgba(229, 244, 255, 1)",
		heading: "Listening",
		subHeading: "Comprehensive Listening Test",
		description:
			"Analyse your listening ability and enhance your skills by taking up multiple test with your convenient.",
	},
	{
		id: 4,
		icon: WritingTest,
		iconBgColor: "rgba(230, 254, 250, 1)",
		heading: "Writing",
		subHeading: "Comprehensive Writing Test",
		description:
			"Analyse your reading ability and enhance your skills by taking up multiple test with your convenient.",
	},
];

export default ComunicationAssessments;
