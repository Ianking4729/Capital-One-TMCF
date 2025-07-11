import { RewardsSection } from "@/components/RewardsSection";
import { PromotionalOffers } from "@/components/PromotionalOffers";
import { SpendingSection } from "@/components/SpendingSection";

const Index = ({ user, onRewardClick }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8 max-w-md">
        <div className="space-y-6">
          {/* Card and Greeting Section */}
          <div className="flex flex-col items-center space-y-2 mb-6">
            <img
              src="/Capital-One-TMCF/images/FlexPlusCard.png" // <-- Replace with your card image path
              alt="Card"
            />
            <h2 className="text-lg font-semibold text-gray-800">
              Hello, John!
            </h2>
          </div>
          <RewardsSection
            points={user.points}
            availableRewards={user.availableRewards}
            onRewardClick={onRewardClick}
          />
          <PromotionalOffers />
          <SpendingSection />
        </div>
      </div>
    </div>
  );
};

export default Index;
