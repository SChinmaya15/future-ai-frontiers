import { Linkedin, Twitter, Github, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 bg-foreground text-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Future Technologies</h3>
            <p className="text-background/80 mb-6 max-w-md">
              Shaping smarter interactions through innovative AI-powered solutions 
              for learning and customer support.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center hover:bg-primary-light transition-colors cursor-pointer">
                <Linkedin className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center hover:bg-primary-light transition-colors cursor-pointer">
                <Twitter className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center hover:bg-primary-light transition-colors cursor-pointer">
                <Github className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center hover:bg-primary-light transition-colors cursor-pointer">
                <Mail className="w-5 h-5" />
              </div>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-semibold mb-4">Solutions</h4>
            <ul className="space-y-2 text-background/80">
              <li><a href="#" className="hover:text-background transition-colors">AI Tutor System</a></li>
              <li><a href="#" className="hover:text-background transition-colors">WhatsApp Support</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Custom AI Solutions</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Enterprise Plans</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-background/80">
              <li><a href="#" className="hover:text-background transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-background/20 flex flex-col md:flex-row justify-between items-center">
          <p className="text-background/60 text-sm mb-4 md:mb-0">
            © 2024 Future Technologies. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-background/60">
            <a href="#" className="hover:text-background transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-background transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-background transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;