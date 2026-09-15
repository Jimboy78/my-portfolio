import { Atom, Film, Globe2, Users } from "lucide-react";
import type { ProjectMetadata } from "../types";
import screenshot from "./assets/screenshot.jpg";
import dossier from "./assets/dossier.jpg";
import portal from "./assets/portal.jpg";

export const rickMortyMetadata: ProjectMetadata = {
	id: "rick-morty",
	title: "Rick & Morty Multiverse",
	subtitle: "Interactive encyclopedia, portal gun & trivia game",
	period: "2024 — 2026",
	status: "production",

	description:
		"A themed, highly interactive encyclopedia on top of the public Rick and Morty API: an 826-character explorer with filters and infinite scroll, a Portal Gun that pulls a random being through an animated vortex, a guessing game, season timelines and planet browsing — wrapped in three switchable \"dimension\" themes over a live starfield.",

	heroImage: screenshot,

	stats: [
		{ value: "826", label: "Characters", icon: Users },
		{ value: "51", label: "Episodes", icon: Film },
		{ value: "126", label: "Locations", icon: Globe2 },
		{ value: "3", label: "Dimension themes", icon: Atom },
	],

	challenge:
		"The first version was a bare list of 20 characters with no styling. The goal was to turn a simple public API into something that feels like a product: explorable, playable and unmistakably on-theme, without adding a single runtime dependency beyond React.",

	solution: [
		"Typed API service layer covering characters, episodes and locations, including batched multi-ID lookups and graceful 404-as-empty handling for filter combinations",
		"Character explorer with debounced search, status/species/gender filters, IntersectionObserver infinite scroll and AbortController request cancellation",
		"Holographic 3D-tilt cards driven by pointer position via CSS custom properties",
		"Citadel-style dossier modal with stamped status and every episode appearance",
		"Portal Gun: fires a random character through a multi-ring conic-gradient vortex animation",
		"\"Who's that being?\" game — blurred close-up reveal, streaks and a persisted best score",
		"Season timeline with cast-size bars, and a locations browser with lazily loaded resident avatars",
		"Three dimension themes (C-137, Cronenberg, Froopyland) switching a full CSS token palette, canvas starfield, custom SVG portal logo and Creepster/Bangers typography",
	],

	result:
		"A zero-dependency React app that turns a CRUD-style API into an experience — deployed on Vercel, responsive down to phone width and respecting prefers-reduced-motion.",

	highlights: [
		{
			title: "Holographic tilt cards with zero libraries",
			description:
				"Pointer position is written into CSS custom properties; the card's 3D rotation and the moving specular highlight are pure CSS, so React never re-renders on mouse move.",
			code: `const onMove = (e: React.PointerEvent) => {
  const r = el.getBoundingClientRect();
  const x = (e.clientX - r.left) / r.width;
  const y = (e.clientY - r.top) / r.height;
  el.style.setProperty("--rx", \`\${(0.5 - y) * 16}deg\`);
  el.style.setProperty("--ry", \`\${(x - 0.5) * 16}deg\`);
  el.style.setProperty("--mx", \`\${x * 100}%\`);
};`,
			language: "typescript",
		},
		{
			title: "Batched lookups, 404 as empty",
			description:
				"Episode and resident lists arrive as URL arrays; they're collapsed into a single multi-ID request. The API answers 404 for filter combinations with no matches, which the service layer maps to an empty page instead of an error state.",
			code: `async function fetchMany<T>(resource: string, urls: string[]) {
  const ids = urls.map(idFromUrl).filter(Boolean);
  const data = await get<T | T[]>(\`/\${resource}/\${ids.join(",")}\`);
  return Array.isArray(data) ? data : [data];
}`,
			language: "typescript",
		},
		{
			title: "Themeable dimensions",
			description:
				"Every color is a CSS token swapped by a data-dimension attribute on the root; even the canvas starfield reads the current accent token each frame, so switching universes recolors the whole app instantly.",
		},
	],

	screenshots: [
		{ src: screenshot, alt: "Character explorer", caption: "826 characters with filters, infinite scroll and tilt cards" },
		{ src: dossier, alt: "Character dossier modal", caption: "Citadel dossier with every episode appearance" },
		{ src: portal, alt: "Portal Gun", caption: "Portal Gun — a random being through the vortex" },
	],

	techStack: ["React 18", "TypeScript", "Vite", "Canvas API", "CSS Animations", "REST API", "Vercel"],

	gradient: "from-lime-400 via-green-500 to-emerald-600",
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

	featured: true,
};
