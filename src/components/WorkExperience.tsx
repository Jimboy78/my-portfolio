import type React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";

const WorkExperience: React.FC = () => {
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
						Work Experience
					</Typography>

					<Box className="space-y-5 mt-4">
						{/* Job 1: Clak */}
						<Box className="flex items-center space-x-2">
							<div className="w-4 h-4 rounded-full bg-teal-400"></div>
							<Box>
								<Typography variant="subtitle1" fontWeight="bold">
									Frontend Developer - Clak
								</Typography>
								<Typography variant="body2" color="textSecondary">
									Mar. 2024 - August
								</Typography>
								<ul className="list-disc ml-6 mt-2">
									<li>
										Developed web views using React, TypeScript, Tailwind CSS,
										Vite.js, and Next.js.
									</li>
									<li>
										Collaborated with UI/UX designers to create the landing page
										using Figma.
									</li>
									<li>
										Designed a Storybook and Design System to maintain visual
										consistency.
									</li>
									<li>
										Implemented and optimized frontend forms, integrating with
										backend endpoints in Python (Flask).
									</li>
									<li>
										Continuously enhanced the user experience by integrating
										advanced tools with ChatGPT.
									</li>
								</ul>
								<Typography variant="caption" color="textSecondary">
									Technologies: React, TypeScript, Tailwind CSS, Vite.js,
									Next.js, Figma, Python, Flask
								</Typography>
							</Box>
						</Box>
						<hr />
						{/* Job 2: Junco Films */}
						<Box className="flex items-center space-x-2">
							<div className="w-4 h-4 rounded-full bg-indigo-300"></div>
							<Box>
								<Typography variant="subtitle1" fontWeight="bold">
									Software Developer - Junco Films
								</Typography>
								<Typography variant="body2" color="textSecondary">
									Jan. 2024 - Feb. 2024
								</Typography>
								<ul className="list-disc ml-6 mt-2">
									<li>
										Developed and maintained interactive tools and web
										applications.
									</li>
									<li>
										Integrated social media APIs (Facebook, TikTok, Discord) for
										social data analysis.
									</li>
									<li>
										Created a multi-platform web workspace with Flask and
										ReactJS.
									</li>
									<li>
										Developed an SVG file editor for advanced graphic
										manipulation.
									</li>
									<li>
										Automated Blender renders using Python, optimizing content
										production workflows.
									</li>
								</ul>
								<Typography variant="caption" color="textSecondary">
									Technologies: Flask, ReactJS, Python, Blender, Social Media
									APIs
								</Typography>
							</Box>
						</Box>
						<hr />
						{/* Job 3: B2Gov */}
						<Box className="flex items-center space-x-2">
							<div className="w-4 h-4 rounded-full bg-orange-200"></div>
							<Box>
								<Typography variant="subtitle1" fontWeight="bold">
									Backend Developer - B2Gov
								</Typography>
								<Typography variant="body2" color="textSecondary">
									Sept. 2022 - Sept. 2023
								</Typography>
								<ul className="list-disc ml-6 mt-2">
									<li>
										Focused on the development of robust and scalable backend
										solutions.
									</li>
									<li>
										Implemented a data scraping system from international public
										procurement portals using Python and BeautifulSoup.
									</li>
									<li>
										Extracted and manipulated data in compliance with the Open
										Contracting Data Standard (OCDS).
									</li>
									<li>
										Stored scraped data in MongoDB and optimized the performance
										to handle large datasets.
									</li>
								</ul>
								<Typography variant="caption" color="textSecondary">
									Technologies: Python, BeautifulSoup, MongoDB, MongoDB Compass,
									Flask
								</Typography>
							</Box>
						</Box>
					</Box>
				</CardContent>
			</Card>
		</section>
	);
};

export default WorkExperience;
