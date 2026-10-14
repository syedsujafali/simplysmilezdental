/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      { source: '/index.html', destination: '/', permanent: true },
      { source: '/about.html', destination: '/about', permanent: true },
      { source: '/all-services.html', destination: '/all-services', permanent: true },
      { source: '/services', destination: '/all-services', permanent: true },
      { source: '/composite-fillings-hyderabad.html', destination: '/services/composite-fillings', permanent: true },
      { source: '/crowns.html', destination: '/services/crowns', permanent: true },
      { source: '/dental-veneers-hyderabad.html', destination: '/services/veneers', permanent: true },
      { source: '/braces.html', destination: '/services/braces', permanent: true },
      { source: '/laserteeth.html', destination: '/services/laser-teeth-whitening', permanent: true },
      { source: '/laserroot.html', destination: '/services/microscopic-root-canal', permanent: true },
      { source: '/services/laser-root-canal', destination: '/services/microscopic-root-canal', permanent: true },
      { source: '/lasergum.html', destination: '/services/laser-gum-surgery', permanent: true },
      { source: '/dentalimplant.html', destination: '/services/dental-implants', permanent: true },
      { source: '/pediatary.html', destination: '/services/pediatric-dentistry', permanent: true },
      { source: '/wisdom.html', destination: '/services/wisdom-tooth-extraction', permanent: true },
      { source: '/gallery.html', destination: '/gallery', permanent: true },
      { source: '/doctor.html', destination: '/doctors', permanent: true },
      { source: '/doctor/dr-ankush-kumar-orthodontist-invisalign-provider-hyderabad.html', destination: '/doctor/dr-ankush-kumar', permanent: true },
      { source: '/doctor/dr-susheel-kumar-pediatric-dentist-implantologist-hyderabad.html', destination: '/doctor/dr-susheel-kumar', permanent: true },
      { source: '/testimonal.html', destination: '/testimonials', permanent: true },
      { source: '/contact.html', destination: '/contact', permanent: true },
    ];
  },
};

export default nextConfig;
