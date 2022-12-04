export const MainButton: React.FC<{
	title: string;
	active: boolean;
	id: string;
}> = ({ title, active, id }) => {
	return (
		<button
			id={id}
			className={`py-3 px-8 rounded-3xl text-base hover:shadow-lg
		 hover:shadow-boxShadow uppercase text-white font-semibold border border-dashedBorder
		 	${
				active
					? "bg-gradient-to-r from-thirdBtnColor via-secondaryBtnColor to-btnColor "
					: "bg-transparent"
			}
		 
		 `}
		>
			{title}
		</button>
	);
};
