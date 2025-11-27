import { useState, useEffect, useRef } from 'react';
import {  ShoppingCart, Cog, Check, ArrowRight, Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({});
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  // Color palette matching header logo theme (lime green to teal gradient)
  const themeColors = {
    limeGreen: '#84cc16', // Bright lime green from logo
    teal: '#14b8a6', // Teal/turquoise from logo
    black: '#000000',
    white: '#ffffff',
    gray: '#6b7280',
    grayLight: '#f3f4f6',
    grayDark: '#1f2937',
  };

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
      {/* Navigation */}
    

      {/* Hero Section */}
      <section 
        id="home" 
        className="pt-28 pb-12 px-4 relative overflow-hidden hero-glow"
        style={{ 
          background: `linear-gradient(135deg, ${themeColors.limeGreen} 0%, ${themeColors.teal} 100%)`,
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div 
            className={`text-center max-w-4xl mx-auto mb-12 transition-all duration-1000 ${
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
              Your Partner in E-Commerce Automation and Shopify Integrations
            </h1>
            <p 
              className="text-xl mb-8 leading-relaxed"
              style={{ color: themeColors.white, opacity: 0.95 }}
            >
              EcomSyncify Technologies is a leading Shopify integration and automation company helping U.S. businesses grow across global marketplaces with seamless Shopify–Etsy integration, smart data sync, and multi-channel selling solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="px-8 py-4 rounded-lg text-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-lg hover:scale-105"
                style={{ 
                  backgroundColor: themeColors.white,
                  color: themeColors.black,
                }}
              >
                Get Started <ArrowRight size={20} />
              </button>
              <button 
              onClick={() => {
                navigate('/contact');
              }}
                className="px-8 py-4 rounded-lg text-lg cursor-pointer font-semibold transition-all duration-300 hover:bg-white hover:bg-opacity-20"
                style={{
                  color: themeColors.white,
                }}
              >
                Contact Our Expert
              </button>
            </div>
          </div>

          {/* Platform Visualization */}
         
        </div>
        {/* Image Section */}
        <section 
        className='py-12 px-4'
      >
        <div 
          className={`flex justify-center items-center transition-all duration-1000 ${
            isVisible['image1'] ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
          ref={(el) => {
            if (el) {
              el.id = 'image1';
              sectionRefs.current['image1'] = el;
            }
          }}
        >
          <img 
           src="/image.png"
            alt="Team collaboration" 
            className="rounded-lg w-2/3 h-auto transition-all duration-500  mx-auto" 
           
          />
        </div>
      </section>
      <div 
            className={`relative max-w-4xl mx-auto transition-all duration-1000 delay-300 ${
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
              className="rounded-2xl shadow-2xl p-8"
              style={{
                backgroundColor: themeColors.white,
              }}
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { name: 'Shopify', type: 'E-commerce', delay: 0 },
                  { name: 'Etsy', type: 'Marketplace', delay: 100 ,
                  },
                  { name: 'Amazon', type: 'Marketplace', delay: 200 ,
                    status:"coming soon"
                  },
                  { name: 'Walmart', type: 'Marketplace', delay: 300 ,
                    status:"coming soon"
                  },
                ].map((platform) => (
                  <div
                    key={platform.name}
                    className="rounded-lg p-6 text-center transition-all duration-300 hover:shadow-lg relative"
                    style={{
                      backgroundColor:  themeColors.white,
                      background:  themeColors.white,
                      animation: isVisible['platforms'] 
                        ? `fadeInUp 0.6s ease-out ${platform.delay}ms both` 
                        : 'none',
                    }}
                  >
                    {/* Coming Soon Badge */}
                    {platform.status === 'coming soon' && (
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
                      className="text-2xl font-bold mb-2"
                      style={{ color: themeColors.black }}
                    >
                      {platform.name}
                    </div>
                    <div 
                      className="text-sm"
                      style={{ color: themeColors.teal }}
                    >
                      {platform.type}
                    </div>
                  </div>
                ))}
              </div>
              
            </div>
          </div>
      </section>
     
      
      {/* About Section */}
      <section 
        className="py-16 px-4"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
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
                className="text-4xl font-bold mb-6"
                style={{ color: themeColors.black }}
              >
                About EcomSyncify Technologies
              </h2>
              <p 
                className="mb-4 leading-relaxed"
                style={{ color: themeColors.gray }}
              >
                At EcomSyncify Technologies, we design intelligent eCommerce integration solutions that simplify online selling. Our mission is to help Shopify merchants and online retailers save time, automate operations, and scale faster.
              </p>
              <p 
                className="mb-4 leading-relaxed"
                style={{ color: themeColors.gray }}
              >
                We specialize in creating data synchronization tools, custom Shopify apps, and API-based integrations that connect stores with top marketplaces like Etsy, Walmart, and Amazon.
              </p>
              <p 
                className="leading-relaxed"
                style={{ color: themeColors.gray }}
              >
                Our expertise ensures real-time product and inventory sync — empowering businesses to operate smarter in the digital commerce era.
              </p>
            </div>
            <div 
              className={`rounded-2xl p-8 transition-all duration-1000 delay-300 ${
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
        className="py-16 px-4 relative"
        style={{ backgroundColor: themeColors.grayLight }}
      >
        {/* Dual Gradient Overlay Background */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(229,231,235,0.8) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(229,231,235,0.8) 1px, transparent 1px),
              radial-gradient(circle 500px at 20% 80%, rgba(139,92,246,0.3), transparent),
              radial-gradient(circle 500px at 80% 20%, rgba(59,130,246,0.3), transparent)
            `,
            backgroundSize: "48px 48px, 48px 48px, 100% 100%, 100% 100%",
          }}
        />
        <div className="max-w-7xl mx-auto relative z-10">
          <div 
            className={`text-center mb-12 transition-all duration-1000 ${
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
              className="text-4xl font-bold mb-4"
              style={{ color: themeColors.black }}
            >
              Our Core Expertise
            </h2>
            <p 
              className="text-xl"
              style={{ color: themeColors.gray }}
            >
              Comprehensive solutions for modern e-commerce businesses
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
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
                className={`rounded-xl p-8 transition-all duration-500 relative ${
                  isVisible['expertise']
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                }`}
                style={{
                  backgroundColor: themeColors.white,
                  animation: isVisible['expertise'] 
                    ? `fadeInUp 0.8s ease-out ${service.delay}ms both` 
                    : 'none',
                }}
              >
                {/* Coming Soon Badge */}
                {service.status === 'coming soon' && (
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
                {/* Icon and Heading in Same Row */}
                <div className="flex items-center gap-4 mb-4">
                  <div 
                    className="w-16 h-16 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300"
                    style={{ 
                      background: `linear-gradient(135deg, ${themeColors.limeGreen} 0%, ${themeColors.teal} 100%)`,
                      color: themeColors.white 
                    }}
                  >
                    {service.icon}
                  </div>
                  <h3 
                    className="text-2xl font-bold flex-1"
                    style={{ color: themeColors.black }}
                  >
                    {service.title}
                  </h3>
                </div>
                <p 
                  className="mb-6"
                  style={{ color: themeColors.gray }}
                >
                  {service.description}
                </p>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2">
                      <Check 
                        size={20} 
                        className="mt-1 flex-shrink-0" 
                        style={{ color: themeColors.teal }}
                      />
                      <span style={{ color: themeColors.black }}>{feature}</span>
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
        className="py-16 px-4"
        style={{ backgroundColor: themeColors.white }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div 
              className={`rounded-2xl p-8 transition-all duration-1000 ${
                isVisible['support'] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
              style={{
                backgroundColor: themeColors.grayLight,
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
              className={`transition-all duration-1000 delay-300 ${
                isVisible['support'] ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}
            >
              <h2 
                className="text-4xl font-bold mb-6"
                style={{ color: themeColors.black }}
              >
                24/7 Support, Delivered by People Who Care!
              </h2>
              <p 
                className="mb-8 leading-relaxed"
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
          background: linear-gradient(to top, rgba(132, 204, 22, 0.4) 0%, rgba(20, 184, 166, 0.3) 40%, transparent 80%);
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
      `}</style>
    </div>
  );

}
