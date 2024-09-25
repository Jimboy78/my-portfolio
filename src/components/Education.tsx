import type React from "react";

const educationData = [
	{
		degree: "University Analyst in Systems",
		institution: "Instituto Politécnico Superior, Rosario",
		year: "2021 - 2023",
	},
	{
		degree:
			"SQL - Functions, stored procedures, triggers, DCL and TCL, Datawarehouse in Business Intelligence",
		institution: "Coderhouse",
		year: "Aug. 2023 - Nov. 2023",
	},
	{
		degree:
			"App Development - React Native, Redux, Login & authentication, SQLite",
		institution: "Coderhouse",
		year: "Apr. 2023 - Jun. 2023",
	},
	{
		degree:
			"React JS - JSX and transpiling, routing and navigation, events, API consumption, Firebase",
		institution: "Coderhouse",
		year: "Jan. 2023 - Mar. 2023",
	},
	{
		degree: "JavaScript - Storage and JSON, library, AJAX and Fetch, Node JS",
		institution: "Coderhouse",
		year: "Sep. 2022 - Nov. 2022",
	},
	{
		degree: "Python - Django, Object-Oriented Programming, Git-Github",
		institution: "Coderhouse",
		year: "Dec. 2021 - Mar. 2022",
	},
	{
		degree: "Electronic Technician",
		institution: "School N° 2073 'San Pablo', Villa Constitución",
		year: "2013 - 2018",
	},
];

const Education: React.FC = () => {
	return (
		<section id="education" className="py-12 bg-transparent">
			<div className="container mx-auto px-6">
				<h2 className="text-3xl font-bold text-center text-white mb-8">
					Education
				</h2>
				<div className="grid  gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
					{educationData.map((edu, index) => (
						<div key={index} className="p-6 bg-gray-800 shadow-lg rounded-lg">
							<h3 className="text-xl font-bold text-white mb-2">
								{edu.degree}
							</h3>
							<p className="text-yellow-400 text-lg mb-2">{edu.institution}</p>
							<p className="text-white text-sm">{edu.year}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Education;
