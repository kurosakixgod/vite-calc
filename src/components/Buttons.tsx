/* eslint-disable no-mixed-spaces-and-tabs */
import { useContext } from "react";
import { ThemeContext } from "./App";
import Button from "./Button";

interface Props {
	getString: (str: string) => void;
	calcEval: () => void;
	clearEval: () => void;
	changeSign: () => void;
	converMathSign: (sign: string) => void;
	isOperationNext: boolean;
	setIsOperationNext: (arg: boolean) => void;
}

const Buttons = ({
	getString,
	calcEval,
	clearEval,
	changeSign,
	converMathSign,
	isOperationNext,
	setIsOperationNext,
}: Props) => {
	const darkTheme = useContext(ThemeContext);

	const lightDigit =
		"bg-white hover:shadow-lg hover:shadow-light-blue text-light-blue";
	const lightOperation =
		"bg-light-operation hover:shadow-lg hover:shadow-gray text-light-operation-blue";
	const darkDigit =
		"bg-dark-digit hover:shadow-lg hover:shadow-dark-digit-blue text-dark-digit-blue";
	const darkOperation =
		"bg-dark-operation hover:shadow-lg hover:shadow-white text-dark-operation-blue";

	const digitTheme = darkTheme ? darkDigit : lightDigit;
	const operationTheme = darkTheme ? darkOperation : lightOperation;

	const signsArray: string[] = [
		"CE",
		"±",
		"%",
		"÷",
		"7",
		"8",
		"9",
		"×",
		"4",
		"5",
		"6",
		"-",
		"1",
		"2",
		"3",
		"+",
		"0",
		".",
		"=",
	];

	const sendString = (str: string) => {
		getString(str);
	};

	const conditionalHandleCLick = (sign: string) => {
		switch (sign) {
			case "CE":
				clearEval();
				break;
			case "±":
				changeSign();
				break;
			case "=":
				calcEval();
				break;
			case "×":
			case "÷":
				if (isOperationNext) {
					converMathSign(sign);
				}
				setIsOperationNext(false);
				break;
			case "+":
			case "-":
			case "%":
				if (isOperationNext) {
					sendString(sign);
				}
				setIsOperationNext(false);
				break;
			default:
				sendString(sign);
				break;
		}
	};

	const btns = signsArray.map((sign, i) => {
		return (
			<Button
				key={i}
				className={`${
					sign === "0"
						? digitTheme + " col-span-2 w-full"
						: sign === "×" ||
						  sign === "+" ||
						  sign === "-" ||
						  sign === "÷" ||
						  sign === "=" ||
						  sign === "%"
						? operationTheme
						: digitTheme
				}`}
				handleClick={conditionalHandleCLick}
			>
				{sign}
			</Button>
		);
	});

	return <div className="grid gap-4 grid-cols-col-4 mt-[30px]">{btns}</div>;
};

export default Buttons;
