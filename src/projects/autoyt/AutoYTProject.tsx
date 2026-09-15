import type React from "react";
import ProjectDetail from "../ProjectDetail";
import { autoytMetadata } from "./metadata";

interface AutoYTProjectProps {
	onBack: () => void;
}

const AutoYTProject: React.FC<AutoYTProjectProps> = ({ onBack }) => {
	return <ProjectDetail metadata={autoytMetadata} onBack={onBack} />;
};

export default AutoYTProject;
