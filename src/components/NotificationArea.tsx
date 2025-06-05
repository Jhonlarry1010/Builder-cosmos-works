import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotificationArea() {
  return (
    <div className="fixed top-4 right-4 z-50 max-w-sm">
      <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-4">
        <div className="flex items-start justify-between">
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900">
              New listings available
            </p>
            <p className="text-sm text-gray-500 mt-1">
              Check out the latest business opportunities
            </p>
          </div>
          <Button
            variant="ghost"
            size="sm"
            className="ml-2 h-6 w-6 p-0 text-gray-400 hover:text-gray-600"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
