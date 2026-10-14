import type { Metadata } from 'next';
import '../src/index.css';
import ClientLayout from '../src/components/ClientLayout';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.simplysmilezdental.in'),
  title: {
    default: 'Dental Clinic in Shaikpet, Hyderabad | Simply Smilez Dental',
    template: '%s',
  },
  description:
    'Simply Smilez Dental Clinic in Shaikpet offers Invisalign, Invisalign First for Kids, root canals, braces, implants and family dental care in Hyderabad.',
  authors: [{ name: 'Simply Smilez Dental' }],
  keywords: [
    'dental clinic in Shaikpet',
    'dentist in Shaikpet Hyderabad',
    'Invisalign Shaikpet',
    'Invisalign First for Kids Hyderabad',
    'root canal Shaikpet',
    'dental implants Hyderabad',
    'braces Shaikpet',
    'pediatric dentist Hyderabad',
    'dentist Manikonda',
    'dentist Kondapur',
    'dentist Jubilee Hills',
    'dentist Gachibowli',
  ],
  alternates: {
    canonical: 'https://www.simplysmilezdental.in/',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.simplysmilezdental.in/',
    siteName: 'Simply Smilez Dental',
    title: 'Dental Clinic in Shaikpet, Hyderabad | Simply Smilez Dental',
    description:
      'Comprehensive dental care in Shaikpet, Hyderabad, including Invisalign, Invisalign First for Kids, root canals, braces, implants and more.',
    images: [
      {
        url: 'https://www.simplysmilezdental.in/images/about.webp',
        alt: 'Simply Smilez Dental Clinic in Shaikpet, Hyderabad',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dental Clinic in Shaikpet, Hyderabad | Simply Smilez Dental',
    description:
      'Invisalign, Invisalign First for Kids, root canals, braces, implants and family dental care in Shaikpet, Hyderabad.',
    images: ['https://www.simplysmilezdental.in/images/about.webp'],
  },
  verification: {
    google: 'WxYo0CEREwF25EcXU4_EfH0R7M23fkQN6JvAydEDapE',
  },
  icons: {
    icon: '/images/logo.jpeg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
          integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="/css/animate.css" />
        <link rel="stylesheet" href="/css/flaticon.css" />
        <link rel="stylesheet" href="/css/style.css" />
      </head>
      <body suppressHydrationWarning>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
