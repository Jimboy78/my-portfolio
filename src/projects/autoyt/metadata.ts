import { AudioLines, Clapperboard, Layers, TestTube2 } from "lucide-react";
import type { ProjectMetadata } from "../types";
import studio from "./assets/studio.jpg";
import waveform from "./assets/waveform.jpg";
import thumbnails from "./assets/thumbnails.jpg";
import landing from "./assets/landing.jpg";

export const autoytMetadata: ProjectMetadata = {
	id: "autoyt",
	title: "AutoYT",
	subtitle: "Finds the best moments of a VOD, builds YouTube chapters and proposes thumbnails",
	period: "2025 — 2026",
	status: "production",

	description:
		"A video auto-editing platform for YouTube creators. The live Studio runs entirely in the browser: drop a stream VOD and it detects highlights from audio energy, draws an interactive waveform timeline, scores frame candidates for thumbnails and exports chapters, ffmpeg cut commands and a JSON manifest — nothing is uploaded. Behind it, a FastAPI + Celery pipeline handles presigned uploads, transcoding, clip generation and transcription at scale.",

	stats: [
		{ value: "50 ms", label: "Audio analysis window", icon: AudioLines },
		{ value: "0", label: "Bytes uploaded in Studio", icon: Clapperboard },
		{ value: "17", label: "Dashboard routes", icon: Layers },
		{ value: "9", label: "Backend test cases", icon: TestTube2 },
	],

	challenge:
		"Cutting multi-hour streams into highlights, chapters and thumbnails is slow manual work. The original dashboard was a v0 mockup with fake stats, a broken upload page and an API client missing most of the functions its screens imported — nothing could be demoed without running the whole backend.",

	solution: [
		"In-browser Studio: Web Audio decodes the track and measures RMS level in 50 ms windows",
		"Highlight detection with a robust z-score (median + MAD) so peaks are relative to the video's own baseline; a sensitivity slider re-detects live",
		"Canvas waveform timeline with energy curve, silence bands, highlight regions and a requestAnimationFrame playhead synced to the <video>",
		"Frame candidates grabbed at highlight peaks and scored by brightness, contrast and colorfulness; 1280×720 thumbnail maker with PNG export",
		"YouTube-valid chapters (0:00 start, ≥3 entries, ≥10 s apart), stream-copy ffmpeg commands and a JSON manifest for the backend pipeline",
		"FastAPI + SQLAlchemy backend with presigned direct uploads (init → PUT → confirm) and optional Celery/Redis workers",
		"Rebranded Next.js 15 dashboard (logo, Anton/Inter/JetBrains Mono, rose/orange theme), typed API client aligned with the real routes, deployed on Vercel",
	],

	result:
		"A demo anyone can try from a link with their own video, backed by a real pipeline design for processing at scale — the Studio's detection is the same step the Celery workers were designed to run server-side.",

	highlights: [
		{
			title: "Highlights from audio energy",
			description:
				"Smoothed RMS levels are compared against the median with a MAD-based spread, so a loud stream and a quiet podcast both get sensible peaks. Close runs are merged and padded for context.",
			code: `const med = median(smooth);
const spread = Math.max(1.5, 1.4826 * median(smooth.map((v) => Math.abs(v - med))));
const z = smooth.map((v) => (v - med) / spread);
// sensitivity 0..100 → z threshold 4..1
const threshold = 4 - (sensitivity / 100) * 3;`,
			language: "typescript",
		},
		{
			title: "Thumbnail scoring without ML",
			description:
				"Each candidate frame is sampled on a canvas and scored on mid-range brightness, luminance contrast and Hasler–Süsstrunk colorfulness — cheap enough to run on a dozen frames in a second.",
		},
		{
			title: "Two canvases, no re-renders",
			description:
				"The waveform, energy curve and highlight regions draw once per analysis; the playhead lives on a second canvas repainted from the video clock via requestAnimationFrame, so playback never re-renders React.",
		},
		{
			title: "Presigned direct-upload pipeline",
			description:
				"For server-side processing, large files skip the API process: init returns a PUT URL, the browser uploads with progress, confirm registers the video and process queues Celery jobs polled by the dashboard.",
		},
	],

	techStack: [
		"Next.js 15",
		"React 19",
		"TypeScript",
		"Web Audio API",
		"Canvas 2D",
		"TailwindCSS",
		"Radix UI",
		"FastAPI",
		"SQLAlchemy",
		"Celery",
		"Redis",
		"Pytest",
		"Vercel",
	],

	screenshots: [
		{ src: studio, alt: "Studio results", caption: "Studio: detected moments, stats and the analyzed VOD" },
		{ src: waveform, alt: "Waveform timeline", caption: "Waveform timeline with energy curve and live sensitivity" },
		{ src: thumbnails, alt: "Thumbnail candidates", caption: "Frame candidates ranked for thumbnails" },
		{ src: landing, alt: "Landing page", caption: "Landing: from endless VOD to highlights" },
	],

	thumbnailImage: studio,

	gradient: "from-rose-500 via-red-500 to-orange-500",
	icon: Clapperboard,

	links: [
		{
			label: "Live Studio",
			url: "https://autoyt-studio.vercel.app/studio",
			type: "demo",
		},
		{
			label: "View on GitHub",
			url: "https://github.com/Jimboy78/AutoYT",
			type: "github",
		},
	],

	featured: true,
};
