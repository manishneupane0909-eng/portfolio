import React from 'react';
import { Helmet } from 'react-helmet-async';

export const SEO: React.FC = () => {
  const title = 'Manish Neupane – Software Engineer Portfolio';
  const description =
    'Software Engineer (Full-Stack & Backend) and dual-major Physics & CS graduate building reliable software, full-stack applications, and automation with Python, React, FastAPI, Django REST, SQL, Docker, and AWS.';
  const image = '/profile.jpeg';
  const url = typeof window !== 'undefined' ? window.location.origin : '';

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: 'Manish Neupane',
          url,
          jobTitle: 'Software Engineer (Full-Stack & Backend)',
          description:
            'Software engineer building reliable software systems, full-stack applications, and automation tools across web, robotics, and scientific workflows.',
          alumniOf: {
            '@type': 'CollegeOrUniversity',
            name: 'South Dakota State University',
            sameAs: 'https://www.sdstate.edu/',
          },
          sameAs: [
            'https://github.com/manishneupane0909-eng',
            'https://www.linkedin.com/in/manish-neupane-380a65189',
          ],
          knowsAbout: [
            'Python',
            'JavaScript',
            'TypeScript',
            'React',
            'FastAPI',
            'Django REST Framework',
            'SQL',
            'PostgreSQL',
            'MongoDB',
            'Docker',
            'AWS',
            'REST APIs',
            'Machine Learning',
          ],
          seeks: 'Software Engineer, Full-Stack, or Backend roles (graduating May 2026)',
        })}
      </script>
    </Helmet>
  );
};


