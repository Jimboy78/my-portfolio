import { BookOpenText } from "lucide-react";
import type { ProjectMetadata } from "../types";

export const aventraStorytellerMetadata: ProjectMetadata = {
	id: "aventra-storyteller",
	title: "Aventra",
	subtitle: "AI-powered interactive story generator with persistent memory",
	period: "2025",
	status: "completed",

	description:
		"A full-stack interactive fiction engine that generates branching narrative with GPT-4.1 mini, illustrates scenes on demand with Gemini 2.5 Flash, and remembers characters and world state across sessions using a vector-backed memory layer.",

	challenge:
		"Interactive fiction generators tend to lose narrative coherence over long sessions — characters contradict themselves, plot threads vanish. Needed a system that keeps track of story state and entities across an open-ended session.",

	solution: [
		"FastAPI backend orchestrating GPT-4.1 mini for narrative generation and Gemini 2.5 Flash for on-demand scene illustration",
		"LangChain + vector memory (ChromaDB) so characters, locations, and plot facts persist and get retrieved as context grows",
		"JSON-patch based state updates for efficient, incremental game-state persistence instead of full-state rewrites",
		"Save/load system with versioned game saves",
		"Next.js frontend with the Vercel AI SDK for streaming story text as it's generated",
	],

	result:
		"Working end-to-end prototype: session setup, story generation, image generation, save/load, and a debug/trace system for inspecting model reasoning during development.",

	highlights: [
		{
			title: "Vector Memory for Narrative Consistency",
			description:
				"Entities and plot facts are embedded and stored in ChromaDB, then retrieved as relevant context on each turn — keeping long sessions coherent without replaying the entire story history to the model.",
		},
		{
			title: "Dual-Model Pipeline",
			description:
				"Text generation and image generation are split across two specialized models (GPT-4.1 mini and Gemini 2.5 Flash), coordinated by a service layer that manages prompting, retries, and response shaping for each.",
		},
		{
			title: "Incremental State via JSON Patches",
			description:
				"Game state updates are expressed as JSON patches rather than full snapshots, reducing payload size and making state changes auditable during debugging.",
		},
		{
			title: "Debug & Trace System",
			description:
				"Built dedicated debug endpoints and tracing to inspect prompts, model outputs, and state transitions — essential for iterating on prompt design for a generative narrative system.",
		},
	],

	techStack: [
		"Python",
		"FastAPI",
		"LangChain",
		"ChromaDB",
		"GPT-4.1 mini",
		"Gemini 2.5 Flash",
		"Next.js",
		"TypeScript",
		"Vercel AI SDK",
		"TailwindCSS",
	],

	gradient: "from-violet-600 via-fuchsia-600 to-indigo-600",
	icon: BookOpenText,

	links: [
		{
			label: "View on GitHub",
			url: "https://github.com/Jimboy78/Aventra",
			type: "github",
		},
	],

	featured: true,
};
