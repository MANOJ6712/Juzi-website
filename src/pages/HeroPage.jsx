import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: 'easeOut' }
  }),
}

const bestSellers = [
  {
    name: 'Sunrise Orange',
    description: 'Cold pressed Valencia oranges with a hint of turmeric',
    price: '₹249',
    color: '#FF6B35',
    emoji: '🍊',
    tag: 'Best Seller',
  },
  {
    name: 'Green Detox',
    description: 'Kale, spinach, apple, ginger & lemon cleanse blend',
    price: '₹299',
    color: '#4CAF50',
    emoji: '🥝',
    tag: 'Popular',
  },
  {
    name: 'Berry Bliss',
    description: 'Mixed berries with pomegranate & açaí superfood boost',
    price: '₹329',
    color: '#E91E63',
    emoji: '🍓',
    tag: 'New',
  },
  {
    name: 'Tropical Mango',
    description: 'Alphonso mango, pineapple & coconut water fusion',
    price: '₹279',
    color: '#FFD166',
    emoji: '🥭',
    tag: 'Seasonal',
  },
]

const stats = [
  { number: '50K+', label: 'Happy Customers' },
  { number: '25+', label: 'Juice Varieties' },
  { number: '100%', label: 'Cold Pressed' },
  { number: '0', label: 'Preservatives' },
]

const HeroPage = () => {
  const heroRef = useRef()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div style={styles.page}>
      {/* Hero Section */}
      <section ref={heroRef} style={styles.heroSection}>
        <div style={styles.heroContent}>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={0}
            style={styles.heroBadge}
          >
            🍊 100% Natural Cold Pressed Juices
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={1}
            style={styles.heroTitle}
          >
            Fresh from Nature,{' '}
            <span style={styles.gradientText}>Pressed for You</span>
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={2}
            style={styles.heroSubtitle}
          >
            Experience the purest form of nutrition with JUZI's cold pressed juices.
            No heat, no preservatives, just raw natural goodness in every sip.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={3}
            style={styles.heroBtns}
          >
            <Link to="/menu" className="btn-primary">
              Explore Menu <span>→</span>
            </Link>
            <Link to="/contact" className="btn-secondary">
              Visit Us
            </Link>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={4}
            style={styles.statsRow}
          >
            {stats.map((stat, i) => (
              <div key={i} style={styles.statItem}>
                <span style={styles.statNumber}>{stat.number}</span>
                <span style={styles.statLabel}>{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Best Sellers Section */}
      <section style={styles.section}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
        >
          <h2 className="section-title">
            Our <span className="gradient-text">Best Sellers</span>
          </h2>
          <p className="section-subtitle">
            Handcrafted with love, pressed to perfection
          </p>
        </motion.div>

        <div style={styles.grid}>
          {bestSellers.map((item, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              custom={i}
              className="glass-card"
              style={styles.juiceCard}
            >
              <span style={styles.cardTag}>{item.tag}</span>
              <div style={{
                ...styles.cardEmoji,
                background: `linear-gradient(135deg, ${item.color}22, ${item.color}44)`,
              }}>
                <span style={{ fontSize: '4rem' }}>{item.emoji}</span>
              </div>
              <h3 style={styles.cardTitle}>{item.name}</h3>
              <p style={styles.cardDesc}>{item.description}</p>
              <div style={styles.cardFooter}>
                <span style={styles.cardPrice}>{item.price}</span>
                <Link to="/menu" style={{
                  ...styles.cardBtn,
                  background: item.color,
                }}>
                  Order
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Brand Promotion Section */}
      <section style={styles.section}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
        >
          <h2 className="section-title">
            Why <span className="gradient-text">JUZI?</span>
          </h2>
          <p className="section-subtitle">
            We're not just a juice brand, we're a wellness movement
          </p>
        </motion.div>

        <div style={styles.featureGrid}>
          {[
            {
              icon: '🌿',
              title: 'Farm Fresh',
              desc: 'Sourced directly from organic farms across India, ensuring the freshest produce in every bottle.',
            },
            {
              icon: '❄️',
              title: 'Cold Pressed',
              desc: 'Hydraulic cold press technology preserves vitamins, enzymes, and minerals without heat damage.',
            },
            {
              icon: '🚫',
              title: 'Zero Preservatives',
              desc: 'No added sugar, no preservatives, no artificial flavors. Just pure, honest nutrition.',
            },
            {
              icon: '♻️',
              title: 'Eco Friendly',
              desc: 'Sustainable glass bottles and biodegradable packaging. Because we care for the planet too.',
            },
            {
              icon: '🔬',
              title: 'Lab Tested',
              desc: 'Every batch is tested for quality and safety in our state-of-the-art facility.',
            },
            {
              icon: '🏃',
              title: 'Active Lifestyle',
              desc: 'Designed for health enthusiasts, athletes, and anyone seeking a natural energy boost.',
            },
          ].map((feature, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              custom={i}
              className="glass-card"
              style={styles.featureCard}
            >
              <span style={styles.featureIcon}>{feature.icon}</span>
              <h3 style={styles.featureTitle}>{feature.title}</h3>
              <p style={styles.featureDesc}>{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Founder Section */}
      <section style={styles.section}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
        >
          <h2 className="section-title">
            Meet Our <span className="gradient-text">Founder</span>
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          style={styles.founderSection}
        >
          <div className="glass-card" style={styles.founderCard}>
            <div style={styles.founderImageContainer}>
              <div style={styles.founderAvatar}>
                <span style={{ fontSize: '4rem' }}>👨‍💼</span>
              </div>
              <div style={styles.founderInfo}>
                <h3 style={styles.founderName}>Rajesh Kumar</h3>
                <p style={styles.founderRole}>Founder & CEO</p>
                <div style={styles.socialLinks}>
                  <a href="#" style={styles.socialLink}>LinkedIn</a>
                  <a href="#" style={styles.socialLink}>Twitter</a>
                </div>
              </div>
            </div>
            <div style={styles.founderStory}>
              <p style={styles.founderQuote}>
                "I started JUZI with a simple belief — everyone deserves access to pure,
                unprocessed nutrition. After years in the wellness industry, I saw the gap
                between what people were drinking and what their bodies truly needed."
              </p>
              <p style={styles.founderBio}>
                With over 15 years of experience in the food & beverage industry, Rajesh
                founded JUZI in 2020 with a vision to make cold pressed juices accessible
                to every Indian household. Starting from a small kitchen in Bengaluru,
                JUZI has grown to serve over 50,000 customers across multiple cities.
              </p>
              <div style={styles.founderStats}>
                <div style={styles.founderStat}>
                  <span style={styles.founderStatNum}>15+</span>
                  <span style={styles.founderStatLabel}>Years Experience</span>
                </div>
                <div style={styles.founderStat}>
                  <span style={styles.founderStatNum}>2020</span>
                  <span style={styles.founderStatLabel}>Founded</span>
                </div>
                <div style={styles.founderStat}>
                  <span style={styles.founderStatNum}>5</span>
                  <span style={styles.founderStatLabel}>Cities</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Location Section */}
      <section style={styles.section}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
        >
          <h2 className="section-title">
            Visit Our <span className="gradient-text">Outlet</span>
          </h2>
          <p className="section-subtitle">
            Come taste the freshness at our flagship store
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          style={styles.locationContainer}
        >
          <div className="glass-card" style={styles.locationCard}>
            <div style={styles.mapContainer}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.985594604577!2d77.5945627!3d12.9715987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka%2C%20India!5e0!3m2!1sen!2sin!4v1704067200000!5m2!1sen!2sin"
                width="100%"
                height="350"
                style={{ border: 0, borderRadius: '16px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="JUZI Store Location"
              />
            </div>
            <div style={styles.locationDetails}>
              <div style={styles.locationItem}>
                <span style={styles.locationIcon}>📍</span>
                <div>
                  <h4 style={styles.locationLabel}>Address</h4>
                  <p style={styles.locationText}>JUZI Flagship Store, MG Road, Bengaluru, Karnataka 560001</p>
                </div>
              </div>
              <div style={styles.locationItem}>
                <span style={styles.locationIcon}>🕐</span>
                <div>
                  <h4 style={styles.locationLabel}>Hours</h4>
                  <p style={styles.locationText}>Mon - Sat: 7:00 AM - 9:00 PM | Sun: 8:00 AM - 8:00 PM</p>
                </div>
              </div>
              <div style={styles.locationItem}>
                <span style={styles.locationIcon}>📞</span>
                <div>
                  <h4 style={styles.locationLabel}>Contact</h4>
                  <p style={styles.locationText}>+91 98765 43210 | hello@juzi.in</p>
                </div>
              </div>
              <a
                href="https://maps.app.goo.gl/VV6x8zvZ3wLdo9Zh9?g_st=ac"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ marginTop: '1rem', display: 'inline-flex' }}
              >
                Get Directions <span>📍</span>
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section style={styles.ctaSection}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          style={styles.ctaContent}
        >
          <h2 style={styles.ctaTitle}>
            Ready to Start Your{' '}
            <span className="gradient-text">Juice Journey?</span>
          </h2>
          <p style={styles.ctaText}>
            Join 50,000+ happy customers who made the switch to cold pressed goodness.
          </p>
          <div style={styles.ctaBtns}>
            <Link to="/menu" className="btn-primary" style={{ fontSize: '1.1rem', padding: '16px 40px' }}>
              View Full Menu
            </Link>
            <Link to="/contact" className="btn-secondary" style={{ fontSize: '1.1rem', padding: '16px 40px' }}>
              Contact Us
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <div style={styles.footerContent}>
          <div style={styles.footerBrand}>
            <span style={{ fontSize: '2rem' }}>🍊</span>
            <span style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '1.5rem',
              fontWeight: 800,
              background: 'linear-gradient(135deg, #FF6B35, #FFD166)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>JUZI</span>
          </div>
          <p style={styles.footerText}>
            Cold Pressed Juices | Fresh. Pure. Natural.
          </p>
          <div style={styles.footerLinks}>
            <Link to="/" style={styles.footerLink}>Home</Link>
            <Link to="/menu" style={styles.footerLink}>Menu</Link>
            <Link to="/contact" style={styles.footerLink}>Contact</Link>
          </div>
          <p style={styles.copyright}>
            &copy; 2024 JUZI Cold Pressed Juices. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

const styles = {
  page: { minHeight: '100vh' },
  heroSection: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '120px 2rem 80px',
  },
  heroContent: {
    maxWidth: '900px',
    textAlign: 'center',
  },
  heroBadge: {
    display: 'inline-block',
    background: 'rgba(255, 107, 53, 0.15)',
    border: '1px solid rgba(255, 107, 53, 0.3)',
    padding: '8px 20px',
    borderRadius: '50px',
    fontSize: '0.9rem',
    fontWeight: 500,
    marginBottom: '2rem',
    color: '#FF6B35',
  },
  heroTitle: {
    fontFamily: "'Playfair Display', serif",
    fontSize: 'clamp(2.5rem, 7vw, 5rem)',
    fontWeight: 800,
    lineHeight: 1.1,
    marginBottom: '1.5rem',
    color: '#FAFAF5',
  },
  gradientText: {
    background: 'linear-gradient(135deg, #FF6B35, #FFD166)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  heroSubtitle: {
    fontSize: 'clamp(1rem, 2.5vw, 1.3rem)',
    lineHeight: 1.7,
    opacity: 0.7,
    maxWidth: '650px',
    margin: '0 auto 2.5rem',
    fontWeight: 300,
  },
  heroBtns: {
    display: 'flex',
    gap: '1rem',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginBottom: '4rem',
  },
  statsRow: {
    display: 'flex',
    justifyContent: 'center',
    gap: '3rem',
    flexWrap: 'wrap',
  },
  statItem: {
    textAlign: 'center',
  },
  statNumber: {
    display: 'block',
    fontFamily: "'Playfair Display', serif",
    fontSize: '2rem',
    fontWeight: 700,
    color: '#FF6B35',
  },
  statLabel: {
    fontSize: '0.85rem',
    opacity: 0.6,
    fontWeight: 300,
  },
  section: {
    padding: '80px 2rem',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
    gap: '1.5rem',
  },
  juiceCard: {
    position: 'relative',
    overflow: 'hidden',
    textAlign: 'center',
  },
  cardTag: {
    position: 'absolute',
    top: '1rem',
    right: '1rem',
    background: 'rgba(255, 107, 53, 0.2)',
    color: '#FF6B35',
    padding: '4px 12px',
    borderRadius: '20px',
    fontSize: '0.75rem',
    fontWeight: 600,
  },
  cardEmoji: {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0.5rem auto 1.5rem',
  },
  cardTitle: {
    fontFamily: "'Playfair Display', serif",
    fontSize: '1.3rem',
    fontWeight: 700,
    marginBottom: '0.5rem',
  },
  cardDesc: {
    fontSize: '0.9rem',
    opacity: 0.6,
    lineHeight: 1.6,
    marginBottom: '1.5rem',
  },
  cardFooter: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardPrice: {
    fontFamily: "'Playfair Display', serif",
    fontSize: '1.5rem',
    fontWeight: 700,
    color: '#FFD166',
  },
  cardBtn: {
    color: 'white',
    padding: '8px 20px',
    borderRadius: '20px',
    fontWeight: 600,
    fontSize: '0.85rem',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
  },
  featureGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '1.5rem',
  },
  featureCard: {
    textAlign: 'center',
  },
  featureIcon: {
    fontSize: '3rem',
    display: 'block',
    marginBottom: '1rem',
  },
  featureTitle: {
    fontFamily: "'Playfair Display', serif",
    fontSize: '1.2rem',
    fontWeight: 700,
    marginBottom: '0.5rem',
  },
  featureDesc: {
    fontSize: '0.9rem',
    opacity: 0.6,
    lineHeight: 1.6,
  },
  founderSection: {
    maxWidth: '900px',
    margin: '0 auto',
  },
  founderCard: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
  },
  founderImageContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '2rem',
    flexWrap: 'wrap',
  },
  founderAvatar: {
    width: '120px',
    height: '120px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #FF6B35, #FFD166)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  founderInfo: {},
  founderName: {
    fontFamily: "'Playfair Display', serif",
    fontSize: '1.8rem',
    fontWeight: 700,
    marginBottom: '0.25rem',
  },
  founderRole: {
    color: '#FF6B35',
    fontWeight: 500,
    marginBottom: '0.75rem',
  },
  socialLinks: {
    display: 'flex',
    gap: '1rem',
  },
  socialLink: {
    color: '#FAFAF5',
    opacity: 0.6,
    fontSize: '0.9rem',
    textDecoration: 'underline',
    transition: 'opacity 0.3s',
  },
  founderStory: {},
  founderQuote: {
    fontSize: '1.1rem',
    fontStyle: 'italic',
    lineHeight: 1.7,
    opacity: 0.8,
    borderLeft: '3px solid #FF6B35',
    paddingLeft: '1.5rem',
    marginBottom: '1.5rem',
  },
  founderBio: {
    fontSize: '0.95rem',
    lineHeight: 1.7,
    opacity: 0.6,
    marginBottom: '1.5rem',
  },
  founderStats: {
    display: 'flex',
    gap: '2rem',
    flexWrap: 'wrap',
  },
  founderStat: {
    textAlign: 'center',
  },
  founderStatNum: {
    display: 'block',
    fontFamily: "'Playfair Display', serif",
    fontSize: '1.5rem',
    fontWeight: 700,
    color: '#FF6B35',
  },
  founderStatLabel: {
    fontSize: '0.8rem',
    opacity: 0.6,
  },
  locationContainer: {
    maxWidth: '900px',
    margin: '0 auto',
  },
  locationCard: {
    overflow: 'hidden',
  },
  mapContainer: {
    marginBottom: '1.5rem',
  },
  locationDetails: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  locationItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '1rem',
  },
  locationIcon: {
    fontSize: '1.5rem',
    flexShrink: 0,
  },
  locationLabel: {
    fontWeight: 600,
    marginBottom: '0.25rem',
    fontSize: '0.95rem',
  },
  locationText: {
    fontSize: '0.9rem',
    opacity: 0.7,
    lineHeight: 1.5,
  },
  ctaSection: {
    padding: '100px 2rem',
    textAlign: 'center',
  },
  ctaContent: {
    maxWidth: '700px',
    margin: '0 auto',
  },
  ctaTitle: {
    fontFamily: "'Playfair Display', serif",
    fontSize: 'clamp(2rem, 5vw, 3rem)',
    fontWeight: 700,
    marginBottom: '1rem',
  },
  ctaText: {
    fontSize: '1.1rem',
    opacity: 0.6,
    marginBottom: '2rem',
    lineHeight: 1.7,
  },
  ctaBtns: {
    display: 'flex',
    gap: '1rem',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  footer: {
    borderTop: '1px solid rgba(255,255,255,0.1)',
    padding: '3rem 2rem',
  },
  footerContent: {
    maxWidth: '1200px',
    margin: '0 auto',
    textAlign: 'center',
  },
  footerBrand: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    marginBottom: '1rem',
  },
  footerText: {
    opacity: 0.5,
    fontSize: '0.9rem',
    marginBottom: '1.5rem',
  },
  footerLinks: {
    display: 'flex',
    justifyContent: 'center',
    gap: '2rem',
    marginBottom: '1.5rem',
  },
  footerLink: {
    opacity: 0.6,
    fontSize: '0.9rem',
    transition: 'opacity 0.3s',
  },
  copyright: {
    opacity: 0.3,
    fontSize: '0.8rem',
  },
}

export default HeroPage
