// Internal Imports
import { useState, useContext, createContext } from "react";

const TestContext = createContext();

export const useTest = () => {
	return useContext(TestContext);
};

const TestProvider = ({ children }) => {
	const [isTestStarted, setIsTestStarted] = useState(false);
	return (
		<TestContext.Provider
			value={{
				isTestStarted,
				setIsTestStarted,
			}}
		>
			{children}
		</TestContext.Provider>
	);
};

export default TestProvider;
