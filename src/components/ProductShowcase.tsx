import { Button } from "@/components/ui/button";
import { BookOpen, MessageSquare, Clock, Users, Smartphone, BarChart3, Zap, Shield, Cloud, Key, Lock, CheckCircle } from "lucide-react";
import aiTutorImage from "@/assets/ai-tutor.jpg";
import whatsappSupportImage from "@/assets/whatsapp-support.jpg";
import wabaServiceImage from "@/assets/waba-service.jpg";

const ProductShowcase = () => {
  return (
    <section className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Flagship <span className="text-gradient">Solutions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover how our AI-powered platforms are revolutionizing education and customer support
          </p>
        </div>

        {/* Product 1: RAG-Based Study & Learn Chat System */}
        <div className="mb-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 animate-fade-in-up">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
                <BookOpen className="w-4 h-4" />
                <span className="text-sm font-medium">Education Technology</span>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                RAG-Based Study & Learn Chat System
              </h3>
              
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                An AI-powered personal tutor using Retrieval-Augmented Generation that transforms 
                how students and professionals learn by providing context-aware, personalized assistance.
              </p>

              {/* Features Grid */}
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start gap-3">
                  <MessageSquare className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Context-Aware Answers</h4>
                    <p className="text-sm text-muted-foreground">Intelligent responses based on your specific materials</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <BookOpen className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Document Integration</h4>
                    <p className="text-sm text-muted-foreground">Seamlessly work with notes, PDFs, and study materials</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Personalized Help</h4>
                    <p className="text-sm text-muted-foreground">Adapts to your learning style and pace</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">24/7 Availability</h4>
                    <p className="text-sm text-muted-foreground">Learn anytime, anywhere with instant support</p>
                  </div>
                </div>
              </div>

              {/* Target Audience */}
              <div className="bg-accent/50 rounded-lg p-4 mb-8">
                <h4 className="font-semibold text-foreground mb-2">Perfect For:</h4>
                <p className="text-muted-foreground">Students, professionals, educational institutions, and lifelong learners</p>
              </div>

              <Button className="btn-hero-primary">
                Explore AI Tutor
              </Button>
            </div>

            <div className="order-1 lg:order-2 animate-fade-in-up">
              <div className="relative">
                <img 
                  src={aiTutorImage} 
                  alt="AI-powered learning system" 
                  className="w-full h-auto rounded-2xl shadow-large hover-lift"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl" />
              </div>
            </div>
          </div>
        </div>

        {/* Product 2: WhatsApp Chat-Based Service Ticket System */}
        <div className="mb-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <div className="relative">
                <img 
                  src={whatsappSupportImage} 
                  alt="WhatsApp customer support system" 
                  className="w-full h-auto rounded-2xl shadow-large hover-lift"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/20 to-transparent rounded-2xl" />
              </div>
            </div>

            <div className="animate-fade-in-up">
              <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full mb-6">
                <Smartphone className="w-4 h-4" />
                <span className="text-sm font-medium">Customer Support</span>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                WhatsApp Chat-Based Service Ticket System
              </h3>
              
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                A seamless way for users to raise and track service tickets directly via WhatsApp, 
                revolutionizing customer support with familiar, intuitive communication.
              </p>

              {/* Features Grid */}
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Real-Time Creation</h4>
                    <p className="text-sm text-muted-foreground">Instantly create tickets through WhatsApp chats</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <BarChart3 className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Status Updates</h4>
                    <p className="text-sm text-muted-foreground">Automatic progress notifications and tracking</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <MessageSquare className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">AI-Assisted Responses</h4>
                    <p className="text-sm text-muted-foreground">Smart suggestions and automated replies</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Enhanced Support</h4>
                    <p className="text-sm text-muted-foreground">Improved customer satisfaction and efficiency</p>
                  </div>
                </div>
              </div>

              {/* Target Audience */}
              <div className="bg-accent/50 rounded-lg p-4 mb-8">
                <h4 className="font-semibold text-foreground mb-2">Perfect For:</h4>
                <p className="text-muted-foreground">Businesses, service providers, customer support teams, and organizations</p>
              </div>

              <Button className="bg-gradient-to-r from-secondary to-secondary-light text-white font-semibold px-8 py-4 rounded-xl shadow-medium hover:shadow-large transform hover:scale-[1.02] transition-all duration-300">
                Explore WhatsApp Support
              </Button>
          </div>
        </div>

        {/* Product 3: WABA Service */}
        <div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 animate-fade-in-up">
              <div className="inline-flex items-center gap-2 bg-green-500/10 text-green-600 px-4 py-2 rounded-full mb-6">
                <Smartphone className="w-4 h-4" />
                <span className="text-sm font-medium">WhatsApp Business API</span>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                WABA Service Platform
              </h3>
              
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Complete WhatsApp Business API solution with secure cloud hosting, chatbot implementation, 
                and enterprise-grade security features compliant with banking guidelines.
              </p>

              {/* Pricing Cards */}
              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                <div className="bg-card border border-border rounded-xl p-4 hover:shadow-medium transition-all">
                  <div className="text-sm text-muted-foreground mb-1">Platform Fees (Yearly)</div>
                  <div className="text-2xl font-bold text-foreground">₹xx,xxx <span className="text-sm font-normal text-muted-foreground">+ GST</span></div>
                  <div className="text-xs text-muted-foreground line-through">₹xx,xxx</div>
                </div>
                
                <div className="bg-card border border-border rounded-xl p-4 hover:shadow-medium transition-all">
                  <div className="text-sm text-muted-foreground mb-1">Chatbot Setup (One Time)</div>
                  <div className="text-2xl font-bold text-foreground">₹xx,xxx <span className="text-sm font-normal text-muted-foreground">+ GST</span></div>
                  <div className="text-xs text-muted-foreground line-through">₹xx,xxx</div>
                </div>
              </div>

              {/* Features Grid */}
              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                <div className="flex items-start gap-3">
                  <Cloud className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Amazon Cloud Server</h4>
                    <p className="text-sm text-muted-foreground">India DC for low latency</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Lock className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">IP-Based Security</h4>
                    <p className="text-sm text-muted-foreground">Login and API restrictions</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Key className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Key-Based API</h4>
                    <p className="text-sm text-muted-foreground">Secure authentication</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Login OTP</h4>
                    <p className="text-sm text-muted-foreground">Advanced security verification</p>
                  </div>
                </div>
              </div>

              {/* Message Categories */}
              <div className="bg-accent/50 rounded-lg p-4 mb-6">
                <h4 className="font-semibold text-foreground mb-2">Messaging Categories:</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">Marketing</span>
                  <span className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm">Utility</span>
                  <span className="bg-green-500/10 text-green-600 px-3 py-1 rounded-full text-sm">Authentication</span>
                </div>
                <p className="text-xs text-muted-foreground mt-2">Messaging costs borne by customer via their payment method</p>
              </div>

              {/* Requirements */}
              <div className="bg-card border border-border rounded-lg p-4 mb-8">
                <h4 className="font-semibold text-foreground mb-3">Requirements:</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Facebook account for Meta Business verification</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>KYC documents for verification</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Domain-based email for verification OTP</span>
                  </div>
                </div>
              </div>

              <Button className="bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold px-8 py-4 rounded-xl shadow-medium hover:shadow-large transform hover:scale-[1.02] transition-all duration-300">
                Get WABA Service
              </Button>
            </div>

            <div className="order-1 lg:order-2 animate-fade-in-up">
              <div className="relative">
                <img 
                  src={wabaServiceImage} 
                  alt="WhatsApp Business API service platform" 
                  className="w-full h-auto rounded-2xl shadow-large hover-lift"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-500/20 to-transparent rounded-2xl" />
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;