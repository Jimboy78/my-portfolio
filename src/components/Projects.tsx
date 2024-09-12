import type React from "react";
import {
	Card,
	CardContent,
	CardHeader,
	CardActions,
	Typography,
	Button,
} from "@mui/material";

const Projects: React.FC = () => {
	return (
		<section
			id="projects"
			className="my-8 bg-white shadow-lg shadow-gray-200 rounded-lg p-6"
		>
			<Typography
				variant="h5"
				component="h5"
				className="bg-gray-800 p-2 rounded-md text-white font-bold"
			>
				Proyectos
			</Typography>
			<div className="gap-4 flex justify-around my-6">
				<Card sx={{ maxWidth: 400 }}>
					<CardHeader
						title="Project 1"
						subheader="A brief description of Project 1"
						sx={{ backgroundColor: "#f5f5f5", fontWeight: "bold" }}
					/>
					<CardContent>
						<img
							src="/placeholder.svg?height=200&width=400"
							alt="Project 1"
							className="w-full h-40 object-cover mb-4 rounded-lg"
						/>
						<Typography variant="body2" color="textSecondary">
							Details about Project 1...
						</Typography>
					</CardContent>
					<CardActions>
						<Button variant="contained" color="primary">
							View Project
						</Button>
					</CardActions>
				</Card>

				<Card sx={{ maxWidth: 400 }}>
					<CardHeader
						title="Project 2"
						subheader="A brief description of Project 2"
						sx={{ backgroundColor: "#f5f5f5" }}
					/>
					<CardContent>
						<img
							src="/placeholder.svg?height=200&width=400"
							alt="Project 2"
							className="w-full h-40 object-cover mb-4 rounded-lg"
						/>
						<Typography variant="body2" color="textSecondary">
							Details about Project 2...
						</Typography>
					</CardContent>
					<CardActions>
						<Button variant="contained" color="primary">
							View Project
						</Button>
					</CardActions>
				</Card>
			</div>
		</section>
	);
};

export default Projects;
