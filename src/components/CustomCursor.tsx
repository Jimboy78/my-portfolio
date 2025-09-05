import { useEffect, useState, useRef } from 'react';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const animationRef = useRef<number>();
  const mouseRef = useRef({ x: 0, y: 0 });
  const cursorRef = useRef({ x: 0, y: 0 });
  
  // Smooth cursor following with requestAnimationFrame
  const updateCursor = () => {
    const dx = mouseRef.current.x - cursorRef.current.x;
    const dy = mouseRef.current.y - cursorRef.current.y;
    
    cursorRef.current.x += dx * 0.12;
    cursorRef.current.y += dy * 0.12;
    
    setCursorPosition({
      x: cursorRef.current.x,
      y: cursorRef.current.y
    });
    
    animationRef.current = requestAnimationFrame(updateCursor);
  };

  useEffect(() => {
    animationRef.current = requestAnimationFrame(updateCursor);
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    // Add event listeners for interactive elements with more specific selector
    const addListeners = () => {
      const interactiveElements = document.querySelectorAll('button, a, [role="button"], input, textarea');
      
      interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', handleMouseEnter);
        el.addEventListener('mouseleave', handleMouseLeave);
      });

      return () => {
        interactiveElements.forEach(el => {
          el.removeEventListener('mouseenter', handleMouseEnter);
          el.removeEventListener('mouseleave', handleMouseLeave);
        });
      };
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    const cleanup = addListeners();

    // Re-add listeners when DOM changes (for dynamic content)
    const observer = new MutationObserver(addListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
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
          transform: isHovering ? 'translate(-50%, -50%) scale(2)' : 'translate(-50%, -50%)'
        }}
      />
      
      {/* Cursor outline - follows at same speed */}
      <div 
        className="cursor-outline"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: isHovering 
            ? 'translate(-50%, -50%) scale(1.5)' 
            : 'translate(-50%, -50%)',
          borderColor: isHovering 
            ? 'rgba(102, 126, 234, 0.8)' 
            : 'rgba(102, 126, 234, 0.5)'
        }}
      />
    </>
  );
};

export default CustomCursor;