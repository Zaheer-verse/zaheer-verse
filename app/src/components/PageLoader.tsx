import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const MIN_LOADER_TIME = 1350;

const PageLoader = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const start = performance.now();

    const completeLoader = () => {
      const elapsed = performance.now() - start;
      const remaining = Math.max(0, MIN_LOADER_TIME - elapsed);
      const timer = window.setTimeout(() => setIsVisible(false), remaining);
      return () => window.clearTimeout(timer);
    };

    if (document.readyState === 'complete') {
      return completeLoader();
    }

    const handleLoad = () => completeLoader();
    window.addEventListener('load', handleLoad, { once: true });

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="pointer-events-none fixed inset-0 z-[120] flex items-center justify-center overflow-hidden bg-background"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }}
        >
          <div className="absolute inset-0 animated-bg opacity-60" />
          <div className="absolute inset-0 site-radial-bg opacity-80" />

          <motion.div
            className="relative flex flex-col items-center gap-7"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative flex h-28 w-28 items-center justify-center">
              <motion.div
                className="absolute inset-0 rounded-full border border-white/10"
                animate={{ scale: [0.92, 1.08, 0.92], opacity: [0.4, 0.9, 0.4] }}
                transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
              />
              <motion.div
                className="absolute inset-3 rounded-full border border-indigo-400/30"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              />
              <motion.div
                className="absolute inset-6 rounded-full border border-purple-400/20"
                animate={{ rotate: -360 }}
                transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
              />
              <motion.div
                className="flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500 text-2xl font-semibold text-white shadow-[0_0_45px_rgba(99,102,241,0.35)]"
                animate={{ rotate: [0, -4, 4, 0], scale: [1, 1.03, 1] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                Z
              </motion.div>
            </div>

            <div className="space-y-3 text-center">
              <motion.p
                className="text-sm uppercase tracking-[0.45em] text-slate-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                Zaheer Verse
              </motion.p>
              <div className="mx-auto h-[2px] w-40 overflow-hidden rounded-full bg-white/8">
                <motion.div
                  className="h-full w-1/2 rounded-full bg-gradient-to-r from-indigo-400 via-violet-400 to-fuchsia-400"
                  initial={{ x: '-110%' }}
                  animate={{ x: '210%' }}
                  transition={{ duration: 1.3, repeat: Infinity, ease: 'easeInOut' }}
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PageLoader;
