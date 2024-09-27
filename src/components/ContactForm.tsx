/* eslint-disable @typescript-eslint/no-misused-promises */
import type React from "react";
// eslint-disable-next-line no-duplicate-imports
import { useState } from "react";
import {
	TextField,
	Button,
	Container,
	Typography,
	Box,
	Alert,
	CircularProgress,
} from "@mui/material";
import emailjs from "emailjs-com";

const ContactForm: React.FC = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [loading, setLoading] = useState(false); // Estado para spinner
	const [successMessage, setSuccessMessage] = useState("");
	const [errorMessage, setErrorMessage] = useState("");

	// Definición de la interfaz para la respuesta
	interface EmailResponse {
		status: number;
		text?: string; // Otras propiedades que puedas necesitar
	}

	const handleSubmit = async (event: React.FormEvent): Promise<void> => {
		event.preventDefault();
		setLoading(true);
		setSuccessMessage("");
		setErrorMessage("");

		const templateParameters = {
			name,
			email,
			message,
		};

		try {
			// Enviar el mensaje a ti
			const response: EmailResponse = await emailjs.send(
				"service_w3tt1l8",
				"template_i7sspdb",
				templateParameters,
				"KQOMCjyVD-C5qlXmC"
			);

			if (response.status === 200) {
				setLoading(false);
				setSuccessMessage("¡Mensaje enviado con éxito!");
				setName("");
				setEmail("");
				setMessage("");
			} else {
				setLoading(false);
				setErrorMessage(
					"Ocurrió un error al enviar el mensaje. Intenta de nuevo."
				);
			}
		} catch (error) {
			setLoading(false);
			setErrorMessage(
				"Ocurrió un error al enviar el mensaje. Intenta de nuevo."
			);
			console.error("Error:", error);
		}
	};

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
					sx={{ color: "white", marginBottom: "2rem" }}
				>
					Get in Touch
				</Typography>
				<form
					noValidate
					autoComplete="off"
					className="bg-gray-800 p-8 rounded-xl"
					onSubmit={handleSubmit}
				>
					<Box mb={3}>
						<TextField
							fullWidth
							id="name"
							label="Name"
							variant="outlined"
							required
							sx={{ backgroundColor: "white", borderRadius: "5px" }}
							value={name}
							onChange={(event_) => {
								setName(event_.target.value);
							}}
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
							value={email}
							onChange={(event_) => {
								setEmail(event_.target.value);
							}}
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
							value={message}
							onChange={(event_) => {
								setMessage(event_.target.value);
							}}
						/>
					</Box>
					{/* Mostrar mensaje de éxito o error */}
					{successMessage && (
						<Alert severity="success" sx={{ marginBottom: "1rem" }}>
							{successMessage}
						</Alert>
					)}
					{errorMessage && (
						<Alert severity="error" sx={{ marginBottom: "1rem" }}>
							{errorMessage}
						</Alert>
					)}
					<Box display="flex" justifyContent="center">
						<Button
							type="submit"
							variant="contained"
							color="primary"
							size="large"
							sx={{ padding: "0.75rem 3rem" }}
							disabled={loading} // Desactiva el botón mientras carga
						>
							{loading ? (
								<CircularProgress size={24} sx={{ color: "white" }} />
							) : (
								"Send Message"
							)}
						</Button>
					</Box>
				</form>
			</Container>
		</section>
	);
};

export default ContactForm;
