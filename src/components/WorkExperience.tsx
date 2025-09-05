import type React from "react";
import { Calendar, MapPin, Zap, Code, Database, Monitor } from "lucide-react";

const workExperienceData = [
	{
		position: "Full-Stack Developer",
		company: "PyP Technologies",
		period: "Jan 2025 – Present",
		location: "Remote",
		type: "current",
		responsibilities: [
			"ERP architecture & delivery with Next.js/React/TS (SSR, dynamic routing).",
			"REST API using Node/Express/Prisma/MySQL; domain modules with RBAC.",
			"i18n via next-intl (es/en/pt) plus accessibility/performance practices.",
			"Docker multi-stage (image size [−30/50%]) with health checks.",
			"CI/CD on Drone CI + Gitea; 0-touch deploys to Portainer via webhooks.",
			"Basic observability: structured logging, metrics & alerts.",
			"IPTV Mobile (Expo/RN): secure Xtream login (SecureStore), categories/EPG, adaptive HLS/TS/MP4 playback, expo-router, persistent theming.",
			"Mobile perf: TTFP [−20/30%], fewer re-renders, TTL caching for categories/streams.",
			"IPTV TV (Android TV/tvOS + Web): focus/DPAD UX, debounced preview, single fullscreen player; extension heuristics with fallback.",
			"TV distribution: EAS profiles; UI parity across native TV and Web."
		],
		technologies: "Next.js, React, TypeScript, Node, Express, Prisma, MySQL, Docker, Drone CI, Gitea, Portainer, next-intl, Expo 53, React Native 0.79, expo-router, react-native-tvos",
		icon: Code,
		highlights: ["Performance Optimization", "Full-Stack Architecture", "Mobile & TV Development", "DevOps Automation"]
	},
	{
		position: "Frontend Developer",
		company: "Clak",
		period: "Mar. 2024 - Aug 2024",
		location: "Remote",
		type: "previous",
		responsibilities: [
			"Startup similar to Retool.com, focused on improving simplicity, the learning curve, and enhancing the user experience with ChatGPT for tool creation facilitation.",
			"Developed web views using React, TypeScript, Tailwind CSS, Vite.js, and Next.js.",
			"Collaborated with UI/UX designers to create the landing page using Figma.",
			"Designed a Storybook and Design System to maintain visual consistency.",
			"Implemented and optimized frontend forms, integrating with backend endpoints in Python (Flask).",
			"Continuously enhanced the user experience by integrating advanced tools with ChatGPT."
		],
		technologies: "React, TypeScript, Tailwind CSS, Vite.js, Next.js, Figma, Python, Flask",
		icon: Monitor,
		highlights: ["Design Systems", "ChatGPT Integration", "UI/UX Collaboration", "No-Code Platform"]
	},
	{
		position: "Software Developer",
		company: "Junco Films",
		period: "Jan. 2024 - Feb. 2024",
		location: "Remote",
		type: "previous",
		responsibilities: [
			"Developed and maintained interactive tools and web applications.",
			"Integrated social media APIs (Facebook, TikTok, Discord) for social data analysis.",
			"Created a multi-platform web workspace with Flask and ReactJS.",
			"Developed an SVG file editor for advanced graphic manipulation.",
			"Automated Blender renders using Python, optimizing content production workflows."
		],
		technologies: "Flask, ReactJS, Python, Blender, Social Media APIs",
		icon: Zap,
		highlights: ["Social Media Integration", "SVG Editor", "Automation", "Content Production"]
	},
	{
		position: "Backend Developer",
		company: "B2Gov",
		period: "Sept. 2022 - Sept. 2023",
		location: "Remote",
		type: "previous",
		responsibilities: [
			"Focused on the development of robust and scalable backend solutions.",
			"Implemented a data scraping system from international public procurement portals using Python and BeautifulSoup.",
			"Extracted and manipulated data in compliance with the Open Contracting Data Standard (OCDS).",
			"Stored scraped data in MongoDB and optimized the performance to handle large datasets."
		],
		technologies: "Python, BeautifulSoup, MongoDB, MongoDB Compass, Flask",
		icon: Database,
		highlights: ["Data Scraping", "OCDS Compliance", "Big Data", "Performance Optimization"]
	}
];

const WorkExperience: React.FC = () => {
	return (
		<section id="work-experience" className="relative py-20 overflow-hidden">
			{/* Background */}
			<div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900">
				<div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-blue-900/20"></div>
			</div>

			<div className="relative z-10 container mx-auto px-6">
				<div className="text-center mb-16 animate-fade-in">
					<h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent mb-4">
						Work Experience
					</h2>
					<div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"></div>
				</div>

				<div className="max-w-6xl mx-auto">
					<div className="relative">
						{/* Timeline line */}
						<div className="absolute left-8 top-0 w-0.5 h-full bg-gradient-to-b from-purple-500 via-blue-500 to-green-500 hidden md:block"></div>

						{workExperienceData.map((job, index) => {
							const IconComponent = job.icon;
							const isEven = index % 2 === 0;
							
							return (
								<div 
									key={index} 
									className={`relative mb-16 animate-slide-up animation-delay-${index * 200}`}
								>
									{/* Timeline dot */}
									<div className="absolute left-6 w-6 h-6 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full border-4 border-white shadow-lg z-10 hidden md:block animate-pulse">
										<div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur animate-ping opacity-75"></div>
									</div>

									{/* Content */}
									<div className={`md:ml-16 ${isEven ? 'md:mr-0' : 'md:ml-auto md:mr-16 md:text-right'} max-w-4xl`}>
										<div className="group relative">
											{/* Card */}
											<div className="backdrop-blur-sm bg-white/5 rounded-2xl border border-white/10 p-8 shadow-2xl transform hover:scale-[1.02] transition-all duration-500 hover:shadow-purple-500/20">
												{/* Header */}
												<div className="flex items-start justify-between mb-6">
													<div className="flex items-center gap-4">
														<div className={`p-3 rounded-xl ${
															job.type === 'current' 
																? 'bg-gradient-to-r from-green-500 to-emerald-500' 
																: 'bg-gradient-to-r from-purple-500 to-blue-500'
														} transform group-hover:rotate-12 transition-transform duration-300`}>
															<IconComponent className="w-6 h-6 text-white" />
														</div>
														<div>
															<h3 className="text-2xl font-bold text-white mb-1 group-hover:text-purple-200 transition-colors">
																{job.position}
															</h3>
															<p className="text-xl text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text font-semibold mb-2">
																{job.company}
															</p>
														</div>
													</div>
													{job.type === 'current' && (
														<div className="px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-full text-green-400 text-sm font-medium animate-pulse">
															Current Position
														</div>
													)}
												</div>

												{/* Period and Location */}
												<div className="flex flex-wrap gap-4 mb-6 text-white/70">
													<div className="flex items-center gap-2">
														<Calendar className="w-4 h-4 text-blue-400" />
														<span>{job.period}</span>
													</div>
													<div className="flex items-center gap-2">
														<MapPin className="w-4 h-4 text-green-400" />
														<span>{job.location}</span>
													</div>
												</div>

												{/* Highlights */}
												<div className="flex flex-wrap gap-2 mb-6">
													{job.highlights.map((highlight, hIndex) => (
														<span 
															key={hIndex} 
															className="px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-300 text-sm font-medium transform hover:scale-105 transition-transform"
														>
															{highlight}
														</span>
													))}
												</div>

												{/* Responsibilities */}
												<ul className="space-y-3 mb-6">
													{job.responsibilities.map((resp, respIndex) => (
														<li key={respIndex} className="flex items-start gap-3 text-white/90 group/item">
															<div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mt-2 flex-shrink-0 group-hover/item:scale-150 transition-transform"></div>
															<span className="leading-relaxed">{resp}</span>
														</li>
													))}
												</ul>

												{/* Technologies */}
												<div className="border-t border-white/10 pt-6">
													<div className="flex items-center gap-2 mb-3">
														<Code className="w-5 h-5 text-purple-400" />
														<span className="text-purple-300 font-semibold">Technologies:</span>
													</div>
													<p className="text-white/70 leading-relaxed">{job.technologies}</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
};

export default WorkExperience;