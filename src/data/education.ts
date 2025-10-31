export interface EducationItem {
	title: string;
	institution: string;
	year: string;
	type: "degree" | "certifications" | "technical";
	details?: Array<string>;
}

export const education: Array<EducationItem> = [
	{
		title: "Analista Univ. en Sistemas",
		institution: "Instituto Politécnico Superior, Rosario",
		year: "2021–2023",
		type: "degree",
	},
	{
		title: "Full-Stack Development Certifications",
		institution: "Coderhouse",
		year: "2021–2023",
		type: "certifications",
		details: [
			"SQL & Database Design",
			"React Native Development",
			"React.js & Frontend",
			"JavaScript Fundamentals",
			"Python & Django",
		],
	},
	{
		title: "Electronics Specialization",
		institution: "Technical High School",
		year: "2013–2018",
		type: "technical",
		details: [
			"Microcontroller Programming",
			"Assembly Language (ASM)",
			"Arduino Development",
			"Electronics & Circuit Design",
		],
	},
];
