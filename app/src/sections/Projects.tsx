import { useRef, type ElementType } from 'react';
import { motion, useInView, type Variants } from 'framer-motion';
import { ExternalLink, Cpu, Zap, ArrowRight, Wallet } from 'lucide-react';
import { projects } from '../data/projects';

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const iconMap: Record<string, ElementType> = {
    'eye-blink-smart-home': Cpu,
    'ev-energy-harvesting': Zap,
    'expense-management-system': Wallet,
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
            Featured Work
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A showcase of my innovative projects spanning IoT, web development,
            and research in smart automation technologies.
          </p>
        </motion.div>

        {/* Projects Grid */}
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
            >
              <div className="relative h-full rounded-3xl overflow-hidden bg-slate-800/30 border border-slate-700/50 hover:border-indigo-500/30 transition-all duration-500">
                {/* Gradient header */}
                <div className={`h-32 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                  {/* Pattern overlay */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute inset-0" style={{
                      backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
                      backgroundSize: '20px 20px'
                    }} />
                  </div>
                  
                  {/* Icon */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
                    <div className="w-20 h-20 rounded-2xl bg-slate-900 flex items-center justify-center shadow-2xl">
                      {(() => {
                        const Icon = iconMap[project.slug] ?? Wallet;
                        return <Icon className="w-10 h-10 text-white" />;
                      })()}
                    </div>
                  </div>

                  {/* Decorative elements */}
                  <motion.div
                    className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                </div>

                {/* Content */}
                <div className="pt-14 pb-6 px-6">
                  <h3 className="text-xl font-bold text-white mb-2 text-center group-hover:text-indigo-300 transition-colors">
                    {project.title}
                  </h3>
                  {project.image && (
                    <div className="mb-4 rounded-xl overflow-hidden border border-slate-700/60 bg-slate-950/40">
                      <img src={project.image} alt={project.title} className="w-full h-36 object-cover" />
                    </div>
                  )}
                  <p className="text-slate-400 text-sm text-center mb-4">
                    {project.description}
                  </p>
                  <p className="text-slate-500 text-sm mb-6 line-clamp-3">
                    {project.longDescription}
                  </p>

                  {/* Tags */}
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

                  {/* Links */}
                  <div className="flex gap-3">
                    <motion.a
                      href={project.externalUrl ?? `/projects/${project.slug}`}
                      target={project.externalUrl ? '_blank' : undefined}
                      rel={project.externalUrl ? 'noopener noreferrer' : undefined}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-indigo-500 text-white text-sm font-medium hover:bg-indigo-600 transition-colors"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <ExternalLink size={16} />
                      {project.externalUrl ? 'Open Project' : 'View Details'}
                    </motion.a>
                  </div>
                </div>

                {/* Hover glow effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-5`} />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <motion.a
            href="/resume"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-slate-700 text-slate-400 hover:text-white hover:border-indigo-500/50 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Open Full Resume
            <ArrowRight size={18} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
