import { Music2, Clock, DollarSign, Target, Code2 } from "lucide-react";
import type { ProjectMetadata } from "../types";

// Import assets
import bannerImage from "./assets/banner.png";
import logoImage from "./assets/logo.png";
import previewVideo from "./assets/Naruto-song-generation.mp4";

// Import songs
import morganSong from "./assets/Morgan's Song.mp3";
import namiSongV3 from "./assets/Nami's Song v3.mp3";
import namiSong from "./assets/Nami's Song.mp3";
import narutoSong from "./assets/Naruto's Song.mp3";
import robinSong from "./assets/Robin Song.mp3";

export const aventralyMetadata: ProjectMetadata = {
	id: "aventraly",
	title: "AventraLy",
	subtitle: "AI-powered bilingual lyrics generation platform",
	period: "August 2024 - Present",
	status: "production",

	// Hero
	bannerImage: bannerImage,
	heroVideo: previewVideo,
	heroImage: logoImage,
	description:
		"Built full-stack AI platform for automatic bilingual (EN/ES) lyric generation serving a monetized YouTube channel. Implemented dual AI provider architecture with intelligent fallback, real-time SSE streaming, and multi-layer validation achieving 95% syllable accuracy while reducing costs by 50%.",

	// Stats
	stats: [
		{
			value: "60-90%",
			label: "Time Savings",
			icon: Clock,
		},
		{
			value: "50%",
			label: "Cost Reduction",
			icon: DollarSign,
		},
		{
			value: "95%",
			label: "Syllable Accuracy",
			icon: Target,
		},
		{
			value: "~7,000",
			label: "Lines of Code",
			icon: Code2,
		},
	],

	// Overview
	challenge:
		"Create production-ready AI platform to automate bilingual lyric generation for fandom music, replacing 2-5 hour manual process while maintaining artistic quality and strict syllable matching requirements.",

	solution: [
		"Dual AI provider architecture (Claude Sonnet 4.5 → GPT-4o) with automatic fallback for 99.9% uptime",
		"Real-time SSE streaming with 7 event types for transparent user feedback during 2-5 minute generation",
		"Multi-layer validation system: 90%+ semantic coherence, ±1 syllable matching, 85% consistency checks",
		"Batch API integration achieving 50% cost reduction on high-volume operations",
		"7-step pipeline: Intent Analysis → Theme Detection → Generation → Translation → Validation → Save → Streaming",
	],

	result:
		"Successfully deployed to production powering @AventraLy YouTube channel. Reduced lyric creation time from 2-5 hours to 2-5 minutes (60-90% savings), cut AI costs by 50%, and achieved 95% syllable accuracy with consistent artistic quality.",

	// Technical highlights
	highlights: [
		{
			title: "Dual AI Provider with Intelligent Fallback",
			description:
				"Architected resilient AI system using Claude Sonnet 4.5 as primary provider with automatic GPT-4o fallback. Implemented provider health monitoring, exponential backoff, and request routing to ensure 99.9% generation success rate.",
			code: `# AI provider fallback architecture
async def generate_with_fallback(request: GenerateRequest):
    providers = [
        {"name": "claude", "model": "sonnet-4.5"},
        {"name": "openai", "model": "gpt-4o"}
    ]

    for provider in providers:
        try:
            result = await ai_service.generate(
                provider=provider["name"],
                model=provider["model"],
                prompt=request.prompt,
                config=request.config
            )

            if validate_quality(result):
                return result

        except ProviderError as e:
            logger.warning(f"{provider['name']} failed: {e}")
            continue

    raise AllProvidersFailedError()`,
			language: "python",
		},
		{
			title: "Real-time SSE Streaming Pipeline",
			description:
				"Built 7-step generation pipeline with Server-Sent Events for real-time progress updates. Implemented async orchestration handling intent analysis, theme detection, generation, translation, validation, and versioning with transparent user feedback.",
		},
		{
			title: "Multi-Layer Validation System",
			description:
				"Engineered comprehensive validation: semantic coherence analysis (90%+ chorus theme matching), syllable counting with ±1 tolerance using pyphen/phonemizer, and structural consistency checks (85%+ threshold). Ensures production-quality output without manual review.",
		},
		{
			title: "Cost Optimization via Batch API",
			description:
				"Implemented OpenAI Batch API for non-urgent operations achieving 50% cost reduction. Built job queue system with SQLAlchemy for batch management, status tracking, and automatic result retrieval via webhook integration.",
		},
		{
			title: "Adaptive Bilingual Translation",
			description:
				"Designed context-aware EN↔ES translation system maintaining syllable count, rhyme schemes, and emotional tone. Uses GPT-4o with specialized prompts for adaptive (not literal) translation preserving artistic intent and singability.",
		},
	],

	// Songs showcase
	songs: [
		{
			src: narutoSong,
			title: "Naruto's Song",
			artist: "AventraLy AI",
		},
		{
			src: namiSongV3,
			title: "Nami's Song v3",
			artist: "AventraLy AI",
		},
		{
			src: namiSong,
			title: "Nami's Song",
			artist: "AventraLy AI",
		},
		{
			src: morganSong,
			title: "Morgan's Song",
			artist: "AventraLy AI",
		},
		{
			src: robinSong,
			title: "Robin Song",
			artist: "AventraLy AI",
		},
	],

	// Tech stack
	techStack: [
		"Python 3.11",
		"FastAPI",
		"Next.js 15.5",
		"React 18",
		"TypeScript 5.9",
		"PostgreSQL",
		"SQLAlchemy (async)",
		"Claude Sonnet 4.5",
		"GPT-4o",
		"TailwindCSS",
		"Radix UI",
		"SSE",
		"Alembic",
		"sentence-transformers",
	],

	// Visual
	gradient: "from-purple-600 via-pink-600 to-blue-600",
	icon: Music2,

	// Links
	links: [
		{
			label: "YouTube Channel",
			url: "https://www.youtube.com/@AventraLy",
			type: "demo",
		},
		// Uncomment when repository is public
		// {
		// 	label: "View on GitHub",
		// 	url: "https://github.com/yourusername/aventraly",
		// 	type: "github",
		// },
	],

	// Gallery preview
	thumbnailVideo: previewVideo,
	thumbnailImage: logoImage,
	featured: true,
};
