import { Check, Sparkles } from 'lucide-react';

export default function Pricing() {
  const themeColors = {
    limeGreen: '#84cc16',
    teal: '#14b8a6',
    black: '#000000',
    white: '#ffffff',
    gray: '#6b7280',
    grayLight: '#f3f4f6',
  };

  const plans = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for small businesses just getting started',
      features: [
        'Up to 100 products',
        'Real-time inventory sync',
        'Basic order management',
        'Email support',
        '1 Etsy shop connection',
      ],
      popular: false,
    },
    {
      name: 'Professional',
      price: '$79',
      period: '/month',
      description: 'Ideal for growing businesses with multiple products',
      features: [
        'Unlimited products',
        'Real-time inventory sync',
        'Advanced order management',
        'Priority support',
        'Multiple Etsy shop connections',
        'Bulk operations',
        'Advanced analytics',
      ],
      popular: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For large businesses with custom requirements',
      features: [
        'Everything in Professional',
        'Dedicated account manager',
        'Custom integrations',
        '24/7 phone support',
        'SLA guarantee',
        'Custom reporting',
        'Training & onboarding',
      ],
      popular: false,
    },
  ];

  return (
    <section className="py-20 px-4" style={{ backgroundColor: themeColors.white }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: themeColors.black }}>
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: themeColors.gray }}>
            Choose the plan that's right for your business. All plans include a 14-day free trial.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`rounded-2xl p-8 border-2 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 relative ${
                plan.popular ? 'scale-105' : ''
              }`}
              style={{
                backgroundColor: plan.popular ? themeColors.white : themeColors.white,
                borderColor: plan.popular ? themeColors.teal : themeColors.grayLight,
                boxShadow: plan.popular ? `0 20px 40px rgba(20, 184, 166, 0.2)` : '0 4px 6px rgba(0, 0, 0, 0.05)',
              }}
            >
              {plan.popular && (
                <div 
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 rounded-full text-sm font-semibold"
                  style={{
                    background: `linear-gradient(135deg, ${themeColors.limeGreen} 0%, ${themeColors.teal} 100%)`,
                    color: themeColors.white,
                  }}
                >
                  Most Popular
                </div>
              )}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2" style={{ color: themeColors.black }}>
                  {plan.name}
                </h3>
                <div className="flex items-baseline justify-center gap-1 mb-2">
                  <span className="text-4xl font-bold" style={{ color: themeColors.black }}>
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-lg" style={{ color: themeColors.gray }}>
                      {plan.period}
                    </span>
                  )}
                </div>
                <p className="text-sm" style={{ color: themeColors.gray }}>
                  {plan.description}
                </p>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-3">
                    <Check size={20} style={{ color: themeColors.teal, flexShrink: 0, marginTop: '2px' }} />
                    <span className="text-base leading-relaxed" style={{ color: themeColors.black }}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <button
                className="w-full px-6 py-3 rounded-lg text-base font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
                style={{
                  background: plan.popular
                    ? `linear-gradient(135deg, ${themeColors.limeGreen} 0%, ${themeColors.teal} 100%)`
                    : themeColors.grayLight,
                  color: plan.popular ? themeColors.white : themeColors.black,
                }}
              >
                {plan.price === 'Custom' ? 'Contact Sales' : 'Start Free Trial'}
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div 
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg"
            style={{ backgroundColor: themeColors.grayLight }}
          >
            <Sparkles size={20} style={{ color: themeColors.teal }} />
            <span className="text-base" style={{ color: themeColors.black }}>
              All plans include a 14-day free trial. No credit card required.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

