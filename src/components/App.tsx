import { useState, createContext } from "react";
import Buttons from "./Buttons";
import Result from "./Result";
import Moon from "./ui/Moon";
import Sun from "./ui/Sun";

export const ThemeContext = createContext(false);

const App = () => {
	const [evalString, setEvalString] = useState<string>("0");
	const [isOperationNext, setIsOperationNext] = useState(false);
	const [darkTheme, setDarkTheme] = useState(false);

	const bgTheme = darkTheme ? "bg-dark-main" : "bg-light-main";
	const switcher = darkTheme
		? "bg-dark-color text-white"
		: "bg-white text-black";

	const getEvalString = (str: string) => {
		setEvalString((prev) => {
			if (prev && prev !== "0") {
				return prev + str;
			} else {
				return str;
			}
		});
		setIsOperationNext(true);
	};

	const calcEval = () => {
		setEvalString(eval(evalString.replace("×", "*").replace("÷", "/")));
		setIsOperationNext(false);
	};

	const clearEval = () => {
		setEvalString("0");
		setIsOperationNext(false);
	};

	const changeSign = () => {
		if (evalString[0] === "-") {
			setEvalString((+evalString * -1).toString());
		} else {
			setEvalString(`-${evalString}`);
		}
		setIsOperationNext(true);
	};

	const converMathSign = (sign: string) => {
		switch (sign) {
			case "×":
				getEvalString(sign);
				setIsOperationNext(false);
				break;
			case "÷":
				getEvalString(sign);
				setIsOperationNext(false);
				break;
		}
	};

	return (
		<ThemeContext.Provider value={darkTheme}>
			<div
				className={`flex flex-col gap-[30px] mx-auto p-[30px] w-[400px] ${bgTheme} rounded-[48px] mt-[150px]`}
			>
				<button
					className={`flex items-center justify-center self-start w-[50px] h-[50px] rounded-full ${switcher} transition-all hover:scale-125 `}
					onClick={() => setDarkTheme((prev) => !prev)}
				>
					{darkTheme ? <Sun /> : <Moon />}
				</button>
				<Result result={evalString} />
				<Buttons
					isOperationNext={isOperationNext}
					getString={getEvalString}
					calcEval={calcEval}
					clearEval={clearEval}
					changeSign={changeSign}
					converMathSign={converMathSign}
					setIsOperationNext={setIsOperationNext}
				/>
			</div>
		</ThemeContext.Provider>
	);
};

export default App;
