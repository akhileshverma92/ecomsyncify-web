import { useState, useEffect, useRef } from 'react';
import { ShoppingCart, Cog, Check, ArrowRight, Search, Users, Rocket, Award, Shield } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { themeColors } from '../../theme/themeColors';

export default function Home() {
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({});
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const navigate = useNavigate();

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

  return (
    <div className="min-h-screen overflow-x-hidden" >
    

      {/* Hero Section - All Content Visible in One Screen */}
      <section 
        id="home" 
        className="min-h-screen flex items-center px-4 sm:px-6 lg:px-8 relative overflow-hidden hero-glow"
        style={{ 
          background: `linear-gradient(135deg, ${themeColors.blue} 0%, ${themeColors.limeGreen} 50%, ${themeColors.teal} 100%)`,
        }}
      >
        <div className="max-w-7xl mx-auto w-full py-8 sm:py-12 lg:py-16">
          <div 
            className={`flex flex-col items-center text-center transition-all duration-1000 ${
              isVisible['hero'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            ref={(el) => {
              if (el) {
                el.id = 'hero';
                sectionRefs.current['hero'] = el;
              }
            }}
          >
            {/* Top - Text Content */}
            <div className="space-y-3 sm:space-y-4 md:space-y-5 w-full max-w-4xl mb-6 sm:mb-8 md:mb-10">
              <h3
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
                style={{ color: themeColors.white }}
              >
                The Simplest Way to Automate Marketplace Integrations Across E-commerce Platforms
              </h3>
              <p 
                className="text-sm sm:text-base md:text-lg leading-relaxed px-4"
                style={{ color: themeColors.white, opacity: 0.95 }}
              >
                EcomSyncify Technologies is a leading Shopify integration and automation company helping U.S. businesses grow across global marketplaces with seamless Shopify–Etsy integration, smart data sync, and multi-channel selling solutions.
              </p>
            </div>

            {/* Center - Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8 md:mb-10">
              <button 
                onClick={() => {
                  navigate('/product');
                }}
                className="px-6 py-3 sm:px-8 sm:py-3.5 rounded-lg text-sm sm:text-base font-semibold flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95"
                style={{ 
                  backgroundColor: themeColors.white,
                  color: themeColors.black,
                  minHeight: '44px',
                }}
              >
                Let's Talk Integration <ArrowRight size={18} className="sm:w-5 sm:h-5" />
              </button>
              <button 
                onClick={() => {
                  navigate('/about-us');
                }}
                className="px-6 py-3 sm:px-8 sm:py-3.5 rounded-lg text-sm sm:text-base cursor-pointer font-semibold transition-all duration-300 border-2 active:scale-95"
                style={{
                  backgroundColor: 'transparent',
                  color: themeColors.white,
                  borderColor: themeColors.white,
                  minHeight: '44px',
                }}
              >
                About Us
              </button>
            </div>

            {/* Bottom - Image */}
            <div 
              className={`transition-all duration-1000 delay-300 w-full max-w-3xl ${
                isVisible['image1'] ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
              ref={(el) => {
                if (el) {
                  el.id = 'image1';
                  sectionRefs.current['image1'] = el;
                }
              }}
            >
              {/* Main Image - No Background */}
              <div className="relative w-full">
                <img 
                  src="/image.png"
                  alt="E-commerce Integration Platform" 
                  className="w-full h-auto transition-all duration-500 max-w-full" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Cards Section - Between Hero and About */}
      <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: themeColors.white }}>
        <div className="max-w-7xl mx-auto">
          <div 
            className={`relative transition-all duration-1000 ${
              isVisible['platforms'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            ref={(el) => {
              if (el) {
                el.id = 'platforms';
                sectionRefs.current['platforms'] = el;
              }
            }}
          >
            <div 
              className="platform-cards-container rounded-xl sm:rounded-2xl shadow-lg p-3 sm:p-4 md:p-6"
              style={{
                backgroundColor: themeColors.white,
                border: `1px solid ${themeColors.grayLight}`,
              }}
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 md:gap-4">
                {[
                  { name: 'Shopify', type: 'E-commerce', delay: 0 },
                  { name: 'Etsy', type: 'Marketplace', delay: 100 },
                  { name: 'Amazon', type: 'Marketplace', delay: 200, status: "coming soon" },
                  { name: 'Walmart', type: 'Marketplace', delay: 300, status: "coming soon" },
                ].map((platform) => (
                  <div
                    key={platform.name}
                    className="platform-card rounded-lg p-2.5 sm:p-3 md:p-4 text-center relative cursor-pointer group touch-manipulation"
                    style={{
                      backgroundColor: themeColors.white,
                      border: `1px solid ${themeColors.grayLight}`,
                      minHeight: '80px',
                      animation: isVisible['platforms'] 
                        ? `fadeInUp 0.6s ease-out ${platform.delay}ms both` 
                        : 'none',
                    }}
                  >
                    {/* Coming Soon Badge */}
                    {platform.status === 'coming soon' && (
                      <div
                        className="absolute top-0.5 right-0.5 sm:top-1 sm:right-1 px-1.5 py-0.5 rounded-full text-[9px] sm:text-[10px] font-semibold transition-all duration-300 group-hover:scale-110"
                        style={{
                          backgroundColor: themeColors.limeGreen,
                          color: themeColors.white,
                        }}
                      >
                        Coming Soon
                      </div>
                    )}
                    <div 
                      className="platform-name text-xs sm:text-sm md:text-base font-bold mb-0.5 sm:mb-1 transition-all duration-300"
                      style={{ color: themeColors.black }}
                    >
                      {platform.name}
                    </div>
                    <div 
                      className="platform-type text-[9px] sm:text-[10px] md:text-xs transition-all duration-300"
                      style={{ color: themeColors.teal }}
                    >
                      {platform.type}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section 
        className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
            <div
              className={`transition-all duration-1000 ${
                isVisible['about'] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
              ref={(el) => {
                if (el) {
                  el.id = 'about';
                  sectionRefs.current['about'] = el;
                }
              }}
            >
              <h2 
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight"
                style={{ color: themeColors.black }}
              >
                About EcomSyncify Technologies
              </h2>
              <p 
                className="mb-3 sm:mb-4 text-sm sm:text-base leading-relaxed"
                style={{ color: themeColors.gray }}
              >
                At EcomSyncify Technologies, we design intelligent eCommerce integration solutions that simplify online selling. Our mission is to help Shopify merchants and online retailers save time, automate operations, and scale faster.
              </p>
              <p 
                className="mb-3 sm:mb-4 text-sm sm:text-base leading-relaxed"
                style={{ color: themeColors.gray }}
              >
                We specialize in creating data synchronization tools, custom Shopify apps, and API-based integrations that connect stores with top marketplaces like Etsy, Walmart, and Amazon.
              </p>
              <p 
                className="text-sm sm:text-base leading-relaxed"
                style={{ color: themeColors.gray }}
              >
                Our expertise ensures real-time product and inventory sync — empowering businesses to operate smarter in the digital commerce era.
              </p>
            </div>
            <div 
              className={`rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 transition-all duration-1000 delay-300 order-first md:order-last ${
                isVisible['about'] ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}
              style={{
                backgroundColor: themeColors.grayLight,
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                alt="Team collaboration"
                className="rounded-lg w-full h-auto transition-all duration-500 hover:scale-105"
                style={{ filter: 'brightness(0.95) contrast(1.05)' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Expertise */}
      <section 
        id="services" 
        className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 relative"
        style={{ backgroundColor: themeColors.grayLight }}
      >
        {/* Dual Gradient Overlay Background */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(229,231,235,0.8) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(229,231,235,0.8) 1px, transparent 1px),
              radial-gradient(circle 500px at 20% 80%, ${themeColors.teal}30, transparent),
              radial-gradient(circle 500px at 80% 20%, ${themeColors.blue}30, transparent),
              radial-gradient(circle 500px at 50% 50%, ${themeColors.limeGreen}20, transparent),
              radial-gradient(circle 2px at 2px 2px, ${themeColors.lightBlue}40 1px, transparent 0),
              radial-gradient(circle 2px at 2px 2px, ${themeColors.teal}30 1px, transparent 0),
              radial-gradient(circle 2px at 2px 2px, ${themeColors.limeGreen}25 1px, transparent 0)
            `,
            backgroundSize: "48px 48px, 48px 48px, 100% 100%, 100% 100%, 100% 100%, 30px 30px, 30px 30px, 30px 30px",
            backgroundPosition: "0 0, 0 0, 0 0, 0 0, 0 0, 0 0, 15px 15px, 15px 15px, 30px 30px",
          }}
        />
        <div className="max-w-7xl mx-auto relative z-10">
          <div 
            className={`text-center mb-8 sm:mb-12 transition-all duration-1000 ${
              isVisible['expertise'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            ref={(el) => {
              if (el) {
                el.id = 'expertise';
                sectionRefs.current['expertise'] = el;
              }
            }}
          >
            <h2 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4"
              style={{ color: themeColors.black }}
            >
              Our Core Expertise
            </h2>
            <p 
              className="text-base sm:text-lg md:text-xl px-4"
              style={{ color: themeColors.gray }}
            >
              Comprehensive solutions for modern e-commerce businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {[
              {
                icon: <ShoppingCart size={32} />,
                title: 'E-Commerce Integration Solutions',
                description: 'Seamlessly connect Shopify stores with leading marketplaces to simplify product uploads, inventory management, and order tracking.',
                features: ['Multi-channel sync', 'Real-time updates', 'Automated workflows'],
                delay: 0,
              },
              {
                icon: <Cog size={32} />,
                title: 'Shopify App Development Services',
                description: 'Custom Shopify app development for automation, workflow management, and third-party integrations.',
                features: ['Custom solutions', 'API integrations', 'Scalable architecture'],
                delay: 200,
                status: 'coming soon',
              },
              {
                icon: <Search size={32} />,
                title: 'SEO Services',
                description: 'Comprehensive SEO solutions to improve your online visibility, drive organic traffic, and boost search engine rankings for your e-commerce business.',
                features: ['Keyword optimization', 'On-page SEO', 'Performance analytics'],
                delay: 400,
                status: 'coming soon',
              },
            ].map((service, idx) => (
              <div
                key={idx}
                className={`service-card rounded-xl p-4 sm:p-6 md:p-8 transition-all duration-500 relative cursor-pointer touch-manipulation ${
                  isVisible['expertise']
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                }`}
                style={{
                  backgroundColor: themeColors.white,
                  border: `1px solid ${themeColors.grayLight}`,
                  animation: isVisible['expertise'] 
                    ? `fadeInUp 0.8s ease-out ${service.delay}ms both` 
                    : 'none',
                }}
              >
                {/* Coming Soon Badge */}
                {service.status === 'coming soon' && (
                  <div
                    className="absolute top-1 right-1 sm:top-2 sm:right-2 px-1.5 py-0.5 rounded-full text-[9px] sm:text-[10px] font-semibold"
                    style={{
                      backgroundColor: themeColors.limeGreen,
                      color: themeColors.white,
                    }}
                  >
                    Coming Soon
                  </div>
                )}
                {/* Icon and Heading in Same Row */}
                <div className="flex items-start sm:items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <div 
                    className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300"
                    style={{ 
                      background: `linear-gradient(135deg, ${themeColors.blue} 0%, ${themeColors.limeGreen} 50%, ${themeColors.teal} 100%)`,
                      color: themeColors.white 
                    }}
                  >
                    {service.icon}
                  </div>
                  <h3 
                    className="text-lg sm:text-xl md:text-2xl font-bold flex-1 leading-tight"
                    style={{ color: themeColors.black }}
                  >
                    {service.title}
                  </h3>
                </div>
                <p 
                  className="mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed"
                  style={{ color: themeColors.gray }}
                >
                  {service.description}
                </p>
                <ul className="space-y-2 sm:space-y-3">
                  {service.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2">
                      <Check 
                        size={18} 
                        className="mt-0.5 sm:mt-1 flex-shrink-0" 
                        style={{ color: themeColors.teal }}
                      />
                      <span className="text-sm sm:text-base" style={{ color: themeColors.black }}>{feature}</span>
                    </li>
                  ))}
                </ul>
               
              </div>
            ))}
          </div>

          
        </div>
      </section>



      {/* Why Choose Us Section */}
      <section 
        className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8"
        style={{ backgroundColor: themeColors.white }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-start">
            {/* Left Side - Text Content */}
            <div
              className={`transition-all duration-1000 ${
                isVisible['why-choose'] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
              ref={(el) => {
                if (el) {
                  el.id = 'why-choose';
                  sectionRefs.current['why-choose'] = el;
                }
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div 
                  className="h-0.5 w-12"
                  style={{ backgroundColor: themeColors.teal }}
                ></div>
                <span 
                  className="text-sm font-semibold uppercase tracking-wider"
                  style={{ color: themeColors.gray }}
                >
                  Why Choose Us
                </span>
              </div>
              <h2 
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight"
                style={{ color: themeColors.black }}
              >
                We Are Very Different From Others E-commerce Solutions
              </h2>
              <p 
                className="text-sm sm:text-base md:text-lg leading-relaxed"
                style={{ color: themeColors.gray }}
              >
                We bring together a unique, multidisciplinary team of professionals to create solutions for our clients' e-commerce integration needs. Our approach combines technical expertise with business acumen to deliver results that matter.
              </p>
            </div>

            {/* Right Side - 2x2 Grid of Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {[
                {
                  icon: <Users size={32} />,
                  title: 'Dedicated Team',
                  description: 'We are a well-knit team including Project Managers, Developers, Integration Specialists, and Support Professionals to take care of your e-commerce integration needs.',
                  gradient: false,
                  delay: 0,
                },
                {
                  icon: <Rocket size={32} />,
                  title: 'Fast Delivery',
                  description: 'Common set of processes and tools across our delivery center. Robust processes provide a quality delivery model with quick turnaround times.',
                  gradient: false,
                  delay: 100,
                },
                {
                  icon: <Award size={32} />,
                  title: 'Best Quality',
                  description: 'We deliver quality solutions to our customers by integrating a wide range of capabilities. Expertise on diverse technologies and platforms.',
                  gradient: false,
                  delay: 200,
                },
                {
                  icon: <Shield size={32} />,
                  title: 'Reliable & Secure',
                  description: 'Enterprise-grade security and 99.9% uptime guarantee. Your data is protected with industry-standard encryption and backup systems.',
                  gradient: false,
                  delay: 300,
                },
              ].map((feature, idx) => (
                <div
                  key={idx}
                  data-gradient={feature.gradient}
                  className={`why-choose-card rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 touch-manipulation ${
                    isVisible['why-choose-cards'] 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-10'
                  }`}
                  style={{
                    backgroundColor: feature.gradient 
                      ? 'transparent' 
                      : themeColors.white,
                    background: feature.gradient 
                      ? `linear-gradient(135deg, ${themeColors.blue} 0%, ${themeColors.limeGreen} 50%, ${themeColors.teal} 100%)`
                      : themeColors.white,
                    border: feature.gradient ? 'none' : `1px solid ${themeColors.grayLight}`,
                    animation: isVisible['why-choose-cards'] 
                      ? `fadeInUp 0.6s ease-out ${feature.delay}ms both` 
                      : 'none',
                  }}
                  ref={(el) => {
                    if (el && idx === 0) {
                      el.id = 'why-choose-cards';
                      sectionRefs.current['why-choose-cards'] = el;
                    }
                  }}
                >
                  <div 
                    className="why-choose-icon w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl flex items-center justify-center mb-3 sm:mb-4 transition-all duration-500"
                    style={{
                      backgroundColor: feature.gradient 
                        ? 'rgba(255, 255, 255, 0.2)' 
                        : themeColors.grayLight,
                      color: feature.gradient 
                        ? themeColors.white 
                        : themeColors.teal,
                    }}
                  >
                    {feature.icon}
                  </div>
                  <h3 
                    className="why-choose-title text-lg sm:text-xl font-bold mb-2 sm:mb-3 transition-all duration-500"
                    style={{ 
                      color: feature.gradient 
                        ? themeColors.white 
                        : themeColors.black 
                    }}
                  >
                    {feature.title}
                  </h3>
                  <p 
                    className="why-choose-description text-xs sm:text-sm leading-relaxed transition-all duration-500"
                    style={{ 
                      color: feature.gradient 
                        ? 'rgba(255, 255, 255, 0.9)' 
                        : themeColors.gray 
                    }}
                  >
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section 
        className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8"
        style={{ backgroundColor: themeColors.white }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-start">
            <div 
              className={`support-card rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 transition-all duration-1000 cursor-pointer order-2 md:order-1 ${
                isVisible['support'] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
              style={{
                backgroundColor: themeColors.grayLight,
                border: `1px solid ${themeColors.grayLight}`,
              }}
              ref={(el) => {
                if (el) {
                  el.id = 'support';
                  sectionRefs.current['support'] = el;
                }
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800&q=80"
                alt="Support team"
                className="rounded-lg w-full h-auto transition-all duration-500 hover:scale-105"
                style={{ filter: 'brightness(0.95) contrast(1.05)' }}
              />
            </div>
            <div
              className={`transition-all duration-1000 delay-300 order-1 md:order-2 ${
                isVisible['support'] ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}
            >
              <h2 
                className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 leading-tight"
                style={{ color: themeColors.black }}
              >
                24/7 Support, Delivered by People Who Care!
              </h2>
              <p 
                className="mb-6 sm:mb-8 text-sm sm:text-base leading-relaxed"
                style={{ color: themeColors.gray }}
              >
                Our experts are ready to help you navigate any technical challenges, solve integration issues, and keep your business running smoothly. Whether you're just starting or scaling up, we're here for you as a trusted ally.
              </p>
             
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

        .hero-glow::before {
          content: '';
          position: absolute;
          bottom: -100px;
          left: 0;
          width: 100%;
          height: 300px;
            background: linear-gradient(to top, rgba(34, 197, 94, 0.3) 0%, rgba(132, 204, 22, 0.35) 40%, rgba(20, 184, 166, 0.3) 70%, transparent 100%);
          animation: glowRise 5s ease-in-out infinite;
          z-index: 0;
          pointer-events: none;
          filter: blur(30px);
        }

        @keyframes glowRise {
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

        .hero-glow > * {
          position: relative;
          z-index: 1;
        }

        .platform-card {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          will-change: transform, box-shadow, border-color;
        }

        .platform-card:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(20, 184, 166, 0.25);
          border-color: #14b8a6;
        }

          .platform-card:hover .platform-name {
            background: linear-gradient(135deg, #22c55e 0%, #84cc16 50%, #14b8a6 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }

        .platform-card:hover .platform-type {
          color: #22c55e;
          font-weight: 600;
        }

        .service-card {
          position: relative;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          will-change: transform, box-shadow, border-color;
          overflow: visible;
        }

        .service-card::before,
        .service-card::after {
          content: '';
          position: absolute;
          pointer-events: none;
          z-index: 1;
          border: 2px solid ${themeColors.blue};
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .service-card::before {
          top: -2px;
          right: -2px;
          width: 0;
          height: 0;
          border-top: 2px solid ${themeColors.blue};
          border-right: 2px solid ${themeColors.blue};
          border-bottom: none;
          border-left: none;
        }

        .service-card::after {
          bottom: -2px;
          left: -2px;
          width: 0;
          height: 0;
          border-bottom: 2px solid ${themeColors.blue};
          border-left: 2px solid ${themeColors.blue};
          border-top: none;
          border-right: none;
        }

        .service-card:hover::before {
          width: calc(100% + 2px);
          height: calc(50% + 2px);
        }

        .service-card:hover::after {
          width: calc(100% + 2px);
          height: calc(50% + 2px);
        }

        .service-card:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
        }

          .service-card:hover h3 {
            background: linear-gradient(135deg, ${themeColors.blue} 0%, ${themeColors.lightBlue} 50%, ${themeColors.teal} 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }

        .support-card {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          will-change: transform, box-shadow, border-color;
        }

        .support-card:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15), 0 0 0 2px rgba(34, 197, 94, 0.3);
          border-color: #22c55e;
        }

        .platform-cards-container {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .platform-cards-container:hover {
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15), 0 0 0 2px rgba(34, 197, 94, 0.3);
          border-color: #22c55e;
        }

        .why-choose-card {
          position: relative;
          overflow: hidden;
        }

        .why-choose-card:hover {
          background: linear-gradient(135deg, ${themeColors.blue} 0%, ${themeColors.limeGreen} 50%, ${themeColors.teal} 100%) !important;
          border: none !important;
        }

        .why-choose-card:hover .why-choose-icon {
          background-color: rgba(255, 255, 255, 0.2) !important;
          color: ${themeColors.white} !important;
        }

        .why-choose-card:hover .why-choose-title {
          color: ${themeColors.white} !important;
        }

        .why-choose-card:hover .why-choose-description {
          color: rgba(255, 255, 255, 0.9) !important;
        }
      `}</style>
    </div>
  );
}
