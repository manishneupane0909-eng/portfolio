import React from 'react';
import {
  Typography,
  Paper,
  Chip,
  Box,
  Divider,
  Stack,
  Avatar,
  Link as MuiLink,
} from '@mui/material';
import { motion } from 'framer-motion';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import CodeIcon from '@mui/icons-material/Code';
import ArticleIcon from '@mui/icons-material/Article';

interface SkillCategory {
  title: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Languages',
    skills: ['Python', 'JavaScript', 'TypeScript', 'SQL', 'C#', 'Java', 'Go', 'C/C++'],
  },
  {
    title: 'Frameworks',
    skills: ['React', 'FastAPI', 'Django REST Framework', '.NET'],
  },
  {
    title: 'Databases / Tools',
    skills: [
      'PostgreSQL',
      'MongoDB',
      'Redis',
      'Docker',
      'AWS',
      'Git',
      'REST APIs',
      'JWT',
      'Celery',
      'Chart.js',
      'Origin',
    ],
  },
  {
    title: 'Concepts',
    skills: ['Data Structures & Algorithms', 'OOP', 'TDD', 'Clean Code', 'Hardware-Software Integration'],
  },
  {
    title: 'ML / Scientific Computing',
    skills: ['PyTorch', 'NumPy', 'SciPy', 'PINNs', 'XRD', 'VSM'],
  },
];

interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  highlights: string[];
}

const experience: Experience[] = [
  {
    role: 'Product Engineering Intern',
    company: 'Daktronics',
    location: 'Brookings, SD',
    period: 'May 2024 – Present',
    highlights: [
      'Optimized production test procedures and supported New Product Introduction workflows, increasing throughput by 20%.',
      'Debugged LED display control logic and resolved failure patterns, reducing hardware rejection rates by 10%.',
      'Analyzed defect trends across display and control systems to improve reliability and support continuous product improvement.',
      'Collaborated with cross-functional production and engineering teams to identify bottlenecks and improve test efficiency.',
    ],
  },
  {
    role: 'Undergraduate Research Assistant',
    company: 'South Dakota State University',
    location: 'Brookings, SD',
    period: 'Aug 2021 – Present',
    highlights: [
      'Architected an automated Python pipeline using SciPy and VSM integration to batch-process 500+ magnetometer datasets, cutting analysis time from 2 days to 4 hours (80% faster).',
      'Characterized MnBi-based composite magnets using XRD and VersaLab magnetometry to guide material synthesis decisions.',
      'Analyzed experimental data in Origin software, improving project outcomes by 15%.',
      'Co-authored 3 publications and abstracts and presented findings at APS March Meetings (2023, 2024).',
    ],
  },
  {
    role: 'Software & Operations Technician',
    company: 'Starship Technologies',
    location: 'Brookings, SD',
    period: 'Jan 2022 – May 2023',
    highlights: [
      'Developed and deployed Python and Go scripts for firmware updates and runtime code modifications on autonomous delivery robots.',
      'Diagnosed failures across sensors, GPS, motors, cameras, and batteries to maintain 98% uptime for a 10-unit fleet.',
      'Analyzed fleet telemetry to identify inefficiencies, improving delivery efficiency and user satisfaction by 15%.',
      'Supported software and hardware troubleshooting in a production robotics environment focused on system reliability.',
    ],
  },
];

const cardSx = {
  p: 3,
  bgcolor: 'background.paper',
  borderColor: 'rgba(255,255,255,0.07)',
  borderRadius: 3,
} as const;

export const About: React.FC = () => {
  return (
    <Box sx={{ pt: { xs: 2, sm: 5 }, pb: 4 }}>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Paper
          variant="outlined"
          sx={{
            p: { xs: 3, sm: 4 },
            bgcolor: 'background.paper',
            borderRadius: 4,
            borderColor: 'rgba(122,162,247,0.18)',
            mb: 3,
          }}
        >
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={3}
            alignItems={{ xs: 'center', sm: 'flex-start' }}
          >
            <Avatar
              src="/profile.jpeg"
              alt="Manish Neupane"
              sx={{
                width: { xs: 96, sm: 112 },
                height: { xs: 96, sm: 112 },
                border: '2px solid',
                borderColor: 'primary.main',
              }}
            />
            <Box sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
              <Typography variant="h4" sx={{ fontWeight: 800, mb: 0.5 }}>
                Manish Neupane
              </Typography>
              <Typography variant="subtitle1" sx={{ color: 'primary.main', fontWeight: 600, mb: 1.5 }}>
                Software Engineer · Full-Stack &amp; Backend
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.7, mb: 2 }}>
                I&apos;m a Physics &amp; Computer Science student at SDSU (graduating May 2026) who
                spends most of his time building things — backends, full-stack apps, and scripts
                that take tedious work off people&apos;s plates. I got into software through a
                research lab, where I automated a data pipeline that turned a two-day analysis into
                a four-hour one, and I&apos;ve been chasing that &quot;make it faster and more
                reliable&quot; feeling ever since, from autonomous delivery robots at Starship to
                product testing at Daktronics. I like clean code, small iterations, and problems
                that sit between software and the real world.
              </Typography>
              <Stack
                direction="row"
                spacing={1}
                flexWrap="wrap"
                useFlexGap
                justifyContent={{ xs: 'center', sm: 'flex-start' }}
              >
                <Chip
                  icon={<SchoolIcon />}
                  label="B.S. Physics & CS · SDSU '26"
                  size="small"
                  sx={{ bgcolor: 'rgba(122,162,247,0.1)', color: 'primary.main' }}
                />
                <Chip
                  icon={<WorkIcon />}
                  label="Open to SWE roles"
                  size="small"
                  sx={{ bgcolor: 'rgba(187,154,247,0.1)', color: 'secondary.main' }}
                />
              </Stack>
            </Box>
          </Stack>
        </Paper>
      </motion.div>

      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '2fr 1fr' }, gap: 3 }}>
        <Box>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
          >
            <Paper variant="outlined" sx={{ ...cardSx, height: '100%' }}>
              <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 3 }}>
                <WorkIcon color="primary" />
                <Typography variant="h5" sx={{ fontWeight: 700 }}>
                  Experience
                </Typography>
              </Stack>

              {experience.map((exp, idx) => (
                <Box key={exp.company} sx={{ mb: idx < experience.length - 1 ? 3 : 0 }}>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      flexWrap: 'wrap',
                      gap: 1,
                    }}
                  >
                    <Box>
                      <Typography variant="h6" sx={{ fontWeight: 700, fontSize: '1rem' }}>
                        {exp.role}
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'primary.main', fontWeight: 600 }}>
                        {exp.company} · {exp.location}
                      </Typography>
                    </Box>
                    <Chip
                      label={exp.period}
                      size="small"
                      sx={{
                        bgcolor: 'rgba(255,255,255,0.05)',
                        color: 'text.secondary',
                        fontFamily: "'Source Code Pro', monospace",
                        fontSize: '0.7rem',
                      }}
                    />
                  </Box>
                  <Box component="ul" sx={{ m: 0, mt: 1, pl: 2.5, color: 'text.secondary' }}>
                    {exp.highlights.map((h, i) => (
                      <Typography component="li" variant="body2" key={i} sx={{ mb: 0.5, lineHeight: 1.5 }}>
                        {h}
                      </Typography>
                    ))}
                  </Box>
                  {idx < experience.length - 1 && (
                    <Divider sx={{ mt: 2, borderColor: 'rgba(255,255,255,0.06)' }} />
                  )}
                </Box>
              ))}
            </Paper>
          </motion.div>
        </Box>

        <Box>
          <Stack spacing={3}>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Paper variant="outlined" sx={cardSx}>
                <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 2 }}>
                  <SchoolIcon color="primary" />
                  <Typography variant="h6" sx={{ fontWeight: 700 }}>
                    Education
                  </Typography>
                </Stack>
                <Typography variant="body1" sx={{ fontWeight: 600 }}>
                  B.S. in Physics & Computer Science
                </Typography>
                <Typography variant="body2" sx={{ color: 'primary.main' }}>
                  South Dakota State University · Brookings, SD
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    color: 'text.secondary',
                    fontFamily: "'Source Code Pro', monospace",
                    display: 'block',
                    mb: 1.5,
                  }}
                >
                  Aug 2021 – May 2026
                </Typography>
                <Typography variant="overline" sx={{ color: 'text.secondary', fontSize: '0.65rem' }}>
                  Relevant Coursework
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
                  Data Structures & Algorithms · Operating Systems · Machine Learning ·
                  Computational Physics · Software Engineering · Database Systems
                </Typography>
              </Paper>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
            >
              <Paper variant="outlined" sx={cardSx}>
                <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 2 }}>
                  <CodeIcon color="primary" />
                  <Typography variant="h6" sx={{ fontWeight: 700 }}>
                    Skills
                  </Typography>
                </Stack>
                {skillCategories.map((cat) => (
                  <Box key={cat.title} sx={{ mb: 2 }}>
                    <Typography variant="overline" sx={{ color: 'text.secondary', fontSize: '0.65rem' }}>
                      {cat.title}
                    </Typography>
                    <Stack direction="row" spacing={0.5} flexWrap="wrap" useFlexGap>
                      {cat.skills.map((s) => (
                        <Chip
                          key={s}
                          label={s}
                          size="small"
                          sx={{
                            fontSize: '0.7rem',
                            height: 24,
                            bgcolor: 'rgba(122,162,247,0.08)',
                            color: 'text.primary',
                            border: '1px solid rgba(122,162,247,0.18)',
                          }}
                        />
                      ))}
                    </Stack>
                  </Box>
                ))}
              </Paper>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Paper variant="outlined" sx={cardSx}>
                <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 2 }}>
                  <EmojiEventsIcon color="secondary" />
                  <Typography variant="h6" sx={{ fontWeight: 700 }}>
                    Recognition
                  </Typography>
                </Stack>
                <Box component="ul" sx={{ m: 0, pl: 2, color: 'text.secondary' }}>
                  <Typography component="li" variant="body2" sx={{ mb: 1 }}>
                    URSCAD Outstanding Student Achievement in Research (Spring 2022, Spring 2024)
                  </Typography>
                  <Typography component="li" variant="body2" sx={{ mb: 1 }}>
                    APS March Meeting Presenter (2023, 2024)
                  </Typography>
                  <Typography component="li" variant="body2">
                    Outstanding First Year Residential Assistant
                  </Typography>
                </Box>
              </Paper>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
            >
              <Paper variant="outlined" sx={cardSx}>
                <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 2 }}>
                  <ArticleIcon color="primary" />
                  <Typography variant="h6" sx={{ fontWeight: 700 }}>
                    Publications
                  </Typography>
                </Stack>
                <Box component="ul" sx={{ m: 0, pl: 2, color: 'text.secondary' }}>
                  <Typography component="li" variant="body2" sx={{ mb: 1, lineHeight: 1.5 }}>
                    Enhancing Soft Magnetic Properties of Fe<sub>72</sub>Nb<sub>4</sub>Cu<sub>1</sub>
                    Si<sub>16-x</sub>Ge<sub>x</sub>B<sub>7</sub> by Increasing Ge Concentration.
                  </Typography>
                  <Typography component="li" variant="body2" sx={{ mb: 1, lineHeight: 1.5 }}>
                    Investigation of MnBi-based Composite Magnets. APS March Meeting, 2023.
                  </Typography>
                  <Typography component="li" variant="body2" sx={{ lineHeight: 1.5 }}>
                    Improving MnAl tetragonal phase stability through doping elements. APS March
                    Meeting, 2024.
                  </Typography>
                </Box>
              </Paper>
            </motion.div>
          </Stack>
        </Box>
      </Box>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <Paper
          variant="outlined"
          sx={{
            mt: 3,
            p: 3,
            borderRadius: 3,
            bgcolor: 'background.paper',
            borderColor: 'rgba(255,255,255,0.07)',
            textAlign: 'center',
          }}
        >
          <Typography variant="body1" sx={{ color: 'text.secondary', mb: 1.5 }}>
            Open to Software Engineer, Full-Stack, and Backend roles. Happy to talk through projects
            or opportunities.
          </Typography>
          <Stack direction="row" spacing={3} justifyContent="center" flexWrap="wrap" useFlexGap>
            <MuiLink
              href="mailto:manishneupane0909@gmail.com"
              underline="hover"
              sx={{ color: 'primary.main', fontWeight: 600 }}
            >
              Email
            </MuiLink>
            <MuiLink
              href="https://www.linkedin.com/in/manish-neupane-380a65189"
              target="_blank"
              underline="hover"
              sx={{ color: 'primary.main', fontWeight: 600 }}
            >
              LinkedIn
            </MuiLink>
            <MuiLink
              href="https://github.com/manishneupane0909-eng"
              target="_blank"
              underline="hover"
              sx={{ color: 'primary.main', fontWeight: 600 }}
            >
              GitHub
            </MuiLink>
          </Stack>
        </Paper>
      </motion.div>
    </Box>
  );
};
