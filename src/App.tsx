import { useState, useEffect } from "react";
import ResumeLayout from "./components/ResumeLayout";
import ProjectsRouter from "./projects/ProjectsRouter";

const App: React.FC = () => {
	const [currentView, setCurrentView] = useState<"home" | "projects">("home");

	// Simple hash-based routing
	useEffect(() => {
		const handleHashChange = () => {
			const hash = window.location.hash.slice(1); // Remove #
			if (hash.startsWith("projects") || hash.startsWith("project/")) {
				setCurrentView("projects");
			} else {
				setCurrentView("home");
			}
		};

		// Initial check
		handleHashChange();

		// Listen for hash changes
		window.addEventListener("hashchange", handleHashChange);
		return () => window.removeEventListener("hashchange", handleHashChange);
	}, []);

	// Render current view
	return currentView === "projects" ? <ProjectsRouter /> : <ResumeLayout />;
};

export default App;
