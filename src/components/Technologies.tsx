import type React from "react";
import {
	FaReact,
	FaPython,
	FaJsSquare,
	FaDatabase,
	FaNodeJs,
	FaGithub,
} from "react-icons/fa"; // Cambiado a FaGithub
import {
	SiTypescript,
	SiTailwindcss,
	SiNextdotjs,
	SiExpress,
	SiMongodb,
	SiFigma,
	SiStorybook,
} from "react-icons/si";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";

const skills = [
	{
		name: "JavaScript",
		icon: <FaJsSquare size={40} color="#fbc02d" />,
		color: "#fbc02d",
	},
	{
		name: "TypeScript",
		icon: <SiTypescript size={40} color="#4caf50" />,
		color: "#4caf50",
	},
	{
		name: "Tailwind CSS",
		icon: <SiTailwindcss size={40} color="#38bdf8" />,
		color: "#38bdf8",
	},
	{
		name: "React.js",
		icon: <FaReact size={40} color="#2196f3" />,
		color: "#2196f3",
	},
	{
		name: "React Native",
		icon: <FaReact size={40} color="#00acc1" />,
		color: "#00acc1",
	},
	{
		name: "Vite.js",
		icon: <FaReact size={40} color="#646cff" />, // Usando el mismo icono de React por falta de uno específico
		color: "#646cff",
	},
	{
		name: "Next.js",
		icon: <SiNextdotjs size={40} color="ffffff" />,
		color: "#000000",
	},
	{
		name: "Express.js",
		icon: <SiExpress size={40} color="ffffff" />, // Usando un color neutro
		color: "#000000",
	},
	{
		name: "Node.js",
		icon: <FaNodeJs size={40} color="#8cc84b" />,
		color: "#8cc84b",
	},
	{
		name: "Python",
		icon: <FaPython size={40} color="#3f51b5" />,
		color: "#3f51b5",
	},
	{
		name: "Flask",
		icon: <FaPython size={40} color="ffffff" />, // Usando el mismo icono de Python
		color: "#3f51b5",
	},
	{
		name: "SQL",
		icon: <FaDatabase size={40} color="#0288d1" />,
		color: "#0288d1",
	},
	{
		name: "MongoDB",
		icon: <SiMongodb size={40} color="#47A248" />,
		color: "#47A248",
	},
	{
		name: "Figma",
		icon: <SiFigma size={40} color="#F24E1E" />,
		color: "#F24E1E",
	},
	{
		name: "Storybook",
		icon: <SiStorybook size={40} color="#FF4785" />,
		color: "#FF4785",
	},
	{
		name: "GitHub",
		icon: <FaGithub size={40} color="ffffff" />, // Cambiado a FaGithub
		color: "#181717",
	},
];

const Technologies: React.FC = () => {
	return (
		<section
			id="skills"
			className="flex py-12 bg-transparent justify-center items-center"
		>
			<Box>
				<h2 className="text-3xl font-bold text-center text-white mb-8">
					My Skills
				</h2>
				<Grid container spacing={4} justifyContent="center">
					{skills.map((skill, index) => (
						<Grid
							item
							key={index}
							xs={4}
							sm={3}
							md={2}
							lg={1.5}
							display="flex"
							justifyContent="center"
						>
							<Tooltip title={skill.name} placement="top">
								<Box
									sx={{
										p: 2,
										display: "flex",
										flexDirection: "column",
										alignItems: "center",
										cursor: "pointer",
										backgroundColor: `${skill.color}20`, // Fondo del color del icono con opacidad
										borderRadius: "8px", // Esquinas redondeadas
										transition: "background-color 0.3s ease", // Transición de fondo
										"&:hover": {
											backgroundColor: `${skill.color}40`, // Color de fondo completo al pasar el mouse
											boxShadow: `0px 4px 20px ${skill.color}`, // Sombra del color del icono
										},
									}}
								>
									<Box
										component="span"
										sx={{
											transition: "transform 0.3s ease", // Transición de aumento
											"&:hover": {
												transform: "scale(1.2)", // Aumentar el tamaño del icono al hacer hover
											},
										}}
									>
										{skill.icon}
									</Box>
								</Box>
							</Tooltip>
						</Grid>
					))}
				</Grid>
			</Box>
		</section>
	);
};

export default Technologies;
