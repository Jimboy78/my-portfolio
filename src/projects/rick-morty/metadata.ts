import { Atom } from "lucide-react";
import type { ProjectMetadata } from "../types";
import screenshot from "./assets/screenshot.jpg";

export const rickMortyMetadata: ProjectMetadata = {
	id: "rick-morty",
	title: "Rick & Morty Encyclopedia",
	subtitle: "API-driven character browser",
	period: "2024",
	status: "completed",

	description:
		"A React + TypeScript app consuming the public Rick and Morty API to browse characters, with a typed API service layer decoupled from the UI.",

	heroImage: screenshot,

	solution: [
		"Vite + React + TypeScript setup with strict typing across API responses",
		"Typed API service module for characters, decoupled from UI components",
		"Component-driven character browser backed by live API data",
	],

	highlights: [
		{
			title: "Typed API Service Layer",
			description:
				"Isolated API access into a dedicated service module (CharacterApi) with typed responses, so data-fetching concerns stay decoupled from UI components.",
		},
	],

	techStack: ["React 18", "TypeScript", "Vite", "ESLint"],

	gradient: "from-lime-500 via-green-500 to-emerald-600",
	icon: Atom,
	thumbnailImage: screenshot,

	links: [
		{
			label: "Live Demo",
			url: "https://rick-morty-encyclopedia-seven.vercel.app",
			type: "demo",
		},
		{
			label: "View on GitHub",
			url: "https://github.com/Jimboy78/rick-morty-encyclopedia",
			type: "github",
		},
	],

	featured: false,
};
