import { AudioLines, Clapperboard, Layers, TestTube2 } from "lucide-react";
import type { ProjectMetadata } from "../types";
import shorts from "./assets/shorts.jpg";
import transcriptions from "./assets/transcriptions.jpg";
import editor from "./assets/editor.jpg";
import thumbnails from "./assets/thumbnails.jpg";
import youtube from "./assets/youtube.jpg";
import analytics from "./assets/analytics.jpg";
import clips from "./assets/clips.jpg";
import landing from "./assets/landing.jpg";

export const autoytMetadata: ProjectMetadata = {
	id: "autoyt",
	title: "AutoYT",
	subtitle: "Turns a VOD into Shorts, beat-synced montages, subtitles, thumbnails and a ready YouTube package",
	period: "2025 — 2026",
	status: "production",

	description:
		"A creator studio that runs entirely in the browser. Drop a stream VOD and it finds the loud moments from audio energy, then every tool works on that same local library: render 9:16 Shorts with motion-tracked reframing and karaoke captions, transcribe with Whisper in a Web Worker, cut a montage to the beat of your music, reframe for any platform, design thumbnails and generate a validated title, description with chapters and tags. Nothing is uploaded. An optional FastAPI backend runs the same detector with ffmpeg and faster-whisper for long VODs.",

	stats: [
		{ value: "50 ms", label: "Audio analysis window", icon: AudioLines },
		{ value: "0", label: "Bytes uploaded", icon: Clapperboard },
		{ value: "9", label: "Working tools", icon: Layers },
		{ value: "19", label: "Backend tests", icon: TestTube2 },
	],

	challenge:
		"Cutting multi-hour streams into Shorts, montages, subtitles and a publish-ready upload is hours of manual work. The original dashboard was a v0 mockup: random progress bars, hardcoded clips and metrics, and a backend that simulated transcription with fixed sentences and cut clips at 15/50/80 % of the video.",

	solution: [
		"Highlight detection: RMS per 50 ms, linear-power smoothing and a robust z-score over frames that carry sound, so talk with digital-silence pauses still surfaces its peaks",
		"Shorts Forge: Canvas + MediaRecorder render 9:16 MP4s in real time with motion-tracked crop, hook sticker, audio bars and karaoke captions timed to Whisper word timestamps",
		"Whisper (transformers.js) in a Web Worker with voice-activity tightening, search, inline editing and SRT/VTT/TXT export",
		"Beat-synced montage editor: onset envelope → autocorrelation tempo with octave correction → comb-filter phase refinement; cuts snap to whole beats, with transitions, speed and trim",
		"Conversion to 16:9, 9:16, 1:1 and 4:5 (crop, blurred background or bars) plus lossless WAV export and the equivalent ffmpeg command",
		"Thumbnail Lab with frames scored by brightness, contrast and colorfulness, three layouts and a feed preview at real sizes",
		"YouTube package built from the transcript and moments, validated against YouTube's limits and chapter rules",
		"IndexedDB project library shared by every page, a task monitor with live progress and cancel, and analytics computed from the library",
		"FastAPI backend: the same detector ported to numpy with streaming ffmpeg decode, one MP4 per moment, faster-whisper, progress parsed from ffmpeg, SSE job stream",
	],

	result:
		"A studio anyone can try from a link with their own video — every screen does real work, verified end to end in Chrome (renders checked with ffprobe) and backed by a tested server pipeline.",

	highlights: [
		{
			title: "Beats from an onset envelope",
			description:
				"Spectral-free tempo detection: log-energy flux gives an onset envelope, autocorrelation weighted around 120 BPM picks the period, and a comb filter over ±2 BPM and every phase locks the grid so cuts land on the kick.",
			code: `const envelope = onsetEnvelope(samples, sampleRate); // log-energy flux
const { bpm } = estimateTempo(envelope, 70, 180);     // weighted autocorrelation
const grid = refineGrid(envelope, bpm);               // comb: ±2 BPM × every phase
const timeline = planMontage(clips, 60 / grid.bpm);   // each clip = whole beats`,
			language: "typescript",
		},
		{
			title: "Captions that follow the voice",
			description:
				"Whisper word timestamps drive three-word caption pages rendered on the canvas; the spoken word pops in the accent colour. Voice activity trims chunk edges so words don't drift into music or noise.",
		},
		{
			title: "Rendering without a server",
			description:
				"Video frames are drawn to a canvas and captured with MediaRecorder (H.264 MP4 when supported), while the clip's audio goes through Web Audio into the same stream — the recorder pauses during seeks so montages stay gapless.",
		},
		{
			title: "Same detector, two runtimes",
			description:
				"The TypeScript detector and its numpy port share the smoothing, baseline and scoring rules; the server analyses the original upload because lossy re-encoding shaves energy off borderline peaks.",
		},
	],

	techStack: [
		"Next.js 15",
		"React 19",
		"TypeScript",
		"Web Audio API",
		"Canvas 2D",
		"MediaRecorder",
		"transformers.js",
		"IndexedDB",
		"TailwindCSS",
		"FastAPI",
		"faster-whisper",
		"ffmpeg",
		"NumPy",
		"Pytest",
		"Vercel",
	],

	screenshots: [
		{ src: shorts, alt: "Shorts Forge", caption: "Shorts Forge: 9:16 render with auto-reframe, hook and audio bars" },
		{ src: transcriptions, alt: "Transcriptions", caption: "Whisper transcription with search, edit and subtitle export" },
		{ src: editor, alt: "Beat editor", caption: "Montage editor with BPM detection and beat-snapped cuts" },
		{ src: thumbnails, alt: "Thumbnail Lab", caption: "Thumbnail Lab: scored frames, layouts and feed preview" },
		{ src: youtube, alt: "YouTube package", caption: "Title, description with chapters and tags, validated" },
		{ src: analytics, alt: "Analytics", caption: "Analytics computed from the local library" },
		{ src: clips, alt: "Clip gallery", caption: "Gallery of moments and saved renders" },
		{ src: landing, alt: "Landing page", caption: "Landing" },
	],

	thumbnailImage: shorts,

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
