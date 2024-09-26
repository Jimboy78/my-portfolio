import { useState, useEffect, useRef } from "react";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import Profile from "./components/Profile";
import Technologies from "./components/Technologies";
import WorkExperience from "./components/WorkExperience";
import PersonalExperience from "./components/PersonalExperience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import ContactForm from "./components/ContactForm";
import { useTheme } from "./styles/ThemeContext";
import {
	FiUser,
	FiCode,
	FiBriefcase,
	FiBook,
	FiGrid,
	FiMail,
} from "react-icons/fi";

const sections = [
	{ id: "profile", title: "Profile", component: <Profile />, icon: <FiUser /> },
	{
		id: "technologies",
		title: "Skills",
		component: <Technologies />,
		icon: <FiCode />,
	},
	{
		id: "work-experience",
		title: "Work Exp",
		component: <WorkExperience />,
		icon: <FiBriefcase />,
	},
	{
		id: "personal-experience",
		title: "Personal Exp",
		component: <PersonalExperience />,
		icon: <FiUser />,
	},
	{
		id: "education",
		title: "Education",
		component: <Education />,
		icon: <FiBook />,
	},
	{
		id: "projects",
		title: "Projects",
		component: <Projects />,
		icon: <FiGrid />,
	},
	// {
	// 	id: "contact-form",
	// 	title: "Contact",
	// 	component: <ContactForm />,
	// 	icon: <FiMail />,
	// },
];

const App: React.FC = () => {
	const [activeTab, setActiveTab] = useState(0);
	const { theme } = useTheme(); // Usa el contexto de tema

	const sectionRefs = useRef<Array<HTMLDivElement | null>>(
		Array.from({ length: sections.length }).fill(null)
	);

	const handleChange = (index: number) => {
		setActiveTab(index);
		sectionRefs.current[index]?.scrollIntoView({ behavior: "smooth" });
	};

	useEffect(() => {
		const options = {
			root: null,
			rootMargin: "0px",
			threshold: 0.1,
		};

		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				const index = sectionRefs.current.indexOf(entry.target);
				if (entry.isIntersecting) {
					setActiveTab(index);
				}
			});
		}, options);

		sectionRefs.current.forEach((ref) => {
			if (ref) observer.observe(ref);
		});

		return () => {
			sectionRefs.current.forEach((ref) => {
				if (ref) observer.unobserve(ref);
			});
		};
	}, []);

	return (
		<main>
			<div className=" flex flex-col items-center md:pt-3 -0 max-w-screen-lg mx-auto">
				{/* Barra de navegación */}
				<Navigation
					activeTab={activeTab}
					handleChange={handleChange}
					sections={sections}
				/>

				{/* Espaciado para evitar que la barra fija cubra los componentes */}
				<div className="mt-20 w-full">
					{sections.map((section, index) => (
						<div
							key={section.id}
							ref={(element) => (sectionRefs.current[index] = element)}
							id={section.id}
							className="md:py-5"
						>
							{section.component}
						</div>
					))}
					<Footer />
				</div>
			</div>
		</main>
	);
};

export default App;
