import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const categories = [
  'All',
  'Citrus',
  'Green',
  'Berry',
  'Tropical',
  'Detox',
  'Immunity',
  'Smoothie',
]

const sortOptions = [
  { value: 'popular', label: 'Most Popular' },
  { value: 'price-low', label: 'Price: Low to High' },
  { value: 'price-high', label: 'Price: High to Low' },
  { value: 'name', label: 'Name A-Z' },
]

const menuItems = [
  { id: 1, name: 'Sunrise Orange', category: 'Citrus', price: 249, emoji: '🍊', color: '#FF6B35', description: 'Cold pressed Valencia oranges with turmeric', calories: 120, ml: 300, popular: 10, tags: ['Vitamin C', 'Energy'] },
  { id: 2, name: 'Lemon Ginger Zing', category: 'Citrus', price: 199, emoji: '🍋', color: '#FFD166', description: 'Fresh lemon, ginger root & raw honey', calories: 85, ml: 250, popular: 8, tags: ['Digestion', 'Immunity'] },
  { id: 3, name: 'Grapefruit Blush', category: 'Citrus', price: 269, emoji: '🍊', color: '#FF7043', description: 'Ruby red grapefruit with mint leaves', calories: 110, ml: 300, popular: 6, tags: ['Weight Loss', 'Vitamin C'] },
  { id: 4, name: 'Green Detox', category: 'Green', price: 299, emoji: '🥝', color: '#4CAF50', description: 'Kale, spinach, apple, ginger & lemon', calories: 95, ml: 350, popular: 9, tags: ['Cleanse', 'Iron'] },
  { id: 5, name: 'Celery Reset', category: 'Green', price: 279, emoji: '🥒', color: '#66BB6A', description: 'Pure celery juice with cucumber & lime', calories: 45, ml: 350, popular: 7, tags: ['Anti-inflammatory', 'Hydration'] },
  { id: 6, name: 'Spinach Power', category: 'Green', price: 289, emoji: '🥬', color: '#388E3C', description: 'Spinach, pear, mint & wheatgrass shot', calories: 80, ml: 300, popular: 5, tags: ['Iron', 'Energy'] },
  { id: 7, name: 'Berry Bliss', category: 'Berry', price: 329, emoji: '🍓', color: '#E91E63', description: 'Mixed berries with pomegranate & acai', calories: 145, ml: 350, popular: 10, tags: ['Antioxidant', 'Skin'] },
  { id: 8, name: 'Blueberry Zen', category: 'Berry', price: 349, emoji: '🫐', color: '#5C6BC0', description: 'Organic blueberries, lavender & vanilla', calories: 130, ml: 300, popular: 7, tags: ['Brain Health', 'Calm'] },
  { id: 9, name: 'Raspberry Glow', category: 'Berry', price: 309, emoji: '🍇', color: '#AD1457', description: 'Raspberries, beetroot & rose water', calories: 125, ml: 300, popular: 6, tags: ['Skin', 'Glow'] },
  { id: 10, name: 'Tropical Mango', category: 'Tropical', price: 279, emoji: '🥭', color: '#FFB300', description: 'Alphonso mango, pineapple & coconut water', calories: 160, ml: 350, popular: 9, tags: ['Vitamin A', 'Hydration'] },
  { id: 11, name: 'Pineapple Paradise', category: 'Tropical', price: 259, emoji: '🍍', color: '#FDD835', description: 'Fresh pineapple with passion fruit & lime', calories: 135, ml: 300, popular: 8, tags: ['Digestion', 'Bromelain'] },
  { id: 12, name: 'Coconut Cool', category: 'Tropical', price: 229, emoji: '🥥', color: '#A1887F', description: 'Fresh coconut water with aloe vera & mint', calories: 70, ml: 400, popular: 7, tags: ['Electrolytes', 'Cooling'] },
  { id: 13, name: 'Immunity Shield', category: 'Immunity', price: 349, emoji: '🛡️', color: '#FF9800', description: 'Orange, turmeric, black pepper & echinacea', calories: 115, ml: 300, popular: 8, tags: ['Immunity', 'Anti-inflammatory'] },
  { id: 14, name: 'Ginger Fire', category: 'Immunity', price: 199, emoji: '🔥', color: '#E65100', description: 'Concentrated ginger, cayenne & apple cider vinegar', calories: 35, ml: 60, popular: 9, tags: ['Shot', 'Metabolism'] },
  { id: 15, name: 'Amla Boost', category: 'Immunity', price: 269, emoji: '💚', color: '#558B2F', description: 'Indian gooseberry, tulsi & wheatgrass', calories: 75, ml: 250, popular: 6, tags: ['Vitamin C', 'Ayurvedic'] },
  { id: 16, name: 'Charcoal Cleanse', category: 'Detox', price: 369, emoji: '🖤', color: '#424242', description: 'Activated charcoal, lemon, maple & cayenne', calories: 55, ml: 350, popular: 7, tags: ['Deep Cleanse', 'Reset'] },
  { id: 17, name: 'ABC Detox', category: 'Detox', price: 249, emoji: '🍎', color: '#C62828', description: 'Apple, beetroot & carrot classic cleanse', calories: 105, ml: 350, popular: 8, tags: ['Classic', 'Blood Purifier'] },
  { id: 18, name: 'Aloe Refresh', category: 'Detox', price: 219, emoji: '🌵', color: '#81C784', description: 'Aloe vera gel with cucumber & lime', calories: 40, ml: 300, popular: 5, tags: ['Gut Health', 'Cooling'] },
  { id: 19, name: 'Mango Lassi Smoothie', category: 'Smoothie', price: 349, emoji: '🥭', color: '#FFB74D', description: 'Mango pulp, yogurt, cardamom & saffron', calories: 210, ml: 400, popular: 9, tags: ['Protein', 'Probiotic'] },
  { id: 20, name: 'Banana PB Smoothie', category: 'Smoothie', price: 329, emoji: '🍌', color: '#FFE082', description: 'Banana, peanut butter, oat milk & cacao', calories: 280, ml: 400, popular: 8, tags: ['Protein', 'Pre-Workout'] },
  { id: 21, name: 'Avocado Dream', category: 'Smoothie', price: 379, emoji: '🥑', color: '#689F38', description: 'Avocado, spinach, banana & almond milk', calories: 240, ml: 400, popular: 7, tags: ['Healthy Fats', 'Filling'] },
  { id: 22, name: 'Watermelon Refresh', category: 'Tropical', price: 199, emoji: '🍉', color: '#EF5350', description: 'Fresh watermelon with mint & black salt', calories: 90, ml: 400, popular: 8, tags: ['Hydration', 'Summer'] },
  { id: 23, name: 'Pomegranate Ruby', category: 'Berry', price: 339, emoji: '❤️', color: '#B71C1C', description: 'Pure pomegranate arils cold pressed', calories: 135, ml: 300, popular: 7, tags: ['Heart Health', 'Iron'] },
  { id: 24, name: 'Sweet Lime Cooler', category: 'Citrus', price: 179, emoji: '🍈', color: '#C0CA33', description: 'Sweet lime, rock salt & cumin refresh', calories: 80, ml: 300, popular: 6, tags: ['Summer', 'Hydration'] },
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.05, duration: 0.4, ease: 'easeOut' }
  }),
  exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
}

const MenuPage = () => {
  const [activeCategory, setActiveCategory] = useState('All')
  const [sortBy, setSortBy] = useState('popular')
  const [searchQuery, setSearchQuery] = useState('')
  const [priceRange, setPriceRange] = useState([0, 500])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const filteredItems = menuItems
    .filter(item => {
      const matchCategory = activeCategory === 'All' || item.category === activeCategory
      const matchSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      const matchPrice = item.price >= priceRange[0] && item.price <= priceRange[1]
      return matchCategory && matchSearch && matchPrice
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low': return a.price - b.price
        case 'price-high': return b.price - a.price
        case 'name': return a.name.localeCompare(b.name)
        case 'popular': default: return b.popular - a.popular
      }
    })

  return (
    <div style={styles.page}>
      <section style={styles.header}>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          style={styles.title}
        >
          Our <span className="gradient-text">Menu</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          style={styles.subtitle}
        >
          Discover our full range of cold pressed juices and smoothies
        </motion.p>
      </section>

      {/* Filters */}
      <section style={styles.filterSection}>
        <div style={styles.filterContainer}>
          {/* Search */}
          <div style={styles.searchBox}>
            <span style={styles.searchIcon}>🔍</span>
            <input
              type="text"
              placeholder="Search juices, ingredients, benefits..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={styles.searchInput}
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery('')} style={styles.clearBtn}>
                ✕
              </button>
            )}
          </div>

          {/* Category Pills */}
          <div style={styles.categoryPills}>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  ...styles.pill,
                  background: activeCategory === cat
                    ? 'linear-gradient(135deg, #FF6B35, #ff8f65)'
                    : 'rgba(255,255,255,0.05)',
                  color: activeCategory === cat ? 'white' : 'rgba(255,255,255,0.7)',
                  border: activeCategory === cat
                    ? 'none'
                    : '1px solid rgba(255,255,255,0.1)',
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Sort & Price Filter Row */}
          <div style={styles.filterRow}>
            <div style={styles.sortContainer}>
              <label style={styles.filterLabel}>Sort by:</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                style={styles.select}
              >
                {sortOptions.map(opt => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
            </div>

            <div style={styles.priceContainer}>
              <label style={styles.filterLabel}>
                Price: ₹{priceRange[0]} - ₹{priceRange[1]}
              </label>
              <input
                type="range"
                min="0"
                max="500"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                style={styles.rangeSlider}
              />
            </div>

            <div style={styles.resultCount}>
              <span style={styles.resultBadge}>{filteredItems.length}</span> juices found
            </div>
          </div>
        </div>
      </section>

      {/* Menu Grid */}
      <section style={styles.menuSection}>
        <AnimatePresence mode="popLayout">
          <div style={styles.menuGrid}>
            {filteredItems.map((item, i) => (
              <motion.div
                key={item.id}
                layout
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={fadeUp}
                custom={i}
                className="glass-card"
                style={styles.menuCard}
              >
                <div style={{
                  ...styles.menuCardHeader,
                  background: `linear-gradient(135deg, ${item.color}22, ${item.color}44)`,
                }}>
                  <span style={styles.menuEmoji}>{item.emoji}</span>
                  <div style={styles.menuMeta}>
                    <span style={styles.menuCal}>{item.calories} cal</span>
                    <span style={styles.menuMl}>{item.ml}ml</span>
                  </div>
                </div>

                <div style={styles.menuCardBody}>
                  <div style={styles.menuCategoryBadge}>
                    <span style={{ color: item.color, fontWeight: 600, fontSize: '0.75rem' }}>
                      {item.category}
                    </span>
                  </div>
                  <h3 style={styles.menuName}>{item.name}</h3>
                  <p style={styles.menuDesc}>{item.description}</p>

                  <div style={styles.menuTags}>
                    {item.tags.map((tag, j) => (
                      <span key={j} style={styles.menuTag}>{tag}</span>
                    ))}
                  </div>

                  <div style={styles.menuFooter}>
                    <span style={styles.menuPrice}>₹{item.price}</span>
                    <button style={{
                      ...styles.addBtn,
                      background: item.color,
                    }}>
                      Add to Cart
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatePresence>

        {filteredItems.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={styles.emptyState}
          >
            <span style={{ fontSize: '4rem' }}>🍹</span>
            <h3 style={{ marginTop: '1rem', fontFamily: "'Playfair Display', serif" }}>
              No juices found
            </h3>
            <p style={{ opacity: 0.6, marginTop: '0.5rem' }}>
              Try adjusting your filters or search query
            </p>
            <button
              onClick={() => { setActiveCategory('All'); setSearchQuery(''); setPriceRange([0, 500]) }}
              className="btn-primary"
              style={{ marginTop: '1.5rem' }}
            >
              Reset Filters
            </button>
          </motion.div>
        )}
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
    maxWidth: '500px',
    margin: '0 auto',
  },
  filterSection: {
    padding: '0 2rem',
    maxWidth: '1200px',
    margin: '0 auto 2rem',
  },
  filterContainer: {
    background: 'rgba(255,255,255,0.03)',
    borderRadius: '20px',
    padding: '1.5rem',
    border: '1px solid rgba(255,255,255,0.08)',
  },
  searchBox: {
    position: 'relative',
    marginBottom: '1.5rem',
  },
  searchIcon: {
    position: 'absolute',
    left: '16px',
    top: '50%',
    transform: 'translateY(-50%)',
    fontSize: '1.1rem',
  },
  searchInput: {
    width: '100%',
    padding: '14px 40px 14px 48px',
    background: 'rgba(255,255,255,0.05)',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: '12px',
    color: '#FAFAF5',
    fontSize: '1rem',
    outline: 'none',
    fontFamily: "'Inter', sans-serif",
    boxSizing: 'border-box',
  },
  clearBtn: {
    position: 'absolute',
    right: '12px',
    top: '50%',
    transform: 'translateY(-50%)',
    background: 'rgba(255,255,255,0.1)',
    border: 'none',
    color: '#FAFAF5',
    width: '24px',
    height: '24px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    fontSize: '0.8rem',
  },
  categoryPills: {
    display: 'flex',
    gap: '0.5rem',
    flexWrap: 'wrap',
    marginBottom: '1.5rem',
  },
  pill: {
    padding: '8px 20px',
    borderRadius: '50px',
    fontSize: '0.85rem',
    fontWeight: 500,
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    fontFamily: "'Inter', sans-serif",
  },
  filterRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '2rem',
    flexWrap: 'wrap',
  },
  sortContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  },
  filterLabel: {
    fontSize: '0.85rem',
    opacity: 0.7,
    whiteSpace: 'nowrap',
  },
  select: {
    background: 'rgba(255,255,255,0.05)',
    border: '1px solid rgba(255,255,255,0.1)',
    color: '#FAFAF5',
    padding: '8px 12px',
    borderRadius: '8px',
    fontSize: '0.85rem',
    fontFamily: "'Inter', sans-serif",
    cursor: 'pointer',
  },
  priceContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    flex: 1,
    minWidth: '200px',
  },
  rangeSlider: {
    flex: 1,
    accentColor: '#FF6B35',
    cursor: 'pointer',
  },
  resultCount: {
    fontSize: '0.85rem',
    opacity: 0.6,
    whiteSpace: 'nowrap',
  },
  resultBadge: {
    background: 'linear-gradient(135deg, #FF6B35, #ff8f65)',
    color: 'white',
    padding: '2px 10px',
    borderRadius: '12px',
    fontWeight: 700,
    fontSize: '0.8rem',
  },
  menuSection: {
    padding: '0 2rem',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  menuGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    gap: '1.5rem',
  },
  menuCard: {
    padding: 0,
    overflow: 'hidden',
  },
  menuCardHeader: {
    padding: '2rem',
    textAlign: 'center',
    position: 'relative',
  },
  menuEmoji: {
    fontSize: '4rem',
    display: 'block',
  },
  menuMeta: {
    position: 'absolute',
    top: '1rem',
    right: '1rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
    alignItems: 'flex-end',
  },
  menuCal: {
    fontSize: '0.7rem',
    background: 'rgba(0,0,0,0.3)',
    padding: '2px 8px',
    borderRadius: '8px',
    color: 'rgba(255,255,255,0.8)',
  },
  menuMl: {
    fontSize: '0.7rem',
    background: 'rgba(0,0,0,0.3)',
    padding: '2px 8px',
    borderRadius: '8px',
    color: 'rgba(255,255,255,0.8)',
  },
  menuCardBody: {
    padding: '1.5rem',
  },
  menuCategoryBadge: {
    marginBottom: '0.5rem',
  },
  menuName: {
    fontFamily: "'Playfair Display', serif",
    fontSize: '1.2rem',
    fontWeight: 700,
    marginBottom: '0.5rem',
  },
  menuDesc: {
    fontSize: '0.85rem',
    opacity: 0.6,
    lineHeight: 1.5,
    marginBottom: '1rem',
  },
  menuTags: {
    display: 'flex',
    gap: '0.4rem',
    flexWrap: 'wrap',
    marginBottom: '1rem',
  },
  menuTag: {
    fontSize: '0.7rem',
    padding: '3px 10px',
    borderRadius: '12px',
    background: 'rgba(255,255,255,0.05)',
    border: '1px solid rgba(255,255,255,0.1)',
    color: 'rgba(255,255,255,0.6)',
  },
  menuFooter: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  menuPrice: {
    fontFamily: "'Playfair Display', serif",
    fontSize: '1.4rem',
    fontWeight: 700,
    color: '#FFD166',
  },
  addBtn: {
    color: 'white',
    padding: '8px 20px',
    borderRadius: '20px',
    fontWeight: 600,
    fontSize: '0.85rem',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    fontFamily: "'Inter', sans-serif",
  },
  emptyState: {
    textAlign: 'center',
    padding: '4rem 2rem',
  },
}

export default MenuPage
