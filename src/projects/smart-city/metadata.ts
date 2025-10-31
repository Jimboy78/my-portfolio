import { Building2, Award, Gauge, Users } from "lucide-react";
import type { ProjectMetadata } from "../types";

// Import event photos (high-resolution)
import teamPresentation from "./assets/AparezcoYo.jpg";
import eventPhoto1 from "./assets/Hackatón-VC-1.jpg";
import eventPhoto4 from "./assets/Hackatón-VC-4.jpg";
import eventPhoto16 from "./assets/Hackatón-VC-16.jpg";

export const smartCityMetadata: ProjectMetadata = {
	id: "smart-city",
	title: "Smart City Dashboard",
	subtitle: "Hackatón VC - Villa Constitución",
	period: "April 2018",
	status: "completed",

	description:
		"Developed real-time monitoring dashboard for smart city infrastructure at Hackatón VC, the inaugural innovation marathon organized by Municipality of Villa Constitución and Acindar ArcelorMittal. Competed among 120+ participants including secondary and university students, delivering functional prototype for urban infrastructure control.",

	// Stats
	stats: [
		{
			value: "120+",
			label: "Participants",
			icon: Users,
		},
		{
			value: "Podium",
			label: "Finish",
			icon: Award,
		},
		{
			value: "1-Day",
			label: "Marathon",
			icon: Gauge,
		},
	],

	// Overview
	challenge:
		"Compete in Villa Constitución's first innovation marathon (April 19, 2018) during Innovation Week. Design and implement functional smart city monitoring system within one-day timeframe, standing out among 120+ participants from secondary schools, universities, and general public.",

	solution: [
		"Configured Arduino-based sensor network for real-time urban data collection",
		"Developed intuitive dashboard UI addressing local city infrastructure challenges",
		"Implemented monitoring for traffic lights, water pumps, and vehicle tracking systems",
		"Collaborated across teams to deliver integrated hardware-software solution",
	],

	result:
		"Achieved podium finish at Hackatón VC inaugural edition, organized by Municipality and Acindar ArcelorMittal. Successfully demonstrated functional prototype addressing urban technological challenges, earning recognition among diverse participant pool.",

	// Technical highlights
	highlights: [
		{
			title: "Real-time Dashboard Interface",
			description:
				"Designed and implemented an intuitive interface for monitoring multiple city services simultaneously. Focused on usability and clear visual feedback for system status.",
		},
		{
			title: "Arduino Integration",
			description:
				"Configured Arduino hardware for sensor data collection and actuator control. Managed communication between hardware components and dashboard software.",
		},
		{
			title: "Multi-Team Collaboration",
			description:
				"Coordinated with hardware, software, and design teams to deliver integrated solution. Learned to communicate technical requirements across different specializations.",
		},
		{
			title: "One-Day Innovation Marathon",
			description:
				"Delivered working prototype within single-day hackathon at inaugural Hackatón VC. Competed alongside university students and general public, demonstrating ability to rapidly prototype solutions addressing real urban infrastructure challenges posed by municipality organizers.",
		},
	],

	// Tech stack
	techStack: [
		"Arduino",
		"UI/UX Design",
		"Real-time Monitoring",
		"Sensor Integration",
		"Dashboard Development",
	],

	// Screenshots from event
	screenshots: [
		{
			src: teamPresentation,
			alt: "Hackatón VC - Team presenting Smart City solution",
			caption: "Team presenting Smart City dashboard prototype at Hackatón VC 2018",
		},
		{
			src: eventPhoto1,
			alt: "Hackatón VC - Event participants",
			caption: "Participants collaborating during the innovation marathon",
		},
		{
			src: eventPhoto4,
			alt: "Hackatón VC - Teams working on prototypes",
			caption: "Teams working on hardware and software integration",
		},
		{
			src: eventPhoto16,
			alt: "Hackatón VC - Event overview",
			caption: "Overview of Hackatón VC inaugural edition",
		},
	],

	// Visual
	gradient: "from-cyan-600 to-blue-600",
	icon: Building2,

	// Links
	links: [
		{
			label: "Official Event Coverage",
			url: "https://villaconstitucion.gob.ar/hackaton-vc-exitosa-primera-edicion-del-maraton-de-ideas-e-innovacion/",
			type: "docs",
		},
	],

	// Gallery preview
	thumbnailImage: teamPresentation,
	featured: false,
};
