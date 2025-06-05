import { Mail, Twitter, Facebook, Linkedin, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Footer() {
  return (
    <footer
      style={{ backgroundColor: "rgb(0, 31, 68)" }}
      className="text-white py-16"
    >
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Newsletter Section */}
        <div className="text-center mb-16">
          <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Get the latest business opportunities, market insights, and
            exclusive deals delivered to your inbox
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <Input
              placeholder="Enter your email"
              className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
            />
            <Button
              style={{ backgroundColor: "rgb(0, 88, 255)" }}
              className="hover:opacity-90"
            >
              <Mail className="h-4 w-4 mr-2" />
              Subscribe
            </Button>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4">BusinessHub</h4>
            <p className="text-white/70 text-sm mb-4">
              The leading marketplace for buying and selling online businesses,
              domains, and digital assets.
            </p>
            <div className="flex space-x-4">
              <Button
                variant="ghost"
                size="sm"
                className="text-white/70 hover:text-white hover:bg-white/10 p-2"
              >
                <Twitter className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-white/70 hover:text-white hover:bg-white/10 p-2"
              >
                <Facebook className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-white/70 hover:text-white hover:bg-white/10 p-2"
              >
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-white/70 hover:text-white hover:bg-white/10 p-2"
              >
                <Instagram className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Browse */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Browse</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white/70 hover:text-white text-sm">
                  Online Businesses
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white text-sm">
                  E-commerce Stores
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white text-sm">
                  SaaS Businesses
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white text-sm">
                  Content Sites
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white text-sm">
                  Domain Names
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white text-sm">
                  Mobile Apps
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white/70 hover:text-white text-sm">
                  Buyer Guide
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white text-sm">
                  Business Valuation
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white text-sm">
                  Market Insights
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white text-sm">
                  Success Stories
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white text-sm">
                  Investment Tips
                </a>
              </li>
            </ul>
          </div>
          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white/70 hover:text-white text-sm">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white text-sm">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white text-sm">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white text-sm">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white text-sm">
                  Security
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-sm mb-4 md:mb-0">
              © 2024 BusinessHub. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-white/60 hover:text-white">
                Privacy
              </a>
              <a href="#" className="text-white/60 hover:text-white">
                Terms
              </a>
              <a href="#" className="text-white/60 hover:text-white">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
