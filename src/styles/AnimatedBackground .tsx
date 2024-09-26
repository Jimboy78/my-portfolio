import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import type { Engine, Container } from "@tsparticles/engine";

const AnimatedBackground = () => {
	const containerRef = useRef<Container | null>(null);
	const [init, setInit] = useState(false);

	useEffect(() => {
		if (init) {
			return;
		}

		void initParticlesEngine(async (engine: Engine) => {
			await loadFull(engine);
		}).then(() => {
			setInit(true);
		});
	}, [init]);

	const particlesLoaded = useCallback(
		async (container?: Container): Promise<void> => {
			containerRef.current = container || null;
			window.particlesContainer = container;
			return Promise.resolve();
		},
		[]
	);

	const options = useMemo(
		() => ({
			background: {
				color: "#140026",
			},
			fullScreen: {
				zIndex: -1,
			},
			particles: {
				color: {
					value: "#ffffff",
				},
				links: {
					enable: false,
					opacity: 0.2,
				},
				move: {
					enable: true,
					speed: 0.05,
				},
				number: {
					value: 300,
				},
				opacity: {
					value: 0.2,
				},
				size: {
					value: { min: 0.1, max: 2 },
				},
			},
			detectRetina: true,
		}),
		[]
	);

	return (
		<div className="absolute inset-0 -z-10">
			{/* Asegúrate de que esté al fondo */}
			{init && (
				<Particles
					id="tsparticles"
					particlesLoaded={particlesLoaded}
					options={options}
				/>
			)}
		</div>
	);
};

export default AnimatedBackground;
