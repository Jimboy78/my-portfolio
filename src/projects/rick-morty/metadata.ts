import { Atom } from "lucide-react";
import type { ProjectMetadata } from "../types";

export const rickMortyMetadata: ProjectMetadata = {
	id: "rick-morty",
	title: "Rick & Morty Encyclopedia",
	subtitle: "API-driven character, episode, and location browser",
	period: "2024",
	status: "completed",

	description:
		"A React + TypeScript app consuming the public Rick and Morty API to browse characters, episodes, and locations, with dedicated service modules for each resource type.",

	solution: [
		"Vite + React + TypeScript setup with strict typing across API responses",
		"Separate API service modules for characters, episodes, and locations",
		"Component-driven character browser backed by live API data",
	],

	highlights: [
		{
			title: "Typed API Service Layer",
			description:
				"Isolated API access into dedicated service modules (CharacterApi, EpisodeApi, LocationApi) so data-fetching concerns stay decoupled from UI components.",
		},
	],

	techStack: ["React 18", "TypeScript", "Vite", "ESLint"],

	gradient: "from-lime-500 via-green-500 to-emerald-600",
	icon: Atom,

	links: [
		{
			label: "View on GitHub",
			url: "https://github.com/Jimboy78/rick-morty-encyclopedia",
			type: "github",
		},
	],

	featured: false,
};
