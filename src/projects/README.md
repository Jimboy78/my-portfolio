# Projects System - Documentation

## Overview

This is a modular project showcase system where each project is self-contained in its own folder with all assets and code.

## Structure

```
src/projects/
├── types.ts                    # Shared TypeScript interfaces
├── ProjectDetail.tsx           # Reusable template for project details
├── ProjectsGallery.tsx         # Gallery grid view
├── ProjectsRouter.tsx          # Simple hash-based routing
├── index.ts                    # Central registry of all projects
│
├── iptv-mobile/               # Example project folder
│   ├── IPTVProject.tsx        # Project detail component
│   ├── metadata.ts            # Project data
│   └── assets/                # Videos, images, etc.
│       ├── demo.mp4
│       ├── screenshot1.png
│       └── ...
│
└── your-new-project/          # Your next project!
    ├── YourProject.tsx
    ├── metadata.ts
    └── assets/
```

## How to Add a New Project

### Step 1: Create Project Folder

Create a new folder under `src/projects/` with your project name:

```
src/projects/your-project-name/
```

### Step 2: Create metadata.ts

Copy from `iptv-mobile/metadata.ts` and customize:

```typescript
// src/projects/your-project-name/metadata.ts
import { YourIcon } from "lucide-react";
import type { ProjectMetadata } from "../types";

export const yourProjectMetadata: ProjectMetadata = {
  id: "your-project-name",  // URL slug
  title: "Your Project Title",
  subtitle: "Short description for gallery cards",
  period: "Jan 2024 - Present",
  status: "production", // or "development" | "completed"

  // Optional: Hero video or image
  heroVideo: "/projects/your-project-name/demo.mp4",
  heroImage: "/projects/your-project-name/hero.png",

  description: "Detailed description of your project...",

  // Stats (optional but recommended)
  stats: [
    { value: "100+", label: "Users" },
    { value: "99%", label: "Uptime" },
    // ... more stats
  ],

  // Overview sections
  challenge: "What problem did you solve?",
  solution: [
    "Technology choice 1",
    "Approach 2",
    "Strategy 3"
  ],
  result: "What was the outcome?",

  // Technical deep dives
  highlights: [
    {
      title: "Cool Feature #1",
      description: "Explain the feature...",
      code: `// Optional code snippet
const example = "your code here";`,
      language: "typescript"
    }
  ],

  // Screenshots
  screenshots: [
    {
      src: "/projects/your-project-name/screenshot1.png",
      alt: "Description",
      caption: "Optional caption"
    }
  ],

  // Tech stack
  techStack: [
    "React", "TypeScript", "Node.js"
    // ... your technologies
  ],

  // Visual styling
  gradient: "from-blue-600 to-purple-600",  // Tailwind gradient
  icon: YourIcon,  // Lucide icon

  // Links (optional)
  links: [
    {
      label: "View on GitHub",
      url: "https://github.com/...",
      type: "github"
    }
  ],

  // Gallery thumbnail
  thumbnailImage: "/projects/your-project-name/thumbnail.png",
  featured: true  // Show in featured section
};
```

### Step 3: Create Project Component

```typescript
// src/projects/your-project-name/YourProject.tsx
import type React from "react";
import ProjectDetail from "../ProjectDetail";
import { yourProjectMetadata } from "./metadata";

interface YourProjectProps {
  onBack: () => void;
}

const YourProject: React.FC<YourProjectProps> = ({ onBack }) => {
  return <ProjectDetail metadata={yourProjectMetadata} onBack={onBack} />;
};

export default YourProject;
```

### Step 4: Add Assets

Place your media files in `assets/` folder:

```
src/projects/your-project-name/assets/
  ├── demo.mp4           # Hero video (optional)
  ├── hero.png           # Hero image fallback
  ├── thumbnail.png      # Gallery thumbnail
  ├── screenshot1.png
  ├── screenshot2.png
  └── ...
```

**Important:** Reference assets relative to `public/` or import them:

```typescript
// If placing in public/projects/:
heroVideo: "/projects/your-project-name/demo.mp4"

// Or import and use:
import heroImage from "./assets/hero.png";
heroImage: heroImage
```

### Step 5: Register Project

Add your project to `src/projects/index.ts`:

```typescript
import YourProject from "./your-project-name/YourProject";
import { yourProjectMetadata } from "./your-project-name/metadata";

export const allProjects: Array<Project> = [
  {
    metadata: iptvMetadata,
    DetailComponent: IPTVProject,
  },
  // Add your project here:
  {
    metadata: yourProjectMetadata,
    DetailComponent: YourProject,
  },
];
```

### Step 6: Done! 🎉

Your project is now live at:
- Gallery: `localhost:5173/#projects`
- Detail: `localhost:5173/#project/your-project-name`

## Tips

### Video Best Practices

- **Format:** MP4 (H.264)
- **Resolution:** 1920x1080 or 1280x720
- **Duration:** 30-60 seconds for demos
- **Size:** Keep under 10MB (compress with HandBrake)
- **Thumbnail:** Add `poster` attribute or use GIF

### Screenshots

- **Format:** PNG or WebP
- **Size:** Optimize with TinyPNG
- **Resolution:** 2x for retina (1440x900 → 2880x1800)
- **Consistency:** Same aspect ratio across project

### Code Snippets

Keep snippets short (10-30 lines max):
```typescript
highlights: [{
  title: "Feature Name",
  description: "Explanation...",
  code: `// Keep it concise
const key = "important code";`,
  language: "typescript"
}]
```

## Customization

### Custom Detail Page

If you need a completely custom layout (not using the template):

```typescript
// YourProject.tsx
const YourProject: React.FC<YourProjectProps> = ({ onBack }) => {
  return (
    <div>
      <button onClick={onBack}>Back</button>
      {/* Your custom layout */}
    </div>
  );
};
```

### Adding New Fields

Edit `src/projects/types.ts` to add new metadata fields:

```typescript
export interface ProjectMetadata {
  // ... existing fields
  yourNewField?: string;  // Add here
}
```

Then update `ProjectDetail.tsx` to render it.

## Troubleshooting

**Project not showing up?**
- Check `index.ts` - did you add it to `allProjects`?
- Check `id` field matches URL slug
- Verify imports are correct

**Images not loading?**
- Check path is correct (relative to `public/`)
- Ensure files exist in the right location
- Check file extensions match

**Routing not working?**
- Clear browser cache
- Check console for errors
- Verify hash starts with `#projects` or `#project/`

## Examples

See `iptv-mobile/` for a complete working example.
