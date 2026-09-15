import { CalendarCheck, Flame, MapPin, Trophy, Users } from "lucide-react";
import type { ProjectMetadata } from "../types";
import showcase from "./assets/showcase.jpg";
import discover from "./assets/discover.jpg";
import ranking from "./assets/ranking.jpg";
import courts from "./assets/courts.jpg";

export const sportsMatchmakingMetadata: ProjectMetadata = {
	id: "sports-matchmaking",
	title: "MatchPoint",
	subtitle: "Sports matchmaking app — swipe for partners, book courts, climb the ranking",
	period: "2024 — 2026",
	status: "production",

	description:
		"A cross-platform React Native (Expo) app for pádel, tennis and volleyball players: swipe through nearby players ranked by an affinity score, celebrate a match, book a court by day and time slot, find courts on a map, score the match point by point with a live scorer that knows the real rules, and track your ELO on an animated leaderboard. Runs on iOS, Android and the web, where it's presented inside a phone frame next to a landing page.",

	stats: [
		{ value: "6", label: "Screens", icon: Users },
		{ value: "3", label: "Sports", icon: Trophy },
		{ value: "3", label: "Platforms (iOS · Android · Web)", icon: MapPin },
		{ value: "0", label: "Runtime UI libraries", icon: Flame },
	],

	challenge:
		"The first version was a set of disconnected screens: hardcoded lists, placeholder images from a dead service, a map that couldn't run on the web and a match screen referencing state that didn't exist. The goal was a cohesive product you can actually try from a browser.",

	solution: [
		"Swipe-to-match deck built on PanResponder + Animated, with rotation, JUGAMOS/PASO stamps and a spring-in match celebration",
		"Affinity score per player from level gap, shared availability and distance — the deck is ordered by it",
		"Booking sheet: court, next seven days and time slots with already-taken hours, feeding a live next-match countdown on Home",
		"Courts screen with a platform-split map: react-native-maps on native, Leaflet on web via a .web.tsx module",
		"Live match scorer with real rules — tennis/pádel 15-30-40, deuce/advantage or golden point, 6-6 tie-break with correct serve rotation, best of 3; volleyball rally scoring to 25/15 — plus animated BREAK/SET/MATCH POINT callouts, momentum, stats and undo",
		"Finishing a match computes a real Elo update against the rival's rating and feeds profile, streak, recent form and history",
		"Leaderboard with an animated podium and ELO trends;profile with rating, level progress, recent form, match history and inline editing",
		"Single reducer-based app store shared across tabs; dark lime design system with an SVG logo, generated app icons and Bebas Neue / Inter",
		"Expo web export deployed to Vercel, wrapped on desktop in a landing column + phone frame",
	],

	result:
		"A prototype that now reads like a real product and can be demoed from a link, while keeping one codebase for mobile and web.",

	highlights: [
		{
			title: "Affinity-ranked swipe deck",
			description:
				"Every candidate gets a 0–100 score blending skill level, overlapping availability and distance; high scores trigger an instant match, the rest become pending invitations.",
			code: `export function compatibility(p: Player, me: Profile) {
  const levelScore = Math.max(0, 1 - Math.abs(p.level - me.level) / 3);
  const shared = p.availability.filter((a) => me.availability.includes(a)).length;
  const availScore = Math.min(1, shared / 2);
  const distScore = Math.max(0, 1 - p.distanceKm / 15);
  return Math.round((levelScore * 0.5 + availScore * 0.3 + distScore * 0.2) * 100);
}`,
			language: "typescript",
		},
		{
			title: "Scoring engine as a replay of the point log",
			description:
				"The match is never stored as mutable score — it's derived by replaying every point. Undo is dropping the last entry, and callouts (BREAK, SET, MATCH POINT) come from replaying both possible next points and checking what changes. Rules are covered by 13 assertion checks.",
			code: `const gameWon = ps >= 4 && (ps - po >= 2 || (config.goldenPoint && po >= 3));
if (!gameWon) continue;
if (s !== snap.server) snap.breaks[s]++;
snap.games[s]++;
snap.server = other(snap.server);
if (gs === 6 && go === 6) {
  snap.tiebreak = true;          // first to 7, win by 2
  tbServer = snap.server;        // one serve, then alternate every two
}`,
			language: "typescript",
		},
		{
			title: "One screen, two map engines",
			description:
				"Metro resolves CourtsMap.web.tsx on the web (Leaflet with keyless dark tiles and emoji pins) and CourtsMap.tsx on iOS/Android (react-native-maps), behind the same props — the Courts screen never branches on platform.",
		},
		{
			title: "Gestures without a gesture library",
			description:
				"The swipe card reads the latest deck through refs so the PanResponder is created once, animates off-screen, dispatches like/pass and resets on the next frame after React swaps in the next card — no flicker, works with touch and mouse.",
		},
	],

	techStack: [
		"React Native",
		"Expo SDK 51",
		"TypeScript",
		"React Navigation",
		"react-native-maps",
		"Leaflet",
		"react-native-svg",
		"Vercel",
	],

	screenshots: [
		{ src: showcase, alt: "Desktop showcase", caption: "Web build: landing column next to the app in a phone frame" },
		{ src: discover, alt: "Discover deck", caption: "Swipe deck ordered by affinity score" },
		{ src: ranking, alt: "Leaderboard", caption: "Animated podium with ELO per sport" },
		{ src: courts, alt: "Courts map", caption: "Nearby courts on a Leaflet map with prices and ratings" },
	],

	thumbnailImage: showcase,

	gradient: "from-lime-400 via-green-500 to-emerald-600",
	icon: CalendarCheck,

	links: [
		{
			label: "Live Demo",
			url: "https://matchpoint-sports.vercel.app",
			type: "demo",
		},
		{
			label: "View on GitHub",
			url: "https://github.com/Jimboy78/sports-matchmaking",
			type: "github",
		},
	],

	featured: false,
};
