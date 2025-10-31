import type React from "react";
import { useState } from "react";
import { ArrowLeft, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { smartCityMetadata } from "./metadata";

interface SmartCityProjectProps {
	onBack: () => void;
}

const SmartCityProject: React.FC<SmartCityProjectProps> = ({ onBack }) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const metadata = smartCityMetadata;
	const Icon = metadata.icon;
	const screenshots = metadata.screenshots || [];

	// Navigation functions
	const nextImage = () => {
		setCurrentIndex((prev) =>
			prev === screenshots.length - 1 ? 0 : prev + 1,
		);
	};

	const prevImage = () => {
		setCurrentIndex((prev) =>
			prev === 0 ? screenshots.length - 1 : prev - 1,
		);
	};

	return (
		<div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
			{/* Back Button */}
			<div className="container mx-auto px-6 pt-8">
				<button
					onClick={onBack}
					className="flex items-center gap-2 text-white hover:text-blue-400 transition-colors mb-8 group"
					type="button"
				>
					<ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
					Back to Projects
				</button>
			</div>

			{/* Header Section */}
			<div className="container mx-auto px-6 pb-12">
				<div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-6">
					<div
						className={`p-4 rounded-2xl bg-gradient-to-br ${metadata.gradient}`}
					>
						<Icon className="w-8 h-8" />
					</div>
					<div className="flex-1">
						<h1 className="text-4xl md:text-5xl font-bold mb-2">
							{metadata.title}
						</h1>
						<p className="text-xl text-white/70">{metadata.subtitle}</p>
					</div>
					<div className="hidden md:block">
						<span
							className={`px-4 py-2 rounded-full text-sm font-medium ${
								metadata.status === "completed"
									? "bg-blue-500/20 text-blue-400 border border-blue-500/30"
									: ""
							}`}
						>
							{metadata.status.charAt(0).toUpperCase() +
								metadata.status.slice(1)}
						</span>
					</div>
				</div>

				<p className="text-base text-white/80 max-w-4xl">
					{metadata.description}
				</p>
			</div>

			{/* Event Photos Carousel - Optimized for Horizontal Images */}
			{screenshots.length > 0 && (
				<div className="container mx-auto px-6 pb-12">
					<h2 className="text-2xl font-bold mb-6">Event Photos</h2>

					<div className="relative group max-w-4xl mx-auto">
						{/* Main Image - Optimized size for horizontal photos */}
						<div className="relative aspect-[16/9] max-h-[450px] rounded-2xl overflow-hidden bg-white/5 border border-white/10">
							{screenshots[currentIndex] && (
								<img
									src={screenshots[currentIndex].src}
									alt={screenshots[currentIndex].alt}
									className="w-full h-full object-contain"
								/>
							)}

							{/* Navigation Buttons */}
							<button
								onClick={prevImage}
								className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-black/70 backdrop-blur-sm rounded-full border border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-300"
								type="button"
								aria-label="Previous photo"
							>
								<ChevronLeft className="w-6 h-6" />
							</button>
							<button
								onClick={nextImage}
								className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-black/70 backdrop-blur-sm rounded-full border border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-300"
								type="button"
								aria-label="Next photo"
							>
								<ChevronRight className="w-6 h-6" />
							</button>

							{/* Counter Badge */}
							<div className="absolute top-4 right-4 px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-sm">
								{currentIndex + 1} / {screenshots.length}
							</div>
						</div>

						{/* Caption */}
						{screenshots[currentIndex] && (
							<p className="text-center text-white/70 mt-3 text-base">
								{screenshots[currentIndex].caption}
							</p>
						)}

						{/* Thumbnail Navigation */}
						<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
							{screenshots.map((photo, index) => (
								<button
									key={index}
									onClick={() => setCurrentIndex(index)}
									className={`aspect-[16/9] rounded-xl overflow-hidden border-2 transition-all duration-300 ${
										index === currentIndex
											? "border-cyan-400 scale-105 shadow-lg shadow-cyan-500/50"
											: "border-white/20 hover:border-white/50"
									}`}
									type="button"
								>
									<img
										src={photo.src}
										alt={photo.alt}
										className="w-full h-full object-cover"
									/>
								</button>
							))}
						</div>
					</div>
				</div>
			)}

			{/* Overview Section */}
			{(metadata.challenge || metadata.solution || metadata.result) && (
				<div className="container mx-auto px-6 pb-12">
					<h2 className="text-3xl font-bold mb-8">Overview</h2>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
						{metadata.challenge && (
							<div className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10">
								<h3 className="text-xl font-bold mb-3 text-yellow-400">
									Challenge
								</h3>
								<p className="text-white/80">{metadata.challenge}</p>
							</div>
						)}
						{metadata.solution && (
							<div className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10">
								<h3 className="text-xl font-bold mb-3 text-blue-400">
									Solution
								</h3>
								<ul className="space-y-2">
									{metadata.solution.map((item, index) => (
										<li key={index} className="text-white/80">
											• {item}
										</li>
									))}
								</ul>
							</div>
						)}
						{metadata.result && (
							<div className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10">
								<h3 className="text-xl font-bold mb-3 text-green-400">
									Result
								</h3>
								<p className="text-white/80">{metadata.result}</p>
							</div>
						)}
					</div>
				</div>
			)}

			{/* Technical Highlights */}
			{metadata.highlights && metadata.highlights.length > 0 && (
				<div className="container mx-auto px-6 pb-12">
					<h2 className="text-3xl font-bold mb-8">Technical Highlights</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						{metadata.highlights.map((highlight, index) => (
							<div
								key={index}
								className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10"
							>
								<h3
									className={`text-xl font-bold mb-3 bg-gradient-to-r ${metadata.gradient} bg-clip-text text-transparent`}
								>
									{highlight.title}
								</h3>
								<p className="text-white/80 mb-4">{highlight.description}</p>
							</div>
						))}
					</div>
				</div>
			)}

			{/* Tech Stack */}
			{metadata.techStack && (
				<div className="container mx-auto px-6 pb-12">
					<h2 className="text-3xl font-bold mb-8">Tech Stack</h2>
					<div className="flex flex-wrap gap-3">
						{metadata.techStack.map((tech, index) => (
							<span
								key={index}
								className={`px-4 py-2 rounded-xl bg-gradient-to-r ${metadata.gradient} bg-opacity-20 border border-white/10 text-white font-medium`}
							>
								{tech}
							</span>
						))}
					</div>
				</div>
			)}

			{/* Links */}
			{metadata.links && metadata.links.length > 0 && (
				<div className="container mx-auto px-6 pb-24">
					<h2 className="text-3xl font-bold mb-8">Links</h2>
					<div className="flex flex-wrap gap-4">
						{metadata.links.map((link, index) => (
							<a
								key={index}
								href={link.url}
								target="_blank"
								rel="noopener noreferrer"
								className="group flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 backdrop-blur-xl rounded-xl border border-white/10 transition-all duration-300 hover:scale-105"
							>
								<span className="font-medium">{link.label}</span>
								<ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
							</a>
						))}
					</div>
				</div>
			)}
		</div>
	);
};

export default SmartCityProject;
