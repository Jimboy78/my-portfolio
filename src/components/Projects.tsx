import type * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

const projects = [
	{
		title: "E-commerce Platform",
		description: "A full-stack e-commerce solution with React and Node.js",
		image: "/placeholder-1.png",
	},
	{
		title: "Weather App",
		description:
			"A real-time weather application using React and OpenWeatherMap API",
		image: "/placeholder-1.png",
	},
	{
		title: "Task Management System",
		description:
			"A collaborative task management tool built with React and Firebase",
		image: "/placeholder-1.png",
	},
];

const Projects: React.FC = () => {
	return (
		<section
			id="projects"
			style={{ padding: "3rem 0", backgroundColor: "transparent" }}
		>
			<Box sx={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1rem" }}>
				<Typography
					variant="h4"
					gutterBottom
					align="center"
					sx={{ color: "white", marginBottom: "2rem" }}
				>
					My Projects
				</Typography>
				<Grid container spacing={4}>
					{projects.map((project, index) => (
						<Grid item xs={12} sm={6} md={4} key={index}>
							<Card
								sx={{
									maxWidth: 345,
									backgroundColor: "rgb(31 41 55)",
									color: "white",
									padding: "10px",
								}}
							>
								<CardMedia
									component="img"
									height="140"
									image={project.image}
									alt={project.title}
								/>
								<CardContent>
									<Typography
										gutterBottom
										variant="h5"
										component="div"
										sx={{ color: "white" }}
									>
										{project.title}
									</Typography>
									<Typography variant="body2" color="text.secondary text-white">
										{project.description}
									</Typography>
								</CardContent>
								<CardActions>
									<Button size="small" color="primary">
										View Project
									</Button>
								</CardActions>
							</Card>
						</Grid>
					))}
				</Grid>
			</Box>
		</section>
	);
};

export default Projects;
