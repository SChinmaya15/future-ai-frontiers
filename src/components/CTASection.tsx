import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Phone, MessageCircle } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 bg-gradient-hero relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-72 h-72 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2" />
        <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-white rounded-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          {/* Main CTA Content */}
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Ready to Transform Your 
            <br />
            <span className="bg-gradient-to-r from-white to-secondary-light bg-clip-text text-transparent">
              Digital Experience?
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            Contact Future Technologies today and discover how our AI-powered solutions 
            can revolutionize your learning and customer support operations.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button className="btn-hero-primary group text-lg px-10 py-5">
              Get In Touch
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button className="btn-hero-secondary text-lg px-10 py-5">
              Schedule a Demo
            </Button>
          </div>

          {/* Contact Options */}
          <div className="grid sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
              <Mail className="w-8 h-8 text-white mb-3 mx-auto group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-white mb-1">Email Us</h3>
              <p className="text-white/80 text-sm">info@futuretech.ai</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
              <Phone className="w-8 h-8 text-white mb-3 mx-auto group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-white mb-1">Call Us</h3>
              <p className="text-white/80 text-sm">+1 (555) 123-4567</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
              <MessageCircle className="w-8 h-8 text-white mb-3 mx-auto group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-white mb-1">Live Chat</h3>
              <p className="text-white/80 text-sm">24/7 Support</p>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-12 border-t border-white/20">
            <p className="text-white/80 mb-6">Trusted by industry leaders worldwide</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="bg-white/20 rounded-lg px-6 py-3 text-white font-semibold">
                TechCorp
              </div>
              <div className="bg-white/20 rounded-lg px-6 py-3 text-white font-semibold">
                EduPlatform
              </div>
              <div className="bg-white/20 rounded-lg px-6 py-3 text-white font-semibold">
                ServicePro
              </div>
              <div className="bg-white/20 rounded-lg px-6 py-3 text-white font-semibold">
                LearnMax
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;