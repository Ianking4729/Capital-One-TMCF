import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Plus } from "lucide-react";

interface AvailableReward {
  id: string;
  title: string;
  points: number;
  image: string;
}

export const RewardsSection = ({
  points,
  availableRewards,
  onRewardClick
}: {
  points: number;
  availableRewards: AvailableReward[];
  onRewardClick: (reward: AvailableReward) => void;
}) => (
  <Card className="bg-white shadow-sm hover:shadow-md transition-shadow duration-200">
    <CardHeader className="pb-4">
      <h2 className="text-sm font-medium text-gray-600 uppercase tracking-wide">
        REWARDS
      </h2>
    </CardHeader>
    <CardContent className="text-center space-y-6">
      <div>
        <div className="text-4xl font-bold text-gray-900 mb-1">{points}</div>
        <div className="text-sm text-gray-600">Total Points</div>
      </div>
      
      <Button 
        className="w-full bg-blue-900 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors duration-200"
      >
        VIEW AND REDEEM
      </Button>

      <div className="space-y-4">
        <h3 className="text-sm font-medium text-gray-600 uppercase tracking-wide text-left">
          You're earning
        </h3>
        <div className="space-y-3">
          {availableRewards.map((reward) => (
            <div
              key={reward.id}
              onClick={() => onRewardClick(reward)}
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
                <div className="text-xs text-gray-600">{reward.points}</div>
              </div>
              <div className="w-8 h-8 bg-blue-900 rounded-full flex items-center justify-center group-hover:bg-blue-700 transition-colors duration-200">
                <Plus className="w-4 h-4 text-white" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </CardContent>
  </Card>
);

