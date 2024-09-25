import type React from "react";

const personalExperienceData = [
	{
		title: "Game Development - Unity 2D Developer",
		project: "Global Game Jam",
		period: "Jan. 2022",
		description:
			"Developed a game in 48 hours for the Global Game Jam, using C# and Unity 2D.",
		technologies: "C#, Unity 2D, Git",
		tasks: [
			"Implemented part of the graphical interface.",
			"Collaborated in a Git repository with teammates.",
		],
	},
	{
		title: "Building a 3D Printer",
		project: "Electronic Technician Internship",
		period: "2019 - 2020",
		description:
			"Built a 3D printer from scratch, programming motors and configuring extruders.",
		technologies: "Motor programming and calibration, Cura, Arduino",
		tasks: [
			"Calibrated the printer and used Cura software for 3D printing.",
			"Completed a fully functional project overcoming logistical challenges.",
		],
	},
	{
		title: "Hackathon Participation - Smart City Dashboard",
		project: "School Hackathon",
		period: "Nov. 2018 - Dec. 2018",
		description:
			"Participated in a school hackathon to develop a 'Smart City' dashboard.",
		technologies: "Arduino, UI/UX, Monitoring Dashboard",
		tasks: [
			"Configured a dashboard for real-time monitoring of city services using Arduino.",
			"Developed an intuitive interface for traffic lights, water pumps, and vehicle tracking.",
			"Achieved a podium finish in the event.",
		],
	},
];

const PersonalExperience: React.FC = () => {
	return (
		<section id="personal-experience" className="container mx-auto px-6 mb-12">
			<h2 className="text-3xl font-bold text-center text-white mb-8">
				Personal Experience
			</h2>
			<div className="relative border-r border-gray-200 dark:border-gray-700">
				{personalExperienceData.map((experience, index) => (
					<div key={index} className="mb-10 mr-6">
						<div className="absolute w-3 h-3 bg-blue-400 rounded-full -right-1.5 border border-white"></div>
						<div className="p-4 bg-gray-800 rounded-lg shadow-lg">
							<h3 className="text-xl font-semibold text-white mb-2">
								{experience.title}
							</h3>
							<p className="text-blue-400 text-xl mb-2">{experience.project}</p>
							<p className="text-white text-sm mb-4">{experience.period}</p>
							<p className="text-white mb-2">{experience.description}</p>
							<ul className="list-disc list-inside text-white space-y-2">
								{experience.tasks.map((task, taskIndex) => (
									<li key={taskIndex}>{task}</li>
								))}
							</ul>
							<p className="text-gray-500 my-4">
								Technologies: {experience.technologies}
							</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default PersonalExperience;
