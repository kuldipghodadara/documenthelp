import { Phone, Mail, MapPin, FileText, MessageCircle } from "lucide-react";

const Footer = () => {
  const handleWhatsAppClick = () => {
    const groupLink='IXqJxR2RSPIDAm4IBGNUBh'
      const url = `https://chat.whatsapp.com/${groupLink}`; // Replace with your group's invite link
  window.open(url, '_blank');
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="p-2 bg-gradient-primary rounded-lg shadow-soft">
                <FileText className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">DocuHelp</h3>
                <p className="text-sm text-muted-foreground">Document Services</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              We provide comprehensive document services including form filling, document corrections, 
              updates, and assistance with various government and official documents.
            </p>
            <button
              onClick={handleWhatsAppClick}
              className="inline-flex items-center px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors duration-200"
            >
  <img src="/whatsapp.svg" alt="WhatsApp" className="mr-2 h-6 w-6" />
              WhatsApp Us
            </button>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>Aadhaar Card Services</li>
              <li>Passport Application</li>
              <li>Voter ID Card</li>
              <li>Ration Card</li>
              <li>Driving License</li>
              <li>Scholarship Forms</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-muted-foreground">
 <div className="flex items-center space-x-2">
  <a href="tel:+917623922532" className="flex items-center space-x-1 ">
    <Phone className="h-4 w-4 text-primary" />
    <span>+91 76239 22532</span>
  </a>
</div>

               <div className="flex items-center space-x-2">
  <a href="tel:+919925809870" className="flex items-center space-x-1 ">
    <Phone className="h-4 w-4 text-primary" />
    <span>+91 99258 09870</span>
  </a>
</div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary" />
                <span>info@docuhelp.com</span>
              </div>
              {/* <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Your Address Here</span>
              </div> */}
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 DocuHelp. All rights reserved. Professional Document Services.</p>
                    <p>Design by Hemang and Developed by Kuldip</p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;