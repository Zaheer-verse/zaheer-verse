import { useState, useRef } from 'react';
import { motion, useInView, type Variants } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Instagram, 
  MessageCircle,
  Github,
  Linkedin,
  CheckCircle,
  AlertCircle
} from 'lucide-react';
import Reveal from '../components/Reveal';
import { useScrollDepth } from '../hooks/use-scroll-depth';

const Contact = () => {
  const { ref: sectionRef, contentStyle, accentStyle, stageStyle } = useScrollDepth<HTMLElement>({
    distance: 42,
    tilt: 4,
    scale: 0.02,
  });
  const formRef = useRef<HTMLFormElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'zaheery991@gmail.com',
      href: 'mailto:zaheery991@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+92 333 5398292',
      href: 'https://wa.me/923335398292',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Daska, Sialkot, Pakistan',
      href: 'https://maps.google.com/?q=Daska%2C+Sialkot%2C+Pakistan',
    },
  ];

  const socialLinks = [
    { icon: Github, label: 'GitHub', href: 'https://github.com/Zaheer-verse', color: 'hover:text-gray-400' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/zaheer-yousaf', color: 'hover:text-blue-500' },
    { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/zaheer_verse', color: 'hover:text-pink-500' },
    { icon: MessageCircle, label: 'WhatsApp', href: 'https://wa.me/923335398292', color: 'hover:text-green-500' },
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
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const fallbackToMailto = (name: string, email: string, subject: string, message: string) => {
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      '',
      `Message:`,
      message,
    ].join('\n');

    const mailtoUrl =
      `mailto:zaheery991@gmail.com` +
      `?subject=${encodeURIComponent(`Portfolio Contact: ${subject}`)}` +
      `&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const form = formRef.current;
    if (!form) {
      setIsSubmitting(false);
      setSubmitStatus('error');
      return;
    }

    const formData = new FormData(form);
    const name = String(formData.get('name') || '');
    const email = String(formData.get('email') || '');
    const subject = String(formData.get('subject') || 'Portfolio Contact Message');
    const message = String(formData.get('message') || '');

    try {
      const submitData = new FormData();
      submitData.append('name', name);
      submitData.append('email', email);
      submitData.append('subject', subject);
      submitData.append('message', message);
      submitData.append('_captcha', 'false');
      submitData.append('_template', 'table');
      submitData.append('_subject', `Portfolio Contact: ${subject}`);
      submitData.append('_replyto', email);
      submitData.append('_honey', '');

      const formsubmitRes = await fetch('https://formsubmit.co/el/basuje', {
        method: 'POST',
        body: submitData,
      });
      const text = await formsubmitRes.text();
      const activationBlock = /needs Activation|Check Your Email|Activate Form/i.test(text);

      if (!formsubmitRes.ok || activationBlock) {
        const web3Key = (import.meta as any).env?.VITE_WEB3FORMS_ACCESS_KEY as string | undefined;
        if (web3Key) {
          const web3Data = {
            access_key: web3Key,
            name,
            email,
            subject: `Portfolio Contact: ${subject}`,
            message,
          };
          const web3Res = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(web3Data),
          });
          const web3Json = await web3Res.json();
          if (!web3Res.ok || !web3Json.success) {
            fallbackToMailto(name, email, subject, message);
            setSubmitStatus('error');
            return;
          }
          setSubmitStatus('success');
          form.reset();
          setTimeout(() => setSubmitStatus('idle'), 5000);
          return;
        }

        fallbackToMailto(name, email, subject, message);
        setSubmitStatus('error');
        return;
      }

      setSubmitStatus('success');
      form.reset();
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch {
      fallbackToMailto(name, email, subject, message);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8"
      style={stageStyle}
    >
      <motion.div
        className="scroll-depth-layer top-10 left-[12%] h-28 w-28 rounded-full bg-[color:var(--hero-glow)]"
        style={accentStyle}
      />
      <motion.div className="max-w-7xl mx-auto scroll-depth-shell" style={contentStyle}>
        {/* Section Header */}
        <Reveal
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-500/10 text-indigo-400 text-sm font-medium mb-4">
            Get in Touch
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Let&apos;s <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </Reveal>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Left: Contact Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="lg:col-span-2 space-y-8"
          >
            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  variants={itemVariants}
                  data-cursor="card"
                  data-cursor-label={info.label}
                  className="interactive-surface section-panel flex items-center gap-4 p-4 rounded-2xl bg-slate-800/30 border border-slate-700/50 hover:border-indigo-500/30 transition-all group"
                  whileHover={{ x: 4, y: -2 }}
                >
                  <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center group-hover:bg-indigo-500/20 transition-colors">
                    <info.icon className="w-5 h-5 text-indigo-400" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-500">{info.label}</div>
                    <div className="text-white font-medium">{info.value}</div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <motion.div variants={itemVariants}>
              <h3 className="text-lg font-semibold text-white mb-4">Follow Me</h3>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="button"
                    data-cursor-label={social.label}
                    className={`interactive-surface w-12 h-12 rounded-xl bg-slate-800/50 border border-slate-700 flex items-center justify-center text-slate-400 transition-all ${social.color} hover:border-current`}
                    whileHover={{ scale: 1.08, y: -4 }}
                    whileTap={{ scale: 0.95 }}
                    title={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Availability Badge */}
            <motion.div
              variants={itemVariants}
              data-cursor="card"
              className="section-panel p-4 rounded-2xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-500/20"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <span className="text-white font-medium">Available for work</span>
              </div>
              <p className="text-sm text-slate-400">
                I&apos;m currently open to new projects, collaborations, and mentorship opportunities.
              </p>
            </motion.div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="lg:col-span-3"
          >
            <motion.form
              variants={itemVariants}
              ref={formRef}
              onSubmit={handleSubmit}
              className="section-panel p-6 sm:p-8 rounded-3xl bg-slate-800/30 border border-slate-700/50 shadow-[0_30px_70px_rgba(8,10,20,0.24)]"
            >
              <h3 className="text-xl font-semibold text-white mb-6">Send a Message</h3>
              
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="name" className="block text-sm text-slate-400 mb-2">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    data-cursor="input"
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/50 border border-slate-700 text-white placeholder-slate-500 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm text-slate-400 mb-2">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    data-cursor="input"
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/50 border border-slate-700 text-white placeholder-slate-500 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label htmlFor="subject" className="block text-sm text-slate-400 mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  data-cursor="input"
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/50 border border-slate-700 text-white placeholder-slate-500 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all"
                  placeholder="Project Inquiry"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm text-slate-400 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  data-cursor="input"
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/50 border border-slate-700 text-white placeholder-slate-500 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                data-cursor="button"
                data-cursor-label="Send"
                className="interactive-surface w-full px-6 py-4 rounded-xl btn-gradient text-white font-medium flex items-center justify-center gap-2"
                whileHover={{ scale: isSubmitting ? 1 : 1.02, y: isSubmitting ? 0 : -1 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </motion.button>
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-3 rounded-xl bg-green-500/10 border border-green-500/30 flex items-center gap-2"
                >
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-green-300 text-sm">Message sent successfully.</span>
                </motion.div>
              )}
              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center gap-2"
                >
                  <AlertCircle className="w-4 h-4 text-amber-300" />
                  <span className="text-amber-200 text-sm">
                    Direct delivery failed, your email app should open as fallback.
                  </span>
                </motion.div>
              )}
            </motion.form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
