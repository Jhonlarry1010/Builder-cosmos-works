import NotificationArea from "@/components/NotificationArea";
import AnnouncementBanner from "@/components/AnnouncementBanner";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ActionSection from "@/components/ActionSection";
import FeaturedListingsSection from "@/components/FeaturedListingsSection";
import BudgetFriendlySection from "@/components/BudgetFriendlySection";
import CuratedCollectionsSection from "@/components/CuratedCollectionsSection";
import DomainSection from "@/components/DomainSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Fixed notification area in top-right corner */}
      <NotificationArea />

      {/* Blue announcement banner with merger news and Learn More button */}
      <AnnouncementBanner />

      {/* Dark navy header with logo, navigation, language selector, and auth buttons */}
      <Header />

      {/* Dark navy hero section with large heading, search bar, trending tags, and stats */}
      <HeroSection />

      {/* Light gray section with "What would you like to do?" heading and two main action cards */}
      <ActionSection />

      {/* White section showcasing top online business listings in a 3-column grid */}
      <FeaturedListingsSection />

      {/* Light gray section for budget-friendly options under $2,500 */}
      <BudgetFriendlySection />

      {/* White section with curated collections in colorful gradient cards */}
      <CuratedCollectionsSection />

      {/* Light gray section featuring premium domain names in 3 categories */}
      <DomainSection />

      {/* Dark navy footer with newsletter signup, links, and social media */}
      <Footer />
    </div>
  );
};

export default Index;
