export const MainButton: React.FC<{ title: string }> = ({ title }) => {
	return (
		<button className="bg-gradient-to-r from-thirdBtnColor via-secondaryBtnColor to-btnColor py-3 px-9 rounded-3xl text-base hover:shadow-lg hover:shadow-boxShadow">
			{title}
		</button>
	);
};
