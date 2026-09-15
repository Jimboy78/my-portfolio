import type { Project } from "./types";

// Import featured projects
import IPTVProject from "./iptv-mobile/IPTVProject";
import { iptvMetadata } from "./iptv-mobile/metadata";
import AventralyProject from "./aventraly/AventralyProject";
import { aventralyMetadata } from "./aventraly/metadata";

import AutoYTProject from "./autoyt/AutoYTProject";
import { autoytMetadata } from "./autoyt/metadata";
import AventraStorytellerProject from "./aventra-storyteller/AventraStorytellerProject";
import { aventraStorytellerMetadata } from "./aventra-storyteller/metadata";

// Import other projects
import Printer3dProject from "./3d-printer/Printer3dProject";
import { printer3dMetadata } from "./3d-printer/metadata";
import SmartCityProject from "./smart-city/SmartCityProject";
import { smartCityMetadata } from "./smart-city/metadata";
import PlanNutricionalProject from "./plan-nutricional/PlanNutricionalProject";
import { planNutricionalMetadata } from "./plan-nutricional/metadata";
import RickMortyProject from "./rick-morty/RickMortyProject";
import { rickMortyMetadata } from "./rick-morty/metadata";
import EarthquakesProject from "./earthquakes/EarthquakesProject";
import { earthquakesMetadata } from "./earthquakes/metadata";
import SportsMatchmakingProject from "./sports-matchmaking/SportsMatchmakingProject";
import { sportsMatchmakingMetadata } from "./sports-matchmaking/metadata";

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
	{
		metadata: autoytMetadata,
		DetailComponent: AutoYTProject,
	},
	{
		metadata: aventraStorytellerMetadata,
		DetailComponent: AventraStorytellerProject,
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
	{
		metadata: planNutricionalMetadata,
		DetailComponent: PlanNutricionalProject,
	},
	{
		metadata: earthquakesMetadata,
		DetailComponent: EarthquakesProject,
	},
	{
		metadata: sportsMatchmakingMetadata,
		DetailComponent: SportsMatchmakingProject,
	},
	{
		metadata: rickMortyMetadata,
		DetailComponent: RickMortyProject,
	},
];

// Helper to find project by ID
export const getProjectById = (id: string): Project | undefined => {
	return allProjects.find((p) => p.metadata.id === id);
};

// Export types and components
export { default as ProjectsGallery } from "./ProjectsGallery";
export type { Project, ProjectMetadata } from "./types";
