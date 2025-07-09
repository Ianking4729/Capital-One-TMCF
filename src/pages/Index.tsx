
import { Navigation } from "@/components/Navigation";
import { RewardsSection } from "@/components/RewardsSection";
import { PromotionalOffers } from "@/components/PromotionalOffers";
import { SpendingSection } from "@/components/SpendingSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="container mx-auto px-4 py-8 max-w-md">
        <div className="space-y-6">
          <RewardsSection />
          <PromotionalOffers />
          <SpendingSection />
        </div>
      </div>
    </div>
  );
};

export default Index;
