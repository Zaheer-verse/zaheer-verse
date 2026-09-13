import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, Code2, Cpu, GitBranch, GraduationCap } from 'lucide-react';

const disciplines = [
  { icon: Code2, title: 'Web experiences', text: 'Clear interfaces, responsive layouts, and practical features that make software easier to use.' },
  { icon: Cpu, title: 'Connected systems', text: 'Exploring accessible automation and the relationship between software, sensors, and the physical world.' },
  { icon: GitBranch, title: 'Developer tools', text: 'Open-source skills that help AI agents clarify requirements, test changes, and review their work.' },
];

const About = () => {
  const reduceMotion = useReducedMotion();
  return (
    <section id="about" aria-labelledby="about-heading" className="relative px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex items-center gap-4">
          <span className="theme-chip rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em]">About the builder</span>
          <span aria-hidden="true" className="h-px flex-1 bg-[color:var(--line-strong)]" />
          <span className="hidden text-xs uppercase tracking-[0.2em] text-theme-muted sm:block">Curiosity → craft</span>
        </div>
        <div className="grid items-start gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <motion.div initial={reduceMotion ? false : { opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="themed-panel overflow-hidden rounded-[2rem]">
            <div className="relative aspect-[4/3] overflow-hidden bg-slate-900">
              <img src="/legacy/prof.jpg" alt="Portrait of Zaheer Yousaf" width={640} height={480} loading="lazy" className="h-full w-full object-cover object-center" />
              <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-slate-950 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6"><p className="mb-1 text-xs uppercase tracking-[0.25em] text-indigo-200">Software builder</p><p className="text-3xl font-semibold text-white">Zaheer Yousaf</p></div>
            </div>
            <div className="space-y-6 p-6 sm:p-8">
              <div className="flex items-start gap-3"><GraduationCap size={22} aria-hidden="true" className="mt-1 shrink-0 text-[color:var(--gradient-start)]" /><div><p className="font-medium text-theme-primary">Computer Science</p><p className="mt-1 text-sm text-theme-muted">Bachelor’s degree · in progress</p></div></div>
              <p className="border-t border-[color:var(--line-strong)] pt-5 text-sm leading-relaxed text-theme-secondary">From hands-free home automation to tools for AI coding agents, I enjoy turning an interesting problem into something people can explore and use.</p>
              <a href="https://github.com/Zaheer-verse" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-theme-primary underline decoration-[color:var(--line-strong)] underline-offset-8 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4">Explore my GitHub <ArrowUpRight size={17} aria-hidden="true" /></a>
            </div>
          </motion.div>
          <div className="lg:pt-4">
            <h2 id="about-heading" className="max-w-2xl text-4xl font-semibold leading-tight tracking-tight text-theme-primary sm:text-5xl">Thoughtful software.<br /><span className="gradient-text">Built with purpose.</span></h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-theme-secondary">I’m Zaheer, a Computer Science student working across web development, IoT, and AI-assisted engineering. I care about what a product helps someone do, as much as how it is built.</p>
            <p className="mt-4 max-w-2xl leading-relaxed text-theme-muted">My approach starts with understanding the problem. I break it into manageable parts, build a clear experience, and use testing and feedback to improve the result.</p>
            <div className="mt-8 divide-y divide-[color:var(--line-strong)] border-y border-[color:var(--line-strong)]">
              {disciplines.map(({ icon: Icon, title, text }, index) => (
                <div key={title} className="flex gap-4 py-5 sm:gap-5"><span className="pt-1 text-xs tabular-nums text-theme-muted">0{index + 1}</span><Icon size={21} aria-hidden="true" className="mt-1 shrink-0 text-[color:var(--gradient-start)]" /><div><h3 className="font-semibold text-theme-primary">{title}</h3><p className="mt-1 text-sm leading-relaxed text-theme-muted">{text}</p></div></div>
              ))}
            </div>
            <div className="mt-7 flex flex-wrap gap-2" aria-label="Tools I work with">{['React', 'TypeScript', 'Python', 'C/C++', 'Arduino', 'Git'].map(skill => <span key={skill} className="theme-chip rounded-full px-3 py-1.5 text-xs font-medium">{skill}</span>)}</div>
            <a href="#projects" className="btn-gradient mt-8 inline-flex items-center gap-3 rounded-full px-6 py-3 font-medium text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4">Explore selected work <ArrowUpRight size={18} aria-hidden="true" /></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
