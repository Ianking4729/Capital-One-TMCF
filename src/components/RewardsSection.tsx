
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Plus } from "lucide-react";

interface AvailableReward {
  id: string;
  title: string;
  points: number;
  image: string;
}

const availableRewards: AvailableReward[] = [
  {
    id: "1",
    title: "Coffee Voucher",
    points: 500,
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=300&h=200&fit=crop"
  },
  {
    id: "2", 
    title: "Movie Ticket",
    points: 800,
    image: "https://images.unsplash.com/photo-1489185078527-08140a2e1abb?w=300&h=200&fit=crop"
  },
  {
    id: "3",
    title: "Gift Card",
    points: 1000,
    image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=300&h=200&fit=crop"
  }
];

export const RewardsSection = () => {
  const handleRewardClick = (reward: AvailableReward) => {
    console.log(`Clicked reward: ${reward.title}`);
  };

  return (
    <Card className="bg-white shadow-sm hover:shadow-md transition-shadow duration-200">
      <CardHeader className="pb-4">
        <h2 className="text-sm font-medium text-gray-600 uppercase tracking-wide">
          REWARDS
        </h2>
      </CardHeader>
      <CardContent className="text-center space-y-6">
        <div>
          <div className="text-4xl font-bold text-gray-900 mb-1">2,611</div>
          <div className="text-sm text-gray-600">Total Points</div>
        </div>
        
        <Button 
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors duration-200"
        >
          VIEW AND REDEEM
        </Button>

        <div className="space-y-4">
          <h3 className="text-sm font-medium text-gray-600 uppercase tracking-wide text-left">
            Available Rewards
          </h3>
          <div className="space-y-3">
            {availableRewards.map((reward) => (
              <div
                key={reward.id}
                onClick={() => handleRewardClick(reward)}
                className="flex items-center space-x-3 p-3 rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-200 cursor-pointer group"
              >
                <div className="relative w-16 h-12 rounded-md overflow-hidden flex-shrink-0">
                  <img 
                    src={reward.image} 
                    alt={reward.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 text-left">
                  <div className="font-medium text-gray-900 text-sm">{reward.title}</div>
                  <div className="text-xs text-gray-600">{reward.points} points</div>
                </div>
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center group-hover:bg-blue-700 transition-colors duration-200">
                  <Plus className="w-4 h-4 text-white" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
