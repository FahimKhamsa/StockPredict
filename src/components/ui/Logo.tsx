import React from "react";
import { TrendingUp } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Logo: React.FC = () => {
  const navigate = useNavigate();

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <a
      href="/"
      onClick={handleLogoClick}
      className="flex items-center space-x-2"
    >
      <TrendingUp size={28} className="text-deepBlue dark:text-white" />
      <span className="font-sans font-bold text-xl">StockPredict</span>
    </a>
  );
};

export default Logo;
