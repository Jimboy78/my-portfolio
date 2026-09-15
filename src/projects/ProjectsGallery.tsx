import type React from "react";
import { useEffect, useRef, useState } from "react";
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
		chip: theme === "dark" ? "bg-white/5" : "bg-gray-900/5",
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
					className={`inline-flex items-center gap-2 ${themeClasses.text} hover:text-blue-400 transition-colors mb-6 group`}
				>
					<ArrowRight className="w-5 h-5 rotate-180 group-hover:-translate-x-1 transition-transform" />
					Back to Home
				</a>

				{/* Header */}
				<div className="mb-8">
					<h1
						className={`text-4xl md:text-5xl font-bold ${themeClasses.text} mb-3`}
					>
						All Projects
					</h1>
					<p className={`text-lg ${themeClasses.textSecondary}`}>
						Production applications, AI systems, and technical learning projects
					</p>
				</div>

				{/* Featured Projects */}
				{featuredProjects.length > 0 && (
					<section className="mb-12">
						<SectionTitle
							icon={<Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />}
							title="Featured"
							count={featuredProjects.length}
							themeClasses={themeClasses}
						/>
						<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
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
					</section>
				)}

				{/* Other Projects */}
				{otherProjects.length > 0 && (
					<section>
						<SectionTitle
							title="Other Projects"
							count={otherProjects.length}
							themeClasses={themeClasses}
						/>
						<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
							{otherProjects.map((project) => (
								<ProjectCard
									key={project.metadata.id}
									project={project}
									onClick={() => onProjectSelect(project.metadata.id)}
									themeClasses={themeClasses}
								/>
							))}
						</div>
					</section>
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

type ThemeClasses = {
	card: string;
	chip: string;
	text: string;
	textSecondary: string;
	textMuted: string;
};

const SectionTitle: React.FC<{
	icon?: React.ReactNode;
	title: string;
	count: number;
	themeClasses: ThemeClasses;
}> = ({ icon, title, count, themeClasses }) => (
	<div className="flex items-center gap-2.5 mb-5">
		{icon}
		<h2 className={`text-2xl font-bold ${themeClasses.text}`}>{title}</h2>
		<span
			className={`px-2 py-0.5 text-xs font-medium rounded-full ${themeClasses.chip} ${themeClasses.textMuted}`}
		>
			{count}
		</span>
	</div>
);

type Orientation = "portrait" | "landscape";

// Wider than this counts as a landscape screenshot (desktop/web UI).
const LANDSCAPE_RATIO = 1.2;

/**
 * Portrait/square images (phone screens, photos) fill the card as before.
 * Landscape screenshots would lose their header to a center crop, so they're shown
 * as a floating browser window pinned to the top, over a blurred copy of the image.
 */
const ProjectThumbnail: React.FC<{ src: string; alt: string; gradient: string }> = ({
	src,
	alt,
	gradient,
}) => {
	const [orientation, setOrientation] = useState<Orientation | null>(null);

	useEffect(() => {
		let cancelled = false;
		const img = new Image();
		const measure = () => {
			if (cancelled || !img.naturalHeight) return;
			setOrientation(
				img.naturalWidth / img.naturalHeight > LANDSCAPE_RATIO ? "landscape" : "portrait",
			);
		};
		img.onload = measure;
		img.onerror = () => !cancelled && setOrientation("portrait");
		img.src = src;
		if (img.complete) measure();
		return () => {
			cancelled = true;
		};
	}, [src]);

	if (orientation === null) {
		return <div className="w-full h-full animate-pulse bg-white/5" />;
	}

	if (orientation === "portrait") {
		return (
			<img
				src={src}
				alt={alt}
				loading="lazy"
				className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
			/>
		);
	}

	return (
		<>
			<img
				src={src}
				alt=""
				aria-hidden="true"
				loading="lazy"
				className="absolute inset-0 w-full h-full object-cover scale-125 blur-2xl opacity-70 saturate-150"
			/>
			<div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-25`} />
			<div className="absolute inset-x-4 top-5 -bottom-2 [perspective:1000px]">
				<div className="h-full rounded-t-lg overflow-hidden border border-white/15 bg-slate-900 shadow-2xl shadow-black/60 origin-bottom transition-transform duration-500 ease-out [transform:rotateX(8deg)] group-hover:[transform:rotateX(0deg)_translateY(-4px)]">
					<div className="flex items-center gap-1 h-4 px-2 bg-slate-800/95 border-b border-white/10">
						<span className="w-1.5 h-1.5 rounded-full bg-red-400/80" />
						<span className="w-1.5 h-1.5 rounded-full bg-yellow-400/80" />
						<span className="w-1.5 h-1.5 rounded-full bg-green-400/80" />
					</div>
					<img
						src={src}
						alt={alt}
						loading="lazy"
						className="w-full h-[calc(100%-1rem)] object-cover object-top"
					/>
				</div>
			</div>
		</>
	);
};

/** Poster at rest; the (heavy) preview video only loads and plays while hovered. */
const HoverVideo: React.FC<{ src: string; poster?: string; active: boolean }> = ({
	src,
	poster,
	active,
}) => {
	const videoRef = useRef<HTMLVideoElement>(null);
	const [started, setStarted] = useState(false);

	useEffect(() => {
		const video = videoRef.current;
		if (!video) return;
		if (active) {
			setStarted(true);
			video.play().catch(() => {});
		} else {
			video.pause();
		}
	}, [active]);

	return (
		<>
			{poster && (
				<img
					src={poster}
					alt=""
					loading="lazy"
					className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
						active && started ? "opacity-0" : "opacity-100"
					}`}
				/>
			)}
			<video
				ref={videoRef}
				loop
				muted
				playsInline
				preload="none"
				className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
					active ? "opacity-100" : "opacity-0"
				}`}
			>
				<source src={src} type="video/mp4" />
			</video>
		</>
	);
};

const STATUS_STYLES: Record<string, string> = {
	production: "bg-green-500/30 text-green-200 border-green-400/30",
	development: "bg-yellow-500/30 text-yellow-200 border-yellow-400/30",
};

interface ProjectCardProps {
	project: Project;
	onClick: () => void;
	themeClasses: ThemeClasses;
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
	const [hovered, setHovered] = useState(false);
	const stats = metadata.stats?.slice(0, 3) ?? [];

	return (
		<div
			role="link"
			tabIndex={0}
			onClick={onClick}
			onKeyDown={(e) => {
				if (e.key === "Enter" || e.key === " ") {
					e.preventDefault();
					onClick();
				}
			}}
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
			onFocus={() => setHovered(true)}
			onBlur={() => setHovered(false)}
			aria-label={`${metadata.title} — ${metadata.subtitle}`}
			className="group relative cursor-pointer outline-none transition-transform duration-300 hover:-translate-y-1 focus-visible:-translate-y-1"
		>
			{/* Glow on hover */}
			<div
				className={`absolute -inset-px bg-gradient-to-r ${metadata.gradient} rounded-2xl opacity-0 group-hover:opacity-40 group-focus-visible:opacity-60 blur-md transition duration-300`}
			></div>

			<div
				className={`relative ${themeClasses.card} border rounded-2xl overflow-hidden h-full flex flex-col`}
			>
				{/* Media + hover preview */}
				<div className="relative aspect-[16/10] bg-gradient-to-br from-slate-800 to-slate-900 overflow-hidden">
					{metadata.thumbnailVideo ? (
						<HoverVideo
							src={metadata.thumbnailVideo}
							poster={metadata.thumbnailImage}
							active={hovered}
						/>
					) : metadata.thumbnailImage ? (
						<ProjectThumbnail
							src={metadata.thumbnailImage}
							alt={metadata.title}
							gradient={metadata.gradient}
						/>
					) : (
						<div
							className={`w-full h-full bg-gradient-to-br ${metadata.gradient} flex items-center justify-center`}
						>
							<IconComponent className="w-14 h-14 text-white/40 transition-transform duration-500 group-hover:scale-110" />
						</div>
					)}

					{/* Badges */}
					<div className="absolute top-3 inset-x-3 flex items-center justify-between gap-2">
						{featured ? (
							<span className="p-1 rounded-full bg-black/40 backdrop-blur-sm">
								<Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
							</span>
						) : (
							<span />
						)}
						<span
							className={`px-2 py-0.5 text-[11px] font-medium rounded-full border backdrop-blur-sm ${
								STATUS_STYLES[metadata.status] ?? "bg-blue-500/30 text-blue-200 border-blue-400/30"
							}`}
						>
							{metadata.status}
						</span>
					</div>

					{/* Hover preview: stats + pitch slide up over the media */}
					<div className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-slate-950 via-slate-950/85 to-slate-950/10 opacity-0 translate-y-3 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 group-focus-visible:opacity-100 group-focus-visible:translate-y-0">
						{stats.length > 0 && (
							<div className="grid grid-cols-3 gap-2 mb-3">
								{stats.map((stat, index) => (
									<div key={index} className="min-w-0">
										<div
											className={`text-base font-bold leading-tight bg-gradient-to-r ${metadata.gradient} bg-clip-text text-transparent truncate`}
										>
											{stat.value}
										</div>
										<div className="text-[10px] leading-tight text-white/60 line-clamp-2">
											{stat.label}
										</div>
									</div>
								))}
							</div>
						)}
						<div className="flex items-center justify-between gap-2">
							<span className="text-xs text-white/70 truncate">
								{metadata.techStack.slice(0, 4).join(" · ")}
							</span>
							<span className="flex-shrink-0 inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white text-slate-900 text-xs font-semibold">
								Open
								<ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
							</span>
						</div>
					</div>
				</div>

				{/* Summary */}
				<div className="p-4 flex flex-col flex-1">
					<div className="flex items-center gap-2.5 mb-2">
						<div
							className={`p-1.5 rounded-lg bg-gradient-to-br ${metadata.gradient} flex-shrink-0`}
						>
							<IconComponent className="w-4 h-4 text-white" />
						</div>
						<div className="flex-1 min-w-0">
							<h3
								className={`text-base font-bold leading-tight ${themeClasses.text} truncate`}
							>
								{metadata.title}
							</h3>
							<p className={`text-xs ${themeClasses.textMuted}`}>{metadata.period}</p>
						</div>
					</div>

					<p
						className={`${themeClasses.textSecondary} text-sm leading-snug line-clamp-2 mb-3`}
					>
						{metadata.subtitle}
					</p>

					{/* Touch devices have no hover preview: show the headline stats inline */}
					{stats.length > 0 && (
						<div className="hidden [@media(hover:none)]:flex gap-3 mb-3">
							{stats.slice(0, 2).map((stat, index) => (
								<div key={index} className="flex-1 min-w-0">
									<div
										className={`text-sm font-bold bg-gradient-to-r ${metadata.gradient} bg-clip-text text-transparent truncate`}
									>
										{stat.value}
									</div>
									<div className={`text-[11px] ${themeClasses.textMuted} truncate`}>
										{stat.label}
									</div>
								</div>
							))}
						</div>
					)}

					<div className="mt-auto flex flex-wrap gap-1.5">
						{metadata.techStack.slice(0, 3).map((tech, index) => (
							<span
								key={index}
								className={`px-2 py-0.5 text-[11px] ${themeClasses.textMuted} ${themeClasses.chip} rounded-md`}
							>
								{tech}
							</span>
						))}
						{metadata.techStack.length > 3 && (
							<span
								className={`px-2 py-0.5 text-[11px] ${themeClasses.textMuted} ${themeClasses.chip} rounded-md`}
							>
								+{metadata.techStack.length - 3}
							</span>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProjectsGallery;
