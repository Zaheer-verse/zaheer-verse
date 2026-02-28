import { motion } from 'framer-motion';
import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Quick Links',
      links: [
        { label: 'Home', href: '#home' },
        { label: 'About', href: '#about' },
        { label: 'Skills', href: '#skills' },
        { label: 'Projects', href: '#projects' },
      ],
    },
    {
      title: 'Services',
      links: [
        { label: 'Web Development', href: '#skills' },
        { label: 'IoT Solutions', href: '#skills' },
        { label: 'Smart Automation', href: '#projects' },
        { label: 'Resume', href: '/resume' },
      ],
    },
    {
      title: 'Connect',
      links: [
        { label: 'GitHub', href: 'https://github.com/Zaheer-verse' },
        { label: 'LinkedIn', href: 'https://www.linkedin.com/in/zaheer-yousaf' },
        { label: 'Instagram', href: 'https://www.instagram.com/zaheer_verse' },
        { label: 'WhatsApp', href: 'https://wa.me/923335398292' },
      ],
    },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      if (window.location.pathname !== '/') {
        window.location.href = `/${href}`;
      } else {
        const element = document.getElementById(href.slice(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <footer className="relative py-16 px-4 sm:px-6 lg:px-8 border-t border-slate-800/50">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">Z</span>
                </div>
                <span className="text-2xl font-bold gradient-text">Zaheer-verse</span>
              </div>
              <p className="text-slate-400 mb-6 max-w-sm">
                Building smart automation and crafting intelligent & connected solutions.
                Let&apos;s create something amazing together.
              </p>
              
              {/* Newsletter hint */}
              <div className="p-4 rounded-xl bg-slate-800/30 border border-slate-700/50">
                <p className="text-sm text-slate-500">
                  Open to mentorship, collaboration, and new opportunities.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Links */}
          {footerLinks.map((group, groupIndex) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * (groupIndex + 1) }}
            >
              <h3 className="text-white font-semibold mb-4">{group.title}</h3>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-slate-400 hover:text-indigo-400 transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="pt-8 border-t border-slate-800/50 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="text-slate-500 text-sm flex items-center gap-1">
            &copy; {currentYear} Zaheer-verse. Made with 
            <Heart className="w-4 h-4 text-red-500 fill-red-500" /> 
            in Pakistan
          </p>

          <div className="flex items-center gap-6">
            <a href="#" className="text-slate-500 hover:text-slate-400 text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-slate-500 hover:text-slate-400 text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </motion.div>

        {/* Scroll to top button */}
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-indigo-500 text-white flex items-center justify-center shadow-lg shadow-indigo-500/30 hover:bg-indigo-600 transition-colors z-40"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ArrowUp size={20} />
        </motion.button>
      </div>
    </footer>
  );
};

export default Footer;
