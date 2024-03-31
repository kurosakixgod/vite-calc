import { useState } from "react";
import Buttons from "./Buttons";
import Result from "./Result";

const App = () => {
	const [evalString, setEvalString] = useState<string>("0");
	const [isOperationNext, setIsOperationNext] = useState(false);

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
		<div className="flex flex-col gap-[30px] mx-auto p-[30px] w-[400px] bg-slate-200 rounded-[24px]">
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
	);
};

export default App;
