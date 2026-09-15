import { Users } from "lucide-react";
import type { ProjectMetadata } from "../types";

export const sportsMatchmakingMetadata: ProjectMetadata = {
	id: "sports-matchmaking",
	title: "Sports Matchmaking",
	subtitle: "React Native app for finding nearby sports partners",
	period: "2024",
	status: "completed",

	description:
		"A React Native (Expo) mobile app for matching people with nearby sports partners — combining a profile system, a map-based partner finder, matchmaking, and a ranking view.",

	solution: [
		"Profile creation and display flow (ProfileForm, ProfileInput, ProfileDisplay)",
		"Map-based screen (react-native-maps) for finding nearby players",
		"Matchmaking screen and player ranking view",
		"React Navigation for screen flow, NativeWind for styling",
	],

	highlights: [
		{
			title: "Map-Based Discovery",
			description:
				"Integrated react-native-maps to let users discover nearby matches geographically rather than through a plain list, closer to how a real matchmaking product would work.",
		},
		{
			title: "Full Screen Flow",
			description:
				"Built out a complete navigation flow — home, profile, map, match, ranking, and contact — using React Navigation and a shared context for matchmaking state.",
		},
	],

	techStack: [
		"React Native",
		"Expo",
		"TypeScript",
		"React Navigation",
		"react-native-maps",
		"NativeWind",
	],

	gradient: "from-sky-500 via-blue-600 to-cyan-600",
	icon: Users,

	links: [
		{
			label: "View on GitHub",
			url: "https://github.com/Jimboy78/sports-matchmaking",
			type: "github",
		},
	],

	featured: false,
};
