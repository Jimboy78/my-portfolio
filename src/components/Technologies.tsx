import type React from "react";
import {
	Card,
	CardContent,
	Typography,
	LinearProgress,
	Box,
} from "@mui/material";

const Technologies: React.FC = () => {
	return (
		<section className="my-2">
			<Card
				sx={{
					width: "90%",
					margin: "0 auto",
					padding: 2,
					backgroundColor: "#ffffff",
					boxShadow: "0 4px 10px rgba(31, 41, 55, 0.2)",
					borderRadius: 2,
					overflow: "visible",
				}}
			>
				<CardContent>
					<Typography
						variant="h5"
						fontWeight="bold"
						className="bg-gray-800 p-2 my-4 rounded-md text-white"
					>
						Technologies
					</Typography>
					<Box sx={{ display: "grid", gap: 3, marginY: 2 }}>
						{/* React.js */}
						<Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
							<Typography variant="subtitle1" fontWeight="bold">
								React.js
							</Typography>
							<LinearProgress
								variant="determinate"
								value={50}
								sx={{
									height: 12,
									borderRadius: 5,
									backgroundColor: "#e3f2fd",
									"& .MuiLinearProgress-bar": {
										borderRadius: 5,
										backgroundColor: "#2196f3",
									},
								}}
							/>
						</Box>

						{/* React Native */}
						<Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
							<Typography variant="subtitle1" fontWeight="bold">
								React Native
							</Typography>
							<LinearProgress
								variant="determinate"
								value={25}
								sx={{
									height: 12,
									borderRadius: 5,
									backgroundColor: "#e0f7fa",
									"& .MuiLinearProgress-bar": {
										borderRadius: 5,
										backgroundColor: "#00acc1",
									},
								}}
							/>
						</Box>

						{/* TypeScript */}
						<Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
							<Typography variant="subtitle1" fontWeight="bold">
								TypeScript
							</Typography>
							<LinearProgress
								variant="determinate"
								value={40}
								sx={{
									height: 12,
									borderRadius: 5,
									backgroundColor: "#e8f5e9",
									"& .MuiLinearProgress-bar": {
										borderRadius: 5,
										backgroundColor: "#4caf50",
									},
								}}
							/>
						</Box>

						{/* JavaScript */}
						<Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
							<Typography variant="subtitle1" fontWeight="bold">
								JavaScript
							</Typography>
							<LinearProgress
								variant="determinate"
								value={37}
								sx={{
									height: 12,
									borderRadius: 5,
									backgroundColor: "#fff9c4",
									"& .MuiLinearProgress-bar": {
										borderRadius: 5,
										backgroundColor: "#fbc02d",
									},
								}}
							/>
						</Box>

						{/* Django */}
						<Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
							<Typography variant="subtitle1" fontWeight="bold">
								Django
							</Typography>
							<LinearProgress
								variant="determinate"
								value={20}
								sx={{
									height: 12,
									borderRadius: 5,
									backgroundColor: "#fce4ec",
									"& .MuiLinearProgress-bar": {
										borderRadius: 5,
										backgroundColor: "#d81b60",
									},
								}}
							/>
						</Box>

						{/* Python */}
						<Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
							<Typography variant="subtitle1" fontWeight="bold">
								Python
							</Typography>
							<LinearProgress
								variant="determinate"
								value={55}
								sx={{
									height: 12,
									borderRadius: 5,
									backgroundColor: "#e8eaf6",
									"& .MuiLinearProgress-bar": {
										borderRadius: 5,
										backgroundColor: "#3f51b5",
									},
								}}
							/>
						</Box>

						{/* C# */}
						<Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
							<Typography variant="subtitle1" fontWeight="bold">
								C#
							</Typography>
							<LinearProgress
								variant="determinate"
								value={10}
								sx={{
									height: 12,
									borderRadius: 5,
									backgroundColor: "#fce4ec",
									"& .MuiLinearProgress-bar": {
										borderRadius: 5,
										backgroundColor: "#8e24aa",
									},
								}}
							/>
						</Box>

						{/* SQL */}
						<Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
							<Typography variant="subtitle1" fontWeight="bold">
								SQL
							</Typography>
							<LinearProgress
								variant="determinate"
								value={25}
								sx={{
									height: 12,
									borderRadius: 5,
									backgroundColor: "#e3f2fd",
									"& .MuiLinearProgress-bar": {
										borderRadius: 5,
										backgroundColor: "#0288d1",
									},
								}}
							/>
						</Box>
					</Box>
				</CardContent>
			</Card>
		</section>
	);
};

export default Technologies;
