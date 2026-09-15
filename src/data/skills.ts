import {
	Code2,
	Briefcase,
	Trophy,
	Award,
	Zap,
	Sparkles,
	type LucideIcon,
} from "lucide-react";

export interface SkillCategory {
	techs: Array<string>;
	icon: LucideIcon;
	color: string; // tailwind gradient classes
}

export type Skills = Record<string, SkillCategory>;

export const skills: Skills = {
	Frontend: {
		techs: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vite"],
		icon: Code2,
		color: "from-blue-500 to-blue-600",
	},
	Backend: {
		techs: ["Node.js", "Express", "Prisma", "Python", "FastAPI", "Ruby on Rails", "REST APIs"],
		icon: Briefcase,
		color: "from-slate-500 to-slate-600",
	},
	"AI/ML": {
		techs: ["LangChain", "OpenAI API", "Claude", "Gemini", "ChromaDB", "Vector Search"],
		icon: Sparkles,
		color: "from-pink-500 to-purple-600",
	},
	"Mobile/TV": {
		techs: ["React Native", "Expo", "Android TV/tvOS", "EAS"],
		icon: Trophy,
		color: "from-purple-500 to-purple-600",
	},
	Database: {
		techs: ["MySQL", "PostgreSQL", "MongoDB", "Supabase", "SQLAlchemy"],
		icon: Award,
		color: "from-indigo-500 to-indigo-600",
	},
	DevOps: {
		techs: ["Docker", "Docker Compose", "Celery", "Redis", "Vercel", "Drone CI", "Gitea", "Portainer"],
		icon: Zap,
		color: "from-gray-500 to-gray-600",
	},
};
