import { Droplets, Flame, Salad, Target, Utensils } from "lucide-react";
import type { ProjectMetadata } from "../types";
import screenshot from "./assets/screenshot.jpg";
import hoyRings from "./assets/hoy-rings.jpg";
import week from "./assets/week.jpg";
import dark from "./assets/dark.jpg";

export const planNutricionalMetadata: ProjectMetadata = {
	id: "plan-nutricional",
	title: "Plan Nutricional",
	subtitle: "Athlete nutrition coach: live macro rings, streaks & hydration",
	period: "2026",
	status: "production",

	description:
		"A Next.js nutrition coach built around a real basketball player's training week. It detects today's day type, tracks meals against per-day macro targets with animated rings, counts down to the next meal, logs hydration, keeps a streak of completed days — plus supplements, batch cooking and a weekly shopping list.",

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

	techStack: ["Next.js 14", "React 18", "TypeScript", "SVG", "CSS Animations", "localStorage", "Vercel"],

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
