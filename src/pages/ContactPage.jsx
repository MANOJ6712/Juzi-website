import { motion } from 'framer-motion'
import { useEffect } from 'react'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: 'easeOut' }
  }),
}

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div style={styles.page}>
      <section style={styles.header}>
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          style={styles.title}
        >
          Get in <span className="gradient-text">Touch</span>
        </motion.h1>
        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={1}
          style={styles.subtitle}
        >
          We'd love to hear from you! Reach out for orders, partnerships, or just to say hello.
        </motion.p>
      </section>

      <div style={styles.contentGrid}>
        {/* Contact Form (Google Form Embed) */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={2}
          style={styles.formSection}
        >
          <div className="glass-card" style={styles.formCard}>
            <h2 style={styles.formTitle}>Send Us a Message</h2>
            <p style={styles.formSubtitle}>
              Fill out the form below and we'll get back to you within 24 hours
            </p>

            <div style={styles.formEmbed}>
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSdMvKLY6Q_wZuGQZN8OGeCkn6jAh-JOxBz5z5z5z5z5z5z5z5/viewform?embedded=true"
                width="100%"
                height="800"
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
                style={{
                  borderRadius: '12px',
                  background: 'transparent',
                  minHeight: '600px',
                }}
                title="Contact Form"
              >
                Loading...
              </iframe>
            </div>

            <div style={styles.altContact}>
              <p style={styles.altText}>
                Or you can also reach us directly at:
              </p>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdMvKLY6Q_wZuGQZN8OGeCkn6jAh-JOxBz5z5z5z5z5z5z5z5/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ marginTop: '1rem', display: 'inline-flex' }}
              >
                Open Form in New Tab <span>↗</span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={3}
          style={styles.infoSection}
        >
          {/* Quick Contact Cards */}
          {[
            {
              icon: '📍',
              title: 'Visit Us',
              details: ['JUZI Flagship Store', 'MG Road, Bengaluru', 'Karnataka 560001'],
              action: { label: 'Get Directions', href: 'https://maps.app.goo.gl/VV6x8zvZ3wLdo9Zh9?g_st=ac' },
            },
            {
              icon: '📞',
              title: 'Call Us',
              details: ['+91 98765 43210', 'Mon - Sat: 7 AM - 9 PM'],
              action: { label: 'Call Now', href: 'tel:+919876543210' },
            },
            {
              icon: '✉️',
              title: 'Email Us',
              details: ['hello@juzi.in', 'orders@juzi.in'],
              action: { label: 'Send Email', href: 'mailto:hello@juzi.in' },
            },
            {
              icon: '💬',
              title: 'WhatsApp',
              details: ['+91 98765 43210', 'Quick replies guaranteed!'],
              action: { label: 'Chat on WhatsApp', href: 'https://wa.me/919876543210' },
            },
          ].map((card, i) => (
            <div key={i} className="glass-card" style={styles.contactCard}>
              <span style={styles.contactIcon}>{card.icon}</span>
              <div>
                <h3 style={styles.contactTitle}>{card.title}</h3>
                {card.details.map((detail, j) => (
                  <p key={j} style={styles.contactDetail}>{detail}</p>
                ))}
                <a
                  href={card.action.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={styles.contactAction}
                >
                  {card.action.label} →
                </a>
              </div>
            </div>
          ))}

          {/* Map */}
          <div className="glass-card" style={styles.mapCard}>
            <h3 style={styles.mapTitle}>📍 Find Us Here</h3>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.985594604577!2d77.5945627!3d12.9715987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka%2C%20India!5e0!3m2!1sen!2sin!4v1704067200000!5m2!1sen!2sin"
              width="100%"
              height="250"
              style={{ border: 0, borderRadius: '12px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="JUZI Store Location"
            />
          </div>

          {/* Social Media */}
          <div className="glass-card" style={styles.socialCard}>
            <h3 style={styles.socialTitle}>Follow Us</h3>
            <div style={styles.socialGrid}>
              {[
                { name: 'Instagram', icon: '📸', handle: '@juzi.in', color: '#E1306C' },
                { name: 'Facebook', icon: '👍', handle: '/JuziJuices', color: '#1877F2' },
                { name: 'Twitter', icon: '🐦', handle: '@JuziJuices', color: '#1DA1F2' },
                { name: 'YouTube', icon: '🎥', handle: 'JUZI Official', color: '#FF0000' },
              ].map((social, i) => (
                <a key={i} href="#" style={{
                  ...styles.socialItem,
                  borderColor: `${social.color}33`,
                }}>
                  <span style={{ fontSize: '1.5rem' }}>{social.icon}</span>
                  <span style={styles.socialName}>{social.name}</span>
                  <span style={styles.socialHandle}>{social.handle}</span>
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* FAQ */}
      <section style={styles.faqSection}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="section-title" style={{ marginBottom: '2rem' }}>
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
        </motion.div>

        <div style={styles.faqGrid}>
          {[
            { q: 'How long do cold pressed juices last?', a: 'Our juices are best consumed within 3-5 days. Keep refrigerated at all times for maximum freshness.' },
            { q: 'Do you deliver?', a: 'Yes! We deliver across Bengaluru. Orders placed before 2 PM are delivered the same day.' },
            { q: 'Are your juices organic?', a: 'We source from certified organic farms wherever possible. All produce is pesticide-free and lab tested.' },
            { q: 'Can I customize my juice?', a: 'Absolutely! Visit our store or contact us for custom juice blends tailored to your preferences.' },
            { q: 'Do you offer subscription plans?', a: 'Yes, we have weekly and monthly subscription plans with up to 20% savings. Contact us to learn more!' },
            { q: 'Are your bottles recyclable?', a: 'All our glass bottles are 100% recyclable. Return them to our store and get a discount on your next order.' },
          ].map((faq, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={i}
              className="glass-card"
              style={styles.faqCard}
            >
              <h4 style={styles.faqQuestion}>{faq.q}</h4>
              <p style={styles.faqAnswer}>{faq.a}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}

const styles = {
  page: { minHeight: '100vh', paddingBottom: '4rem' },
  header: {
    padding: '140px 2rem 40px',
    textAlign: 'center',
  },
  title: {
    fontFamily: "'Playfair Display', serif",
    fontSize: 'clamp(2.5rem, 6vw, 4rem)',
    fontWeight: 800,
    marginBottom: '1rem',
  },
  subtitle: {
    fontSize: '1.1rem',
    opacity: 0.6,
    maxWidth: '550px',
    margin: '0 auto',
    lineHeight: 1.7,
  },
  contentGrid: {
    display: 'grid',
    gridTemplateColumns: '1.2fr 1fr',
    gap: '2rem',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 2rem',
  },
  formSection: {},
  formCard: {
    height: '100%',
  },
  formTitle: {
    fontFamily: "'Playfair Display', serif",
    fontSize: '1.5rem',
    fontWeight: 700,
    marginBottom: '0.5rem',
  },
  formSubtitle: {
    fontSize: '0.9rem',
    opacity: 0.6,
    marginBottom: '1.5rem',
  },
  formEmbed: {
    borderRadius: '12px',
    overflow: 'hidden',
    marginBottom: '1.5rem',
    minHeight: '600px',
    background: 'rgba(255,255,255,0.02)',
  },
  altContact: {
    textAlign: 'center',
    paddingTop: '1rem',
    borderTop: '1px solid rgba(255,255,255,0.1)',
  },
  altText: {
    fontSize: '0.9rem',
    opacity: 0.6,
  },
  infoSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  contactCard: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '1rem',
    padding: '1.5rem',
  },
  contactIcon: {
    fontSize: '2rem',
    flexShrink: 0,
  },
  contactTitle: {
    fontFamily: "'Playfair Display', serif",
    fontSize: '1.1rem',
    fontWeight: 700,
    marginBottom: '0.25rem',
  },
  contactDetail: {
    fontSize: '0.9rem',
    opacity: 0.7,
    lineHeight: 1.5,
  },
  contactAction: {
    color: '#FF6B35',
    fontSize: '0.85rem',
    fontWeight: 600,
    display: 'inline-block',
    marginTop: '0.5rem',
    transition: 'color 0.3s',
    textDecoration: 'none',
  },
  mapCard: {
    padding: '1.5rem',
  },
  mapTitle: {
    fontFamily: "'Playfair Display', serif",
    fontSize: '1.1rem',
    marginBottom: '1rem',
  },
  socialCard: {
    padding: '1.5rem',
  },
  socialTitle: {
    fontFamily: "'Playfair Display', serif",
    fontSize: '1.1rem',
    marginBottom: '1rem',
  },
  socialGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '0.75rem',
  },
  socialItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '0.25rem',
    padding: '1rem',
    borderRadius: '12px',
    border: '1px solid',
    background: 'rgba(255,255,255,0.03)',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
  },
  socialName: {
    fontWeight: 600,
    fontSize: '0.85rem',
    color: '#FAFAF5',
  },
  socialHandle: {
    fontSize: '0.75rem',
    opacity: 0.5,
    color: '#FAFAF5',
  },
  faqSection: {
    maxWidth: '1200px',
    margin: '4rem auto 0',
    padding: '0 2rem',
  },
  faqGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
    gap: '1rem',
  },
  faqCard: {
    padding: '1.5rem',
  },
  faqQuestion: {
    fontFamily: "'Playfair Display', serif",
    fontSize: '1rem',
    fontWeight: 700,
    marginBottom: '0.75rem',
    color: '#FF6B35',
  },
  faqAnswer: {
    fontSize: '0.9rem',
    opacity: 0.7,
    lineHeight: 1.6,
  },
}

export default ContactPage
