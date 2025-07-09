
import { Menu, Mail, ShoppingCart, FileText } from "lucide-react";

export const Navigation = () => {
  return (
    <div className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-4">
            <Menu className="h-6 w-6 text-gray-600" />
            <span className="text-sm text-gray-600">Menu</span>
          </div>
          
          <div className="flex items-center space-x-6">
            <div className="flex flex-col items-center">
              <Mail className="h-5 w-5 text-gray-600" />
              <span className="text-xs text-gray-600">Inbox</span>
            </div>
            <div className="flex flex-col items-center">
              <ShoppingCart className="h-5 w-5 text-gray-600" />
              <span className="text-xs text-gray-600">Products</span>
            </div>
            <div className="flex flex-col items-center">
              <FileText className="h-5 w-5 text-gray-600" />
              <span className="text-xs text-gray-600">Log Out</span>
            </div>
          </div>
        </div>
        
        <div className="flex border-b">
          <div className="px-4 py-2 border-b-2 border-red-500">
            <span className="text-sm font-medium text-red-500">My Card</span>
          </div>
          <div className="px-4 py-2">
            <span className="text-sm text-gray-600">Dashboard</span>
          </div>
        </div>
      </div>
    </div>
  );
};
