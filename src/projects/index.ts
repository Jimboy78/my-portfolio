import type { Project } from "./types";

// Import featured projects
import IPTVProject from "./iptv-mobile/IPTVProject";
import { iptvMetadata } from "./iptv-mobile/metadata";
import AventralyProject from "./aventraly/AventralyProject";
import { aventralyMetadata } from "./aventraly/metadata";

// Import other projects
import Printer3dProject from "./3d-printer/Printer3dProject";
import { printer3dMetadata } from "./3d-printer/metadata";
import SmartCityProject from "./smart-city/SmartCityProject";
import { smartCityMetadata } from "./smart-city/metadata";

// All projects organized by category
export const allProjects: Array<Project> = [
	// Featured Projects
	{
		metadata: aventralyMetadata,
		DetailComponent: AventralyProject,
	},
	{
		metadata: iptvMetadata,
		DetailComponent: IPTVProject,
	},
	// Other Projects
	{
		metadata: printer3dMetadata,
		DetailComponent: Printer3dProject,
	},
	{
		metadata: smartCityMetadata,
		DetailComponent: SmartCityProject,
	},
];

// Helper to find project by ID
export const getProjectById = (id: string): Project | undefined => {
	return allProjects.find((p) => p.metadata.id === id);
};

// Export types and components
export { default as ProjectsGallery } from "./ProjectsGallery";
export type { Project, ProjectMetadata } from "./types";
