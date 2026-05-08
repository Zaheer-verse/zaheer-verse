import { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, Mail, Download, Instagram, MessageCircle, Github, Linkedin } from 'lucide-react';
import Reveal from '../components/Reveal';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const containerRef = useRef<HTMLElement>(null);
  
  const roles = [
    'Computer Science Student',
    'IoT Enthusiast',
    'Content Writer',
    'Database Administrator',
    'Web Developer',
    'Frontend Web Developer'
  ];

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);
  const haloY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -36]);

  useEffect(() => {
    const currentRole = roles[currentIndex];
    const typeSpeed = isDeleting ? 50 : 100;
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentRole.length) {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, currentIndex, isDeleting, roles]);

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Zaheer-verse', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/zaheer-yousaf', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://www.instagram.com/zaheer_verse', label: 'Instagram' },
    { icon: MessageCircle, href: 'https://wa.me/923335398292', label: 'WhatsApp' },
    { icon: Mail, href: 'mailto:zaheery991@gmail.com', label: 'Email' },
  ];

  return (
    <motion.section
      ref={containerRef}
      id="home"
      style={{ opacity, scale, y }}
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Decorative elements */}
      <motion.div className="absolute inset-0 pointer-events-none" style={{ y: haloY }}>
        {/* Floating geometric shapes */}
        <motion.div
          className="absolute top-[20%] left-[10%] w-20 h-20 border border-indigo-500/20 rounded-lg"
          animate={{
            rotate: [0, 90, 180, 270, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute top-[30%] right-[15%] w-16 h-16 border border-purple-500/20 rounded-full"
          animate={{
            rotate: [360, 270, 180, 90, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-[25%] left-[20%] w-12 h-12 bg-indigo-500/5 rounded-lg rotate-45"
          animate={{
            rotate: [45, 135, 225, 315, 405],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Code-like decorations */}
        <div className="absolute top-[15%] right-[8%] text-xs text-indigo-500/20 font-mono hidden lg:block">
          {'<developer />'}
        </div>
        <div className="absolute bottom-[20%] left-[5%] text-xs text-purple-500/20 font-mono hidden lg:block">
          {'const passion = "IoT";'}
        </div>
      </motion.div>

      <motion.div className="relative z-10 max-w-5xl mx-auto text-center" style={{ y: contentY }}>
        {/* Badge */}
        <Reveal
          className="mb-6"
          delay={0.1}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-400/10 border border-emerald-300/25 text-emerald-200 text-sm shadow-[0_0_30px_rgba(16,185,129,0.08)]">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-80 animate-ping" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-300 shadow-[0_0_14px_rgba(110,231,183,0.95)]" />
            </span>
            Available for collaboration
          </span>
        </Reveal>

        {/* Main heading */}
        <Reveal
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4"
          delay={0.18}
        >
          <span className="text-white">Hi, I&apos;m </span>
          <span className="gradient-text">Zaheer</span>
        </Reveal>

        {/* Typing text */}
        <Reveal
          className="text-xl sm:text-2xl md:text-3xl text-slate-400 mb-6 h-12"
          delay={0.28}
        >
          <span className="typing-cursor">{displayText}</span>
          <span className="w-0.5 h-6 bg-indigo-500 inline-block ml-1 animate-pulse" />
        </Reveal>

        {/* Tagline */}
        <Reveal
          className="text-base sm:text-lg text-slate-500 max-w-2xl mx-auto mb-10"
          delay={0.36}
        >
          Designing smart automation, crafting intelligent & connected solutions.
          Building easy-to-use websites and apps from your ideas.
        </Reveal>

        {/* CTA Buttons */}
        <Reveal
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          delay={0.44}
        >
          <motion.a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            data-cursor="button"
            data-cursor-label="Connect"
            className="interactive-surface px-8 py-4 rounded-full btn-gradient text-white font-medium flex items-center gap-2"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Get in Touch
            <ArrowDown size={18} />
          </motion.a>
          <motion.a
            href="/resume"
            data-cursor="button"
            data-cursor-label="Resume"
            className="interactive-surface px-8 py-4 rounded-full border border-slate-700 bg-slate-900/20 text-slate-300 font-medium flex items-center gap-2 hover:border-indigo-500/50 hover:text-white transition-all"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download size={18} />
            Open Resume
          </motion.a>
        </Reveal>

        {/* Social Links */}
        <Reveal
          className="flex items-center justify-center gap-4"
          delay={0.52}
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="button"
              data-cursor-label={social.label}
              className="interactive-surface w-12 h-12 rounded-xl bg-slate-800/50 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-indigo-400 hover:border-indigo-500/30 transition-all"
              whileHover={{ scale: 1.08, y: -5 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + index * 0.1 }}
            >
              <social.icon size={20} />
            </motion.a>
          ))}
        </Reveal>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.button
          onClick={scrollToAbout}
          data-cursor="button"
          data-cursor-label="Scroll"
          className="interactive-surface flex flex-col items-center gap-2 rounded-full px-4 py-3 text-slate-500 hover:text-indigo-400 transition-colors"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-xs">Scroll to explore</span>
          <ArrowDown size={20} />
        </motion.button>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
