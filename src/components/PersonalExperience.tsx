import type React from "react";
import {
	Gamepad2,
	Printer,
	Cpu,
	Trophy,
	ExternalLink,
	Calendar,
	Zap,
	Wrench,
} from "lucide-react";

const personalExperienceData = [
	{
		title: "Game Development - Global Game Jam",
		subtitle: "Unity 2D Developer",
		period: "Jan- 2022",
		description:
			"Developed a game in 48 hours for the Global Game Jam, using C# and Unity 2D.",
		technologies: "C#, Unity 2D, Git",
		tasks: [
			"Developed a game in 48 hours for the Global Game Jam, using C# and Unity 2D.",
			"Implemented part of the graphical interface, learned Unity libraries, and collaborated in a Git repository with teammates.",
		],
		icon: Gamepad2,
		category: "Development",
		achievement: "Global Game Jam Participant",
		link: "Global Game Jam - Alasine Game",
	},
	{
		title: "Building a 3D Printer",
		subtitle: "Electronic Technician Internship",
		period: "2018 - 2019",
		description:
			"Built a 3D printer from scratch, programming motors and configuring extruders.",
		technologies: "Motor programming and calibration, Cura, Arduino",
		tasks: [
			"Built a 3D printer from scratch, programming motors and configuring extruders.",
			"Calibrated the printer and used Cura software for 3D printing.",
			"Overcame logistical and technical challenges to complete a fully functional project.",
		],
		icon: Printer,
		category: "Hardware",
		achievement: "Fully Functional 3D Printer",
		link: "3D Printer Photos",
	},
	{
		title: "Hackathon Participation - Smart City Dashboard",
		subtitle: "School Competition",
		period: "Nov. 2018 - Dec. 2018",
		description:
			"Participated in a school hackathon to develop a 'Smart City' dashboard.",
		technologies: "Arduino, UI/UX, Monitoring Dashboard",
		tasks: [
			'Participated in a school hackathon to develop a "Smart City" dashboard.',
			"Configured a dashboard for real-time monitoring of city services using Arduino.",
			"Developed an intuitive interface for controlling traffic lights, water pumps, and vehicle tracking.",
			"Collaborated with multiple teams and achieved a podium finish in the event.",
		],
		icon: Cpu,
		category: "IoT",
		achievement: "Podium Finish",
		link: null,
	},
];

const PersonalExperience: React.FC = () => {
	return (
		<section
			id="personal-experience"
			className="relative py-20 overflow-hidden"
		>
			{/* Background */}
			<div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
				<div className="absolute inset-0">
					<div className="absolute top-20 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
					<div className="absolute top-40 right-20 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
					<div className="absolute bottom-20 left-1/3 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000"></div>
				</div>
			</div>

			<div className="relative z-10 container mx-auto px-6">
				<div className="text-center mb-16 animate-fade-in">
					<h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-indigo-200 to-cyan-200 bg-clip-text text-transparent mb-4">
						Personal Projects
					</h2>
					<div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 mx-auto rounded-full"></div>
					<p className="text-xl text-white/70 mt-6 max-w-2xl mx-auto">
						Passion projects and hackathons that showcase creativity,
						problem-solving, and technical skills
					</p>
				</div>

				<div className="max-w-6xl mx-auto">
					<div className="space-y-16">
						{personalExperienceData.map((project, index) => {
							const IconComponent = project.icon;
							const isEven = index % 2 === 0;

							return (
								<div
									key={index}
									className={`animate-slide-up animation-delay-${index * 200}`}
								>
									<div
										className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-12`}
									>
										{/* Content */}
										<div className="flex-1">
											<div className="group relative">
												{/* Category Badge */}
												<div className="flex items-center gap-4 mb-4">
													<div
														className={`px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider ${
															project.category === "Development"
																? "bg-green-500/20 text-green-300 border border-green-500/30"
																: project.category === "Hardware"
																	? "bg-orange-500/20 text-orange-300 border border-orange-500/30"
																	: "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30"
														}`}
													>
														{project.category}
													</div>
													<div className="flex items-center gap-2 text-white/60">
														<Calendar className="w-4 h-4" />
														<span>{project.period}</span>
													</div>
												</div>

												{/* Title */}
												<h3 className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-indigo-200 transition-colors">
													{project.title}
												</h3>
												<p className="text-xl text-transparent bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text font-semibold mb-6">
													{project.subtitle}
												</p>

												{/* Description */}
												<p className="text-lg text-white/80 mb-6 leading-relaxed">
													{project.description}
												</p>

												{/* Achievement */}
												<div className="flex items-center gap-3 mb-6">
													<Trophy className="w-5 h-5 text-yellow-400" />
													<span className="text-yellow-300 font-semibold">
														{project.achievement}
													</span>
												</div>

												{/* Tasks */}
												<div className="mb-6">
													<h4 className="text-lg font-semibold text-white mb-3">
														Key Achievements:
													</h4>
													<ul className="space-y-2">
														{project.tasks.map((task, taskIndex) => (
															<li
																key={taskIndex}
																className="flex items-start gap-3 text-white/90"
															>
																<div className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full mt-2 flex-shrink-0"></div>
																<span className="leading-relaxed">{task}</span>
															</li>
														))}
													</ul>
												</div>

												{/* Technologies */}
												<div className="mb-6">
													<div className="flex items-center gap-2 mb-3">
														<Wrench className="w-5 h-5 text-indigo-400" />
														<span className="text-indigo-300 font-semibold">
															Technologies:
														</span>
													</div>
													<p className="text-white/70">
														{project.technologies}
													</p>
												</div>

												{/* Link */}
												{project.link && (
													<div className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer">
														<ExternalLink className="w-4 h-4" />
														<span className="font-medium">{project.link}</span>
													</div>
												)}
											</div>
										</div>

										{/* Visual Element */}
										<div className="flex-shrink-0">
											<div className="group relative">
												{/* Main Icon Container */}
												<div className="relative">
													<div
														className={`w-48 h-48 rounded-3xl ${
															project.category === "Development"
																? "bg-gradient-to-br from-green-500 to-emerald-600"
																: project.category === "Hardware"
																	? "bg-gradient-to-br from-orange-500 to-red-600"
																	: "bg-gradient-to-br from-cyan-500 to-blue-600"
														} flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl border border-white/20`}
													>
														<IconComponent className="w-24 h-24 text-white" />
													</div>

													{/* Floating Elements */}
													<div
														className={`absolute -top-4 -right-4 w-12 h-12 ${
															project.category === "Development"
																? "bg-green-400"
																: project.category === "Hardware"
																	? "bg-orange-400"
																	: "bg-cyan-400"
														} rounded-full flex items-center justify-center transform group-hover:scale-125 transition-transform duration-300 animate-bounce`}
													>
														{project.category === "Development" ? (
															<Zap className="w-6 h-6 text-white" />
														) : project.category === "Hardware" ? (
															<Wrench className="w-6 h-6 text-white" />
														) : (
															<Trophy className="w-6 h-6 text-white" />
														)}
													</div>

													{/* Glow Effect */}
													<div
														className={`absolute inset-0 ${
															project.category === "Development"
																? "bg-green-500"
																: project.category === "Hardware"
																	? "bg-orange-500"
																	: "bg-cyan-500"
														} rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500`}
													></div>
												</div>
											</div>
										</div>
									</div>
								</div>
							);
						})}
					</div>

					{/* Summary Stats */}
					<div className="mt-20 text-center animate-fade-in animation-delay-800">
						<div className="backdrop-blur-sm bg-white/5 rounded-3xl border border-white/10 p-8 shadow-2xl max-w-3xl mx-auto">
							<h3 className="text-3xl font-bold bg-gradient-to-r from-white to-indigo-200 bg-clip-text text-transparent mb-8">
								Project Highlights
							</h3>
							<div className="grid grid-cols-3 gap-8">
								<div className="text-center">
									<div className="text-4xl font-bold text-green-400 mb-2">
										48h
									</div>
									<div className="text-white/70">Game Development</div>
								</div>
								<div className="text-center">
									<div className="text-4xl font-bold text-orange-400 mb-2">
										1
									</div>
									<div className="text-white/70">3D Printer Built</div>
								</div>
								<div className="text-center">
									<div className="text-4xl font-bold text-cyan-400 mb-2">
										🏆
									</div>
									<div className="text-white/70">Podium Finish</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default PersonalExperience;
