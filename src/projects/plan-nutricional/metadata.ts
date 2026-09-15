import { Droplets, Flame, Salad, Target, Utensils } from "lucide-react";
import type { ProjectMetadata } from "../types";
import screenshot from "./assets/screenshot.jpg";
import hoyRings from "./assets/hoy-rings.jpg";
import week from "./assets/week.jpg";
import dark from "./assets/dark.jpg";

export const planNutricionalMetadata: ProjectMetadata = {
	id: "plan-nutricional",
	title: "Plan Nutricional",
	subtitle: "Athlete nutrition coach: live macro rings, streaks, hydration & a batch-cooking planner",
	period: "2026",
	status: "production",

	description:
		"A Next.js nutrition coach built around a real basketball player's training week. It detects today's day type, tracks meals against per-day macro targets with animated rings, counts down to the next meal, logs hydration, keeps a streak of completed days, and turns Sunday meal prep into a scheduled cooking session — pick the week's preparations, get an oven/burner timeline where everything finishes together, then follow a full-screen cook mode with timers and alarms. Plus supplements and a weekly shopping list.",

	heroImage: screenshot,

	stats: [
		{ value: "3", label: "Day types (court / gym / rest)", icon: Target },
		{ value: "17", label: "Meals across the plan", icon: Utensils },
		{ value: "3.4k", label: "kcal on court days", icon: Flame },
		{ value: "2.5 L", label: "Daily hydration goal", icon: Droplets },
	],

	challenge:
		"A static nutrition plan in a document is easy to ignore. The goal was a daily companion that answers \"what do I eat next and how am I doing?\" in one glance, and makes sticking to the plan feel rewarding — without a backend or an account.",

	solution: [
		"\"Hoy\" dashboard as the default view: today's day type from the weekday, greeting, target kcal and a meal progress bar",
		"Animated SVG macro rings (kcal, carbs, protein, fat) computed from checked meals and the chosen option for each meal",
		"Next-meal card with a live countdown parsed from the plan's schedule",
		"Hydration tracker with animated water glasses, reset per day",
		"Streak of consecutive completed days derived from per-date localStorage history, with confetti when the day is complete",
		"Weekly training chart color-coded by day type, highlighting today",
		"Batch-cooking planner: select preparations (or a one-tap typical week) and a scheduler parses the plan's free text into station, oven temperature, duration and tupper yield",
		"Session timeline as a Gantt chart — oven rounds by temperature with shared trays, two burners packed longest-first, counter prep — aligned so everything is ready at the same time, with minutes saved vs cooking one at a time",
		"Full-screen cook mode: session ring clock, Now / Next / Done columns with per-dish countdown rings, start and finish alarms (Web Audio + vibration), Screen Wake Lock, and a session that survives reloads",
		"Brand identity: basketball-and-leaf SVG logo and favicon, Bebas Neue + Outfit via next/font, animated gradient header, sticky pill navigation and dark mode",
	],

	result:
		"A fully static Next.js app on Vercel that works as a daily habit tool: every piece of state lives on-device, keyed by date, so history, streaks and daily resets come for free.",

	highlights: [
		{
			title: "Streaks from date-keyed storage",
			description:
				"Each day's checklist is stored under its own date key, so a streak is just a walk backwards through history checking whether every meal of that day's plan was completed — no extra bookkeeping.",
			code: `function computeStreak(): number {
  let streak = 0;
  for (let i = 1; i <= 90; i++) {
    const d = new Date(Date.now() - i * 86400000);
    const type = getDayTypeFor(d);
    const map = JSON.parse(localStorage.getItem(\`nutri_meals_\${getDateKeyFor(d)}\`) ?? "{}");
    if ((map[type]?.length ?? 0) >= PLAN[type].comidas.length) streak++;
    else break;
  }
  return streak;
}`,
			language: "typescript",
		},
		{
			title: "A kitchen scheduler that finishes everything together",
			description:
				"Oven work is grouped by temperature (hottest first) with up to three trays per round, and shorter trays go in later so a round comes out at once. Burners are packed longest-first, then burner and counter lanes are shifted so they end with the oven.",
			code: `const total = Math.max(0, ovenEnd, counterEnd, ...burners);
for (const s of stove) {
  // start later instead of finishing early: food comes out hot, all at once
  const shift = total - burners[laneIndex(s)];
  scheduled.push({ ...s, start: s.start + shift, end: s.end + shift });
}`,
			language: "typescript",
		},
		{
			title: "Timers that survive a reload",
			description:
				"The cook session stores only the selection, a start timestamp and accumulated pause time. Elapsed time is derived on every tick, so reloading or minimizing never loses progress, and alarms fire for each start or finish the clock crossed since the previous tick.",
		},
		{
			title: "Macros follow the chosen option",
			description:
				"Many meals offer alternatives with different macros. Rings, the summary bar and the day view all resolve a meal's macros through the same helper, so switching an option updates every total consistently.",
		},
		{
			title: "SVG rings with CSS-driven motion",
			description:
				"Progress is a stroke-dashoffset on a circle; the fill animates with a CSS transition and glows once a target is reached — no charting library.",
		},
	],

	screenshots: [
		{ src: screenshot, alt: "Hoy dashboard", caption: "Today's day type, targets, meal progress and streak" },
		{ src: hoyRings, alt: "Macro rings and hydration", caption: "Live macro rings, next meal and hydration tracker" },
		{ src: week, alt: "Weekly training chart", caption: "Weekly plan color-coded by day type" },
		{ src: dark, alt: "Completed day in dark mode", caption: "Day complete — streak and celebration, in dark mode" },
	],

	techStack: ["Next.js 14", "React 18", "TypeScript", "SVG", "CSS Animations", "Web Audio API", "Screen Wake Lock API", "localStorage", "Vercel"],

	gradient: "from-orange-500 via-amber-500 to-green-500",
	icon: Salad,
	thumbnailImage: screenshot,

	links: [
		{
			label: "Live Demo",
			url: "https://plan-nutricional-two.vercel.app",
			type: "demo",
		},
		{
			label: "View on GitHub",
			url: "https://github.com/Jimboy78/plan-nutricional",
			type: "github",
		},
	],

	featured: false,
};
