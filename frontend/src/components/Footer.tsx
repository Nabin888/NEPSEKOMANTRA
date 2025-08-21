import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Link,
  TextField,
  Button,
  IconButton,
  Divider,
  useTheme,
  useMediaQuery,
} from '@mui/material';

import {
  Facebook,
  Twitter,
  LinkedIn,
  YouTube,
  Home,
  School,
  TrendingUp,
  Article,
  VideoLibrary,
  Build,
  Star,
  ContactSupport,
  ShowChart,
  Assessment,
  Search,
  AccountBalance,
  Event,
  Calculate,
  Book,
  PlayCircle,
  Person,
  Language,
  Description,
  Email,
  Send,
} from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Subscribing email:', email);
    setEmail('');
  };

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Facebook />, url: '#', label: 'Facebook' },
    { icon: <Twitter />, url: '#', label: 'Twitter' },
    { icon: <LinkedIn />, url: '#', label: 'LinkedIn' },
    { icon: <YouTube />, url: '#', label: 'YouTube' },
  ];

  const quickLinks = [
    { name: 'Home', icon: <Home />, path: '/' },
    { name: 'Courses & Learning', icon: <School />, path: '/courses' },
    { name: 'Market Data', icon: <TrendingUp />, path: '/market-data' },
    { name: 'News & Insights', icon: <Article />, path: '/news' },
    { name: 'Videos', icon: <VideoLibrary />, path: '/videos' },
    { name: 'Tools', icon: <Build />, path: '/tools' },
    { name: 'Premium', icon: <Star />, path: '/premium' },
    { name: 'Contact Us', icon: <ContactSupport />, path: '/contact' },
  ];

  const marketTools = [
    { name: 'Live Charts', icon: <ShowChart />, path: '/charts' },
    { name: 'Market Summary', icon: <Assessment />, path: '/summary' },
    { name: 'Stock Screener', icon: <Search />, path: '/screener' },
    { name: 'Portfolio Tracker', icon: <AccountBalance />, path: '/portfolio' },
    { name: 'Economic Calendar', icon: <Event />, path: '/calendar' },
    { name: 'Risk Calculator', icon: <Calculate />, path: '/calculator' },
  ];

  const learningResources = [
    { name: "Beginner's Guide", icon: <Book />, path: '/beginner-guide' },
    { name: 'Video Tutorials', icon: <PlayCircle />, path: '/tutorials' },
    { name: 'Expert Opinions', icon: <Person />, path: '/experts' },
    { name: 'Global Market Updates', icon: <Language />, path: '/global-updates' },
    { name: 'eBooks & Reports', icon: <Description />, path: '/ebooks' },
  ];

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#1a1a1a',
        color: 'white',
        mt: 'auto',
      }}
    >
      {/* Main Footer Content */}
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(5, 1fr)',
            },
            gap: 4,
          }}
        >
          {/* Column 1: About Us */}
          <Box>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 'bold', color: 'primary.main' }}>
              About Us
            </Typography>
            <Typography variant="body2" sx={{ mb: 3, color: '#b0b0b0', lineHeight: 1.6 }}>
              NEPSE Ko Mantra is your trusted platform for comprehensive stock market education, 
              real-time market data, and expert insights to help you make informed investment decisions.
            </Typography>
            <Link component={RouterLink} to="/about" sx={{ color: 'primary.main', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
              Learn More About Us
            </Link>
            <Box sx={{ mt: 3, display: 'flex', gap: 1 }}>
              {socialLinks.map((social, index) => (
                <IconButton
                  key={index}
                  component="a"
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                                     sx={{
                     color: '#b0b0b0',
                     backgroundColor: 'rgba(255,255,255,0.1)',
                     '&:hover': { 
                       color: 'primary.main',
                       backgroundColor: 'rgba(255,255,255,0.2)'
                     },
                   }}
                >
                  {social.icon}
                </IconButton>
              ))}
            </Box>
          </Box>

          {/* Column 2: Quick Links */}
          <Box>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 'bold', color: 'primary.main' }}>
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {quickLinks.map((link, index) => (
                <Link
                  key={index}
                  component={RouterLink}
                  to={link.path}
                  sx={{
                    color: '#b0b0b0',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    fontSize: '0.9rem',
                    '&:hover': { color: 'primary.main' },
                  }}
                >
                  {link.icon}
                  {link.name}
                </Link>
              ))}
            </Box>
          </Box>

          {/* Column 3: Market Tools */}
          <Box>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 'bold', color: 'primary.main' }}>
              Market Tools
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {marketTools.map((tool, index) => (
                <Link
                  key={index}
                  component={RouterLink}
                  to={tool.path}
                  sx={{
                    color: '#b0b0b0',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    fontSize: '0.9rem',
                    '&:hover': { color: 'primary.main' },
                  }}
                >
                  {tool.icon}
                  {tool.name}
                </Link>
              ))}
            </Box>
          </Box>

          {/* Column 4: Learning & Resources */}
          <Box>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 'bold', color: 'primary.main' }}>
              Learning & Resources
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {learningResources.map((resource, index) => (
                <Link
                  key={index}
                  component={RouterLink}
                  to={resource.path}
                  sx={{
                    color: '#b0b0b0',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    fontSize: '0.9rem',
                    '&:hover': { color: 'primary.main' },
                  }}
                >
                  {resource.icon}
                  {resource.name}
                </Link>
              ))}
            </Box>
          </Box>

          {/* Column 5: Newsletter Signup */}
          <Box>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 'bold', color: 'primary.main' }}>
              Stay Updated
            </Typography>
            <Typography variant="body2" sx={{ mb: 3, color: '#b0b0b0', lineHeight: 1.6 }}>
              Subscribe for free stock market tips, news, and analysis delivered to your inbox.
            </Typography>
            <Box component="form" onSubmit={handleSubscribe} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <TextField
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                size="small"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    color: 'white',
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    '& fieldset': {
                      borderColor: 'rgba(255,255,255,0.3)',
                    },
                    '&:hover fieldset': {
                      borderColor: 'primary.main',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: 'primary.main',
                    },
                  },
                  '& .MuiInputLabel-root': {
                    color: '#b0b0b0',
                  },
                  '& .MuiInputBase-input::placeholder': {
                    color: '#b0b0b0',
                    opacity: 0.7,
                  },
                }}
              />
              <Button
                type="submit"
                variant="contained"
                endIcon={<Send />}
                sx={{
                  backgroundColor: 'primary.main',
                  '&:hover': {
                    backgroundColor: 'primary.dark',
                  },
                }}
              >
                Subscribe
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>

      {/* Footer Bottom */}
      <Divider sx={{ borderColor: 'rgba(255,255,255,0.2)' }} />
      <Container maxWidth="lg" sx={{ py: 3 }}>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              md: 'repeat(3, 1fr)',
            },
            gap: 2,
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Box>
            <Typography variant="body2" sx={{ color: '#b0b0b0' }}>
              © {currentYear} NEPSE Ko Mantra. All Rights Reserved.
            </Typography>
          </Box>
          <Box>
            <Typography variant="body2" sx={{ color: '#b0b0b0', textAlign: 'center' }}>
              Stock market investments are subject to market risks. This website is for informational purposes only and not financial advice.
            </Typography>
          </Box>
          <Box>
            <Box sx={{ display: 'flex', gap: 3, justifyContent: { xs: 'center', md: 'flex-end' } }}>
              <Link
                component={RouterLink}
                to="/privacy"
                sx={{
                  color: '#b0b0b0',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  '&:hover': { color: 'primary.main' },
                }}
              >
                Privacy Policy
              </Link>
              <Link
                component={RouterLink}
                to="/terms"
                sx={{
                  color: '#b0b0b0',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  '&:hover': { color: 'primary.main' },
                }}
              >
                Terms of Service
              </Link>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
