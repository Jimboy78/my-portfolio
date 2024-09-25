import type React from "react";

const workExperienceData = [
	{
		position: "Frontend Developer",
		company: "Clak",
		period: "Mar. 2024 - August",
		responsibilities: [
			"Developed web views using React, TypeScript, Tailwind CSS, Vite.js, and Next.js.",
			"Collaborated with UI/UX designers to create the landing page using Figma.",
			"Designed a Storybook and Design System to maintain visual consistency.",
			"Implemented and optimized frontend forms, integrating with backend endpoints in Python (Flask).",
			"Continuously enhanced the user experience by integrating advanced tools with ChatGPT.",
		],
		technologies:
			"React, TypeScript, Tailwind CSS, Vite.js, Next.js, Figma, Python, Flask",
	},
	{
		position: "Software Developer",
		company: "Junco Films",
		period: "Jan. 2024 - Feb. 2024",
		responsibilities: [
			"Developed and maintained interactive tools and web applications.",
			"Integrated social media APIs (Facebook, TikTok, Discord) for social data analysis.",
			"Created a multi-platform web workspace with Flask and ReactJS.",
			"Developed an SVG file editor for advanced graphic manipulation.",
			"Automated Blender renders using Python, optimizing content production workflows.",
		],
		technologies: "Flask, ReactJS, Python, Blender, Social Media APIs",
	},
	{
		position: "Backend Developer",
		company: "B2Gov",
		period: "Sept. 2022 - Sept. 2023",
		responsibilities: [
			"Focused on the development of robust and scalable backend solutions.",
			"Implemented a data scraping system from international public procurement portals using Python and BeautifulSoup.",
			"Extracted and manipulated data in compliance with the Open Contracting Data Standard (OCDS).",
			"Stored scraped data in MongoDB and optimized the performance to handle large datasets.",
		],
		technologies: "Python, BeautifulSoup, MongoDB, MongoDB Compass, Flask",
	},
];

const WorkExperience: React.FC = () => {
	return (
		<section id="work-experience" className="container mx-auto px-6 mb-12">
			<h2 className="text-3xl font-bold text-center text-white mb-8">
				Work Experience
			</h2>
			<div className="relative border-l border-gray-200 dark:border-gray-700">
				{workExperienceData.map((job, index) => (
					<div key={index} className="mb-10 ml-6">
						<div className="absolute w-3 h-3 bg-yellow-400 rounded-full -left-1.5 border border-white"></div>
						<div className="p-4 bg-gray-800 rounded-lg shadow-lg">
							<h3 className="text-xl font-semibold text-white mb-2">
								{job.position}
							</h3>
							<p className="text-yellow-400 text-xl mb-2">{job.company}</p>
							<p className="text-white text-sm mb-4">{job.period}</p>
							<ul className="list-disc list-inside text-white space-y-2">
								{job.responsibilities.map((resp, respIndex) => (
									<li key={respIndex}>{resp}</li>
								))}
							</ul>
							<p className="text-gray-500 my-4">
								Technologies: {job.technologies}
							</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default WorkExperience;
