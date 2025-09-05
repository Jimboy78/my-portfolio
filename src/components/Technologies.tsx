import type React from "react";
import { 
	Code2, 
	Database, 
	Smartphone, 
	Cloud, 
	Wrench, 
	Globe,
	Server,
	Monitor,
	Palette,
	GitBranch,
	Container,
	Zap,
	Languages
} from "lucide-react";

const technicalSkills = {
	frontend: [
		{ name: "React", level: 95, category: "Frontend", icon: Code2, color: "from-blue-500 to-blue-600" },
		{ name: "Next.js", level: 90, category: "Frontend", icon: Globe, color: "from-gray-700 to-gray-800" },
		{ name: "TypeScript", level: 90, category: "Frontend", icon: Code2, color: "from-blue-600 to-blue-700" },
		{ name: "Tailwind CSS", level: 85, category: "Frontend", icon: Palette, color: "from-cyan-500 to-cyan-600" },
		{ name: "Vite", level: 85, category: "Frontend", icon: Zap, color: "from-yellow-500 to-orange-500" }
	],
	backend: [
		{ name: "Node.js", level: 90, category: "Backend", icon: Server, color: "from-green-500 to-green-600" },
		{ name: "Express", level: 85, category: "Backend", icon: Server, color: "from-gray-600 to-gray-700" },
		{ name: "Prisma", level: 88, category: "Backend", icon: Database, color: "from-purple-500 to-purple-600" },
		{ name: "REST APIs", level: 90, category: "Backend", icon: Globe, color: "from-indigo-500 to-indigo-600" }
	],
	database: [
		{ name: "MySQL", level: 85, category: "Database", icon: Database, color: "from-orange-500 to-orange-600" },
		{ name: "SQL", level: 88, category: "Database", icon: Database, color: "from-blue-500 to-blue-600" },
		{ name: "MongoDB", level: 75, category: "Database", icon: Database, color: "from-green-600 to-green-700" }
	],
	mobile: [
		{ name: "React Native (Expo)", level: 90, category: "Mobile/TV", icon: Smartphone, color: "from-blue-600 to-purple-600" },
		{ name: "Expo Router", level: 85, category: "Mobile/TV", icon: Smartphone, color: "from-purple-500 to-purple-600" },
		{ name: "react-native-tvos", level: 80, category: "Mobile/TV", icon: Monitor, color: "from-red-500 to-red-600" },
		{ name: "EAS", level: 85, category: "Mobile/TV", icon: Cloud, color: "from-blue-500 to-blue-600" }
	],
	devops: [
		{ name: "Docker", level: 85, category: "DevOps", icon: Container, color: "from-blue-500 to-blue-600" },
		{ name: "Drone CI", level: 80, category: "DevOps", icon: Zap, color: "from-orange-500 to-orange-600" },
		{ name: "Gitea", level: 75, category: "DevOps", icon: GitBranch, color: "from-green-500 to-green-600" },
		{ name: "Portainer", level: 80, category: "DevOps", icon: Container, color: "from-purple-500 to-purple-600" }
	],
	practices: [
		{ name: "i18n (next-intl)", level: 85, category: "Practices", icon: Languages, color: "from-pink-500 to-pink-600" },
		{ name: "SSR", level: 85, category: "Practices", icon: Server, color: "from-indigo-500 to-indigo-600" },
		{ name: "Caching/TTL", level: 80, category: "Practices", icon: Zap, color: "from-yellow-500 to-yellow-600" },
		{ name: "a11y", level: 75, category: "Practices", icon: Monitor, color: "from-blue-500 to-blue-600" },
		{ name: "Metrics/Logging", level: 80, category: "Practices", icon: Wrench, color: "from-gray-500 to-gray-600" }
	]
};

const languages = [
	{ name: "Spanish", level: "Native", flag: "🇦🇷" },
	{ name: "English", level: "Proficient", flag: "🇺🇸" }
];

const Technologies: React.FC = () => {
	const allSkills = Object.values(technicalSkills).flat();
	
	return (
		<section id="technologies" className="relative py-20 overflow-hidden">
			{/* Background */}
			<div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-violet-900 to-slate-900">
				<div className="absolute inset-0">
					<div className="absolute top-20 left-10 w-96 h-96 bg-violet-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
					<div className="absolute top-20 right-10 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
					<div className="absolute bottom-20 left-1/2 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000"></div>
				</div>
			</div>

			<div className="relative z-10 container mx-auto px-6">
				<div className="text-center mb-16 animate-fade-in">
					<h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-violet-200 to-pink-200 bg-clip-text text-transparent mb-4">
						Technical Skills
					</h2>
					<div className="w-24 h-1 bg-gradient-to-r from-violet-500 to-pink-500 mx-auto rounded-full"></div>
					<p className="text-xl text-white/70 mt-6 max-w-2xl mx-auto">
						Comprehensive technical expertise across the full development stack
					</p>
				</div>

				<div className="max-w-7xl mx-auto">
					{/* Skills by Category */}
					<div className="grid gap-12 mb-20">
						{Object.entries(technicalSkills).map(([category, skills], categoryIndex) => (
							<div key={category} className={`animate-slide-up animation-delay-${categoryIndex * 200}`}>
								<div className="backdrop-blur-sm bg-white/5 rounded-3xl border border-white/10 p-8 shadow-2xl">
									<h3 className="text-3xl font-bold text-white mb-8 capitalize text-center">
										{category === 'mobile' ? 'Mobile & TV' : category}
									</h3>
									<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
										{skills.map((skill, index) => {
											const IconComponent = skill.icon;
											
											return (
												<div 
													key={skill.name}
													className={`group p-6 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-500 bg-gradient-to-br ${skill.color}/10 hover:${skill.color.replace('from-', 'from-').replace(' to-', '/20 to-')}/20 animate-fade-in animation-delay-${index * 100}`}
												>
													<div className="flex items-center gap-4 mb-4">
														<div className={`p-3 rounded-xl bg-gradient-to-br ${skill.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
															<IconComponent className="w-6 h-6 text-white" />
														</div>
														<div className="flex-1">
															<h4 className="text-lg font-semibold text-white group-hover:text-violet-200 transition-colors">
																{skill.name}
															</h4>
															<div className="text-white/60 text-sm">
																{skill.category}
															</div>
														</div>
													</div>
													
													{/* Skill Level Bar */}
													<div className="space-y-2">
														<div className="flex justify-between text-sm text-white/70">
															<span>Proficiency</span>
															<span>{skill.level}%</span>
														</div>
														<div className="w-full bg-white/10 rounded-full h-2">
															<div 
																className={`h-2 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
																style={{width: `${skill.level}%`}}
															></div>
														</div>
													</div>
												</div>
											);
										})}
									</div>
								</div>
							</div>
						))}
					</div>

					{/* Languages Section */}
					<div className="animate-slide-up animation-delay-1000">
						<div className="backdrop-blur-sm bg-white/5 rounded-3xl border border-white/10 p-8 shadow-2xl text-center">
							<h3 className="text-3xl font-bold text-white mb-8">Languages</h3>
							<div className="flex justify-center gap-12">
								{languages.map((lang, index) => (
									<div 
										key={lang.name}
										className={`group animate-fade-in animation-delay-${index * 200}`}
									>
										<div className="flex flex-col items-center">
											<div className="text-6xl mb-4 group-hover:scale-125 transition-transform duration-300">
												{lang.flag}
											</div>
											<h4 className="text-xl font-semibold text-white mb-2">
												{lang.name}
											</h4>
											<div className={`px-4 py-2 rounded-full text-sm font-medium ${
												lang.level === 'Native' 
													? 'bg-green-500/20 text-green-300 border border-green-500/30'
													: 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
											}`}>
												{lang.level}
											</div>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>

					{/* Skills Overview Stats */}
					<div className="mt-20 animate-fade-in animation-delay-1200">
						<div className="backdrop-blur-sm bg-white/5 rounded-3xl border border-white/10 p-8 shadow-2xl">
							<h3 className="text-3xl font-bold text-center bg-gradient-to-r from-white to-violet-200 bg-clip-text text-transparent mb-8">
								Skills Overview
							</h3>
							<div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
								<div>
									<div className="text-4xl font-bold text-violet-400 mb-2">
										{Object.keys(technicalSkills).length}
									</div>
									<div className="text-white/70">Categories</div>
								</div>
								<div>
									<div className="text-4xl font-bold text-pink-400 mb-2">
										{allSkills.length}
									</div>
									<div className="text-white/70">Technologies</div>
								</div>
								<div>
									<div className="text-4xl font-bold text-blue-400 mb-2">
										{Math.round(allSkills.reduce((acc, skill) => acc + skill.level, 0) / allSkills.length)}%
									</div>
									<div className="text-white/70">Avg Proficiency</div>
								</div>
								<div>
									<div className="text-4xl font-bold text-green-400 mb-2">
										2+
									</div>
									<div className="text-white/70">Years Experience</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Technologies;