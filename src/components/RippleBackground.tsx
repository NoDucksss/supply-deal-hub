import { useState, useEffect } from "react";

const RippleBackground = () => {
  const [ripples, setRipples] = useState<Array<{ x: number; y: number; id: number }>>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Create ripple effect
      const newRipple = { x: e.clientX, y: e.clientY, id: Date.now() };
      setRipples(prev => [...prev, newRipple]);
      
      // Remove ripple after animation completes
      setTimeout(() => {
        setRipples(prev => prev.filter(r => r.id !== newRipple.id));
      }, 1500);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {ripples.map(ripple => (
        <div
          key={ripple.id}
          className="absolute"
          style={{
            left: ripple.x,
            top: ripple.y,
            transform: 'translate(-50%, -50%)',
          }}
        >
          <div 
            className="absolute inset-0 rounded-full"
            style={{
              width: '0px',
              height: '0px',
              background: 'radial-gradient(circle, rgba(169, 68, 66, 0.4) 0%, transparent 70%)',
              animation: 'ripple 1.5s ease-out forwards',
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default RippleBackground;
