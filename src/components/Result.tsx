import { useContext } from "react";
import { ThemeContext } from "./App";

interface Props {
	result: string;
}

const Result = ({ result }: Props) => {
	const darkTheme = useContext(ThemeContext);

	const textColor = darkTheme ? "text-white" : "text-dark-color";

	return (
		<div
			className={`flex items-center justify-end ${textColor} font-bold text-[40px]`}
		>
			{result}
		</div>
	);
};

export default Result;
