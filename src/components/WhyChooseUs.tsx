import { Zap, GitBranch, Shield, Smile } from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: Zap,
      title: "Cutting-edge AI & Automation",
      description: "Leverage the latest in artificial intelligence and machine learning technologies to stay ahead of the curve."
    },
    {
      icon: GitBranch,
      title: "Seamless Integration",
      description: "Effortlessly integrate our solutions into your existing workflows without disrupting your operations."
    },
    {
      icon: Shield,
      title: "Scalable & Future-Ready",
      description: "Built with enterprise-grade security and scalability to grow with your business needs."
    },
    {
      icon: Smile,
      title: "User-Friendly Experience",
      description: "Intuitive interfaces designed for maximum productivity and minimal learning curve."
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Why Choose <span className="text-gradient">Future Technologies</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We combine innovation, reliability, and user experience to deliver solutions that truly make a difference
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="card-feature group text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in-up">
          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 max-w-4xl mx-auto border border-primary/10">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Ready to Experience the Future?
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              Join thousands of satisfied customers who have transformed their operations with our AI solutions
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 text-primary">
                <Shield className="w-5 h-5" />
                <span className="font-medium">Enterprise Security</span>
              </div>
              <div className="flex items-center gap-2 text-secondary">
                <Zap className="w-5 h-5" />
                <span className="font-medium">Lightning Fast</span>
              </div>
              <div className="flex items-center gap-2 text-primary">
                <Smile className="w-5 h-5" />
                <span className="font-medium">24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;