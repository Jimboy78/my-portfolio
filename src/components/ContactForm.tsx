import type * as React from "react";
import { TextField, Button, Container, Typography, Box } from "@mui/material";

const ContactForm: React.FC = () => {
	return (
		<section
			id="contact"
			style={{ padding: "3rem 0", backgroundColor: "transparent" }}
		>
			<Container maxWidth="sm">
				<Typography
					variant="h4"
					align="center"
					gutterBottom
					sx={{
						color: "white",
						marginBottom: "2rem",
					}}
				>
					Get in Touch
				</Typography>
				<form
					noValidate
					autoComplete="off"
					className="bg-gray-800 p-8 rounded-xl"
				>
					<Box mb={3}>
						<TextField
							fullWidth
							id="name"
							label="Name"
							variant="outlined"
							required
							sx={{ backgroundColor: "white", borderRadius: "5px" }}
						/>
					</Box>
					<Box mb={3}>
						<TextField
							fullWidth
							id="email"
							label="Email"
							type="email"
							variant="outlined"
							required
							sx={{ backgroundColor: "white", borderRadius: "5px" }}
						/>
					</Box>
					<Box mb={3}>
						<TextField
							fullWidth
							id="message"
							label="Message"
							multiline
							rows={4}
							variant="outlined"
							required
							sx={{ backgroundColor: "white", borderRadius: "5px" }}
						/>
					</Box>
					<Box display="flex" justifyContent="center">
						<Button
							type="submit"
							variant="contained"
							color="primary"
							size="large"
							sx={{ padding: "0.75rem 3rem" }}
						>
							Send Message
						</Button>
					</Box>
				</form>
			</Container>
		</section>
	);
};

export default ContactForm;
