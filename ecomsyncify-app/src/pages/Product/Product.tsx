import { useState, useEffect, useRef } from 'react';
import { Package, BarChart3, ShoppingCart, TrendingUp, Check } from 'lucide-react';

export default function Product() {
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({});
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  // Color palette matching logo theme (lime green to teal gradient)
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

  const products = [
    {
      icon: <Package size={40} />,
      title: 'Inventory Management',
      description: 'Real-time inventory tracking and synchronization across all your sales channels.',
      features: ['Multi-channel sync', 'Low stock alerts', 'Automated updates'],
      delay: 0,
    },
    {
      icon: <BarChart3 size={40} />,
      title: 'Analytics Dashboard',
      description: 'Comprehensive analytics and insights to help you make data-driven decisions.',
      features: ['Sales reports', 'Performance metrics', 'Custom dashboards'],
      delay: 200,
    },
    {
      icon: <ShoppingCart size={40} />,
      title: 'Order Management',
      description: 'Streamline your order processing with automated workflows and notifications.',
      features: ['Order tracking', 'Fulfillment automation', 'Customer notifications'],
      delay: 400,
      status: 'coming soon',
    },
    {
      icon: <TrendingUp size={40} />,
      title: 'Growth Tools',
      description: 'Scale your business with advanced tools for expansion and optimization.',
      features: ['Market insights', 'Competitor analysis', 'Growth recommendations'],
      delay: 600,
    },
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: themeColors.white }}>
      {/* Hero Section */}
      <section 
        className="pt-32 pb-20 px-4 relative overflow-hidden"
        style={{ 
          background: `linear-gradient(135deg, ${themeColors.limeGreen} 0%, ${themeColors.teal} 100%)`,
        }}
      >
        <div className="max-w-7xl mx-auto">
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
            <h1 
              className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
              style={{ color: themeColors.white }}
            >
              Our Products
            </h1>
            <p 
              className="text-xl mb-8 leading-relaxed"
              style={{ color: themeColors.white, opacity: 0.95 }}
            >
              Powerful solutions designed to streamline your e-commerce operations and boost your business growth.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 px-4" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className={`rounded-2xl p-8 transition-all duration-500 hover:shadow-lg hover:border-2 relative ${
                  isVisible['products'] 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
                }`}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderColor: 'transparent',
                  animation: isVisible['products'] 
                    ? `fadeInUp 0.8s ease-out ${product.delay}ms both` 
                    : 'none',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = themeColors.teal;
                  e.currentTarget.style.boxShadow = `0 10px 25px rgba(20, 184, 166, 0.15)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'transparent';
                  e.currentTarget.style.boxShadow = 'none';
                }}
                ref={(el) => {
                  if (el && index === 0) {
                    el.id = 'products';
                    sectionRefs.current['products'] = el;
                  }
                }}
              >
                {/* Coming Soon Badge */}
                {product.status === 'coming soon' && (
                  <div
                    className="absolute top-1 right-1 px-1.5 py-0.5 rounded-full text-[10px] font-semibold"
                    style={{
                      backgroundColor: themeColors.limeGreen,
                      color: themeColors.white,
                    }}
                  >
                    Coming Soon
                  </div>
                )}
                <div 
                  className="w-20 h-20 rounded-xl flex items-center justify-center mb-6 transition-all duration-300"
                  style={{ 
                    background: `linear-gradient(135deg, ${themeColors.limeGreen} 0%, ${themeColors.teal} 100%)`,
                    color: themeColors.white 
                  }}
                >
                  {product.icon}
                </div>

                <h3 
                  className="text-2xl font-bold mb-4"
                  style={{ color: themeColors.black }}
                >
                  {product.title}
                </h3>
                <p 
                  className="mb-6 leading-relaxed"
                  style={{ color: themeColors.gray }}
                >
                  {product.description}
                </p>

                <ul className="space-y-3 mb-6">
                  {product.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-2">
                      <Check 
                        size={20} 
                        className="flex-shrink-0" 
                        style={{ color: themeColors.teal }}
                      />
                      <span style={{ color: themeColors.black }}>{feature}</span>
                    </li>
                  ))}
                </ul>

               
              </div>
            ))}
          </div>

          {/* Shopify App Store Links Section */}
          <div 
            className={`mt-16 p-8 rounded-2xl text-center transition-all duration-1000 ${
              isVisible['app-links'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ 
              backgroundColor: themeColors.white,
            }}
            ref={(el) => {
              if (el) {
                el.id = 'app-links';
                sectionRefs.current['app-links'] = el;
              }
            }}
          >
            <h3 
              className="text-3xl font-bold mb-4"
              style={{ color: themeColors.black }}
            >
              Get Our Apps on Shopify App Store
            </h3>
            <p 
              className="text-lg mb-8 max-w-2xl mx-auto"
              style={{ color: themeColors.gray }}
            >
              Explore our Shopify apps and integrations available on the Shopify App Store
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://apps.shopify.com/etsy-integration-ecomsyncify"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105 inline-block"
                style={{ 
                  background: `linear-gradient(135deg, ${themeColors.limeGreen} 0%, ${themeColors.teal} 100%)`,
                  color: themeColors.white,
                }}
              >
                Etsy Integration App
              </a>
              <a
                href="https://apps.shopify.com/partners/ecomsyncify"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105 inline-block"
                style={{ 
                  backgroundColor: themeColors.white,
                  color: themeColors.black,
                  border: `2px solid ${themeColors.teal}`,
                }}
              >
                View All Apps
              </a>
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

