import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import DocumentGuideModal from "./DocumentGuideModal";
import { documentGuides } from "@/data/documentGuides";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
  popular?: boolean;
}

const ServiceCard = ({
  title,
  description,
  icon: Icon,
  features,
  popular,
}: ServiceCardProps) => {
  const handleGetHelp = () => {
    const phoneNumber = "7623922532"; // Replace with your number
    const message = `Hi! I need help with ${title} services.`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <Card
      className={`relative bg-gradient-card shadow-card hover:shadow-glow transition-all duration-300 transform hover:-translate-y-1 ${
        popular ? "ring-2 ring-primary" : ""
      }`}
    >
      {popular && (
        <Badge className="absolute -top-2 left-4 bg-gradient-primary text-primary-foreground">
          Most Popular
        </Badge>
      )}

      <CardHeader className="text-center pb-4">
        <div className="mx-auto mb-4 p-3 bg-accent rounded-full w-fit">
          <Icon className="h-8 w-8 text-primary" />
        </div>
        <CardTitle className="text-foreground">{title}</CardTitle>
        <CardDescription className="text-muted-foreground">
          {description}
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li
              key={index}
              className="flex items-center space-x-2 text-sm text-muted-foreground"
            >
              <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <div className="space-y-2">
          <Button
            onClick={handleGetHelp}
            className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300"
          >
            Get Help Now
          </Button>

          {documentGuides[title as keyof typeof documentGuides] && (
            <DocumentGuideModal
              serviceName={title}
              guideData={documentGuides[title as keyof typeof documentGuides]}
            />
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
