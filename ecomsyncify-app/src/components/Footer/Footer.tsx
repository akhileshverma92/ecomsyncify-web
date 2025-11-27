import { Link } from 'react-router-dom'
import { Box, Container, Typography, Link as MuiLink, Divider } from '@mui/material'
import { Facebook, Instagram, LinkedIn } from '@mui/icons-material'

function Footer() {
  // Black and white theme
  const themeColors = {
    black: '#000000',
    white: '#ffffff',
    gray: '#9ca3af',
    grayLight: '#f3f4f6',
  }

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
        bgcolor: themeColors.white,
        color: "black",
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
          background: 'linear-gradient(to top, rgba(0, 0, 0, 0.15) 0%, rgba(0, 0, 0, 0.1) 40%, transparent 80%)',
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
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
            gap: { xs: 3, sm: 4, md: 6 },
            mb: { xs: 6, md: 8 },
          }}
        >
          {/* Contact Information Column */}
          <Box>
            <Box sx={{ mb: { xs: 2, md: 3 } }}>
              <img 
                src="/image-logo.png" 
                alt="EcomSyncify Logo" 
                style={{ 
                  height: '40px',
                  width: 'auto',
                  maxWidth: '200px',
                }}
              />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              <Typography
                variant="body2"
                sx={{
                  color: themeColors.black,
                  fontSize: { xs: '0.75rem', sm: '0.875rem' },
                  lineHeight: 1.6,
                  wordBreak: 'break-word',
                }}
              >
                <strong>Email:</strong>{' '}
                <MuiLink
                  href="mailto:support@ecomsyncify.com"
                  sx={{
                    color: themeColors.black,
                    textDecoration: 'none',
                    '&:hover': {
                      textDecoration: 'underline',
                    },
                  }}
                >
                  support@ecomsyncify.com
                </MuiLink>
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: themeColors.black,
                  fontSize: { xs: '0.75rem', sm: '0.875rem' },
                  lineHeight: 1.6,
                  wordBreak: 'break-word',
                }}
              >
                <strong>Contact:</strong>{' '}
                <MuiLink
                  href="tel:+917275646711"
                  sx={{
                    color: themeColors.black,
                    textDecoration: 'none',
                    '&:hover': {
                      textDecoration: 'underline',
                    },
                  }}
                >
                  +91 7275646711
                </MuiLink>
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: themeColors.black,
                  fontSize: { xs: '0.75rem', sm: '0.875rem' },
                  lineHeight: 1.6,
                  wordBreak: 'break-word',
                  mt: 1,
                }}
              >
                P-53 / VK Residency Haldharu<br />
                Surat Gujrat India-394305
              </Typography>
            </Box>
          </Box>

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
                color: themeColors.black,
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
                        color: themeColors.black,
                        textDecoration: 'none',
                        fontSize: { xs: '0.75rem', sm: '0.875rem' },
                        fontWeight: 400,
                        letterSpacing: '0.05em',
                        textTransform: 'uppercase',
                        transition: 'all 0.3s ease',
                        display: 'inline-block',
                        '&:hover': {
                          color: themeColors.gray,
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
                        color: themeColors.black,
                        textDecoration: 'none',
                        fontSize: { xs: '0.75rem', sm: '0.875rem' },
                        fontWeight: 400,
                        letterSpacing: '0.05em',
                        textTransform: 'uppercase',
                        transition: 'all 0.3s ease',
                        display: 'inline-block',
                        '&:hover': {
                          color: themeColors.gray,
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
                mb: { xs: 2, md: 3 },
                fontSize: { xs: '0.875rem', md: '1rem' },
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: themeColors.black,
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
                    color: themeColors.black,
                    textDecoration: 'none',
                    fontSize: '0.875rem',
                    fontWeight: 400,
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                    transition: 'all 0.2s ease',
                    display: 'inline-block',
                    '&:hover': {
                      color: themeColors.gray,
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
                    color: themeColors.black,
                    textDecoration: 'none',
                    fontSize: '0.875rem',
                    fontWeight: 400,
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                    transition: 'all 0.2s ease',
                    display: 'inline-block',
                    '&:hover': {
                      color: themeColors.gray,
                      transform: 'translateX(2px)',
                    },
                  }}
                >
                  CONTACT
                </MuiLink>
              </Box>
            </Box>
          </Box>
        </Box>


        {/* Bottom Section - Copyright and Legal */}
        <Divider
          sx={{
            mb: { xs: 3, md: 4 },
            borderColor: themeColors.black,
            height: 1,
            opacity: 0.2,
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
              color: themeColors.black,
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
