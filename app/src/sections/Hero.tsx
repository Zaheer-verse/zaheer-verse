import { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, Mail, Download, Instagram, MessageCircle, Github, Linkedin } from 'lucide-react';

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
      <div className="absolute inset-0 pointer-events-none">
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
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm">
            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
            Available for collaboration
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4"
        >
          <span className="text-white">Hi, I&apos;m </span>
          <span className="gradient-text">Zaheer</span>
        </motion.h1>

        {/* Typing text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-xl sm:text-2xl md:text-3xl text-slate-400 mb-6 h-12"
        >
          <span className="typing-cursor">{displayText}</span>
          <span className="w-0.5 h-6 bg-indigo-500 inline-block ml-1 animate-pulse" />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-base sm:text-lg text-slate-500 max-w-2xl mx-auto mb-10"
        >
          Designing smart automation, crafting intelligent & connected solutions.
          Building easy-to-use websites and apps from your ideas.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <motion.a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-4 rounded-full btn-gradient text-white font-medium flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get in Touch
            <ArrowDown size={18} />
          </motion.a>
          <motion.a
            href="/resume"
            className="px-8 py-4 rounded-full border border-slate-700 text-slate-300 font-medium flex items-center gap-2 hover:border-indigo-500/50 hover:text-white transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download size={18} />
            Open Resume
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex items-center justify-center gap-4"
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-xl bg-slate-800/50 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-indigo-400 hover:border-indigo-500/30 transition-all"
              whileHover={{ scale: 1.1, y: -4 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + index * 0.1 }}
            >
              <social.icon size={20} />
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.button
          onClick={scrollToAbout}
          className="flex flex-col items-center gap-2 text-slate-500 hover:text-indigo-400 transition-colors"
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
