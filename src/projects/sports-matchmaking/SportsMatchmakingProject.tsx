import type React from "react";
import ProjectDetail from "../ProjectDetail";
import { sportsMatchmakingMetadata } from "./metadata";

interface SportsMatchmakingProjectProps {
	onBack: () => void;
}

const SportsMatchmakingProject: React.FC<SportsMatchmakingProjectProps> = ({
	onBack,
}) => {
	return <ProjectDetail metadata={sportsMatchmakingMetadata} onBack={onBack} />;
};

export default SportsMatchmakingProject;
