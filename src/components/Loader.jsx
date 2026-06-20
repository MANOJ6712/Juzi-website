import { useState, useEffect } from 'react'

const Loader = () => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + Math.random() * 15
      })
    }, 100)
    return () => clearInterval(interval)
  }, [])

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <div style={styles.logoContainer}>
          <span style={styles.logo}>JUZI</span>
          <span style={styles.tagline}>Cold Pressed Juices</span>
        </div>
        <div style={styles.fruitEmojis}>
          {['🍊', '🍋', '🍇', '🍓', '🥝', '🍎'].map((fruit, i) => (
            <span
              key={i}
              style={{
                ...styles.fruit,
                animationDelay: `${i * 0.2}s`,
                fontSize: '2rem',
              }}
            >
              {fruit}
            </span>
          ))}
        </div>
        <div style={styles.progressBar}>
          <div style={{ ...styles.progressFill, width: `${Math.min(progress, 100)}%` }} />
        </div>
        <span style={styles.loadingText}>Squeezing fresh goodness... {Math.round(Math.min(progress, 100))}%</span>
      </div>
    </div>
  )
}

const styles = {
  container: {
    position: 'fixed',
    inset: 0,
    background: 'linear-gradient(135deg, #1A1A2E 0%, #16213E 50%, #0F3460 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 9999,
  },
  content: {
    textAlign: 'center',
  },
  logoContainer: {
    marginBottom: '2rem',
  },
  logo: {
    fontFamily: "'Playfair Display', serif",
    fontSize: '4rem',
    fontWeight: 800,
    background: 'linear-gradient(135deg, #FF6B35, #FFD166)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    display: 'block',
  },
  tagline: {
    fontSize: '1rem',
    opacity: 0.6,
    letterSpacing: '3px',
    textTransform: 'uppercase',
    color: '#FAFAF5',
  },
  fruitEmojis: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
    marginBottom: '2rem',
  },
  fruit: {
    animation: 'float 1.5s ease-in-out infinite',
    display: 'inline-block',
  },
  progressBar: {
    width: '200px',
    height: '4px',
    background: 'rgba(255,255,255,0.1)',
    borderRadius: '2px',
    margin: '0 auto 1rem',
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    background: 'linear-gradient(90deg, #FF6B35, #FFD166)',
    borderRadius: '2px',
    transition: 'width 0.3s ease',
  },
  loadingText: {
    fontSize: '0.9rem',
    opacity: 0.5,
    color: '#FAFAF5',
  },
}

export default Loader
