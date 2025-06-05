import { Search, Globe, User, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export default function Header() {
  return (
    <header
      style={{ backgroundColor: "rgb(0, 31, 68)" }}
      className="text-white"
    >
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-xl font-bold">BusinessHub</div>
          </div>

          {/* Navigation */}
          <NavigationMenu className="hidden md:block">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-white hover:bg-white/10">
                  Browse
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="p-4 w-[200px]">
                    <NavigationMenuLink className="block p-2 hover:bg-gray-100 rounded text-gray-900">
                      Online Businesses
                    </NavigationMenuLink>
                    <NavigationMenuLink className="block p-2 hover:bg-gray-100 rounded text-gray-900">
                      Physical Businesses
                    </NavigationMenuLink>
                    <NavigationMenuLink className="block p-2 hover:bg-gray-100 rounded text-gray-900">
                      Domains
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className="px-4 py-2 hover:bg-white/10 rounded">
                  Sell
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className="px-4 py-2 hover:bg-white/10 rounded">
                  Resources
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Right side */}
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:bg-white/10 hidden md:flex"
            >
              <Globe className="h-4 w-4 mr-2" />
              EN
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="bg-transparent border-white/30 text-white hover:bg-white/10 hover:text-white hidden md:block"
            >
              Sign In
            </Button>
            <Button
              size="sm"
              style={{ backgroundColor: "rgb(0, 88, 255)" }}
              className="hover:opacity-90 hidden md:block"
            >
              Sign Up
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:bg-white/10 md:hidden"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
