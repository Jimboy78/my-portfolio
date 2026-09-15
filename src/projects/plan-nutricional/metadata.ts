import { Salad } from "lucide-react";
import type { ProjectMetadata } from "../types";
import screenshot from "./assets/screenshot.jpg";

export const planNutricionalMetadata: ProjectMetadata = {
	id: "plan-nutricional",
	title: "Plan Nutricional",
	subtitle: "Personal meal planning app with macro tracking",
	period: "2026",
	status: "production",

	description:
		"A Next.js meal-planning app for tracking a weekly nutrition plan by day, with macro breakdowns, a shopping list generator, batch-cooking view, and a supplements tracker — all persisted client-side.",

	heroImage: screenshot,

	solution: [
		"Day-by-day meal plan view with per-meal macro breakdown (protein/carbs/fat)",
		"Auto-generated shopping list derived from the active plan",
		"Batch-cooking view to group meal prep by ingredient across the week",
		"Supplements tracker and macro summary bar for at-a-glance daily totals",
		"Local persistence via a custom useLocalStorage hook — no backend required",
	],

	highlights: [
		{
			title: "Client-Side Persistence",
			description:
				"Built a typed useLocalStorage hook to persist the entire nutrition plan and user edits in the browser, keeping the app fully static and deployable with zero backend infrastructure.",
		},
		{
			title: "Derived Shopping List",
			description:
				"Shopping list and batch-cooking views are computed from the same underlying plan data rather than maintained separately, so edits to the plan stay consistent everywhere they're shown.",
		},
	],

	techStack: ["Next.js 14", "React 18", "TypeScript", "TailwindCSS"],

	gradient: "from-green-500 via-emerald-500 to-teal-500",
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
