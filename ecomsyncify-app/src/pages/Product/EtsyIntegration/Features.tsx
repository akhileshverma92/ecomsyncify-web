import { RefreshCw, Package, Shield, Clock, TrendingUp, Sparkles, Check } from 'lucide-react';

export default function Features() {
  const themeColors = {
    limeGreen: '#84cc16',
    teal: '#14b8a6',
    black: '#000000',
    white: '#ffffff',
    gray: '#6b7280',
    grayLight: '#f3f4f6',
  };

  const features = [
    {
      icon: <RefreshCw size={40} />,
      title: 'Real-time Synchronization',
      description: 'Keep your products, inventory, and orders perfectly synchronized between Etsy and Shopify in real-time.',
      benefits: [
        'Instant inventory updates across platforms',
        'Automatic order synchronization',
        'Real-time product data sync',
        'No manual intervention required',
      ],
    },
    {
      icon: <Package size={40} />,
      title: 'Bulk Operations',
      description: 'Import and manage hundreds of products at once with our powerful bulk import and export features.',
      benefits: [
        'Bulk product import from Shopify to Etsy',
        'Mass product updates',
        'CSV import/export support',
        'Batch listing creation',
      ],
    },
    {
      icon: <TrendingUp size={40} />,
      title: 'Advanced Analytics',
      description: 'Get comprehensive insights into your sales performance, inventory levels, and customer behavior.',
      benefits: [
        'Cross-platform sales reports',
        'Inventory analytics',
        'Performance metrics dashboard',
        'Custom report generation',
      ],
    },
    {
      icon: <Shield size={40} />,
      title: 'Secure Integration',
      description: 'Enterprise-grade security with encrypted data transfer and secure API connections.',
      benefits: [
        'SSL encrypted connections',
        'OAuth 2.0 authentication',
        'GDPR compliant',
        'Regular security audits',
      ],
    },
    {
      icon: <Clock size={40} />,
      title: '24/7 Support',
      description: 'Round-the-clock support from our experienced team of Shopify developers.',
      benefits: [
        '24/7 customer support',
        'Expert technical assistance',
        'Comprehensive documentation',
        'Video tutorials and guides',
      ],
    },
    {
      icon: <Sparkles size={40} />,
      title: 'Growth Tools',
      description: 'Advanced features to help you scale your business and reach new markets.',
      benefits: [
        'Multi-location inventory support',
        'Listing translation tools',
        'Automated pricing rules',
        'Market expansion features',
      ],
    },
  ];

  return (
    <section className="py-20 px-4" style={{ backgroundColor: themeColors.white }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: themeColors.black }}>
            Powerful Features
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: themeColors.gray }}>
            Everything you need to seamlessly manage your Etsy and Shopify stores
          </p>
        </div>

        <div className="space-y-12">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="grid md:grid-cols-2 gap-8 items-center"
            >
              <div className={`${idx % 2 === 1 ? 'md:order-2' : ''}`}>
                <div 
                  className="w-20 h-20 rounded-xl flex items-center justify-center mb-6"
                  style={{
                    background: `linear-gradient(135deg, ${themeColors.limeGreen} 0%, ${themeColors.teal} 100%)`,
                    color: themeColors.white,
                  }}
                >
                  {feature.icon}
                </div>
                <h3 className="text-3xl font-bold mb-4" style={{ color: themeColors.black }}>
                  {feature.title}
                </h3>
                <p className="text-lg leading-relaxed mb-6" style={{ color: themeColors.gray }}>
                  {feature.description}
                </p>
                <ul className="space-y-3">
                  {feature.benefits.map((benefit, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-3">
                      <Check size={20} style={{ color: themeColors.teal, flexShrink: 0, marginTop: '2px' }} />
                      <span className="text-base leading-relaxed" style={{ color: themeColors.black }}>
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={`${idx % 2 === 1 ? 'md:order-1' : ''}`}>
                <div 
                  className="rounded-2xl overflow-hidden shadow-xl"
                  style={{
                    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.1)',
                  }}
                >
                  <div 
                    className="h-64 flex items-center justify-center"
                    style={{
                      background: `linear-gradient(135deg, ${themeColors.limeGreen}15 0%, ${themeColors.teal}15 100%)`,
                    }}
                  >
                    <div 
                      className="w-32 h-32 rounded-full flex items-center justify-center"
                      style={{
                        background: `linear-gradient(135deg, ${themeColors.limeGreen} 0%, ${themeColors.teal} 100%)`,
                        color: themeColors.white,
                      }}
                    >
                      {feature.icon}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

