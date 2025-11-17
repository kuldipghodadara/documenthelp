import {
  FileText,
  CreditCard,
  Shield,
  Car,
  GraduationCap,
  Wheat,
  UserCheck,
  Clock,
  CheckCircle,
  MessageSquare,
  Users,
  Award,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import ServiceCard from "@/components/ServiceCard";

const Index = () => {
  const services = [
    {
      title: "Aadhaar Card Services",
      description:
        "Complete Aadhaar card application, update, and correction services",
      icon: CreditCard,
      features: [
        "New Aadhaar Registration",
        "Address Update",
        "Mobile/Email Update",
        "Name Correction",
        "DOB Correction",
      ],
      popular: true,
    },
    {
      title: "Passport Services",
      description:
        "Passport application, renewal, and related document assistance",
      icon: Shield,
      features: [
        "New Passport Application",
        "Passport Renewal",
        "Name Change",
        "Address Change",
        "Emergency Certificate",
      ],
    },
    {
      title: "Voter ID Card",
      description: "Voter ID registration, correction, and update services",
      icon: UserCheck,
      features: [
        "New Voter ID",
        "Address Transfer",
        "Correction in Details",
        "Duplicate Voter ID",
        "Name Change",
      ],
    },
    {
      title: "Driving License",
      description: "DL application, renewal, and international permit services",
      icon: Car,
      features: [
        "Learner's License",
        "Permanent License",
        "DL Renewal",
        "International Permit",
        "Duplicate DL",
      ],
    },
    {
      title: "Ration Card",
      description:
        "Ration card application, transfer, and modification services",
      icon: Wheat,
      features: [
        "New Ration Card",
        "Ration Transfer",
        "Add Family Member",
        "Correction in Details",
        "Duplicate Card",
      ],
    },
    {
      title: "Scholarship Forms",
      description:
        "Educational scholarship application and document preparation",
      icon: GraduationCap,
      features: [
        "Merit Scholarships",
        "Need-based Aid",
        "Government Schemes",
        "College Applications",
        "Document Verification",
      ],
    },
    {
      title: "Competitive Exam Services",
      description:
        "Form filling and guidance for various government and competitive exams",
      icon: Clock,
      features: [
        "UPSC, SSC, and Banking Exams",
        "Railway & Police Exams",
        "State Govt Job Forms",
        "Admit Card Download",
        "Result & Answer Key Support",
      ],
    },
  ];

  const processSteps = [
    {
      icon: MessageSquare,
      title: "Contact Us",
      description:
        "Reach out via WhatsApp or call to discuss your document needs",
    },
    {
      icon: FileText,
      title: "Document Review",
      description: "We review your requirements and existing documents",
    },
    {
      icon: Users,
      title: "Expert Assistance",
      description: "Our experts fill forms and guide you through the process",
    },
    {
      icon: CheckCircle,
      title: "Completion",
      description: "Get your documents processed successfully and on time",
    },
  ];

  const handleGetStarted = () => {
    const phoneNumber = "135287325"; // Replace with your number
    const message =
      "Hi! I need help with document services. Can you assist me?";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section
        id="home"
        className="relative bg-gradient-hero py-20 overflow-hidden"
      >
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Professional Document Services
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
              Expert assistance with Aadhaar, Passport, Voter ID, Ration Card,
              Driving License, Scholarships and all government document services
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={handleGetStarted}
                className="bg-white text-primary hover:bg-white/90 hover:shadow-glow transition-all duration-300 font-semibold"
              >
                Get Started Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => {
                  const section = document.getElementById("services");
                  if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="border-white text-black hover:bg-white hover:text-primary transition-all duration-300"
              >
                View Services
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Document Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Professional assistance for all your document needs with expert
              guidance and quick processing
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                features={service.features}
                popular={service.popular}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 bg-accent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              How We Help You
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Simple 4-step process to get your documents processed
              professionally
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto mb-4 p-4 bg-gradient-primary rounded-full w-16 h-16 flex items-center justify-center shadow-soft">
                  <step.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <Award className="h-16 w-16 text-primary-foreground mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Ready to Get Your Documents Processed?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Join thousands of satisfied customers who trust us with their
              document needs. Fast, reliable, and professional service
              guaranteed.
            </p>
            <Button
              size="lg"
              onClick={handleGetStarted}
              className="bg-white text-primary hover:bg-white/90 hover:shadow-glow transition-all duration-300 font-semibold"
            >
              <MessageSquare className="mr-2 h-5 w-5" />
              WhatsApp Us Now
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
