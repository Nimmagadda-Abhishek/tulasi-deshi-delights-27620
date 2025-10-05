import { MessageCircle } from "lucide-react";
import { Button } from "./ui/button";

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "1234567890"; // Replace with actual WhatsApp number
    const message = encodeURIComponent("Hi! I have a question about Tulasi Foods products.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <Button
      onClick={handleWhatsAppClick}
      className="fixed bottom-24 right-4 md:bottom-6 md:right-6 rounded-full h-14 w-14 shadow-hover bg-success hover:bg-success/90 text-success-foreground z-40"
      size="icon"
    >
      <MessageCircle className="h-6 w-6" />
    </Button>
  );
};

export default WhatsAppButton;
