import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Building, 
  Home, 
  Palette, 
  Wrench, 
  Lightbulb, 
  ClipboardCheck,
  CheckCircle,
  ArrowRight
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Building,
      title: "Commercial Construction",
      description: "Complete commercial building solutions from planning to completion with modern techniques and quality materials.",
      features: [
        "Office Buildings & Complexes",
        "Retail & Shopping Centers", 
        "Industrial Facilities",
        "Hospitality & Entertainment",
        "Healthcare Facilities",
        "Educational Buildings"
      ],
      pricing: "Custom Quote"
    },
    {
      icon: Home,
      title: "Residential Construction", 
      description: "Custom home building and renovation services tailored to your lifestyle and preferences.",
      features: [
        "Custom Home Building",
        "Home Additions & Extensions",
        "Kitchen & Bathroom Remodeling",
        "Basement Finishing",
        "Garage Construction",
        "Outdoor Living Spaces"
      ],
      pricing: "Starting $150/sq ft"
    },
    {
      icon: Palette,
      title: "Interior Design",
      description: "Sophisticated interior design services that blend functionality with aesthetic appeal.",
      features: [
        "Space Planning & Layout",
        "Color Schemes & Materials",
        "Furniture Selection",
        "Lighting Design",
        "Custom Millwork",
        "Art & Accessory Curation"
      ],
      pricing: "Starting $5,000"
    },
    {
      icon: Wrench,
      title: "Renovation & Remodeling",
      description: "Transform existing spaces with our comprehensive renovation and remodeling expertise.",
      features: [
        "Whole Home Renovations",
        "Room Additions",
        "Structural Modifications",
        "Energy Efficiency Upgrades",
        "Historic Restoration",
        "Accessibility Modifications"
      ],
      pricing: "Starting $25,000"
    },
    {
      icon: Lightbulb,
      title: "Design Consultation",
      description: "Professional design consultation to bring your vision to life with expert guidance.",
      features: [
        "Initial Design Assessment",
        "Concept Development",
        "3D Visualization",
        "Material & Finish Selection",
        "Budget Planning",
        "Timeline Development"
      ],
      pricing: "$200/hour"
    },
    {
      icon: ClipboardCheck,
      title: "Project Management",
      description: "End-to-end project management ensuring timely delivery and quality assurance.",
      features: [
        "Timeline & Schedule Management",
        "Budget Control & Monitoring",
        "Quality Assurance",
        "Vendor & Subcontractor Coordination",
        "Regular Progress Reports",
        "Client Communication"
      ],
      pricing: "10-15% of project cost"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Initial Consultation",
      description: "We meet to discuss your vision, requirements, and budget to understand your project goals."
    },
    {
      step: "02", 
      title: "Design & Planning",
      description: "Our team creates detailed designs and plans, incorporating your feedback throughout the process."
    },
    {
      step: "03",
      title: "Project Execution",
      description: "We manage every aspect of construction with regular updates and quality control measures."
    },
    {
      step: "04",
      title: "Final Delivery",
      description: "We complete the project on time and conduct a thorough walkthrough to ensure your satisfaction."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-foreground mb-6">Our Services</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive construction and interior design solutions tailored to meet your unique needs and exceed your expectations.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <service.icon className="h-8 w-8 text-primary" />
                    </div>
                    <Badge variant="secondary" className="text-primary font-semibold">
                      {service.pricing}
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button asChild className="w-full mt-6">
                    <Link to="/contact">Get Quote <ArrowRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Process</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A streamlined approach that ensures quality results and exceptional client experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto">
                    {item.step}
                  </div>
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-border transform -translate-y-1/2"></div>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">
            Contact us today for a free consultation and let us bring your vision to life.
          </p>
          <Button asChild variant="secondary" size="lg" className="text-lg px-8 py-6">
            <Link to="/contact">Schedule Consultation</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Services;