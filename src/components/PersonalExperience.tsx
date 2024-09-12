import type React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";

const PersonalExperience: React.FC = () => {
	return (
		<section className="my-8">
			<Card
				sx={{
					width: "90%",
					maxWidth: "1200px",
					margin: "0 auto",
					padding: 2,
					backgroundColor: "#f9f9f9",
					boxShadow: "0 4px 10px rgba(31, 41, 55, 0.2)",
				}}
			>
				<CardContent>
					<Typography
						variant="h5"
						fontWeight="bold"
						className="bg-gray-800 p-2  rounded-md text-white"
					>
						Personal Experience
					</Typography>

					<Box className="space-y-5 mt-4">
						{/* Experience 1: Global Game Jam */}
						<Box className="flex items-center space-x-2">
							<div className="w-4 h-4 rounded-full bg-teal-400"></div>
							<Box>
								<Typography variant="subtitle1" fontWeight="bold">
									Game Development - Global Game Jam - Unity 2D Developer
								</Typography>
								<Typography variant="body2" color="textSecondary">
									Jan. 2022
								</Typography>
								<p className="mt-2">
									Developed a game in 48 hours for the Global Game Jam, using C#
									and Unity 2D.
								</p>
								<ul className="list-disc ml-6 mt-2">
									<li>Implemented part of the graphical interface.</li>
									<li>
										Learned Unity libraries and collaborated in a Git repository
										with teammates.
									</li>
								</ul>
								<Typography variant="caption" color="textSecondary">
									Technologies: C#, Unity 2D, Git
								</Typography>
							</Box>
						</Box>
						<hr />
						{/* Experience 2: 3D Printer Internship */}
						<Box className="flex items-center space-x-2">
							<div className="w-4 h-4 rounded-full bg-indigo-300"></div>
							<Box>
								<Typography variant="subtitle1" fontWeight="bold">
									Building a 3D Printer - Electronic Technician Internship
								</Typography>
								<Typography variant="body2" color="textSecondary">
									2019 - 2020
								</Typography>
								<p className="mt-2">
									Built a 3D printer from scratch, programming motors and
									configuring extruders.
								</p>
								<ul className="list-disc ml-6 mt-2">
									<li>
										Calibrated the printer and used Cura software for 3D
										printing.
									</li>
									<li>
										Overcame logistical and technical challenges to complete a
										fully functional project.
									</li>
								</ul>
								<Typography variant="caption" color="textSecondary">
									Technologies: Motor programming and calibration, Cura, Arduino
								</Typography>
							</Box>
						</Box>
						<hr />
						{/* Experience 3: Hackathon */}
						<Box className="flex items-center space-x-2">
							<div className="w-4 h-4 rounded-full bg-orange-200"></div>
							<Box>
								<Typography variant="subtitle1" fontWeight="bold">
									Hackathon Participation - Smart City Dashboard
								</Typography>
								<Typography variant="body2" color="textSecondary">
									Nov. 2018 - Dec. 2018
								</Typography>
								<p className="mt-2">
									Participated in a school hackathon to develop a "Smart City"
									dashboard.
								</p>
								<ul className="list-disc ml-6 mt-2">
									<li>
										Configured a dashboard for real-time monitoring of city
										services using Arduino.
									</li>
									<li>
										Developed an intuitive interface for controlling traffic
										lights, water pumps, and vehicle tracking.
									</li>
									<li>
										Collaborated with multiple teams and achieved a podium
										finish in the event.
									</li>
								</ul>
								<Typography variant="caption" color="textSecondary">
									Technologies: Arduino, UI/UX, Monitoring Dashboard
								</Typography>
							</Box>
						</Box>
					</Box>
				</CardContent>
			</Card>
		</section>
	);
};

export default PersonalExperience;
