import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { 
  AppBar, 
  Toolbar, 
  Box, 
  Button, 
  Container, 
  IconButton, 
  Drawer, 
  List, 
  ListItem, 
  ListItemButton,
  ListItemText,
  Divider
} from '@mui/material'
import { Menu as MenuIcon, Close } from '@mui/icons-material'

function Header() {
  // Black and white theme
  const themeColors = {
    black: '#000000',
    white: '#ffffff',
    gray: '#6b7280',
    grayLight: '#f3f4f6',
  }

  const location = useLocation()
  const [mobileOpen, setMobileOpen] = useState(false)

  // Hide header on product detail pages (routes starting with /product/etsy-integration)
  const isProductDetailPage = location.pathname.startsWith('/product/etsy-integration')
  
  if (isProductDetailPage) {
    return null
  }

  const isActive = (path: string) => {
    return location.pathname === path
  }

  const allPages = [
    { path: '/', label: 'Home' },
    { path: '/product', label: 'Product' },
    { path: '/about-us', label: 'About Us' },
    { path: '/contact', label: 'Contact Us' },
    { path: '/privacy-policy', label: 'Privacy Policy' },
  ]

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const handleNavClick = () => {
    setMobileOpen(false)
  }

  const drawer = (
    <Box sx={{ width: 280 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2 }}>
        <Box
          component="span"
          sx={{
            fontSize: '1.25rem',
            fontWeight: 700,
            color: themeColors.black,
          }}
        >
          <img src="/image-logo.png" alt="" />
        </Box>
        <IconButton onClick={handleDrawerToggle} sx={{ color: themeColors.black }}>
          <Close />
        </IconButton>
      </Box>
      <Divider />
      <List sx={{ pt: 2 }}>
        {allPages.map((page) => (
          <ListItem key={page.path} disablePadding>
            <ListItemButton
              component={Link}
              to={page.path}
              onClick={handleNavClick}
              sx={{
                py: 1.5,
                px: 3,
                color: isActive(page.path) ? themeColors.black : themeColors.gray,
                fontWeight: isActive(page.path) ? 600 : 500,
                bgcolor: isActive(page.path) ? themeColors.grayLight : 'transparent',
                borderLeft: isActive(page.path) ? `3px solid ${themeColors.black}` : '3px solid transparent',
                '&:hover': {
                  bgcolor: themeColors.grayLight,
                  color: themeColors.black,
                },
              }}
            >
              <ListItemText 
                primary={page.label}
                primaryTypographyProps={{
                  fontSize: '1rem',
                  fontWeight: 'inherit',
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )

  return (
    <>
      <AppBar 
        position="fixed" 
        elevation={0}
        sx={{ 
          backgroundColor: themeColors.white,
          backdropFilter: 'none',
          WebkitBackdropFilter: 'none',
          borderBottom: '1px solid rgba(0, 0, 0, 0.08)',
          boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1)',
          transition: 'all 0.3s ease-in-out',
          top: 0,
          zIndex: 1100,
        }}
      >
        <Container maxWidth="xl">
          <Toolbar 
            disableGutters 
            sx={{ 
              py: { xs: 1.5, md: 2 },
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              minHeight: { xs: '56px', md: '64px' }
            }}
          >
            <Link to="/" className="no-underline">
              <Box
                component="span"
                sx={{
                  fontSize: { xs: '1.25rem', md: '1.5rem' },
                  fontWeight: 700,
                  color: themeColors.black,
                  '&:hover': {
                    transform: 'scale(1.05)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                <img  className='w-full h-10' src="/image-logo.png" alt="" />
              </Box>
            </Link>

            {/* Right Side Navigation - Simple Links */}
            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                gap: 1,
                alignItems: 'center',
              }}
            >
              {allPages.map((page) => (
                <Button
                  key={page.path}
                  component={Link}
                  to={page.path}
                  variant="text"
                  sx={{
                    color: themeColors.black,
                    fontWeight: isActive(page.path) ? 600 : 400,
                    fontSize: '0.95rem',
                    textTransform: 'none',
                    px: 2,
                    py: 1,
                    borderRadius: 2,
                    '&:hover': {
                      color: themeColors.black,
                      backgroundColor: 'rgba(0, 0, 0, 0.04)',
                    },
                    transition: 'all 0.2s ease',
                  }}
                >
                  {page.label}
                </Button>
              ))}
            </Box>

            {/* Mobile Menu Button */}
            <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center' }}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="end"
                onClick={handleDrawerToggle}
                sx={{ 
                  color: themeColors.black,
                  '&:hover': {
                    bgcolor: themeColors.grayLight,
                  },
                  transition: 'all 0.2s ease',
                }}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
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
            width: 280,
            borderRight: '1px solid #e2e8f0',
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  )
}

export default Header
