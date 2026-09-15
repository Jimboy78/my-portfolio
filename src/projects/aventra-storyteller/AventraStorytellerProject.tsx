import type React from "react";
import ProjectDetail from "../ProjectDetail";
import { aventraStorytellerMetadata } from "./metadata";

interface AventraStorytellerProjectProps {
	onBack: () => void;
}

const AventraStorytellerProject: React.FC<AventraStorytellerProjectProps> = ({
	onBack,
}) => {
	return <ProjectDetail metadata={aventraStorytellerMetadata} onBack={onBack} />;
};

export default AventraStorytellerProject;
