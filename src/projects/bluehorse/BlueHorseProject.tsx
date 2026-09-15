import type React from "react";
import ProjectDetail from "../ProjectDetail";
import { bluehorseMetadata } from "./metadata";

interface BlueHorseProjectProps {
	onBack: () => void;
}

const BlueHorseProject: React.FC<BlueHorseProjectProps> = ({ onBack }) => {
	return <ProjectDetail metadata={bluehorseMetadata} onBack={onBack} />;
};

export default BlueHorseProject;
