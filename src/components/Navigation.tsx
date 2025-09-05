import type React from "react";

interface NavigationProps {
	activeTab: number;
	handleChange: (index: number) => void;
	sections: Array<{
		id: string;
		title: string;
		component: JSX.Element;
		icon: JSX.Element;
	}>;
}

const Navigation: React.FC<NavigationProps> = ({
	activeTab,
	handleChange,
	sections,
}) => {
	return (
		<nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 animate-fade-in-down">
			{/* Desktop Navigation */}
			<div className="hidden md:flex backdrop-blur-md bg-white/10 border border-white/20 rounded-full px-6 py-3 shadow-2xl">
				{sections.map((section, index) => (
					<button
						key={section.id}
						onClick={() => handleChange(index)}
						className={`group relative flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
							activeTab === index
								? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg"
								: "text-white/80 hover:text-white hover:bg-white/10"
						}`}
					>
						<div className={`transition-transform duration-300 ${activeTab === index ? 'scale-110' : 'group-hover:scale-110'}`}>
							{section.icon}
						</div>
						<span className="font-medium whitespace-nowrap">{section.title}</span>
						
						{/* Active indicator */}
						{activeTab === index && (
							<div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur opacity-50 animate-pulse"></div>
						)}
					</button>
				))}
			</div>

			{/* Mobile Navigation */}
			<div className="md:hidden">
				<div className="fixed bottom-4 left-4 right-4 backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl shadow-2xl">
					<div className="flex justify-around items-center py-3">
						{sections.map((section, index) => (
							<button
								key={section.id}
								onClick={() => handleChange(index)}
								className={`group relative flex flex-col items-center justify-center px-3 py-2 rounded-xl transition-all duration-300 ${
									activeTab === index
										? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg scale-110"
										: "text-white/70 hover:text-white hover:bg-white/10"
								}`}
							>
								<div className={`transition-transform duration-300 mb-1 ${activeTab === index ? 'scale-110' : 'group-hover:scale-110'}`}>
									{section.icon}
								</div>
								<span className="text-xs font-medium">{section.title}</span>
								
								{/* Active indicator */}
								{activeTab === index && (
									<div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl blur opacity-30 animate-pulse"></div>
								)}
							</button>
						))}
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navigation;