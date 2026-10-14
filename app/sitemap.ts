import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.simplysmilezdental.in';

  const routes = [
    { path: '', priority: 1.0, changeFrequency: 'weekly' as const },
    { path: '/about', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/all-services', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/services/composite-fillings', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/services/crowns', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/services/veneers', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/services/braces', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/services/laser-teeth-whitening', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/services/microscopic-root-canal', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/services/laser-gum-surgery', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/services/dental-implants', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/services/pediatric-dentistry', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/services/wisdom-tooth-extraction', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/gallery', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/doctors', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/doctor/dr-ankush-kumar', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/doctor/dr-susheel-kumar', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/testimonials', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/contact', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/blog', priority: 0.7, changeFrequency: 'monthly' as const },
  ];

  return routes.map((r) => ({
    url: `${baseUrl}${r.path}`,
    lastModified: new Date(),
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
