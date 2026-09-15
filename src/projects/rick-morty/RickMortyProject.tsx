import type React from "react";
import ProjectDetail from "../ProjectDetail";
import { rickMortyMetadata } from "./metadata";

interface RickMortyProjectProps {
	onBack: () => void;
}

const RickMortyProject: React.FC<RickMortyProjectProps> = ({ onBack }) => {
	return <ProjectDetail metadata={rickMortyMetadata} onBack={onBack} />;
};

export default RickMortyProject;
