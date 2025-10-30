import type React from "react";
import ProjectDetail from "../ProjectDetail";
import { iptvMetadata } from "./metadata";

interface IPTVProjectProps {
	onBack: () => void;
}

const IPTVProject: React.FC<IPTVProjectProps> = ({ onBack }) => {
	return <ProjectDetail metadata={iptvMetadata} onBack={onBack} />;
};

export default IPTVProject;
