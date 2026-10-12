export interface ServiceItem {
  id: number;
  title: string;
  image: string;
  alt: string;
  link: string;
  description: string;
}

export interface DoctorItem {
  id: number;
  name: string;
  role: string;
  tag: string;
  image: string;
  link: string;
}

export interface GalleryItem {
  id: number;
  src: string;
  alt: string;
}

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: 1,
    title: "Braces & Clear Aligners (Invisalign)",
    image: "/images/braces.webp",
    alt: "Braces & Clear Aligners (Invisalign)",
    link: "/services/braces",
    description: "Straighten teeth discreetly with Invisalign clear aligners or traditional orthodontic braces."
  },
  {
    id: 2,
    title: "Pediatric Dentistry",
    image: "/images/pedia2.webp",
    alt: "Pediatric Dentistry",
    link: "/services/pediatric-dentistry",
    description: "Gentle, comprehensive preventive and restorative dental care tailored for children and teenagers."
  },
  {
    id: 3,
    title: "Dental Implants",
    image: "/images/dentalimp.webp",
    alt: "Dental Implants in Hyderabad",
    link: "/services/dental-implants",
    description: "Replace missing teeth with dental implants designed to restore function, comfort, and your natural smile."
  },
  {
    id: 4,
    title: "Microscopic Root Canal Treatment",
    image: "/images/microscopic-rct.jpg",
    alt: "Microscopic Root Canal Treatment",
    link: "/services/microscopic-root-canal",
    description: "High-precision microscopic root canal treatment using surgical dental microscopes to eliminate deep infection and save your natural tooth."
  },
  {
    id: 5,
    title: "Dental Crowns",
    image: "/images/crowns.webp",
    alt: "Dental Crowns",
    link: "/services/crowns",
    description: "Restore damaged or weakened teeth with durable crowns that improve strength, function and appearance."
  },
  {
    id: 6,
    title: "Dental Veneers",
    image: "/images/veneers.webp",
    alt: "Dental Veneers",
    link: "/services/veneers",
    description: "Transform your smile with custom porcelain and composite veneers for suitable cosmetic cases."
  },
  {
    id: 7,
    title: "Composite Fillings",
    image: "/images/composite.webp",
    alt: "Composite Fillings",
    link: "/services/composite-fillings",
    description: "Tooth-coloured aesthetic fillings to repair cavities and restore damaged teeth invisibly."
  },
  {
    id: 8,
    title: "Laser Teeth Whitening",
    image: "/images/laserteeth.webp",
    alt: "Laser Teeth Whitening",
    link: "/services/laser-teeth-whitening",
    description: "Brighten your smile safely and effectively with professional laser teeth whitening treatments."
  },
  {
    id: 9,
    title: "Laser Gum Surgery & Care",
    image: "/images/lasergum.webp",
    alt: "Laser Gum Surgery & Care",
    link: "/services/laser-gum-surgery",
    description: "Advanced laser treatment for periodontal gum problems, inflammation, infection, and gum re-contouring."
  },
  {
    id: 10,
    title: "Wisdom Tooth Extractions",
    image: "/images/wisdom.webp",
    alt: "Wisdom Tooth Extractions",
    link: "/services/wisdom-tooth-extraction",
    description: "Professional assessment and gentle extraction for impacted or problematic wisdom teeth."
  }
];

export const doctorsData: DoctorItem[] = [
  {
    id: 1,
    name: "ANKUSH KUMAR MDS",
    role: "(Orthodontist and Invisalign Provider)",
    tag: "- SR DOCTOR -",
    image: "/images/ankush.webp",
    link: "/doctor/dr-ankush-kumar"
  },
  {
    id: 2,
    name: "SUSHEEL KUMAR MDS",
    role: "(Pediatric Dentist and Implantologist)",
    tag: "- SR DOCTOR -",
    image: "/images/susheel1.png",
    link: "/doctor/dr-susheel-kumar"
  }
];

export const galleryImages: GalleryItem[] = [
  { id: 1, src: "/images/gallery_1.jpeg", alt: "Simply Smilez Dental Clinic Gallery 1" },
  { id: 2, src: "/images/gallery_2.jpeg", alt: "Simply Smilez Dental Clinic Gallery 2" },
  { id: 3, src: "/images/gallery_3.jpeg", alt: "Simply Smilez Dental Clinic Gallery 3" },
  { id: 4, src: "/images/gallery_4.jpeg", alt: "Simply Smilez Dental Clinic Gallery 4" },
  { id: 5, src: "/images/gallery_5.jpeg", alt: "Simply Smilez Dental Clinic Gallery 5" },
  { id: 6, src: "/images/gallery_6.jpeg", alt: "Simply Smilez Dental Clinic Gallery 6" },
  { id: 7, src: "/images/gallery_7.jpeg", alt: "Simply Smilez Dental Clinic Gallery 7" },
  { id: 8, src: "/images/gallery_8.jpeg", alt: "Simply Smilez Dental Clinic Gallery 8" },
  { id: 9, src: "/images/gallery_9.jpeg", alt: "Simply Smilez Dental Clinic Gallery 9" },
  { id: 10, src: "/images/gallery_10.jpeg", alt: "Simply Smilez Dental Clinic Gallery 10" },
  { id: 11, src: "/images/gallery_11.jpeg", alt: "Simply Smilez Dental Clinic Gallery 11" },
  { id: 12, src: "/images/gallery_12.jpeg", alt: "Simply Smilez Dental Clinic Gallery 12" },
  { id: 13, src: "/images/gallery_13.jpeg", alt: "Simply Smilez Dental Clinic Gallery 13" },
  { id: 14, src: "/images/gallery_14.jpeg", alt: "Simply Smilez Dental Clinic Gallery 14" },
  { id: 15, src: "/images/gallery_15.jpeg", alt: "Simply Smilez Dental Clinic Gallery 15" },
  { id: 16, src: "/images/gallery_16.jpeg", alt: "Simply Smilez Dental Clinic Gallery 16" },
  { id: 17, src: "/images/gallery_17.jpeg", alt: "Simply Smilez Dental Clinic Gallery 17" }
];

export const faqsData: FAQItem[] = [
  {
    id: 1,
    question: "Where is Simply Smilez Dental Clinic located in Hyderabad?",
    answer: "Simply Smilez Dental Clinic is located at P.V. Reddy Complex, 1st Floor, Dwaraka Nagar Colony, O.U. Colony Road, Shaikpet, Hyderabad – 500008. The clinic is conveniently accessible to patients from Shaikpet, O.U. Colony, Manikonda, Tolichowki, Raidurg, Puppalguda, Film Nagar and Jubilee Hills."
  },
  {
    id: 2,
    question: "Is Simply Smilez Dental Clinic a good option for Invisalign in Shaikpet?",
    answer: "Simply Smilez Dental Clinic provides Invisalign treatment in Shaikpet, Hyderabad, for suitable teenagers and adults. Our team evaluates your teeth, bite and orthodontic requirements before recommending clear aligner treatment."
  },
  {
    id: 3,
    question: "Does Simply Smilez offer Invisalign First for Kids?",
    answer: "Yes. Simply Smilez Dental Clinic provides Invisalign First for Kids, a clear-aligner treatment designed for growing children with certain developing orthodontic needs. A consultation is recommended to determine whether Invisalign First is suitable for your child."
  },
  {
    id: 4,
    question: "What dental treatments are available at Simply Smilez Dental Clinic?",
    answer: "We provide comprehensive dental care for children and adults, including Invisalign, Invisalign First for Kids, braces, dental implants, root canal treatment, dental crowns, composite fillings, dental veneers, teeth whitening, pediatric dentistry, wisdom tooth extraction, laser gum treatment, and general and cosmetic dentistry."
  },
  {
    id: 5,
    question: "Does Simply Smilez provide root canal treatment in Shaikpet?",
    answer: "Yes. Our dental clinic provides root canal treatment for teeth affected by infection or damage to the dental pulp. If you experience toothache, prolonged sensitivity, swelling or pain while chewing, a dental examination can help identify the cause and appropriate treatment."
  },
  {
    id: 6,
    question: "Does Simply Smilez provide dental implants in Hyderabad?",
    answer: "Yes. We provide dental implant treatment for suitable patients with missing teeth. Implant treatment begins with a detailed dental examination and assessment of your oral health, bone condition and individual treatment requirements."
  },
  {
    id: 7,
    question: "What is the difference between Invisalign and braces?",
    answer: "Both Invisalign and braces are orthodontic treatments used to improve tooth alignment and bite. Invisalign uses a series of removable clear aligners, while traditional braces use brackets and wires. The most suitable option depends on your teeth, bite, orthodontic needs and treatment goals."
  },
  {
    id: 8,
    question: "Can children get orthodontic treatment at Simply Smilez?",
    answer: "Yes. We provide children's dental and orthodontic care, including pediatric dentistry, braces and Invisalign First for suitable children. An early assessment can help identify developing alignment and bite concerns."
  },
  {
    id: 9,
    question: "Does Simply Smilez provide pediatric dentistry?",
    answer: "Yes. Our pediatric dentistry services are designed to provide children with age-appropriate dental care in a comfortable environment. We provide preventive, restorative and general dental care for children and can also assess developing orthodontic concerns."
  },
  {
    id: 10,
    question: "Do you provide dental crowns, veneers and teeth whitening?",
    answer: "Yes. Simply Smilez provides restorative and cosmetic dental treatments including dental crowns, composite fillings, veneers and professional teeth whitening. Your dentist can recommend an appropriate treatment after evaluating your teeth and overall oral health."
  },
  {
    id: 11,
    question: "Do you provide wisdom tooth extraction?",
    answer: "Yes. We provide consultation and treatment for wisdom tooth problems, including extraction when clinically required. Your dentist will examine the wisdom tooth and surrounding area before recommending the appropriate treatment."
  },
  {
    id: 12,
    question: "Which areas does Simply Smilez Dental Clinic serve?",
    answer: "Our clinic is based in Shaikpet and serves patients from nearby areas including O.U. Colony, Dwaraka Nagar Colony, Manikonda, Tolichowki, Raidurg, Puppalguda, Film Nagar and Jubilee Hills. Patients also visit us from Banjara Hills, Mehdipatnam, Langar Houz, Gachibowli, Narsingi and surrounding areas."
  },
  {
    id: 13,
    question: "How can I book an appointment at Simply Smilez Dental Clinic?",
    answer: "You can book a dental appointment by calling +91 77993 76656 or +91 96033 38904. You can also email info.invisaligndental@gmail.com. Our team can help you choose an appointment based on your dental or orthodontic requirements."
  }
];
