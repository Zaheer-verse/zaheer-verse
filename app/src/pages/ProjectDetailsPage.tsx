import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, PlayCircle, Mail, Linkedin, Instagram, MessageCircle } from 'lucide-react';
import { findProject } from '../data/projects';

interface Props {
  slug: string;
}

const contactOptions = [
  { label: 'Email', href: 'mailto:zaheery991@gmail.com?subject=Project%20Discussion', icon: Mail },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/zaheer-yousaf', icon: Linkedin },
  { label: 'Instagram', href: 'https://www.instagram.com/zaheer_verse', icon: Instagram },
  { label: 'WhatsApp', href: 'https://wa.me/923335398292', icon: MessageCircle },
];

const ProjectDetailsPage = ({ slug }: Props) => {
  const project = findProject(slug);
  const [showContacts, setShowContacts] = useState(false);

  if (!project) {
    return (
      <main className="min-h-screen pt-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Project Not Found</h1>
          <a href="/" className="text-indigo-400 hover:text-indigo-300">
            Back to Home
          </a>
        </div>
      </main>
    );
  }

  const detail = project.detail;

  return (
    <main className="min-h-screen pt-28 sm:pt-32 px-4 sm:px-6 lg:px-8 pb-16">
      <div className="max-w-6xl mx-auto">
        <motion.a
          href="/#projects"
          className="inline-flex items-center gap-2 mb-8 text-slate-300 hover:text-white transition-colors"
          whileHover={{ x: -3 }}
        >
          <ArrowLeft size={18} />
          Back to Projects
        </motion.a>

        <section className="rounded-3xl border border-slate-700/50 bg-slate-900/40 overflow-hidden">
          <div className={`h-3 bg-gradient-to-r ${project.gradient}`} />
          <div className="p-6 sm:p-10">
            <h1 className="text-3xl sm:text-5xl font-bold text-white mb-3">{project.title}</h1>
            {detail?.subtitle && <p className="text-indigo-300 mb-3">{detail.subtitle}</p>}
            <p className="text-slate-300 text-lg mb-3">{project.description}</p>
            <p className="text-slate-400 leading-relaxed mb-8">{project.longDescription}</p>

            <div className="flex flex-wrap gap-2 mb-8">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-sm bg-slate-800 border border-slate-700 text-slate-300"
                >
                  {tag}
                </span>
              ))}
            </div>

            {project.image && (
              <div className="mb-8 rounded-2xl overflow-hidden border border-slate-700/60 bg-slate-950/40">
                <img src={project.image} alt={project.title} className="w-full h-auto object-cover" />
              </div>
            )}

            {project.video && (
              <div className="mb-8 rounded-2xl overflow-hidden border border-slate-700/60 bg-slate-950/40 p-3">
                <video controls playsInline className="w-full rounded-xl">
                  <source src={project.video} type="video/mp4" />
                </video>
              </div>
            )}

            {detail?.intro && (
              <div className="mb-8 space-y-3">
                {detail.intro.map((line) => (
                  <p key={line} className="text-slate-300">
                    {line}
                  </p>
                ))}
              </div>
            )}

            {detail?.objectives && (
              <div className="mb-8 grid md:grid-cols-3 gap-4">
                {detail.objectives.map((item) => (
                  <div key={item.label} className="rounded-2xl border border-slate-700/60 bg-slate-900/60 p-4">
                    <p className="text-slate-500 text-xs mb-1">{item.label}</p>
                    <p className="text-white text-sm">{item.value}</p>
                  </div>
                ))}
              </div>
            )}

            {detail?.keyFeatures && (
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-3">Key Features</h3>
                <ul className="grid md:grid-cols-2 gap-2">
                  {detail.keyFeatures.map((item) => (
                    <li key={item} className="text-slate-300">- {item}</li>
                  ))}
                </ul>
              </div>
            )}

            {detail?.hardware && (
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-3">Hardware</h3>
                <ul className="grid md:grid-cols-2 gap-2">
                  {detail.hardware.map((item) => (
                    <li key={item} className="text-slate-300">- {item}</li>
                  ))}
                </ul>
              </div>
            )}

            {detail?.software && (
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-3">Software and Tools</h3>
                <ul className="grid md:grid-cols-2 gap-2">
                  {detail.software.map((item) => (
                    <li key={item} className="text-slate-300">- {item}</li>
                  ))}
                </ul>
              </div>
            )}

            {detail?.pinMapping && (
              <div className="mb-8 overflow-x-auto rounded-2xl border border-slate-700/60">
                <table className="w-full text-left text-sm">
                  <thead className="bg-slate-800/70 text-slate-200">
                    <tr>
                      <th className="p-3">Component</th>
                      <th className="p-3">Pin</th>
                      <th className="p-3">Code Label</th>
                    </tr>
                  </thead>
                  <tbody>
                    {detail.pinMapping.map((row) => (
                      <tr key={`${row.col1}-${row.col2}`} className="border-t border-slate-700/60 text-slate-300">
                        <td className="p-3">{row.col1}</td>
                        <td className="p-3">{row.col2}</td>
                        <td className="p-3">{row.col3}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {detail?.powerSummary && (
              <div className="mb-8 overflow-x-auto rounded-2xl border border-slate-700/60">
                <table className="w-full text-left text-sm">
                  <thead className="bg-slate-800/70 text-slate-200">
                    <tr>
                      <th className="p-3">Component</th>
                      <th className="p-3">Power Source</th>
                    </tr>
                  </thead>
                  <tbody>
                    {detail.powerSummary.map((row) => (
                      <tr key={`${row.col1}-${row.col2}`} className="border-t border-slate-700/60 text-slate-300">
                        <td className="p-3">{row.col1}</td>
                        <td className="p-3">{row.col2}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {detail?.deliverables && (
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-3">Deliverables</h3>
                <ul className="space-y-2">
                  {detail.deliverables.map((item) => (
                    <li key={item} className="text-slate-300">- {item}</li>
                  ))}
                </ul>
              </div>
            )}

            {detail?.aims && (
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-3">Research Aims</h3>
                <ul className="space-y-2">
                  {detail.aims.map((item) => (
                    <li key={item} className="text-slate-300">- {item}</li>
                  ))}
                </ul>
              </div>
            )}

            {detail?.architecture && (
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-3">System Architecture</h3>
                <ul className="space-y-2">
                  {detail.architecture.map((item) => (
                    <li key={item} className="text-slate-300">- {item}</li>
                  ))}
                </ul>
              </div>
            )}

            {detail?.methods && (
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-3">Methods</h3>
                <ul className="space-y-2">
                  {detail.methods.map((item) => (
                    <li key={item} className="text-slate-300">- {item}</li>
                  ))}
                </ul>
              </div>
            )}

            {detail?.metrics && (
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-3">Key Metrics</h3>
                <ul className="space-y-2">
                  {detail.metrics.map((item) => (
                    <li key={item} className="text-slate-300">- {item}</li>
                  ))}
                </ul>
              </div>
            )}

            {detail?.checklist && (
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-3">Quick Checklist</h3>
                <ul className="space-y-2">
                  {detail.checklist.map((item) => (
                    <li key={item} className="text-slate-300">- {item}</li>
                  ))}
                </ul>
              </div>
            )}

            {detail?.challenges && (
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-3">Challenges and Solutions</h3>
                <ul className="space-y-2">
                  {detail.challenges.map((item) => (
                    <li key={item} className="text-slate-300">- {item}</li>
                  ))}
                </ul>
              </div>
            )}

            {detail?.futureScope && (
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-3">Future Scope</h3>
                <ul className="space-y-2">
                  {detail.futureScope.map((item) => (
                    <li key={item} className="text-slate-300">- {item}</li>
                  ))}
                </ul>
              </div>
            )}

            {detail?.bom && (
              <div className="mb-8 overflow-x-auto rounded-2xl border border-slate-700/60">
                <table className="w-full text-left text-sm">
                  <thead className="bg-slate-800/70 text-slate-200">
                    <tr>
                      <th className="p-3">Item</th>
                      <th className="p-3">Qty</th>
                      <th className="p-3">Notes</th>
                      <th className="p-3">Cost</th>
                    </tr>
                  </thead>
                  <tbody>
                    {detail.bom.map((row) => (
                      <tr key={row.item} className="border-t border-slate-700/60 text-slate-300">
                        <td className="p-3">{row.item}</td>
                        <td className="p-3">{row.qty}</td>
                        <td className="p-3">{row.notes}</td>
                        <td className="p-3">{row.cost}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {detail?.keywords && (
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-3">Keywords</h3>
                <div className="flex flex-wrap gap-2">
                  {detail.keywords.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 rounded-full text-sm bg-slate-800 border border-slate-700 text-slate-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {detail?.theory && (
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-3">Theory and Equations</h3>
                <ul className="space-y-2">
                  {detail.theory.map((item) => (
                    <li key={item} className="text-slate-300">- {item}</li>
                  ))}
                </ul>
              </div>
            )}

            {detail?.literature && (
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-3">Literature Context</h3>
                <ul className="space-y-2">
                  {detail.literature.map((item) => (
                    <li key={item} className="text-slate-300">- {item}</li>
                  ))}
                </ul>
              </div>
            )}

            {detail?.prototypePlan && (
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-3">Prototype Plan</h3>
                <ul className="space-y-2">
                  {detail.prototypePlan.map((item) => (
                    <li key={item} className="text-slate-300">- {item}</li>
                  ))}
                </ul>
              </div>
            )}

            {detail?.wiringSummary && (
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-3">Wiring Summary</h3>
                <ul className="space-y-2">
                  {detail.wiringSummary.map((item) => (
                    <li key={item} className="text-slate-300">- {item}</li>
                  ))}
                </ul>
              </div>
            )}

            {detail?.limitations && (
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-3">Limitations</h3>
                <ul className="space-y-2">
                  {detail.limitations.map((item) => (
                    <li key={item} className="text-slate-300">- {item}</li>
                  ))}
                </ul>
              </div>
            )}

            {detail?.conclusion && (
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-3">Conclusion</h3>
                <ul className="space-y-2">
                  {detail.conclusion.map((item) => (
                    <li key={item} className="text-slate-300">- {item}</li>
                  ))}
                </ul>
              </div>
            )}

            {detail?.flowProcess && (
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-3">Working Flow</h3>
                <ul className="space-y-2">
                  {detail.flowProcess.map((item, idx) => (
                    <li key={`${item}-${idx}`} className="text-slate-300">{idx + 1}. {item}</li>
                  ))}
                </ul>
              </div>
            )}

            {detail?.media && (
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-3">Project Media and Files</h3>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  {detail.media.filter((m) => m.type === 'image').map((item) => (
                    <div key={item.src} className="rounded-2xl overflow-hidden border border-slate-700/60 bg-slate-950/40">
                      <img src={item.src} alt={item.label} className="w-full h-56 object-cover" />
                      <p className="p-3 text-sm text-slate-300">{item.label}</p>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3">
                  {detail.media.filter((m) => m.type === 'file').map((item) => (
                    <a
                      key={item.src}
                      href={item.src}
                      download
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 text-slate-200 hover:bg-slate-700 transition-colors"
                    >
                      <ExternalLink size={14} />
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            )}

            {detail?.notes && (
              <div className="mb-8 space-y-2">
                {detail.notes.map((note) => (
                  <p key={note} className="text-slate-300">- {note}</p>
                ))}
              </div>
            )}

            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setShowContacts((prev) => !prev)}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl btn-gradient text-white font-medium"
              >
                <ExternalLink size={16} />
                Discuss This Project
              </button>
              {project.video && (
                <a
                  href={project.video}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-slate-700 text-slate-200 hover:border-indigo-500/40"
                >
                  <PlayCircle size={16} />
                  Open Demo Video
                </a>
              )}
            </div>

            {showContacts && (
              <div className="mt-4 p-4 rounded-2xl border border-slate-700/60 bg-slate-950/50">
                <p className="text-slate-300 text-sm mb-3">Contact me via:</p>
                <div className="flex flex-wrap gap-2">
                  {contactOptions.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 text-slate-200 hover:bg-slate-700 transition-colors"
                    >
                      <item.icon size={16} />
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
    </main>
  );
};

export default ProjectDetailsPage;
