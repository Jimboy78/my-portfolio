import type React from "react";
import {
	Box,
	Typography,
	Divider,
	List,
	ListItem,
	ListItemText,
} from "@mui/material";

const Education: React.FC = () => {
	return (
		<section>
			<Box
				sx={{
					backgroundColor: "#ffffff",
					boxShadow: "0 4px 10px rgba(31, 41, 55, 0.2)",
					borderRadius: 2,
					padding: 4,
					maxWidth: 800,
					margin: "0 auto",
				}}
			>
				<Box className="bg-gray-800 p-2 rounded-md ">
					<Typography
						variant="h5"
						fontWeight="bold"
						color={"white"}
						gutterBottom
						margin={0}
					>
						Education
					</Typography>
				</Box>

				{/* Instituto Politécnico Superior */}
				<Box sx={{ mb: 3 }}>
					<List>
						<Typography variant="h6" fontWeight="bold" gutterBottom>
							Instituto Politécnico Superior, Rosario
						</Typography>
						<Typography variant="subtitle1" color="textSecondary" gutterBottom>
							2021 - 2023
						</Typography>
						<Typography variant="body1">
							University Analyst in Systems
						</Typography>
					</List>
				</Box>
				<Divider sx={{ mb: 3 }} />

				{/* Coderhouse */}
				<Box sx={{ mb: 3 }}>
					<Typography variant="h6" fontWeight="bold" gutterBottom>
						Coderhouse
					</Typography>
					<List>
						<ListItem>
							<ListItemText
								primary="SQL - Functions, stored procedures, triggers, DCL and TCL, Datawarehouse in Business Intelligence"
								secondary="Aug. 2023 - Nov. 2023"
							/>
						</ListItem>
						<ListItem>
							<ListItemText
								primary="App Development - React Native, Redux, Login & authentication, SQLite"
								secondary="Apr. 2023 - Jun. 2023"
							/>
						</ListItem>
						<ListItem>
							<ListItemText
								primary="React JS - JSX and transpiling, routing and navigation, events, API consumption, Firebase"
								secondary="Jan. 2023 - Mar. 2023"
							/>
						</ListItem>
						<ListItem>
							<ListItemText
								primary="JavaScript - Storage and JSON, library, AJAX and Fetch, Node JS"
								secondary="Sep. 2022 - Nov. 2022"
							/>
						</ListItem>
						<ListItem>
							<ListItemText
								primary="Python - Django, Object-Oriented Programming, Git-Github"
								secondary="Dec. 2021 - Mar. 2022"
							/>
						</ListItem>
					</List>
				</Box>
				<Divider sx={{ mb: 3 }} />

				{/* School N° 2073 “San Pablo” */}
				<Box>
					<Typography variant="h6" fontWeight="bold" gutterBottom>
						School N° 2073 “San Pablo”, Villa Constitución
					</Typography>
					<Typography variant="subtitle1" color="textSecondary" gutterBottom>
						2013 - 2018
					</Typography>
					<Typography variant="body1">Electronic Technician</Typography>
				</Box>
			</Box>
		</section>
	);
};

export default Education;
