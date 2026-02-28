import { useRef } from 'react';
import { motion, useInView, type Variants } from 'framer-motion';
import { MapPin, Mail, Phone, GraduationCap, Code, Heart, Users, Globe } from 'lucide-react';

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

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
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
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
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Profile Card */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="relative"
          >
            <motion.div
              variants={itemVariants}
              className="relative z-10"
            >
              {/* Profile Image Container */}
              <div className="relative mx-auto w-64 h-64 sm:w-80 sm:h-80">
                {/* Animated rings */}
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-indigo-500/20"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                  className="absolute inset-4 rounded-full border-2 border-purple-500/20"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                />
                
                {/* Profile image */}
                <div className="absolute inset-8 rounded-full bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center overflow-hidden border-2 border-indigo-500/30">
                  <img
                    src="/legacy/prof.jpg"
                    alt="Zaheer Yousaf"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Floating badges */}
                <motion.div
                  className="absolute -top-2 right-8 px-3 py-1 rounded-full bg-indigo-500 text-white text-xs font-medium"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  CS Student
                </motion.div>
                <motion.div
                  className="absolute -bottom-2 left-8 px-3 py-1 rounded-full bg-purple-500 text-white text-xs font-medium"
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                >
                  IoT Enthusiast
                </motion.div>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12"
            >
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  variants={itemVariants}
                  className="text-center p-4 rounded-2xl bg-slate-800/30 border border-slate-700/50"
                >
                  <stat.icon className="w-6 h-6 text-indigo-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-slate-400">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-6"
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-white mb-4">
                Building the Future with Code & Innovation
              </h3>
              <p className="text-slate-400 leading-relaxed mb-4">
                I&apos;m Zaheer Yousaf, a Computer Science student at the University of Sialkot
                with a passion for creating smart, connected solutions. My journey in technology
                started with a curiosity about how things work, which evolved into a deep
                fascination with IoT, web development, and automation.
              </p>
              <p className="text-slate-400 leading-relaxed">
                I specialize in building easy-to-use websites and applications that bring ideas
                to life. My focus is on making everything clear and simple for users while
                maintaining robust functionality behind the scenes.
              </p>
            </motion.div>

            {/* Personal Info Grid */}
            <motion.div variants={itemVariants} className="grid sm:grid-cols-2 gap-4">
              {personalInfo.map((info) => (
                <div
                  key={info.label}
                  className="flex items-start gap-3 p-4 rounded-xl bg-slate-800/30 border border-slate-700/50 hover:border-indigo-500/30 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-5 h-5 text-indigo-400" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 mb-1">{info.label}</div>
                    <div className="text-sm text-slate-300">{info.value}</div>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Skills Tags */}
            <motion.div variants={itemVariants}>
              <h4 className="text-sm font-medium text-slate-500 mb-3">Core Expertise</h4>
              <div className="flex flex-wrap gap-2">
                {['C/C++', 'Python', 'HTML/CSS', 'JavaScript', 'Arduino', 'IoT', 'Git', 'Problem Solving'].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div variants={itemVariants} className="flex gap-4 pt-4">
              <motion.a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-6 py-3 rounded-full btn-gradient text-white font-medium"
                whileHover={{ scale: 1.05 }}
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
                className="px-6 py-3 rounded-full border border-slate-700 text-slate-300 font-medium hover:border-indigo-500/50 hover:text-white transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                See My Work
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
