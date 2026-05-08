import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useMemo, useState } from 'react';

type CursorVariant = 'default' | 'button' | 'card' | 'input' | 'hidden';

type CursorStyle = {
  width: number;
  height: number;
  scale: number;
  opacity: number;
  className: string;
};

const resolveVariant = (element: HTMLElement | null): CursorVariant => {
  if (!element) {
    return 'default';
  }

  if (element.closest('[data-cursor="hidden"]')) {
    return 'hidden';
  }

  if (element.closest('[data-cursor="input"], input, textarea')) {
    return 'input';
  }

  if (element.closest('[data-cursor="button"], button, a')) {
    return 'button';
  }

  if (element.closest('[data-cursor="card"]')) {
    return 'card';
  }

  return 'default';
};

const variantStyles: Record<Exclude<CursorVariant, 'hidden'>, CursorStyle> = {
  default: {
    width: 26,
    height: 26,
    scale: 1,
    opacity: 0.9,
    className: 'cursor-state-default',
  },
  button: {
    width: 38,
    height: 38,
    scale: 1.02,
    opacity: 0.9,
    className: 'cursor-state-button',
  },
  card: {
    width: 54,
    height: 54,
    scale: 1.02,
    opacity: 0.88,
    className: 'cursor-state-card',
  },
  input: {
    width: 30,
    height: 30,
    scale: 0.92,
    opacity: 0.88,
    className: 'cursor-state-input',
  },
};

const CustomCursor = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [variant, setVariant] = useState<CursorVariant>('default');
  const [isPressed, setIsPressed] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { damping: 28, stiffness: 280, mass: 0.42 });
  const springY = useSpring(y, { damping: 28, stiffness: 280, mass: 0.42 });

  useEffect(() => {
    const mediaQuery = window.matchMedia('(pointer: fine)');
    const updateCapability = () => setIsEnabled(mediaQuery.matches && window.innerWidth >= 1024);

    updateCapability();
    mediaQuery.addEventListener('change', updateCapability);
    window.addEventListener('resize', updateCapability);

    const handleMove = (event: MouseEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
      setIsVisible(true);
      setVariant(resolveVariant(event.target as HTMLElement | null));
    };

    const handleLeave = () => setIsVisible(false);
    const handleDown = () => setIsPressed(true);
    const handleUp = (event: MouseEvent) => {
      setIsPressed(false);
      setVariant(resolveVariant(event.target as HTMLElement | null));
    };

    window.addEventListener('mousemove', handleMove);
    window.addEventListener('mouseout', handleLeave);
    window.addEventListener('mousedown', handleDown);
    window.addEventListener('mouseup', handleUp);

    return () => {
      mediaQuery.removeEventListener('change', updateCapability);
      window.removeEventListener('resize', updateCapability);
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mouseout', handleLeave);
      window.removeEventListener('mousedown', handleDown);
      window.removeEventListener('mouseup', handleUp);
    };
  }, [x, y]);

  const style = useMemo(
    () => variantStyles[variant === 'hidden' ? 'default' : variant],
    [variant],
  );

  if (!isEnabled || variant === 'hidden') {
    return null;
  }

  return (
    <>
      <motion.div
        className={`custom-cursor-shell ${style.className}`}
        style={{
          x: springX,
          y: springY,
          width: style.width,
          height: style.height,
        }}
        animate={{
          opacity: isVisible ? style.opacity : 0,
          scale: isVisible ? (isPressed ? style.scale * 0.84 : style.scale) : 0.6,
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 300 }}
      />
      <motion.div
        className="custom-cursor-dot"
        style={{ x: springX, y: springY }}
        animate={{
          opacity: isVisible ? 1 : 0,
          scale: isPressed ? 0.72 : variant === 'button' ? 0.58 : variant === 'card' ? 0.78 : 1,
        }}
        transition={{ type: 'spring', damping: 34, stiffness: 340 }}
      />
    </>
  );
};

export default CustomCursor;
