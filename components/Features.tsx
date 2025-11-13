// components/Features.tsx
'use client';

const features = [
  {
    icon: 'brain',
    title: 'Predictive Analytics',
    description: 'Leverage AI to forecast trends and make data-driven decisions for your business operations.'
  },
  {
    icon: 'zap',
    title: 'Automated Workflows',
    description: 'Streamline processes with intelligent automation that adapts to your business needs.'
  },
  {
    icon: 'shield',
    title: 'Enhanced Security',
    description: 'Enterprise-grade security with AI-powered threat detection and prevention.'
  },
  {
    icon: 'bar-chart',
    title: 'Real-time Insights',
    description: 'Get instant visibility into your operations with comprehensive dashboards and reports.'
  },
  {
    icon: 'git-branch',
    title: 'Seamless Integration',
    description: 'Connect with your existing systems and tools without disrupting workflows.'
  },
  {
    icon: 'users',
    title: 'Collaborative Tools',
    description: 'Enable teams to work together efficiently with shared insights and coordinated actions.'
  }
];

export default function Features() {
  return (
    <section id="features" className="py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--brand-text)' }}>
            Powerful Features for Modern ERP
          </h2>
          <p className="text-lg max-w-2xl mx-auto muted">
            Discover how our AI engine transforms traditional ERP systems into intelligent business partners
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="card p-6 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-lg brand-gradient flex items-center justify-center mb-4">
                <i data-lucide={feature.icon} className="h-6 w-6 text-white"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--brand-text)' }}>
                {feature.title}
              </h3>
              <p className="muted">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}