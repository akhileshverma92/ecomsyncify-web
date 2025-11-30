import { useState, useEffect, useRef } from 'react';
import { Mail, HeadphonesIcon, MapPin } from 'lucide-react';
import { themeColors } from '../../theme/themeColors';

export default function Contact() {
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({});
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const [activeContactTab, setActiveContactTab] = useState<'address' | 'map'>('address');

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
    <div className="min-h-screen" style={{ backgroundColor: themeColors.white }}>
      {/* Hero Section */}
      <section
        className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-14 md:pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
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

        <div className="max-w-7xl mx-auto relative z-10">
          <div
            className={`text-center max-w-4xl mx-auto transition-all duration-1000 ${isVisible['hero'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
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
              Contact Us
            </h1>
            <p
              className="text-base sm:text-lg md:text-xl mb-3 sm:mb-4 leading-relaxed px-4"
              style={{ color: themeColors.white, opacity: 0.95 }}
            >
              We're here to help you every step of the way.
            </p>
            <p
              className="text-sm sm:text-base md:text-lg leading-relaxed px-4"
              style={{ color: themeColors.white, opacity: 0.95 }}
            >
              Whether you have questions about our Etsy Integration App, need technical support, or want to explore partnership opportunities - the EcomSyncify Technologies team is ready to assist you.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Card Section - Form + Address (like reference UI) */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: themeColors.white }}>
        <div className="max-w-6xl mx-auto">
          <div
            className={`contact-form-card rounded-2xl sm:rounded-3xl border border-gray-100 shadow-2xl bg-white px-4 sm:px-5 md:px-8 lg:px-10 py-6 sm:py-8 md:py-10 lg:py-12 transition-all duration-1000 ${isVisible['contact-main'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            ref={(el) => {
              if (el) {
                el.id = 'contact-main';
                sectionRefs.current['contact-main'] = el;
              }
            }}
            style={{
              borderColor: themeColors.grayLight,
            }}
          >
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start">
              {/* Left Column - Form (Need Help?) */}
              <div className="w-full">
                <h2
                  className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3"
                  style={{ color: themeColors.black }}
                >
                  Need Help?
                </h2>
                <p
                  className="text-xs sm:text-sm md:text-base mb-4 sm:mb-6 leading-relaxed"
                  style={{ color: themeColors.gray }}
                >
                  Reach out to our team for questions about EcomSyncify, integration setup, support, or partnership opportunities.
                </p>

                <form className="space-y-3 sm:space-y-4 md:space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-5">
                    <input
                      type="text"
                      placeholder="Name"
                      required
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border-2 focus:outline-none transition-all text-sm sm:text-base"
                      style={{
                        borderColor: 'transparent',
                        backgroundColor: themeColors.grayLight,
                        color: themeColors.black,
                        minHeight: '44px',
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = themeColors.limeGreen;
                        e.currentTarget.style.backgroundColor = themeColors.white;
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = 'transparent';
                        e.currentTarget.style.backgroundColor = themeColors.grayLight;
                      }}
                    />
                    <input
                      type="email"
                      placeholder="Email*"
                      required
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border-2 focus:outline-none transition-all text-sm sm:text-base"
                      style={{
                        borderColor: 'transparent',
                        backgroundColor: themeColors.grayLight,
                        color: themeColors.black,
                        minHeight: '44px',
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = themeColors.limeGreen;
                        e.currentTarget.style.backgroundColor = themeColors.white;
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = 'transparent';
                        e.currentTarget.style.backgroundColor = themeColors.grayLight;
                      }}
                    />
                  </div>
                  <input
                    type="tel"
                    placeholder="Phone"
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border-2 focus:outline-none transition-all text-sm sm:text-base"
                    style={{
                      borderColor: 'transparent',
                      backgroundColor: themeColors.grayLight,
                      color: themeColors.black,
                      minHeight: '44px',
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = themeColors.limeGreen;
                      e.currentTarget.style.backgroundColor = themeColors.white;
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = 'transparent';
                      e.currentTarget.style.backgroundColor = themeColors.grayLight;
                    }}
                  />
                  <textarea
                    placeholder="Please describe what you need.*"
                    rows={5}
                    required
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border-2 focus:outline-none transition-all resize-none text-sm sm:text-base"
                    style={{
                      borderColor: 'transparent',
                      backgroundColor: themeColors.grayLight,
                      color: themeColors.black,
                      minHeight: '120px',
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = themeColors.limeGreen;
                      e.currentTarget.style.backgroundColor = themeColors.white;
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = 'transparent';
                      e.currentTarget.style.backgroundColor = themeColors.grayLight;
                    }}
                  />
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-3.5 rounded-lg text-sm sm:text-base font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95 touch-manipulation"
                    style={{
                      background: `linear-gradient(90deg, ${themeColors.limeGreen} 0%, ${themeColors.teal} 100%)`,
                      color: themeColors.white,
                      minHeight: '44px',
                    }}
                  >
                    Get a free consultation
                  </button>
                </form>
              </div>

              {/* Right Column - Address / Contact Info with Address / Google Maps toggle */}
              <div className="border-t md:border-t-0 md:border-l pt-6 sm:pt-8 md:pt-0 md:pl-6 lg:pl-8 xl:pl-10 mt-6 md:mt-0" style={{ borderColor: themeColors.grayLight }}>
                {/* Tabs header (Address / Google Maps toggle) */}
                <div className="flex items-center gap-4 sm:gap-6 mb-4 sm:mb-6 overflow-x-auto">
                  <button
                    type="button"
                    onClick={() => setActiveContactTab('address')}
                    className="text-sm sm:text-base md:text-lg font-semibold pb-2 border-b-2 transition-colors whitespace-nowrap flex-shrink-0"
                    style={{
                      color: activeContactTab === 'address' ? themeColors.black : themeColors.gray,
                      borderBottomColor: activeContactTab === 'address' ? themeColors.teal : 'transparent',
                      borderBottomWidth: '2px',
                    }}
                  >
                    Address
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveContactTab('map')}
                    className="text-sm sm:text-base md:text-lg font-semibold pb-2 border-b-2 transition-colors whitespace-nowrap flex-shrink-0"
                    style={{
                      color: activeContactTab === 'map' ? themeColors.black : themeColors.gray,
                      borderBottomColor: activeContactTab === 'map' ? themeColors.teal : 'transparent',
                      borderBottomWidth: '2px',
                    }}
                  >
                    Google Maps
                  </button>
                </div>

                {activeContactTab === 'address' ? (
                  <div className="space-y-4 sm:space-y-5 md:space-y-6">
                    {/* Location */}
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div
                        className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full flex items-center justify-center shadow-md flex-shrink-0"
                        style={{
                          backgroundColor: themeColors.white,
                          boxShadow: '0 10px 25px rgba(0,0,0,0.08)',
                        }}
                      >
                        <MapPin size={20} className="sm:w-5 sm:h-5 md:w-6 md:h-6" style={{ color: themeColors.teal }} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p
                          className="text-[10px] sm:text-xs uppercase tracking-wider font-semibold mb-1 sm:mb-1.5"
                          style={{ color: themeColors.gray }}
                        >
                          Our Location
                        </p>
                        <p
                          className="text-sm sm:text-base md:text-lg font-semibold mb-1"
                          style={{ color: themeColors.black }}
                        >
                          EcomSyncify Technologies
                        </p>
                        <p
                          className="text-xs sm:text-sm md:text-base leading-relaxed break-words"
                          style={{ color: themeColors.gray }}
                        >
                          P-53 / VK Residency Haldharu,<br />
                          Surat, Gujarat, India - 394305
                        </p>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div
                        className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full flex items-center justify-center shadow-md flex-shrink-0"
                        style={{
                          backgroundColor: themeColors.white,
                          boxShadow: '0 10px 25px rgba(0,0,0,0.08)',
                        }}
                      >
                        <Mail size={20} className="sm:w-5 sm:h-5 md:w-6 md:h-6" style={{ color: themeColors.teal }} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p
                          className="text-[10px] sm:text-xs uppercase tracking-wider font-semibold mb-1 sm:mb-1.5"
                          style={{ color: themeColors.gray }}
                        >
                          Send Us Mail
                        </p>
                        <a
                          href="mailto:support@ecomsyncify.com"
                          className="text-xs sm:text-sm md:text-base font-semibold hover:underline break-all block"
                          style={{ color: themeColors.black }}
                        >
                          support@ecomsyncify.com
                        </a>
                      </div>
                    </div>

                    {/* Call */}
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div
                        className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full flex items-center justify-center shadow-md flex-shrink-0"
                        style={{
                          backgroundColor: themeColors.white,
                          boxShadow: '0 10px 25px rgba(0,0,0,0.08)',
                        }}
                      >
                        <HeadphonesIcon size={20} className="sm:w-5 sm:h-5 md:w-6 md:h-6" style={{ color: themeColors.teal }} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p
                          className="text-[10px] sm:text-xs uppercase tracking-wider font-semibold mb-1 sm:mb-1.5"
                          style={{ color: themeColors.gray }}
                        >
                          Call Us
                        </p>
                        <p
                          className="text-sm sm:text-base md:text-lg font-semibold mb-1"
                          style={{ color: themeColors.black }}
                        >
                          +91 7275646711
                        </p>
                        <p
                          className="text-xs sm:text-sm md:text-base leading-relaxed"
                          style={{ color: themeColors.gray }}
                        >
                          24/7 Support Available
                        </p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-3 sm:space-y-4">
                    <div
                      className="rounded-xl sm:rounded-2xl overflow-hidden shadow-lg w-full"
                      style={{
                        boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
                        height: '250px',
                        minHeight: '250px',
                      }}
                    >
                      <iframe
                        src="https://www.google.com/maps?q=26.9767297,80.9175052&hl=es;z=16&output=embed"
                        width="100%"
                        height="100%"
                        style={{border:0, display: 'block'}}
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="w-full h-full"
                      >
                      </iframe>
                    </div>
                    <p
                      className="text-xs sm:text-sm leading-relaxed"
                      style={{ color: themeColors.gray }}
                    >
                      Can't see the map?{" "}
                      <a
                        href="https://maps.app.goo.gl/KHiq2stw7kF2STpV9"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold hover:underline break-all"
                        style={{ color: themeColors.teal }}
                      >
                        Open in Google Maps
                      </a>
                      .
                    </p>
                  </div>
                )}
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

        input::placeholder,
        textarea::placeholder {
          color: #6b7280;
          opacity: 0.7;
        }

        input:focus::placeholder,
        textarea:focus::placeholder {
          opacity: 0.5;
        }

        /* Contact Form Card Border Animation */
        .contact-form-card {
          position: relative;
          overflow: visible;
        }

        .contact-form-card::before,
        .contact-form-card::after {
          content: '';
          position: absolute;
          pointer-events: none;
          z-index: 1;
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .contact-form-card::before {
          top: -2px;
          right: -2px;
          width: 0;
          height: 0;
          border-top: 2px solid ${themeColors.blue};
          border-right: 2px solid ${themeColors.blue};
          border-bottom: none;
          border-left: none;
        }

        .contact-form-card::after {
          bottom: -2px;
          left: -2px;
          width: 0;
          height: 0;
          border-bottom: 2px solid ${themeColors.blue};
          border-left: 2px solid ${themeColors.blue};
          border-top: none;
          border-right: none;
        }

        .contact-form-card:hover::before {
          width: calc(100% + 2px);
          height: calc(100% + 2px);
        }

        .contact-form-card:hover::after {
          width: calc(100% + 2px);
          height: calc(100% + 2px);
        }
      `}</style>
    </div>
  );
}
