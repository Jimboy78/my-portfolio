import { Clapperboard, Layers, TestTube2, Code2 } from "lucide-react";
import type { ProjectMetadata } from "../types";

export const autoytMetadata: ProjectMetadata = {
	id: "autoyt",
	title: "AutoYT",
	subtitle: "Automated video editing pipeline for YouTube content",
	period: "2025",
	status: "completed",

	description:
		"Built a full video auto-editing pipeline that ingests raw footage, transcodes it, generates clips and thumbnails, and produces transcriptions — designed to remove hours of manual editing work from a YouTube production workflow.",

	stats: [
		{ value: "1.6K+", label: "Backend LOC", icon: Code2 },
		{ value: "10K+", label: "Frontend LOC", icon: Layers },
		{ value: "9", label: "Test Cases", icon: TestTube2 },
	],

	challenge:
		"Manually uploading, cutting, and formatting raw video into publishable clips and thumbnails was slow and repetitive. Needed an async pipeline that could scale beyond a single machine.",

	solution: [
		"FastAPI backend with SQLAlchemy + Alembic migrations for video/job metadata",
		"Optional Celery + Redis workers for async transcoding and thumbnail generation, with S3/MinIO-compatible storage",
		"Presigned direct-upload flow (init → PUT → confirm) to avoid routing large files through the API server",
		"Next.js dashboard (\"Jimbot\") for upload, processing status, clip review, and analytics",
		"Pytest suite covering upload, processing, and transcription endpoints",
	],

	result:
		"Delivered a working end-to-end pipeline — from raw upload to processed clips and transcripts — fully containerized with Docker Compose for local and worker-based deployment.",

	highlights: [
		{
			title: "Presigned Direct-Upload Flow",
			description:
				"Implemented a three-step upload flow (init → direct PUT → confirm) so large video files bypass the API process entirely, with S3/MinIO support behind a feature flag for production-style storage.",
		},
		{
			title: "Async Processing with Celery",
			description:
				"Video transcoding and thumbnail generation run as background jobs via Celery + Redis when enabled, keeping the API responsive during long-running video processing tasks.",
		},
		{
			title: "Dual API Surface",
			description:
				"Maintained both a frontend-compatible REST surface and a versioned /api/v1 surface for uploads, videos, clips, and transcriptions — allowing the dashboard and external integrations to evolve independently.",
		},
		{
			title: "Dockerized Worker Architecture",
			description:
				"docker-compose.yml orchestrates the API, worker, and Redis services so the async pipeline can be spun up locally with a single command.",
		},
	],

	techStack: [
		"Python",
		"FastAPI",
		"SQLAlchemy",
		"Alembic",
		"Celery",
		"Redis",
		"Docker Compose",
		"Next.js",
		"TypeScript",
		"Radix UI",
		"TailwindCSS",
		"Pytest",
	],

	gradient: "from-red-600 via-orange-600 to-yellow-600",
	icon: Clapperboard,

	links: [
		{
			label: "View on GitHub",
			url: "https://github.com/Jimboy78/AutoYT",
			type: "github",
		},
	],

	featured: true,
};
