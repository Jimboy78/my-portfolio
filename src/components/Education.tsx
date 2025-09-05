import type React from "react";
import { GraduationCap, BookOpen, Calendar, Award, Star } from "lucide-react";

const educationData = [
	{
		degree: "Analista Univ. en Sistemas",
		institution: "Instituto Politécnico Superior, Rosario",
		year: "2021–2023",
		type: "university",
		status: "completed",
		description: "University Systems Analyst degree with focus on software development, database design, and system architecture.",
		icon: GraduationCap
	},
	{
		degree: "SQL — Functions, Stored Procedures, Triggers, Workshop DCL/TCL",
		institution: "Coderhouse",
		year: "Ago 2023 – Nov 2023",
		type: "certification",
		status: "completed",
		description: "Advanced SQL course covering database functions, stored procedures, triggers, and data control/transaction control languages.",
		icon: BookOpen
	},
	{
		degree: "React Native — Redux, Login & auth, SQLite",
		institution: "Coderhouse",
		year: "Abr 2023 – Jun 2023",
		type: "certification",
		status: "completed",
		description: "Mobile app development with React Native, including state management with Redux, authentication systems, and local database integration.",
		icon: BookOpen
	},
	{
		degree: "React JS — JSX, Routing/Navigation, Eventos, Consumo de APIs, Firebase",
		institution: "Coderhouse",
		year: "Ene 2023 – Mar 2023",
		type: "certification",
		status: "completed",
		description: "React.js fundamentals including JSX transpiling, routing, navigation, event handling, API consumption, and Firebase integration.",
		icon: BookOpen
	},
	{
		degree: "JavaScript — Storage/JSON, Librerías, AJAX/Fetch, Node.js",
		institution: "Coderhouse",
		year: "Sep 2022 – Nov 2022",
		type: "certification",
		status: "completed",
		description: "JavaScript fundamentals and advanced concepts including data storage, JSON handling, libraries, asynchronous programming, and Node.js.",
		icon: BookOpen
	},
	{
		degree: "Python — Django, POO, Git/GitHub",
		institution: "Coderhouse",
		year: "Dic 2021 – Mar 2022",
		type: "certification",
		status: "completed",
		description: "Python programming with Django framework, object-oriented programming principles, and version control with Git/GitHub.",
		icon: BookOpen
	}
];

const Education: React.FC = () => {
	return (
		<section id="education" className="relative py-20 overflow-hidden">
			{/* Background */}
			<div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
				<div className="absolute inset-0">
					<div className="absolute top-10 left-10 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
					<div className="absolute top-10 right-10 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
					<div className="absolute bottom-10 left-1/2 w-64 h-64 bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000"></div>
				</div>
			</div>

			<div className="relative z-10 container mx-auto px-6">
				<div className="text-center mb-16 animate-fade-in">
					<h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent mb-4">
						Education
					</h2>
					<div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
					<p className="text-xl text-white/70 mt-6 max-w-2xl mx-auto">
						Continuous learning journey through formal education and professional certifications
					</p>
				</div>

				<div className="max-w-6xl mx-auto">
					<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
						{educationData.map((edu, index) => {
							const IconComponent = edu.icon;
							
							return (
								<div 
									key={index}
									className={`group animate-slide-up animation-delay-${index * 100}`}
								>
									<div className="relative h-full">
										{/* Card */}
										<div className="backdrop-blur-sm bg-white/5 rounded-3xl border border-white/10 p-8 shadow-2xl transform hover:scale-105 transition-all duration-500 hover:shadow-blue-500/20 h-full flex flex-col">
											{/* Icon and Type Badge */}
											<div className="flex items-start justify-between mb-6">
												<div className={`p-4 rounded-2xl ${
													edu.type === 'university' 
														? 'bg-gradient-to-r from-yellow-500 to-orange-500' 
														: 'bg-gradient-to-r from-blue-500 to-purple-500'
												} transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-300`}>
													<IconComponent className="w-8 h-8 text-white" />
												</div>
												
												<div className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
													edu.type === 'university'
														? 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30'
														: 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
												}`}>
													{edu.type === 'university' ? 'University' : 'Certification'}
												</div>
											</div>

											{/* Content */}
											<div className="flex-grow">
												<h3 className="text-xl font-bold text-white mb-3 leading-tight group-hover:text-blue-200 transition-colors">
													{edu.degree}
												</h3>
												
												<div className="flex items-center gap-2 mb-4">
													<Award className="w-4 h-4 text-purple-400" />
													<p className="text-lg text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text font-semibold">
														{edu.institution}
													</p>
												</div>
												
												<div className="flex items-center gap-2 mb-4">
													<Calendar className="w-4 h-4 text-green-400" />
													<span className="text-white/70">{edu.year}</span>
												</div>

												<p className="text-white/80 leading-relaxed mb-6 flex-grow">
													{edu.description}
												</p>
											</div>

											{/* Status Indicator */}
											<div className="flex items-center justify-between pt-4 border-t border-white/10">
												<div className="flex items-center gap-2">
													<div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
													<span className="text-green-400 text-sm font-medium">Completed</span>
												</div>
												<div className="flex items-center gap-1">
													{[...Array(5)].map((_, starIndex) => (
														<Star 
															key={starIndex} 
															className="w-4 h-4 text-yellow-400 fill-current animate-twinkle" 
															style={{animationDelay: `${starIndex * 100}ms`}}
														/>
													))}
												</div>
											</div>

											{/* Hover Effect Overlay */}
											<div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 to-purple-600/0 group-hover:from-blue-600/10 group-hover:to-purple-600/10 rounded-3xl transition-all duration-500"></div>
										</div>
									</div>
								</div>
							);
						})}
					</div>

					{/* Additional Info Section */}
					<div className="mt-20 text-center animate-fade-in animation-delay-800">
						<div className="backdrop-blur-sm bg-white/5 rounded-3xl border border-white/10 p-8 shadow-2xl max-w-4xl mx-auto">
							<div className="flex items-center justify-center gap-4 mb-6">
								<BookOpen className="w-8 h-8 text-blue-400" />
								<h3 className="text-3xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
									Continuous Learning
								</h3>
							</div>
							<p className="text-xl text-white/80 leading-relaxed mb-6">
								Committed to staying current with emerging technologies and best practices through ongoing education, 
								professional development, and hands-on project experience.
							</p>
							<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
								<div className="text-center">
									<div className="text-3xl font-bold text-blue-400 mb-2">6+</div>
									<div className="text-white/70">Certifications</div>
								</div>
								<div className="text-center">
									<div className="text-3xl font-bold text-purple-400 mb-2">2+</div>
									<div className="text-white/70">Years Study</div>
								</div>
								<div className="text-center">
									<div className="text-3xl font-bold text-green-400 mb-2">10+</div>
									<div className="text-white/70">Technologies</div>
								</div>
								<div className="text-center">
									<div className="text-3xl font-bold text-yellow-400 mb-2">∞</div>
									<div className="text-white/70">Learning</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Education;