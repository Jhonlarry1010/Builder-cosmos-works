import { DollarSign, Calendar, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const budgetListings = [
  {
    id: 1,
    title: "Starter Blog Network",
    description: "3 monetized blogs with consistent traffic",
    price: "$1,800",
    monthlyProfit: "$150",
    age: "8 months",
    category: "Content",
  },
  {
    id: 2,
    title: "Dropshipping Store",
    description: "Validated products with supplier relationships",
    price: "$2,200",
    monthlyProfit: "$300",
    age: "6 months",
    category: "E-commerce",
  },
  {
    id: 3,
    title: "Local Service Directory",
    description: "Directory site for specific geographic area",
    price: "$1,500",
    monthlyProfit: "$120",
    age: "1 year",
    category: "Directory",
  },
  {
    id: 4,
    title: "Mobile App Template",
    description: "React Native app with monetization ready",
    price: "$2,400",
    monthlyProfit: "$200",
    age: "4 months",
    category: "Mobile",
  },
];

export default function BudgetFriendlySection() {
  return (
    <section
      style={{ backgroundColor: "rgb(249, 250, 251)" }}
      className="py-24"
    >
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="text-center mb-16">
          <Badge
            className="mb-4 text-white"
            style={{ backgroundColor: "rgb(34, 197, 94)" }}
          >
            Budget Friendly
          </Badge>
          <h2
            className="text-4xl font-bold mb-4"
            style={{ color: "rgb(0, 31, 68)" }}
          >
            Opportunities Under $2,500
          </h2>
          <p className="text-xl" style={{ color: "rgb(75, 85, 99)" }}>
            Perfect starting points for new entrepreneurs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {budgetListings.map((listing) => (
            <Card
              key={listing.id}
              className="hover:shadow-lg transition-shadow border border-gray-200 bg-white"
            >
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary" className="text-xs">
                    {listing.category}
                  </Badge>
                  <span
                    className="text-lg font-bold"
                    style={{ color: "rgb(0, 88, 255)" }}
                  >
                    {listing.price}
                  </span>
                </div>
                <CardTitle
                  className="text-lg"
                  style={{ color: "rgb(0, 31, 68)" }}
                >
                  {listing.title}
                </CardTitle>
                <CardDescription className="text-sm">
                  {listing.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-3 mb-4">
                  <div className="flex items-center text-sm">
                    <DollarSign className="h-4 w-4 mr-2 text-green-500" />
                    <span className="text-gray-600">Profit: </span>
                    <span className="font-semibold text-green-600 ml-1">
                      {listing.monthlyProfit}/mo
                    </span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Calendar
                      className="h-4 w-4 mr-2"
                      style={{ color: "rgb(0, 88, 255)" }}
                    />
                    <span className="text-gray-600">Age: {listing.age}</span>
                  </div>
                </div>
                <Button
                  size="sm"
                  className="w-full"
                  style={{ backgroundColor: "rgb(0, 88, 255)" }}
                >
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            variant="outline"
            className="border-2"
            style={{
              borderColor: "rgb(34, 197, 94)",
              color: "rgb(34, 197, 94)",
            }}
          >
            Browse All Budget Options
          </Button>
        </div>
      </div>
    </section>
  );
}
