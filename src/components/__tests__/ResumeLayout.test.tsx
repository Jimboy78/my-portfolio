import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import ResumeLayout from "../ResumeLayout";
import { ThemeProvider } from "../../styles/ThemeContext";

describe("ResumeLayout", () => {
	it("renderiza secciones clave", () => {
		render(
			<ThemeProvider>
				<ResumeLayout />
			</ThemeProvider>
		);

		expect(screen.getByText(/work experience/i)).toBeTruthy();
		expect(screen.getByText(/technical skills/i)).toBeTruthy();
		expect(screen.getByText(/personal projects/i)).toBeTruthy();
		expect(screen.getByText(/education/i)).toBeTruthy();
	});
});
