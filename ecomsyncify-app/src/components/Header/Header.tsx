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
  Typography,
  ClickAwayListener,
} from '@mui/material'
import { Menu as MenuIcon, KeyboardArrowDown } from '@mui/icons-material'
import MobileDrawer from './MobileDrawer'

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
  const [productMenuOpen, setProductMenuOpen] = useState(false)

  // Hide header on product detail pages (routes starting with /product/etsy-integration)
  const isProductDetailPage = location.pathname.startsWith('/product/etsy-integration')
  
  if (isProductDetailPage) {
    return null
  }

  const isActive = (path: string) => {
    if (path === '/product/etsy-integration') {
      return location.pathname.startsWith('/product/etsy-integration')
    }
    return location.pathname === path
  }

  const allPages = [
    { path: '/', label: 'Home' },
    { path: '/product/etsy-integration', label: 'Products' },
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
              {allPages.map((page) => {
                // Desktop "Products" menu with dropdown
                if (page.path === '/product/etsy-integration') {
                  return (
                    <ClickAwayListener key={page.path} onClickAway={() => setProductMenuOpen(false)}>
                      <Box sx={{ position: 'relative' }}>
                        <Button
                          variant="text"
                          endIcon={<KeyboardArrowDown fontSize="small" />}
                          onClick={() => setProductMenuOpen((prev) => !prev)}
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
                          Products
                        </Button>

                        {productMenuOpen && (
                          <Box
                            sx={{
                              position: 'fixed',
                              top: { xs: '56px', md: '64px' },
                              right: 0,
                              width: '70vw',
                              maxWidth: '1200px',
                              bgcolor: themeColors.white,
                              boxShadow: '0 18px 45px rgba(15, 23, 42, 0.20)',
                              zIndex: 1300,
                              borderTop: '1px solid rgba(0, 0, 0, 0.08)',
                              borderRadius: '0 0 0 8px',
                            }}
                          >
                            <Box sx={{ py: 4, px: 4 }}>
                            <Box
                              sx={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
                                gap: 4,
                              }}
                            >
                              {/* Shopify */}
                              <Box
                                component={Link}
                                to="/product/etsy-integration"
                                onClick={() => setProductMenuOpen(false)}
                                sx={{
                                  textDecoration: 'none',
                                  color: themeColors.black,
                                  transition: 'all 0.2s ease',
                                  '&:hover': {
                                    transform: 'translateY(-2px)',
                                  },
                                }}
                              >
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1.5 }}>
                                  <img
                                    src="/nav1.jpeg"
                                    alt="Shopify"
                                    style={{ height: 28, width: 'auto' }}
                                  />
                                  <Typography
                                    variant="h6"
                                    sx={{ 
                                      fontWeight: 700, 
                                      fontSize: '1.1rem',
                                      letterSpacing: '0.08em', 
                                      textTransform: 'uppercase',
                                      color: '#16A34A',
                                    }}
                                  >
                                    SHOPIFY
                                  </Typography>
                                </Box>
                                <Box
                                  sx={{
                                    height: 2,
                                    width: 60,
                                    borderRadius: 999,
                                    bgcolor: 'rgba(0, 0, 0, 0.15)',
                                    mb: 1.5,
                                  }}
                                />
                                <Typography
                                  variant="body2"
                                  sx={{ color: themeColors.black, fontSize: '0.9rem', lineHeight: 1.6, mb: 0.5 }}
                                >
<span
className='font-bold'>EcomSyncify Etsy Integration App</span> for seamless product & order sync.
                                </Typography>
                               
                              </Box>

                              {/* Amazon */}
                              <Box sx={{ cursor: 'default' }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1.5 }}>
                                  <img
                                    src="/nav3.png"
                                    alt="Amazon"
                                    style={{ height: 24, width: 'auto' }}
                                  />
                                  <Typography
                                    variant="h6"
                                    sx={{ 
                                      fontWeight: 700, 
                                      fontSize: '1.1rem',
                                      letterSpacing: '0.08em', 
                                      textTransform: 'uppercase',
                                      color: '#F59E0B',
                                    }}
                                  >
                                    AMAZON
                                  </Typography>
                                </Box>
                                <Box
                                  sx={{
                                    height: 2,
                                    width: 60,
                                    borderRadius: 999,
                                    bgcolor: 'rgba(0, 0, 0, 0.15)',
                                    mb: 1.5,
                                  }}
                                />
                                <Typography
                                  variant="body2"
                                  sx={{ color: themeColors.black, fontSize: '0.9rem', lineHeight: 1.6, mb: 0.5 }}
                                >
                                  Amazon marketplace integration for multi-channel growth.
                                </Typography>
                                <Typography
                                  variant="body2"
                                  sx={{ color: themeColors.gray, fontSize: '0.9rem', lineHeight: 1.6, fontStyle: 'italic' }}
                                >
                                  Coming soon — stay tuned for launch updates.
                                </Typography>
                              </Box>

                              {/* Walmart */}
                              <Box sx={{ cursor: 'default' }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1.5 }}>
                                  <img
src='/nav2.png'                                    alt="Walmart"
                                    style={{ height: 24, width: 'auto' }}
                                  />
                                  <Typography
                                    variant="h6"
                                    sx={{ 
                                      fontWeight: 700, 
                                      fontSize: '1.1rem',
                                      letterSpacing: '0.08em', 
                                      textTransform: 'uppercase',
                                      color: '#2563EB',
                                    }}
                                  >
                                    WALMART
                                  </Typography>
                                </Box>
                                <Box
                                  sx={{
                                    height: 2,
                                    width: 60,
                                    borderRadius: 999,
                                    bgcolor: 'rgba(0, 0, 0, 0.15)',
                                    mb: 1.5,
                                  }}
                                />
                                <Typography
                                  variant="body2"
                                  sx={{ color: themeColors.black, fontSize: '0.9rem', lineHeight: 1.6, mb: 0.5 }}
                                >
                                  Future Walmart integration to expand your retail footprint.
                                </Typography>
                                <Typography
                                  variant="body2"
                                  sx={{ color: themeColors.gray, fontSize: '0.9rem', lineHeight: 1.6, fontStyle: 'italic' }}
                                >
                                  Coming soon — connect Shopify to Walmart in a few clicks.
                                </Typography>
                              </Box>
                              </Box>
                              </Box>
                          </Box>
                        )}
                      </Box>
                    </ClickAwayListener>
                  )
                }

                // Default simple link button
                return (
                  <Button
                    key={page.path}
                    component={Link}
                    to={page.path}
                    variant="text"
                    onClick={() => setProductMenuOpen(false)}
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
                )
              })}
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
            width: { xs: '75vw', sm: '75vw', md: '70vw' },
            borderRight: 'none',
            boxShadow: '4px 0 24px rgba(0, 0, 0, 0.12)',
          },
        }}
      >
        <MobileDrawer
          open={mobileOpen}
          onClose={handleDrawerToggle}
          onNavClick={handleNavClick}
          allPages={allPages}
          isActive={isActive}
          themeColors={themeColors}
        />
      </Drawer>
    </>
  )
}

export default Header
