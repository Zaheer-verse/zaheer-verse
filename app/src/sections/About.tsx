import { useEffect, useState } from 'react';
import { motion, useInView, animate, useMotionValue, useSpring, type Variants } from 'framer-motion';
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Code,
  Globe,
  GraduationCap,
  Heart,
  Layers3,
  Mail,
  MapPin,
  Phone,
  Radar,
  Sparkles,
  Users,
} from 'lucide-react';
import Reveal from '../components/Reveal';
import { useScrollDepth } from '../hooks/use-scroll-depth';

const CountUpValue = ({ value, isActive }: { value: string; isActive: boolean }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const target = Number.parseInt(value, 10);
  const suffix = value.replace(String(target), '');

  useEffect(() => {
    if (!isActive || Number.isNaN(target)) {
      return;
    }

    const controls = animate(0, target, {
      duration: 1.4,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => setDisplayValue(Math.round(latest)),
    });

    return () => controls.stop();
  }, [isActive, target]);

  return <>{displayValue}{suffix}</>;
};

const About = () => {
  const { ref: sectionRef, contentStyle, accentStyle, stageStyle } = useScrollDepth<HTMLElement>({
    distance: 54,
    tilt: 4,
    scale: 0.02,
  });
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const [imageLoaded, setImageLoaded] = useState(false);
  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);
  const rotateX = useSpring(tiltX, { stiffness: 170, damping: 20, mass: 0.55 });
  const rotateY = useSpring(tiltY, { stiffness: 170, damping: 20, mass: 0.55 });

  const handleTilt = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;
    tiltX.set((0.5 - py) * 10);
    tiltY.set((px - 0.5) * 12);
  };

  const resetTilt = () => {
    tiltX.set(0);
    tiltY.set(0);
  };

  const stats = [
    { icon: Code, value: '3+', label: 'Years Coding' },
    { icon: Heart, value: '10+', label: 'Projects' },
    { icon: Users, value: '5+', label: 'Happy Clients' },
    { icon: Globe, value: '3', label: 'Languages' },
  ];

  const personalInfo = [
    { icon: MapPin, label: 'Location', value: 'Daska, Sialkot, Pakistan' },
    { icon: Mail, label: 'Email', value: 'zaheery991@gmail.com' },
    { icon: Phone, label: 'Phone', value: '+92 333 5398292' },
    { icon: GraduationCap, label: 'Education', value: 'BS Computer Science (in progress)' },
  ];

  const focusAreas = [
    {
      icon: BriefcaseBusiness,
      title: 'Product-minded delivery',
      description: 'I turn ideas into polished interfaces and practical systems people can genuinely use.',
    },
    {
      icon: Radar,
      title: 'Smart connected systems',
      description: 'My strongest work sits where automation, embedded thinking, and modern frontend meet.',
    },
    {
      icon: Layers3,
      title: 'Clarity over complexity',
      description: 'I prefer elegant user journeys backed by reliable implementation and clear communication.',
    },
  ];

  const profileHighlights = [
    'Computer Science student at the University of Sialkot',
    'Focused on web development, IoT prototypes, and intelligent automation',
    'Comfortable collaborating, documenting, iterating, and shipping polished work',
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8"
      style={stageStyle}
    >
      <motion.div
        className="scroll-depth-layer top-24 left-[8%] h-32 w-32 rounded-full bg-[color:var(--hero-glow)]"
        style={accentStyle}
      />
      <motion.div
        className="scroll-depth-layer bottom-12 right-[10%] h-40 w-40 rounded-full bg-[color:var(--hero-glow-alt)]"
        style={accentStyle}
      />

      <motion.div className="max-w-7xl mx-auto scroll-depth-shell" style={contentStyle}>
        <Reveal className="text-center mb-16" distance={30}>
          <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-500/10 text-indigo-400 text-sm font-medium mb-4">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Know Who <span className="gradient-text">I Am</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A passionate Computer Science student dedicated to creating innovative solutions
            through technology and smart automation.
          </p>
        </Reveal>

        <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-10 lg:gap-14 items-start">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="relative space-y-6"
          >
            <motion.div variants={itemVariants} className="relative z-10 rounded-[2rem] p-6 sm:p-8 themed-panel overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_32%)] pointer-events-none" />
              <div className="relative z-10">
                <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
                  <span className="theme-chip inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em]">
                    <Sparkles size={14} />
                    Professional Snapshot
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs text-theme-secondary theme-outline">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_16px_rgba(52,211,153,0.8)]" />
                    Open to collaboration
                  </span>
                </div>

                <motion.div
                  className="relative mx-auto w-64 h-64 sm:w-80 sm:h-80"
                  data-cursor="card"
                  data-cursor-label="About"
                  onMouseMove={handleTilt}
                  onMouseLeave={resetTilt}
                  style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
                  whileHover={{ scale: 1.015 }}
                  transition={{ type: 'spring', stiffness: 220, damping: 18 }}
                >
                  <motion.div
                    className="absolute inset-0 rounded-full border-2 border-[color:var(--line-strong)]"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  />
                  <motion.div
                    className="absolute inset-4 rounded-full border-2 border-white/10"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                  />

                  <div className={`image-shell absolute inset-8 rounded-full bg-[linear-gradient(145deg,color-mix(in_srgb,var(--gradient-start)_22%,transparent),color-mix(in_srgb,var(--gradient-end)_18%,transparent))] flex items-center justify-center overflow-hidden border-2 border-[color:var(--line-strong)] ${imageLoaded ? 'loaded' : ''}`}>
                    <img
                      src="/legacy/prof.jpg"
                      alt="Zaheer Yousaf"
                      className={`w-full h-full object-cover transition duration-700 ${imageLoaded ? 'scale-100 opacity-100' : 'scale-[1.08] opacity-0'}`}
                      onLoad={() => setImageLoaded(true)}
                    />
                  </div>

                  <motion.div
                    className="absolute -top-2 right-8 px-3 py-1 rounded-full bg-[color:var(--gradient-start)] text-white text-xs font-medium shadow-lg"
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    CS Student
                  </motion.div>
                  <motion.div
                    className="absolute -bottom-2 left-8 px-3 py-1 rounded-full bg-[color:var(--gradient-mid)] text-white text-xs font-medium shadow-lg"
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                  >
                    IoT Enthusiast
                  </motion.div>
                </motion.div>

                <div className="mt-8 grid gap-3">
                  {profileHighlights.map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3 text-sm leading-relaxed text-theme-secondary"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div variants={containerVariants} className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  variants={itemVariants}
                  data-cursor="card"
                  data-cursor-label={stat.label}
                  className="interactive-surface section-panel themed-panel text-center p-5 rounded-2xl"
                  whileHover={{ y: -6, scale: 1.02 }}
                >
                  <stat.icon className="w-6 h-6 mx-auto mb-2 text-[color:var(--gradient-start)]" />
                  <div className="text-2xl font-bold text-theme-primary">
                    <CountUpValue value={stat.value} isActive={isInView} />
                  </div>
                  <div className="text-xs text-theme-muted">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={itemVariants} className="flex gap-4 flex-wrap sm:flex-nowrap">
              <motion.a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                data-cursor="button"
                data-cursor-label="Connect"
                className="interactive-surface flex-1 px-6 py-3 rounded-full btn-gradient text-white font-medium text-center"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Let&apos;s Connect
              </motion.a>
              <motion.a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
                data-cursor="button"
                data-cursor-label="Project"
                className="interactive-surface flex-1 px-6 py-3 rounded-full border theme-outline bg-white/[0.03] text-theme-secondary font-medium hover:text-white transition-all text-center"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                See My Work
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="space-y-6"
          >
            <motion.div variants={itemVariants} className="rounded-[2rem] themed-panel p-6 sm:p-8">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs uppercase tracking-[0.22em] text-theme-secondary theme-outline">
                About the builder
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-theme-primary mb-4">
                Building thoughtful digital experiences with a strong engineering backbone
              </h3>
              <p className="text-theme-secondary leading-relaxed mb-4">
                I&apos;m Zaheer Yousaf, a Computer Science student at the University of Sialkot
                with a passion for creating smart, connected solutions. My journey in technology
                started with a curiosity about how things work, which evolved into a deep
                fascination with IoT, web development, and automation.
              </p>
              <p className="text-theme-secondary leading-relaxed">
                I specialize in building easy-to-use websites and applications that bring ideas
                to life. My focus is on making everything clear and simple for users while
                maintaining robust functionality behind the scenes.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="grid md:grid-cols-3 gap-4">
              {focusAreas.map((area) => (
                <div
                  key={area.title}
                  data-cursor="card"
                  data-cursor-label={area.title}
                  className="interactive-surface themed-panel rounded-3xl p-5"
                >
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white/[0.04] text-[color:var(--gradient-start)] theme-accent-ring">
                    <area.icon size={20} />
                  </div>
                  <h4 className="mb-2 text-base font-semibold text-theme-primary">{area.title}</h4>
                  <p className="text-sm leading-relaxed text-theme-muted">{area.description}</p>
                </div>
              ))}
            </motion.div>

            <motion.div variants={itemVariants} className="grid sm:grid-cols-2 gap-4">
              {personalInfo.map((info) => (
                <div
                  key={info.label}
                  data-cursor="card"
                  data-cursor-label={info.label}
                  className="interactive-surface section-panel themed-panel flex items-start gap-3 p-4 rounded-2xl transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/[0.04] flex items-center justify-center flex-shrink-0 theme-outline">
                    <info.icon className="w-5 h-5 text-[color:var(--gradient-start)]" />
                  </div>
                  <div>
                    <div className="text-xs text-theme-muted mb-1">{info.label}</div>
                    <div className="text-sm text-theme-secondary">{info.value}</div>
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div variants={itemVariants} className="rounded-[2rem] themed-panel p-6">
              <div className="mb-4 flex items-center justify-between gap-3">
                <h4 className="text-sm font-medium uppercase tracking-[0.22em] text-theme-muted">Core Expertise</h4>
                <span className="inline-flex items-center gap-1.5 text-sm text-theme-secondary">
                  High ownership
                  <ArrowUpRight size={16} />
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {['C/C++', 'Python', 'HTML/CSS', 'JavaScript', 'Arduino', 'IoT', 'Git', 'Problem Solving'].map((skill) => (
                  <span
                    key={skill}
                    className="interactive-surface theme-chip px-3 py-1.5 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
