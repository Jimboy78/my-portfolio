import type React from "react";
import ProjectDetail from "../ProjectDetail";
import { earthquakesMetadata } from "./metadata";

interface EarthquakesProjectProps {
	onBack: () => void;
}

const EarthquakesProject: React.FC<EarthquakesProjectProps> = ({ onBack }) => {
	return <ProjectDetail metadata={earthquakesMetadata} onBack={onBack} />;
};

export default EarthquakesProject;
