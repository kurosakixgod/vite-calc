interface Props {
	result: string;
}

const Result = ({ result }: Props) => {
	return (
		<div className="flex items-center justify-end p-[10px] border-2 border-blue rounded-xl font-bold text-2xl">
			{result}
		</div>
	);
};

export default Result;
