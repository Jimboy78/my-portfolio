import type React from "react";
// import { useTheme } from "../styles/ThemeContext";

interface NavigationProps {
	activeTab: number;
	handleChange: (index: number) => void;
	sections: Array<{
		id: string;
		title: string;
		component: JSX.Element;
		icon: JSX.Element;
	}>; // Asegúrate de definir el tipo de secciones
}

const Navigation: React.FC<NavigationProps> = ({
	activeTab,
	handleChange,
	sections,
}) => {
	// const { theme, toggleTheme } = useTheme(); // Usa el contexto de tema

	return (
		<nav className="fixed z-10 bg-white shadow-md rounded-2xl ">
			{/* Desktop Navigation */}
			<div className=" hidden md:flex justify-center  items-center h-10">
				{sections.map((section, index) => (
					<button
						key={section.id}
						onClick={() => {
							handleChange(index);
						}}
						className={`flex items-center space-x-1 px-4  transition-colors duration-300 ${
							activeTab === index
								? "text-yellow-400 font-bold  border-yellow-400"
								: "text-gray-800 hover:text-yellow-500"
						}`}
					>
						{section.icon}
						<span>{section.title}</span>
					</button>
				))}
				{/* Theme Toggle
				<label className="flex items-center cursor-pointer mx-2">
					<input
						type="checkbox"
						className="hidden"
						onChange={toggleTheme}
						checked={theme === "light"}
					/>
					<div
						className={`w-10 h-5 bg-gray-400 rounded-full flex items-center p-1 transition-all duration-300 ${theme === "light" ? "bg-yellow-500" : ""}`}
					>
						<div
							className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-300 ${theme === "light" ? "translate-x-5" : ""}`}
						></div>
					</div>
				</label> */}
			</div>

			{/* Mobile Navigation */}
			<div className="md:hidden">
				<div className="fixed bottom-0 left-0 right-0 bg-white shadow-md flex justify-around items-center h-16">
					{sections.map((section, index) => (
						<button
							key={section.id}
							onClick={() => {
								handleChange(index);
							}}
							className={`flex flex-col items-center justify-center w-full h-full transition-colors duration-300 ${
								activeTab === index
									? "text-yellow-400 font-bold"
									: "text-gray-800"
							}`}
						>
							{section.icon}
							<span className="text-xs mt-1">{section.title}</span>
						</button>
					))}
				</div>
			</div>
		</nav>
	);
};

export default Navigation;
