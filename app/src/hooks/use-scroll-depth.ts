import { useRef } from 'react';
import { useReducedMotion, useScroll, useTransform } from 'framer-motion';

type ScrollDepthOptions = {
  distance?: number;
  tilt?: number;
  scale?: number;
};

export const useScrollDepth = <T extends HTMLElement>({
  distance = 48,
  tilt = 5,
  scale = 0.025,
}: ScrollDepthOptions = {}) => {
  const ref = useRef<T>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const contentY = useTransform(scrollYProgress, [0, 0.5, 1], [distance, 0, -distance * 0.7]);
  const contentRotateX = useTransform(scrollYProgress, [0, 0.5, 1], [tilt, 0, -tilt]);
  const contentScale = useTransform(scrollYProgress, [0, 0.5, 1], [1 - scale, 1, 1 - scale]);
  const accentY = useTransform(scrollYProgress, [0, 1], [distance * 0.7, -distance * 0.7]);

  return {
    ref,
    stageStyle: reduceMotion ? undefined : { perspective: 1400 },
    contentStyle: reduceMotion
      ? undefined
      : {
          y: contentY,
          rotateX: contentRotateX,
          scale: contentScale,
          transformPerspective: 1400,
        },
    accentStyle: reduceMotion ? undefined : { y: accentY },
  };
};
