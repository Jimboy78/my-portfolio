import { useEffect, useState, useRef, useCallback } from "react";

const CustomCursor = (): JSX.Element => {
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
	const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
	const [isHovering, setIsHovering] = useState(false);
	const animationRef = useRef<number>();
	const mouseRef = useRef({ x: 0, y: 0 });
	const cursorRef = useRef({ x: 0, y: 0 });

	// Smooth cursor following with requestAnimationFrame
	const updateCursor = useCallback((): void => {
		const dx = mouseRef.current.x - cursorRef.current.x;
		const dy = mouseRef.current.y - cursorRef.current.y;

		cursorRef.current.x += dx * 0.12;
		cursorRef.current.y += dy * 0.12;

		setCursorPosition({
			x: cursorRef.current.x,
			y: cursorRef.current.y,
		});

		animationRef.current = requestAnimationFrame(updateCursor);
	}, []);

	useEffect(() => {
		animationRef.current = requestAnimationFrame(updateCursor);
		return (): void => {
			if (animationRef.current) {
				cancelAnimationFrame(animationRef.current);
			}
		};
	}, [updateCursor]);

	useEffect(() => {
		const handleMouseMove = (event: MouseEvent): void => {
			setMousePosition({ x: event.clientX, y: event.clientY });
			mouseRef.current = { x: event.clientX, y: event.clientY };
		};

		const handleMouseEnter = (): void => {
			setIsHovering(true);
		};
		const handleMouseLeave = (): void => {
			setIsHovering(false);
		};

		// Add event listeners for interactive elements with more specific selector
		const addListeners = (): (() => void) => {
			const interactiveElements = document.querySelectorAll(
				'button, a, [role="button"], input, textarea'
			);

			interactiveElements.forEach((element) => {
				element.addEventListener("mouseenter", handleMouseEnter);
				element.addEventListener("mouseleave", handleMouseLeave);
			});

			return (): void => {
				interactiveElements.forEach((element) => {
					element.removeEventListener("mouseenter", handleMouseEnter);
					element.removeEventListener("mouseleave", handleMouseLeave);
				});
			};
		};

		window.addEventListener("mousemove", handleMouseMove, { passive: true });
		const cleanup = addListeners();

		// Re-add listeners when DOM changes (for dynamic content)
		const observer = new MutationObserver(addListeners);
		observer.observe(document.body, { childList: true, subtree: true });

		return (): void => {
			window.removeEventListener("mousemove", handleMouseMove);
			cleanup();
			observer.disconnect();
		};
	}, []);

	return (
		<>
			{/* Cursor dot - follows mouse directly */}
			<div
				className="cursor-dot"
				style={{
					left: `${mousePosition.x}px`,
					top: `${mousePosition.y}px`,
					transform: isHovering
						? "translate(-50%, -50%) scale(2)"
						: "translate(-50%, -50%)",
				}}
			/>

			{/* Cursor outline - follows at same speed */}
			<div
				className="cursor-outline"
				style={{
					left: `${cursorPosition.x}px`,
					top: `${cursorPosition.y}px`,
					transform: isHovering
						? "translate(-50%, -50%) scale(1.5)"
						: "translate(-50%, -50%)",
					borderColor: isHovering
						? "rgba(102, 126, 234, 0.8)"
						: "rgba(102, 126, 234, 0.5)",
				}}
			/>
		</>
	);
};

export default CustomCursor;
