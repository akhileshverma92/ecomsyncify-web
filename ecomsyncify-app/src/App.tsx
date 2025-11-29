import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import Header from './components/Header/Header'
import AppNavbar from './components/AppNavbar/AppNavbar'
import Footer from './components/Footer/Footer'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import Home from './pages/Home/Home'
import Product from './pages/Product/Product'
import AboutUs from './pages/AboutUs/AboutUs'
import Contact from './pages/Contact/Contact'
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy'
import EtsyIntegration from './pages/Product/EtsyIntegration/EtsyIntegration'
import EtsyIntegrationFeatures from './pages/Product/EtsyIntegration/Features'
import EtsyIntegrationPricing from './pages/Product/EtsyIntegration/Pricing'
import EtsyIntegrationAbout from './pages/Product/EtsyIntegration/About'
import NotFound from './pages/NotFound/NotFound'
import './App.css'

const theme = createTheme({
  palette: {
    primary: {
      main: '#2563eb',
    },
    secondary: {
      main: '#64748b',
    },
  },
})

function AppContent() {
  const location = useLocation()
  const isProductDetailPage = location.pathname.startsWith('/product/etsy-integration')

  return (
    <div className="min-h-screen flex flex-col w-full">
      {isProductDetailPage ? <AppNavbar /> : <Header />}
      <main className="flex-1 w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/product/etsy-integration" element={<EtsyIntegration />}>
            <Route path="features" element={<EtsyIntegrationFeatures />} />
            <Route path="pricing" element={<EtsyIntegrationPricing />} />
            <Route path="about" element={<EtsyIntegrationAbout />} />
          </Route>
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <ScrollToTop />
        <AppContent />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
