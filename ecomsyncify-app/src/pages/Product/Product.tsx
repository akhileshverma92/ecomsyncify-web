import { useState, useEffect, useRef } from 'react';
import { Package, BarChart3, ShoppingCart, Check, Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { themeColors } from '../../theme/themeColors';

export default function Product() {
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({});
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

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

  const products = [
    {
      id: 'etsy-integration',
      icon: <ShoppingCart size={40} />,
      title: 'Etsy Integration',
      description: 'Seamlessly connect your Etsy store to Shopify. Automate product imports, sync inventory in real-time, and manage orders across both platforms.',
      features: ['Real-time sync', 'Bulk operations', 'Secure integration', '24/7 support'],
      delay: 0,
      slug: 'etsy-integration',
    },
    {
      id: 'inventory-management',
      icon: <Package size={40} />,
      title: 'Inventory Management',
      description: 'Real-time inventory tracking and synchronization across all your sales channels.',
      features: ['Multi-channel sync', 'Low stock alerts', 'Automated updates'],
      delay: 200,
      slug: 'inventory-management',
    },
    {
      id: 'analytics-dashboard',
      icon: <BarChart3 size={40} />,
      title: 'Analytics Dashboard',
      description: 'Comprehensive analytics and insights to help you make data-driven decisions.',
      features: ['Sales reports', 'Performance metrics', 'Custom dashboards'],
      delay: 400,
      slug: 'analytics-dashboard',
    },
    {
      id: 'order-management',
      icon: <ShoppingCart size={40} />,
      title: 'Order Management',
      description: 'Streamline your order processing with automated workflows and notifications.',
      features: ['Order tracking', 'Fulfillment automation', 'Customer notifications'],
      delay: 600,
      slug: 'order-management',
      status: 'coming soon',
    },
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: themeColors.white }}>
      {/* Hero Section */}
      <section 
        className="pt-24 sm:pt-28 md:pt-20 pb-12 sm:pb-16 md:pb-10 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
        }}
      >
        {/* Gradient Overlay */}
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
              <Package size={48} className="sm:w-14 sm:h-14 md:w-16 md:h-16 flex-shrink-0" style={{ color: themeColors.white }} />
              <h1 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                style={{ color: themeColors.white }}
              >
                Our Products
              </h1>
            </div>
            <p 
              className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 leading-relaxed max-w-3xl mx-auto px-4"
              style={{ color: themeColors.white, opacity: 0.95 }}
            >
              Powerful solutions designed to streamline your e-commerce operations and boost your business growth.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4"
              style={{ color: themeColors.black }}
            >
              Explore Our Solutions
            </h2>
            <p 
              className="text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4"
              style={{ color: themeColors.gray }}
            >
              Discover powerful tools designed to transform your e-commerce business
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
            {products.map((product, index) => (
              <div
                key={index}
                className={`rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 relative border-2 touch-manipulation ${
                  isVisible['products'] 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
                }`}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderColor: themeColors.grayLight,
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
                  animation: isVisible['products'] 
                    ? `fadeInUp 0.8s ease-out ${product.delay}ms both` 
                    : 'none',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = themeColors.teal;
                  e.currentTarget.style.boxShadow = `0 20px 40px rgba(20, 184, 166, 0.2)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = themeColors.grayLight;
                  e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.05)';
                }}
                ref={(el) => {
                  if (el && index === 0) {
                    el.id = 'products';
                    sectionRefs.current['products'] = el;
                  }
                }}
              >
                
                
                {/* Icon and Title Side by Side */}
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div 
                    className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-20 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 shadow-lg hover:scale-110"
                    style={{ 
                      background: `linear-gradient(135deg, ${themeColors.limeGreen} 0%, ${themeColors.teal} 100%)`,
                      color: themeColors.white 
                    }}
                  >
                    {product.icon}
                  </div>
                  <h3 
                    className="text-lg sm:text-xl md:text-2xl font-bold flex-1 leading-tight"
                    style={{ color: themeColors.black }}
                  >
                    {product.title}
                    
                  </h3>
                </div>
                <p 
                  className="mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base"
                  style={{ color: themeColors.gray, lineHeight: '1.7' }}
                >
                  {product.description}
                </p>

                <div className="border-t pt-4 sm:pt-6" style={{ borderColor: themeColors.grayLight }}>
                  <h4 className="text-xs sm:text-sm font-semibold mb-3 sm:mb-4 uppercase tracking-wide" style={{ color: themeColors.teal }}>
                    Key Features
                  </h4>
                  <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                    {product.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2 sm:gap-3">
                        <div className="mt-0.5">
                          <Check 
                            size={16} 
                            className="sm:w-[18px] sm:h-[18px] flex-shrink-0" 
                            style={{ color: themeColors.teal }}
                          />
                        </div>
                        <span className="text-xs sm:text-sm leading-relaxed" style={{ color: themeColors.black }}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  {!product.status && product.id === 'etsy-integration' && (
                    <Link
                      to={`/product/${product.slug}`}
                      className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-lg text-sm sm:text-base font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95 w-full sm:w-auto justify-center"
                      style={{ 
                        background: `linear-gradient(135deg, ${themeColors.limeGreen} 0%, ${themeColors.teal} 100%)`,
                        color: themeColors.white,
                        minHeight: '44px',
                      }}
                    >
                      Let's Go <ArrowRight size={16} className="sm:w-[18px] sm:h-[18px]" />
                    </Link>
                  )}
                  {!product.status && product.id !== 'etsy-integration' && (
                    <Link
                      to={`/product/${product.slug}`}
                      className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-lg text-sm sm:text-base font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95 w-full sm:w-auto justify-center"
                      style={{ 
                        background: `linear-gradient(135deg, ${themeColors.limeGreen} 0%, ${themeColors.teal} 100%)`,
                        color: themeColors.white,
                        minHeight: '44px',
                      }}
                    >
                      Learn More <ArrowRight size={16} className="sm:w-[18px] sm:h-[18px]" />
                    </Link>
                  )}
                  {product.status === 'coming soon' && (
                    <div className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-lg text-sm sm:text-base font-semibold opacity-60 cursor-not-allowed w-full sm:w-auto justify-center"
                      style={{ 
                        backgroundColor: themeColors.grayLight,
                        color: themeColors.gray,
                        minHeight: '44px',
                      }}
                    >
                      Coming Soon
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Shopify App Store Links Section */}
          <div 
            className={`mt-12 sm:mt-16 md:mt-20 p-6 sm:p-8 md:p-10 lg:p-12 rounded-2xl sm:rounded-3xl text-center transition-all duration-1000 relative overflow-hidden ${
              isVisible['app-links'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ 
              background: `linear-gradient(135deg, ${themeColors.limeGreen}15 0%, ${themeColors.teal}15 100%)`,
              border: `2px solid ${themeColors.grayLight}`,
            }}
            ref={(el) => {
              if (el) {
                el.id = 'app-links';
                sectionRefs.current['app-links'] = el;
              }
            }}
          >
            <div className="absolute top-2 right-2 sm:top-4 sm:right-4 opacity-10">
              <Sparkles size={60} className="sm:w-20 sm:h-20" style={{ color: themeColors.teal }} />
            </div>
            <div className="relative z-10">
              <h3 
                className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4"
                style={{ color: themeColors.black }}
              >
                Get Our Apps on Shopify App Store
              </h3>
              <p 
                className="text-sm sm:text-base md:text-lg mb-6 sm:mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed px-4"
                style={{ color: themeColors.gray }}
              >
                Explore our Shopify apps and integrations available on the Shopify App Store. Start syncing your e-commerce operations today!
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
                <a
                  href="https://apps.shopify.com/etsy-integration-ecomsyncify"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 sm:px-8 sm:py-4 rounded-xl text-base sm:text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95 inline-block w-full sm:w-auto sm:min-w-[200px] text-center touch-manipulation"
                  style={{ 
                    background: `linear-gradient(135deg, ${themeColors.limeGreen} 0%, ${themeColors.teal} 100%)`,
                    color: themeColors.white,
                    boxShadow: '0 4px 15px rgba(20, 184, 166, 0.3)',
                    minHeight: '44px',
                  }}
                >
                  Etsy Integration App
                </a>
                <a
                  href="https://apps.shopify.com/partners/ecomsyncify"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 sm:px-8 sm:py-4 rounded-xl text-base sm:text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95 inline-block w-full sm:w-auto sm:min-w-[200px] text-center touch-manipulation"
                  style={{ 
                    backgroundColor: themeColors.white,
                    color: themeColors.black,
                    border: `2px solid ${themeColors.teal}`,
                    minHeight: '44px',
                  }}
                >
                  View All Apps
                </a>
              </div>
            </div>
          </div>

         
        </div>
      </section>

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