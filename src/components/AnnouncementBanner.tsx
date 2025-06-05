import { Button } from "@/components/ui/button";

export default function AnnouncementBanner() {
  return (
    <div
      style={{ backgroundColor: "rgb(0, 88, 255)" }}
      className="text-white py-3"
    >
      <div className="max-w-screen-xl mx-auto px-4 flex items-center justify-center gap-4 text-sm">
        <span className="text-white/90">
          🎉 Exciting merger announcement: We're joining forces with MarketPlace
          Pro!
        </span>
        <Button
          variant="outline"
          size="sm"
          className="bg-transparent border-white/30 text-white hover:bg-white/10 hover:text-white"
        >
          Learn More
        </Button>
      </div>
    </div>
  );
}
