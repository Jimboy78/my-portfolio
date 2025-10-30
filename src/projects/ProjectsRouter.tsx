import { useState, useEffect } from "react";
import ProjectsGallery from "./ProjectsGallery";
import { allProjects, getProjectById } from "./index";

const ProjectsRouter: React.FC = () => {
	const [selectedProjectId, setSelectedProjectId] = useState<string | null>(
		null
	);

	// Simple hash-based routing
	useEffect(() => {
		const handleHashChange = () => {
			const hash = window.location.hash.slice(1); // Remove #
			if (hash.startsWith("project/")) {
				const projectId = hash.split("/")[1];
				setSelectedProjectId(projectId || null);
			} else {
				setSelectedProjectId(null);
			}
		};

		// Initial check
		handleHashChange();

		// Listen for hash changes
		window.addEventListener("hashchange", handleHashChange);
		return () => window.removeEventListener("hashchange", handleHashChange);
	}, []);

	const handleProjectSelect = (projectId: string) => {
		window.location.hash = `project/${projectId}`;
	};

	const handleBackToGallery = () => {
		window.location.hash = "";
	};

	// Show project detail if one is selected
	if (selectedProjectId) {
		const project = getProjectById(selectedProjectId);
		if (project) {
			const DetailComponent = project.DetailComponent;
			return <DetailComponent onBack={handleBackToGallery} />;
		}
		// Project not found, show gallery
		return (
			<ProjectsGallery
				projects={allProjects}
				onProjectSelect={handleProjectSelect}
			/>
		);
	}

	// Show gallery by default
	return (
		<ProjectsGallery
			projects={allProjects}
			onProjectSelect={handleProjectSelect}
		/>
	);
};

export default ProjectsRouter;
