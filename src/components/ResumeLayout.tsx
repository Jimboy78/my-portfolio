import { type ChangeEvent, type FormEvent, useState } from "react";
import { useTheme } from "../styles/ThemeContext";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import CustomCursor from "./CustomCursor";

const handleDownloadCV = (): void => {
	const link = document.createElement("a");
	link.href = "/resume.pdf";
	link.download = "Sebastian_Martini_Resume.pdf";
	document.body.append(link);
	link.click();
	link.remove();
};
import {
	Download,
	MapPin,
	Mail,
	Phone,
	Github,
	Linkedin,
	Award,
	GraduationCap,
	ChevronRight,
	Star,
	ChevronDown,
	ArrowRight,
	TrendingUp,
	X,
	Send,
	MessageSquare,
	Sun,
	Moon,
	Briefcase,
	Code2,
	Trophy,
} from "lucide-react";
import { workExperience } from "../data/experience";
import { skills, type SkillCategory } from "../data/skills.ts";
import { personalProjects } from "../data/personal-projects";
import { education } from "../data/education.ts";

const ResumeLayout: React.FC = () => {
	const { theme, toggleTheme } = useTheme();
	const [selectedExperience, setSelectedExperience] = useState(-1); // -1 means all closed
	const [showPersonalProjects, setShowPersonalProjects] = useState(false);
	const [expandedSkills, setExpandedSkills] = useState<Array<string>>([]);
	const [showContactModal, setShowContactModal] = useState(false);
	// const [scrollY, setScrollY] = useState(0); // Removed unused scroll tracking
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});

	// Intersection observer hooks for scroll animations
	const { ref: headerRef, isInView: headerInView } = useIntersectionObserver({
		threshold: 0.2,
	});

	// Removed scroll listener as parallax was causing background issues

	// Theme-based classes
	const themeClasses = {
		background:
			theme === "dark"
				? "bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"
				: "bg-gradient-to-br from-blue-50 via-white to-purple-50",
		card:
			theme === "dark"
				? "bg-white/5 backdrop-blur-xl border-white/10"
				: "bg-white/90 backdrop-blur-xl border-gray-300/40 shadow-lg",
		text: theme === "dark" ? "text-white" : "text-gray-900",
		textSecondary: theme === "dark" ? "text-white/60" : "text-gray-700",
		textMuted: theme === "dark" ? "text-white/40" : "text-gray-600",
		modalBg: theme === "dark" ? "bg-slate-900/95" : "bg-white/95",
	};
	const themeRootClass = theme === "dark" ? "dark-theme" : "light-theme";

	// Moved to file scope per lint rule

	const toggleSkillExpansion = (category: string): void => {
		setExpandedSkills((previous) =>
			previous.includes(category)
				? previous.filter((cat) => cat !== category)
				: [...previous, category]
		);
	};

	const handleInputChange = (
		event_: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	): void => {
		const { name, value } = event_.target;
		setFormData((previous) => ({
			...previous,
			[name]: value,
		}));
	};

	const handleSubmit = (event_: FormEvent): void => {
		event_.preventDefault();

		// Create mailto link with form data
		const subject = encodeURIComponent(
			`Contact from Portfolio: ${formData.subject}`
		);
		const body = encodeURIComponent(`
Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}
		`);

		window.location.href = `mailto:martiniseba78@gmail.com?subject=${subject}&body=${body}`;

		// Reset form and close modal
		setFormData({ name: "", email: "", subject: "", message: "" });
		setShowContactModal(false);
	};

	return (
		<div
			className={`min-h-screen ${themeClasses.background} p-4 md:p-8 relative font-inter transition-all duration-700 custom-cursor ${themeRootClass}`}
		>
			<CustomCursor />
			{/* Fixed background to prevent white flash */}
			<div className={`fixed inset-0 ${themeClasses.background} -z-20`}></div>
			{/* Subtle Animated Background */}
			<div className="fixed inset-0 overflow-hidden pointer-events-none bg-blobs">
				<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl animate-blob"></div>
				<div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
				<div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-slate-500/10 rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>
			</div>

			<div className="relative z-10 max-w-7xl mx-auto">
				{/* Theme Toggle Button */}
				<div className="fixed top-6 right-6 z-50 theme-toggle">
					<button
						onClick={toggleTheme}
						aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
						aria-pressed={theme === "dark"}
						className={`group relative p-3 ${themeClasses.card} rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 border focus:outline-none focus:ring-4 focus:ring-blue-500/20`}
					>
						<div className="relative w-6 h-6">
							{theme === "dark" ? (
								<Sun
									className={`w-6 h-6 ${themeClasses.text} transition-all duration-300 group-hover:rotate-180`}
									aria-hidden="true"
								/>
							) : (
								<Moon
									className={`w-6 h-6 ${themeClasses.text} transition-all duration-300 group-hover:rotate-12`}
									aria-hidden="true"
								/>
							)}
						</div>
						<div className="absolute -inset-1 bg-gradient-to-r from-yellow-500/0 to-blue-500/0 group-hover:from-yellow-500/20 group-hover:to-blue-500/20 rounded-2xl blur transition-all duration-300"></div>
					</button>
				</div>

				{/* Refined Header Section */}
				<div
					ref={headerRef}
					className={`relative mb-8 scroll-animate ${headerInView ? "in-view" : ""}`}
				>
					<div
						className={`absolute inset-0 ${themeClasses.card} rounded-3xl shadow-2xl`}
					></div>

					<div className="relative p-6 md:p-8 themed-surface flex flex-col md:flex-row items-center gap-6 md:gap-8">
						{/* Profile Image */}
						<div className="relative flex-shrink-0">
							<div className="absolute -inset-1 bg-gradient-to-r from-blue-500/50 to-purple-500/50 rounded-full blur opacity-75"></div>
							<div className="relative">
								<img
									src="/perfil-photo.jpeg"
									alt="Sebastian Martini"
									className="w-28 h-28 md:w-32 md:h-32 rounded-full border-4 border-white/20 shadow-xl"
								/>
								<div className="absolute -bottom-1 -right-1 w-8 h-8 bg-green-500 rounded-full border-4 border-white/30"></div>
							</div>
						</div>

						{/* Main Info */}
						<div className="flex-1 text-center md:text-left">
							<h1
								className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-2 ${theme === "dark" ? "bg-gradient-to-r from-white to-slate-200 bg-clip-text text-transparent" : "text-gray-900"}`}
							>
								Sebastian Martini
							</h1>
							<p className="text-lg md:text-xl text-blue-400 font-semibold mb-4">
								Full-Stack Developer
							</p>

							{/* Contact Info */}
							<div className="flex flex-wrap gap-2 md:gap-4 justify-center md:justify-start text-white/80 mb-6">
								<div className="flex items-center gap-2 px-3 py-2 bg-white/5 rounded-full backdrop-blur-sm">
									<MapPin className="w-4 h-4 text-blue-400" />
									<span>Argentina</span>
								</div>
								<div className="flex items-center gap-2 px-3 py-2 bg-white/5 rounded-full backdrop-blur-sm text-sm md:text-base max-w-full">
									<Mail className="w-4 h-4 text-slate-400" />
									<span className="truncate">martiniseba78@gmail.com</span>
								</div>
								<div className="flex items-center gap-2 px-3 py-2 bg-white/5 rounded-full backdrop-blur-sm text-sm md:text-base">
									<Phone className="w-4 h-4 text-purple-400" />
									<span>+54 9 3402 541610</span>
								</div>
							</div>

							{/* Description */}
							<div className="relative p-6 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10 mb-6">
								<p className="text-white/90 leading-relaxed">
									Full-Stack Developer with{" "}
									<span className="text-blue-400 font-semibold">2+ years</span>{" "}
									building end-to-end products. Currently leading ERP and IPTV
									applications with{" "}
									<span className="text-slate-300 font-semibold">
										Next.js/React/Node.js
									</span>{" "}
									stack, focusing on performance optimization and DevOps
									automation.
								</p>
							</div>
						</div>

						{/* Actions */}
						<div className="flex flex-col gap-4 flex-shrink-0">
							<button
								onClick={handleDownloadCV}
								aria-label="Download Sebastian Martini's resume as PDF"
								className="group relative w-full md:w-auto px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl text-white font-semibold shadow-lg hover:shadow-blue-500/25 enhanced-hover transition-all duration-300 overflow-hidden focus:outline-none focus:ring-4 focus:ring-blue-500/20"
							>
								<div className="flex items-center gap-2 relative z-10">
									<Download className="w-5 h-5 group-hover:rotate-12 transition-transform" aria-hidden="true" />
									Download Resume
								</div>
								{/* Shimmer effect */}
								<div className="absolute inset-0 -z-10 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
							</button>

							<button
								onClick={() => {
									setShowContactModal(true);
								}}
								aria-label="Open contact form modal"
								className="group relative w-full md:w-auto px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl text-white font-semibold shadow-lg hover:shadow-purple-500/25 enhanced-hover transition-all duration-300 overflow-hidden focus:outline-none focus:ring-4 focus:ring-purple-500/20"
							>
								<div className="flex items-center gap-2 relative z-10">
									<MessageSquare className="w-5 h-5 group-hover:rotate-12 transition-transform" aria-hidden="true" />
									Contact Me
								</div>
								{/* Shimmer effect */}
								<div className="absolute inset-0 -z-10 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
							</button>

							<div className="flex gap-3 justify-center">
								<a
									href="https://github.com/Jimboy78"
									target="_blank"
									rel="noopener noreferrer"
									aria-label="View Sebastian Martini's GitHub profile"
									className="p-3 bg-white/10 backdrop-blur-sm rounded-xl text-white hover:bg-white/15 transition-all duration-300 border border-white/10 focus:outline-none focus:ring-4 focus:ring-gray-500/20"
								>
									<Github className="w-5 h-5" aria-hidden="true" />
								</a>
								<a
									href="https://www.linkedin.com/in/sebastian-martini/"
									target="_blank"
									rel="noopener noreferrer"
									aria-label="View Sebastian Martini's LinkedIn profile"
									className="p-3 bg-white/10 backdrop-blur-sm rounded-xl text-white hover:bg-white/15 transition-all duration-300 border border-white/10 focus:outline-none focus:ring-4 focus:ring-blue-500/20"
								>
									<Linkedin className="w-5 h-5" aria-hidden="true" />
								</a>
							</div>
						</div>
					</div>
				</div>

				{/* Main Content Grid */}
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
					{/* Left Column - Experience */}
					<div className="lg:col-span-2 space-y-8">
						{/* Work Experience */}
						<div className="relative">
							<div className="absolute inset-0 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl"></div>
							<div className="relative p-6 md:p-8 themed-surface">
								<div className="flex items-center gap-4 mb-8">
									<div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl">
										<Briefcase className="w-6 h-6 text-white" />
									</div>
									<div>
										<h2 className="text-2xl font-bold text-white">
											Work Experience
										</h2>
										<p className="text-white/60">
											Click to view detailed information
										</p>
									</div>
								</div>

								{/* Experience Timeline */}
								<div className="space-y-6">
									{workExperience.map((exp, index: number) => (
										<div
											key={index}
											className={`group relative p-6 rounded-2xl border cursor-pointer transition-all duration-300 ${
												selectedExperience === index
													? "border-blue-500/50 bg-blue-500/5 shadow-lg"
													: "border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10"
											}`}
											onClick={() => {
												setSelectedExperience(
													selectedExperience === index ? -1 : index
												);
											}}
										>
											<div className="flex items-start justify-between mb-4">
												<div className="flex-1">
													<h3 className="text-xl font-semibold text-white mb-1">
														{exp.position}
													</h3>
													<p
														className={`text-lg font-medium bg-gradient-to-r ${exp.color} bg-clip-text text-transparent`}
													>
														{exp.company}
													</p>
													<p className="text-white/60 text-sm mt-2">
														{exp.description}
													</p>
												</div>
												<div className="flex items-center gap-3">
													{exp.current && (
														<div className="px-3 py-1 bg-green-500/20 text-green-400 text-sm rounded-full border border-green-500/30">
															Current
														</div>
													)}
													<span className="text-white/60 text-sm bg-white/10 px-3 py-1 rounded-full">
														{exp.period}
													</span>
													<ArrowRight
														className={`w-4 h-4 text-white/40 transition-transform ${selectedExperience === index ? "rotate-90" : ""}`}
													/>
												</div>
											</div>

											{selectedExperience === index && (
												<div className="mt-6 pt-6 border-t border-white/10 animate-fade-in">
													<div className="mb-6">
														<h4 className="text-lg font-semibold text-white mb-3">
															Key Responsibilities
														</h4>
														<ul className="space-y-3">
															{exp.highlights.map(
																(highlight: string, hIndex: number) => (
																	<li
																		key={hIndex}
																		className="flex items-start gap-3 text-white/80 leading-relaxed"
																	>
																		<div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
																		<span>{highlight}</span>
																	</li>
																)
															)}
														</ul>
													</div>

													<div className="mb-6">
														<h4 className="text-lg font-semibold text-white mb-3">
															Key Achievements
														</h4>
														<ul className="space-y-2">
															{exp.achievements.map(
																(achievement: string, aIndex: number) => (
																	<li
																		key={aIndex}
																		className="flex items-start gap-3 text-green-300 text-sm"
																	>
																		<TrendingUp className="w-4 h-4 mt-0.5 flex-shrink-0" />
																		<span>{achievement}</span>
																	</li>
																)
															)}
														</ul>
													</div>

													<div className="flex flex-wrap gap-2">
														{exp.tech.map((tech: string, tIndex: number) => (
															<span
																key={tIndex}
																className={`px-3 py-1 bg-gradient-to-r ${exp.color} text-white text-sm rounded-full font-medium`}
															>
																{tech}
															</span>
														))}
													</div>
												</div>
											)}
										</div>
									))}
								</div>
							</div>
						</div>

						{/* Skills Overview */}
						<div className="relative">
							<div className="absolute inset-0 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl"></div>
							<div className="relative p-6 md:p-8 themed-surface">
								<div className="flex items-center gap-4 mb-8">
									<div className="p-3 bg-gradient-to-r from-slate-600 to-slate-700 rounded-xl">
										<Code2 className="w-6 h-6 text-white" />
									</div>
									<div>
										<h2 className="text-2xl font-bold text-white">
											Technical Skills
										</h2>
										<p className="text-white/60">Technology expertise</p>
									</div>
								</div>
								<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
									{Object.entries(skills).map(
										([category, data]: [string, SkillCategory]) => {
											const isExpanded = expandedSkills.includes(category);
											const visibleTechs = isExpanded
												? data.techs
												: data.techs.slice(0, 3);
											const hasMore = data.techs.length > 3;

											return (
												<div key={category} className="relative group">
													<div className="relative p-6 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-500 bg-white/5 hover:bg-white/10 backdrop-blur-sm overflow-hidden">
														{/* Animated background glow - now inside the card */}
														<div
															className={`absolute inset-0 bg-gradient-to-r ${data.color} rounded-2xl opacity-0 group-hover:opacity-10 transition duration-500`}
														></div>
														{/* Header */}
														<div className="flex items-center justify-between mb-4 relative z-10">
															<div className="flex items-center gap-3">
																<div
																	className={`p-3 rounded-xl bg-gradient-to-br ${data.color} shadow-lg`}
																>
																	<data.icon className="w-6 h-6 text-white" />
																</div>
																<h3 className="text-lg font-semibold text-white">
																	{category}
																</h3>
															</div>
															<div className="text-xs text-white/40 bg-white/10 px-2 py-1 rounded-full">
																{data.techs.length}
															</div>
														</div>

														{/* Skills Tags */}
														<div className="space-y-3 relative z-10">
															<div className="flex flex-wrap gap-2">
																{visibleTechs.map(
																	(tech: string, index: number) => (
																		<div
																			key={index}
																			className={`inline-flex items-center text-white text-sm bg-gradient-to-r ${data.color} px-3 py-2 rounded-lg font-medium shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105`}
																		>
																			<span className="w-2 h-2 bg-white/30 rounded-full mr-2 animate-pulse"></span>
																			{tech}
																		</div>
																	)
																)}
															</div>

															{/* Expand/Collapse Button */}
															{hasMore && (
																<button
																	onClick={() => {
																		toggleSkillExpansion(category);
																	}}
																	className="flex items-center justify-center w-full mt-3 px-4 py-2 text-sm text-white/70 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-lg transition-all duration-300 group"
																>
																	{isExpanded ? (
																		<>
																			<ChevronDown className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform rotate-180" />
																			Show Less
																		</>
																	) : (
																		<>
																			<ChevronRight className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
																			Show {data.techs.length - 3} More
																		</>
																	)}
																</button>
															)}
														</div>
													</div>
												</div>
											);
										}
									)}
								</div>
							</div>
						</div>

						{/* Personal Projects - Expandable */}
						<div className="relative">
							<div className="absolute inset-0 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl"></div>
							<div className="relative p-6 md:p-8 themed-surface">
								<button
									onClick={() => {
										setShowPersonalProjects(!showPersonalProjects);
									}}
									className="flex items-center justify-between w-full mb-6 hover:bg-white/5 p-4 rounded-2xl transition-all duration-300"
								>
									<div className="flex items-center gap-4">
										<div className="p-3 bg-gradient-to-r from-purple-600 to-purple-700 rounded-xl">
											<Trophy className="w-6 h-6 text-white" />
										</div>
										<div className="text-left">
											<h2 className="text-2xl font-bold text-white">
												Personal Projects
											</h2>
											<p className="text-white/60">
												Side projects and achievements
											</p>
										</div>
									</div>
									<ChevronDown
										className={`w-5 h-5 text-white/60 transition-transform ${showPersonalProjects ? "rotate-180" : ""}`}
									/>
								</button>

								{showPersonalProjects && (
									<div className="space-y-6 animate-fade-in">
										{personalProjects.map((project, index) => {
											const IconComponent = project.icon;
											return (
												<div
													key={index}
													className="p-6 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 bg-white/5 hover:bg-white/10"
												>
													<div className="flex items-start gap-6">
														<div
															className={`p-3 rounded-xl bg-gradient-to-br ${project.color} flex-shrink-0`}
														>
															<IconComponent className="w-6 h-6 text-white" />
														</div>
														<div className="flex-1">
															<div className="flex items-start justify-between mb-3">
																<h3 className="text-lg font-semibold text-white">
																	{project.title}
																</h3>
																<span className="text-white/60 text-sm bg-white/10 px-3 py-1 rounded-full">
																	{project.period}
																</span>
															</div>
															<p className="text-white/70 mb-4 leading-relaxed">
																{project.description}
															</p>
															<div
																className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${project.color} text-white text-sm rounded-full font-medium`}
															>
																<Award className="w-4 h-4" />
																{project.achievement}
															</div>
														</div>
													</div>
												</div>
											);
										})}
									</div>
								)}
							</div>
						</div>
					</div>

					{/* Right Column - Education & Stats */}
					<div className="space-y-8">
						{/* Education */}
						<div className="relative">
							<div className="absolute inset-0 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl"></div>
							<div className="relative p-6 md:p-8 themed-surface">
								<div className="flex items-center gap-4 mb-8">
									<div className="p-3 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl">
										<GraduationCap className="w-6 h-6 text-white" />
									</div>
									<div>
										<h2 className="text-2xl font-bold text-white">Education</h2>
									</div>
								</div>
								<div className="space-y-6">
									{education.map(
										(
											edu: {
												title: string;
												institution: string;
												year: string;
												details?: Array<string>;
											},
											index: number
										) => (
											<div
												key={index}
												className="p-6 rounded-2xl border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 transition-all duration-300"
											>
												<h3 className="text-lg font-semibold text-white mb-2">
													{edu.title}
												</h3>
												<p className="text-blue-400 font-medium mb-2">
													{edu.institution}
												</p>
												<p className="text-white/60 text-sm mb-3">{edu.year}</p>
												{edu.details && (
													<div className="flex flex-wrap gap-2">
														{edu.details.map(
															(detail: string, dIndex: number) => (
																<span
																	key={dIndex}
																	className="px-2 py-1 bg-indigo-500/20 text-indigo-300 text-xs rounded-lg border border-indigo-500/30"
																>
																	{detail}
																</span>
															)
														)}
													</div>
												)}
											</div>
										)
									)}
								</div>
							</div>
						</div>

						{/* Quick Stats */}
						<div className="relative">
							<div className="absolute inset-0 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl"></div>
							<div className="relative p-6 md:p-8 themed-surface">
								<div className="flex items-center gap-4 mb-8">
									<div className="p-3 bg-gradient-to-r from-slate-600 to-slate-700 rounded-xl">
										<Star className="w-6 h-6 text-white" />
									</div>
									<div>
										<h2 className="text-2xl font-bold text-white">
											Quick Stats
										</h2>
									</div>
								</div>
								<div className="space-y-4">
									{[
										{
											label: "Years of Experience",
											value: "2+",
											color: "from-blue-400 to-blue-600",
										},
										{
											label: "Projects Completed",
											value: "10+",
											color: "from-purple-400 to-purple-600",
										},
										{
											label: "Technologies",
											value: "15+",
											color: "from-slate-400 to-slate-600",
										},
										{
											label: "Certifications",
											value: "6",
											color: "from-indigo-400 to-indigo-600",
										},
									].map((stat, index) => (
										<div
											key={index}
											className="flex items-center justify-between p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-300"
										>
											<span className="text-white/80">{stat.label}</span>
											<span
												className={`text-xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
											>
												{stat.value}
											</span>
										</div>
									))}
								</div>
							</div>
						</div>

						{/* Languages */}
						<div className="relative">
							<div className="absolute inset-0 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 shadow-xl"></div>
							<div className="relative p-6 md:p-8">
								<h2 className="text-2xl font-bold text-white mb-6">
									Languages
								</h2>
								<div className="space-y-4">
									<div className="flex items-center justify-between p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-300">
										<div className="flex items-center gap-4">
											<span className="text-2xl">🇦🇷</span>
											<span className="text-white text-lg">Spanish</span>
										</div>
										<span className="bg-gradient-to-r from-green-500 to-green-600 text-white text-sm font-medium px-3 py-1 rounded-full">
											Native
										</span>
									</div>
									<div className="flex items-center justify-between p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-300">
										<div className="flex items-center gap-4">
											<span className="text-2xl">🇺🇸</span>
											<span className="text-white text-lg">English</span>
										</div>
										<span className="bg-gradient-to-r from-blue-500 to-blue-600 text-white text-sm font-medium px-3 py-1 rounded-full">
											Proficient
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Footer */}
				<div className="mt-12 text-center">
					<div className="relative">
						<div className="absolute inset-0 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 shadow-xl"></div>
						<div className="relative p-6">
							<p className="text-white/60 text-sm">
								Built with React, TypeScript & Tailwind CSS • Sebastian Martini
								© 2025
							</p>
						</div>
					</div>
				</div>
			</div>

			{/* Contact Modal */}
			{showContactModal && (
				<div 
					className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center overflow-hidden"
					role="dialog"
					aria-labelledby="contact-modal-title"
					aria-describedby="contact-modal-description"
					onClick={() => setShowContactModal(false)}
				>
					<div 
						className="relative w-full max-w-md mx-4 my-8 max-h-[calc(100vh-4rem)] flex flex-col"
						onClick={(e) => e.stopPropagation()}
					>
						{/* Animated background glow */}
						<div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur opacity-30"></div>

						<div className={`relative ${themeClasses.modalBg} backdrop-blur-xl rounded-3xl border ${theme === "dark" ? "border-white/10" : "border-gray-300/30"} shadow-2xl animate-fade-in flex flex-col max-h-full overflow-hidden`}>
							{/* Header - Fixed at top */}
							<div className="flex-shrink-0 p-4 sm:p-6 border-b border-white/10">
								<div className="flex items-center justify-between">
									<div>
										<h3 id="contact-modal-title" className={`text-lg sm:text-xl font-bold ${themeClasses.text} mb-1`}>
											Get In Touch
										</h3>
										<p id="contact-modal-description" className={`${themeClasses.textSecondary} text-xs sm:text-sm`}>
											Send me a message and I'll get back to you!
										</p>
									</div>
									<button
										onClick={() => {
											setShowContactModal(false);
										}}
										aria-label="Close contact form"
										className={`p-2 rounded-xl ${theme === "dark" ? "bg-white/5 hover:bg-white/10 text-white/60 hover:text-white" : "bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-900"} transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-red-500/20 flex-shrink-0`}
									>
										<X className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
									</button>
								</div>
							</div>

							{/* Form - Scrollable content */}
							<div className="flex-1 overflow-y-auto p-4 sm:p-6">
								<form onSubmit={handleSubmit} className="space-y-4">
									{/* Name */}
									<div>
										<label className={`block ${themeClasses.text} text-xs sm:text-sm font-medium mb-2`}>
											Name
										</label>
										<input
											type="text"
											name="name"
											value={formData.name}
											onChange={handleInputChange}
											required
											className={`w-full px-3 sm:px-4 py-2 sm:py-3 ${theme === "dark" ? "bg-white/5 border-white/10 text-white placeholder-white/40" : "bg-white/90 border-gray-300 text-gray-900 placeholder-gray-500"} border rounded-lg sm:rounded-xl focus:outline-none focus:border-purple-500/50 ${theme === "dark" ? "focus:bg-white/10" : "focus:bg-white"} transition-all duration-300 text-sm sm:text-base`}
											placeholder="Your full name"
										/>
									</div>

									{/* Email */}
									<div>
										<label className={`block ${themeClasses.text} text-xs sm:text-sm font-medium mb-2`}>
											Email
										</label>
										<input
											type="email"
											name="email"
											value={formData.email}
											onChange={handleInputChange}
											required
											className={`w-full px-3 sm:px-4 py-2 sm:py-3 ${theme === "dark" ? "bg-white/5 border-white/10 text-white placeholder-white/40" : "bg-white/90 border-gray-300 text-gray-900 placeholder-gray-500"} border rounded-lg sm:rounded-xl focus:outline-none focus:border-purple-500/50 ${theme === "dark" ? "focus:bg-white/10" : "focus:bg-white"} transition-all duration-300 text-sm sm:text-base`}
											placeholder="your.email@example.com"
										/>
									</div>

									{/* Subject */}
									<div>
										<label className={`block ${themeClasses.text} text-xs sm:text-sm font-medium mb-2`}>
											Subject
										</label>
										<input
											type="text"
											name="subject"
											value={formData.subject}
											onChange={handleInputChange}
											required
											className={`w-full px-3 sm:px-4 py-2 sm:py-3 ${theme === "dark" ? "bg-white/5 border-white/10 text-white placeholder-white/40" : "bg-white/90 border-gray-300 text-gray-900 placeholder-gray-500"} border rounded-lg sm:rounded-xl focus:outline-none focus:border-purple-500/50 ${theme === "dark" ? "focus:bg-white/10" : "focus:bg-white"} transition-all duration-300 text-sm sm:text-base`}
											placeholder="What's this about?"
										/>
									</div>

									{/* Message */}
									<div>
										<label className={`block ${themeClasses.text} text-xs sm:text-sm font-medium mb-2`}>
											Message
										</label>
										<textarea
											name="message"
											value={formData.message}
											onChange={handleInputChange}
											required
											rows={3}
											className={`w-full px-3 sm:px-4 py-2 sm:py-3 ${theme === "dark" ? "bg-white/5 border-white/10 text-white placeholder-white/40" : "bg-white/90 border-gray-300 text-gray-900 placeholder-gray-500"} border rounded-lg sm:rounded-xl focus:outline-none focus:border-purple-500/50 ${theme === "dark" ? "focus:bg-white/10" : "focus:bg-white"} transition-all duration-300 resize-none text-sm sm:text-base min-h-[80px]`}
											placeholder="Tell me about your project or just say hi!"
										/>
									</div>

									{/* Submit Button */}
									<button
										type="submit"
										className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg sm:rounded-xl shadow-lg hover:shadow-purple-500/25 transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 focus:outline-none focus:ring-4 focus:ring-purple-500/20 text-sm sm:text-base mt-6"
									>
										<Send className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
										Send Message
									</button>
								</form>
							</div>

							{/* Footer Note - Fixed at bottom */}
							<div className="flex-shrink-0 p-4 sm:p-6 border-t border-white/10">
								<p className={`text-center ${themeClasses.textMuted} text-xs`}>
									This will open your default email client
								</p>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default ResumeLayout;
