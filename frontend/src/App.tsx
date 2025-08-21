import React, { useState, useMemo } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { 
  ThemeProvider, 
  createTheme, 
  CssBaseline, 
  Box, 
  Typography, 
  Button, 
  Container, 
  FormControl, 
  InputLabel, 
  Select, 
  MenuItem, 
  Chip, 
  useMediaQuery, 
  useTheme,
  TextField,
  IconButton,
  Checkbox,
  FormControlLabel,
  Link,
  Divider,
  CircularProgress
} from '@mui/material';
import { 
  School, 
  ShowChart, 
  Build, 
  Group, 
  FilterList, 
  Clear,
  ChatBubbleOutline,
  TrendingUp,
  Timeline,
  LightbulbOutline,
  Announcement,
  WhatsApp,
  Person,
  Email,
  Lock,
  Visibility,
  VisibilityOff,
  Google,
  Facebook,
  LinkedIn
} from '@mui/icons-material';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Theme context for dark/light mode
const ThemeContext = React.createContext({
  darkMode: false,
  toggleDarkMode: () => {},
});

// Custom hook for theme
const useThemeMode = () => {
  const [darkMode, setDarkMode] = useState(false);
  
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  
  return { darkMode, toggleDarkMode };
};

// Create themes
const createLightTheme = () => createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
      light: '#42a5f5',
      dark: '#1565c0',
    },
    secondary: {
      main: '#dc004e',
    },
    background: {
      default: '#f5f5f5',
      paper: '#ffffff',
    },
    text: {
      primary: '#333333',
      secondary: '#666666',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 600,
    },
    h3: {
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 8,
        },
      },
    },
  },
});

const createDarkTheme = () => createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9',
      light: '#e3f2fd',
      dark: '#42a5f5',
    },
    secondary: {
      main: '#f48fb1',
    },
    background: {
      default: '#121212',
      paper: '#1e1e1e',
    },
    text: {
      primary: '#ffffff',
      secondary: '#b0b0b0',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 600,
    },
    h3: {
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 8,
        },
      },
    },
  },
});

// Placeholder components for routes
const Home = () => (
  <Box sx={{ minHeight: '100vh' }}>
    {/* Hero Section */}
    <Box
      sx={{
        background: 'linear-gradient(135deg, #1976d2 0%, #1565c0 100%)',
        color: 'white',
        py: { xs: 8, md: 12 },
        px: { xs: 2, md: 4 },
        textAlign: 'center',
      }}
    >
      <Box sx={{ maxWidth: 'lg', mx: 'auto' }}>
        <Typography variant="h1" sx={{ 
          fontSize: { xs: '2.5rem', md: '4rem' }, 
          fontWeight: 700, 
          mb: 3,
          textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
        }}>
          Master the NEPSE Stock Market
        </Typography>
        <Typography variant="h4" sx={{ 
          mb: 4, 
          fontWeight: 400,
          opacity: 0.9,
          maxWidth: '800px',
          mx: 'auto'
        }}>
          Your comprehensive platform for stock market education, real-time data, and expert insights
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Button
            variant="contained"
            size="large"
            sx={{
              backgroundColor: 'white',
              color: 'primary.main',
              px: 4,
              py: 1.5,
              fontSize: '1.1rem',
              fontWeight: 600,
              '&:hover': {
                backgroundColor: 'grey.100',
              }
            }}
          >
            Start Learning
          </Button>
          <Button
            variant="outlined"
            size="large"
            sx={{
              borderColor: 'white',
              color: 'white',
              px: 4,
              py: 1.5,
              fontSize: '1.1rem',
              fontWeight: 600,
              '&:hover': {
                borderColor: 'white',
                backgroundColor: 'rgba(255,255,255,0.1)',
              }
            }}
          >
            View Market Data
          </Button>
        </Box>
      </Box>
    </Box>

    {/* Market Overview Section */}
    <Box sx={{ py: 8, px: { xs: 2, md: 4 }, backgroundColor: 'background.default' }}>
      <Container maxWidth="lg">
        <Typography variant="h2" sx={{ textAlign: 'center', mb: 6, fontWeight: 600 }}>
          NEPSE Market Overview
        </Typography>
        <Box sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
          gap: 4,
          mb: 6
        }}>
          <Box sx={{
            backgroundColor: 'white',
            p: 4,
            borderRadius: 3,
            textAlign: 'center',
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
            border: '1px solid',
            borderColor: 'grey.200'
          }}>
            <Typography variant="h3" sx={{ color: 'success.main', mb: 2, fontWeight: 700 }}>
              +2,847.65
            </Typography>
            <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
              NEPSE Index
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Current market index value
            </Typography>
          </Box>
          <Box sx={{
            backgroundColor: 'white',
            p: 4,
            borderRadius: 3,
            textAlign: 'center',
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
            border: '1px solid',
            borderColor: 'grey.200'
          }}>
            <Typography variant="h3" sx={{ color: 'primary.main', mb: 2, fontWeight: 700 }}>
              1,847 Cr
            </Typography>
            <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
              Trading Volume
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Today's total volume
            </Typography>
          </Box>
          <Box sx={{
            backgroundColor: 'white',
            p: 4,
            borderRadius: 3,
            textAlign: 'center',
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
            border: '1px solid',
            borderColor: 'grey.200'
          }}>
            <Typography variant="h3" sx={{ color: 'warning.main', mb: 2, fontWeight: 700 }}>
              234
            </Typography>
            <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
              Listed Companies
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Active securities
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>

    {/* Features Section */}
    <Box sx={{ py: 8, px: { xs: 2, md: 4 } }}>
      <Container maxWidth="lg">
        <Typography variant="h2" sx={{ textAlign: 'center', mb: 6, fontWeight: 600 }}>
          Why Choose NEPSE Ko Mantra?
        </Typography>
        <Box sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
          gap: 4
        }}>
          <Box sx={{ display: 'flex', gap: 3, alignItems: 'flex-start' }}>
            <Box sx={{
              backgroundColor: 'primary.main',
              color: 'white',
              p: 2,
              borderRadius: 2,
              minWidth: 56,
              height: 56,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <School sx={{ fontSize: 28 }} />
            </Box>
            <Box>
              <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
                Expert Education
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                Learn from certified financial experts with years of experience in the Nepalese stock market. 
                Our courses cover everything from basics to advanced trading strategies.
              </Typography>
            </Box>
          </Box>
          
          <Box sx={{ display: 'flex', gap: 3, alignItems: 'flex-start' }}>
            <Box sx={{
              backgroundColor: 'success.main',
              color: 'white',
              p: 2,
              borderRadius: 2,
              minWidth: 56,
              height: 56,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <ShowChart sx={{ fontSize: 28 }} />
            </Box>
            <Box>
              <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
                Real-Time Data
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                Access live market data, real-time stock prices, and comprehensive market analysis 
                to make informed investment decisions.
              </Typography>
            </Box>
          </Box>
          
          <Box sx={{ display: 'flex', gap: 3, alignItems: 'flex-start' }}>
            <Box sx={{
              backgroundColor: 'warning.main',
              color: 'white',
              p: 2,
              borderRadius: 2,
              minWidth: 56,
              height: 56,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Build sx={{ fontSize: 28 }} />
            </Box>
            <Box>
              <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
                Advanced Tools
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                Utilize our portfolio tracker, stock screener, and risk calculator to optimize 
                your trading strategy and manage your investments effectively.
              </Typography>
            </Box>
          </Box>
          
          <Box sx={{ display: 'flex', gap: 3, alignItems: 'flex-start' }}>
            <Box sx={{
              backgroundColor: 'secondary.main',
              color: 'white',
              p: 2,
              borderRadius: 2,
              minWidth: 56,
              height: 56,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Group sx={{ fontSize: 28 }} />
            </Box>
            <Box>
              <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
                Community Support
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                Join our community of traders, share insights, and learn from each other's 
                experiences in a supportive and collaborative environment.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>

    {/* Top Gainers & Losers Section */}
    <Box sx={{ py: 8, px: { xs: 2, md: 4 }, backgroundColor: 'background.default' }}>
      <Container maxWidth="lg">
        <Typography variant="h2" sx={{ textAlign: 'center', mb: 6, fontWeight: 600 }}>
          Market Movers
        </Typography>
        <Box sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
          gap: 4
        }}>
          {/* Top Gainers */}
          <Box sx={{
            backgroundColor: 'white',
            p: 4,
            borderRadius: 3,
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
            border: '1px solid',
            borderColor: 'grey.200'
          }}>
            <Typography variant="h5" sx={{ mb: 3, fontWeight: 600, color: 'success.main' }}>
              Top Gainers
            </Typography>
            {[
              { name: 'NIC Asia Bank', change: '+15.20%', price: 'Rs. 1,250' },
              { name: 'Nepal Bank Ltd', change: '+12.85%', price: 'Rs. 890' },
              { name: 'Nabil Bank', change: '+10.45%', price: 'Rs. 1,450' },
              { name: 'SBI Bank Nepal', change: '+9.75%', price: 'Rs. 1,180' },
              { name: 'Everest Bank', change: '+8.90%', price: 'Rs. 1,320' }
            ].map((stock, index) => (
              <Box key={index} sx={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                py: 1.5,
                borderBottom: index < 4 ? '1px solid' : 'none',
                borderColor: 'grey.200'
              }}>
                <Typography variant="body1" sx={{ fontWeight: 500 }}>
                  {stock.name}
                </Typography>
                <Box sx={{ textAlign: 'right' }}>
                  <Typography variant="body2" sx={{ color: 'success.main', fontWeight: 600 }}>
                    {stock.change}
                  </Typography>
                  <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                    {stock.price}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
          
          {/* Top Losers */}
          <Box sx={{
            backgroundColor: 'white',
            p: 4,
            borderRadius: 3,
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
            border: '1px solid',
            borderColor: 'grey.200'
          }}>
            <Typography variant="h5" sx={{ mb: 3, fontWeight: 600, color: 'error.main' }}>
              Top Losers
            </Typography>
            {[
              { name: 'Nepal Telecom', change: '-8.45%', price: 'Rs. 890' },
              { name: 'Chilime Hydropower', change: '-7.20%', price: 'Rs. 450' },
              { name: 'Upper Tamakoshi', change: '-6.85%', price: 'Rs. 320' },
              { name: 'Nepal Airlines', change: '-5.90%', price: 'Rs. 180' },
              { name: 'Nepal Oil Corp', change: '-4.75%', price: 'Rs. 420' }
            ].map((stock, index) => (
              <Box key={index} sx={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                py: 1.5,
                borderBottom: index < 4 ? '1px solid' : 'none',
                borderColor: 'grey.200'
              }}>
                <Typography variant="body1" sx={{ fontWeight: 500 }}>
                  {stock.name}
                </Typography>
                <Box sx={{ textAlign: 'right' }}>
                  <Typography variant="body2" sx={{ color: 'error.main', fontWeight: 600 }}>
                    {stock.change}
                  </Typography>
                  <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                    {stock.price}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>

    {/* CTA Section */}
    <Box sx={{ py: 8, px: { xs: 2, md: 4 } }}>
      <Container maxWidth="lg">
        <Box sx={{
          backgroundColor: 'primary.main',
          color: 'white',
          p: { xs: 4, md: 6 },
          borderRadius: 4,
          textAlign: 'center',
          background: 'linear-gradient(135deg, #1976d2 0%, #1565c0 100%)'
        }}>
          <Typography variant="h3" sx={{ mb: 3, fontWeight: 700 }}>
            Ready to Start Your Trading Journey?
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
            Join thousands of successful traders who have transformed their financial future with NEPSE Ko Mantra
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button
              variant="contained"
              size="large"
              sx={{
                backgroundColor: 'white',
                color: 'primary.main',
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
                fontWeight: 600,
                '&:hover': {
                  backgroundColor: 'grey.100',
                }
              }}
            >
              Get Started Today
            </Button>
            <Button
              variant="outlined"
              size="large"
              sx={{
                borderColor: 'white',
                color: 'white',
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
                fontWeight: 600,
                '&:hover': {
                  borderColor: 'white',
                  backgroundColor: 'rgba(255,255,255,0.1)',
                }
              }}
            >
              Learn More
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  </Box>
);

const Services = () => (
  <Box sx={{ minHeight: '100vh' }}>
    {/* Hero Section */}
    <Box
      sx={{
        background: 'linear-gradient(135deg, #1976d2 0%, #1565c0 100%)',
        color: 'white',
        py: { xs: 8, md: 12 },
        px: { xs: 2, md: 4 },
        textAlign: 'center',
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="h1" sx={{ 
          fontSize: { xs: '2.5rem', md: '4rem' }, 
          fontWeight: 700, 
          mb: 3,
          textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
        }}>
          Our Services
        </Typography>
        <Typography variant="h4" sx={{ 
          mb: 4, 
          fontWeight: 400,
          opacity: 0.9,
          maxWidth: '800px',
          mx: 'auto'
        }}>
          Comprehensive financial services designed to empower your investment journey
        </Typography>
      </Container>
    </Box>

    {/* Services Content */}
    <Box sx={{ py: 8, px: { xs: 2, md: 4 } }}>
      <Container maxWidth="lg">
        {/* Investment Advisory & Consulting */}
        <Box sx={{ mb: 8 }}>
          <Box sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
            gap: 6,
            alignItems: 'center'
          }}>
            <Box>
              <Typography variant="h3" sx={{ mb: 3, fontWeight: 600, color: 'primary.main' }}>
                Investment Advisory & Consulting
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8, mb: 3 }}>
                Our Investment Advisory & Consulting service provides clients with tailored financial strategies designed to align with their individual goals and risk appetite. We conduct in-depth financial assessments and risk profiling, then build customized portfolios that evolve over time.
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                Through continuous monitoring and adjustments, we ensure our clients' investments remain on track for sustainable growth.
              </Typography>
            </Box>
            <Box sx={{
              backgroundImage: 'url("https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: 400,
              borderRadius: 3,
              boxShadow: '0 8px 32px rgba(0,0,0,0.15)'
            }} />
          </Box>
        </Box>

        {/* Market Research & Analysis */}
        <Box sx={{ mb: 8 }}>
          <Box sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
            gap: 6,
            alignItems: 'center'
          }}>
            <Box sx={{
              backgroundImage: 'url("https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: 400,
              borderRadius: 3,
              boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
              order: { xs: 1, md: 1 }
            }} />
            <Box sx={{ order: { xs: 2, md: 2 } }}>
              <Typography variant="h3" sx={{ mb: 3, fontWeight: 600, color: 'primary.main' }}>
                Market Research & Analysis
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8, mb: 3 }}>
                We deliver detailed Market Research & Analysis to help investors make informed decisions in a constantly changing environment. Our services include equity research reports, technical and fundamental analysis, sector studies, and macroeconomic outlooks.
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                By providing daily and weekly updates, we equip clients with actionable insights to support both short-term trading and long-term investing.
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Risk Management & Hedging */}
        <Box sx={{ mb: 8 }}>
          <Box sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
            gap: 6,
            alignItems: 'center'
          }}>
            <Box>
              <Typography variant="h3" sx={{ mb: 3, fontWeight: 600, color: 'primary.main' }}>
                Risk Management & Hedging
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8, mb: 3 }}>
                Managing risk is central to safeguarding investments. Through our Risk Management & Hedging services, we assess each client's exposure and offer strategies to mitigate potential losses. This includes implementing hedging instruments like options and futures, applying stop-loss mechanisms, and conducting volatility analysis.
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                Our goal is to minimize downside risk while preserving growth opportunities.
              </Typography>
            </Box>
            <Box sx={{
              backgroundImage: 'url("https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: 400,
              borderRadius: 3,
              boxShadow: '0 8px 32px rgba(0,0,0,0.15)'
            }} />
          </Box>
        </Box>

        {/* Educational & Training Services */}
        <Box sx={{ mb: 8 }}>
          <Box sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
            gap: 6,
            alignItems: 'center'
          }}>
            <Box sx={{
              backgroundImage: 'url("https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: 400,
              borderRadius: 3,
              boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
              order: { xs: 1, md: 1 }
            }} />
            <Box sx={{ order: { xs: 2, md: 2 } }}>
              <Typography variant="h3" sx={{ mb: 3, fontWeight: 600, color: 'primary.main' }}>
                Educational & Training Services
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8, mb: 3 }}>
                We believe financial literacy is key to successful investing. Our Educational & Training Services offer workshops, webinars, and simulation platforms that allow clients to develop practical trading skills.
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                We cover essential areas such as trading psychology, technical analysis, and algorithmic trading, while also offering certification programs to empower serious investors and professionals.
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Alternative Investment Services */}
        <Box sx={{ mb: 8 }}>
          <Box sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
            gap: 6,
            alignItems: 'center'
          }}>
            <Box>
              <Typography variant="h3" sx={{ mb: 3, fontWeight: 600, color: 'primary.main' }}>
                Alternative Investment Services
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8, mb: 3 }}>
                Diversification is a cornerstone of smart investing, and our Alternative Investment Services provide clients with access to opportunities beyond traditional equities. These include mutual funds, ETFs, REITs, private equity, venture capital, and—in regulated environments—digital assets.
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                Each option is carefully vetted to balance innovation with risk management, helping clients achieve broader growth potential.
              </Typography>
            </Box>
            <Box sx={{
              backgroundImage: 'url("https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: 400,
              borderRadius: 3,
              boxShadow: '0 8px 32px rgba(0,0,0,0.15)'
            }} />
          </Box>
        </Box>

        {/* Corporate & Institutional Services */}
        <Box sx={{ mb: 8 }}>
          <Box sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
            gap: 6,
            alignItems: 'center'
          }}>
            <Box sx={{
              backgroundImage: 'url("https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: 400,
              borderRadius: 3,
              boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
              order: { xs: 1, md: 1 }
            }} />
            <Box sx={{ order: { xs: 2, md: 2 } }}>
              <Typography variant="h3" sx={{ mb: 3, fontWeight: 600, color: 'primary.main' }}>
                Corporate & Institutional Services
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8, mb: 3 }}>
                For businesses and institutions, we provide specialized Corporate & Institutional Services that drive long-term success. Our expertise covers IPO advisory and underwriting, mergers and acquisitions consulting, and corporate treasury management.
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                We also deliver tailored research partnerships to support strategic planning. By combining capital-raising solutions with risk management and market insights, we help organizations achieve financial efficiency and sustainable growth.
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* CTA Section */}
        <Box sx={{
          backgroundColor: 'primary.main',
          color: 'white',
          p: { xs: 4, md: 6 },
          borderRadius: 4,
          textAlign: 'center',
          background: 'linear-gradient(135deg, #1976d2 0%, #1565c0 100%)'
        }}>
          <Typography variant="h3" sx={{ mb: 3, fontWeight: 700 }}>
            Ready to Get Started?
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
            Contact our team to discuss how we can help you achieve your financial goals
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button
              variant="contained"
              size="large"
              sx={{
                backgroundColor: 'white',
                color: 'primary.main',
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
                fontWeight: 600,
                '&:hover': {
                  backgroundColor: 'grey.100',
                }
              }}
            >
              Contact Us
            </Button>
            <Button
              variant="outlined"
              size="large"
              sx={{
                borderColor: 'white',
                color: 'white',
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
                fontWeight: 600,
                '&:hover': {
                  borderColor: 'white',
                  backgroundColor: 'rgba(255,255,255,0.1)',
                }
              }}
            >
              Schedule Consultation
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  </Box>
);

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);
  const [hoveredPlan, setHoveredPlan] = useState<string | null>(null);

  const pricingPlans = [
    {
      id: 'basic',
      name: 'Basic Plan',
      subtitle: 'For Beginners',
      monthlyPrice: 49,
      yearlyPrice: 39,
      description: 'Get access to general trading insights, company updates, and beginner-friendly resources. Perfect for new investors starting their journey.',
      features: [
        'General trading insights',
        'Company updates & announcements',
        'Basic market research',
        'Community access (General Info Group)',
        'Weekly newsletter',
        'Email support'
      ],
      icon: <School sx={{ fontSize: 24 }} />,
      color: 'primary.main',
      popular: false
    },
    {
      id: 'standard',
      name: 'Standard Plan',
      subtitle: 'For Active Traders',
      monthlyPrice: 99,
      yearlyPrice: 79,
      description: 'Includes short-term trading insights, technical analysis group access, and weekly market research reports to boost your trading skills.',
      features: [
        'All Basic features',
        'Short-term trading insights',
        'Technical analysis group access',
        'Weekly market research reports',
        'Live market alerts',
        'Priority email support',
        'Monthly Q&A sessions'
      ],
      icon: <ShowChart sx={{ fontSize: 24 }} />,
      color: 'success.main',
      popular: true
    },
    {
      id: 'premium',
      name: 'Premium Plan',
      subtitle: 'For Serious Investors',
      monthlyPrice: 199,
      yearlyPrice: 159,
      description: 'Comes with all Standard features plus long-term investment strategies, personalized Q&A sessions, and exclusive webinars with experts.',
      features: [
        'All Standard features',
        'Long-term investment strategies',
        'Personalized Q&A sessions',
        'Exclusive expert webinars',
        'Portfolio review sessions',
        'Advanced market analysis',
        'Phone support',
        'Custom research reports'
      ],
      icon: <Build sx={{ fontSize: 24 }} />,
      color: 'warning.main',
      popular: false
    },
    {
      id: 'institutional',
      name: 'Institutional Plan',
      subtitle: 'For Corporates & HNIs',
      monthlyPrice: 'Custom',
      yearlyPrice: 'Custom',
      description: 'Tailored advisory, portfolio management, IPO & M&A insights, and premium research for businesses and high-net-worth clients.',
      features: [
        'All Premium features',
        'Tailored investment advisory',
        'Portfolio management services',
        'IPO & M&A insights',
        'Premium research reports',
        'Dedicated account manager',
        '24/7 priority support',
        'Custom training programs',
        'Corporate workshops'
      ],
      icon: <Group sx={{ fontSize: 24 }} />,
      color: 'error.main',
      popular: false
    }
  ];

  const getPrice = (plan: any) => {
    if (plan.monthlyPrice === 'Custom') return 'Custom Pricing';
    const price = isYearly ? plan.yearlyPrice : plan.monthlyPrice;
    return `$${price}`;
  };

  const getPeriod = () => isYearly ? '/month (billed yearly)' : '/month';

  const getSavings = (plan: any) => {
    if (plan.monthlyPrice === 'Custom') return null;
    const savings = plan.monthlyPrice - plan.yearlyPrice;
    return savings > 0 ? `Save $${savings}/month` : null;
  };

  return (
    <Box sx={{ minHeight: '100vh' }}>
      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #1976d2 0%, #1565c0 100%)',
          color: 'white',
          py: { xs: 8, md: 12 },
          px: { xs: 2, md: 4 },
          textAlign: 'center',
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="h1" sx={{ 
            fontSize: { xs: '2.5rem', md: '4rem' }, 
            fontWeight: 700, 
            mb: 3,
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
          }}>
            💰 Choose Your Plan
          </Typography>
          <Typography variant="h4" sx={{ 
            mb: 4, 
            fontWeight: 400,
            opacity: 0.9,
            maxWidth: '800px',
            mx: 'auto'
          }}>
            Start your trading journey with the perfect plan that matches your goals and experience level
          </Typography>
          
          {/* Pricing Toggle */}
          <Box sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 2,
            backgroundColor: 'rgba(255,255,255,0.1)',
            borderRadius: 3,
            p: 1,
            maxWidth: 300,
            mx: 'auto'
          }}>
            <Typography variant="body1" sx={{ color: isYearly ? 'rgba(255,255,255,0.7)' : 'white', fontWeight: 600 }}>
              Monthly
            </Typography>
            <Button
              onClick={() => setIsYearly(!isYearly)}
              sx={{
                backgroundColor: isYearly ? 'white' : 'transparent',
                color: isYearly ? 'primary.main' : 'white',
                borderRadius: 2,
                px: 3,
                py: 1,
                minWidth: 'auto',
                '&:hover': {
                  backgroundColor: isYearly ? 'grey.100' : 'rgba(255,255,255,0.1)',
                }
              }}
            >
              {isYearly ? 'ON' : 'OFF'}
            </Button>
            <Typography variant="body1" sx={{ color: isYearly ? 'white' : 'rgba(255,255,255,0.7)', fontWeight: 600 }}>
              Yearly
            </Typography>
          </Box>
          
          {isYearly && (
            <Typography variant="body1" sx={{ 
              mt: 2, 
              color: 'rgba(255,255,255,0.9)',
              fontStyle: 'italic'
            }}>
              💡 Save up to 20% with yearly billing
            </Typography>
          )}
        </Container>
      </Box>

      {/* Pricing Cards */}
      <Box sx={{ py: 8, px: { xs: 2, md: 4 } }}>
        <Container maxWidth="lg">
          <Box sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' },
            gap: 4,
            mb: 8
          }}>
            {pricingPlans.map((plan) => (
              <Box
                key={plan.id}
                onMouseEnter={() => setHoveredPlan(plan.id)}
                onMouseLeave={() => setHoveredPlan(null)}
                sx={{
                  backgroundColor: 'white',
                  borderRadius: 4,
                  overflow: 'hidden',
                  boxShadow: plan.popular 
                    ? '0 20px 60px rgba(0,0,0,0.15)' 
                    : '0 8px 32px rgba(0,0,0,0.1)',
                  border: plan.popular ? '3px solid' : '1px solid',
                  borderColor: plan.popular ? plan.color : 'grey.200',
                  position: 'relative',
                  transition: 'all 0.3s ease',
                  transform: hoveredPlan === plan.id ? 'translateY(-8px)' : 'translateY(0)',
                  '&:hover': {
                    boxShadow: '0 25px 80px rgba(0,0,0,0.2)',
                  }
                }}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <Box sx={{
                    position: 'absolute',
                    top: 0,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    backgroundColor: plan.color,
                    color: 'white',
                    px: 3,
                    py: 1,
                    borderRadius: '0 0 16px 16px',
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    zIndex: 1
                  }}>
                    ⭐ Most Popular
                  </Box>
                )}

                {/* Header */}
                <Box sx={{
                  backgroundColor: plan.popular ? plan.color : 'grey.50',
                  color: plan.popular ? 'white' : 'text.primary',
                  p: 3,
                  textAlign: 'center'
                }}>
                  <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: 2
                  }}>
                    <Box sx={{ color: plan.popular ? 'white' : plan.color }}>
                      {plan.icon}
                    </Box>
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
                    {plan.name}
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: plan.popular ? 0.9 : 0.7 }}>
                    {plan.subtitle}
                  </Typography>
                </Box>

                {/* Price */}
                <Box sx={{ p: 3, textAlign: 'center', borderBottom: '1px solid', borderColor: 'grey.200' }}>
                  <Typography variant="h3" sx={{ fontWeight: 700, color: plan.color, mb: 1 }}>
                    {getPrice(plan)}
                  </Typography>
                  {plan.monthlyPrice !== 'Custom' && (
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      {getPeriod()}
                    </Typography>
                  )}
                  {getSavings(plan) && (
                    <Typography variant="body2" sx={{ 
                      color: 'success.main', 
                      fontWeight: 600,
                      mt: 1 
                    }}>
                      {getSavings(plan)}
                    </Typography>
                  )}
                </Box>

                {/* Description */}
                <Box sx={{ p: 3, borderBottom: '1px solid', borderColor: 'grey.200' }}>
                  <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
                    {plan.description}
                  </Typography>
                </Box>

                {/* Features */}
                <Box sx={{ p: 3, flexGrow: 1 }}>
                  <Typography variant="h6" sx={{ mb: 2, fontWeight: 600, color: 'text.primary' }}>
                    What's included:
                  </Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                    {plan.features.map((feature, index) => (
                      <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Box sx={{ 
                          color: 'success.main', 
                          fontSize: '1.2rem',
                          lineHeight: 1
                        }}>
                          ✓
                        </Box>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                          {feature}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </Box>

                {/* CTA Button */}
                <Box sx={{ p: 3, pt: 0 }}>
                  <Button
                    fullWidth
                    variant={plan.popular ? 'contained' : 'outlined'}
                    sx={{
                      py: 1.5,
                      fontSize: '1rem',
                      fontWeight: 600,
                      backgroundColor: plan.popular ? plan.color : 'transparent',
                      borderColor: plan.color,
                      color: plan.popular ? 'white' : plan.color,
                      '&:hover': {
                        backgroundColor: plan.popular ? plan.color : plan.color,
                        color: 'white',
                        opacity: 0.9
                      }
                    }}
                  >
                    {plan.monthlyPrice === 'Custom' ? 'Contact Sales' : 'Get Started'}
                  </Button>
                </Box>
              </Box>
            ))}
          </Box>

          {/* FAQ Section */}
          <Box sx={{ mb: 8 }}>
            <Typography variant="h2" sx={{ 
              mb: 6, 
              fontWeight: 600, 
              color: 'primary.main', 
              textAlign: 'center' 
            }}>
              Frequently Asked Questions
            </Typography>
            <Box sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
              gap: 4
            }}>
              <Box sx={{
                backgroundColor: 'white',
                p: 4,
                borderRadius: 3,
                border: '1px solid',
                borderColor: 'grey.200',
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
              }}>
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 600, color: 'primary.main' }}>
                  Can I change my plan anytime?
                </Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                  Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing adjustments.
                </Typography>
              </Box>
              <Box sx={{
                backgroundColor: 'white',
                p: 4,
                borderRadius: 3,
                border: '1px solid',
                borderColor: 'grey.200',
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
              }}>
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 600, color: 'primary.main' }}>
                  Is there a free trial?
                </Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                  We offer a 7-day free trial for all plans. No credit card required to start exploring our platform and community.
                </Typography>
              </Box>
              <Box sx={{
                backgroundColor: 'white',
                p: 4,
                borderRadius: 3,
                border: '1px solid',
                borderColor: 'grey.200',
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
              }}>
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 600, color: 'primary.main' }}>
                  What payment methods do you accept?
                </Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                  We accept all major credit cards, PayPal, and bank transfers for institutional plans. All payments are secure and encrypted.
                </Typography>
              </Box>
              <Box sx={{
                backgroundColor: 'white',
                p: 4,
                borderRadius: 3,
                border: '1px solid',
                borderColor: 'grey.200',
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
              }}>
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 600, color: 'primary.main' }}>
                  Can I cancel anytime?
                </Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                  Absolutely! You can cancel your subscription at any time with no cancellation fees. Your access continues until the end of your billing period.
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* CTA Section */}
          <Box sx={{
            backgroundColor: 'primary.main',
            color: 'white',
            p: { xs: 4, md: 6 },
            borderRadius: 4,
            textAlign: 'center',
            background: 'linear-gradient(135deg, #1976d2 0%, #1565c0 100%)'
          }}>
            <Typography variant="h3" sx={{ mb: 3, fontWeight: 700 }}>
              Ready to Start Your Trading Journey?
            </Typography>
            <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
              Join thousands of successful traders who have transformed their financial future with NEPSE Ko Mantra
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Button
                variant="contained"
                size="large"
                sx={{
                  backgroundColor: 'white',
                  color: 'primary.main',
                  px: 4,
                  py: 1.5,
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  '&:hover': {
                    backgroundColor: 'grey.100',
                  }
                }}
              >
                Start Free Trial
              </Button>
              <Button
                variant="outlined"
                size="large"
                sx={{
                  borderColor: 'white',
                  color: 'white',
                  px: 4,
                  py: 1.5,
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  '&:hover': {
                    borderColor: 'white',
                    backgroundColor: 'rgba(255,255,255,0.1)',
                  }
                }}
              >
                Contact Sales
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

const Community = () => (
  <Box sx={{ minHeight: '100vh' }}>
    {/* Hero Section */}
    <Box
      sx={{
        background: 'linear-gradient(135deg, #1976d2 0%, #1565c0 100%)',
        color: 'white',
        py: { xs: 8, md: 12 },
        px: { xs: 2, md: 4 },
        textAlign: 'center',
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="h1" sx={{ 
          fontSize: { xs: '2.5rem', md: '4rem' }, 
          fontWeight: 700, 
          mb: 3,
          textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
        }}>
          📢 Our Communities
        </Typography>
        <Typography variant="h4" sx={{ 
          mb: 4, 
          fontWeight: 400,
          opacity: 0.9,
          maxWidth: '800px',
          mx: 'auto'
        }}>
          We believe in the power of collective knowledge and collaboration. To support traders, investors, and learners, our company has created dedicated WhatsApp Communities that connect people with timely insights, strategies, and updates.
        </Typography>
      </Container>
    </Box>

    {/* Communities Content */}
    <Box sx={{ py: 8, px: { xs: 2, md: 4 } }}>
      <Container maxWidth="lg">
        {/* Communities Grid */}
        <Box sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' },
          gap: 4,
          mb: 8
        }}>
          {/* General Information Group */}
          <CommunityCard
            title="General Information Group"
            description="A space for market news, updates, and key discussions on stocks, forex, and investments. Perfect for beginners and casual investors who want to stay informed."
            icon={<ChatBubbleOutline sx={{ fontSize: 40 }} />}
            image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
            whatsappLink="#"
            color="primary.main"
          />

          {/* Short-Term Trading Insights Group */}
          <CommunityCard
            title="Short-Term Trading Insights Group"
            description="Focused on quick opportunities, this group provides actionable short-term trading tips, intraday strategies, and insights to help members make fast, informed decisions."
            icon={<TrendingUp sx={{ fontSize: 40 }} />}
            image="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
            whatsappLink="#"
            color="success.main"
          />

          {/* Long-Term Trading Group */}
          <CommunityCard
            title="Long-Term Trading Group"
            description="For investors who prefer patience and vision, this group offers discussions on long-term investment strategies, NEPSE insights, and wealth-building approaches."
            icon={<Timeline sx={{ fontSize: 40 }} />}
            image="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
            whatsappLink="#"
            color="warning.main"
          />

          {/* Technical Analysis Group */}
          <CommunityCard
            title="Technical Analysis Group"
            description="A community for chartists and technical traders. Members share chart patterns, candlestick insights, and technical indicators to identify profitable setups."
            icon={<ShowChart sx={{ fontSize: 40 }} />}
            image="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
            whatsappLink="#"
            color="info.main"
          />

          {/* Important Insights Group */}
          <CommunityCard
            title="Important Insights Group"
            description="A filtered channel for the most critical updates—key signals, macroeconomic events, and research highlights. Designed for members who want to cut through the noise."
            icon={<LightbulbOutline sx={{ fontSize: 40 }} />}
            image="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
            whatsappLink="#"
            color="secondary.main"
          />

          {/* Company Updates & Announcements Group */}
          <CommunityCard
            title="Company Updates & Announcements Group"
            description="Our official channel for updates on new course launches, training schedules, events, and company news. Members get first-hand access to announcements and opportunities."
            icon={<Announcement sx={{ fontSize: 40 }} />}
            image="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
            whatsappLink="#"
            color="error.main"
          />
        </Box>

        {/* Benefits Section */}
        <Box sx={{ mb: 8 }}>
          <Typography variant="h2" sx={{ mb: 6, fontWeight: 600, color: 'primary.main', textAlign: 'center' }}>
            ✅ These communities create a complete ecosystem:
          </Typography>
          <Box sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
            gap: 4
          }}>
            <Box sx={{
              backgroundColor: 'white',
              p: 4,
              borderRadius: 3,
              border: '1px solid',
              borderColor: 'grey.200',
              boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
            }}>
              <Typography variant="h5" sx={{ mb: 2, fontWeight: 600, color: 'success.main' }}>
                🎯 Beginners gain exposure
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                Start your trading journey with access to experienced traders, educational content, and a supportive community that helps you learn and grow.
              </Typography>
            </Box>
            <Box sx={{
              backgroundColor: 'white',
              p: 4,
              borderRadius: 3,
              border: '1px solid',
              borderColor: 'grey.200',
              boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
            }}>
              <Typography variant="h5" sx={{ mb: 2, fontWeight: 600, color: 'primary.main' }}>
                📈 Active traders exchange strategies
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                Share your trading strategies, get feedback from peers, and discover new approaches to improve your trading performance.
              </Typography>
            </Box>
            <Box sx={{
              backgroundColor: 'white',
              p: 4,
              borderRadius: 3,
              border: '1px solid',
              borderColor: 'grey.200',
              boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
            }}>
              <Typography variant="h5" sx={{ mb: 2, fontWeight: 600, color: 'warning.main' }}>
                🏦 Investors receive long-term guidance
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                Access insights on long-term investment opportunities, market analysis, and strategies for building sustainable wealth.
              </Typography>
            </Box>
            <Box sx={{
              backgroundColor: 'white',
              p: 4,
              borderRadius: 3,
              border: '1px solid',
              borderColor: 'grey.200',
              boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
            }}>
              <Typography variant="h5" sx={{ mb: 2, fontWeight: 600, color: 'info.main' }}>
                📚 Learners stay updated on new courses
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                Be the first to know about new training programs, course launches, and educational opportunities to advance your trading skills.
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* CTA Section */}
        <Box sx={{
          backgroundColor: 'primary.main',
          color: 'white',
          p: { xs: 4, md: 6 },
          borderRadius: 4,
          textAlign: 'center',
          background: 'linear-gradient(135deg, #1976d2 0%, #1565c0 100%)'
        }}>
          <Typography variant="h3" sx={{ mb: 3, fontWeight: 700 }}>
            Ready to Join Our Communities?
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
            Connect with fellow traders, share insights, and stay updated with the latest market information
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button
              variant="contained"
              size="large"
              sx={{
                backgroundColor: 'white',
                color: 'primary.main',
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
                fontWeight: 600,
                '&:hover': {
                  backgroundColor: 'grey.100',
                }
              }}
            >
              Join All Communities
            </Button>
            <Button
              variant="outlined"
              size="large"
              sx={{
                borderColor: 'white',
                color: 'white',
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
                fontWeight: 600,
                '&:hover': {
                  borderColor: 'white',
                  backgroundColor: 'rgba(255,255,255,0.1)',
                }
              }}
            >
              Learn More
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  </Box>
);

// Community Card Component
const CommunityCard = ({ title, description, icon, image, whatsappLink, color }: { 
  title: string, 
  description: string, 
  icon: React.ReactNode, 
  image: string, 
  whatsappLink: string, 
  color: string 
}) => (
  <Box sx={{
    backgroundColor: 'white',
    borderRadius: 3,
    overflow: 'hidden',
    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
    border: '1px solid',
    borderColor: 'grey.200',
    transition: 'transform 0.2s, box-shadow 0.2s',
    '&:hover': {
      transform: 'translateY(-4px)',
      boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
    }
  }}>
    <Box sx={{
      height: 200,
      backgroundImage: `url("${image}")`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <Box sx={{
        backgroundColor: 'rgba(255,255,255,0.9)',
        borderRadius: '50%',
        p: 2,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backdropFilter: 'blur(10px)'
      }}>
        <Box sx={{ color: color }}>
          {icon}
        </Box>
      </Box>
    </Box>
    <Box sx={{ p: 3 }}>
      <Typography variant="h6" sx={{ mb: 2, fontWeight: 600, lineHeight: 1.3 }}>
        {title}
      </Typography>
      <Typography variant="body2" sx={{ color: 'text.secondary', mb: 3, lineHeight: 1.6 }}>
        {description}
      </Typography>
      <Button
        variant="contained"
        fullWidth
        startIcon={<WhatsApp sx={{ fontSize: 20 }} />}
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          backgroundColor: '#25D366',
          '&:hover': {
            backgroundColor: '#128C7E',
          }
        }}
      >
        Join Now
      </Button>
    </Box>
  </Box>
);

const About = () => (
  <Box sx={{ p: 3, textAlign: 'center' }}>
    <h1>About Us</h1>
    <p>Learn about our mission to educate and empower traders in the Nepalese stock market</p>
  </Box>
);

// Filter Bar Component
const FilterBar = ({ onFilterChange, filters }: { onFilterChange: (filters: any) => void, filters: any }) => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  const isTablet = useMediaQuery(theme.breakpoints.between('md', 'lg'));
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleFilterChange = (filterType: string, value: string) => {
    const newFilters = { ...filters, [filterType]: value };
    onFilterChange(newFilters);
  };

  const clearFilters = () => {
    const clearedFilters = { stream: '', type: '', level: '' };
    onFilterChange(clearedFilters);
  };

  const hasActiveFilters = filters.stream || filters.type || filters.level;

  return (
    <Box sx={{
      backgroundColor: 'white',
      border: '1px solid',
      borderColor: 'grey.200',
      borderRadius: 3,
      p: { xs: 2, md: 3 },
      mb: 4,
      boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
    }}>
      <Box sx={{
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        gap: { xs: 2, md: 3 },
        alignItems: isMobile ? 'stretch' : 'flex-end',
        overflowX: isTablet ? 'auto' : 'visible',
        '&::-webkit-scrollbar': {
          height: 6,
        },
        '&::-webkit-scrollbar-track': {
          backgroundColor: 'grey.100',
          borderRadius: 3,
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: 'grey.300',
          borderRadius: 3,
        },
      }}>
        {/* Stream Filter */}
        <FormControl 
          fullWidth={isMobile}
          sx={{ 
            minWidth: isTablet ? 200 : 'auto',
            flex: isDesktop ? 1 : 'none'
          }}
        >
          <InputLabel id="stream-label">Stream</InputLabel>
          <Select
            labelId="stream-label"
            id="stream-select"
            value={filters.stream}
            label="Stream"
            onChange={(e) => handleFilterChange('stream', e.target.value)}
            aria-describedby="stream-description"
          >
            <MenuItem value="">All Streams</MenuItem>
            <MenuItem value="nepse">NEPSE Related Courses</MenuItem>
            <MenuItem value="forex">Forex Related Courses</MenuItem>
            <MenuItem value="neutral">Neutral Finance & Training</MenuItem>
          </Select>
        </FormControl>

        {/* Type Filter */}
        <FormControl 
          fullWidth={isMobile}
          sx={{ 
            minWidth: isTablet ? 200 : 'auto',
            flex: isDesktop ? 1 : 'none'
          }}
        >
          <InputLabel id="type-label">Type</InputLabel>
          <Select
            labelId="type-label"
            id="type-select"
            value={filters.type}
            label="Type"
            onChange={(e) => handleFilterChange('type', e.target.value)}
            aria-describedby="type-description"
          >
            <MenuItem value="">All Types</MenuItem>
            <MenuItem value="course">Course</MenuItem>
            <MenuItem value="training">Training</MenuItem>
          </Select>
        </FormControl>

        {/* Level Filter */}
        <FormControl 
          fullWidth={isMobile}
          sx={{ 
            minWidth: isTablet ? 200 : 'auto',
            flex: isDesktop ? 1 : 'none'
          }}
        >
          <InputLabel id="level-label">Level</InputLabel>
          <Select
            labelId="level-label"
            id="level-select"
            value={filters.level}
            label="Level"
            onChange={(e) => handleFilterChange('level', e.target.value)}
            aria-describedby="level-description"
          >
            <MenuItem value="">All Levels</MenuItem>
            <MenuItem value="beginner">Beginner</MenuItem>
            <MenuItem value="intermediate">Intermediate</MenuItem>
            <MenuItem value="professional">Expert/Professional</MenuItem>
          </Select>
        </FormControl>

        {/* Clear Filters Button */}
        <Button
          variant="outlined"
          startIcon={<Clear />}
          onClick={clearFilters}
          disabled={!hasActiveFilters}
          sx={{
            minWidth: 'fit-content',
            px: 3,
            py: 1.5,
            height: 56,
            borderColor: 'grey.300',
            color: 'text.secondary',
            '&:hover': {
              borderColor: 'error.main',
              color: 'error.main',
            },
            '&:disabled': {
              borderColor: 'grey.200',
              color: 'grey.400',
            }
          }}
        >
          Clear Filters
        </Button>
      </Box>

      {/* Active Filters Display */}
      {hasActiveFilters && (
        <Box sx={{ mt: 2, display: 'flex', gap: 1, flexWrap: 'wrap' }}>
          <Typography variant="body2" sx={{ color: 'text.secondary', mr: 1 }}>
            Active filters:
          </Typography>
          {filters.stream && (
            <Chip
              label={`Stream: ${filters.stream === 'nepse' ? 'NEPSE Related' : filters.stream === 'forex' ? 'Forex Related' : 'Neutral Finance'}`}
              size="small"
              onDelete={() => handleFilterChange('stream', '')}
              color="primary"
              variant="outlined"
            />
          )}
          {filters.type && (
            <Chip
              label={`Type: ${filters.type === 'course' ? 'Course' : 'Training'}`}
              size="small"
              onDelete={() => handleFilterChange('type', '')}
              color="primary"
              variant="outlined"
            />
          )}
          {filters.level && (
            <Chip
              label={`Level: ${filters.level === 'beginner' ? 'Beginner' : filters.level === 'intermediate' ? 'Intermediate' : 'Expert/Professional'}`}
              size="small"
              onDelete={() => handleFilterChange('level', '')}
              color="primary"
              variant="outlined"
            />
          )}
        </Box>
      )}
    </Box>
  );
};

const Courses = () => {
  const [filters, setFilters] = useState({
    stream: '',
    type: '',
    level: ''
  });

  // Course data with filter fields
  const allCourses = [
    // Academic Courses
    {
      title: 'Introduction to Financial Markets',
      level: 'beginner',
      skills: 'Understanding stock exchanges, equity vs debt, basic instruments.',
      duration: '1–3 weeks',
      rating: '4.8/5',
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      stream: 'neutral',
      type: 'course'
    },
    {
      title: 'Fundamental Analysis',
      level: 'intermediate',
      skills: 'Financial statements, ratio analysis, intrinsic valuation.',
      duration: '1–2 months',
      rating: '4.9/5',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      stream: 'neutral',
      type: 'course'
    },
    {
      title: 'Technical Analysis',
      level: 'intermediate',
      skills: 'Charts, candlesticks, RSI, MACD, forecasting.',
      duration: '1–2 months',
      rating: '4.8/5',
      image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      stream: 'neutral',
      type: 'course'
    },
    {
      title: 'Portfolio & Wealth Management',
      level: 'intermediate',
      skills: 'Diversification, asset allocation, long-term wealth building.',
      duration: '1–2 months',
      rating: '4.9/5',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      stream: 'neutral',
      type: 'course'
    },
    {
      title: 'Behavioral Finance',
      level: 'intermediate',
      skills: 'Trading psychology, cognitive biases, decision-making.',
      duration: '1–3 weeks',
      rating: '4.7/5',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      stream: 'neutral',
      type: 'course'
    },
    // Technical & Professional Training
    {
      title: 'Trading Strategies Workshop',
      level: 'intermediate',
      skills: 'Intraday, swing, momentum trading, arbitrage.',
      duration: '1–3 weeks',
      rating: '4.9/5',
      image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      stream: 'neutral',
      type: 'training'
    },
    {
      title: 'Derivatives & Hedging',
      level: 'intermediate',
      skills: 'Options, futures, risk control strategies.',
      duration: '1–2 months',
      rating: '4.8/5',
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      stream: 'neutral',
      type: 'training'
    },
    {
      title: 'Algo & Quantitative Trading',
      level: 'professional',
      skills: 'Algorithm coding (Python), backtesting, quant strategies.',
      duration: '1–2 months',
      rating: '4.9/5',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      stream: 'neutral',
      type: 'training'
    },
    {
      title: 'Financial Modeling (Excel/Python)',
      level: 'professional',
      skills: 'Valuation models, forecasting, scenario analysis.',
      duration: '1–2 months',
      rating: '4.8/5',
      image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      stream: 'neutral',
      type: 'training'
    },
    {
      title: 'Risk Management Tools',
      level: 'intermediate',
      skills: 'Value at Risk, stress testing, stop-loss systems.',
      duration: '1–3 weeks',
      rating: '4.8/5',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      stream: 'neutral',
      type: 'training'
    },
    // NEPSE Courses
    {
      title: 'Introduction to NEPSE & Capital Markets',
      level: 'beginner',
      skills: 'Market structure, order types, settlement in NEPSE.',
      duration: '1–3 weeks',
      rating: '4.8/5',
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      stream: 'nepse',
      type: 'course'
    },
    {
      title: 'NEPSE Technical Analysis',
      level: 'intermediate',
      skills: 'Candlesticks, chart analysis specific to Nepalese stocks.',
      duration: '1–2 months',
      rating: '4.8/5',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      stream: 'nepse',
      type: 'course'
    },
    {
      title: 'NEPSE Fundamental Analysis',
      level: 'intermediate',
      skills: 'Company financials, IPO evaluations, sectoral trends in Nepal.',
      duration: '1–2 months',
      rating: '4.9/5',
      image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      stream: 'nepse',
      type: 'course'
    },
    {
      title: 'NEPSE Trading Strategies',
      level: 'intermediate',
      skills: 'Short-term trading, long-term investing within NEPSE.',
      duration: '1–3 weeks',
      rating: '4.8/5',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      stream: 'nepse',
      type: 'training'
    },
    {
      title: 'NEPSE Regulations & Compliance',
      level: 'professional',
      skills: 'SEBON rules, listing requirements, corporate governance.',
      duration: '1–2 months',
      rating: '4.7/5',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      stream: 'nepse',
      type: 'course'
    },
    // Forex Courses
    {
      title: 'Introduction to Forex Markets',
      level: 'beginner',
      skills: 'Currency pairs, trading sessions, brokers.',
      duration: '1–3 weeks',
      rating: '4.8/5',
      image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      stream: 'forex',
      type: 'course'
    },
    {
      title: 'Forex Technical Analysis',
      level: 'intermediate',
      skills: 'Trend analysis, Fibonacci, MACD, RSI in forex markets.',
      duration: '1–2 months',
      rating: '4.9/5',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      stream: 'forex',
      type: 'course'
    },
    {
      title: 'Forex Fundamental Analysis',
      level: 'intermediate',
      skills: 'Impact of interest rates, inflation, geopolitical events.',
      duration: '1–2 months',
      rating: '4.8/5',
      image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      stream: 'forex',
      type: 'course'
    },
    {
      title: 'Forex Risk Management & Hedging',
      level: 'professional',
      skills: 'Leverage, margin, hedging strategies, capital preservation.',
      duration: '1–2 months',
      rating: '4.9/5',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      stream: 'forex',
      type: 'training'
    },
    {
      title: 'Advanced Forex Trading Strategies',
      level: 'professional',
      skills: 'Scalping, swing trading, algorithmic forex trading.',
      duration: '1–2 months',
      rating: '4.9/5',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      stream: 'forex',
      type: 'training'
    }
  ];

  // Filter courses based on selected filters
  const filteredCourses = useMemo(() => {
    return allCourses.filter(course => {
      if (filters.stream && course.stream !== filters.stream) return false;
      if (filters.type && course.type !== filters.type) return false;
      if (filters.level && course.level !== filters.level) return false;
      return true;
    });
  }, [filters]);

  const handleFilterChange = (newFilters: any) => {
    setFilters(newFilters);
  };

  return (
    <Box sx={{ minHeight: '100vh' }}>
      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #1976d2 0%, #1565c0 100%)',
          color: 'white',
          py: { xs: 8, md: 12 },
          px: { xs: 2, md: 4 },
          textAlign: 'center',
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="h1" sx={{ 
            fontSize: { xs: '2.5rem', md: '4rem' }, 
            fontWeight: 700, 
            mb: 3,
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
          }}>
            Training & Courses
          </Typography>
          <Typography variant="h4" sx={{ 
            mb: 4, 
            fontWeight: 400,
            opacity: 0.9,
            maxWidth: '800px',
            mx: 'auto'
          }}>
            Master the art of trading with our comprehensive courses designed for all skill levels
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button
              variant="contained"
              size="large"
              sx={{
                backgroundColor: 'white',
                color: 'primary.main',
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
                fontWeight: 600,
                '&:hover': {
                  backgroundColor: 'grey.100',
                }
              }}
            >
              Enroll Now
            </Button>
            <Button
              variant="outlined"
              size="large"
              sx={{
                borderColor: 'white',
                color: 'white',
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
                fontWeight: 600,
                '&:hover': {
                  borderColor: 'white',
                  backgroundColor: 'rgba(255,255,255,0.1)',
                }
              }}
            >
              View All Courses
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Courses Content */}
      <Box sx={{ py: 8, px: { xs: 2, md: 4 } }}>
        <Container maxWidth="lg">
          {/* Filter Bar */}
          <FilterBar onFilterChange={handleFilterChange} filters={filters} />

          {/* Results Count */}
          <Box sx={{ mb: 4, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="h6" sx={{ color: 'text.secondary' }}>
              {filteredCourses.length} of {allCourses.length} courses
            </Typography>
            {Object.values(filters).some(f => f) && (
              <Chip
                label="Filters Active"
                color="primary"
                size="small"
                icon={<FilterList />}
              />
            )}
          </Box>

          {/* Empty State */}
          {filteredCourses.length === 0 && (
            <Box sx={{
              textAlign: 'center',
              py: 8,
              px: 4,
              backgroundColor: 'grey.50',
              borderRadius: 3,
              border: '2px dashed',
              borderColor: 'grey.300'
            }}>
              <Typography variant="h5" sx={{ mb: 2, color: 'text.secondary' }}>
                No courses match your filters
              </Typography>
              <Typography variant="body1" sx={{ mb: 3, color: 'text.secondary' }}>
                Try adjusting your filter criteria or clear all filters to see all available courses.
              </Typography>
              <Button
                variant="outlined"
                onClick={() => handleFilterChange({ stream: '', type: '', level: '' })}
                startIcon={<Clear />}
              >
                Clear All Filters
              </Button>
            </Box>
          )}

          {/* Courses Grid */}
          {filteredCourses.length > 0 && (
            <Box sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' },
              gap: 4
            }}>
              {filteredCourses.map((course, index) => (
                <CourseCard key={index} course={course} />
              ))}
            </Box>
          )}

          {/* CTA Section */}
          <Box sx={{
            backgroundColor: 'primary.main',
            color: 'white',
            p: { xs: 4, md: 6 },
            borderRadius: 4,
            textAlign: 'center',
            background: 'linear-gradient(135deg, #1976d2 0%, #1565c0 100%)',
            mt: 8
          }}>
            <Typography variant="h3" sx={{ mb: 3, fontWeight: 700 }}>
              Ready to Start Learning?
            </Typography>
            <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
              Choose from our comprehensive range of courses and begin your trading journey today
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Button
                variant="contained"
                size="large"
                sx={{
                  backgroundColor: 'white',
                  color: 'primary.main',
                  px: 4,
                  py: 1.5,
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  '&:hover': {
                    backgroundColor: 'grey.100',
                  }
                }}
              >
                Enroll Now
              </Button>
              <Button
                variant="outlined"
                size="large"
                sx={{
                  borderColor: 'white',
                  color: 'white',
                  px: 4,
                  py: 1.5,
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  '&:hover': {
                    borderColor: 'white',
                    backgroundColor: 'rgba(255,255,255,0.1)',
                  }
                }}
              >
                Contact Advisor
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

// Course Card Component
const CourseCard = ({ course }: { course: any }) => (
  <Box sx={{
    backgroundColor: 'white',
    borderRadius: 3,
    overflow: 'hidden',
    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
    border: '1px solid',
    borderColor: 'grey.200',
    transition: 'transform 0.2s, box-shadow 0.2s',
    '&:hover': {
      transform: 'translateY(-4px)',
      boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
    }
  }}>
    <Box sx={{
      height: 200,
      backgroundImage: `url("${course.image}")`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      position: 'relative'
    }}>
      <Box sx={{
        position: 'absolute',
        top: 12,
        right: 12,
        backgroundColor: 'primary.main',
        color: 'white',
        px: 2,
        py: 0.5,
        borderRadius: 2,
        fontSize: '0.8rem',
        fontWeight: 600
      }}>
        {course.level}
      </Box>
    </Box>
    <Box sx={{ p: 3 }}>
      <Typography variant="h6" sx={{ mb: 2, fontWeight: 600, lineHeight: 1.3 }}>
        {course.title}
      </Typography>
      <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2, lineHeight: 1.5 }}>
        {course.skills}
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <Typography variant="body2" sx={{ color: 'primary.main', fontWeight: 600 }}>
          ⏱️ {course.duration}
        </Typography>
        <Typography variant="body2" sx={{ color: 'warning.main', fontWeight: 600 }}>
          ⭐ {course.rating}
        </Typography>
      </Box>
      <Button
        variant="contained"
        fullWidth
        sx={{
          backgroundColor: 'primary.main',
          '&:hover': {
            backgroundColor: 'primary.dark',
          }
        }}
      >
        Learn More
      </Button>
    </Box>
  </Box>
);

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [rememberMe, setRememberMe] = useState(false);
  const [toast, setToast] = useState<{ show: boolean; message: string; type: 'success' | 'error' }>({
    show: false,
    message: '',
    type: 'success'
  });

  const validateField = (name: string, value: string) => {
    let error = '';
    switch (name) {
      case 'email':
        if (!value) {
          error = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(value)) {
          error = 'Email is invalid';
        }
        break;
      case 'password':
        if (!value) {
          error = 'Password is required';
        } else if (value.length < 6) {
          error = 'Password must be at least 6 characters';
        }
        break;
      case 'confirmPassword':
        if (!isLogin && !value) {
          error = 'Please confirm your password';
        } else if (!isLogin && value !== formData.password) {
          error = 'Passwords do not match';
        }
        break;
      case 'fullName':
        if (!isLogin && !value) {
          error = 'Full name is required';
        }
        break;
    }
    return error;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Real-time validation
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setLoading(false);
    
    // Show success toast
    setToast({
      show: true,
      message: isLogin ? 'Login successful!' : 'Registration successful!',
      type: 'success'
    });
    
    // Hide toast after 3 seconds
    setTimeout(() => setToast(prev => ({ ...prev, show: false })), 3000);
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setFormData({ fullName: '', email: '', password: '', confirmPassword: '' });
    setErrors({ fullName: '', email: '', password: '', confirmPassword: '' });
  };

  return (
    <Box sx={{ 
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      p: { xs: 2, md: 4 }
    }}>
      <Box sx={{
        width: '100%',
        maxWidth: 450,
        backgroundColor: 'white',
        borderRadius: 4,
        boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
        overflow: 'hidden',
        position: 'relative'
      }}>
        {/* Header */}
        <Box sx={{
          background: 'linear-gradient(135deg, #1976d2 0%, #1565c0 100%)',
          color: 'white',
          p: 4,
          textAlign: 'center'
        }}>
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
            NEPSE Ko Mantra
          </Typography>
          <Typography variant="body1" sx={{ opacity: 0.9 }}>
            {isLogin ? 'Welcome back!' : 'Join our community'}
          </Typography>
        </Box>

        {/* Form Container */}
        <Box sx={{ p: 4 }}>
          {/* Toggle Buttons */}
          <Box sx={{
            display: 'flex',
            backgroundColor: 'grey.100',
            borderRadius: 2,
            p: 0.5,
            mb: 4
          }}>
            <Button
              fullWidth
              variant={isLogin ? 'contained' : 'text'}
              onClick={() => setIsLogin(true)}
              sx={{
                borderRadius: 1.5,
                py: 1.5,
                fontWeight: 600,
                textTransform: 'none',
                fontSize: '1rem'
              }}
            >
              Login
            </Button>
            <Button
              fullWidth
              variant={!isLogin ? 'contained' : 'text'}
              onClick={() => setIsLogin(false)}
              sx={{
                borderRadius: 1.5,
                py: 1.5,
                fontWeight: 600,
                textTransform: 'none',
                fontSize: '1rem'
              }}
            >
              Register
            </Button>
          </Box>

          {/* Form */}
          <Box component="form" onSubmit={handleSubmit}>
            {/* Full Name Field (Register only) */}
            {!isLogin && (
              <TextField
                fullWidth
                name="fullName"
                label="Full Name"
                value={formData.fullName}
                onChange={handleInputChange}
                error={!!errors.fullName}
                helperText={errors.fullName}
                sx={{ mb: 3 }}
                InputProps={{
                  startAdornment: (
                    <Person sx={{ mr: 1, color: 'text.secondary' }} />
                  )
                }}
              />
            )}

            {/* Email Field */}
            <TextField
              fullWidth
              name="email"
              label="Email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              error={!!errors.email}
              helperText={errors.email}
              sx={{ mb: 3 }}
              InputProps={{
                startAdornment: (
                  <Email sx={{ mr: 1, color: 'text.secondary' }} />
                )
              }}
            />

            {/* Password Field */}
            <TextField
              fullWidth
              name="password"
              label="Password"
              type={showPassword ? 'text' : 'password'}
              value={formData.password}
              onChange={handleInputChange}
              error={!!errors.password}
              helperText={errors.password}
              sx={{ mb: 3 }}
              InputProps={{
                startAdornment: (
                  <Lock sx={{ mr: 1, color: 'text.secondary' }} />
                ),
                endAdornment: (
                  <IconButton
                    onClick={() => setShowPassword(!showPassword)}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                )
              }}
            />

            {/* Confirm Password Field (Register only) */}
            {!isLogin && (
              <TextField
                fullWidth
                name="confirmPassword"
                label="Confirm Password"
                type={showConfirmPassword ? 'text' : 'password'}
                value={formData.confirmPassword}
                onChange={handleInputChange}
                error={!!errors.confirmPassword}
                helperText={errors.confirmPassword}
                sx={{ mb: 3 }}
                InputProps={{
                  startAdornment: (
                    <Lock sx={{ mr: 1, color: 'text.secondary' }} />
                  ),
                  endAdornment: (
                    <IconButton
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      edge="end"
                    >
                      {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  )
                }}
              />
            )}

            {/* Remember Me & Forgot Password (Login only) */}
            {isLogin && (
              <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                mb: 3
              }}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      color="primary"
                    />
                  }
                  label="Remember me"
                />
                <Link
                  href="#"
                  sx={{
                    color: 'primary.main',
                    textDecoration: 'none',
                    '&:hover': { textDecoration: 'underline' }
                  }}
                >
                  Forgot Password?
                </Link>
              </Box>
            )}

            {/* Submit Button */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              disabled={loading}
              sx={{
                py: 1.5,
                fontSize: '1.1rem',
                fontWeight: 600,
                textTransform: 'none',
                mb: 3
              }}
            >
              {loading ? (
                <CircularProgress size={24} color="inherit" />
              ) : (
                isLogin ? 'Login' : 'Create Account'
              )}
            </Button>

            {/* Divider */}
            <Box sx={{
              display: 'flex',
              alignItems: 'center',
              mb: 3
            }}>
              <Divider sx={{ flex: 1 }} />
              <Typography variant="body2" sx={{ px: 2, color: 'text.secondary' }}>
                or continue with
              </Typography>
              <Divider sx={{ flex: 1 }} />
            </Box>

            {/* Social Login Buttons */}
            <Box sx={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 2,
              mb: 3
            }}>
              <Button
                variant="outlined"
                startIcon={<Google sx={{ color: '#DB4437' }} />}
                sx={{
                  borderColor: 'grey.300',
                  color: 'text.primary',
                  '&:hover': {
                    borderColor: '#DB4437',
                    backgroundColor: 'rgba(219, 68, 55, 0.04)'
                  }
                }}
              >
                Google
              </Button>
              <Button
                variant="outlined"
                startIcon={<Facebook sx={{ color: '#4267B2' }} />}
                sx={{
                  borderColor: 'grey.300',
                  color: 'text.primary',
                  '&:hover': {
                    borderColor: '#4267B2',
                    backgroundColor: 'rgba(66, 103, 178, 0.04)'
                  }
                }}
              >
                Facebook
              </Button>
              <Button
                variant="outlined"
                startIcon={<LinkedIn sx={{ color: '#0077B5' }} />}
                sx={{
                  borderColor: 'grey.300',
                  color: 'text.primary',
                  '&:hover': {
                    borderColor: '#0077B5',
                    backgroundColor: 'rgba(0, 119, 181, 0.04)'
                  }
                }}
              >
                LinkedIn
              </Button>
            </Box>

            {/* Toggle Form Text */}
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {isLogin ? "Don't have an account?" : "Already have an account?"}
              </Typography>
              <Button
                onClick={toggleForm}
                sx={{
                  textTransform: 'none',
                  fontWeight: 600,
                  mt: 0.5
                }}
              >
                {isLogin ? 'Sign up here' : 'Sign in here'}
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Toast Notification */}
      {toast.show && (
        <Box sx={{
          position: 'fixed',
          top: 20,
          right: 20,
          backgroundColor: toast.type === 'success' ? 'success.main' : 'error.main',
          color: 'white',
          px: 3,
          py: 2,
          borderRadius: 2,
          boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
          zIndex: 9999,
          animation: 'slideIn 0.3s ease-out'
        }}>
          <Typography variant="body1">
            {toast.message}
          </Typography>
        </Box>
      )}
    </Box>
  );
};

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [toast, setToast] = useState<{ show: boolean; message: string; type: 'success' | 'error' }>({
    show: false,
    message: '',
    type: 'success'
  });

  const validateField = (name: string, value: string) => {
    let error = '';
    switch (name) {
      case 'fullName':
        if (!value.trim()) {
          error = 'Full name is required';
        } else if (value.trim().length < 2) {
          error = 'Full name must be at least 2 characters';
        }
        break;
      case 'email':
        if (!value) {
          error = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(value)) {
          error = 'Please enter a valid email address';
        }
        break;
      case 'password':
        if (!value) {
          error = 'Password is required';
        } else if (value.length < 6) {
          error = 'Password must be at least 6 characters';
        } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(value)) {
          error = 'Password must contain uppercase, lowercase, and number';
        }
        break;
      case 'confirmPassword':
        if (!value) {
          error = 'Please confirm your password';
        } else if (value !== formData.password) {
          error = 'Passwords do not match';
        }
        break;
    }
    return error;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Real-time validation
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all fields
    const newErrors = {
      fullName: validateField('fullName', formData.fullName),
      email: validateField('email', formData.email),
      password: validateField('password', formData.password),
      confirmPassword: validateField('confirmPassword', formData.confirmPassword)
    };
    
    setErrors(newErrors);
    
    if (Object.values(newErrors).some(error => error)) {
      return;
    }
    
    setLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setLoading(false);
    
    // Show success toast
    setToast({
      show: true,
      message: 'Account created successfully! Welcome to NEPSE Ko Mantra!',
      type: 'success'
    });
    
    // Hide toast after 3 seconds
    setTimeout(() => setToast(prev => ({ ...prev, show: false })), 3000);
  };

  return (
    <Box sx={{ 
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      p: { xs: 2, md: 4 }
    }}>
      <Box sx={{
        width: '100%',
        maxWidth: 450,
        backgroundColor: 'white',
        borderRadius: 4,
        boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
        overflow: 'hidden',
        position: 'relative'
      }}>
        {/* Header */}
        <Box sx={{
          background: 'linear-gradient(135deg, #1976d2 0%, #1565c0 100%)',
          color: 'white',
          p: 4,
          textAlign: 'center'
        }}>
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
            NEPSE Ko Mantra
          </Typography>
          <Typography variant="body1" sx={{ opacity: 0.9 }}>
            Join our community of traders and investors
          </Typography>
        </Box>

        {/* Form Container */}
        <Box sx={{ p: 4 }}>
          {/* Welcome Message */}
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <Typography variant="h5" sx={{ fontWeight: 600, color: 'primary.main', mb: 1 }}>
              Create Your Account
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Start your journey to financial success with expert guidance
            </Typography>
          </Box>

          {/* Form */}
          <Box component="form" onSubmit={handleSubmit}>
            {/* Full Name Field */}
            <TextField
              fullWidth
              name="fullName"
              label="Full Name"
              value={formData.fullName}
              onChange={handleInputChange}
              error={!!errors.fullName}
              helperText={errors.fullName}
              sx={{ mb: 3 }}
              InputProps={{
                startAdornment: (
                  <Person sx={{ mr: 1, color: 'text.secondary' }} />
                )
              }}
            />

            {/* Email Field */}
            <TextField
              fullWidth
              name="email"
              label="Email Address"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              error={!!errors.email}
              helperText={errors.email}
              sx={{ mb: 3 }}
              InputProps={{
                startAdornment: (
                  <Email sx={{ mr: 1, color: 'text.secondary' }} />
                )
              }}
            />

            {/* Password Field */}
            <TextField
              fullWidth
              name="password"
              label="Password"
              type={showPassword ? 'text' : 'password'}
              value={formData.password}
              onChange={handleInputChange}
              error={!!errors.password}
              helperText={errors.password}
              sx={{ mb: 3 }}
              InputProps={{
                startAdornment: (
                  <Lock sx={{ mr: 1, color: 'text.secondary' }} />
                ),
                endAdornment: (
                  <IconButton
                    onClick={() => setShowPassword(!showPassword)}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                )
              }}
            />

            {/* Confirm Password Field */}
            <TextField
              fullWidth
              name="confirmPassword"
              label="Confirm Password"
              type={showConfirmPassword ? 'text' : 'password'}
              value={formData.confirmPassword}
              onChange={handleInputChange}
              error={!!errors.confirmPassword}
              helperText={errors.confirmPassword}
              sx={{ mb: 3 }}
              InputProps={{
                startAdornment: (
                  <Lock sx={{ mr: 1, color: 'text.secondary' }} />
                ),
                endAdornment: (
                  <IconButton
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    edge="end"
                  >
                    {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                )
              }}
            />

            {/* Terms and Conditions */}
            <Box sx={{ mb: 3 }}>
              <Typography variant="body2" sx={{ color: 'text.secondary', textAlign: 'center' }}>
                By creating an account, you agree to our{' '}
                <Link href="#" sx={{ color: 'primary.main', textDecoration: 'none' }}>
                  Terms of Service
                </Link>{' '}
                and{' '}
                <Link href="#" sx={{ color: 'primary.main', textDecoration: 'none' }}>
                  Privacy Policy
                </Link>
              </Typography>
            </Box>

            {/* Submit Button */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              disabled={loading}
              sx={{
                py: 1.5,
                fontSize: '1.1rem',
                fontWeight: 600,
                textTransform: 'none',
                mb: 3,
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                '&:hover': {
                  background: 'linear-gradient(135deg, #5a6fd8 0%, #6a4190 100%)',
                }
              }}
            >
              {loading ? (
                <CircularProgress size={24} color="inherit" />
              ) : (
                'Create Account'
              )}
            </Button>

            {/* Divider */}
            <Box sx={{
              display: 'flex',
              alignItems: 'center',
              mb: 3
            }}>
              <Divider sx={{ flex: 1 }} />
              <Typography variant="body2" sx={{ px: 2, color: 'text.secondary' }}>
                or continue with
              </Typography>
              <Divider sx={{ flex: 1 }} />
            </Box>

            {/* Social Login Buttons */}
            <Box sx={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 2,
              mb: 3
            }}>
              <Button
                variant="outlined"
                startIcon={<Google sx={{ color: '#DB4437' }} />}
                sx={{
                  borderColor: 'grey.300',
                  color: 'text.primary',
                  '&:hover': {
                    borderColor: '#DB4437',
                    backgroundColor: 'rgba(219, 68, 55, 0.04)'
                  }
                }}
              >
                Google
              </Button>
              <Button
                variant="outlined"
                startIcon={<Facebook sx={{ color: '#4267B2' }} />}
                sx={{
                  borderColor: 'grey.300',
                  color: 'text.primary',
                  '&:hover': {
                    borderColor: '#4267B2',
                    backgroundColor: 'rgba(66, 103, 178, 0.04)'
                  }
                }}
              >
                Facebook
              </Button>
              <Button
                variant="outlined"
                startIcon={<LinkedIn sx={{ color: '#0077B5' }} />}
                sx={{
                  borderColor: 'grey.300',
                  color: 'text.primary',
                  '&:hover': {
                    borderColor: '#0077B5',
                    backgroundColor: 'rgba(0, 119, 181, 0.04)'
                  }
                }}
              >
                LinkedIn
              </Button>
            </Box>

            {/* Login Link */}
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Already have an account?
              </Typography>
              <Link
                href="/login"
                sx={{
                  color: 'primary.main',
                  textDecoration: 'none',
                  fontWeight: 600,
                  mt: 0.5,
                  display: 'inline-block',
                  '&:hover': {
                    textDecoration: 'underline'
                  }
                }}
              >
                Sign in here
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Toast Notification */}
      {toast.show && (
        <Box sx={{
          position: 'fixed',
          top: 20,
          right: 20,
          backgroundColor: toast.type === 'success' ? 'success.main' : 'error.main',
          color: 'white',
          px: 3,
          py: 2,
          borderRadius: 2,
          boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
          zIndex: 9999,
          animation: 'slideIn 0.3s ease-out'
        }}>
          <Typography variant="body1">
            {toast.message}
          </Typography>
        </Box>
      )}
    </Box>
  );
};

function App() {
  const { darkMode, toggleDarkMode } = useThemeMode();
  const theme = darkMode ? createDarkTheme() : createLightTheme();

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            <Box component="main" sx={{ flexGrow: 1 }}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/courses" element={<Courses />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/community" element={<Community />} />
                <Route path="/about" element={<About />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
              </Routes>
            </Box>
            <Footer />
          </Box>
        </Router>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;
