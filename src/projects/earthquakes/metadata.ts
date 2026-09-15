import { Waves } from "lucide-react";
import type { ProjectMetadata } from "../types";

export const earthquakesMetadata: ProjectMetadata = {
	id: "earthquakes",
	title: "Earthquake Tracker",
	subtitle: "Ruby on Rails API + React dashboard for real-time seismic data",
	period: "2024",
	status: "completed",

	description:
		"A Ruby on Rails API paired with a React frontend that surfaces real-time earthquake data, lets users drill into individual event details, and persists user comments per earthquake in a relational database.",

	solution: [
		"Rails API with Earthquake and Comment models, exposed through a versioned API controller namespace",
		"React frontend (Context API for state) rendering a list view and a detail view per earthquake",
		"Comment form that writes back to the Rails API and persists to the database",
	],

	highlights: [
		{
			title: "Full-Stack Ruby + React Integration",
			description:
				"Built the API contract from scratch in Rails (models, controllers, serialization) and consumed it from a separate React SPA, demonstrating comfort working across a polyglot stack.",
		},
		{
			title: "Persisted User Comments",
			description:
				"Comments submitted from the frontend are validated and saved server-side against the related earthquake record, rather than kept in local-only state.",
		},
	],

	techStack: ["Ruby on Rails", "React", "JavaScript", "Context API"],

	gradient: "from-amber-600 via-orange-600 to-red-600",
	icon: Waves,

	links: [
		{
			label: "View on GitHub",
			url: "https://github.com/Jimboy78/Frogmi-ruby-task",
			type: "github",
		},
	],

	featured: false,
};
