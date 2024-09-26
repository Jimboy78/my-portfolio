import type { ReactNode } from "react";
// eslint-disable-next-line no-duplicate-imports
import { createContext, useContext, useState } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
	theme: Theme;
	toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({
	children,
}): JSX.Element => {
	// Añadir tipo de retorno
	const [theme, setTheme] = useState<Theme>("dark"); // Por defecto, el tema oscuro

	const toggleTheme = (): void => {
		// Añadir tipo de retorno
		setTheme((previous) => (previous === "dark" ? "light" : "dark"));
	};

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = (): ThemeContextType => {
	// Añadir tipo de retorno
	const context = useContext(ThemeContext);
	if (context === undefined) {
		throw new Error("useTheme must be used within a ThemeProvider");
	}
	return context;
};
