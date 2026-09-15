import { BookOpenText, Brain, Dices, Coins } from "lucide-react";
import type { ProjectMetadata } from "../types";
import landing from "./assets/landing.jpg";
import memoria from "./assets/play-memoria.jpg";
import motor from "./assets/play-motor.jpg";
import neonScene from "./assets/neon-scene.jpg";
import gameOver from "./assets/game-over.jpg";
import setup from "./assets/new.jpg";
import mobile from "./assets/mobile-sheet.jpg";

export const aventraStorytellerMetadata: ProjectMetadata = {
	id: "aventra-storyteller",
	title: "Aventra",
	subtitle: "AI role-playing engine with real dice, JSON Patch world state and long-term vector memory",
	period: "2025 — 2026",
	status: "production",

	description:
		"A narrative RPG where an AI game master runs the session entirely in the browser. The engine rolls a seeded d20 and tells the narrator the outcome, streams a strict structured turn, turns it into RFC 6902 patches over the world state, stores every scene as an embedding and brings distant memories back into context, summarises chapters and paints key scenes. Players bring their own OpenAI key; the public demo replays real recorded adventures with zero API calls.",

	stats: [
		{ value: "d20", label: "Engine-resolved risk", icon: Dices },
		{ value: "0.4–0.78", label: "Memory recall similarity", icon: Brain },
		{ value: "~$0.05", label: "Per 12-turn adventure", icon: Coins },
		{ value: "0", label: "Servers", icon: BookOpenText },
	],

	challenge:
		"The first version (FastAPI + LangChain + ChromaDB) never kept its promises: the frontend never received updated state, sessions weren't wired, vector memory was silently disabled and illustrations were placeholder rectangles. LLM storytellers also drift — they forget characters, invent inventory and decide success arbitrarily.",

	solution: [
		"Seeded d20 per adventure and turn: DC from risk, difficulty, wounds and health; the narrator receives the outcome for each risk level and must honour it",
		"Strict JSON-schema output streamed with the AI SDK (narration first), validated with Zod — nested schemas post-processed for OpenAI strict mode",
		"Reducer converts the narrator's delta into RFC 6902 ops applied one by one, so initial state + patches replays every save exactly",
		"Long-term memory: scenes and canonical facts embedded (512-d) in IndexedDB, cosine top-5 outside the recent window, chapter summaries every 6 turns",
		"Scene illustrations with gpt-image-1-mini at most once every three turns, re-encoded to WebP",
		"Sidebar with hero sheet, inventory, NPC attitude meters, bestiary that redacts unidentified creatures, quests, journal, memory inspector and an engine panel with per-stage timings and the applied patch",
		"Bring-your-own-key: the browser calls OpenAI directly; public demo replays recorded adventures with no key",
	],

	result:
		"Deployed as a static app with a free public demo. Verified end to end in Chrome with a real key: streamed opening, 11 turns with dice, memory recall, chapter summary, illustrations, reload from IndexedDB, export with exact patch replay, import and mobile layout.",

	highlights: [
		{
			title: "A turn is a pipeline, not a prompt",
			description:
				"Recall, roll, narrate, apply, memorise, summarise, illustrate — each stage is timed and shown in the engine panel.",
			code: `const memories = rankMemories(records, await embed(query), index); // cosine, outside last 3 turns
const roll = rollD20(adventure.seed, index);                          // reproducible
const { object } = await narrateTurn({ prompt: buildTurnPrompt({ state, roll, memories }) });
const { state: next, ops } = reduceTurn(state, object, index);        // delta -> RFC 6902
await db.putMemories(embedScene(turn, next));`,
			language: "typescript",
		},
		{
			title: "The model narrates the dice, it doesn't decide them",
			description:
				"The prompt carries the real roll resolved for low, medium and high risk. The narrator assesses the risk and tells the matching outcome in the fiction; a fumble on a high-risk move can end the story.",
		},
		{
			title: "Replays are just patches",
			description:
				"Saves store the initial state and each turn's ops. The demo rebuilds the sidebar state turn by turn with the same applier used while playing — the E2E asserts the replayed state equals the saved one byte for byte.",
		},
		{
			title: "Zero-cost hosting",
			description:
				"No backend and no environment secrets: keys stay in the player's browser storage, and the portfolio demo never touches the API.",
		},
	],

	techStack: [
		"Next.js 15",
		"React 19",
		"TypeScript",
		"AI SDK 5",
		"GPT-4.1 mini",
		"text-embedding-3-small",
		"gpt-image-1-mini",
		"Zod",
		"JSON Patch",
		"IndexedDB",
		"TailwindCSS",
		"Playwright",
		"Vercel",
	],

	screenshots: [
		{ src: landing, alt: "Landing", caption: "Landing with a recorded adventure" },
		{ src: memoria, alt: "Memory inspector", caption: "Dice roll and the distant memories recalled for a turn" },
		{ src: motor, alt: "Engine panel", caption: "Engine panel: tokens, cost, stage timings and applied JSON Patch" },
		{ src: neonScene, alt: "Scene illustration", caption: "Cyberpunk run with a generated scene illustration" },
		{ src: gameOver, alt: "Ending", caption: "Ending screen after the hero retires" },
		{ src: setup, alt: "Setup wizard", caption: "World presets and hero creation" },
		{ src: mobile, alt: "Mobile character sheet", caption: "Character sheet on mobile" },
	],

	thumbnailImage: neonScene,

	gradient: "from-violet-600 via-fuchsia-600 to-indigo-600",
	icon: BookOpenText,

	links: [
		{
			label: "Watch a recorded adventure",
			url: "https://aventra-tau.vercel.app/demo?s=reinos-de-ceniza",
			type: "demo",
		},
		{
			label: "View on GitHub",
			url: "https://github.com/Jimboy78/Aventra",
			type: "github",
		},
	],

	featured: true,
};
