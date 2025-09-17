import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Info, FileText, CheckCircle, Clock, AlertCircle } from "lucide-react";

interface DocumentGuideModalProps {
  serviceName: string;
  guideData: {
    overview: string;
    steps: { title: string; description: string; details: string[] }[];
    documents: { category: string; items: string[] }[];
    forms: { name: string; description: string; where: string }[];
    tips: string[];
    timeline: string;
  };
}

const DocumentGuideModal = ({ serviceName, guideData }: DocumentGuideModalProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button 
          variant="outline"
          size="sm"
          className="mt-2 w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
        >
          <Info className="mr-2 h-4 w-4" />
          How to Update/Apply
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-primary flex items-center">
            <FileText className="mr-2 h-6 w-6" />
            {serviceName} - Complete Guide
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Overview */}
          <div className="bg-accent p-4 rounded-lg">
            <h3 className="font-semibold text-foreground mb-2">Overview</h3>
            <p className="text-muted-foreground">{guideData.overview}</p>
          </div>

          {/* Timeline */}
          <div className="flex items-center space-x-2 bg-primary/10 p-3 rounded-lg">
            <Clock className="h-5 w-5 text-primary" />
            <span className="font-medium text-foreground">Processing Time:</span>
            <span className="text-muted-foreground">{guideData.timeline}</span>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {/* Step-by-step Process */}
            <AccordionItem value="steps">
              <AccordionTrigger className="text-lg font-semibold">
                <div className="flex items-center">
                  <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                  Step-by-Step Process
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  {guideData.steps.map((step, index) => (
                    <div key={index} className="border-l-2 border-primary pl-4">
                      <h4 className="font-semibold text-foreground">
                        Step {index + 1}: {step.title}
                      </h4>
                      <p className="text-muted-foreground mb-2">{step.description}</p>
                      <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                        {step.details.map((detail, idx) => (
                          <li key={idx}>{detail}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Required Documents */}
            <AccordionItem value="documents">
              <AccordionTrigger className="text-lg font-semibold">
                <div className="flex items-center">
                  <FileText className="mr-2 h-5 w-5 text-primary" />
                  Required Documents
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  {guideData.documents.map((docCategory, index) => (
                    <div key={index}>
                      <h4 className="font-semibold text-foreground mb-2">{docCategory.category}</h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {docCategory.items.map((item, idx) => (
                          <li key={idx} className="flex items-center space-x-2 text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Forms Required */}
            <AccordionItem value="forms">
              <AccordionTrigger className="text-lg font-semibold">
                <div className="flex items-center">
                  <AlertCircle className="mr-2 h-5 w-5 text-primary" />
                  Forms & Applications
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-3">
                  {guideData.forms.map((form, index) => (
                    <div key={index} className="bg-accent p-3 rounded-lg">
                      <h4 className="font-semibold text-foreground">{form.name}</h4>
                      <p className="text-sm text-muted-foreground mb-1">{form.description}</p>
                      <p className="text-xs text-primary font-medium">Available at: {form.where}</p>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Tips & Important Notes */}
            <AccordionItem value="tips">
              <AccordionTrigger className="text-lg font-semibold">
                <div className="flex items-center">
                  <AlertCircle className="mr-2 h-5 w-5 text-primary" />
                  Important Tips
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2">
                  {guideData.tips.map((tip, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                      <p className="text-sm text-muted-foreground">{tip}</p>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DocumentGuideModal;