import React from 'react';
import {
  Box,
  Paper,
  Typography,
  Stack,
  Button,
  Chip,
  Avatar,
  Card,
  CardContent,
  Link as MuiLink,
} from '@mui/material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { projectsList } from '@/features/projects/data/projects';
import { achievements } from './data/achievements';
import { LogoRow } from '@/shared/components/LogoRow';

const featuredProjects = projectsList.filter((p) => p.featured);

const EMAIL = 'manishneupane0909@gmail.com';

export const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 5, pt: { xs: 2, sm: 4 } }}>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Paper
          variant="outlined"
          sx={{
            p: { xs: 3, sm: 4 },
            borderRadius: 4,
            bgcolor: 'background.paper',
            borderColor: 'rgba(122,162,247,0.18)',
          }}
        >
          <Stack
            direction="row"
            alignItems="center"
            spacing={1}
            sx={{ mb: 3, color: 'text.secondary' }}
          >
            <Box
              sx={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                bgcolor: '#9ece6a',
                boxShadow: '0 0 8px #9ece6a',
              }}
            />
            <Typography
              variant="body2"
              sx={{ fontFamily: "'Source Code Pro', monospace", fontSize: '0.8rem' }}
            >
              open to Software Engineer · Full-Stack · Backend roles
            </Typography>
          </Stack>

          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={{ xs: 2.5, sm: 4 }}
            alignItems={{ xs: 'center', sm: 'center' }}
          >
            <Avatar
              src="/profile.jpeg"
              alt="Manish Neupane"
              sx={{
                width: { xs: 96, sm: 104 },
                height: { xs: 96, sm: 104 },
                border: '2px solid',
                borderColor: 'primary.main',
              }}
            />
            <Box sx={{ flex: 1, textAlign: { xs: 'center', sm: 'left' } }}>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 800,
                  lineHeight: 1.1,
                  fontSize: { xs: '1.9rem', sm: '2.4rem' },
                }}
              >
                Manish Neupane
              </Typography>
              <Typography
                variant="h6"
                sx={{ mt: 0.5, fontWeight: 600, color: 'primary.main' }}
              >
                Software Engineer · Full-Stack &amp; Backend
              </Typography>
              <Typography
                variant="body1"
                sx={{ mt: 1.5, color: 'text.secondary', lineHeight: 1.6, maxWidth: 560 }}
              >
                I build reliable software systems, full-stack applications, and automation tools
                across web, robotics, and scientific workflows.
              </Typography>
            </Box>
          </Stack>

          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2}
            alignItems={{ xs: 'stretch', sm: 'center' }}
            sx={{ mt: 3.5 }}
          >
            <Button
              variant="contained"
              color="primary"
              onClick={() => navigate('/projects')}
              sx={{ fontWeight: 700, px: 3.5 }}
            >
              View Projects
            </Button>
            <Button
              variant="outlined"
              color="primary"
              href="/Resume.pdf"
              download
              sx={{ fontWeight: 600, px: 3.5 }}
            >
              Download Resume
            </Button>
            <MuiLink
              href={`mailto:${EMAIL}`}
              underline="hover"
              sx={{
                color: 'text.secondary',
                fontSize: '0.9rem',
                alignSelf: 'center',
                fontWeight: 500,
              }}
            >
              or email me →
            </MuiLink>
          </Stack>
        </Paper>
      </motion.div>

      <Box>
        <Typography
          variant="overline"
          sx={{ color: 'text.secondary', display: 'block', mb: 1.5, letterSpacing: '0.12em' }}
        >
          A few numbers
        </Typography>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(3, 1fr)' }, gap: 2 }}>
          {achievements.map((a) => (
            <Paper
              key={a.label}
              variant="outlined"
              sx={{
                p: 2.5,
                borderRadius: 3,
                bgcolor: 'background.paper',
                borderColor: 'rgba(255,255,255,0.07)',
              }}
            >
              <Typography
                variant="h4"
                sx={{ fontWeight: 800, color: 'primary.main', fontFamily: "'Source Code Pro', monospace" }}
              >
                {a.metric}
              </Typography>
              <Typography variant="body2" sx={{ fontWeight: 600, mt: 0.5 }}>
                {a.label}
              </Typography>
              <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                {a.context}
              </Typography>
            </Paper>
          ))}
        </Box>
      </Box>

      <LogoRow />

      <Box component="section">
        <Stack
          direction="row"
          alignItems="baseline"
          justifyContent="space-between"
          flexWrap="wrap"
          sx={{ mb: 2.5 }}
        >
          <Typography variant="h5" sx={{ fontWeight: 800 }}>
            Featured work
          </Typography>
          <MuiLink
            component="button"
            onClick={() => navigate('/projects')}
            underline="hover"
            sx={{ color: 'primary.main', fontSize: '0.9rem', fontWeight: 600 }}
          >
            All projects →
          </MuiLink>
        </Stack>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, gap: 3 }}>
          {featuredProjects.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <Card
                variant="outlined"
                sx={{
                  height: '100%',
                  bgcolor: 'background.paper',
                  borderColor: 'rgba(255,255,255,0.07)',
                  borderRadius: 3,
                  transition: 'border-color 0.2s ease',
                  '&:hover': { borderColor: 'primary.main' },
                }}
              >
                <CardContent sx={{ p: 2.5 }}>
                  <Typography variant="h6" sx={{ fontWeight: 700 }}>
                    {p.name}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1, mb: 2, lineHeight: 1.6 }}>
                    {p.description}
                  </Typography>
                  <Stack direction="row" spacing={0.75} useFlexGap flexWrap="wrap">
                    {p.tags.slice(0, 4).map((t) => (
                      <Chip
                        key={t}
                        label={t}
                        size="small"
                        sx={{
                          fontSize: '0.7rem',
                          height: 22,
                          bgcolor: 'rgba(122,162,247,0.1)',
                          color: 'primary.main',
                        }}
                      />
                    ))}
                  </Stack>
                  {p.github && (
                    <Button
                      size="small"
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{ mt: 2, px: 0, color: 'text.secondary', fontWeight: 600 }}
                    >
                      View code →
                    </Button>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </Box>
      </Box>

      <Paper
        variant="outlined"
        sx={{
          p: { xs: 3, sm: 3.5 },
          borderRadius: 4,
          bgcolor: 'background.paper',
          borderColor: 'rgba(255,255,255,0.07)',
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: 800, mb: 1 }}>
          What I&apos;m looking for
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary', mb: 2.5, lineHeight: 1.7 }}>
          Software Engineer, Full-Stack, or Backend roles where I can build reliable services,
          full-stack apps, and automation. I care about clean code, testing, and shipping
          iteratively, and I like problems that touch both software and hardware.
        </Typography>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: { xs: 2, sm: 4 } }}>
          {[
            {
              title: 'Areas I enjoy',
              items: [
                'Full-stack web applications',
                'Backend & API development',
                'Automation & data pipelines',
                'Applied ML / scientific computing',
              ],
            },
            {
              title: 'Tools I reach for',
              items: [
                'Python, TypeScript, JavaScript',
                'React, FastAPI, Django REST',
                'PostgreSQL, MongoDB, Redis',
                'Docker, AWS, Git',
              ],
            },
          ].map((col) => (
            <Box key={col.title}>
              <Typography variant="overline" sx={{ color: 'secondary.main', fontWeight: 700 }}>
                {col.title}
              </Typography>
              <Box component="ul" sx={{ m: 0, mt: 0.5, pl: 2.25 }}>
                {col.items.map((item) => (
                  <Typography component="li" variant="body2" key={item} sx={{ color: 'text.secondary', mb: 0.5 }}>
                    {item}
                  </Typography>
                ))}
              </Box>
            </Box>
          ))}
        </Box>
      </Paper>

      <Box sx={{ textAlign: 'center', pb: 2 }}>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Want to talk? I usually reply within a day.
        </Typography>
        <Button sx={{ mt: 0.5 }} variant="text" color="primary" href={`mailto:${EMAIL}`}>
          {EMAIL}
        </Button>
      </Box>
    </Box>
  );
};
