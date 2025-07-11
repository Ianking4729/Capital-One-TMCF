import { useState, useEffect } from "react";
import { Menu, Mail, ShoppingCart, FileText } from "lucide-react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import Index from "./pages/Index";

// Import images
import cap1Logo from "/images/Cap1logo.png";
import travelIcon from "/images/Cap1-icons/Travel.png";
import foodIcon from "/images/Cap1-icons/Food.png";
import loungeIcon from "/images/Cap1-icons/Lounge.png";
import onlineIcon from "/images/Cap1-icons/Online.png";
import entertainmentIcon from "/images/Cap1-icons/Entr.png";

const queryClient = new QueryClient();

const users = [
	{
		name: "Taylor(old)",
		pfp: cap1Logo,
		points: 2611,
		availableRewards: [
			{ id: "1", title: "Travel", points: "3%", image: travelIcon },
      { id: "2", title: "Food", points: "2%", image: foodIcon },
      { id: "3", title: "Lounge", points: "1.5%", image: loungeIcon },
		],
	},
	{
		name: "Taylor(new)",
		pfp: cap1Logo,
		points: 1340,
		availableRewards: [
			{ id: "1", title: "Online Shopping", points: "2.5%", image: onlineIcon },
      { id: "2", title: "Food", points: "2.5%", image: foodIcon },
      { id: "3", title: "Entertainment", points: "1.5%", image: entertainmentIcon },
		], 
	},
];

const App = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	const [activeUser, setActiveUser] = useState(users[0]);
	const [selectedReward, setSelectedReward] = useState(null);
	const [showRewardModal, setShowRewardModal] = useState(false);
	const [showProfilePopup, setShowProfilePopup] = useState(false);

	// Show profile popup after 20 seconds
	useEffect(() => {
		const timer = setTimeout(() => {
			setShowProfilePopup(true);
		}, 20000);

		return () => clearTimeout(timer);
	}, []);

	const handleProfileClick = (user) => {
		setActiveUser(user);
		setMenuOpen(false);
	};

	const handleRewardClick = (reward) => {
		setSelectedReward(reward);
		setShowRewardModal(true);
	};

	const handleCloseModal = () => {
		setShowRewardModal(false);
		setSelectedReward(null);
	};

	const handleSwitchToNewProfile = () => {
		setActiveUser(users[1]); // Switch to "Taylor(new)" profile
		setShowProfilePopup(false);
	};

	const handleCloseProfilePopup = () => {
		setShowProfilePopup(false);
	};

	return (
		<QueryClientProvider client={queryClient}>
			<TooltipProvider>
				<Toaster />
				<Sonner />
				{/* Navigation Bar */}
				<div className="bg-white shadow-sm">
					<div className="container mx-auto px-4">
						<div className="flex items-center justify-between py-4">
							{/* Left: Menu Icon and Label */}
							<div className="flex items-center space-x-4 relative">
								<button
									onClick={() => setMenuOpen((open) => !open)}
									className="flex items-center space-x-2 focus:outline-none"
								>
									<Menu className="h-6 w-6 text-gray-600" />
									<span className="text-sm text-gray-600">Menu</span>
								</button>
								{/* Profile Dropdown */}								{menuOpen && (
									<div className="absolute left-0 top-10 bg-white border rounded shadow-lg z-20 min-w-[180px]">
										{users.map((user) => (
											<button
												key={user.name}
												className="flex items-center w-full px-4 py-2 text-left hover:bg-gray-100"
												onClick={() => handleProfileClick(user)}
											>
												<img
													src={user.pfp}
													alt={user.name}
													className="w-6 h-6 rounded-full mr-2"
												/>
												<span>{user.name}</span>
											</button>
										))}
									</div>
								)}
							</div>
							{/* Right: Icons */}
							<div className="flex items-center space-x-6">
								<div className="flex flex-col items-center">
									<Mail className="h-5 w-5 text-gray-600" />
									<span className="text-xs text-gray-600">Inbox</span>
								</div>
								<div className="flex flex-col items-center">
									<FileText className="h-5 w-5 text-gray-600" />
									<span className="text-xs text-gray-600">Log Out</span>
								</div>
					
							</div>
						</div>
						{/* Tabs */}
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
				{/* Main Content */}
				<Index user={activeUser} onRewardClick={handleRewardClick} />
				{showRewardModal && selectedReward && (
  <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full relative m-4">
      <button
        className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        onClick={handleCloseModal}
      >
        &times;
      </button>
      <img src={selectedReward.image} alt={selectedReward.title} className="w-24 h-24 mx-auto rounded mb-4" />
      <h2 className="text-xl font-bold mb-2">{selectedReward.title}</h2>
      <div className="text-gray-700 mb-2">Points: {selectedReward.points}</div>
      <div className="text-gray-600 text-sm">Up to $2,000<br></br>1% Unlimited cash back on everything else outside the bonus categories</div>
    </div>
  </div>
)}

				{/* Profile Switch Popup */}
				{showProfilePopup && (
					<div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
						<div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full relative m-4">
							<button
								className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl"
								onClick={handleCloseProfilePopup}
							>
								&times;
							</button>
							<div className="text-center">
								<img 
									src={cap1Logo} 
									alt="Capital One" 
									className="w-16 h-16 mx-auto mb-4" 
								/>
								<h2 className="text-xl font-bold mb-3 text-gray-800">
									Discover Your New Rewards Profile!
								</h2>
								<p className="text-gray-600 mb-4 text-sm leading-relaxed">
									We've updated your rewards program with exciting new categories! 
									Switch to your new profile to unlock better cashback rates on 
									online shopping, dining, and entertainment.
								</p>
								<div className="bg-blue-50 p-3 rounded-lg mb-4">
									<p className="text-sm text-blue-800 font-medium">
										New Profile Benefits:
									</p>
									<ul className="text-xs text-blue-700 mt-1 space-y-1">
										<li>• 2.5% cashback on online shopping</li>
										<li>• 2.5% cashback on dining</li>
										<li>• 1.5% cashback on entertainment</li>
									</ul>
								</div>
								<button
									onClick={handleSwitchToNewProfile}
									className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors font-medium"
								>
									Switch to New Profile
								</button>
							</div>
						</div>
					</div>
				)}
			</TooltipProvider>
		</QueryClientProvider>
	);
};

export default App;