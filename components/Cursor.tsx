import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect } from 'react';

export default function Cursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <motion.div
      className="fixed left-0 top-0 z-[9999] h-8 w-8 rounded-full bg-primary/50 pointer-events-none"
      style={{
        translateX: cursorXSpring,
        translateY: cursorYSpring,
      }}
    />
  );
}
