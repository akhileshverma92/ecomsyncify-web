import { useState, useEffect, useRef } from 'react';
import { RefreshCw, Package, ShoppingCart, BarChart3, TrendingUp } from 'lucide-react';

export default function AboutUs() {
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({});
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  // Color palette blending reference design with logo colors (blue-green-teal gradient)
  const themeColors = {
    // Blue shades (from reference)
    darkBlue: '#1e40af',
    blue: '#2563eb',
    lightBlue: '#3b82f6',
    // Logo colors (lime green to teal)
    limeGreen: '#84cc16', // Bright lime green from logo
    teal: '#14b8a6', // Teal/turquoise from logo
    // Blended colors
    blueTeal: '#2dd4bf',
    greenBlue: '#22c55e',
    tealGreen: '#10b981',
    // Neutrals
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

  const whatWeDo = [
    {
      icon: <RefreshCw size={32} />,
      title: 'Real-Time Inventory Synchronization',
      description: 'Keep your product quantities perfectly aligned between Shopify and Etsy - no more overselling or missed opportunities.',
    },
    {
      icon: <Package size={32} />,
      title: 'Automated Product Listings',
      description: 'Publish, edit, and update Etsy listings directly from Shopify with optimized titles, descriptions, and tags.',
    },
    {
      icon: <ShoppingCart size={32} />,
      title: 'Two-Way Order Management',
      description: "Receive and fulfil Etsy orders from within Shopify's dashboard, with automatic status updates and tracking sync.",
    },
    {
      icon: <BarChart3 size={32} />,
      title: 'Custom Pricing & Attribute Mapping',
      description: 'Adjust pricing, categories, and attributes per platform to optimize visibility and conversions.',
    },
    {
      icon: <TrendingUp size={32} />,
      title: 'Detailed Analytics & Insights',
      description: 'Track top-selling products, and sync status with a single click.',
    },
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: themeColors.white }}>
      {/* Hero Section */}
      <section 
        className="pt-32 pb-20 px-4 relative overflow-hidden"
        style={{ 
          background: `linear-gradient(135deg, ${themeColors.blue} 0%, ${themeColors.limeGreen} 50%, ${themeColors.teal} 100%)`,
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
              About EcomSyncify Technologies
            </h1>
            <p 
              className="text-xl mb-8 leading-relaxed"
              style={{ color: themeColors.white, opacity: 0.95 }}
          >
            Empowering Shopify–Etsy Sellers with Smarter Automation
            </p>
          </div>
        </div>
      </section>

      {/* Main About Section */}
      <section className="py-20 px-4" style={{ backgroundColor: themeColors.white }}>
        <div className="max-w-5xl mx-auto">
          <div 
            className={`mb-16 transition-all duration-1000 ${
              isVisible['intro'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            ref={(el) => {
              if (el) {
                el.id = 'intro';
                sectionRefs.current['intro'] = el;
              }
            }}
          >
            <p 
              className="mb-8 leading-relaxed text-xl"
              style={{ color: themeColors.gray }}
          >
            At EcomSyncify Technologies LLP, we simplify the way merchants sell on Shopify and Etsy. Our mission is to eliminate the manual work, errors, and inefficiencies that come with managing two storefronts - and replace them with intelligent, automated, real-time synchronization.
            </p>
            <p 
              className="mb-8 leading-relaxed text-xl"
              style={{ color: themeColors.gray }}
          >
            We help creative entrepreneurs, handmade product sellers, and DTC brands seamlessly connect their Shopify store with Etsy, enabling effortless product listings, instant inventory updates, and unified order management.
            </p>
            <div 
              className="p-8 relative"
              style={{ 
                backgroundColor: themeColors.grayLight,
              }}
            >
              <p 
                className="text-xl italic leading-relaxed"
                style={{ color: '#000000' }}
            >
              No spreadsheets, no double entry - just automation that works quietly behind the scenes so you can focus on creativity, customers, and growth.
              </p>
            </div>
          </div>

        {/* Who We Are Section */}
          <div 
            className={`mb-20 transition-all duration-1000 delay-200 ${
              isVisible['who'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            ref={(el) => {
              if (el) {
                el.id = 'who';
                sectionRefs.current['who'] = el;
              }
            }}
          >
            <h2 
              className="text-4xl font-bold mb-8"
              style={{ color: '#000000' }}
          >
            Who We Are
            </h2>
            <p 
              className="mb-6 leading-relaxed text-xl"
              style={{ color: themeColors.gray }}
          >
            EcomSyncify Technologies was founded by a team of ecommerce professionals and developers who experienced firsthand the challenges of managing multiple sales channels.
            </p>
            <p 
              className="mb-8 leading-relaxed text-xl"
              style={{ color: themeColors.gray }}
          >
            We saw sellers wasting hours updating products, manually syncing stock, and juggling orders between Shopify and Etsy. So, we built a platform that solves these problems through smart integration, stable technology, and an obsessive focus on accuracy.
            </p>
            <div 
              className="p-8"
              style={{ 
                backgroundColor: themeColors.grayLight,
              }}
            >
              <h3 
                className="text-2xl font-semibold mb-4"
                style={{ color: '#000000' }}
            >
              Our belief is simple - technology should make selling easier, not harder.
              </h3>
              <p 
                className="leading-relaxed text-lg"
                style={{ color: themeColors.gray }}
            >
              Every feature we build is designed to help sellers save time, reduce risk, and create a consistent brand experience across Shopify and Etsy.
              </p>
            </div>
          </div>

        {/* What We Do Section */}
          <div 
            className={`mb-20 transition-all duration-1000 delay-300 ${
              isVisible['what'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            ref={(el) => {
              if (el) {
                el.id = 'what';
                sectionRefs.current['what'] = el;
              }
            }}
          >
            <h2 
              className="text-4xl font-bold mb-16 text-center"
              style={{ color: '#000000' }}
          >
            What We Do
            </h2>
            <div className="space-y-8">
            {whatWeDo.map((item, index) => (
                <div
                key={index}
                  className="flex items-start gap-6"
                  style={{
                    animation: isVisible['what'] 
                      ? `fadeInUp 0.6s ease-out ${index * 100}ms both` 
                      : 'none',
                  }}
                >
                  <div 
                    className="w-16 h-16 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: `linear-gradient(135deg, ${themeColors.limeGreen} 0%, ${themeColors.teal} 100%)`, color: themeColors.white }}
                  >
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <h3 
                      className="text-2xl font-bold mb-3"
                      style={{ color: '#000000' }}
                  >
                    {item.title}
                    </h3>
                    <p 
                      className="leading-relaxed text-lg"
                      style={{ color: themeColors.gray }}
                  >
                    {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Why Choose Us Section */}
          <div 
            className={`mb-20 transition-all duration-1000 delay-400 ${
              isVisible['why-choose-header'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            ref={(el) => {
              if (el) {
                el.id = 'why-choose-header';
                sectionRefs.current['why-choose-header'] = el;
              }
            }}
          >
            <div className="text-center mb-16">
              <h2 
                className="text-4xl md:text-5xl font-bold mb-4"
                style={{ color: themeColors.black }}
              >
                Why Choose Us?
              </h2>
              <p 
                className="text-xl max-w-2xl mx-auto"
                style={{ color: themeColors.gray }}
              >
                Discover what makes EcomSyncify the preferred choice for thousands of businesses worldwide
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {[
                {
                  title: 'Proven Track Record',
                  description: 'Trusted by thousands of businesses worldwide with a 99.9% uptime guarantee.',
                  delay: 0,
                },
                {
                  title: 'Easy Integration',
                  description: 'Connect your existing platforms in minutes with our simple setup process.',
                  delay: 100,
                },
                {
                  title: 'Scalable Solution',
                  description: 'Grow your business without limits. Our platform scales with your needs.',
                  delay: 200,
                },
                {
                  title: 'Cost Effective',
                  description: 'Save time and money with automated processes and reduced manual work.',
                  delay: 300,
                },
                {
                  title: 'Expert Support',
                  description: 'Get help from our dedicated support team whenever you need assistance.',
                  delay: 400,
                },
                {
                  title: 'Regular Updates',
                  description: 'Benefit from continuous improvements and new features added regularly.',
                  delay: 500,
                },
              ].map((reason, index) => (
                <div
                  key={index}
                  className={`rounded-2xl p-6 transition-all duration-500 hover:shadow-xl ${
                    isVisible['why-choose'] 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-10'
                  }`}
                  style={{
                    backgroundColor: themeColors.white,
                    animation: isVisible['why-choose'] 
                      ? `fadeInUp 0.6s ease-out ${reason.delay}ms both` 
                      : 'none',
                  }}
                  ref={(el) => {
                    if (el && index === 0) {
                      el.id = 'why-choose';
                      sectionRefs.current['why-choose'] = el;
                    }
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div 
                        className="w-14 h-14 rounded-xl flex items-center justify-center font-bold text-xl shadow-lg"
                        style={{ background: `linear-gradient(135deg, ${themeColors.limeGreen} 0%, ${themeColors.teal} 100%)`, color: themeColors.white }}
                      >
                        {index + 1}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 
                        className="text-xl font-bold mb-2"
                        style={{ color: themeColors.black }}
                      >
                        {reason.title}
                      </h3>
                      <p 
                        className="text-base leading-relaxed"
                        style={{ color: themeColors.gray }}
                      >
                        {reason.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mission, Vision, Promise Section */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                id: 'mission',
                title: 'Our Mission',
                content: [
                  'To empower Shopify and Etsy sellers with a reliable, automation-first integration platform that simplifies ecommerce management, prevents overselling, and drives business growth through smart synchronization.',
                  "We're not just building software - we're building trust, efficiency, and opportunity for every small business that dreams of growing globally.",
                ],
              },
              {
                id: 'vision',
                title: 'Our Vision',
                content: [
                  'To become the most trusted Shopify-Etsy integration provider globally - helping millions of entrepreneurs eliminate technical barriers, reach new customers, and focus on what truly matters: building creative, sustainable brands.',
                ],
              },
              {
                id: 'promise',
                title: 'Our Promise',
                content: [
                  'At EcomSyncify Technologies LLP, we stand for three core values:',
                ],
                additional: [
                  'We promise our users a seamless integration experience that just works - no lag, no confusion, no errors.',
                  'With our platform, you stay confident that your inventory, orders, and product data are always in perfect sync.',
                ],
              },
            ].map((section) => (
              <div
                key={section.id}
                className={`rounded-2xl p-8 transition-all duration-1000 ${
                  isVisible[section.id] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{
                  backgroundColor: themeColors.grayLight,
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
                }}
                ref={(el) => {
                  if (el) {
                    el.id = section.id;
                    sectionRefs.current[section.id] = el;
                  }
                }}
              >
                <h3 
                  className="text-3xl font-bold mb-6"
                  style={{ color: themeColors.black }}
                >
                  {section.title}
                </h3>
                <div className="space-y-4">
                  {section.content.map((text, i) => (
                    <p 
                      key={i}
                      className="leading-relaxed text-base"
                      style={{ color: themeColors.gray }}
                    >
                      {text}
                    </p>
                  ))}
                </div>
                {section.additional && (
                  <div className="mt-6 space-y-4">
                    {section.additional.map((text, i) => (
                      <p 
                        key={i}
                        className="leading-relaxed text-base"
                        style={{ color: themeColors.gray }}
                      >
                        {text}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            ))}
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
