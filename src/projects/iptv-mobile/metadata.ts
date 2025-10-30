import { Tv, Users, Zap, TrendingUp, Code2 } from "lucide-react";
import type { ProjectMetadata } from "../types";

// Import assets
import bannerImage from "./assets/banner.png";
import previewVideo from "./assets/IPTV-Preview.mp4";
import loginScreen from "./assets/Login.jpg";
import homeScreen from "./assets/Home-sinC.jpg";
import categoriesScreen from "./assets/Categories.jpg";
import channelsScreen from "./assets/Category-Channels-sinC.jpg";
import favoritesScreen from "./assets/Favorites-sinC.jpg";
import settingsScreen from "./assets/Settings.jpg";

export const iptvMetadata: ProjectMetadata = {
	id: "iptv-mobile",
	title: "IPTV Streaming Platform",
	subtitle: "Production mobile + TV app serving 500+ users",
	period: "July 2025 - Present",
	status: "production",

	// Hero
	bannerImage: bannerImage,
	heroVideo: previewVideo,
	heroImage: homeScreen,
	description:
		"Built complete IPTV streaming application from scratch with 100% ownership of architecture, UI/UX design, and technical decisions. Deployed to 500+ users in live city event with zero crashes.",

	// Stats
	stats: [
		{
			value: "500+",
			label: "Active Users",
			icon: Users,
		},
		{
			value: "0",
			label: "Launch Crashes",
			icon: TrendingUp,
		},
		{
			value: "60%",
			label: "API Reduction",
			icon: Zap,
		},
		{
			value: "5x",
			label: "Faster Rendering",
			icon: Code2,
		},
	],

	// Overview
	challenge:
		"Build production-ready IPTV streaming platform for live city event in 6 months, with no existing codebase or team.",

	solution: [
		"React Native + Expo SDK 53 for rapid cross-platform development",
		"Two-tier caching system (memory + persistent) for optimal performance",
		"FlashList implementation for 5x faster list rendering",
		"Custom patches for expo-video library bugs (PiP/fullscreen transitions)",
		"Companion TV app (Android TV/tvOS) sharing 80% codebase",
	],

	result:
		"Successfully deployed to 500+ users in live city event with zero crashes. Achieved 60% reduction in API calls through intelligent caching and 5x performance improvement in list rendering.",

	// Technical highlights
	highlights: [
		{
			title: "Two-Tier Caching System",
			description:
				"Implemented intelligent caching strategy combining in-memory cache for immediate access and persistent storage for offline capability. Reduced API calls by 60% while maintaining data freshness.",
			code: `// Cache implementation example
const CacheService = {
  memory: new Map(),

  async get(key: string) {
    // Try memory first
    if (this.memory.has(key)) {
      return this.memory.get(key);
    }
    // Fallback to persistent storage
    const data = await AsyncStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  },

  async set(key: string, value: any) {
    this.memory.set(key, value);
    await AsyncStorage.setItem(key, JSON.stringify(value));
  }
};`,
			language: "typescript",
		},
		{
			title: "Fixed expo-video Library Bugs",
			description:
				"Debugged and patched critical production bugs in expo-video library related to Picture-in-Picture and fullscreen transitions. Required diving into dependency source code and implementing custom workarounds.",
		},
		{
			title: "Performance Optimization with FlashList",
			description:
				"Migrated from FlatList to FlashList achieving 5x faster rendering performance for large channel lists. Implemented lazy loading and virtualization strategies for optimal memory usage.",
		},
		{
			title: "Cross-Platform TV Application",
			description:
				"Built companion Android TV and tvOS application with focus-based navigation and D-PAD controls. Achieved 80% code reuse between mobile and TV platforms through smart architecture.",
		},
	],

	// Screenshots
	screenshots: [
		{
			src: loginScreen,
			alt: "IPTV Mobile App - Login Screen",
			caption: "Secure authentication with user credentials and server configuration",
		},
		{
			src: homeScreen,
			alt: "IPTV Mobile App - Home Screen",
			caption: "Main interface with live channels grid and quick access navigation",
		},
		{
			src: categoriesScreen,
			alt: "IPTV Mobile App - Categories View",
			caption: "Channel categories organized for easy browsing",
		},
		{
			src: channelsScreen,
			alt: "IPTV Mobile App - Channel List",
			caption: "Optimized channel list with FlashList for 5x faster rendering",
		},
		{
			src: favoritesScreen,
			alt: "IPTV Mobile App - Favorites",
			caption: "User favorites with persistent storage and quick access",
		},
		{
			src: settingsScreen,
			alt: "IPTV Mobile App - Settings",
			caption: "App configuration and user preferences management",
		},
	],

	// Tech stack
	techStack: [
		"React Native 0.79",
		"Expo SDK 53",
		"TypeScript",
		"expo-video",
		"expo-router",
		"FlashList",
		"AsyncStorage",
		"SecureStore",
		"Sentry",
		"EAS Build",
	],

	// Visual
	gradient: "from-purple-600 to-blue-600",
	icon: Tv,

	// Links
	links: [
		// Uncomment and add your actual links
		// {
		// 	label: "View on GitHub",
		// 	url: "https://github.com/yourusername/iptv-mobile",
		// 	type: "github",
		// },
		// {
		// 	label: "Technical Documentation",
		// 	url: "#",
		// 	type: "docs",
		// },
	],

	// Gallery preview
	thumbnailVideo: previewVideo,
	thumbnailImage: homeScreen,
	featured: true,
};
