#!/bin/bash

# Script to create a new project folder structure
# Usage: ./create-project.sh your-project-name "Your Project Title"

if [ -z "$1" ]; then
  echo "Usage: ./create-project.sh <project-id> [\"Project Title\"]"
  echo "Example: ./create-project.sh my-app \"My Amazing App\""
  exit 1
fi

PROJECT_ID=$1
PROJECT_TITLE=${2:-"$PROJECT_ID"}
PROJECT_DIR="src/projects/$PROJECT_ID"

# Convert kebab-case to PascalCase for component name
COMPONENT_NAME=$(echo "$PROJECT_ID" | sed -r 's/(^|-)(\w)/\U\2/g')

echo "Creating project: $PROJECT_ID"
echo "Component name: ${COMPONENT_NAME}Project"
echo "Title: $PROJECT_TITLE"

# Create project directory
mkdir -p "$PROJECT_DIR/assets"

# Create metadata.ts
cat > "$PROJECT_DIR/metadata.ts" << METADATA
import { Code } from "lucide-react";
import type { ProjectMetadata } from "../types";

export const ${PROJECT_ID}Metadata: ProjectMetadata = {
	id: "${PROJECT_ID}",
	title: "${PROJECT_TITLE}",
	subtitle: "Short description for cards",
	period: "Month YYYY - Present",
	status: "development",

	// heroVideo: "/projects/${PROJECT_ID}/demo.mp4",
	heroImage: "/perfil-photo.jpeg", // Replace with your image
	
	description:
		"Detailed description of your project. Explain what it does and why it matters.",

	stats: [
		{
			value: "100+",
			label: "Metric 1",
		},
		{
			value: "99%",
			label: "Metric 2",
		},
	],

	challenge: "What problem did you solve?",
	
	solution: [
		"Approach 1",
		"Technology choice 2",
		"Strategy 3",
	],

	result: "What was the outcome? Include metrics if possible.",

	highlights: [
		{
			title: "Technical Achievement #1",
			description: "Explain what you built and how it works.",
		},
	],

	screenshots: [
		{
			src: "/perfil-photo.jpeg", // Replace with actual screenshot
			alt: "${PROJECT_TITLE} Screenshot",
			caption: "Main interface",
		},
	],

	techStack: [
		"React",
		"TypeScript",
		// Add your technologies
	],

	gradient: "from-blue-600 to-purple-600",
	icon: Code,

	thumbnailImage: "/perfil-photo.jpeg", // Replace with thumbnail
	featured: false,
};
METADATA

# Create component file
cat > "$PROJECT_DIR/${COMPONENT_NAME}Project.tsx" << COMPONENT
import type React from "react";
import ProjectDetail from "../ProjectDetail";
import { ${PROJECT_ID}Metadata } from "./metadata";

interface ${COMPONENT_NAME}ProjectProps {
	onBack: () => void;
}

const ${COMPONENT_NAME}Project: React.FC<${COMPONENT_NAME}ProjectProps> = ({ onBack }) => {
	return <ProjectDetail metadata={${PROJECT_ID}Metadata} onBack={onBack} />;
};

export default ${COMPONENT_NAME}Project;
COMPONENT

# Create assets README
cat > "$PROJECT_DIR/assets/README.md" << ASSETS
# Assets for ${PROJECT_TITLE}

Place your project media files here:

- \`demo.mp4\` - Hero video (30-60 seconds)
- \`hero.png\` - Hero image (1920x1080)
- \`thumbnail.png\` - Gallery thumbnail (600x400)
- \`screenshot1.png\` - Screenshots
- \`screenshot2.png\`
- etc.

Update the paths in \`metadata.ts\` to reference these files.
ASSETS

echo ""
echo "✅ Project structure created!"
echo ""
echo "Next steps:"
echo "1. Add your assets to: $PROJECT_DIR/assets/"
echo "2. Edit metadata in: $PROJECT_DIR/metadata.ts"
echo "3. Register project in: src/projects/index.ts"
echo ""
echo "Add to index.ts:"
echo ""
echo "import ${COMPONENT_NAME}Project from \"./${PROJECT_ID}/${COMPONENT_NAME}Project\";"
echo "import { ${PROJECT_ID}Metadata } from \"./${PROJECT_ID}/metadata\";"
echo ""
echo "export const allProjects: Array<Project> = ["
echo "  // ... existing projects"
echo "  {"
echo "    metadata: ${PROJECT_ID}Metadata,"
echo "    DetailComponent: ${COMPONENT_NAME}Project,"
echo "  },"
echo "];"
