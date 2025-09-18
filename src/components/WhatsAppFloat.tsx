import { MessageCircle } from "lucide-react";
import { useState } from "react";

const WhatsAppFloat = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleWhatsAppClick = () => {
 const groupLink='IXqJxR2RSPIDAm4IBGNUBh'
      const url = `https://chat.whatsapp.com/${groupLink}`; // Replace with your group's invite link
  window.open(url, '_blank');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={handleWhatsAppClick}
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse hover:animate-none"
        aria-label="Contact us on WhatsApp"
      >
        
  <img src="/whatsapp.svg" alt="WhatsApp" className="h-6 w-6" />
      </button>
      
      {/* Tooltip */}
      <div className="absolute bottom-16 right-0 bg-gray-800 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        Chat with us on WhatsApp
        <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
      </div>
    </div>
  );
};

export default WhatsAppFloat;