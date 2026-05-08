import { motion, type MotionProps, type Variants } from 'framer-motion';
import type { ReactNode } from 'react';

type RevealProps = MotionProps & {
  children: ReactNode;
  className?: string;
  delay?: number;
  distance?: number;
};

export const revealVariants = (distance = 26): Variants => ({
  hidden: {
    opacity: 0,
    y: distance,
    filter: 'blur(12px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
});

const Reveal = ({ children, className, delay = 0, distance = 26, ...props }: RevealProps) => (
  <motion.div
    className={className}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    variants={revealVariants(distance)}
    transition={{ delay }}
    {...props}
  >
    {children}
  </motion.div>
);

export default Reveal;
