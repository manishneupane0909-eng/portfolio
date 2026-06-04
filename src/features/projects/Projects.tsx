import React from 'react';
import {
  Typography,
  Card,
  CardContent,
  Chip,
  Box,
  CardActions,
  Button,
  Divider,
} from '@mui/material';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import { Project } from '@/shared/types';
import { projectsList } from './data/projects';

interface ProjectCardProps {
  project: Project;
  idx: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, idx }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: idx * 0.07 }}
  >
    <Card
      variant="outlined"
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        bgcolor: 'background.paper',
        borderColor: 'rgba(255,255,255,0.07)',
        borderRadius: 3,
        transition: 'border-color 0.2s ease',
        '&:hover': { borderColor: 'primary.main' },
      }}
    >
      <CardContent sx={{ flex: 1, p: 2.75 }}>
        <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
          {project.name}
        </Typography>

        <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2, lineHeight: 1.6 }}>
          {project.description}
        </Typography>

        <Box sx={{ display: 'flex', gap: 0.75, flexWrap: 'wrap', mb: 2 }}>
          {project.tags.map((tag) => (
            <Chip
              key={tag}
              label={tag}
              size="small"
              sx={{
                fontSize: '0.7rem',
                height: 22,
                bgcolor: 'rgba(122,162,247,0.1)',
                color: 'primary.main',
              }}
            />
          ))}
        </Box>

        <Box component="ul" sx={{ m: 0, pl: 2.25, color: 'text.secondary' }}>
          {project.bullets.map((bullet) => (
            <Typography
              component="li"
              variant="body2"
              key={bullet}
              sx={{ fontSize: '0.85rem', lineHeight: 1.55, mb: 0.5 }}
            >
              {bullet}
            </Typography>
          ))}
        </Box>
      </CardContent>

      {(project.github || project.demo) && (
        <CardActions sx={{ px: 2.75, pb: 2.75, pt: 0 }}>
          {project.github && (
            <Button
              size="small"
              startIcon={<GitHubIcon sx={{ fontSize: 16 }} />}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: 'text.secondary', fontWeight: 600, '&:hover': { color: 'primary.main' } }}
            >
              Code
            </Button>
          )}
          {project.demo && (
            <Button
              size="small"
              variant="contained"
              startIcon={<LaunchIcon sx={{ fontSize: 16 }} />}
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </Button>
          )}
        </CardActions>
      )}
    </Card>
  </motion.div>
);

export const Projects: React.FC = () => {
  const featuredProjects = projectsList.filter((p) => p.featured);
  const otherProjects = projectsList.filter((p) => !p.featured);

  return (
    <Box sx={{ pt: { xs: 2, sm: 5 } }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" sx={{ fontWeight: 800, mb: 1 }}>
          Projects
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: 620 }}>
          A few full-stack, backend, and applied-ML projects I&apos;ve built. Each links to the
          source on GitHub if you want to dig into the implementation.
        </Typography>
      </Box>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' },
          gap: 3,
        }}
      >
        {featuredProjects.map((project, idx) => (
          <ProjectCard key={project.name} project={project} idx={idx} />
        ))}
      </Box>

      {otherProjects.length > 0 && (
        <Box sx={{ mt: 5 }}>
          <Divider sx={{ mb: 4, borderColor: 'rgba(255,255,255,0.08)' }} />
          <Typography
            variant="overline"
            sx={{ color: 'text.secondary', fontWeight: 600, mb: 2, display: 'block' }}
          >
            More Projects
          </Typography>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' },
              gap: 3,
            }}
          >
            {otherProjects.map((project, idx) => (
              <ProjectCard key={project.name} project={project} idx={idx} />
            ))}
          </Box>
        </Box>
      )}
    </Box>
  );
};
