import React from "react";

interface ClassNameProps {
	className: string;
	children: React.ReactNode;
	handleClick: (str: string) => void;
}

const Button = ({ className, children, handleClick }: ClassNameProps) => {
	return (
		<button
			value={1}
			onClick={(e: React.MouseEvent<HTMLElement>) => {
				if (typeof e.currentTarget.textContent === "string") {
					handleClick(e.currentTarget.textContent);
				}
			}}
			className={`flex text-xl font-bold justify-center items-center w-[60px] h-[60px] rounded-[16px] transition-all hover:bg-light-theme-ac ${className}`}
		>
			{children}
		</button>
	);
};

export default Button;
