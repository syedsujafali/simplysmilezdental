import React from 'react';
import Link from './Link';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  breadcrumbs: { label: string; path?: string }[];
  bgImage?: string;
}

export default function PageHeader({
  title,
  subtitle,
  breadcrumbs,
  bgImage = '/images/bg_1.webp'
}: PageHeaderProps) {
  return (
    <section
      className="hero-wrap hero-wrap-2"
      style={{ backgroundImage: `url('${bgImage}')` }}
      data-stellar-background-ratio="0.5"
    >
      <div className="overlay" style={{ background: 'rgba(13, 59, 102, 0.75)' }}></div>
      <div className="container">
        <div className="row no-gutters slider-text align-items-center justify-content-center">
          <div className="col-md-9 text-center">
            <p className="breadcrumbs mb-2">
              {breadcrumbs.map((b, i) => (
                <span key={i} className={i < breadcrumbs.length - 1 ? 'mr-2' : 'text-white-50'}>
                  {b.path ? (
                    <Link to={b.path} className="text-white">
                      {b.label} <i className="ion-ios-arrow-forward ml-1"></i>
                    </Link>
                  ) : (
                    <span>
                      {b.label} {i < breadcrumbs.length - 1 && <i className="ion-ios-arrow-forward ml-1"></i>}
                    </span>
                  )}
                </span>
              ))}
            </p>
            <h1 className="mb-0 bread text-white font-weight-bold">{title}</h1>
            {subtitle && (
              <p className="text-white-50 mt-2" style={{ fontSize: '16px' }}>
                {subtitle}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
