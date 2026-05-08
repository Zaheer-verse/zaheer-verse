import { motion } from 'framer-motion';
import { ArrowLeft, Download, Mail, Phone, MapPin, GraduationCap } from 'lucide-react';
import Reveal from '../components/Reveal';
import { useScrollDepth } from '../hooks/use-scroll-depth';

const ResumePage = () => {
  const { ref: pageRef, contentStyle, accentStyle, stageStyle } = useScrollDepth<HTMLElement>({
    distance: 34,
    tilt: 3,
    scale: 0.015,
  });

  return (
    <main
      ref={pageRef}
      className="relative min-h-screen pt-28 sm:pt-32 px-4 sm:px-6 lg:px-8 pb-16"
      style={stageStyle}
    >
      <motion.div
        className="scroll-depth-layer top-24 right-[10%] h-32 w-32 rounded-full bg-[color:var(--hero-glow)]"
        style={accentStyle}
      />
      <motion.div className="max-w-6xl mx-auto scroll-depth-shell" style={contentStyle}>
        <motion.a
          href="/"
          data-cursor="button"
          data-cursor-label="Back"
          className="interactive-surface inline-flex items-center gap-2 rounded-xl px-3 py-2 mb-8 text-slate-300 hover:text-white transition-colors"
          whileHover={{ x: -3 }}
        >
          <ArrowLeft size={18} />
          Back to Home
        </motion.a>

        <section className="section-panel rounded-3xl border border-slate-700/50 bg-slate-900/40 overflow-hidden shadow-[0_30px_80px_rgba(7,10,22,0.26)]">
          <div className="h-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />
          <div className="p-6 sm:p-10">
            <Reveal className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
              <div>
                <h1 className="text-3xl sm:text-5xl font-bold text-white mb-2">Zaheer Yousaf</h1>
                <p className="text-slate-300">Computer Science Student | IoT Enthusiast | Web Developer</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href="/legacy/resume.pdf.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="button"
                  data-cursor-label="Resume"
                  className="interactive-surface inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-slate-700 text-slate-100 hover:border-indigo-500/40"
                >
                  Open Resume PDF
                </a>
                <a
                  href="/legacy/resume.pdf.pdf"
                  download
                  data-cursor="button"
                  data-cursor-label="Download Resume"
                  className="interactive-surface inline-flex items-center gap-2 px-5 py-3 rounded-xl btn-gradient text-white font-medium"
                >
                  <Download size={16} />
                  Download Resume PDF
                </a>
              </div>
            </Reveal>

            <Reveal className="grid md:grid-cols-2 gap-4 mb-10" delay={0.08}>
              <div data-cursor="card" data-cursor-label="Email" className="interactive-surface section-panel p-4 rounded-2xl bg-slate-800/40 border border-slate-700/60 flex gap-3 items-start">
                <Mail className="w-5 h-5 text-indigo-400 mt-0.5" />
                <div>
                  <p className="text-slate-500 text-sm">Email</p>
                  <p className="text-slate-200">zaheery991@gmail.com</p>
                </div>
              </div>
              <div data-cursor="card" data-cursor-label="Phone" className="interactive-surface section-panel p-4 rounded-2xl bg-slate-800/40 border border-slate-700/60 flex gap-3 items-start">
                <Phone className="w-5 h-5 text-indigo-400 mt-0.5" />
                <div>
                  <p className="text-slate-500 text-sm">Phone / WhatsApp</p>
                  <p className="text-slate-200">+92 333 5398292</p>
                </div>
              </div>
              <div data-cursor="card" data-cursor-label="Location" className="interactive-surface section-panel p-4 rounded-2xl bg-slate-800/40 border border-slate-700/60 flex gap-3 items-start">
                <MapPin className="w-5 h-5 text-indigo-400 mt-0.5" />
                <div>
                  <p className="text-slate-500 text-sm">Location</p>
                  <p className="text-slate-200">Daska, Sialkot, Pakistan</p>
                </div>
              </div>
              <div data-cursor="card" data-cursor-label="Education" className="interactive-surface section-panel p-4 rounded-2xl bg-slate-800/40 border border-slate-700/60 flex gap-3 items-start">
                <GraduationCap className="w-5 h-5 text-indigo-400 mt-0.5" />
                <div>
                  <p className="text-slate-500 text-sm">Education</p>
                  <p className="text-slate-200">BS Computer Science (in progress), University of Sialkot</p>
                </div>
              </div>
            </Reveal>

            <Reveal className="rounded-2xl overflow-hidden border border-slate-700/60 bg-slate-950/40 p-2" delay={0.14}>
              <object
                data="/legacy/resume.pdf.pdf"
                type="application/pdf"
                className="w-full h-[70vh] rounded-xl"
              >
                <div className="p-4 text-slate-300">
                  Inline PDF preview is not available in this browser.
                  <div className="mt-3">
                    <a
                      href="/legacy/resume.pdf.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      data-cursor="button"
                      data-cursor-label="Resume"
                      className="text-indigo-300 hover:text-indigo-200"
                    >
                      Open Resume PDF in a new tab
                    </a>
                  </div>
                </div>
              </object>
            </Reveal>
          </div>
        </section>
      </motion.div>
    </main>
  );
};

export default ResumePage;
