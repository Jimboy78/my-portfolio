import type React from "react";
import { Github, Linkedin, X, Mail, Phone, MapPin, Download } from "lucide-react";

const Profile: React.FC = () => {
	const handleDownloadCV = () => {
		const link = document.createElement("a");
		link.href = "/resume.pdf";
		link.download = "Sebastian_Martini_Resume.pdf";
		document.body.append(link);
		link.click();
		link.remove();
	};

	return (
		<div className="relative min-h-screen overflow-hidden">
			{/* Animated Background */}
			<div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
				<div className="absolute inset-0">
					<div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
					<div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
					<div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
				</div>
			</div>

			{/* Main Content */}
			<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
				{/* Header Section */}
				<div className="text-center mb-16 transform animate-fade-in-down">
					<div className="relative inline-block mb-8">
						<img
							src="/perfil-photo.jpeg"
							alt="Sebastian Martini"
							className="w-40 h-40 rounded-full mx-auto border-4 border-white/20 shadow-2xl transform hover:scale-110 transition-all duration-300 animate-float"
						/>
						<div className="absolute -bottom-2 -right-2 w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center animate-pulse">
							<div className="w-6 h-6 bg-white rounded-full"></div>
						</div>
					</div>

					<h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent mb-4 animate-glow">
						Sebastian Martini
					</h1>
					<div className="text-2xl md:text-3xl text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text font-semibold mb-6 animate-typewriter">
						Full-Stack Developer
					</div>

					{/* Contact Info */}
					<div className="flex flex-wrap justify-center gap-6 mb-8 text-white/80">
						<div className="flex items-center gap-2 transform hover:scale-105 transition-transform">
							<MapPin className="w-5 h-5 text-purple-400" />
							<span>Argentina</span>
						</div>
						<div className="flex items-center gap-2 transform hover:scale-105 transition-transform">
							<Phone className="w-5 h-5 text-blue-400" />
							<span>+54 9 3402 541610</span>
						</div>
						<div className="flex items-center gap-2 transform hover:scale-105 transition-transform">
							<Mail className="w-5 h-5 text-green-400" />
							<span>martiniseba78@gmail.com</span>
						</div>
					</div>

					{/* Action Buttons */}
					<div className="flex flex-wrap justify-center gap-4 mb-8">
						<button
							onClick={handleDownloadCV}
							className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-white font-semibold shadow-lg transform hover:scale-105 transition-all duration-300 hover:shadow-purple-500/25 hover:shadow-2xl animate-bounce-slow"
						>
							<Download className="w-5 h-5 inline mr-2 group-hover:animate-bounce" />
							Download Resume
							<div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity"></div>
						</button>

						<div className="flex gap-4">
							<a
								href="https://github.com/Jimboy78"
								target="_blank"
								rel="noopener noreferrer"
								className="p-4 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-all duration-300 hover:scale-110 hover:rotate-12 border border-white/20"
							>
								<Github className="w-6 h-6" />
							</a>
							<a
								href="https://www.linkedin.com/in/sebastian-martini/"
								target="_blank"
								rel="noopener noreferrer"
								className="p-4 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-all duration-300 hover:scale-110 hover:rotate-12 border border-white/20"
							>
								<Linkedin className="w-6 h-6" />
							</a>
							<a
								href="https://x.com/Jimboy_002"
								target="_blank"
								rel="noopener noreferrer"
								className="p-4 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-all duration-300 hover:scale-110 hover:rotate-12 border border-white/20"
							>
								<X className="w-6 h-6" />
							</a>
						</div>
					</div>
				</div>

				{/* Profile Summary */}
				<div className="max-w-4xl mx-auto">
					<div className="backdrop-blur-sm bg-white/5 rounded-3xl border border-white/10 p-8 md:p-12 shadow-2xl transform hover:scale-[1.02] transition-all duration-500 animate-slide-up">
						<h2 className="text-4xl font-bold text-center bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent mb-8">
							Profile
						</h2>
						<div className="prose prose-lg max-w-none text-white/90 leading-relaxed">
							<p className="text-xl mb-6 animate-fade-in">
								Full-Stack Developer with <span className="text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text font-semibold">2+ years</span> building end-to-end products. Currently leading a Next.js/Node/Prisma/MySQL ERP and two IPTV apps: Mobile (Expo/React Native iOS/Android) and TV (Android TV/tvOS + Web), with CI/CD (Drone CI + Gitea → Portainer) and Docker.
							</p>
							<p className="text-lg mb-6 animate-fade-in animation-delay-200">
								Focused on <span className="text-yellow-400 font-semibold">performance</span>, <span className="text-blue-400 font-semibold">developer experience</span>, and <span className="text-green-400 font-semibold">best practices</span> (i18n, caching, observability). I thrive on measurable impact and full ownership.
							</p>
							<div className="grid md:grid-cols-2 gap-8 mt-8">
								<div className="space-y-4 animate-fade-in animation-delay-300">
									<h3 className="text-2xl font-semibold text-purple-300 mb-4">Current Focus</h3>
									<div className="space-y-3">
										<div className="flex items-center gap-3">
											<div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
											<span>ERP Architecture & Delivery</span>
										</div>
										<div className="flex items-center gap-3">
											<div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse animation-delay-100"></div>
											<span>IPTV Mobile & TV Applications</span>
										</div>
										<div className="flex items-center gap-3">
											<div className="w-2 h-2 bg-green-500 rounded-full animate-pulse animation-delay-200"></div>
											<span>CI/CD & DevOps Automation</span>
										</div>
									</div>
								</div>
								<div className="space-y-4 animate-fade-in animation-delay-400">
									<h3 className="text-2xl font-semibold text-blue-300 mb-4">Languages</h3>
									<div className="space-y-3">
										<div className="flex justify-between items-center">
											<span>Spanish</span>
											<span className="text-green-400 font-semibold">Native</span>
										</div>
										<div className="flex justify-between items-center">
											<span>English</span>
											<span className="text-blue-400 font-semibold">Proficient</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Profile;
