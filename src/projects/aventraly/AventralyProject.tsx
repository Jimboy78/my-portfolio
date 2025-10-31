import type React from "react";
import ProjectDetail from "../ProjectDetail";
import { aventralyMetadata } from "./metadata";

interface AventralyProjectProps {
	onBack: () => void;
}

const AventralyProject: React.FC<AventralyProjectProps> = ({ onBack }) => {
	return <ProjectDetail metadata={aventralyMetadata} onBack={onBack} />;
};

export default AventralyProject;
