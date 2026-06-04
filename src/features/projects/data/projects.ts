import { Project } from '@/shared/types';

export const projectsList: Project[] = [
  {
    name: 'Secure Path Optimization Platform',
    tags: ['Django REST Framework', 'React', 'PostgreSQL', 'scikit-learn', 'Celery', 'Redis', 'Plaid API'],
    description:
      'Full-stack fraud detection platform that ingests live bank data through the Plaid API and scores transaction risk with a scikit-learn classifier.',
    bullets: [
      'Built a Django REST Framework + PostgreSQL backend with bearer-token authenticated endpoints.',
      'Ran ML inference asynchronously with Celery and Redis so scoring never blocks the UI.',
      'Designed an interactive dashboard to visualize fraud signals and transaction insights.',
    ],
    github: 'https://github.com/manishneupane0909-eng/securepath',
    demo: null,
    image: null,
    featured: true,
  },
  {
    name: 'ElementX',
    tags: ['React', 'FastAPI', 'Python', 'MongoDB', 'SciPy', 'Docker', 'JWT'],
    description:
      'Full-stack materials science research platform for stoichiometry calculations, automated XRD peak detection, and magnetic property extraction from M-H loop data.',
    bullets: [
      'Engineered an asynchronous FastAPI backend with MongoDB, JWT authentication, and Docker Compose deployment.',
      'Automated XRD peak detection and M-H loop analysis to extract magnetic properties for lab workflows.',
      'Connected scientific data processing with a modern React interface to support lab analysis and experimentation.',
    ],
    github: 'https://github.com/manishneupane0909-eng/ElementX',
    demo: null,
    image: null,
    featured: true,
  },
  {
    name: 'Physics-Informed Neural Networks (PINNs)',
    tags: ['Python', 'PyTorch', 'NumPy'],
    description:
      'Neural PDE solver that embeds physical constraints directly into the loss function to solve nonlinear diffusion equations.',
    bullets: [
      'Achieved a 25% speedup over classical finite-difference methods on nonlinear diffusion equations.',
      'Reduced material simulation compute time by 40% with conservation-law-enforcing custom loss functions.',
    ],
    github: 'https://github.com/manishneupane0909-eng/pinn-pde-solver',
    demo: null,
    image: null,
    featured: true,
  },
];
