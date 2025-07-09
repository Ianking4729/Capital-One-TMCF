
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export const SpendingSection = () => {
  const spentPercentage = 78;
  const circumference = 2 * Math.PI * 45;
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (spentPercentage / 100) * circumference;

  return (
    <Card className="bg-white shadow-sm hover:shadow-md transition-shadow duration-200">
      <CardHeader className="pb-4">
        <h2 className="text-sm font-medium text-gray-600 uppercase tracking-wide">
          SPENDING & BUDGETING
        </h2>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-start space-x-4">
          <div className="relative w-16 h-16 flex-shrink-0">
            <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r="45"
                stroke="#f3f4f6"
                strokeWidth="8"
                fill="none"
              />
              <circle
                cx="50"
                cy="50"
                r="45"
                stroke="#f97316"
                strokeWidth="8"
                fill="none"
                strokeDasharray={strokeDasharray}
                strokeDashoffset={strokeDashoffset}
                className="transition-all duration-500 ease-in-out"
              />
            </svg>
          </div>
          
          <div className="flex-1">
            <h3 className="text-sm font-medium text-gray-900 mb-1">
              Total December Spending
            </h3>
            <div className="text-2xl font-bold text-gray-900 mb-2">$446.00</div>
            <p className="text-sm text-gray-600">
              You've spent <span className="font-semibold">{spentPercentage}%</span> of your monthly average.
            </p>
          </div>
        </div>
        
        <Button 
          variant="outline" 
          className="w-full border-blue-600 text-blue-600 hover:bg-blue-50 font-medium py-2 px-4 rounded transition-colors duration-200"
        >
          TRACK SPENDING
        </Button>
      </CardContent>
    </Card>
  );
};
