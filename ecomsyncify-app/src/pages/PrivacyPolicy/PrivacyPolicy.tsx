import { useState, useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { themeColors } from '../../theme/themeColors';

export default function PrivacyPolicy() {
  const [activeTab, setActiveTab] = useState<string>('intro');
  const [prevTab, setPrevTab] = useState<string>('intro');
  const [expandedSections, setExpandedSections] = useState<{ [key: string]: boolean }>({ intro: true });
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

  const introContent = {
    id: 'intro',
    title: '1. Introduction',
    content:
      'EcomSyncify Technologies (“we”, “us”, “our”) is committed to protecting the privacy of our users, customers and website visitors. This Privacy Policy explains how we collect, use, disclose and safeguard your information when you visit our website www.ecomsyncify.com and use our software product — the Etsy-integration app (the “Service”). By accessing or using the Service, you agree to the terms of this Policy. If you do not agree with the terms, please do not use the Service.',
  };

  const sections = [
    {
      id: 'scope',
      title: '2. Scope',
      content:
        'This Policy applies to information we collect via our website, applications and portals, when you register for or use our Service, and through other interactions with us, including emails, telephone or in-person communications. It does not cover the privacy practices of other websites, platforms or entities you may access via links from our site.',
    },
    {
      id: 'collect',
      title: '3. Information We Collect',
      content:
        'We may collect both personal and non-personal data. Personal Data includes your name, email address, telephone number, mailing address, company name, job title and other business details, account credentials (such as username and password), payment information (billing address and payment method), and any other information you provide when registering for our Service, contacting us or using our support. Technical & Usage Data includes IP address, browser type and version, time zone, operating system, device identifiers, pages visited, time spent, links clicked, referral source, features accessed, integration settings, log files, error reports and information collected via cookies and similar tracking technologies (see Section 8).',
    },
    {
      id: 'use',
      title: '4. How We Use Your Information',
      content:
        'We use the information we collect to provide, operate and maintain our Service; manage your account, authenticate you and provide support; process subscriptions, billing and payments; communicate with you (including updates, product announcements, newsletters and promotions where permitted); monitor, analyse and improve our Service, website and user experience; comply with legal obligations; protect our rights and the safety of our users; and for marketing purposes, including customising offers, sending targeted advertising where permitted and analysing campaign effectiveness.',
    },
    {
      id: 'sharing',
      title: '5. Disclosure of Your Information',
      content:
        'We may share your information with third-party service providers who perform services on our behalf (such as payment processors, hosting providers, analytics services and marketing platforms); these parties are permitted to use your data only to perform the services we request. We may also disclose your information if required by law, regulation or legal process; to investigate suspected fraud or violations of our terms; to enforce our rights; or to protect our users or others. In the event of a merger, acquisition, reorganisation or sale of assets, your information may be transferred as part of that transaction, subject to appropriate safeguards.',
    },
    {
      id: 'rights',
      title: '6. Your Rights (including GDPR)',
      content:
        'If you are located in the European Economic Area (EEA) or UK, you have certain rights under data protection law, including: the right to access the personal data we hold about you; the right to rectify inaccurate or incomplete data; the right to request erasure (“right to be forgotten”) in certain circumstances; the right to restrict processing; the right to object to processing for direct marketing or where processing is based on our legitimate interests; and the right to data portability, allowing you to request transfer of your data to another controller. To exercise your rights, please contact us using the details in Section 13. We will respond as required by applicable law.',
    },
    {
      id: 'retention',
      title: '7. Data Retention',
      content:
        'We retain your personal data only for as long as necessary to fulfil the purposes outlined in this Policy, unless a longer retention period is required or permitted by law. When we no longer need your data, we will securely delete or anonymise it.',
    },
    {
      id: 'cookies',
      title: '8. Cookies & Tracking Technologies',
      content:
        'We use cookies and similar technologies to collect information about your interactions with our website and Service. These may include strictly necessary cookies (essential for site operation such as login and security), performance/analytics cookies (to understand usage and improve functionality), functionality cookies (to remember preferences like language and region) and session cookies (which expire when you close your browser). You can control cookies through your browser settings, but disabling cookies may affect the proper functioning of parts of our website or Service.',
    },
    {
      id: 'security',
      title: '9. Security',
      content:
        'We implement appropriate technical and organisational measures to protect your data against unauthorised access, damage, alteration or destruction. However, no system or method of transmission over the internet is 100% secure, and we cannot guarantee absolute security of your data.',
    },
    {
      id: 'transfers',
      title: '10. International Transfers',
      content:
        'As a global service provider, your information may be transferred to, stored at or processed in jurisdictions outside your country of residence. Where required, we will ensure appropriate safeguards (such as standard contractual clauses or equivalent mechanisms) are in place to protect your data in connection with such transfers.',
    },
    {
      id: 'children',
      title: '11. Children’s Privacy',
      content:
        'Our Service is not directed to children under the age of 13 (or such minimum age as required by applicable law), and we do not knowingly collect personal information from children. If we become aware that we have collected data from a child without appropriate parental consent, we will take steps to delete that information as soon as reasonably practicable.',
    },
    {
      id: 'changes',
      title: '12. Changes to This Policy',
      content:
        'We may update this Privacy Policy from time to time. We will post the revised policy on our website and update the “Last Updated” date at the top of this page. Your continued use of the Service after any changes become effective constitutes your acceptance of the revised Policy. We encourage you to review this Privacy Policy periodically.',
    },
    {
      id: 'contact',
      title: '13. Contact Us',
      content:
        'If you have questions or comments about this Privacy Policy or wish to exercise your rights, please contact: EcomSyncify Technologies, Address: P-53 VK Residency Haldharu, Kamrej, Surat, Gujarat 394305, India, Email: info@ecomsyncify.com, Phone: +91 9990078022.',
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
        className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
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
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight px-4"
              style={{ color: themeColors.white }}
          >
            Privacy Policy
            </h1>
            <p 
              className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 leading-relaxed px-4"
              style={{ color: themeColors.white, opacity: 0.95 }}
            >
              Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content with Tab Layout (Desktop) and Accordion (Mobile) */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: themeColors.white }}>
        <div className="max-w-7xl mx-auto">
          {/* Mobile Accordion View */}
          <div className="lg:hidden space-y-3 sm:space-y-4">
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
                    className="w-full text-left px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between transition-all duration-300 touch-manipulation"
                    style={{
                      minHeight: '44px',
                      background: isExpanded 
                        ? `linear-gradient(135deg, ${themeColors.limeGreen} 0%, ${themeColors.teal} 100%)`
                        : themeColors.grayLight,
                    }}
                  >
                    <h3 
                      className="text-base sm:text-lg font-bold pr-3 sm:pr-4"
                      style={{ color: isExpanded ? themeColors.white : themeColors.black }}
                    >
                      {section.title}
                    </h3>
                    <ChevronDown
                      size={20}
                      className={`transition-transform duration-300 flex-shrink-0 w-5 h-5`}
                      style={{ 
                        color: isExpanded ? themeColors.white : themeColors.black,
                        transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                      }}
                    />
                  </button>
                  {isExpanded && (
                    <div className="px-4 sm:px-6 pb-4 sm:pb-6 pt-2">
                      <p 
                        className="text-sm sm:text-base leading-relaxed mb-3 sm:mb-4"
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
                            className="inline-block px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg text-sm sm:text-base font-semibold transition-all duration-300 hover:scale-105 active:scale-95 touch-manipulation"
                            style={{ 
                              background: `linear-gradient(135deg, ${themeColors.blue} 0%, ${themeColors.limeGreen} 50%, ${themeColors.teal} 100%)`,
                              color: themeColors.white,
                              minHeight: '44px',
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
                        className={`w-full text-left px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg transition-all duration-300 touch-manipulation ${
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
                        <span className="font-semibold text-xs sm:text-sm md:text-base">{section.title}</span>
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
