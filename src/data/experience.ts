export interface Experience {
	position: string;
	company: string;
	period: string;
	current: boolean;
	description: string;
	highlights: Array<string>;
	achievements: Array<string>;
	tech: Array<string>;
	color: string; // tailwind gradient classes
}

export const workExperience: Array<Experience> = [
	{
		position: "Full-Stack Developer",
		company: "PyP Technologies",
		period: "Jan 2025 – Present",
		current: true,
		description:
			"Leading development of multiple production systems: IPTV Mobile App (July 2025 - Present), IPTV TV App (August 2025 - Present), and ERP System (January 2025 - Present).",
		highlights: [
			"IPTV Mobile App (July 2025 - Present): Architected and built complete IPTV streaming application from scratch with zero prior codebase, handling 100% of UI/UX design, technical decisions, and implementation",
			"Fixed critical production bugs in expo-video library for PiP/fullscreen transitions - debugged dependency source code and implemented custom patches",
			"Engineered two-tier caching system reducing API calls 60% and optimized performance with FlashList (5x faster rendering), lazy loading, and persistent video architecture",
			"Deployed to 1000+ users in live city events with zero crashes",
			"IPTV TV App (August 2025 - Present): Building companion TV applications with focus-based navigation and DPAD controls, sharing 80% of the codebase with mobile apps",
			"Implemented adaptive 10-foot UI with unified state management across platforms",
			"ERP System (January 2025 - Present): Initiated full-stack ERP with SSR architecture, RBAC, and domain-driven design",
			"Set up production-ready CI/CD pipeline: Drone CI + Gitea + Portainer with Docker multi-stage builds",
			"Implemented i18n (next-intl) supporting 3 languages with extensible architecture",
		],
		achievements: [
			"1000+ active users deployed in production with zero crashes at launch",
			"60% reduction in API calls through two-tier caching system",
			"5x faster rendering with FlashList implementation",
			"80% code reuse between mobile and TV platforms",
			"Fixed critical bugs in expo-video open-source library",
		],
		tech: [
			"React Native 0.79",
			"Expo SDK 53",
			"TypeScript",
			"expo-router",
			"expo-video",
			"Next.js",
			"Node.js",
			"Express",
			"Prisma",
			"MySQL",
			"Docker",
			"Drone CI",
			"EAS Build",
		],
		color: "from-blue-600 to-purple-700",
	},
	{
		position: "Frontend Developer",
		company: "Clak",
		period: "Mar 2024 - Dec 2024",
		current: false,
		description:
			"Contributed to an innovative no-code platform similar to Retool.com, focusing on user experience and AI-powered tool creation.",
		highlights: [
			"Developed and maintained web applications using modern React ecosystem with TypeScript for enhanced code reliability",
			"Collaborated closely with UI/UX design team to implement pixel-perfect interfaces using Figma specifications",
			"Created and maintained comprehensive Storybook documentation and Design System ensuring visual consistency across the platform",
			"Integrated advanced ChatGPT capabilities to facilitate automated tool creation and enhance user workflow efficiency",
			"Optimized frontend forms and components with seamless integration to Python Flask backend endpoints",
			"Implemented responsive design patterns and accessibility standards for improved user experience across devices",
		],
		achievements: [
			"Built comprehensive Design System used across entire platform",
			"Integrated AI-powered features improving user productivity",
			"Delivered pixel-perfect UI implementations from Figma designs",
		],
		tech: [
			"React",
			"TypeScript",
			"Tailwind CSS",
			"Vite.js",
			"Next.js",
			"Storybook",
			"Figma",
		],
		color: "from-blue-600 to-indigo-700",
	},
	{
		position: "Software Developer",
		company: "Junco Films",
		period: "Oct 2023 - Feb 2024",
		current: false,
		description:
			"Developed interactive tools and web applications for content production workflows, specializing in social media integration and automation.",
		highlights: [
			"Integrated multiple social media APIs (Facebook, TikTok, Discord) for comprehensive social data analysis and content management",
			"Built multi-platform web workspace combining Flask backend with React frontend for seamless user experience",
			"Developed advanced SVG file editor with sophisticated graphic manipulation capabilities for creative workflows",
			"Automated Blender rendering processes using Python scripting, significantly reducing manual content production time",
			"Optimized content production workflows through intelligent automation and user-friendly interfaces",
		],
		achievements: [
			"Automated content production workflows reducing manual work by 60%",
			"Successfully integrated 3 major social media platforms",
			"Built advanced graphic manipulation tools from scratch",
		],
		tech: ["Flask", "ReactJS", "Python", "Blender", "Social Media APIs"],
		color: "from-purple-600 to-purple-800",
	},
	{
		position: "Backend Developer",
		company: "B2Gov",
		period: "Sep 2022 - Sep 2023",
		current: false,
		description:
			"Focused on developing robust and scalable backend solutions for international procurement data processing and compliance systems.",
		highlights: [
			"Designed and implemented comprehensive data scraping system for international public procurement portals using Python and BeautifulSoup",
			"Ensured full compliance with Open Contracting Data Standard (OCDS) for data extraction, transformation, and manipulation processes",
			"Optimized MongoDB database performance to efficiently handle large-scale datasets with complex querying requirements",
			"Built scalable backend architecture using Python and Flask framework for high-availability data processing services",
			"Implemented data validation and quality assurance processes ensuring accuracy and reliability of processed information",
			"Automated data extraction pipelines processing 50+ government portals daily, reducing manual data collection time by 80% and ensuring real-time data availability",
			"Built RESTful API endpoints with Flask serving processed procurement data to multiple client applications, implementing authentication and rate limiting for secure access",
		],
		achievements: [
			"Processed millions of procurement records with 99.9% accuracy",
			"Achieved full OCDS compliance for international standards",
			"Built scalable system handling 10TB+ of data efficiently",
		],
		tech: ["Python", "BeautifulSoup", "MongoDB", "Flask", "Data Processing"],
		color: "from-gray-600 to-gray-800",
	},
];
