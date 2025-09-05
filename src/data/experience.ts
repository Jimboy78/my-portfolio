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
			"Leading the development of enterprise-level ERP systems and IPTV applications with a focus on performance optimization and scalable architecture.",
		highlights: [
			"Architected and delivered complete ERP solution using Next.js/React/TypeScript with server-side rendering and dynamic routing capabilities",
			"Built robust REST APIs with Node.js/Express/Prisma/MySQL implementing role-based access control (RBAC) for enterprise security",
			"Developed cross-platform IPTV applications for mobile (React Native/Expo) and TV platforms (Android TV/tvOS + Web) with seamless user experience",
			"Implemented comprehensive CI/CD pipeline using Docker, Drone CI, and Gitea with zero-touch deployments to Portainer",
			"Achieved significant performance improvements: 20-30% reduction in time to first paint and 30-50% decrease in Docker image sizes",
			"Integrated multi-language support (Spanish/English/Portuguese) using next-intl with accessibility and performance best practices",
			"Optimized mobile applications with secure authentication (SecureStore), real-time EPG data, and adaptive video streaming (HLS/TS/MP4)",
		],
		achievements: [
			"Performance optimization resulting in 20-30% faster load times",
			"Reduced Docker image sizes by 30-50% through multi-stage builds",
			"Zero-downtime deployments achieved through automated CI/CD pipeline",
			"Multi-platform application with UI parity across native and web versions",
		],
		tech: [
			"Next.js",
			"React",
			"TypeScript",
			"Node.js",
			"Express",
			"Prisma",
			"MySQL",
			"Docker",
			"React Native",
			"Expo",
		],
		color: "from-slate-600 to-slate-800",
	},
	{
		position: "Frontend Developer",
		company: "Clak",
		period: "Mar 2024 - Aug 2024",
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
		period: "Jan 2024 - Feb 2024",
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
