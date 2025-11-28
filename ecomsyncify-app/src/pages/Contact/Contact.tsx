import { useState, useEffect, useRef } from 'react';
import { Mail, HeadphonesIcon, Clock, MapPin, Send, Lightbulb, Linkedin, Facebook, Youtube } from 'lucide-react';

export default function Contact() {
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

  const socialLinks = [
    { icon: <Linkedin size={24} />, label: 'LinkedIn', url: '#' },
    { icon: <Facebook size={24} />, label: 'Facebook', url: '#' },
    { icon: <Youtube size={24} />, label: 'YouTube', url: '#' },
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: themeColors.white }}>
      {/* Hero Section */}
      <section 
        className="pt-28 pb-16 px-4 relative overflow-hidden"
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
            Contact Us
            </h1>
            <p 
              className="text-xl mb-4 leading-relaxed"
              style={{ color: themeColors.white, opacity: 0.95 }}
          >
            We're here to help you every step of the way.
            </p>
            <p 
              className="text-lg leading-relaxed"
              style={{ color: themeColors.white, opacity: 0.95 }}
          >
            Whether you have questions about our Etsy Integration App, need technical support, or want to explore partnership opportunities - the EcomSyncify Technologies team is ready to assist you.
            </p>
          </div>
        </div>
      </section>

        {/* Get in Touch Section */}
      <section className="py-16 px-4" style={{ backgroundColor: themeColors.white }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            {/* Left Side - Text */}
            <div 
              className={`transition-all duration-1000 ${
                isVisible['touch'] ? 'opacity-100 translate-y-0' : 'opacity-100 translate-y-0'
              }`}
              ref={(el) => {
                if (el) {
                  el.id = 'touch';
                  sectionRefs.current['touch'] = el;
                }
              }}
            >
              <h2 
                className="text-4xl md:text-5xl font-bold mb-4"
                style={{ color: themeColors.black }}
              >
                Get in Touch
              </h2>
              <p 
                className="text-lg mb-6"
                style={{ color: themeColors.gray }}
              >
                Choose the best way to reach us
              </p>
            </div>

            {/* Right Side - Illustration */}
            <div className="relative">
              <div 
                className="rounded-3xl overflow-hidden shadow-2xl"
                style={{
                  boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)',
                }}
              >
                <img
src='https://riyasoftwebsolutions.com/wp-content/uploads/2024/02/itconsultingmain.png'
alt="Customer support illustration"
                  className="w-full h-80 object-fit"
                />
              </div>
              <div 
                className="absolute -bottom-4 -left-4 w-32 h-32 rounded-full opacity-20 z-0"
                style={{
                  background: `linear-gradient(135deg, ${themeColors.limeGreen} 0%, ${themeColors.teal} 100%)`,
                }}
              ></div>
            </div>
          </div>

          <div className="space-y-5 mb-10">
            {[
              {
                id: 'email',
                icon: <Mail size={32} />,
                title: 'Email Support',
                description: 'For general inquiries or product assistance, write to us at',
                link: 'support@ecomsyncify.com',
                linkHref: 'mailto:support@ecomsyncify.com',
              },
              {
                id: 'tech',
                icon: <HeadphonesIcon size={32} />,
                title: 'Technical Assistance',
                description: 'Already using our app and need help? Our support specialists are available to resolve sync issues, integration errors, and setup queries quickly and efficiently.',
              },
              {
                id: 'hours',
                icon: <Clock size={32} />,
                title: 'Support Hours',
                subtitle: 'Monday - Saturday: 24X7',
                description: 'We aim to respond to all emails within 24 hours on business days.',
              },
            ].map((item, idx) => (
              <div
                key={item.id}
                className={`rounded-xl p-5 transition-all duration-500 ${
                  isVisible['touch'] 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-100 translate-y-0'
                }`}
                style={{
                  backgroundColor: themeColors.white,
                  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
                  animation: isVisible['touch'] 
                    ? `fadeInUp 0.6s ease-out ${idx * 150}ms both` 
                    : `fadeInUp 0.6s ease-out ${idx * 150}ms both`,
                }}
              >
                <div className="flex items-start gap-4">
                  <div 
                    className="w-16 h-16 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: `linear-gradient(135deg, ${themeColors.limeGreen} 0%, ${themeColors.teal} 100%)`, color: themeColors.white }}
                  >
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <h3 
                      className="text-xl font-bold mb-2"
                      style={{ color: themeColors.black }}
                    >
                      {item.title}
                    </h3>
                    {item.subtitle && (
                      <p 
                        className="text-lg font-semibold mb-2"
                        style={{ color: themeColors.black }}
                      >
                        {item.subtitle}
                      </p>
                    )}
                    <p 
                      className="mb-3 leading-relaxed"
                      style={{ color: themeColors.gray }}
                    >
                      {item.description}
                    </p>
                    {item.link && (
                      <a
                        href={item.linkHref}
                        className="text-lg font-semibold hover:underline"
                        style={{ color: themeColors.teal }}
                  >
                        {item.link}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

        {/* Office Address */}
          <div 
            className={`grid md:grid-cols-2 gap-8 mb-12 transition-all duration-1000 ${
              isVisible['address'] ? 'opacity-100 translate-y-0' : 'opacity-100 translate-y-0'
            }`}
            ref={(el) => {
              if (el) {
                el.id = 'address';
                sectionRefs.current['address'] = el;
              }
            }}
          >
            {/* Left Side - Address Info */}
            <div 
              className="rounded-xl p-5"
              style={{ 
                backgroundColor: themeColors.white,
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
              }}
            >
              <div className="flex items-start gap-4">
                <div 
                  className="w-16 h-16 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: `linear-gradient(135deg, ${themeColors.limeGreen} 0%, ${themeColors.teal} 100%)`, color: themeColors.white }}
                >
                  <MapPin size={32} />
                </div>
                <div>
                  <h3 
                    className="text-xl font-bold mb-3"
                    style={{ color: themeColors.black }}
                  >
                    Office Address
                  </h3>
                  <p 
                    className="text-lg font-semibold mb-2"
                    style={{ color: themeColors.black }}
                  >
                    EcomSyncify Technologies
                  </p>
                  <p 
                    className="leading-relaxed"
                    style={{ color: themeColors.gray }}
                    >
                      P-53 / VK Residency Haldharu<br />
                      Surat Gujrat India-394305
                  </p>
                </div>
              </div>
            </div>

           
          </div>

        {/* Connect With Us */}
          <div 
            className={`mb-12 transition-all duration-1000 ${
              isVisible['social'] ? 'opacity-100 translate-y-0' : 'opacity-100 translate-y-0'
            }`}
            ref={(el) => {
              if (el) {
                el.id = 'social';
                sectionRefs.current['social'] = el;
              }
            }}
          >
            <div className="grid md:grid-cols-2 gap-8 items-center mb-6">
              {/* Left Side - Illustration */}
              <div className="relative order-2 md:order-1">
                <div 
                  className="rounded-3xl overflow-hidden shadow-xl"
                  style={{
                    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)',
                  }}
                >
                  <img
                    src="https://riyasoftwebsolutions.com/wp-content/uploads/2024/02/itconsultingmain.png"
                    alt="Social media connection illustration"
                    className="w-full h-64 object-fit"
                  />
                </div>
              </div>

              {/* Right Side - Content */}
              <div className="order-1 md:order-2">
                <h2 
                  className="text-4xl font-bold mb-4"
                  style={{ color: themeColors.black }}
                >
                  Connect With Us
                </h2>
                <p 
                  className="text-lg mb-6"
                  style={{ color: themeColors.gray }}
                >
                  Stay updated with our latest product news, feature releases, and tips to grow your Etsy business. Follow us on:
                </p>
                <div className="flex flex-wrap gap-4">
                  {socialLinks.map((social, idx) => (
                    <a
                      key={idx}
                      href={social.url}
                      className="flex items-center gap-3 px-6 py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-105"
                      style={{ 
                        backgroundColor: themeColors.white,
                        color: themeColors.black,
                        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
                      }}
                    >
                      <span style={{ color: themeColors.teal }}>{social.icon}</span>
                      <span className="font-semibold">{social.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div 
            className={`grid md:grid-cols-2 gap-8 transition-all duration-1000 ${
              isVisible['form'] ? 'opacity-100 translate-y-0' : 'opacity-100 translate-y-0'
            }`}
            ref={(el) => {
              if (el) {
                el.id = 'form';
                sectionRefs.current['form'] = el;
              }
            }}
          >
            {/* Left Side - Form */}
            <div 
              className="rounded-2xl p-8"
              style={{ 
                backgroundColor: themeColors.grayLight,
              }}
            >
              <div className="flex items-start gap-4 mb-6">
                <div 
                  className="w-16 h-16 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: `linear-gradient(135deg, ${themeColors.limeGreen} 0%, ${themeColors.teal} 100%)`, color: themeColors.white }}
                >
                  <Lightbulb size={32} />
                </div>
                <div>
                  <h2 
                    className="text-3xl font-bold mb-3"
                    style={{ color: themeColors.black }}
                  >
                    We're Listening
                  </h2>
                  <p 
                    className="leading-relaxed text-lg"
                    style={{ color: themeColors.gray }}
                  >
                    Your feedback drives our innovation. Have a suggestion or feature request? Fill out our quick contact form - we'd love to hear from you!
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <h3 
                  className="text-2xl font-bold mb-5"
                  style={{ color: themeColors.black }}
                >
                  Send us a Message
                </h3>
                <form className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <input
                    type="text"
                    placeholder="First Name"
                    required
                    className="w-full px-4 py-3 rounded-lg border-2 focus:outline-none transition-all"
                    style={{ 
                      borderColor: 'transparent',
                      backgroundColor: themeColors.white,
                      color: themeColors.black,
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = themeColors.limeGreen;
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = 'transparent';
                    }}
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    required
                    className="w-full px-4 py-3 rounded-lg border-2 focus:outline-none transition-all"
                    style={{ 
                      borderColor: 'transparent',
                      backgroundColor: themeColors.white,
                      color: themeColors.black,
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = themeColors.limeGreen;
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = 'transparent';
                    }}
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email"
                  required
                  className="w-full px-4 py-3 rounded-lg border-2 focus:outline-none transition-all"
                  style={{ 
                    borderColor: 'transparent',
                    backgroundColor: themeColors.white,
                    color: themeColors.black,
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = themeColors.limeGreen;
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = 'transparent';
                  }}
                />
                <input
                  type="text"
                  placeholder="Subject"
                  required
                  className="w-full px-4 py-3 rounded-lg border-2 focus:outline-none transition-all"
                  style={{ 
                    borderColor: 'transparent',
                    backgroundColor: themeColors.white,
                    color: themeColors.black,
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = themeColors.limeGreen;
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = 'transparent';
                  }}
                />
                <textarea
                  placeholder="Message"
                  rows={6}
                  required
                  className="w-full px-4 py-3 rounded-lg border-2 focus:outline-none transition-all resize-none"
                  style={{ 
                    borderColor: 'transparent',
                    backgroundColor: themeColors.white,
                    color: themeColors.black,
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = themeColors.limeGreen;
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = 'transparent';
                  }}
                />
                <button
                type="submit"
                  className="px-8 py-4 rounded-lg text-lg font-semibold flex items-center gap-2 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  style={{ 
                    background: `linear-gradient(90deg, ${themeColors.limeGreen} 0%, ${themeColors.teal} 100%)`,
                    color: themeColors.white,
                }}
              >
                  Send Message <Send size={20} />
                </button>
              </form>
            </div>
          </div>

            {/* Right Side - Form Illustration */}
            <div className="relative hidden md:block">
              <div 
                className="rounded-2xl overflow-hidden shadow-xl h-full sticky top-8"
                style={{
                  boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)',
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1577563908411-5077b6dc7624?auto=format&fit=crop&w=800&q=80"
                  alt="Contact form illustration"
                  className="w-full h-full min-h-[600px] object-cover"
                />
                <div 
                  className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"
                ></div>
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
      `}</style>
    </div>
  );
}
