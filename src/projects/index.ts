import type { Project } from "./types";

// Import projects
import IPTVProject from "./iptv-mobile/IPTVProject";
import { iptvMetadata } from "./iptv-mobile/metadata";

// Add your projects here
// When you add a new project, just import it and add to this array
export const allProjects: Array<Project> = [
	{
		metadata: iptvMetadata,
		DetailComponent: IPTVProject,
	},
	// Add more projects here:
	// {
	//   metadata: erpMetadata,
	//   DetailComponent: ERPProject,
	// },
];

// Helper to find project by ID
export const getProjectById = (id: string): Project | undefined => {
	return allProjects.find((p) => p.metadata.id === id);
};

// Export types and components
export { default as ProjectsGallery } from "./ProjectsGallery";
export type { Project, ProjectMetadata } from "./types";
