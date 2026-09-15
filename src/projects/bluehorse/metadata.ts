import { Dumbbell, TestTube2, Code2, ShieldCheck } from "lucide-react";
import type { ProjectMetadata } from "../types";
import screenshot from "./assets/screenshot.jpg";

export const bluehorseMetadata: ProjectMetadata = {
	id: "bluehorse",
	title: "Blue Horse",
	subtitle: "Adaptive training PWA for a real gym, built solo end-to-end",
	period: "September 2025 - Present",
	status: "development",

	description:
		"A full-stack adaptive training PWA built for Blue Horse Gym (Arroyo Seco, Santa Fe, Argentina), generating and adjusting workout plans using only the equipment that physically exists in the gym. Designed and built solo, from schema to production deploy.",

	heroImage: screenshot,

	stats: [
		{ value: "35K+", label: "Lines of Code", icon: Code2 },
		{ value: "51", label: "Test Files", icon: TestTube2 },
		{ value: "RLS", label: "Row-Level Security", icon: ShieldCheck },
	],

	challenge:
		"Build a training plan generator for a real gym that respects the gym's actual equipment inventory, adapts to member progress and reported pain/injuries, and keeps sensitive health data properly access-controlled — as a solo project taken from architecture through production deploy.",

	solution: [
		"npm-workspaces monorepo: a pure, dependency-free prescription engine (packages/engine) separated from the PWA (apps/web) so the core logic is unit-testable without React or Supabase",
		"Declarative Supabase schema (supabase/schemas) as the source of truth, with generated migrations and typed database access",
		"Row-Level Security scoping all member data to auth.uid(), with health screenings and pain reports deliberately excluded from any admin-facing surface as a product/privacy decision",
		"Plan adaptation that reacts to reported pain and exercise swaps while respecting injury constraints",
		"An anonymized analytics CLI (npm run admin) that studies prescription quality by route (goal · level · frequency · duration) rather than by person — using completion rate as the real signal of plan quality",
		"Three hard safety rails on the admin tooling: destructive commands refuse to run against anything but 127.0.0.1, free-form SQL is read-only-enforced, and test-data cleanup matches by test-email pattern rather than a blanket wipe",
	],

	result:
		"Phases 1–3 complete (skeleton/catalog, engine/session, adaptation/progress/offline) and deployed to Vercel with continuous deploy from main. Phase 4 (the gym's real exercise catalog) is blocked on manual content research, not code.",

	highlights: [
		{
			title: "Pure, Testable Prescription Engine",
			description:
				"The plan-generation engine lives in its own package with zero dependency on React or Supabase — a plain function that takes a member's goals/constraints and the equipment catalog and returns a plan, making it fully unit-testable in isolation.",
		},
		{
			title: "Privacy-First RLS Design",
			description:
				"Row-Level Security restricts every table to its owning user by default. Health screenings and pain reports are excluded from the admin panel entirely by design — not an oversight — since gym staff have no business need to see medical data.",
		},
		{
			title: "Anonymized Prescription Analytics",
			description:
				"Built a CLI that evaluates the engine by prescription route (goal/level/frequency/duration combinations) instead of by individual member, using session-completion rate as the ground-truth signal for whether a generated plan is actually well-calibrated.",
		},
		{
			title: "Guardrailed Admin Tooling",
			description:
				"The same admin CLI can point at local or production Supabase with one env var, so every destructive or raw-SQL command enforces its own safety check: localhost-only for destructive ops, SELECT/WITH-only and semicolon-free for raw SQL, and pattern-matched cleanup that only ever removes known test accounts.",
		},
		{
			title: "Monorepo-Aware Vercel Deploy",
			description:
				"Custom vercel.json build configuration installs from the repo root (not apps/web) so npm workspace resolution for @bh/domain and @bh/engine keeps working in production, plus SPA rewrites so deep links like /instalar and /progreso survive a direct hit (e.g. scanning a QR code at the gym).",
		},
	],

	techStack: [
		"React",
		"TypeScript",
		"Vite",
		"PWA",
		"Supabase",
		"PostgreSQL",
		"Row-Level Security",
		"Zod",
		"npm workspaces",
		"Biome",
		"Vitest",
		"Vercel",
	],

	gradient: "from-blue-700 via-indigo-700 to-slate-800",
	icon: Dumbbell,
	thumbnailImage: screenshot,

	links: [
		{
			label: "Live Demo",
			url: "https://bluehorse-app.vercel.app",
			type: "demo",
		},
		{
			label: "View on GitHub",
			url: "https://github.com/Jimboy78/bluehorse-app",
			type: "github",
		},
	],

	featured: true,
};
