import { useState } from 'react';
import { motion, useInView, AnimatePresence, type Variants } from 'framer-motion';
import { 
  Code2, 
  Cpu, 
  FileText, 
  FolderGit2, 
  Wrench, 
  Users,
  Zap,
  Terminal,
  Globe,
  Microchip,
  Radio,
  Watch,
  BookOpen,
  FileCode,
  Brain,
  Lightbulb,
  GitBranch,
  PenTool,
  LayoutGrid,
  MessageSquare,
  Puzzle
} from 'lucide-react';
import Reveal from '../components/Reveal';
import { useScrollDepth } from '../hooks/use-scroll-depth';

interface Skill {
  name: string;
  description: string;
  icon: React.ElementType;
  category: string;
}

const Skills = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const { ref: sectionRef, contentStyle, accentStyle, stageStyle } = useScrollDepth<HTMLElement>({
    distance: 44,
    tilt: 4,
    scale: 0.018,
  });
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const categories = [
    { id: 'all', label: 'All Skills', icon: LayoutGrid },
    { id: 'programming', label: 'Programming', icon: Code2 },
    { id: 'iot', label: 'IoT / Embedded', icon: Cpu },
    { id: 'research', label: 'Research', icon: BookOpen },
    { id: 'projects', label: 'Projects', icon: FolderGit2 },
    { id: 'tools', label: 'Tools', icon: Wrench },
    { id: 'soft', label: 'Soft Skills', icon: Users },
  ];

  const skills: Skill[] = [
    { name: 'C / C++', description: 'OOP - Data Structures - Problem Solving', icon: Terminal, category: 'programming' },
    { name: 'Python', description: 'Automation - IoT - ML Basics', icon: Code2, category: 'programming' },
    { name: 'Assembly (EMU8086)', description: 'Low-level Systems Programming', icon: Microchip, category: 'programming' },
    { name: 'Web Development', description: 'HTML - CSS - JavaScript - Responsive Design', icon: Globe, category: 'programming' },
    { name: 'Arduino & Microcontrollers', description: 'Firmware Development & Prototyping', icon: Cpu, category: 'iot' },
    { name: 'Sensor Integration', description: 'IR - Relay - Buzzer - Wireless Modules', icon: Radio, category: 'iot' },
    { name: 'IoT Platforms', description: 'Blynk - Cloud Services - Smart Home', icon: Zap, category: 'iot' },
    { name: 'Wearables & Gestures', description: 'Wearable Sensors - Gesture Control Systems', icon: Watch, category: 'iot' },
    { name: 'Literature & Writing', description: 'IEEE Style - LaTeX Documentation', icon: BookOpen, category: 'research' },
    { name: 'Project Documentation', description: 'Technical Reports - Urdu & English', icon: FileText, category: 'research' },
    { name: 'Problem Analysis', description: 'Algorithms & System Design', icon: Brain, category: 'research' },
    { name: 'Team Collaboration', description: 'Project Management - Coordination', icon: Users, category: 'research' },
    { name: 'Eye-Blink Smart Home', description: 'Smart Home Automation System', icon: Lightbulb, category: 'projects' },
    { name: 'EV Energy Harvesting', description: 'Wireless Charging for Electric Vehicles', icon: Zap, category: 'projects' },
    { name: 'Git & GitHub', description: 'Version Control & Collaboration', icon: GitBranch, category: 'tools' },
    { name: 'Overleaf / LaTeX', description: 'Research Papers & Documentation', icon: PenTool, category: 'tools' },
    { name: 'MS Office Suite', description: 'Word - Excel - PowerPoint', icon: FileCode, category: 'tools' },
    { name: 'Leadership', description: 'Team Management & Direction', icon: Users, category: 'soft' },
    { name: 'Communication', description: 'English - Urdu - Presentation', icon: MessageSquare, category: 'soft' },
    { name: 'Creative Problem-Solving', description: 'Adaptability & Critical Thinking', icon: Puzzle, category: 'soft' },
  ];

  const filteredSkills = activeFilter === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeFilter);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      y: -10,
      transition: { duration: 0.3 },
    },
  };

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8"
      style={stageStyle}
    >
      <motion.div
        className="scroll-depth-layer top-16 right-[10%] h-36 w-36 rounded-full bg-[color:var(--hero-glow)]"
        style={accentStyle}
      />
      <motion.div className="max-w-7xl mx-auto scroll-depth-shell" style={contentStyle}>
        <Reveal className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-500/10 text-indigo-400 text-sm font-medium mb-4">
            My Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Skills & <span className="gradient-text">Abilities</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A comprehensive toolkit of technical and soft skills I use to build real-world solutions
            and bring innovative ideas to life.
          </p>
        </Reveal>

        <Reveal className="flex flex-wrap justify-center gap-2 mb-12" delay={0.12}>
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              data-cursor="button"
              data-cursor-label={category.label}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeFilter === category.id
                  ? 'bg-indigo-500 text-white'
                  : 'bg-slate-800/50 text-slate-400 hover:bg-slate-700/50 hover:text-white'
              }`}
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <category.icon size={16} />
              {category.label}
            </motion.button>
          ))}
        </Reveal>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                layout
                initial="hidden"
                animate="visible"
                exit="exit"
                data-cursor="card"
                data-cursor-label={skill.name}
                className="interactive-surface section-panel group relative p-5 rounded-2xl skill-card"
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/0 to-purple-500/0 group-hover:from-indigo-500/10 group-hover:to-purple-500/10 transition-all duration-500" />
                
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center mb-4 group-hover:bg-indigo-500/20 transition-colors">
                    <skill.icon className="w-6 h-6 text-indigo-400 group-hover:text-indigo-300 transition-colors" />
                  </div>
                  
                  <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-indigo-300 transition-colors">
                    {skill.name}
                  </h3>
                  <p className="text-sm text-slate-500">
                    {skill.description}
                  </p>
                </div>

                <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden rounded-tr-2xl">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-indigo-500/5 to-transparent transform rotate-45 translate-x-16 -translate-y-16 group-hover:from-indigo-500/10 transition-colors" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <Reveal className="text-center mt-12" delay={0.2}>
          <p className="text-slate-500 mb-4">
            Always learning and expanding my skillset
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {['Machine Learning', 'Cloud Computing', 'Blockchain', 'Cybersecurity'].map((skill) => (
              <span
                key={skill}
                className="interactive-surface px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700 text-slate-500 text-sm"
              >
                {skill} (Learning)
              </span>
            ))}
          </div>
        </Reveal>
      </motion.div>
    </section>
  );
};

export default Skills;
