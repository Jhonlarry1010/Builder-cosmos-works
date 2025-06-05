import { ShoppingCart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function ActionSection() {
  return (
    <section
      style={{ backgroundColor: "rgb(249, 250, 251)" }}
      className="py-24"
    >
      <div className="max-w-screen-xl mx-auto px-4">
        <h2
          className="text-4xl font-bold text-center mb-16"
          style={{ color: "rgb(0, 31, 68)" }}
        >
          Find Your Perfect Business
        </h2>

        <div className="flex justify-center max-w-2xl mx-auto">
          {/* Buy a Business */}
          <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white">
            <CardHeader className="text-center pb-4">
              <div
                className="mx-auto mb-4 p-4 rounded-full"
                style={{ backgroundColor: "rgb(0, 88, 255)" }}
              >
                <ShoppingCart className="h-8 w-8 text-white" />
              </div>
              <CardTitle
                className="text-2xl font-bold"
                style={{ color: "rgb(0, 31, 68)" }}
              >
                Buy a Business
              </CardTitle>
              <CardDescription
                className="text-lg"
                style={{ color: "rgb(75, 85, 99)" }}
              >
                Browse thousands of profitable businesses ready for acquisition
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <ul
                className="text-left space-y-3 mb-8"
                style={{ color: "rgb(75, 85, 99)" }}
              >
                <li className="flex items-center">
                  <div
                    className="w-2 h-2 rounded-full mr-3"
                    style={{ backgroundColor: "rgb(0, 88, 255)" }}
                  ></div>
                  Vetted and verified listings
                </li>
                <li className="flex items-center">
                  <div
                    className="w-2 h-2 rounded-full mr-3"
                    style={{ backgroundColor: "rgb(0, 88, 255)" }}
                  ></div>
                  Complete financial documentation
                </li>
                <li className="flex items-center">
                  <div
                    className="w-2 h-2 rounded-full mr-3"
                    style={{ backgroundColor: "rgb(0, 88, 255)" }}
                  ></div>
                  Expert buyer support
                </li>
              </ul>
              <Button
                size="lg"
                className="w-full group-hover:scale-105 transition-transform"
                style={{ backgroundColor: "rgb(0, 88, 255)" }}
              >
                Browse Businesses
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
