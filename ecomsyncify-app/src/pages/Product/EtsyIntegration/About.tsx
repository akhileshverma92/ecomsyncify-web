import { Users, Shield, Zap } from 'lucide-react';

export default function About() {
  const themeColors = {
    limeGreen: '#84cc16',
    teal: '#14b8a6',
    black: '#000000',
    white: '#ffffff',
    gray: '#6b7280',
    grayLight: '#f3f4f6',
  };

  return (
    <section className="py-20 px-4" style={{ backgroundColor: themeColors.white }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: themeColors.black }}>
            About Etsy Integration
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: themeColors.gray }}>
            Built by Shopify experts with over 10 years of experience in e-commerce integration
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-3xl font-bold mb-6" style={{ color: themeColors.black }}>
              Our Story
            </h3>
            <div className="space-y-4">
              <p className="text-lg leading-relaxed" style={{ color: themeColors.gray }}>
                Etsy Integration was born from a simple need: helping merchants seamlessly connect their Etsy and Shopify stores without the hassle of manual work, errors, and inefficiencies.
              </p>
              <p className="text-lg leading-relaxed" style={{ color: themeColors.gray }}>
                With over 10 years of experience in Shopify app development, our team understands the challenges of multi-platform e-commerce. We've built dozens of successful Shopify apps and integrations, and we've applied that expertise to create the most reliable Etsy-Shopify integration available.
              </p>
              <p className="text-lg leading-relaxed" style={{ color: themeColors.gray }}>
                Today, thousands of merchants trust our platform to manage their multi-channel e-commerce operations, from small handmade businesses to large DTC brands.
              </p>
            </div>
          </div>
          <div>
            <div 
              className="rounded-2xl overflow-hidden shadow-xl"
              style={{
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.1)',
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                alt="Team"
                className="w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Users size={40} />,
              title: 'Expert Team',
              description: 'Our team has built dozens of successful Shopify apps and integrations, bringing years of expertise to every feature.',
            },
            {
              icon: <Shield size={40} />,
              title: 'Secure & Reliable',
              description: 'Enterprise-grade security with 99% uptime guarantee for your peace of mind. Your data is always protected.',
            },
            {
              icon: <Zap size={40} />,
              title: 'Fast Setup',
              description: 'Get up and running in minutes, not hours. Our streamlined setup process is designed for speed and simplicity.',
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="text-center p-6 rounded-xl border-2 transition-all duration-300 hover:shadow-lg"
              style={{
                backgroundColor: themeColors.white,
                borderColor: themeColors.grayLight,
              }}
            >
              <div 
                className="w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4"
                style={{
                  background: `linear-gradient(135deg, ${themeColors.limeGreen} 0%, ${themeColors.teal} 100%)`,
                  color: themeColors.white,
                }}
              >
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: themeColors.black }}>
                {item.title}
              </h3>
              <p className="text-base leading-relaxed" style={{ color: themeColors.gray }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

