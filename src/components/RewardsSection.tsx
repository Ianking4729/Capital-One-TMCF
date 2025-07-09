
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export const RewardsSection = () => {
  return (
    <Card className="bg-white shadow-sm hover:shadow-md transition-shadow duration-200">
      <CardHeader className="pb-4">
        <h2 className="text-sm font-medium text-gray-600 uppercase tracking-wide">
          REWARDS
        </h2>
      </CardHeader>
      <CardContent className="text-center space-y-4">
        <div>
          <div className="text-4xl font-bold text-gray-900 mb-1">2,611</div>
          <div className="text-sm text-gray-600">Total Points</div>
        </div>
        
        <Button 
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors duration-200"
        >
          VIEW AND REDEEM
        </Button>
      </CardContent>
    </Card>
  );
};
