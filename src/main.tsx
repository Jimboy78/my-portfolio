import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "./styles/ThemeContext";
import "./styles/tailwind.css";
import AnimatedBackground from "./styles/AnimatedBackground ";

ReactDOM.createRoot(document.querySelector("#root") as HTMLElement).render(
	<React.StrictMode>
		<ThemeProvider>
			<AnimatedBackground />;
			<App />
		</ThemeProvider>
	</React.StrictMode>
);
