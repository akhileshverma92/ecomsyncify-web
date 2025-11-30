import { useState, useEffect, useRef } from 'react';
import { RefreshCw, Package, ShoppingCart, BarChart3, TrendingUp, Users, Award, Globe, Sparkles, Target, Handshake, Eye } from 'lucide-react';
import { themeColors } from '../../theme/themeColors';

export default function AboutUs() {
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
        className="pt-20 sm:pt-24 md:pt-28 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
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
            background: `linear-gradient(135deg, ${themeColors.blue}CC 0%, ${themeColors.limeGreen}CC 50%, ${themeColors.teal}CC 100%)`,
          }}
        ></div>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full opacity-10" style={{ backgroundColor: themeColors.white }}></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full opacity-10" style={{ backgroundColor: themeColors.white }}></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 rounded-full opacity-10" style={{ backgroundColor: themeColors.white }}></div>
        <div className="absolute top-1/3 right-1/4 w-20 h-20 rounded-full opacity-10" style={{ backgroundColor: themeColors.white }}></div>
        
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
            <h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight px-4"
              style={{ color: themeColors.white }}
            >
              About EcomSyncify Technologies
            </h1>
            <p 
              className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 leading-relaxed max-w-3xl mx-auto px-4"
              style={{ color: themeColors.white, opacity: 0.95 }}
            >
              Empowering Shopify–Etsy Sellers with Smarter Automation
            </p>
          </div>
        </div>
      </section>

      {/* Main About Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: themeColors.white }}>
        <div className="max-w-5xl mx-auto">
          <div 
            className={`mb-12 sm:mb-16 transition-all duration-1000 ${
              isVisible['intro'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            ref={(el) => {
              if (el) {
                el.id = 'intro';
                sectionRefs.current['intro'] = el;
              }
            }}
          >
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-16 lg:gap-24 items-start mb-8 sm:mb-12">
               {/* Right Side - Images with Modern Layout (Stacked with 1/3 Overlap) */}
               <div className="relative order-2 md:order-1" style={{ minHeight: '300px', height: 'auto' }}>
                {/* Mobile: Single Image (card hidden on mobile) */}
                <div className="md:hidden">
                  <div 
                    className="modern-image-card rounded-xl overflow-hidden relative transition-all duration-500 hover:scale-105 hover:shadow-2xl"
                    style={{
                      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)',
                    }}
                  >
                    <img
                      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                      alt="Team collaboration"
                      className="w-full h-56 object-cover"
                    />
                    <div 
                      className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"
                    ></div>
                  </div>
                </div>

                {/* Desktop: Overlapping Layout */}
                <div className="hidden md:block relative" style={{ minHeight: '400px', height: 'auto' }}>
                  {/* Top Image - Larger, positioned behind */}
                  <div 
                    className="modern-image-card rounded-3xl overflow-hidden relative z-10 transition-all duration-500 hover:scale-105 hover:shadow-2xl"
                    style={{
                      boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)',
                      transform: 'translateX(20px)',
                    }}
                  >
                    <img
                      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                      alt="Team collaboration"
                      className="w-full h-64 md:h-80 object-cover"
                    />
                    <div 
                      className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"
                    ></div>
                  </div>
                  
                  {/* Bottom Image - Smaller, overlapping by 1/3 (positioned in front) */}
                  <div 
                    className="modern-image-card rounded-3xl overflow-hidden absolute z-20 transition-all duration-500 hover:scale-105 hover:shadow-2xl"
                    style={{
                      boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)',
                      bottom: '0',
                      right: '0',
                      width: '90%',
                      transform: 'translateX(90px) translateY(-50px)',
                      top: 'calc(66.67% - 20px)',
                    }}
                  >
                    <img
                      src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800&q=80"
                      alt="Team working together"
                      className="w-full h-56 md:h-72 object-cover"
                    />
                    <div 
                      className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"
                    ></div>
                  </div>

                  {/* Text Card Overlay - Overlapping both images */}
                  <div 
                    className="absolute z-30 rounded-2xl p-5 md:p-6 shadow-2xl transition-all duration-500 hover:scale-105"
                    style={{
                      backgroundColor: themeColors.white,
                      right: '10px',
                      top: '50%',
                      transform: 'translateY(-80%) translateX(80px)',
                      boxShadow: '0 25px 70px rgba(0, 0, 0, 0.2)',
                      maxWidth: '240px',
                    }}
                  >
                    <div 
                      className="text-2xl font-bold leading-tight mb-2"
                      style={{ color: themeColors.darkGreen || '#000000' }}
                    >
                      <div>6 Years Of</div>
                      <div style={{ color: themeColors.teal }}>Experience</div>
                    </div>
                    <p 
                      className="text-sm mt-2"
                      style={{ color: themeColors.gray }}
                    >
                      Delivering excellence in e-commerce solutions
                    </p>
                  </div>

                  {/* Decorative accent */}
                  <div 
                    className="absolute -top-4 -right-4 w-24 h-24 rounded-full opacity-20 z-0"
                    style={{
                      background: `linear-gradient(135deg, ${themeColors.limeGreen} 0%, ${themeColors.teal} 100%)`,
                    }}
                  ></div>
                </div>
              </div>
              {/* Left Side - Text Content */}
              <div className="order-1 md:order-2">
                <h2 
                  className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6"
                  style={{ color: themeColors.black }}
                >
                  About Us
                </h2>
                <p 
                  className="text-base sm:text-lg font-semibold mb-4 sm:mb-6"
                  style={{ color: themeColors.teal }}
                >
                  Helping E-commerce Businesses Scale with Ease
                </p>
                <p 
                  className="mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base md:text-lg lg:text-xl"
                  style={{ color: themeColors.gray }}
                >
                  At EcomSyncify Technologies LLP, we simplify the way merchants sell on Shopify and Etsy. Our mission is to eliminate the manual work, errors, and inefficiencies that come with managing two storefronts - and replace them with intelligent, automated, real-time synchronization.
                </p>
                <p 
                  className="mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base md:text-lg lg:text-xl"
                  style={{ color: themeColors.gray }}
                >
                  We help creative entrepreneurs, handmade product sellers, and DTC brands seamlessly connect their Shopify store with Etsy, enabling effortless product listings, instant inventory updates, and unified order management.
                </p>
                <p 
                  className="leading-relaxed text-sm sm:text-base md:text-lg lg:text-xl"
                  style={{ color: themeColors.gray }}
                >
                  Founded by a team of ecommerce professionals and developers, we experienced firsthand the challenges of managing multiple sales channels. This drove us to build a platform that solves these problems through smart integration, stable technology, and an obsessive focus on accuracy.
                </p>
              </div>

             
            </div>
            <div 
              className="p-4 sm:p-6 md:p-8 relative rounded-xl sm:rounded-2xl border-l-4"
              style={{ 
                backgroundColor: themeColors.grayLight,
                borderLeftColor: themeColors.teal,
              }}
            >
              <div className="flex items-start gap-3 sm:gap-4">
                <Sparkles size={24} className="sm:w-8 sm:h-8 flex-shrink-0" style={{ color: themeColors.teal, marginTop: '4px' }} />
                <p 
                  className="text-sm sm:text-base md:text-lg lg:text-xl italic leading-relaxed"
                  style={{ color: '#000000' }}
                >
                  No spreadsheets, no double entry - just automation that works quietly behind the scenes so you can focus on creativity, customers, and growth.
                </p>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div 
            className={`mb-12 sm:mb-16 md:mb-20 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 transition-all duration-1000 ${
              isVisible['stats'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            ref={(el) => {
              if (el) {
                el.id = 'stats';
                sectionRefs.current['stats'] = el;
              }
            }}
          >
            {[
              { icon: <Users size={32} />, number: '10K+', label: 'Active Users' },
              { icon: <Award size={32} />, number: '99.9%', label: 'Uptime' },
              { icon: <Globe size={32} />, number: '50+', label: 'Countries' },
              { icon: <TrendingUp size={32} />, number: '1M+', label: 'Orders Synced' },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="core-values-card text-center p-3 sm:p-4 md:p-6 rounded-xl sm:rounded-2xl border-2 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 touch-manipulation"
                style={{
                  backgroundColor: themeColors.white,
                  borderColor: themeColors.grayLight,
                }}
              >
                <div className="flex justify-center mb-2 sm:mb-4">
                  <div
                    className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-lg sm:rounded-xl flex items-center justify-center"
                    style={{
                      background: `linear-gradient(135deg, ${themeColors.limeGreen} 0%, ${themeColors.teal} 100%)`,
                      color: themeColors.white,
                    }}
                  >
                    {stat.icon}
                  </div>
                </div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2" style={{ color: themeColors.black }}>
                  {stat.number}
                </div>
                <div className="text-xs sm:text-sm font-medium" style={{ color: themeColors.gray }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

       

        {/* What We Do Section */}
          <div 
            className={`mb-12 sm:mb-16 md:mb-20 transition-all duration-1000 delay-300 ${
              isVisible['what'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            ref={(el) => {
              if (el) {
                el.id = 'what';
                sectionRefs.current['what'] = el;
              }
            }}
          >
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
              <h2 
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4"
                style={{ color: '#000000' }}
              >
                What We Do
              </h2>
              <p 
                className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto px-4"
                style={{ color: themeColors.gray }}
              >
                Comprehensive solutions designed to streamline your e-commerce operations
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
              {whatWeDo.map((item, index) => (
                <div
                  key={index}
                  className="what-we-do-card p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl border-2 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 relative overflow-visible touch-manipulation"
                  style={{
                    backgroundColor: themeColors.white,
                    borderColor: themeColors.grayLight,
                    animation: isVisible['what'] 
                      ? `fadeInUp 0.6s ease-out ${index * 100}ms both` 
                      : 'none',
                  }}
                >
                  <div className="flex items-start gap-4 sm:gap-6">
                    <div 
                      className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg"
                      style={{ background: `linear-gradient(135deg, ${themeColors.limeGreen} 0%, ${themeColors.teal} 100%)`, color: themeColors.white }}
                    >
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <h3 
                        className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3"
                        style={{ color: '#000000' }}
                      >
                        {item.title}
                      </h3>
                      <p 
                        className="leading-relaxed text-sm sm:text-base md:text-lg"
                        style={{ color: themeColors.gray }}
                      >
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          
          {/* Why Choose Us Section */}
          <div 
            className={`mb-12 sm:mb-16 md:mb-20 transition-all duration-1000 delay-400 ${
              isVisible['why-choose-header'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            ref={(el) => {
              if (el) {
                el.id = 'why-choose-header';
                sectionRefs.current['why-choose-header'] = el;
              }
            }}
          >
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
              <h2 
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4"
                style={{ color: themeColors.black }}
              >
                Why Choose Us?
              </h2>
              <p 
                className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto px-4"
                style={{ color: themeColors.gray }}
              >
                Discover what makes EcomSyncify the preferred choice for thousands of businesses worldwide
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12 md:mb-16">
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
                  className={`why-choose-about-card rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 border-2 touch-manipulation ${
                    isVisible['why-choose'] 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-10'
                  }`}
                  style={{
                    backgroundColor: themeColors.white,
                    borderColor: themeColors.grayLight,
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
                    animation: isVisible['why-choose'] 
                      ? `fadeInUp 0.6s ease-out ${reason.delay}ms both` 
                      : 'none',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = themeColors.teal;
                    e.currentTarget.style.boxShadow = `0 20px 40px rgba(20, 184, 166, 0.15)`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = themeColors.grayLight;
                    e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.05)';
                  }}
                  ref={(el) => {
                    if (el && index === 0) {
                      el.id = 'why-choose';
                      sectionRefs.current['why-choose'] = el;
                    }
                  }}
                >
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="flex-shrink-0">
                      <div 
                        className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl flex items-center justify-center font-bold text-lg sm:text-xl shadow-lg"
                        style={{ background: `linear-gradient(135deg, ${themeColors.limeGreen} 0%, ${themeColors.teal} 100%)`, color: themeColors.white }}
                      >
                        {index + 1}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 
                        className="text-lg sm:text-xl font-bold mb-1 sm:mb-2"
                        style={{ color: themeColors.black }}
                      >
                        {reason.title}
                      </h3>
                      <p 
                        className="text-sm sm:text-base leading-relaxed"
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
           <div className="mb-8 sm:mb-12">
            <div className="text-center mb-8 sm:mb-12">
              <h2 
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4"
                style={{ color: themeColors.black }}
              >
                Our Core Values
              </h2>
              <p 
                className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto px-4"
                style={{ color: themeColors.gray }}
              >
                The principles that guide everything we do
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {[
                {
                  id: 'mission',
                  title: 'Our Mission',
                  icon: <Target size={40} />,
                  content: [
                    'To empower Shopify and Etsy sellers with a reliable, automation-first integration platform that simplifies ecommerce management, prevents overselling, and drives business growth through smart synchronization.',
                    "We're not just building software - we're building trust, efficiency, and opportunity for every small business that dreams of growing globally.",
                  ],
                },
                {
                  id: 'vision',
                  title: 'Our Vision',
                  icon: <Eye size={40} />,
                  content: [
                    'To become the most trusted Shopify-Etsy integration provider globally - helping millions of entrepreneurs eliminate technical barriers, reach new customers, and focus on what truly matters: building creative, sustainable brands.',
                    'We envision a future where every small business owner can effortlessly manage multiple sales channels, expand their reach, and achieve their entrepreneurial dreams without being held back by technical complexity or operational inefficiencies.',
                  ],
                },
                {
                  id: 'promise',
                  title: 'Our Promise',
                  icon: <Handshake size={40} />,
                  content: [
                    'We promise our users a seamless integration experience that just works - no lag, no confusion, no errors. Your inventory, orders, and product data will always be in perfect sync across both platforms.',
                    'With EcomSyncify, you can focus on growing your business, creating amazing products, and serving your customers, while we handle the technical complexities behind the scenes.',
                  ],
                },
              ].map((section) => (
                <div
                  key={section.id}
                  className={`core-values-card rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 transition-all duration-1000 hover:shadow-xl hover:-translate-y-1 border-2 touch-manipulation ${
                    isVisible[section.id] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{
                    backgroundColor: themeColors.white,
                    borderColor: themeColors.grayLight,
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
                  }}
                  ref={(el) => {
                    if (el) {
                      el.id = section.id;
                      sectionRefs.current[section.id] = el;
                    }
                  }}
                >
                  {/* Icon and Heading in Same Line */}
                  <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                    <div 
                      className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{
                        background: `linear-gradient(135deg, ${themeColors.limeGreen} 0%, ${themeColors.teal} 100%)`,
                        color: themeColors.white,
                      }}
                    >
                      {section.icon}
                    </div>
                    <h3 
                      className="text-xl sm:text-2xl md:text-3xl font-bold flex-1 leading-tight"
                      style={{ color: themeColors.black }}
                    >
                      {section.title}
                    </h3>
                  </div>
                  <div className="space-y-3 sm:space-y-4">
                    {section.content.map((text, i) => (
                      <p 
                        key={i}
                        className="leading-relaxed text-sm sm:text-base"
                        style={{ color: themeColors.gray }}
                      >
                        {text}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
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

        .what-we-do-card {
          position: relative;
        }

        .what-we-do-card::before,
        .what-we-do-card::after {
          content: '';
          position: absolute;
          pointer-events: none;
          z-index: 1;
          border: 2px solid ${themeColors.teal};
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .what-we-do-card::before {
          top: -2px;
          right: -2px;
          width: 0;
          height: 0;
          border-top: 2px solid ${themeColors.teal};
          border-right: 2px solid ${themeColors.teal};
          border-bottom: none;
          border-left: none;
        }

        .what-we-do-card::after {
          bottom: -2px;
          left: -2px;
          width: 0;
          height: 0;
          border-bottom: 2px solid ${themeColors.teal};
          border-left: 2px solid ${themeColors.teal};
          border-top: none;
          border-right: none;
        }

        .what-we-do-card {
          overflow: visible;
        }

        .what-we-do-card:hover::before {
          width: calc(100% + 2px);
          height: calc(100% + 2px);
        }

        .what-we-do-card:hover::after {
          width: calc(100% + 2px);
          height: calc(100% + 2px);
        }

        /* Core Values Cards Border Animation */
        .core-values-card {
          position: relative;
          overflow: hidden;
        }

        .core-values-card::before,
        .core-values-card::after {
          content: '';
          position: absolute;
          pointer-events: none;
          z-index: 1;
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          opacity: 0;
          border-radius: inherit;
        }

        .core-values-card::before {
          top: 0;
          right: 0;
          width: 0;
          height: 0;
          border-top: 2px solid ${themeColors.blue};
          border-right: 2px solid ${themeColors.blue};
          border-bottom: none;
          border-left: none;
          border-top-right-radius: inherit;
          border-top-left-radius: 0;
          border-bottom-right-radius: 0;
          border-bottom-left-radius: 0;
        }

        .core-values-card::after {
          bottom: 0;
          left: 0;
          width: 0;
          height: 0;
          border-bottom: 2px solid ${themeColors.blue};
          border-left: 2px solid ${themeColors.blue};
          border-top: none;
          border-right: none;
          border-bottom-left-radius: inherit;
          border-top-left-radius: 0;
          border-top-right-radius: 0;
          border-bottom-right-radius: 0;
        }

        .core-values-card:hover::before {
          width: 100%;
          height: 50%;
          opacity: 1;
          border-top-left-radius: inherit;
        }

        .core-values-card:hover::after {
          width: 100%;
          height: 50%;
          opacity: 1;
          border-bottom-right-radius: inherit;
        }

        .modern-image-card {
          position: relative;
          overflow: hidden;
        }

        .modern-image-card img {
          transition: transform 0.5s ease;
        }

        .modern-image-card:hover img {
          transform: scale(1.1);
        }
      `}</style>
    </div>
  );
}
