import { Gamepad2, Printer, Cpu, type LucideIcon } from "lucide-react";

export interface PersonalProject {
	title: string;
	period: string;
	description: string;
	icon: LucideIcon;
	achievement: string;
	color: string; // tailwind gradient classes
}

export const personalProjects: Array<PersonalProject> = [
	{
		title: "Global Game Jam - Unity 2D Game",
		period: "Jan 2022",
		description:
			"Developed a complete game in 48 hours using C# and Unity 2D as part of the international Global Game Jam competition. Collaborated with a team to implement graphical interfaces, game mechanics, and version control workflows.",
		icon: Gamepad2,
		achievement: "Competition Participant",
		color: "from-blue-500 to-blue-600",
	},
	{
		title: "3D Printer from Scratch",
		period: "2019-2020",
		description:
			"Designed and built a fully functional 3D printer from ground up, including motor programming, extruder configuration, and Cura software integration. Overcame significant technical and logistical challenges to deliver a working prototype.",
		icon: Printer,
		achievement: "Fully Functional Build",
		color: "from-purple-500 to-purple-600",
	},
	{
		title: "Smart City Dashboard",
		period: "Nov-Dec 2018",
		description:
			"Developed an Arduino-based dashboard for real-time monitoring of city services including traffic lights, water pumps, and vehicle tracking. Created intuitive user interface and achieved podium finish in school competition.",
		icon: Cpu,
		achievement: "Podium Finish",
		color: "from-slate-500 to-slate-600",
	},
];
