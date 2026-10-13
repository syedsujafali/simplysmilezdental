import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  tags: string[];
}

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Invisalign vs Traditional Braces: Which Is Right for You?',
    slug: 'invisalign-vs-traditional-braces',
    category: 'Orthodontics',
    author: 'Dr. Ankush Kumar',
    date: 'October 10, 2026',
    readTime: '5 min read',
    image: '/images/braces.webp',
    excerpt:
      'Wondering whether clear aligners or conventional metal/ceramic braces are better suited for your smile? Discover key comparisons on comfort, duration, maintenance, and dental alignment efficacy.',
    tags: ['Invisalign', 'Braces', 'Clear Aligners', 'Orthodontics']
  },
  {
    id: '2',
    title: 'Why Dental Operating Microscopes Revolutionise Root Canal Treatment',
    slug: 'microscopic-root-canal-benefits',
    category: 'Endodontics',
    author: 'Dr. Susheel Kumar',
    date: 'September 28, 2026',
    readTime: '6 min read',
    image: '/images/microscopic-rct.jpg',
    excerpt:
      'Explore how 25x magnification through surgical operating microscopes enables ultra-precise root canal cleaning, broken file retrieval, and long-term tooth preservation without pain.',
    tags: ['Root Canal', 'Microscope RCT', 'Endodontics', 'Painless Dental']
  },
  {
    id: '3',
    title: 'Dental Implants 101: Everything You Need to Know Before Tooth Replacement',
    slug: 'dental-implants-guide',
    category: 'Implantology',
    author: 'Dr. Ankush Kumar',
    date: 'September 15, 2026',
    readTime: '7 min read',
    image: '/images/dentalimp.webp',
    excerpt:
      'Missing teeth can alter your bite, bone structure, and chewing confidence. Learn about the lifetime benefits of titanium dental implants, bone grafting, and immediate restorations.',
    tags: ['Dental Implants', 'Tooth Replacement', 'Restorative Dentistry']
  },
  {
    id: '4',
    title: 'Top 7 Oral Hygiene Tips Every Parent Should Teach Their Kids',
    slug: 'pediatric-dental-care-tips-parents',
    category: 'Pediatric Dentistry',
    author: 'Dr. Susheel Kumar',
    date: 'August 30, 2026',
    readTime: '4 min read',
    image: '/images/pedia2.webp',
    excerpt:
      'Preventing cavities early sets children up for lifelong oral health. Here are essential daily habits, fluoride advice, dietary tips, and sealants explained for parents.',
    tags: ['Kids Dental', 'Cavity Prevention', 'Child Dental Health']
  },
  {
    id: '5',
    title: 'Laser Teeth Whitening vs Home Whitening Kits: What Works Faster & Safer?',
    slug: 'laser-teeth-whitening-comparison',
    category: 'Cosmetic Dentistry',
    author: 'Dr. Ankush Kumar',
    date: 'August 12, 2026',
    readTime: '5 min read',
    image: '/images/teethwhitening.webp',
    excerpt:
      'Can professional laser whitening lift deep stubborn stains better than over-the-counter strips? We break down safety, shade improvements, and enamel protection.',
    tags: ['Teeth Whitening', 'Laser Whitening', 'Cosmetic Smile']
  },
  {
    id: '6',
    title: 'Understanding Wisdom Tooth Impaction: When Is Removal Truly Necessary?',
    slug: 'when-to-extract-wisdom-teeth',
    category: 'Oral Surgery',
    author: 'Dr. Susheel Kumar',
    date: 'July 24, 2026',
    readTime: '5 min read',
    image: '/images/wisdom.webp',
    excerpt:
      'Not all wisdom teeth must be extracted, but impacted third molars can trigger nerve pain, infection, or crowding. Learn the telltale signs that call for a specialist assessment.',
    tags: ['Wisdom Tooth', 'Oral Surgery', 'Impacted Teeth']
  }
];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Dental Health Blog & Articles | Simply Smilez Dental Clinic Hyderabad';
  }, []);

  const categories = ['All', 'Orthodontics', 'Endodontics', 'Implantology', 'Pediatric Dentistry', 'Cosmetic Dentistry', 'Oral Surgery'];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="page-wrapper blogpage">

      <section className="bg-light py-5 min-vh-100">
        <div className="container">
          {/* Breadcrumbs */}
          <div className="mb-4 text-left" style={{ fontSize: '14px', color: '#64748b' }}>
            <Link to="/" style={{ color: '#0284c7', textDecoration: 'none' }}>
              <i className="fa-solid fa-house mr-1"></i> Home
            </Link>
            <span className="mx-2">&gt;</span>
            <span style={{ color: '#0f172a', fontWeight: 600 }}>Blog &amp; Articles</span>
          </div>

          {/* Heading */}
          <div className="text-center heading-section mb-5">
            <h1 className="pb-2 pt-2 font-weight-bold" style={{ fontSize: '32px', color: '#0b2545' }}>
              Dental Health Blog &amp; Insights
            </h1>
            <p className="text-muted mx-auto" style={{ maxWidth: '640px', fontSize: '16px' }}>
              Expert oral healthcare advice, modern treatment guides, and patient tips curated by the dental specialists at Simply Smilez Dental Clinic, Shaikpet, Hyderabad.
            </p>
          </div>

          {/* Filter Bar & Search */}
          <div className="row mb-4 align-items-center justify-content-between g-3">
            <div className="col-12 col-md-8 d-flex flex-wrap gap-2 mb-3 mb-md-0">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`btn btn-sm mr-2 mb-2 ${selectedCategory === cat ? 'btn-primary' : 'btn-outline-secondary'}`}
                  style={{
                    borderRadius: '20px',
                    padding: '6px 16px',
                    fontSize: '13px',
                    fontWeight: 500,
                    transition: 'all 0.2s ease'
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="col-12 col-md-4">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search articles, topics..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  style={{
                    borderRadius: '20px',
                    paddingLeft: '16px',
                    fontSize: '14px',
                    borderColor: '#cbd5e1'
                  }}
                />
              </div>
            </div>
          </div>

          {/* Post Grid */}
          {filteredPosts.length > 0 ? (
            <div className="row g-4">
              {filteredPosts.map((post) => (
                <div key={post.id} className="col-12 col-md-6 col-lg-4 mb-4 d-flex align-items-stretch">
                  <div
                    className="card border-0 shadow-sm w-100"
                    style={{
                      borderRadius: '16px',
                      overflow: 'hidden',
                      transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                      backgroundColor: '#ffffff'
                    }}
                  >
                    <div style={{ position: 'relative', height: '210px', overflow: 'hidden', backgroundColor: '#e2e8f0' }}>
                      <img
                        src={post.image}
                        alt={post.title}
                        loading="lazy"
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          transition: 'transform 0.4s ease'
                        }}
                      />
                      <span
                        className="badge badge-primary"
                        style={{
                          position: 'absolute',
                          top: '12px',
                          left: '12px',
                          backgroundColor: '#0284c7',
                          padding: '6px 12px',
                          borderRadius: '12px',
                          fontSize: '12px',
                          fontWeight: 600
                        }}
                      >
                        {post.category}
                      </span>
                    </div>

                    <div className="card-body d-flex flex-column p-4 text-left">
                      <div className="d-flex align-items-center text-muted mb-2" style={{ fontSize: '13px' }}>
                        <span><i className="fa-regular fa-calendar mr-1"></i> {post.date}</span>
                        <span className="mx-2">&bull;</span>
                        <span><i className="fa-regular fa-clock mr-1"></i> {post.readTime}</span>
                      </div>

                      <h4
                        className="card-title font-weight-bold mb-2 text-left"
                        style={{ fontSize: '18px', color: '#0b2545', lineHeight: 1.4 }}
                      >
                        {post.title}
                      </h4>

                      <p className="card-text text-muted mb-4 text-left" style={{ fontSize: '14px', lineHeight: 1.6, flexGrow: 1 }}>
                        {post.excerpt}
                      </p>

                      <div className="pt-3 border-top d-flex align-items-center justify-content-between">
                        <span className="text-muted" style={{ fontSize: '13px', fontWeight: 500 }}>
                          <i className="fa-solid fa-user-doctor mr-1" style={{ color: '#0284c7' }}></i> {post.author}
                        </span>
                        <Link
                          to="/contact"
                          className="btn btn-sm text-primary font-weight-bold p-0"
                          style={{ textDecoration: 'none', color: '#0284c7' }}
                        >
                          Ask Doctor <i className="fa-solid fa-arrow-right ml-1"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-5 bg-white rounded shadow-sm">
              <i className="fa-solid fa-newspaper text-muted mb-3" style={{ fontSize: '48px' }}></i>
              <h3 className="h5 text-dark font-weight-bold mb-2">No articles found</h3>
              <p className="text-muted mb-3">Try adjusting your category filter or search keywords.</p>
              <button
                type="button"
                className="btn btn-primary btn-sm px-4"
                onClick={() => {
                  setSelectedCategory('All');
                  setSearchQuery('');
                }}
              >
                Reset Filters
              </button>
            </div>
          )}

          {/* Bottom Consultation CTA */}
          <div
            className="mt-5 p-4 p-md-5 rounded shadow-sm text-white text-center text-md-left"
            style={{
              background: 'linear-gradient(135deg, #0b2545 0%, #0284c7 100%)',
              borderRadius: '20px'
            }}
          >
            <div className="row align-items-center">
              <div className="col-12 col-md-8 mb-3 mb-md-0">
                <h3 className="text-white font-weight-bold mb-2">Have a question about your dental health?</h3>
                <p className="mb-0 text-white-50" style={{ fontSize: '15px' }}>
                  Our clinic specialists are here to answer your concerns and provide clear, gentle treatment options.
                </p>
              </div>
              <div className="col-12 col-md-4 text-md-right">
                <Link to="/contact" className="btn btn-light px-4 py-2 font-weight-bold text-primary">
                  Book an Appointment
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
