import { Printer, Settings, Zap } from "lucide-react";
import type { ProjectMetadata } from "../types";

// Import photos
// Vertical photos
import vertical1 from "./assets/Vertical1.jpg";
import vertical2 from "./assets/Vertical2.jpeg";
import vertical3 from "./assets/Vertical3.jpeg";
import vertical4 from "./assets/Vertical4.jpeg";
import vertical5 from "./assets/Vertical5.jpeg";
import vertical6 from "./assets/Vertical6.jpeg";
import vertical7 from "./assets/Vertical7.jpeg";

// Horizontal photos
import horizontal1 from "./assets/Horizontal.jpg";
import horizontal2 from "./assets/Horizontal2.jpg";
import horizontal3 from "./assets/Horizontal3.jpg";
import horizontal4 from "./assets/Horizontal4.jpg";
import horizontal5 from "./assets/Horizontal5.jpg";
import horizontal6 from "./assets/Horizontal6.jpeg";
import horizontal7 from "./assets/Horizontal7.jpeg";

export const printer3dMetadata: ProjectMetadata = {
	id: "3d-printer",
	title: "3D Printer from Scratch",
	subtitle: "Electronic Technician Internship",
	period: "2019 - 2020",
	status: "completed",

	// Hero image - fixed vertical photo on left
	heroImage: vertical1,

	description:
		"Built a fully functional 3D printer from scratch during electronic technician internship. Programmed stepper motors, configured extruders, and calibrated the complete system using Cura software. Successfully printed detailed miniatures and functional parts.",

	// Stats
	stats: [
		{
			value: "100%",
			label: "Built from Scratch",
			icon: Settings,
		},
		{
			value: "Full",
			label: "Functionality",
			icon: Zap,
		},
	],

	// Overview
	challenge:
		"Build a functional 3D printer from individual components with no prior experience, requiring deep understanding of motor control, calibration, and mechanical assembly.",

	solution: [
		"Programmed stepper motors for precise movement control",
		"Configured and calibrated extruders for optimal filament flow",
		"Integrated Cura software for slicing and print preparation",
		"Overcame logistical challenges sourcing parts and debugging hardware issues",
	],

	result:
		"Successfully completed a fully functional 3D printer capable of producing quality prints. Gained hands-on experience with hardware programming, calibration, and problem-solving under real constraints.",

	// Technical highlights
	highlights: [
		{
			title: "Motor Programming & Control",
			description:
				"Programmed Arduino to control stepper motors with precise timing and coordination. Implemented acceleration curves and position tracking for smooth movement.",
		},
		{
			title: "Calibration & Tuning",
			description:
				"Performed extensive calibration of bed leveling, extrusion multiplier, and temperature settings. Achieved consistent print quality through iterative testing.",
		},
		{
			title: "Hardware Integration",
			description:
				"Assembled mechanical frame, integrated electronics, and troubleshot hardware issues. Learned to read technical datasheets and debug at the component level.",
		},
	],

	// Screenshots - horizontal carousel photos only
	screenshots: [
		{
			src: horizontal1,
			alt: "3D Printer - Horizontal view 1",
			caption: "3D Printer build process",
		},
		{
			src: horizontal2,
			alt: "3D Printer - Horizontal view 2",
			caption: "3D Printer assembly details",
		},
		{
			src: horizontal3,
			alt: "3D Printer - Horizontal view 3",
			caption: "3D Printer components",
		},
		{
			src: horizontal4,
			alt: "3D Printer - Horizontal view 4",
			caption: "3D Printer assembly stage",
		},
		{
			src: horizontal5,
			alt: "3D Printer - Horizontal view 5",
			caption: "3D Printer building process",
		},
		{
			src: horizontal6,
			alt: "3D Printer - Horizontal view 6",
			caption: "3D Printer construction",
		},
		{
			src: horizontal7,
			alt: "3D Printer - Horizontal view 7",
			caption: "3D Printer final details",
		},
	],

	// Tech stack
	techStack: [
		"Arduino",
		"C/C++",
		"Stepper Motors",
		"Cura",
		"RAMPS 1.4",
		"Marlin Firmware",
	],

	// Visual
	gradient: "from-orange-600 to-red-600",
	icon: Printer,

	// Gallery preview
	thumbnailImage: vertical1,
	featured: false,
};

// Arrays of photos for dual carousel
export const verticalPhotos = [
	{
		src: vertical1,
		alt: "3D Printer - Vertical view 1",
		caption: "Printed miniature - Final result",
	},
	{
		src: vertical2,
		alt: "3D Printer - Vertical view 2",
		caption: "Vertical detail 2",
	},
	{
		src: vertical3,
		alt: "3D Printer - Vertical view 3",
		caption: "Vertical detail 3",
	},
	{
		src: vertical4,
		alt: "3D Printer - Vertical view 4",
		caption: "Vertical detail 4",
	},
	{
		src: vertical5,
		alt: "3D Printer - Vertical view 5",
		caption: "Vertical detail 5",
	},
	{
		src: vertical6,
		alt: "3D Printer - Vertical view 6",
		caption: "Vertical detail 6",
	},
	{
		src: vertical7,
		alt: "3D Printer - Vertical view 7",
		caption: "Vertical detail 7",
	},
];

export const horizontalPhotos = [
	{
		src: horizontal1,
		alt: "3D Printer - Horizontal view 1",
		caption: "3D Printer build process",
	},
	{
		src: horizontal2,
		alt: "3D Printer - Horizontal view 2",
		caption: "3D Printer assembly details",
	},
	{
		src: horizontal3,
		alt: "3D Printer - Horizontal view 3",
		caption: "3D Printer components",
	},
	{
		src: horizontal4,
		alt: "3D Printer - Horizontal view 4",
		caption: "3D Printer assembly stage",
	},
	{
		src: horizontal5,
		alt: "3D Printer - Horizontal view 5",
		caption: "3D Printer building process",
	},
	{
		src: horizontal6,
		alt: "3D Printer - Horizontal view 6",
		caption: "3D Printer construction",
	},
	{
		src: horizontal7,
		alt: "3D Printer - Horizontal view 7",
		caption: "3D Printer final details",
	},
];
