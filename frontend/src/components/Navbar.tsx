import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Home as HomeIcon,
  Build as ServicesIcon,
  School as CoursesIcon,
  AttachMoney as PricingIcon,
  Group as CommunityIcon,
  Login as LoginIcon,
  PersonAdd as RegisterIcon,
} from '@mui/icons-material';
import { Link, useLocation } from 'react-router-dom';

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleDarkMode }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/', icon: null },
    { name: 'Services', path: '/services', icon: null },
    { name: 'Courses & Training', path: '/courses', icon: null },
    { name: 'Pricing', path: '/pricing', icon: null },
    { name: 'Community', path: '/community', icon: <CommunityIcon /> },
    { name: 'Login', path: '/login', icon: <LoginIcon /> },
    { name: 'Register', path: '/register', icon: <RegisterIcon /> },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2, color: 'primary.main' }}>
        NEPSE Ko Mantra
      </Typography>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} component={Link} to={item.path}>
            <ListItemText 
              primary={item.name}
              sx={{
                color: isActive(item.path) ? 'primary.main' : 'inherit',
                fontWeight: isActive(item.path) ? 'bold' : 'normal',
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar 
        position="sticky" 
        sx={{ 
          backgroundColor: 'white',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        }}
      >
        <Toolbar>
          {/* Logo and Brand */}
          <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
            <Box
              component="img"
              src="/favicon.svg"
              alt="NEPSE Ko Mantra"
              sx={{
                width: 40,
                height: 40,
                marginRight: 2,
                borderRadius: '50%',
              }}
            />
            <Typography
              variant="h6"
              component={Link}
              to="/"
              sx={{
                color: 'primary.main',
                textDecoration: 'none',
                fontWeight: 'bold',
                fontSize: { xs: '1.1rem', md: '1.3rem' },
              }}
            >
              NEPSE Ko Mantra
            </Typography>
          </Box>

          {/* Desktop Navigation */}
          {!isMobile && (
            <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
              {/* Night Mode Toggle Button */}
              <IconButton
                onClick={toggleDarkMode}
                sx={{
                  color: 'text.primary',
                  backgroundColor: 'rgba(0, 0, 0, 0.04)',
                  '&:hover': {
                    backgroundColor: 'rgba(0, 0, 0, 0.08)',
                  },
                  mr: 1,
                }}
                aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {darkMode ? (
                  <Box sx={{ fontSize: 20 }}>☀️</Box>
                ) : (
                  <Box sx={{ fontSize: 20 }}>🌙</Box>
                )}
              </IconButton>
              
              {navItems.map((item) => (
                <Button
                  key={item.name}
                  component={Link}
                  to={item.path}
                  startIcon={item.icon || undefined}
                  sx={{
                    color: isActive(item.path) ? 'primary.main' : 'text.primary',
                    backgroundColor: isActive(item.path) ? 'primary.light' : 'transparent',
                    '&:hover': {
                      backgroundColor: 'primary.light',
                      color: 'primary.main',
                    },
                    borderRadius: 2,
                    px: 2,
                    py: 1,
                    fontWeight: isActive(item.path) ? 'bold' : 'normal',
                  }}
                >
                  {item.name}
                </Button>
              ))}
            </Box>
          )}

          {/* Mobile Menu Button and Night Mode Toggle */}
          {isMobile && (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              {/* Night Mode Toggle Button for Mobile */}
              <IconButton
                onClick={toggleDarkMode}
                sx={{
                  color: 'text.primary',
                  backgroundColor: 'rgba(0, 0, 0, 0.04)',
                  '&:hover': {
                    backgroundColor: 'rgba(0, 0, 0, 0.08)',
                  },
                }}
                aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {darkMode ? (
                  <Box sx={{ fontSize: 20 }}>☀️</Box>
                ) : (
                  <Box sx={{ fontSize: 20 }}>🌙</Box>
                )}
              </IconButton>
              
              <IconButton
                color="primary"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          )}
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box', 
            width: 240,
            backgroundColor: 'white',
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar;
