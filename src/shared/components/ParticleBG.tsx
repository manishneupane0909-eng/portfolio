import React from 'react';

export const ParticleBG: React.FC = () => {
  const prefersReduced =
    typeof window !== 'undefined' &&
    window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReduced) return null;

  return (
    <div id="particle-bg" aria-hidden="true">
      <style>{`
        #particle-bg {
          position: fixed;
          inset: 0;
          width: 100vw;
          height: 100vh;
          z-index: 0;
          overflow: hidden;
          pointer-events: none;
        }

        #particle-bg::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(700px circle at 15% -5%, rgba(122, 162, 247, 0.10) 0%, transparent 60%),
            radial-gradient(600px circle at 95% 10%, rgba(187, 154, 247, 0.07) 0%, transparent 55%);
        }
      `}</style>
    </div>
  );
};


