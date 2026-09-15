import { Activity, Clock, Globe2, Waves } from "lucide-react";
import type { ProjectMetadata } from "../types";
import screenshot from "./assets/screenshot.jpg";
import weekView from "./assets/week-view.jpg";
import detail from "./assets/detail.jpg";

export const earthquakesMetadata: ProjectMetadata = {
	id: "earthquakes",
	title: "Seismic — Earthquake Tracker",
	subtitle: "Live global earthquake monitor · React + Ruby on Rails",
	period: "2024 — 2026",
	status: "production",

	description:
		"A live earthquake monitor on real-time USGS data: a dark interactive world map with magnitude-scaled markers and shockwave pulses, filters and auto-refresh, magnitude analytics, a detailed page per event and a time-lapse replay that plays the whole window back with ripples, a scrubbable seismograph and optional sonification. Backed by a Ruby on Rails API that ingests the USGS catalog into PostgreSQL and stores comments per earthquake.",

	heroImage: screenshot,

	stats: [
		{ value: "60s", label: "Auto-refresh", icon: Clock },
		{ value: "4", label: "Time windows", icon: Activity },
		{ value: "250 km", label: "Nearby-activity radius", icon: Globe2 },
		{ value: "2", label: "Data modes (static / Rails API)", icon: Waves },
	],

	challenge:
		"The original take-home had a plain paginated table, a frontend hardcoded to localhost and an API with real bugs (the show action was declared as private, and timestamps were written to the wrong column type) — so it could never be demoed. The goal was a product people would actually open, deployable as a static site, without discarding the Rails backend.",

	solution: [
		"Frontend reads the USGS GeoJSON feeds directly, so it deploys to Vercel as a static site; comments switch to the Rails API when REACT_APP_API_URL is set",
		"Leaflet world map with magnitude-colored, magnitude-scaled markers, animated shockwaves on M4.5+ events and fly-to from the event list",
		"Time-window and magnitude-feed switches, min-magnitude slider, place search, latest/strongest sorting",
		"60-second auto-refresh that diffs event ids and raises toasts for newly detected earthquakes",
		"Replay mode: plays every filtered event in chronological order at three speeds — map, stats and list follow the playhead while fresh events emit one-shot shockwave rings",
		"Canvas seismograph built from a damped burst per quake, colored by magnitude, that lights up as it plays and doubles as the scrubber",
		"Web Audio sonification: each quake crossed by the playhead becomes a tone — stronger events are lower, louder and longer",
		"Stats row (events, strongest, average depth, felt reports, tsunami flags) with a magnitude histogram",
		"Event page with glowing magnitude, PAGER/tsunami chips, a depth gauge from surface to upper mantle, regional mini map and nearby activity via the USGS FDSN event API",
		"Rails fixes: public show action, lookups by USGS id, epoch-ms timestamps in the ingestion rake task, env-driven CORS origins",
	],

	result:
		"Turned a non-runnable take-home into a live, public monitor with a clear upgrade path: the same UI persists comments through the Rails API when it's deployed alongside.",

	highlights: [
		{
			title: "New-event detection on refresh",
			description:
				"Each poll compares the feed's event ids against the previous set; anything unseen triggers a toast, so the dashboard behaves like a live feed without a websocket.",
			code: `fetchFeed(feed, period, signal).then(({ quakes: list }) => {
  if (knownIds.current) {
    const fresh = list.filter((q) => !knownIds.current.has(q.id));
    if (fresh.length === 1) setToast(\`New M\${fmtMag(fresh[0].magnitude)} — \${fresh[0].place}\`);
    else if (fresh.length > 1) setToast(\`\${fresh.length} new earthquakes detected\`);
  }
  knownIds.current = new Set(list.map((q) => q.id));
  setQuakes(list);
});`,
			language: "javascript",
		},
		{
			title: "Replay at 10 fps without melting the map",
			description:
				"The playhead advances every 100 ms, so thousands of Leaflet markers would restyle on each tick. Markers are memoized per quake and ring icons are cached by color and size, so a tick only mounts the newly revealed events and their shockwaves play exactly once.",
			code: `const QuakeDot = memo(function QuakeDot({ quake, isSelected, onSelect }) { /* CircleMarker */ });

function cachedIcon(kind, color, rawSize) {
  const key = \`\${kind}|\${color}|\${Math.round(rawSize)}\`;
  if (!iconCache.has(key)) iconCache.set(key, L.divIcon({ className: \`\${kind}-icon\`, /* rings */ }));
  return iconCache.get(key); // same object → Leaflet never swaps the DOM node
}`,
			language: "javascript",
		},
		{
			title: "Idempotent USGS ingestion in Rails",
			description:
				"A rake task upserts the last 30 days of events keyed by the USGS event id, so it can run on a schedule without duplicates. Comments and event lookups accept either the internal id or the USGS id, which lets the static frontend and the API share URLs.",
			code: `earthquake = Earthquake.find_or_initialize_by(external_id: feature['id'])
earthquake.assign_attributes(
  magnitude: feature['properties']['mag'],
  time: feature['properties']['time'], # epoch ms — bigint column
  longitude: feature['geometry']['coordinates'][0],
  latitude: feature['geometry']['coordinates'][1],
  depth: feature['geometry']['coordinates'][2]
)
earthquake.save if earthquake.changed?`,
			language: "ruby",
		},
		{
			title: "Pluggable comment backend",
			description:
				"One small service module decides where comments live: the Rails API when configured, otherwise localStorage — the components never know the difference.",
		},
	],

	screenshots: [
		{ src: screenshot, alt: "Seismic live dashboard", caption: "Live 24h view: stats, magnitude histogram, dark world map and event feed" },
		{ src: weekView, alt: "7-day view sorted by strength", caption: "7-day window sorted by strongest events, with shockwave pulses" },
		{ src: detail, alt: "Earthquake event page", caption: "Event page: magnitude, alert chips, depth gauge and regional map" },
	],

	techStack: ["React 18", "React Router", "Leaflet", "Canvas API", "Web Audio API", "Ruby on Rails 7", "PostgreSQL", "USGS API", "Vercel"],

	gradient: "from-amber-600 via-orange-600 to-red-600",
	icon: Waves,
	thumbnailImage: screenshot,

	links: [
		{
			label: "Live Demo",
			url: "https://seismic-monitor-eight.vercel.app",
			type: "demo",
		},
		{
			label: "View on GitHub",
			url: "https://github.com/Jimboy78/Frogmi-ruby-task",
			type: "github",
		},
	],

	featured: false,
};
