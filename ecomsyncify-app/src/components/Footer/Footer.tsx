import { Link } from 'react-router-dom'
import { Box, Container, Typography, Link as MuiLink, Divider } from '@mui/material'
import { Facebook, Instagram, LinkedIn } from '@mui/icons-material'
import { themeColors } from '../../theme/themeColors'

function Footer() {

  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: <Facebook />, label: 'FACEBOOK', url: '#' },
    { icon: <Instagram />, label: 'INSTAGRAM', url: '#' },
    { icon: <LinkedIn />, label: 'LINKEDIN', url: '#' },
  ]

  return (
    <Box
      component="footer"
      className="footer-glow"
      sx={{
        background: `linear-gradient(135deg, ${themeColors.footerDarkBlue} 0%, ${themeColors.primaryBlue} 50%, ${themeColors.primaryAccent} 100%)`,
        color: themeColors.textOnDark,
        mt: 'auto',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          bottom: '-100px',
          left: 0,
          width: '100%',
          height: '300px',
          background: `linear-gradient(to top, ${themeColors.footerDarkBlue}40 0%, ${themeColors.primaryBlue}40 40%, ${themeColors.primaryAccent}40 70%, transparent 100%)`,
          animation: 'footerGlowRise 5s ease-in-out infinite',
          zIndex: 0,
          pointerEvents: 'none',
          filter: 'blur(40px)',
        },
      }}
    >
      {/* Scroll to Top Button */}
     

      <Container maxWidth="xl" sx={{ py: { xs: 4, sm: 6, md: 8 }, px: { xs: 2, sm: 3, md: 4 }, position: 'relative', zIndex: 1 }}>
        {/* Top Section with Columns */}
        {/* Logo Section - Mobile and Desktop */}
        <Box 
          sx={{ 
            mb: { xs: 4, md: 6 },
            display: 'flex',
            justifyContent: 'flex-start',
          }}
        >
          <Box 
            sx={{ 
              display: 'inline-block',
              padding: { xs: '8px 12px', sm: '10px 16px' },
              borderRadius: '8px',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
            }}
          >
            <img 
              src="/image-logo.png" 
              alt="EcomSyncify Logo" 
              style={{ 
                height: '40px',
                width: 'auto',
                maxWidth: '200px',
                filter: 'brightness(0) invert(1)',
              }}
            />
          </Box>
        </Box>

        {/* Desktop Layout - 2 Columns */}
        <Box
          sx={{
            display: { xs: 'none', md: 'grid' },
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 6,
            mb: 8,
          }}
        >
          {/* Follow/Social Media Column */}
          <Box>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                mb: { xs: 2, md: 3 },
                fontSize: { xs: '0.875rem', md: '1rem' },
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: themeColors.white,
              }}
            >
              FOLLOW
            </Typography>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' },
                gap: { xs: 2, md: 3 },
              }}
            >
              <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
                {socialLinks.slice(0, 3).map((social) => (
                  <Box component="li" key={social.label} sx={{ mb: 1.5 }}>
                    <MuiLink
                      href={social.url}
                      sx={{
                        color: themeColors.white,
                        textDecoration: 'none',
                        fontSize: { xs: '0.75rem', sm: '0.875rem' },
                        fontWeight: 400,
                        letterSpacing: '0.05em',
                        textTransform: 'uppercase',
                        transition: 'all 0.3s ease',
                        display: 'inline-block',
                        '&:hover': {
                          color: themeColors.white,
                          opacity: 0.8,
                          transform: 'translateX(4px)',
                        },
                      }}
                    >
                      {social.label}
                    </MuiLink>
                  </Box>
                ))}
              </Box>
              <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
                {socialLinks.slice(3).map((social) => (
                  <Box component="li" key={social.label} sx={{ mb: 1.5 }}>
                    <MuiLink
                      href={social.url}
                      sx={{
                        color: themeColors.white,
                        textDecoration: 'none',
                        fontSize: { xs: '0.75rem', sm: '0.875rem' },
                        fontWeight: 400,
                        letterSpacing: '0.05em',
                        textTransform: 'uppercase',
                        transition: 'all 0.3s ease',
                        display: 'inline-block',
                        '&:hover': {
                          color: themeColors.white,
                          opacity: 0.8,
                          transform: 'translateX(4px)',
                        },
                      }}
                    >
                      {social.label}
                    </MuiLink>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>

          {/* Additional Info Column */}
          <Box>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                mb: 3,
                fontSize: '1rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: themeColors.white,
              }}
            >
              COMPANY
            </Typography>
            <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
              <Box component="li" sx={{ mb: 1.5 }}>
                <MuiLink
                  component={Link}
                  to="/about-us"
                  sx={{
                    color: themeColors.white,
                    textDecoration: 'none',
                    fontSize: '0.875rem',
                    fontWeight: 400,
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                    transition: 'all 0.2s ease',
                    display: 'inline-block',
                    '&:hover': {
                      color: themeColors.white,
                      opacity: 0.8,
                      transform: 'translateX(2px)',
                    },
                  }}
                >
                  ABOUT US
                </MuiLink>
              </Box>
              <Box component="li" sx={{ mb: 1.5 }}>
                <MuiLink
                  component={Link}
                  to="/contact"
                  sx={{
                    color: themeColors.white,
                    textDecoration: 'none',
                    fontSize: '0.875rem',
                    fontWeight: 400,
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                    transition: 'all 0.2s ease',
                    display: 'inline-block',
                    '&:hover': {
                      color: themeColors.white,
                      opacity: 0.8,
                      transform: 'translateX(2px)',
                    },
                  }}
                >
                  CONTACT
                </MuiLink>
              </Box>
              <Box component="li" sx={{ mb: 1.5 }}>
                <MuiLink
                  component={Link}
                  to="/privacy-policy"
                  sx={{
                    color: themeColors.white,
                    textDecoration: 'none',
                    fontSize: '0.875rem',
                    fontWeight: 400,
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                    transition: 'all 0.2s ease',
                    display: 'inline-block',
                    '&:hover': {
                      color: themeColors.white,
                      opacity: 0.8,
                      transform: 'translateX(2px)',
                    },
                  }}
                >
                  PRIVACY POLICY
                </MuiLink>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Mobile Layout - FOLLOW and COMPANY Side by Side */}
        <Box
          sx={{
            display: { xs: 'grid', md: 'none' },
            gridTemplateColumns: '1fr 1fr',
            gap: 4,
            mb: 4,
          }}
        >
          {/* Follow/Social Media Column - Left */}
          <Box>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                mb: 2,
                fontSize: '0.875rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: themeColors.white,
              }}
            >
              FOLLOW
            </Typography>
            <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
              {socialLinks.map((social) => (
                <Box component="li" key={social.label} sx={{ mb: 1.5 }}>
                  <MuiLink
                    href={social.url}
                    sx={{
                      color: themeColors.white,
                      textDecoration: 'none',
                      fontSize: '0.75rem',
                      fontWeight: 400,
                      letterSpacing: '0.05em',
                      textTransform: 'uppercase',
                      transition: 'all 0.3s ease',
                      display: 'inline-block',
                      '&:hover': {
                        color: themeColors.white,
                        opacity: 0.8,
                        transform: 'translateX(4px)',
                      },
                    }}
                  >
                    {social.label}
                  </MuiLink>
                </Box>
              ))}
            </Box>
          </Box>

          {/* Company Column - Right */}
          <Box>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                mb: 2,
                fontSize: '0.875rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: themeColors.white,
              }}
            >
              COMPANY
            </Typography>
            <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
              <Box component="li" sx={{ mb: 1.5 }}>
                <MuiLink
                  component={Link}
                  to="/about-us"
                  sx={{
                    color: themeColors.white,
                    textDecoration: 'none',
                    fontSize: '0.75rem',
                    fontWeight: 400,
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                    transition: 'all 0.2s ease',
                    display: 'inline-block',
                    '&:hover': {
                      color: themeColors.white,
                      opacity: 0.8,
                      transform: 'translateX(2px)',
                    },
                  }}
                >
                  ABOUT US
                </MuiLink>
              </Box>
              <Box component="li" sx={{ mb: 1.5 }}>
                <MuiLink
                  component={Link}
                  to="/contact"
                  sx={{
                    color: themeColors.white,
                    textDecoration: 'none',
                    fontSize: '0.75rem',
                    fontWeight: 400,
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                    transition: 'all 0.2s ease',
                    display: 'inline-block',
                    '&:hover': {
                      color: themeColors.white,
                      opacity: 0.8,
                      transform: 'translateX(2px)',
                    },
                  }}
                >
                  CONTACT
                </MuiLink>
              </Box>
              <Box component="li" sx={{ mb: 1.5 }}>
                <MuiLink
                  component={Link}
                  to="/privacy-policy"
                  sx={{
                    color: themeColors.white,
                    textDecoration: 'none',
                    fontSize: '0.75rem',
                    fontWeight: 400,
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                    transition: 'all 0.2s ease',
                    display: 'inline-block',
                    '&:hover': {
                      color: themeColors.white,
                      opacity: 0.8,
                      transform: 'translateX(2px)',
                    },
                  }}
                >
                  PRIVACY POLICY
                </MuiLink>
              </Box>
            </Box>
          </Box>
        </Box>



        {/* Bottom Section - Copyright and Legal */}
        <Divider
          sx={{
            mb: { xs: 3, md: 4 },
            borderColor: themeColors.white,
            height: 1,
            opacity: 0.3,
          }}
        />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: { xs: 2, md: 2 },
            textAlign: 'center',
          }}
        >
          
          <Typography
            variant="body2"
            sx={{
              color: themeColors.white,
              fontSize: { xs: '0.75rem', sm: '0.875rem' },
              fontFamily: 'monospace',
              lineHeight: 1.5,
              wordBreak: 'break-word',
            }}
          >
            &copy; {currentYear} EcomSyncify Technologies LLP. All rights reserved.
          </Typography>
        </Box>
      </Container>
      
      <style>{`
        @keyframes footerGlowRise {
          0% {
            opacity: 0;
            transform: translateY(100px);
          }
          40% {
            opacity: 1;
            transform: translateY(0);
          }
          80% {
            opacity: 0.8;
            transform: translateY(-80px);
          }
          100% {
            opacity: 0;
            transform: translateY(-150px);
          }
        }

        .footer-glow > * {
          position: relative;
          z-index: 1;
        }
      `}</style>
    </Box>
  )
}

export default Footer
