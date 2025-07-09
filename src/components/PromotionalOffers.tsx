
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { DollarSign } from "lucide-react";

export const PromotionalOffers = () => {
  return (
    <Card className="bg-white shadow-sm hover:shadow-md transition-shadow duration-200">
      <CardHeader className="pb-4">
        <h2 className="text-sm font-medium text-gray-600 uppercase tracking-wide">
          PROMOTIONAL OFFERS
        </h2>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <DollarSign className="h-6 w-6 text-red-600" />
          </div>
          <div className="flex-1">
            <p className="text-gray-900 text-sm font-medium">
              Take advantage of special offers on your card.
            </p>
          </div>
        </div>
        
        <Button 
          variant="outline" 
          className="w-full border-blue-600 text-blue-600 hover:bg-blue-50 font-medium py-2 px-4 rounded transition-colors duration-200"
        >
          VIEW OFFERS
        </Button>
      </CardContent>
    </Card>
  );
};
