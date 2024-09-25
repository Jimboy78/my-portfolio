/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import type { Engine } from "@tsparticles/engine";

const AnimatedBackground = () => {
	const containerRef = useRef(null);
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
		(container: null) => {
			containerRef.current = container;
			window.particlesContainer = container;
		},
		[containerRef]
	);

	const options = useMemo(
		() => ({
			background: {
				color: "#140026", // Color de fondo
			},
			fullScreen: {
				zIndex: -1, // Asegúrate de que esté detrás de otros elementos
			},
			particles: {
				color: {
					value: "#ffffff", // Color de partículas
				},
				links: {
					enable: false, // Desactivar enlaces para un efecto más granulado
					opacity: 0.2, // Opacidad de los enlaces
				},
				move: {
					enable: true,
					speed: 0.05,
				},
				number: {
					value: 300, // Aumentar el número de partículas
				},
				opacity: {
					value: 0.2, // Baja opacidad para un efecto sutil
				},
				size: {
					value: { min: 0.1, max: 2 }, // Tamaño pequeño
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
