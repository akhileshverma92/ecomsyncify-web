import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Box,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography
} from '@mui/material'
import { Close, KeyboardArrowDown } from '@mui/icons-material'

interface MobileDrawerProps {
  open: boolean
  onClose: () => void
  onNavClick: () => void
  allPages: Array<{ path: string; label: string }>
  isActive: (path: string) => boolean
  themeColors: {
    black: string
    white: string
    gray: string
    grayLight: string
  }
}

function MobileDrawer({
  open,
  onClose,
  onNavClick,
  allPages,
  isActive,
  themeColors,
}: MobileDrawerProps) {
  const [mobileProductMenuOpen, setMobileProductMenuOpen] = useState(false)

  if (!open) return null

  return (
    <Box
      sx={{
        width: { xs: '75vw', sm: '75vw', md: '70vw' },
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        bgcolor: themeColors.white,
      }}
    >
      {/* Header Section with Logo and Close */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          p: 3,
          borderBottom: `1px solid ${themeColors.grayLight}`,
          bgcolor: 'rgba(243, 244, 246, 0.5)',
        }}
      >
        <Box
          component={Link}
          to="/"
          onClick={onNavClick}
          sx={{
            display: 'flex',
            alignItems: 'center',
            textDecoration: 'none',
          }}
        >
          <img
            src="/image-logo.png"
            alt="EcomSyncify Logo"
            style={{ height: '36px', width: 'auto' }}
          />
        </Box>
        <IconButton
          onClick={onClose}
          sx={{
            color: themeColors.black,
            bgcolor: 'rgba(0, 0, 0, 0.04)',
            '&:hover': {
              bgcolor: 'rgba(0, 0, 0, 0.08)',
            },
            transition: 'all 0.2s ease',
          }}
        >
          <Close />
        </IconButton>
      </Box>

      {/* Navigation List */}
      <Box sx={{ flex: 1, overflowY: 'auto', py: 2 }}>
        <List sx={{ px: 2 }}>
          {allPages.map((page) => {
            // Special handling for Products menu in mobile
            if (page.path === '/product/etsy-integration') {
              return (
                <Box key={page.path}>
                  <ListItem disablePadding>
                    <ListItemButton
                      onClick={() => setMobileProductMenuOpen(!mobileProductMenuOpen)}
                      sx={{
                        py: 2,
                        px: 3,
                        borderRadius: 2,
                        mb: 0.5,
                        color: themeColors.black,
                        fontWeight: 600,
                        bgcolor: isActive(page.path)
                          ? 'linear-gradient(135deg, rgba(22, 163, 74, 0.1) 0%, rgba(59, 130, 246, 0.1) 100%)'
                          : 'transparent',
                        borderLeft: isActive(page.path)
                          ? '4px solid #16A34A'
                          : '4px solid transparent',
                        '&:hover': {
                          bgcolor: 'rgba(243, 244, 246, 0.8)',
                        },
                        transition: 'all 0.2s ease',
                      }}
                    >
                      <ListItemText
                        primary={page.label}
                        primaryTypographyProps={{
                          fontSize: '1rem',
                          fontWeight: 600,
                        }}
                      />
                      <KeyboardArrowDown
                        sx={{
                          transform: mobileProductMenuOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                          transition: 'transform 0.3s ease',
                          color: themeColors.gray,
                        }}
                      />
                    </ListItemButton>
                  </ListItem>

                  {/* Expandable Products Submenu */}
                  {mobileProductMenuOpen && (
                    <Box sx={{ px: 3, pb: 3, pt: 1 }}>
                      {/* Shopify */}
                      <Box
                        component={Link}
                        to="/product/etsy-integration"
                        onClick={onNavClick}
                        sx={{
                          display: 'block',
                          p: 3,
                          mb: 2.5,
                          borderRadius: 2,
                          textDecoration: 'none',
                          bgcolor: themeColors.white,
                          border: '1px solid rgba(0, 0, 0, 0.08)',
                          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
                          transition: 'all 0.2s ease',
                          '&:hover': {
                            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                            transform: 'translateY(-2px)',
                          },
                        }}
                      >
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1.5 }}>
                          <Box
                            component="img"
                            src="/nav1.jpeg"
                            alt="Shopify"
                            sx={{
                              height: 32,
                              width: 'auto',
                              minWidth: 32,
                              objectFit: 'contain',
                              display: 'block',
                            }}
                          />
                          <Typography
                            variant="h6"
                            sx={{
                              fontWeight: 700,
                              fontSize: '1.1rem',
                              color: '#16A34A',
                              letterSpacing: '0.08em',
                            }}
                          >
                            SHOPIFY
                          </Typography>
                        </Box>
                        <Box
                          sx={{
                            height: 3,
                            width: 60,
                            borderRadius: 999,
                            bgcolor: 'rgba(0, 0, 0, 0.1)',
                            mb: 1.5,
                          }}
                        />
                        <Typography
                          variant="body2"
                          sx={{ color: themeColors.black, fontSize: '0.9rem', lineHeight: 1.6 }}
                        >
                          SP Feeds: ShareASale &amp; Google<br />
                          Etsy Importer &amp; Sync
                        </Typography>
                      </Box>

                      {/* Amazon */}
                      <Box
                        sx={{
                          display: 'block',
                          p: 3,
                          mb: 2.5,
                          borderRadius: 2,
                          bgcolor: themeColors.white,
                          border: '1px solid rgba(0, 0, 0, 0.08)',
                          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
                          transition: 'all 0.2s ease',
                          '&:hover': {
                            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                            transform: 'translateY(-2px)',
                          },
                        }}
                      >
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1.5 }}>
                          <Box
                            component="img"
                            src="/nav2.png"
                            alt="Amazon"
                            sx={{
                              height: 32,
                              width: 'auto',
                              minWidth: 32,
                              objectFit: 'contain',
                              display: 'block',
                            }}
                          />
                          <Typography
                            variant="h6"
                            sx={{
                              fontWeight: 700,
                              fontSize: '1.1rem',
                              color: '#F59E0B',
                              letterSpacing: '0.08em',
                            }}
                          >
                            AMAZON
                          </Typography>
                        </Box>
                        <Box
                          sx={{
                            height: 3,
                            width: 60,
                            borderRadius: 999,
                            bgcolor: 'rgba(0, 0, 0, 0.1)',
                            mb: 1.5,
                          }}
                        />
                        <Typography
                          variant="body2"
                          sx={{ color: themeColors.black, fontSize: '0.9rem', lineHeight: 1.6 }}
                        >
                          Amazon marketplace integration<br />
                          <Typography component="span" variant="body2" sx={{ fontStyle: 'italic' }}>
                            Coming Soon
                          </Typography>
                        </Typography>
                      </Box>

                      {/* Walmart */}
                      <Box
                        sx={{
                          display: 'block',
                          p: 3,
                          borderRadius: 2,
                          bgcolor: themeColors.white,
                          border: '1px solid rgba(0, 0, 0, 0.08)',
                          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
                          transition: 'all 0.2s ease',
                          '&:hover': {
                            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                            transform: 'translateY(-2px)',
                          },
                        }}
                      >
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1.5 }}>
                          <Box
                            component="img"
                            src="/nav3.png"
                            alt="Walmart"
                            sx={{
                              height: 32,
                              width: 'auto',
                              minWidth: 32,
                              objectFit: 'contain',
                              display: 'block',
                            }}
                          />
                          <Typography
                            variant="h6"
                            sx={{
                              fontWeight: 700,
                              fontSize: '1.1rem',
                              color: '#2563EB',
                              letterSpacing: '0.08em',
                            }}
                          >
                            WALMART
                          </Typography>
                        </Box>
                        <Box
                          sx={{
                            height: 3,
                            width: 60,
                            borderRadius: 999,
                            bgcolor: 'rgba(0, 0, 0, 0.1)',
                            mb: 1.5,
                          }}
                        />
                        <Typography
                          variant="body2"
                          sx={{ color: themeColors.black, fontSize: '0.9rem', lineHeight: 1.6 }}
                        >
                          Walmart marketplace integration<br />
                          <Typography component="span" variant="body2" sx={{ fontStyle: 'italic' }}>
                            Coming Soon
                          </Typography>
                        </Typography>
                      </Box>
                    </Box>
                  )}
                </Box>
              )
            }

            // Regular menu items
            return (
              <ListItem key={page.path} disablePadding sx={{ mb: 0.5 }}>
                <ListItemButton
                  component={Link}
                  to={page.path}
                  onClick={onNavClick}
                  sx={{
                    py: 2,
                    px: 3,
                    borderRadius: 2,
                    color: isActive(page.path) ? themeColors.black : themeColors.gray,
                    fontWeight: isActive(page.path) ? 600 : 500,
                    bgcolor: isActive(page.path)
                      ? 'linear-gradient(135deg, rgba(22, 163, 74, 0.1) 0%, rgba(59, 130, 246, 0.1) 100%)'
                      : 'transparent',
                    borderLeft: isActive(page.path)
                      ? '4px solid #16A34A'
                      : '4px solid transparent',
                    '&:hover': {
                      bgcolor: 'rgba(243, 244, 246, 0.8)',
                      color: themeColors.black,
                      transform: 'translateX(4px)',
                    },
                    transition: 'all 0.2s ease',
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
            )
          })}
        </List>
      </Box>

      {/* Footer Section */}
      <Box
        sx={{
          p: 3,
          borderTop: `1px solid ${themeColors.grayLight}`,
          bgcolor: 'rgba(243, 244, 246, 0.5)',
        }}
      >
        <Typography
          variant="caption"
          sx={{
            color: themeColors.gray,
            fontSize: '0.75rem',
            display: 'block',
            textAlign: 'center',
          }}
        >
          © {new Date().getFullYear()} EcomSyncify
        </Typography>
      </Box>
    </Box>
  )
}

export default MobileDrawer

