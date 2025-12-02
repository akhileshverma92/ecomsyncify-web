import { useState, useEffect, useRef } from 'react';
import { ShoppingCart, Cog, Check, ArrowRight, Search, Sparkles } from 'lucide-react';
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
          background: `linear-gradient(135deg, ${themeColors.lightSkyBlue || '#87CEEB'} 0%, ${themeColors.skyBlueLight || '#B0E0E6'} 50%, ${themeColors.skyBlueLighter || '#E0F6FF'} 100%)`,
        }}
      >
        <div className="max-w-7xl mx-auto w-full py-8 sm:py-12 lg:py-16">
          <div
            className={`flex flex-col md:flex-row items-center text-center md:text-left transition-all duration-1000 ${isVisible['hero'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            ref={(el) => {
              if (el) {
                el.id = 'hero';
                sectionRefs.current['hero'] = el;
              }
            }}
          >
            {/* Left Column - Text and Button (Mobile: Top) */}
            <div className="w-full md:w-1/2 md:pr-8 lg:pr-12 mb-6 md:mb-0 md:pt-10">
              {/* Heading */}
              <div
                className="mb-4 sm:mb-6 md:mb-8"
                style={{ color: themeColors.textDark }}
              >
                <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3 leading-tight'>
                  Automate Marketplace Integrations
                </h1>
                <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 md:mb-5 leading-tight'>
                  Sync Smarter, Sell Everywhere.
                </h2>
                <p className='text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed'>
                  EcomSyncify empowers Shopify merchants with seamless integrations, automated data sync, and reliable multi-channel selling solutions.
                </p>
              </div>

              {/* Button */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <button
                  onClick={() => {
                    navigate('/contact');
                  }}
                  className="px-6 py-3 sm:px-8 sm:py-3.5 rounded-full text-sm sm:text-base font-semibold flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95 bg-gradient-to-r from-green-500 to-blue-500 text-white"
                >
                  Contact Our Expert{" "}
                  <span className="inline-flex items-center justify-center bg-white p-2 rounded-full -rotate-45">
                    <ArrowRight size={18} className="text-black sm:w-5 sm:h-5" />
                  </span>
                </button>
              </div>
            </div>

            {/* Right Column - Image (Mobile: Bottom) */}
            <div
              className={`w-full md:w-1/2 transition-all duration-1000 delay-300 ${isVisible['image1'] ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}
              ref={(el) => {
                if (el) {
                  el.id = 'image1';
                  sectionRefs.current['image1'] = el;
                }
              }}
            >
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
            className={`relative transition-all duration-1000 ${isVisible['platforms'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
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
                  { name: 'Amazon', type: 'Marketplace', delay: 200, status: "launching soon" },
                  { name: 'Walmart', type: 'Marketplace', delay: 300, status: "launching soon" },
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
                    {platform.status === 'launching soon' && (
                      <div
                        className="absolute top-0.5 right-0.5 sm:top-1 sm:right-1 px-1.5 py-0.5 rounded-full text-[9px] sm:text-[10px] font-semibold transition-all duration-300 group-hover:scale-110"
                        style={{
                          backgroundColor: themeColors.limeGreen,
                          color: themeColors.white,
                        }}
                      >
                        launching soon
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
              className={`transition-all duration-1000 ${isVisible['about'] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
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
                <span className="font-bold text-black transition-colors duration-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-green-500 hover:to-blue-500">
                  EcomSyncify Technologies
                </span>{" "}
                builds smart eCommerce integration tools that make multi-channel selling simple. We build intelligent e-commerce automation solutions that eliminate repetitive tasks and unlock efficiency.
                With fast, reliable integrations and a customer-first approach, we enable online retailers to save time, reduce errors, and scale effortlessly..

              </p>

            </div>
            <div
              className={`rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 transition-all duration-1000 delay-300 order-first md:order-last ${isVisible['about'] ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                }`}

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
              radial-gradient(circle 2px at 2px 2px, ${themeColors.skyBlueLight || '#B0E0E6'}40 1px, transparent 0),
              radial-gradient(circle 2px at 2px 2px, ${themeColors.teal}30 1px, transparent 0),
              radial-gradient(circle 2px at 2px 2px, ${themeColors.limeGreen}25 1px, transparent 0)
            `,
            backgroundSize: "48px 48px, 48px 48px, 100% 100%, 100% 100%, 100% 100%, 30px 30px, 30px 30px, 30px 30px",
            backgroundPosition: "0 0, 0 0, 0 0, 0 0, 0 0, 0 0, 15px 15px, 15px 15px, 30px 30px",
          }}
        />
        <div className="max-w-7xl mx-auto relative z-10">
          <div
            className={`text-center mb-8 sm:mb-12 transition-all duration-1000 ${isVisible['expertise'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
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
                className={`service-card rounded-xl p-4 sm:p-6 md:p-8 transition-all duration-500 relative cursor-pointer touch-manipulation ${isVisible['expertise']
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





      {/* Support Section */}
      <section
        className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-start">
            <div
              className={`support-card rounded-xl sm:rounded-2xl  sm:p-6 transition-all duration-1000 cursor-pointer order-2 md:order-1 ${isVisible['support'] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                }`}
             
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
                className="rounded-lg -translate-y-5 w-full h-auto transition-all duration-500 hover:scale-105"
                style={{ filter: 'brightness(0.95) contrast(1.05)' }}
              />
            </div>
            <div
              className={`transition-all duration-1000 delay-300 order-1 md:order-2 ${isVisible['support'] ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
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
                At EcomSyncify, support isn’t just a feature — it’s a commitment. Our experts are available 24/7, ensuring you always have someone to rely on whenever you face a technical challenge or need quick guidance.
                From integration help to workflow optimization, our team works side-by-side with you to keep your store running smoothly. We don’t offer scripted answers — we provide real solutions from real people who genuinely want to help your business succeed. <br />
               <div 
              className="p-2 mt-3 sm:p-4 md:p-5 relative rounded-xl sm:rounded-2xl border-l-4"
              style={{ 
                backgroundColor: themeColors.grayLight,
                borderLeftColor: themeColors.teal,
              }}
            >
              <div className="flex items-start gap-2  sm:gap-3">
                <Sparkles size={20} className="sm:w-6 sm:h-6 flex-shrink-0" style={{ color: themeColors.teal, marginTop: '2px' }} />
                <p 
                  className="text-sm sm:text-base md:text-lg lg:text-xl italic leading-relaxed"
                  style={{ color: '#000000' }}
                >
                  Your success is our priority, day and night.

                </p>
              </div>
            </div>
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
            background: linear-gradient(to top, rgba(135, 206, 235, 0.3) 0%, rgba(176, 224, 230, 0.35) 40%, rgba(224, 246, 255, 0.3) 70%, transparent 100%);
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
          position: relative;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          will-change: transform, box-shadow, border-color;
          overflow: visible;
        }

        .platform-card::before,
        .platform-card::after {
          content: '';
          position: absolute;
          pointer-events: none;
          z-index: 1;
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .platform-card::before {
          top: -2px;
          right: -2px;
          width: 0;
          height: 0;
          border-top: 2px solid ${themeColors.blue};
          border-right: 2px solid ${themeColors.blue};
          border-bottom: none;
          border-left: none;
        }

        .platform-card::after {
          bottom: -2px;
          left: -2px;
          width: 0;
          height: 0;
          border-bottom: 2px solid ${themeColors.blue};
          border-left: 2px solid ${themeColors.blue};
          border-top: none;
          border-right: none;
        }

        .platform-card:hover::before {
          width: calc(100% + 2px);
          height: calc(100% + 2px);
        }

        .platform-card:hover::after {
          width: calc(100% + 2px);
          height: calc(100% + 2px);
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
          height: calc(100% + 2px);
        }

        .service-card:hover::after {
          width: calc(100% + 2px);
          height: calc(100% + 2px);
        }

        .service-card:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
        }

          .service-card:hover h3 {
            background: linear-gradient(135deg, ${themeColors.lightSkyBlue || '#87CEEB'} 0%, ${themeColors.skyBlueLight || '#B0E0E6'} 50%, ${themeColors.skyBlueLighter || '#E0F6FF'} 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }

        .support-card {
          position: relative;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          will-change: transform, box-shadow, border-color;
          overflow: visible;
        }

        .support-card::before,
        .support-card::after {
          content: '';
          position: absolute;
          pointer-events: none;
          z-index: 1;
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .support-card::before {
          top: -2px;
          right: -2px;
          width: 0;
          height: 0;
          border-top: 2px solid ${themeColors.blue};
          border-right: 2px solid ${themeColors.blue};
          border-bottom: none;
          border-left: none;
        }

        .support-card::after {
          bottom: -2px;
          left: -2px;
          width: 0;
          height: 0;
          border-bottom: 2px solid ${themeColors.blue};
          border-left: 2px solid ${themeColors.blue};
          border-top: none;
          border-right: none;
        }

        .support-card:hover::before {
          width: calc(100% + 2px);
          height: calc(100% + 2px);
        }

        .support-card:hover::after {
          width: calc(100% + 2px);
          height: calc(100% + 2px);
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
          overflow: visible;
        }

        .why-choose-card::before,
        .why-choose-card::after {
          content: '';
          position: absolute;
          pointer-events: none;
          z-index: 1;
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .why-choose-card::before {
          top: -2px;
          right: -2px;
          width: 0;
          height: 0;
          border-top: 2px solid ${themeColors.blue};
          border-right: 2px solid ${themeColors.blue};
          border-bottom: none;
          border-left: none;
        }

        .why-choose-card::after {
          bottom: -2px;
          left: -2px;
          width: 0;
          height: 0;
          border-bottom: 2px solid ${themeColors.blue};
          border-left: 2px solid ${themeColors.blue};
          border-top: none;
          border-right: none;
        }

        .why-choose-card:hover::before {
          width: calc(100% + 2px);
          height: calc(100% + 2px);
        }

        .why-choose-card:hover::after {
          width: calc(100% + 2px);
          height: calc(100% + 2px);
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