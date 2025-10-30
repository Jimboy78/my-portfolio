import type React from "react";
import { ArrowRight, Star } from "lucide-react";
import { useTheme } from "../styles/ThemeContext";
import type { Project } from "./types";

interface ProjectsGalleryProps {
	projects: Array<Project>;
	onProjectSelect: (projectId: string) => void;
}

const ProjectsGallery: React.FC<ProjectsGalleryProps> = ({
	projects,
	onProjectSelect,
}) => {
	const { theme } = useTheme();

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
	};

	const featuredProjects = projects.filter((p) => p.metadata.featured);
	const otherProjects = projects.filter((p) => !p.metadata.featured);

	return (
		<div className={`min-h-screen ${themeClasses.background} p-4 md:p-8`}>
			{/* Fixed background */}
			<div className={`fixed inset-0 ${themeClasses.background} -z-20`}></div>

			{/* Animated background blobs */}
			<div className="fixed inset-0 overflow-hidden pointer-events-none bg-blobs">
				<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl animate-blob"></div>
				<div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
			</div>

			<div className="relative z-10 max-w-7xl mx-auto">
				{/* Back to Home button */}
				<a
					href="#"
					className={`inline-flex items-center gap-2 ${themeClasses.text} hover:text-blue-400 transition-colors mb-8 group`}
				>
					<ArrowRight className="w-5 h-5 rotate-180 group-hover:-translate-x-1 transition-transform" />
					Back to Home
				</a>

				{/* Header */}
				<div className="mb-12">
					<h1
						className={`text-4xl md:text-5xl font-bold ${themeClasses.text} mb-4`}
					>
						Featured Projects
					</h1>
					<p className={`text-lg ${themeClasses.textSecondary}`}>
						A showcase of my best work - from production apps to technical
						experiments
					</p>
				</div>

				{/* Featured Projects */}
				{featuredProjects.length > 0 && (
					<div className="mb-16">
						<div className="flex items-center gap-3 mb-6">
							<Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
							<h2 className={`text-2xl font-bold ${themeClasses.text}`}>
								Featured
							</h2>
						</div>

						<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
							{featuredProjects.map((project) => (
								<ProjectCard
									key={project.metadata.id}
									project={project}
									onClick={() => onProjectSelect(project.metadata.id)}
									themeClasses={themeClasses}
									featured
								/>
							))}
						</div>
					</div>
				)}

				{/* Other Projects */}
				{otherProjects.length > 0 && (
					<div>
						<h2 className={`text-2xl font-bold ${themeClasses.text} mb-6`}>
							All Projects
						</h2>

						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
							{otherProjects.map((project) => (
								<ProjectCard
									key={project.metadata.id}
									project={project}
									onClick={() => onProjectSelect(project.metadata.id)}
									themeClasses={themeClasses}
								/>
							))}
						</div>
					</div>
				)}

				{/* Empty state */}
				{projects.length === 0 && (
					<div className={`${themeClasses.card} border rounded-3xl p-12 text-center`}>
						<p className={`text-xl ${themeClasses.textSecondary}`}>
							No projects yet. Check back soon!
						</p>
					</div>
				)}
			</div>
		</div>
	);
};

interface ProjectCardProps {
	project: Project;
	onClick: () => void;
	themeClasses: {
		card: string;
		text: string;
		textSecondary: string;
		textMuted: string;
	};
	featured?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
	project,
	onClick,
	themeClasses,
	featured = false,
}) => {
	const { metadata } = project;
	const IconComponent = metadata.icon;

	return (
		<div
			onClick={onClick}
			className={`group relative cursor-pointer transition-all duration-300 hover:scale-105 ${featured ? "lg:col-span-1" : ""}`}
		>
			{/* Glow effect on hover */}
			<div
				className={`absolute -inset-1 bg-gradient-to-r ${metadata.gradient} rounded-3xl opacity-0 group-hover:opacity-20 blur transition duration-300`}
			></div>

			<div
				className={`relative ${themeClasses.card} border rounded-3xl overflow-hidden h-full`}
			>
				{/* Thumbnail */}
				<div className="relative h-48 bg-gradient-to-br from-slate-800 to-slate-900 overflow-hidden">
					{metadata.thumbnailVideo ? (
						<video
							autoPlay
							loop
							muted
							playsInline
							className="w-full h-full object-cover"
						>
							<source src={metadata.thumbnailVideo} type="video/mp4" />
						</video>
					) : metadata.thumbnailImage ? (
						<img
							src={metadata.thumbnailImage}
							alt={metadata.title}
							className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
						/>
					) : (
						<div
							className={`w-full h-full bg-gradient-to-br ${metadata.gradient} flex items-center justify-center`}
						>
							<IconComponent className="w-16 h-16 text-white/30" />
						</div>
					)}

					{/* Status badge */}
					<div className="absolute top-4 right-4">
						<span
							className={`px-3 py-1 text-xs font-medium rounded-full backdrop-blur-sm ${
								metadata.status === "production"
									? "bg-green-500/30 text-green-300 border border-green-400/30"
									: metadata.status === "development"
										? "bg-yellow-500/30 text-yellow-300 border border-yellow-400/30"
										: "bg-blue-500/30 text-blue-300 border border-blue-400/30"
							}`}
						>
							{metadata.status}
						</span>
					</div>

					{/* Featured badge */}
					{featured && (
						<div className="absolute top-4 left-4">
							<Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
						</div>
					)}
				</div>

				{/* Content */}
				<div className="p-6">
					<div className="flex items-start gap-3 mb-3">
						<div
							className={`p-2 rounded-lg bg-gradient-to-br ${metadata.gradient} flex-shrink-0`}
						>
							<IconComponent className="w-5 h-5 text-white" />
						</div>
						<div className="flex-1 min-w-0">
							<h3
								className={`text-xl font-bold ${themeClasses.text} mb-1 line-clamp-1`}
							>
								{metadata.title}
							</h3>
							<p className={`text-sm ${themeClasses.textMuted}`}>
								{metadata.period}
							</p>
						</div>
					</div>

					<p
						className={`${themeClasses.textSecondary} text-sm leading-relaxed mb-4 line-clamp-3`}
					>
						{metadata.subtitle}
					</p>

					{/* Stats preview */}
					{metadata.stats && metadata.stats.length > 0 && (
						<div className="flex gap-4 mb-4">
							{metadata.stats.slice(0, 2).map((stat, index) => (
								<div key={index} className="flex-1">
									<div
										className={`text-lg font-bold bg-gradient-to-r ${metadata.gradient} bg-clip-text text-transparent`}
									>
										{stat.value}
									</div>
									<div className={`text-xs ${themeClasses.textMuted}`}>
										{stat.label}
									</div>
								</div>
							))}
						</div>
					)}

					{/* Tech stack preview */}
					<div className="flex flex-wrap gap-2 mb-4">
						{metadata.techStack.slice(0, 3).map((tech, index) => (
							<span
								key={index}
								className={`px-2 py-1 text-xs ${themeClasses.textMuted} bg-white/5 rounded-lg`}
							>
								{tech}
							</span>
						))}
						{metadata.techStack.length > 3 && (
							<span
								className={`px-2 py-1 text-xs ${themeClasses.textMuted} bg-white/5 rounded-lg`}
							>
								+{metadata.techStack.length - 3}
							</span>
						)}
					</div>

					{/* View button */}
					<button
						className={`flex items-center gap-2 text-sm font-medium ${themeClasses.text} group-hover:text-blue-400 transition-colors`}
					>
						View Project
						<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
					</button>
				</div>
			</div>
		</div>
	);
};

export default ProjectsGallery;
