import type React from "react";
import { useState } from "react";
import { ArrowLeft, ExternalLink, Github, FileText, ChevronLeft, ChevronRight, Play, Music } from "lucide-react";
import { useTheme } from "../styles/ThemeContext";
import type { ProjectMetadata } from "./types";

interface ProjectDetailProps {
	metadata: ProjectMetadata;
	onBack: () => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ metadata, onBack }) => {
	const { theme } = useTheme();
	const [currentImageIndex, setCurrentImageIndex] = useState(0);
	const [showVideo, setShowVideo] = useState(false);
	const [currentSongIndex, setCurrentSongIndex] = useState(0);

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

	const getLinkIcon = (type: string) => {
		switch (type) {
			case "github":
				return Github;
			case "demo":
				return ExternalLink;
			case "docs":
			case "case-study":
				return FileText;
			default:
				return ExternalLink;
		}
	};

	const nextImage = () => {
		if (metadata.screenshots && metadata.screenshots.length > 0) {
			setCurrentImageIndex((prev) =>
				prev === metadata.screenshots!.length - 1 ? 0 : prev + 1
			);
		}
	};

	const prevImage = () => {
		if (metadata.screenshots && metadata.screenshots.length > 0) {
			setCurrentImageIndex((prev) =>
				prev === 0 ? metadata.screenshots!.length - 1 : prev - 1
			);
		}
	};

	const currentScreenshot = metadata.screenshots?.[currentImageIndex];

	return (
		<div className={`min-h-screen ${themeClasses.background} p-4 md:p-8`}>
			<div className="max-w-7xl mx-auto">
				{/* Back button */}
				<button
					onClick={onBack}
					className={`flex items-center gap-2 ${themeClasses.text} hover:text-blue-400 transition-colors mb-8 group`}
				>
					<ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
					Back to Projects
				</button>

				{/* Hero Section: Banner + Info Side by Side */}
				<div className="relative mb-8">
					<div className="absolute inset-0 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl"></div>
					<div className="relative p-6 md:p-8">
						<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
							{/* Left: Banner */}
							{metadata.bannerImage && (
								<div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center">
									<img
										src={metadata.bannerImage}
										alt={`${metadata.title} banner`}
										className="w-full h-full object-contain max-h-[400px]"
										loading="eager"
									/>
								</div>
							)}

							{/* Right: Project Info */}
							<div className="flex flex-col justify-center">
								<div className="flex items-start gap-4 mb-4">
									{/* Icon */}
									<div className={`p-4 rounded-2xl bg-gradient-to-br ${metadata.gradient} flex-shrink-0`}>
										<metadata.icon className="w-12 h-12 text-white" />
									</div>

									{/* Title and subtitle */}
									<div className="flex-1">
										<h1 className={`text-3xl md:text-4xl font-bold ${themeClasses.text} mb-2`}>
											{metadata.title}
										</h1>
										<p className={`text-lg ${themeClasses.textSecondary}`}>
											{metadata.subtitle}
										</p>
									</div>
								</div>

								{/* Badges */}
								<div className="flex gap-3 mb-4 flex-wrap">
									<span
										className={`px-3 py-1 text-sm rounded-full ${
											metadata.status === "production"
												? "bg-green-500/20 text-green-400 border border-green-500/30"
												: metadata.status === "development"
													? "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"
													: "bg-blue-500/20 text-blue-400 border border-blue-500/30"
										}`}
									>
										{metadata.status}
									</span>
									<span className={`px-3 py-1 text-sm rounded-full bg-white/10 ${themeClasses.textSecondary}`}>
										{metadata.period}
									</span>
								</div>

								{/* Description */}
								<p className={`text-base leading-relaxed ${themeClasses.textSecondary} mb-6`}>
									{metadata.description}
								</p>

								{/* Links */}
								{metadata.links && metadata.links.length > 0 && (
									<div className="flex flex-wrap gap-3">
										{metadata.links.map((link, index) => {
											const IconComponent = getLinkIcon(link.type);
											return (
												<a
													key={index}
													href={link.url}
													target="_blank"
													rel="noopener noreferrer"
													className={`flex items-center gap-2 px-4 py-2 ${themeClasses.card} border rounded-xl hover:bg-white/10 transition-all duration-300 ${themeClasses.text}`}
												>
													<IconComponent className="w-4 h-4" />
													{link.label}
												</a>
											);
										})}
									</div>
								)}
							</div>
						</div>
					</div>
				</div>

				{/* Stats Section - Compact */}
				{metadata.stats && metadata.stats.length > 0 && (
					<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
						{metadata.stats.map((stat, index) => (
							<div
								key={index}
								className={`relative ${themeClasses.card} border rounded-2xl p-4 text-center`}
							>
								{stat.icon && (
									<stat.icon className={`w-6 h-6 mx-auto mb-2 text-blue-400`} />
								)}
								<div
									className={`text-2xl font-bold bg-gradient-to-r ${metadata.gradient} bg-clip-text text-transparent mb-1`}
								>
									{stat.value}
								</div>
								<div className={`text-xs ${themeClasses.textSecondary}`}>
									{stat.label}
								</div>
							</div>
						))}
					</div>
				)}

				{/* Multimedia Section: Video + Screenshots/Songs */}
				{(metadata.heroVideo || (metadata.screenshots && metadata.screenshots.length > 0) || (metadata.songs && metadata.songs.length > 0)) && (
					<div className="relative mb-8">
						<div className="absolute inset-0 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl"></div>
						<div className="relative p-6 md:p-8">
							<h2 className={`text-2xl font-bold ${themeClasses.text} mb-6`}>
								Media Gallery
							</h2>

							{/* Conditional grid layout: horizontal video with songs uses different layout */}
							<div className={`grid grid-cols-1 gap-8 ${
								metadata.songs && metadata.songs.length > 0
									? 'lg:grid-cols-[1fr_380px]' // Horizontal video + songs sidebar
									: 'lg:grid-cols-[420px_336px] justify-center' // Mobile video + screenshots
							}`}>
								{/* Video Player - Adaptive aspect ratio */}
								{metadata.heroVideo && (
									<div className={`relative w-full mx-auto lg:mx-0 ${
										metadata.songs && metadata.songs.length > 0
											? 'max-w-full' // Full width for horizontal video
											: 'max-w-[420px]' // 420px for vertical mobile video
									}`}>
										<div className={`relative rounded-xl overflow-hidden bg-black shadow-2xl w-full ${
											metadata.songs && metadata.songs.length > 0
												? 'aspect-video' // 16:9 for horizontal videos
												: 'aspect-[9/16]' // 9:16 for vertical mobile videos
										}`}>
											{showVideo ? (
												<video
													controls
													autoPlay
													className="w-full h-full object-cover"
												>
													<source src={metadata.heroVideo} type="video/mp4" />
												</video>
											) : (
												<div
													className="relative w-full h-full cursor-pointer group"
													onClick={() => setShowVideo(true)}
												>
													<img
														src={metadata.heroImage}
														alt="Video preview"
														className="w-full h-full object-cover"
													/>
													<div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-center justify-center">
														<div className="bg-white/20 backdrop-blur-sm rounded-full p-6 group-hover:scale-110 transition-transform">
															<Play className="w-16 h-16 text-white fill-white" />
														</div>
													</div>
												</div>
											)}
										</div>
										<p className={`text-sm ${themeClasses.textMuted} mt-2 text-center`}>
											{metadata.songs && metadata.songs.length > 0 ? 'Generation Demo Video' : 'App Demo Video'}
										</p>
									</div>
								)}

								{/* Screenshot Carousel - 336px for better space usage */}
								{metadata.screenshots && metadata.screenshots.length > 0 && (
									<div className="relative w-full max-w-[336px] mx-auto lg:mx-0">
										{/* Main Image Display */}
										<div className="relative rounded-xl overflow-hidden bg-black shadow-2xl w-full aspect-[9/16]">
											<img
												src={currentScreenshot?.src}
												alt={currentScreenshot?.alt}
												className="w-full h-full object-contain bg-gray-900"
											/>

											{/* Navigation Arrows */}
											{metadata.screenshots.length > 1 && (
												<>
													<button
														onClick={prevImage}
														className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-black/60 hover:bg-black/80 rounded-full transition-all duration-300 backdrop-blur-sm border border-white/10 z-10"
													>
														<ChevronLeft className="w-5 h-5 text-white" />
													</button>
													<button
														onClick={nextImage}
														className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-black/60 hover:bg-black/80 rounded-full transition-all duration-300 backdrop-blur-sm border border-white/10 z-10"
													>
														<ChevronRight className="w-5 h-5 text-white" />
													</button>

													{/* Image counter */}
													<div className="absolute bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-black/70 backdrop-blur-sm rounded-full text-white text-sm font-medium border border-white/10 z-10">
														{currentImageIndex + 1} / {metadata.screenshots.length}
													</div>
												</>
											)}
										</div>

										{/* Caption */}
										<div className="h-12 flex items-center justify-center px-2 mt-2">
											{currentScreenshot?.caption && (
												<p className={`text-sm ${themeClasses.textSecondary} text-center line-clamp-2`}>
													{currentScreenshot.caption}
												</p>
											)}
										</div>

										{/* Thumbnail Navigation */}
										{metadata.screenshots.length > 1 && (
											<div className="h-24 flex items-center justify-center">
												<div className="flex gap-2 overflow-x-auto pb-1 px-2 scrollbar-hide">
													{metadata.screenshots.map((screenshot, index) => (
														<button
															key={index}
															onClick={() => setCurrentImageIndex(index)}
															className="relative flex-shrink-0 w-[52px] h-[84px]"
														>
															<div
																className={`absolute inset-0 rounded-lg overflow-hidden border-2 transition-colors duration-200 ${
																	index === currentImageIndex
																		? "border-blue-500 shadow-lg shadow-blue-500/30"
																		: "border-white/20 hover:border-white/40 opacity-50 hover:opacity-100"
																}`}
															>
																<img
																	src={screenshot.src}
																	alt={`Thumbnail ${index + 1}`}
																	className="w-full h-full object-cover"
																/>
															</div>
															{index === currentImageIndex && (
																<div className="absolute -inset-0.5 rounded-lg border-2 border-blue-400 pointer-events-none animate-pulse" />
															)}
														</button>
													))}
												</div>
											</div>
										)}
									</div>
								)}

								{/* Audio Player for Songs - 380px sidebar */}
								{metadata.songs && metadata.songs.length > 0 && (() => {
									const currentSong = metadata.songs[currentSongIndex];
									if (!currentSong) return null;
									return (
										<div className="relative w-full max-w-[380px] mx-auto lg:mx-0">
											<div className={`${themeClasses.card} border rounded-2xl overflow-hidden shadow-2xl`}>
												{/* Current Song Display */}
												<div className="p-6 bg-gradient-to-br from-purple-600/20 to-blue-600/20">
													<div className="flex items-center gap-3 mb-4">
														<div className="p-3 rounded-xl bg-gradient-to-br from-purple-600 to-blue-600">
															<Music className="w-6 h-6 text-white" />
														</div>
														<div className="flex-1 min-w-0">
															<h3 className={`text-lg font-bold ${themeClasses.text} truncate`}>
																{currentSong.title}
															</h3>
															{currentSong.artist && (
																<p className={`text-sm ${themeClasses.textMuted} truncate`}>
																	{currentSong.artist}
																</p>
															)}
														</div>
													</div>

													{/* Audio Player */}
													<audio
														key={currentSongIndex}
														controls
														className="w-full"
														style={{
															height: '40px',
															borderRadius: '8px',
														}}
													>
														<source src={currentSong.src} type="audio/mpeg" />
														Your browser does not support the audio element.
													</audio>
												</div>

											{/* Song List */}
											<div className="p-4 space-y-2 max-h-[400px] overflow-y-auto">
												{metadata.songs.map((song, index) => (
													<button
														key={index}
														onClick={() => setCurrentSongIndex(index)}
														className={`w-full text-left p-3 rounded-xl transition-all duration-200 ${
															index === currentSongIndex
																? `bg-gradient-to-r ${metadata.gradient} text-white shadow-lg`
																: `${themeClasses.card} border hover:bg-white/10`
														}`}
													>
														<div className="flex items-center gap-3">
															<div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
																index === currentSongIndex
																	? 'bg-white/20'
																	: 'bg-gradient-to-br from-purple-600/20 to-blue-600/20'
															}`}>
																<Music className="w-4 h-4" />
															</div>
															<div className="flex-1 min-w-0">
																<p className="font-medium truncate">
																	{song.title}
																</p>
																{song.artist && (
																	<p className={`text-xs truncate ${
																		index === currentSongIndex
																			? 'text-white/80'
																			: themeClasses.textMuted
																	}`}>
																		{song.artist}
																	</p>
																)}
															</div>
														</div>
													</button>
												))}
											</div>
										</div>

											<p className={`text-sm ${themeClasses.textMuted} mt-2 text-center`}>
												Generated Songs ({metadata.songs.length})
											</p>
										</div>
									);
								})()}
							</div>
						</div>
					</div>
				)}

				{/* Overview: Challenge, Solution, Result - Compact Grid */}
				{(metadata.challenge || metadata.solution || metadata.result) && (
					<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
						{metadata.challenge && (
							<div className={`${themeClasses.card} border rounded-2xl p-5`}>
								<h3 className={`text-lg font-bold ${themeClasses.text} mb-2`}>
									Challenge
								</h3>
								<p className={`text-sm ${themeClasses.textSecondary}`}>{metadata.challenge}</p>
							</div>
						)}

						{metadata.solution && (
							<div className={`${themeClasses.card} border rounded-2xl p-5`}>
								<h3 className={`text-lg font-bold ${themeClasses.text} mb-2`}>
									Solution
								</h3>
								<ul className="space-y-1.5">
									{metadata.solution.map((item, index) => (
										<li
											key={index}
											className={`flex items-start gap-2 text-sm ${themeClasses.textSecondary}`}
										>
											<span className="w-1 h-1 bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
											{item}
										</li>
									))}
								</ul>
							</div>
						)}

						{metadata.result && (
							<div className={`${themeClasses.card} border rounded-2xl p-5`}>
								<h3 className={`text-lg font-bold ${themeClasses.text} mb-2`}>
									Result
								</h3>
								<p className={`text-sm ${themeClasses.textSecondary}`}>{metadata.result}</p>
							</div>
						)}
					</div>
				)}

				{/* Technical Highlights - Compact */}
				{metadata.highlights && metadata.highlights.length > 0 && (
					<div className="relative mb-8">
						<div className="absolute inset-0 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl"></div>
						<div className="relative p-6 md:p-8">
							<h2 className={`text-2xl font-bold ${themeClasses.text} mb-6`}>
								Technical Highlights
							</h2>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
								{metadata.highlights.map((highlight, index) => (
									<div
										key={index}
										className={`${themeClasses.card} border rounded-2xl p-5`}
									>
										<h3 className={`text-lg font-semibold ${themeClasses.text} mb-2`}>
											{highlight.title}
										</h3>
										<p className={`text-sm ${themeClasses.textSecondary} mb-3`}>
											{highlight.description}
										</p>
										{highlight.code && (
											<pre className="bg-black/30 rounded-xl p-3 overflow-x-auto text-xs">
												<code className="text-blue-300">{highlight.code}</code>
											</pre>
										)}
									</div>
								))}
							</div>
						</div>
					</div>
				)}

				{/* Tech Stack - Compact */}
				<div className={`${themeClasses.card} border rounded-2xl p-6 md:p-8`}>
					<h2 className={`text-2xl font-bold ${themeClasses.text} mb-4`}>
						Tech Stack
					</h2>
					<div className="flex flex-wrap gap-2">
						{metadata.techStack.map((tech, index) => (
							<span
								key={index}
								className={`px-3 py-1.5 bg-gradient-to-r ${metadata.gradient} text-white rounded-lg font-medium text-sm`}
							>
								{tech}
							</span>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProjectDetail;
