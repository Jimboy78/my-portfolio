import type { LucideIcon } from "lucide-react";

export interface ProjectMetadata {
	// Basic info
	id: string; // URL-friendly slug (e.g., "iptv-mobile")
	title: string;
	subtitle: string;
	period: string;
	status: "production" | "development" | "completed";

	// Hero section
	bannerImage?: string; // Promotional banner (optional)
	heroVideo?: string; // Path to video file
	heroImage?: string; // Fallback image if no video
	description: string;

	// Stats
	stats?: Array<{
		value: string;
		label: string;
		icon?: LucideIcon;
	}>;

	// Overview sections
	challenge?: string;
	solution?: Array<string>;
	result?: string;

	// Technical details
	highlights: Array<{
		title: string;
		description: string;
		code?: string; // Optional code snippet
		language?: string; // For syntax highlighting
	}>;

	// Visual assets
	screenshots?: Array<{
		src: string;
		alt: string;
		caption?: string;
	}>;

	// Audio assets (for music/sound projects)
	songs?: Array<{
		src: string;
		title: string;
		artist?: string;
	}>;

	// Tech stack
	techStack: Array<string>;

	// Colors and styling
	gradient: string; // Tailwind gradient classes
	icon: LucideIcon;

	// Links
	links?: Array<{
		label: string;
		url: string;
		type: "github" | "demo" | "docs" | "case-study";
	}>;

	// Gallery preview (for ProjectsGallery)
	thumbnailVideo?: string; // Short preview video/GIF
	thumbnailImage?: string; // Thumbnail for gallery
	featured?: boolean; // Show in featured section
}

export interface ProjectDetailProps {
	onBack: () => void;
}

export interface Project {
	metadata: ProjectMetadata;
	DetailComponent: React.FC<ProjectDetailProps>; // Component to render full detail page
}
