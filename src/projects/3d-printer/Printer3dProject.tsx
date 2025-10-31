import type React from "react";
import { useState } from "react";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import {
	printer3dMetadata,
	verticalPhotos,
	horizontalPhotos,
} from "./metadata";

interface Printer3dProjectProps {
	onBack: () => void;
}

const Printer3dProject: React.FC<Printer3dProjectProps> = ({ onBack }) => {
	const [verticalIndex, setVerticalIndex] = useState(0);
	const [horizontalIndex, setHorizontalIndex] = useState(0);

	const metadata = printer3dMetadata;
	const Icon = metadata.icon;

	// Navigation functions for vertical carousel
	const nextVertical = () => {
		setVerticalIndex((prev) =>
			prev === verticalPhotos.length - 1 ? 0 : prev + 1,
		);
	};

	const prevVertical = () => {
		setVerticalIndex((prev) =>
			prev === 0 ? verticalPhotos.length - 1 : prev - 1,
		);
	};

	// Navigation functions for horizontal carousel
	const nextHorizontal = () => {
		setHorizontalIndex((prev) =>
			prev === horizontalPhotos.length - 1 ? 0 : prev + 1,
		);
	};

	const prevHorizontal = () => {
		setHorizontalIndex((prev) =>
			prev === 0 ? horizontalPhotos.length - 1 : prev - 1,
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
				<div className="flex items-center gap-4 mb-6">
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

			{/* Dual Carousel Section */}
			<div className="container mx-auto px-6 pb-12">
				<h2 className="text-3xl font-bold mb-8">Project Gallery</h2>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
					{/* Vertical Photos Carousel - Left */}
					<div className="space-y-4">
						<h3 className="text-xl font-semibold text-white/90">
							Vertical Photos
						</h3>
						<div className="relative group">
							{/* Main Image */}
							<div className="relative h-[550px] rounded-2xl overflow-hidden bg-white/5 border border-white/10">
								{verticalPhotos[verticalIndex] && (
									<img
										src={verticalPhotos[verticalIndex].src}
										alt={verticalPhotos[verticalIndex].alt}
										className="w-full h-full object-cover"
									/>
								)}

								{/* Navigation Buttons */}
								<button
									onClick={prevVertical}
									className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 backdrop-blur-sm rounded-full border border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-300"
									type="button"
									aria-label="Previous vertical photo"
								>
									<ChevronLeft className="w-6 h-6" />
								</button>
								<button
									onClick={nextVertical}
									className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 backdrop-blur-sm rounded-full border border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-300"
									type="button"
									aria-label="Next vertical photo"
								>
									<ChevronRight className="w-6 h-6" />
								</button>

								{/* Counter Badge */}
								<div className="absolute top-4 right-4 px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-sm">
									{verticalIndex + 1} / {verticalPhotos.length}
								</div>
							</div>

							{/* Caption */}
							{verticalPhotos[verticalIndex] && (
								<p className="text-center text-white/70 mt-2">
									{verticalPhotos[verticalIndex].caption}
								</p>
							)}

							{/* Thumbnail Navigation */}
							<div className="grid grid-cols-7 gap-2 mt-4">
								{verticalPhotos.map((photo, index) => (
									<button
										key={index}
										onClick={() => setVerticalIndex(index)}
										className={`aspect-[9/16] rounded-lg overflow-hidden border-2 transition-all duration-300 ${
											index === verticalIndex
												? "border-white scale-105"
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

					{/* Horizontal Photos Carousel - Right */}
					<div className="space-y-4">
						<h3 className="text-xl font-semibold text-white/90">
							Horizontal Photos
						</h3>
						<div className="relative group">
							{/* Main Image */}
							<div className="relative h-[550px] rounded-2xl overflow-hidden bg-white/5 border border-white/10">
								{horizontalPhotos[horizontalIndex] && (
									<img
										src={horizontalPhotos[horizontalIndex].src}
										alt={horizontalPhotos[horizontalIndex].alt}
										className="w-full h-full object-cover"
									/>
								)}

								{/* Navigation Buttons */}
								<button
									onClick={prevHorizontal}
									className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 backdrop-blur-sm rounded-full border border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-300"
									type="button"
									aria-label="Previous horizontal photo"
								>
									<ChevronLeft className="w-6 h-6" />
								</button>
								<button
									onClick={nextHorizontal}
									className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 backdrop-blur-sm rounded-full border border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-300"
									type="button"
									aria-label="Next horizontal photo"
								>
									<ChevronRight className="w-6 h-6" />
								</button>

								{/* Counter Badge */}
								<div className="absolute top-4 right-4 px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-sm">
									{horizontalIndex + 1} / {horizontalPhotos.length}
								</div>
							</div>

							{/* Caption */}
							{horizontalPhotos[horizontalIndex] && (
								<p className="text-center text-white/70 mt-2">
									{horizontalPhotos[horizontalIndex].caption}
								</p>
							)}

							{/* Thumbnail Navigation */}
							<div className="grid grid-cols-7 gap-2 mt-4">
								{horizontalPhotos.map((photo, index) => (
									<button
										key={index}
										onClick={() => setHorizontalIndex(index)}
										className={`aspect-[16/9] rounded-lg overflow-hidden border-2 transition-all duration-300 ${
											index === horizontalIndex
												? "border-white scale-105"
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
				</div>
			</div>

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
				<div className="container mx-auto px-6 pb-24">
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
		</div>
	);
};

export default Printer3dProject;
