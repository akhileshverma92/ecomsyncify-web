import { Link } from 'react-router-dom'
import { Box, Container, Typography, Link as MuiLink, Divider } from '@mui/material'
import { Facebook, Instagram, LinkedIn } from '@mui/icons-material'
import { themeColors } from '../../theme/themeColors'
import { HeadphonesIcon, Mail, MapPin } from 'lucide-react'

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
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
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


      <Container
        maxWidth="xl"
        sx={{
          pt: { xs: 4, sm: 6, md: 8 },
          pb: { xs: 1, sm: 2, md: 3 }, // reduce bottom space under © text
          px: { xs: 2, sm: 3, md: 4 },
          position: 'relative',
          zIndex: 1,
        }}
      >


        {/* Desktop Layout - 3 Columns: About, Company, Address */}
        <Box
          sx={{
            display: { xs: 'none', md: 'grid' },
            gridTemplateColumns: 'repeat(3, 1fr)', // each takes 1/3 width
            gap: 6,
          }}
        >
          {/* About Company - takes left half */}
          <Box sx={{ pr: { md: 4 } }}>

            <Box
              sx={{
                p: 2,
                borderRadius: 2,
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  color: themeColors.white,
                  fontSize: { xs: '0.8rem', md: '0.9rem' },
                  lineHeight: 1.6,
                }}
              >
                <Box
                  className='flex items-center justify-center w-full'
                  sx={{
                    padding: { xs: '8px 12px', sm: '10px 16px' },
                    borderRadius: '8px',
                    backdropFilter: 'blur(10px)',
                  }}
                >
                  <img
                    className='w-full h-full items-center justify-center'
                    src="/image-logo.png"
                    alt="EcomSyncify Logo"
                    style={{
                      height: '40px',
                      width: 'auto',
                      maxWidth: '200px',
                    }}
                  />
                </Box>
                <br />
                EcomSyncify Technologies builds smart eCommerce integration tools that make
                multi-channel selling simple. We help Shopify merchants automate integrations,
                reduce manual work, and scale confidently across marketplaces.
                <br />

              </Typography>
            </Box>

          </Box>
          {/* COMPANY Column */}
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
            <Box
              sx={{
                mt: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                gap: 1.5,
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: themeColors.white,
                }}
              >
                Follow Us
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2,
                }}
              >
                <MuiLink
                  href="#"
                  aria-label="Visit our Facebook"
                  sx={{
                    color: themeColors.white,
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 32,
                    height: 32,
                    borderRadius: '999px',
                    border: `1px solid ${themeColors.borderBlue}`,
                    backgroundColor: 'rgba(15,23,42,0.2)',
                    transition: 'all 0.25s ease',
                    '&:hover': {
                      background: themeColors.buttonGreenGradient,
                      transform: 'translateY(-2px)',
                      boxShadow: '0 8px 16px rgba(0,0,0,0.25)',
                    },
                  }}
                >
                  <Facebook fontSize="small" />
                </MuiLink>
                <MuiLink
                  href="#"
                  aria-label="Visit our Instagram"
                  sx={{
                    color: themeColors.white,
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 32,
                    height: 32,
                    borderRadius: '999px',
                    border: `1px solid ${themeColors.borderBlue}`,
                    backgroundColor: 'rgba(15,23,42,0.2)',
                    transition: 'all 0.25s ease',
                    '&:hover': {
                      background: themeColors.buttonGreenGradient,
                      transform: 'translateY(-2px)',
                      boxShadow: '0 8px 16px rgba(0,0,0,0.25)',
                    },
                  }}
                >
                  <Instagram fontSize="small" />
                </MuiLink>
                <MuiLink
                  href="#"
                  aria-label="Visit our LinkedIn"
                  sx={{
                    color: themeColors.white,
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 32,
                    height: 32,
                    borderRadius: '999px',
                    border: `1px solid ${themeColors.borderBlue}`,
                    backgroundColor: 'rgba(15,23,42,0.2)',
                    transition: 'all 0.25s ease',
                    '&:hover': {
                      background: themeColors.buttonGreenGradient,
                      transform: 'translateY(-2px)',
                      boxShadow: '0 8px 16px rgba(0,0,0,0.25)',
                    },
                  }}
                >
                  <LinkedIn fontSize="small" />
                </MuiLink>
              </Box>
            </Box>
          </Box>
          {/* Address Column */}
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
              Contact information
            </Typography>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: '1fr', // full-width content in this column
                gap: { xs: 2, md: 3 },
              }}
            >
              <div className="space-y-4  sm:space-y-5 md:space-y-6">
                {/* Location */}
                <div className="flex items-start gap-3 sm:gap-4">
                  <div
                    className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full flex items-center justify-center shadow-md flex-shrink-0"
                    style={{
                      backgroundColor: themeColors.white,
                      boxShadow: '0 10px 25px rgba(0,0,0,0.08)',
                    }}
                  >
                    <MapPin size={20} className="sm:w-5 sm:h-5 md:w-6 md:h-6" style={{ color: themeColors.teal }} />
                  </div>
                  <div className="flex-1 min-w-0">

                    <p
                      className="text-sm sm:text-base md:text-lg font-semibold mb-1"
                    >
                      EcomSyncify Technologies LLP
                    </p>
                    <p
                      className="text-xs sm:text-sm md:text-base leading-relaxed break-words"
                    >
                      P-53 / VK Residency Haldharu,<br />
                      Surat, Gujarat, India - 394305
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3 sm:gap-4">
                  <div
                    className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full flex items-center justify-center shadow-md flex-shrink-0"
                    style={{
                      backgroundColor: themeColors.white,
                      boxShadow: '0 10px 25px rgba(0,0,0,0.08)',
                    }}
                  >
                    <Mail size={20} className="sm:w-5 sm:h-5 md:w-6 md:h-6" style={{ color: themeColors.teal }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p
                      className="text-[10px] sm:text-xs uppercase tracking-wider font-semibold mb-1 sm:mb-1.5"
                    >
                      Send Us Mail
                    </p>
                    <a
                      href="mailto:support@ecomsyncify.com"
                      className="text-xs sm:text-sm md:text-base font-semibold hover:underline break-all block"
                    >
                      support@ecomsyncify.com
                    </a>
                  </div>
                </div>

                {/* Call */}
                <div className="flex items-start gap-3 sm:gap-4">
                  <div
                    className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full flex items-center justify-center shadow-md flex-shrink-0"
                    style={{
                      backgroundColor: themeColors.white,
                      boxShadow: '0 10px 25px rgba(0,0,0,0.08)',
                    }}
                  >
                    <HeadphonesIcon size={20} className="sm:w-5 sm:h-5 md:w-6 md:h-6" style={{ color: themeColors.teal }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p
                      className="text-[10px] sm:text-xs uppercase tracking-wider font-semibold mb-1 sm:mb-1.5"
                    >
                      Call Us
                    </p>
                    <p
                      className="text-sm sm:text-base md:text-lg font-semibold mb-1"
                    >
                      +91 7275646711
                    </p>
                    <p
                      className="text-xs sm:text-sm md:text-base leading-relaxed"
                    >
                      24/7 Support Available
                    </p>
                  </div>
                </div>
              </div>
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

        <Box
          className='border-t-1 mt-1 pt-2'
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
          }}
        >
          <p className='text-xs sm:text-sm md:text-base'>
            Copyright © {currentYear} {""}
            Designed by EcomSyncify Technologies LLP.
          </p>

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
