import { useState, useEffect, useRef } from 'react';
import { ShoppingCart, RefreshCw, Package, Shield, Clock, TrendingUp,  ArrowRight, Sparkles } from 'lucide-react';
import { Link, Outlet, useLocation } from 'react-router-dom';

export default function EtsyIntegration() {
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({});
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const location = useLocation();

  const themeColors = {
    limeGreen: '#84cc16',
    teal: '#14b8a6',
    black: '#000000',
    white: '#ffffff',
    gray: '#6b7280',
    grayLight: '#f3f4f6',
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }));
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      Object.values(sectionRefs.current).forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const isBaseRoute = location.pathname === '/product/etsy-integration';

  return (
    <div className="min-h-screen" style={{ backgroundColor: themeColors.white }}>
      {/* Hero Section */}
      <section 
        className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
        }}
      >
        <div 
          className="absolute inset-0 z-0"
          style={{
            background: `linear-gradient(135deg, ${themeColors.limeGreen}CC 0%, ${themeColors.teal}CC 100%)`,
          }}
        ></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div 
            className={`text-center max-w-4xl mx-auto transition-all duration-1000 ${
              isVisible['hero'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            ref={(el) => {
              if (el) {
                el.id = 'hero';
                sectionRefs.current['hero'] = el;
              }
            }}
          >
            <div className="flex items-center justify-center gap-3 sm:gap-4 mb-4 sm:mb-6 flex-wrap">
              <ShoppingCart size={48} className="sm:w-14 sm:h-14 md:w-16 md:h-16 flex-shrink-0" style={{ color: themeColors.white }} />
              <h1 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                style={{ color: themeColors.white }}
              >
                Etsy Integration
              </h1>
            </div>
            <p 
              className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 leading-relaxed max-w-3xl mx-auto px-4"
              style={{ color: themeColors.white, opacity: 0.95 }}
            >
              Seamlessly connect your Etsy store to Shopify. Automate product imports, sync inventory in real-time, and manage orders across both platforms.
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-4 justify-center px-4">
              <a
                href="https://apps.shopify.com/etsy-integration-ecomsyncify"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 sm:px-8 sm:py-4 rounded-xl text-sm sm:text-base md:text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95 inline-flex items-center gap-2 touch-manipulation"
                style={{ 
                  background: themeColors.white,
                  color: themeColors.teal,
                  minHeight: '44px',
                }}
              >
                Start Free Trial <ArrowRight size={20} />
              </a>
              <Link
                to="/product/etsy-integration/pricing"
                className="px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg inline-flex items-center gap-2"
                style={{ 
                  backgroundColor: 'transparent',
                  color: themeColors.white,
                  border: `2px solid ${themeColors.white}`,
                }}
              >
                View Pricing <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="sticky top-0 z-50 bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex gap-1 overflow-x-auto">
            {[
              { path: '/product/etsy-integration', label: 'Overview' },
              { path: '/product/etsy-integration/features', label: 'Features' },
              { path: '/product/etsy-integration/pricing', label: 'Pricing' },
              { path: '/product/etsy-integration/about', label: 'About' },
            ].map((tab) => (
              <Link
                key={tab.path}
                to={tab.path}
                className={`px-4 py-3 sm:px-6 sm:py-4 text-sm sm:text-base font-semibold transition-all duration-300 whitespace-nowrap touch-manipulation ${
                  location.pathname === tab.path || (tab.path === '/product/etsy-integration' && location.pathname === '/product/etsy-integration')
                    ? 'border-b-2'
                    : 'hover:bg-gray-50'
                }`}
                style={{
                  color: location.pathname === tab.path || (tab.path === '/product/etsy-integration' && location.pathname === '/product/etsy-integration')
                    ? themeColors.teal
                    : themeColors.gray,
                  borderBottomColor: location.pathname === tab.path || (tab.path === '/product/etsy-integration' && location.pathname === '/product/etsy-integration')
                    ? themeColors.teal
                    : 'transparent',
                }}
              >
                {tab.label}
              </Link>
            ))}
          </nav>
        </div>
      </section>

      {/* Content Area */}
      {isBaseRoute ? (
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: themeColors.white }}>
          <div className="max-w-7xl mx-auto">
            {/* Features Section */}
            <div className="mb-12 sm:mb-16 md:mb-20">
              <div className="text-center mb-8 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4" style={{ color: themeColors.black }}>
                  Everything You Need to Scale
                </h2>
                <p className="text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4" style={{ color: themeColors.gray }}>
                  Our comprehensive integration platform provides all the tools you need to successfully manage your multi-platform e-commerce business.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                {[
                  { icon: <RefreshCw size={32} />, title: 'Real-time Sync', desc: 'Automatically sync products, inventory, and orders between Etsy and Shopify in real-time.' },
                  { icon: <Package size={32} />, title: 'Bulk Operations', desc: 'Import hundreds of products at once with our advanced bulk import and export features.' },
                  { icon: <TrendingUp size={32} />, title: 'Advanced Analytics', desc: 'Get detailed insights into your sales performance across both platforms.' },
                  { icon: <Shield size={32} />, title: 'Secure Integration', desc: 'Enterprise-grade security with encrypted data transfer and secure API connections.' },
                  { icon: <Clock size={32} />, title: '24/7 Support', desc: 'Round-the-clock support from our experienced team of Shopify developers.' },
                  { icon: <Sparkles size={32} />, title: 'Growth Tools', desc: 'Advanced features like listing translation and multi-location support to scale your business.' },
                ].map((feature, idx) => (
                  <div
                    key={idx}
                    className="p-4 sm:p-5 md:p-6 rounded-xl border-2 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 touch-manipulation"
                    style={{
                      backgroundColor: themeColors.white,
                      borderColor: themeColors.grayLight,
                    }}
                  >
                    <div 
                      className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4"
                      style={{
                        background: `linear-gradient(135deg, ${themeColors.limeGreen} 0%, ${themeColors.teal} 100%)`,
                        color: themeColors.white,
                      }}
                    >
                      {feature.icon}
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold mb-2" style={{ color: themeColors.black }}>
                      {feature.title}
                    </h3>
                    <p className="text-sm sm:text-base leading-relaxed" style={{ color: themeColors.gray }}>
                      {feature.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* How It Works */}
            <div className="mb-20">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: themeColors.black }}>
                  How It Works
                </h2>
                <p className="text-lg max-w-2xl mx-auto" style={{ color: themeColors.gray }}>
                  Get started in minutes with our simple 3-step process.
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { num: '1', title: 'Connect Your Stores', desc: 'Securely connect your Etsy and Shopify accounts with our one-click integration.' },
                  { num: '2', title: 'Configure Settings', desc: 'Set up your sync preferences, pricing rules, and inventory management options.' },
                  { num: '3', title: 'Start Syncing', desc: 'Watch as your products, inventory, and orders sync automatically across platforms.' },
                ].map((step, idx) => (
                  <div key={idx} className="text-center">
                    <div 
                      className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl font-bold"
                      style={{
                        background: `linear-gradient(135deg, ${themeColors.limeGreen} 0%, ${themeColors.teal} 100%)`,
                        color: themeColors.white,
                      }}
                    >
                      {step.num}
                    </div>
                    <h3 className="text-2xl font-bold mb-4" style={{ color: themeColors.black }}>
                      {step.title}
                    </h3>
                    <p className="text-base leading-relaxed" style={{ color: themeColors.gray }}>
                      {step.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ) : (
        <Outlet />
      )}

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}


