import { useState, useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

export default function PrivacyPolicy() {
  const [activeTab, setActiveTab] = useState<string>('intro');
  const [prevTab, setPrevTab] = useState<string>('intro');
  const [expandedSections, setExpandedSections] = useState<{ [key: string]: boolean }>({ intro: true });
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

  const introContent = {
    id: 'intro',
    title: 'Introduction',
    content: 'At EcomSyncify, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform.',
  };

  const sections = [
    {
      id: 'collect',
      title: 'Information We Collect',
      content: 'We collect information that you provide directly to us, such as when you create an account, make a purchase, or contact us for support. This may include your name, email address, phone number, payment information, and other details necessary to provide our services.',
    },
    {
      id: 'use',
      title: 'How We Use Your Information',
      content: 'We use the information we collect to provide, maintain, and improve our services, process transactions, send you technical notices and support messages, respond to your comments and questions, and communicate with you about products and services that may be of interest to you.',
    },
    {
      id: 'sharing',
      title: 'Information Sharing',
      content: 'We do not sell, trade, or rent your personal information to third parties. We may share your information with trusted service providers who assist us in operating our platform, conducting our business, or serving our users, as long as those parties agree to keep this information confidential.',
    },
    {
      id: 'security',
      title: 'Data Security',
      content: 'We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.',
    },
    {
      id: 'rights',
      title: 'Your Rights',
      content: 'You have the right to access, update, or delete your personal information at any time. You can also opt-out of certain communications from us. To exercise these rights, please contact us using the information provided below.',
    },
    {
      id: 'cookies',
      title: 'Cookies and Tracking',
      content: 'We use cookies and similar tracking technologies to track activity on our platform and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.',
    },
    {
      id: 'changes',
      title: 'Changes to This Policy',
      content: 'We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes.',
    },
    {
      id: 'contact',
      title: 'Contact Us',
      content: 'If you have any questions about this Privacy Policy, please contact us at privacy@ecomsyncify.com or through our contact page.',
    },
  ];

  const allSections = [introContent, ...sections];

  const activeContent = allSections.find(section => section.id === activeTab) || introContent;
  const prevContent = allSections.find(section => section.id === prevTab) || introContent;

  const handleTabChange = (tabId: string) => {
    if (tabId !== activeTab) {
      setPrevTab(activeTab);
      setActiveTab(tabId);
    }
  };

  const toggleAccordion = (sectionId: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }));
  };

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
            Privacy Policy
            </h1>
            <p 
              className="text-xl mb-8 leading-relaxed"
              style={{ color: themeColors.white, opacity: 0.95 }}
            >
              Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content with Tab Layout (Desktop) and Accordion (Mobile) */}
      <section className="py-20 px-4" style={{ backgroundColor: themeColors.white }}>
        <div className="max-w-7xl mx-auto">
          {/* Mobile Accordion View */}
          <div className="lg:hidden space-y-4">
            {allSections.map((section) => {
              const isExpanded = expandedSections[section.id] || false;
              return (
                <div
                  key={section.id}
                  className="rounded-2xl overflow-hidden"
                  style={{
                    backgroundColor: themeColors.white,
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
                  }}
                >
                  <button
                    onClick={() => toggleAccordion(section.id)}
                    className="w-full text-left px-6 py-4 flex items-center justify-between transition-all duration-300"
                    style={{
                      backgroundColor: isExpanded 
                        ? `linear-gradient(135deg, ${themeColors.limeGreen}15 0%, ${themeColors.teal}15 100%)`
                        : themeColors.grayLight,
                      background: isExpanded 
                        ? `linear-gradient(135deg, ${themeColors.limeGreen}15 0%, ${themeColors.teal}15 100%)`
                        : themeColors.grayLight,
                    }}
                  >
                    <h3 
                      className="text-lg font-bold pr-4"
                      style={{ color: themeColors.black }}
                    >
                      {section.title}
                    </h3>
                    <ChevronDown
                      size={20}
                      className={`transition-transform duration-300 flex-shrink-0`}
                      style={{ 
                        color: themeColors.black,
                        transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                      }}
                    />
                  </button>
                  {isExpanded && (
                    <div className="px-6 pb-6 pt-2">
                      <p 
                        className="text-base leading-relaxed mb-4"
                        style={{ color: themeColors.gray }}
                      >
                        {section.content}
                      </p>
                      {section.id === 'intro' && (
                        <div className="mt-4 p-4 rounded-xl" style={{ backgroundColor: themeColors.grayLight }}>
                          <p className="text-sm leading-relaxed" style={{ color: themeColors.gray }}>
                            This policy applies to all information collected through our platform, including our website, 
                            mobile applications, and any related services. By using our services, you agree to the 
                            collection and use of information in accordance with this policy.
                          </p>
                        </div>
                      )}
                      {section.id === 'contact' && (
                        <div className="mt-4 p-4 rounded-xl" style={{ backgroundColor: themeColors.grayLight }}>
                          <p className="text-sm leading-relaxed mb-4" style={{ color: themeColors.gray }}>
                            We're here to help and ensure your privacy is protected. If you have any questions or 
                            concerns about our Privacy Policy or how we handle your data, please don't hesitate to reach out.
                          </p>
                          <a 
                            href="mailto:privacy@ecomsyncify.com"
                            className="inline-block px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                            style={{ 
                              background: `linear-gradient(135deg, ${themeColors.blue} 0%, ${themeColors.limeGreen} 50%, ${themeColors.teal} 100%)`,
                              color: themeColors.white,
                            }}
                          >
                            Contact Privacy Team
                          </a>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Desktop Tab Layout */}
          <div className="hidden lg:flex flex-col lg:flex-row min-h-[600px]">
            {/* Left Side - Tab Navigation */}
            <div className="lg:w-80 flex-shrink-0 pr-8" style={{ borderRight: `1px solid ${themeColors.grayLight}` }}>
              <div className="sticky top-24">
                <div className="p-6">
                  <h3 
                    className="text-xl font-bold mb-6"
                    style={{ color: themeColors.black }}
                  >
                    Table of Contents
                  </h3>
                  <nav className="space-y-2">
                    {allSections.map((section) => (
                      <button
                        key={section.id}
                        onClick={() => handleTabChange(section.id)}
                        className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 ${
                          activeTab === section.id 
                            ? 'shadow-md transform scale-105' 
                            : 'hover:bg-white hover:bg-opacity-50'
                        }`}
                        style={{
                          backgroundColor: activeTab === section.id 
                            ? `linear-gradient(135deg, ${themeColors.limeGreen} 0%, ${themeColors.teal} 100%)`
                            : 'transparent',
                          background: activeTab === section.id 
                            ? `linear-gradient(135deg, ${themeColors.limeGreen} 0%, ${themeColors.teal} 100%)`
                            : 'transparent',
                          color: activeTab === section.id ? themeColors.white : themeColors.black,
                        }}
                      >
                        <span className="font-semibold text-sm md:text-base">{section.title}</span>
                      </button>
                    ))}
                  </nav>
                </div>
              </div>
            </div>

            {/* Right Side - Content Area */}
            <div className="flex-1 relative overflow-hidden pl-8">
              {/* Previous Content - Sliding Out */}
              {prevTab !== activeTab && (
                <div 
                  key={`prev-${prevTab}`}
                  className="absolute inset-0 rounded-2xl p-8 md:p-12 min-h-[600px] slide-out-left"
                  style={{ 
                    backgroundColor: themeColors.white,
                    zIndex: 1,
                  }}
                >
                  <h2 
                    className="text-3xl md:text-4xl font-bold mb-6"
                    style={{ color: themeColors.black }}
                  >
                    {prevContent.title}
                  </h2>
                  <div 
                    className="prose prose-lg max-w-none"
                    style={{ color: themeColors.gray }}
                  >
                    <p className="text-lg leading-relaxed mb-6">
                      {prevContent.content}
                    </p>
                  </div>
                </div>
              )}

              {/* Current Content - Sliding In */}
              <div 
                key={`active-${activeTab}`}
                className={`rounded-2xl p-8 md:p-12 min-h-[600px] slide-in-right ${
                  prevTab !== activeTab ? 'relative' : ''
                }`}
                style={{ 
                  backgroundColor: themeColors.white,
                  zIndex: 2,
                }}
              >
                <h2 
                  className="text-3xl md:text-4xl font-bold mb-6"
                  style={{ color: themeColors.black }}
                >
                  {activeContent.title}
                </h2>
                <div 
                  className="prose prose-lg max-w-none"
                  style={{ color: themeColors.gray }}
                >
                  <p className="text-lg leading-relaxed mb-6">
                    {activeContent.content}
                  </p>
                </div>

                {/* Additional content for specific sections */}
                {activeTab === 'intro' && (
                  <div className="mt-8 p-6 rounded-xl" style={{ backgroundColor: themeColors.grayLight }}>
                    <p className="text-base leading-relaxed" style={{ color: themeColors.gray }}>
                      This policy applies to all information collected through our platform, including our website, 
                      mobile applications, and any related services. By using our services, you agree to the 
                      collection and use of information in accordance with this policy.
                    </p>
                  </div>
                )}

                {activeTab === 'contact' && (
                  <div className="mt-8 p-6 rounded-xl" style={{ backgroundColor: themeColors.grayLight }}>
                    <p className="text-base leading-relaxed mb-4" style={{ color: themeColors.gray }}>
                      We're here to help and ensure your privacy is protected. If you have any questions or 
                      concerns about our Privacy Policy or how we handle your data, please don't hesitate to reach out.
                    </p>
                    <div className="mt-4">
                      <a 
                        href="mailto:privacy@ecomsyncify.com"
                        className="inline-block px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                        style={{ 
                          background: `linear-gradient(135deg, ${themeColors.blue} 0%, ${themeColors.limeGreen} 50%, ${themeColors.teal} 100%)`,
                          color: themeColors.white,
                        }}
                      >
                        Contact Privacy Team
                      </a>
                    </div>
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

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(100%);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideOutLeft {
          from {
            opacity: 1;
            transform: translateX(0);
          }
          to {
            opacity: 0;
            transform: translateX(-100%);
          }
        }

        .slide-in-right {
          animation: slideInRight 0.5s ease-out forwards;
        }

        .slide-out-left {
          animation: slideOutLeft 0.5s ease-in forwards;
        }
      `}</style>
    </div>
  );
}
