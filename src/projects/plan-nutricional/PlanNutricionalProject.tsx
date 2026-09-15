import type React from "react";
import ProjectDetail from "../ProjectDetail";
import { planNutricionalMetadata } from "./metadata";

interface PlanNutricionalProjectProps {
	onBack: () => void;
}

const PlanNutricionalProject: React.FC<PlanNutricionalProjectProps> = ({
	onBack,
}) => {
	return <ProjectDetail metadata={planNutricionalMetadata} onBack={onBack} />;
};

export default PlanNutricionalProject;
