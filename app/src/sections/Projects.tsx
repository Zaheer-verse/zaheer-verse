import { type ElementType } from 'react';
import { motion, useInView, type Variants } from 'framer-motion';
import { ExternalLink, Cpu, Zap, ArrowRight, Wallet, Github, Palette, Terminal, GitBranch } from 'lucide-react';
import { projects } from '../data/projects';
import Reveal from '../components/Reveal';
import { useScrollDepth } from '../hooks/use-scroll-depth';

const Projects = () => {
  const { ref: sectionRef, contentStyle, accentStyle, stageStyle } = useScrollDepth<HTMLElement>({
    distance: 50,
    tilt: 5,
    scale: 0.022,
  });
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const iconMap: Record<string, ElementType> = {
    'eye-blink-smart-home': Cpu,
    'ev-energy-harvesting': Zap,
    'expense-management-system': Wallet,
    'designforge': Palette,
    'deliberate-dev-codex': Terminal,
    'deliberate-dev-claude': GitBranch,
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8"
      style={stageStyle}
    >
      <motion.div
        className="scroll-depth-layer bottom-20 left-[6%] h-40 w-40 rounded-full bg-[color:var(--hero-glow-alt)]"
        style={accentStyle}
      />
      <motion.div className="max-w-7xl mx-auto scroll-depth-shell" style={contentStyle}>
        <Reveal
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-500/10 text-indigo-400 text-sm font-medium mb-4">
            Featured Work
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A showcase of my innovative projects spanning IoT, web development,
            research, and open-source tools for AI-assisted development.
          </p>
        </Reveal>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className="group relative"
              data-cursor="card"
              data-cursor-label={project.title}
              whileHover={{ y: -10 }}
            >
              <div className="interactive-surface section-panel relative h-full rounded-3xl overflow-hidden bg-slate-800/30 border border-slate-700/50 hover:border-indigo-500/30 transition-all duration-500">
                <motion.div
                  className={`h-32 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute inset-0" style={{
                      backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
                      backgroundSize: '20px 20px'
                    }} />
                  </div>
                  
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
                    <div className="w-20 h-20 rounded-2xl bg-slate-900 flex items-center justify-center shadow-2xl">
                      {(() => {
                        const Icon = iconMap[project.slug] ?? Wallet;
                        return <Icon className="w-10 h-10 text-white" />;
                      })()}
                    </div>
                  </div>

                  <motion.div
                    className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                </motion.div>

                <div className="pt-14 pb-6 px-6 flex flex-col h-[calc(100%-8rem)]">
                  <h3 className="text-xl font-bold text-white mb-2 text-center group-hover:text-indigo-300 transition-colors">
                    {project.title}
                  </h3>
                  {project.image && (
                    <div className="image-shell mb-4 rounded-xl overflow-hidden border border-slate-700/60 bg-slate-950/40">
                      <img src={project.image} alt={project.title} className="w-full h-36 object-cover transition duration-700 group-hover:scale-[1.04]" loading="lazy" />
                    </div>
                  )}
                  <p className="text-slate-400 text-sm text-center mb-4">
                    {project.description}
                  </p>
                  <p className="text-slate-500 text-sm mb-6 line-clamp-3">
                    {project.longDescription}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-full bg-slate-700/50 text-slate-400 text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3 mt-auto">
                    <motion.a
                      href={project.externalUrl ?? `/projects/${project.slug}`}
                      target={project.externalUrl ? '_blank' : undefined}
                      rel={project.externalUrl ? 'noopener noreferrer' : undefined}
                      data-cursor="button"
                      data-cursor-label={project.externalUrl ? 'Open Project' : 'View Project'}
                      className="interactive-surface flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-indigo-500 text-white text-sm font-medium hover:bg-indigo-600 transition-colors"
                      whileHover={{ scale: 1.02, y: -1 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <ExternalLink size={16} />
                      {project.externalUrl ? 'Open Project' : 'View Details'}
                    </motion.a>
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                        aria-label={`View ${project.title} on GitHub`}
                        className="interactive-surface flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border theme-outline text-theme-primary text-sm font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4">
                        <Github size={16} aria-hidden="true" /> GitHub
                      </a>
                    )}
                  </div>
                </div>

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-5`} />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <Reveal
          className="text-center mt-12"
          delay={0.18}
        >
          <motion.a
            href="/resume"
            data-cursor="button"
            data-cursor-label="Resume"
            className="interactive-surface inline-flex items-center gap-2 px-6 py-3 rounded-full border border-slate-700 bg-slate-900/20 text-slate-400 hover:text-white hover:border-indigo-500/50 transition-all"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Open Full Resume
            <ArrowRight size={18} />
          </motion.a>
        </Reveal>
      </motion.div>
    </section>
  );
};

export default Projects;
