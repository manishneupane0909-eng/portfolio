import React, { useState } from 'react';
import {
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Box,
  Alert,
  Container,
  Stack,
  Link as MuiLink,
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LanguageIcon from '@mui/icons-material/Language';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { ContactForm, ContactStatus } from '@/shared/types';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID ?? '';
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID ?? '';
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY ?? '';

const EMAIL = 'manishneupane0909@gmail.com';
const PHONE_DISPLAY = '(605) 691-2858';
const PHONE_HREF = '+16056912858';
const LOCATION = 'Brookings, SD';
const WEBSITE = 'www.mneupane.com';

export const Contact: React.FC = () => {
  const [form, setForm] = useState<ContactForm>({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<ContactStatus>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (!form.name || !form.email || !form.message) {
      return;
    }

    const hasEmailJS = SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY && 
                       SERVICE_ID.length > 0 && TEMPLATE_ID.length > 0 && PUBLIC_KEY.length > 0;

    if (!hasEmailJS) {
      setStatus('error');
      setTimeout(() => {
        setStatus('idle');
      }, 3000);
      return;
    }

    setStatus('loading');

    try {
      const templateParams = {
        name: form.name,
        email: form.email,
        message: form.message,
      };

      const result = await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);

      if (result.status === 200 || result.text === 'OK') {
        setStatus('ok');
        setForm({ name: '', email: '', message: '' });
        setTimeout(() => {
          setStatus('idle');
        }, 3000);
      } else {
        throw new Error(`EmailJS returned status ${result.status}`);
      }
    } catch {
      setStatus('error');
      setTimeout(() => {
        setStatus('idle');
      }, 3000);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ py: 4, minHeight: '100vh', overflowY: 'auto' }}>
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
        <Card
          elevation={10}
          sx={{
            p: { xs: 2, sm: 3 },
            background: 'rgba(24,38,44,0.85)',
            borderRadius: 6,
          }}
        >
          <CardContent>
            <Typography
              variant="h4"
              sx={{ fontWeight: 700, color: 'primary.main', mb: 1, textAlign: 'center' }}
            >
              Get in Touch
            </Typography>
            <Typography variant="body2" sx={{ color: '#a8c5ca', textAlign: 'center', mb: 3 }}>
              Open to Software Engineer, Full-Stack, and Backend roles. I reply fast on email.
            </Typography>

            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' },
                gap: 1.5,
                mb: 3,
              }}
            >
              <Stack direction="row" spacing={1.5} alignItems="center">
                <EmailIcon fontSize="small" color="primary" />
                <MuiLink href={`mailto:${EMAIL}`} underline="hover" sx={{ color: '#cddede', fontSize: '0.85rem' }}>
                  {EMAIL}
                </MuiLink>
              </Stack>
              <Stack direction="row" spacing={1.5} alignItems="center">
                <PhoneIcon fontSize="small" color="primary" />
                <MuiLink href={`tel:${PHONE_HREF}`} underline="hover" sx={{ color: '#cddede', fontSize: '0.85rem' }}>
                  {PHONE_DISPLAY}
                </MuiLink>
              </Stack>
              <Stack direction="row" spacing={1.5} alignItems="center">
                <LocationOnIcon fontSize="small" color="primary" />
                <Typography sx={{ color: '#cddede', fontSize: '0.85rem' }}>{LOCATION}</Typography>
              </Stack>
              <Stack direction="row" spacing={1.5} alignItems="center">
                <LanguageIcon fontSize="small" color="primary" />
                <MuiLink
                  href={`https://${WEBSITE}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  underline="hover"
                  sx={{ color: '#cddede', fontSize: '0.85rem' }}
                >
                  {WEBSITE}
                </MuiLink>
              </Stack>
            </Box>

            {status === 'ok' && (
              <Alert severity="success" sx={{ mb: 2 }}>
                Message sent successfully. I'll get back to you soon!
              </Alert>
            )}
            {status === 'error' && (
              <Alert severity="error" sx={{ mb: 2 }}>
                Failed to send. Please try again or use the email button below.
              </Alert>
            )}
            {status === 'loading' && (
              <Alert severity="info" sx={{ mb: 2 }}>
                Sending...
              </Alert>
            )}

            <form onSubmit={handleSubmit} aria-label="contact form" noValidate>
              <TextField
                name="name"
                label="Name"
                required
                fullWidth
                margin="normal"
                value={form.name}
                onChange={handleChange}
                disabled={status === 'loading'}
              />
              <TextField
                name="email"
                label="Email"
                required
                type="email"
                fullWidth
                margin="normal"
                value={form.email}
                onChange={handleChange}
                disabled={status === 'loading'}
              />
              <TextField
                name="message"
                label="Message"
                required
                multiline
                minRows={4}
                fullWidth
                margin="normal"
                value={form.message}
                onChange={handleChange}
                disabled={status === 'loading'}
              />
              <input
                type="text"
                name="_gotcha"
                style={{ display: 'none' }}
                tabIndex={-1}
                autoComplete="off"
              />
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', sm: 'row' },
                  gap: 2,
                  alignItems: 'stretch',
                  mt: 3,
                }}
              >
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  disabled={status === 'loading'}
                  sx={{ fontWeight: 600, flex: { xs: 1, sm: 'none' } }}
                >
                  {status === 'loading' ? 'Sending...' : 'Send'}
                </Button>
                <Button
                  variant="outlined"
                  color="secondary"
                  href={`mailto:${EMAIL}`}
                  sx={{ flex: { xs: 1, sm: 'none' } }}
                >
                  Email directly
                </Button>
              </Box>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </Container>
  );
};
