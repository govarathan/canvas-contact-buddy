import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink } from "lucide-react";
import residentialImage from "@/assets/residential-project.jpg";
import interiorImage from "@/assets/interior-design.jpg";
import commercialImage from "@/assets/commercial-project.jpg";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      image: residentialImage,
      category: "Construction",
      title: "Modern Residential Complex",
      description: "A 50-unit residential complex featuring contemporary design and sustainable building practices.",
      details: "Located in downtown area, this project showcases modern architectural elements with energy-efficient systems.",
      year: "2023",
      size: "45,000 sq ft",
      duration: "18 months"
    },
    {
      id: 2,
      image: interiorImage,
      category: "Interior Design",
      title: "Luxury Living Space",
      description: "Complete interior transformation of a luxury apartment with modern furnishings and lighting.",
      details: "High-end penthouse renovation featuring Italian marble, custom millwork, and smart home integration.",
      year: "2023",
      size: "3,500 sq ft",
      duration: "6 months"
    },
    {
      id: 3,
      image: commercialImage,
      category: "Commercial",
      title: "Corporate Office Design",
      description: "Professional office space design with modern amenities and collaborative work areas.",
      details: "Tech company headquarters with open layouts, private offices, and state-of-the-art conference facilities.",
      year: "2023",
      size: "25,000 sq ft",
      duration: "12 months"
    },
    {
      id: 4,
      image: residentialImage,
      category: "Construction",
      title: "Custom Family Home",
      description: "Beautiful custom home built from the ground up with premium materials and finishes.",
      details: "Traditional style home with modern amenities, featuring vaulted ceilings and gourmet kitchen.",
      year: "2022",
      size: "4,200 sq ft",
      duration: "14 months"
    },
    {
      id: 5,
      image: interiorImage,
      category: "Interior Design",
      title: "Restaurant Interior",
      description: "Complete restaurant design creating an intimate dining atmosphere with contemporary elements.",
      details: "Farm-to-table restaurant featuring reclaimed wood, industrial lighting, and custom banquettes.",
      year: "2022",
      size: "2,800 sq ft",
      duration: "4 months"
    },
    {
      id: 6,
      image: commercialImage,
      category: "Commercial",
      title: "Retail Shopping Center",
      description: "Multi-tenant retail development with modern storefronts and customer amenities.",
      details: "Mixed-use development featuring retail spaces, dining, and community gathering areas.",
      year: "2022",
      size: "75,000 sq ft",
      duration: "24 months"
    }
  ];

  const categories = ["All", "Construction", "Interior Design", "Commercial"];

  const filteredProjects = (category: string) => {
    if (category === "All") return projects;
    return projects.filter(project => project.category === category);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-foreground mb-6">Our Portfolio</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our diverse portfolio of construction and interior design projects that showcase our commitment to quality and innovation.
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="All" className="w-full">
            <div className="flex justify-center mb-12">
              <TabsList className="grid w-full max-w-md grid-cols-4">
                {categories.map((category) => (
                  <TabsTrigger key={category} value={category} className="text-sm">
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {categories.map((category) => (
              <TabsContent key={category} value={category}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredProjects(category).map((project) => (
                    <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
                      <div className="relative h-64 overflow-hidden">
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <Badge className="absolute top-4 left-4 bg-primary">
                          {project.category}
                        </Badge>
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                          <ExternalLink className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                      </div>
                      <CardHeader>
                        <div className="flex justify-between items-start mb-2">
                          <CardTitle className="text-xl">{project.title}</CardTitle>
                          <span className="text-sm text-muted-foreground">{project.year}</span>
                        </div>
                        <CardDescription className="text-base mb-3">
                          {project.description}
                        </CardDescription>
                        <p className="text-sm text-muted-foreground">
                          {project.details}
                        </p>
                      </CardHeader>
                      <CardContent>
                        <div className="flex justify-between items-center text-sm text-muted-foreground mb-4">
                          <span>Size: {project.size}</span>
                          <span>Duration: {project.duration}</span>
                        </div>
                        <Button asChild variant="outline" className="w-full">
                          <Link to={`/portfolio/${project.id}`}>
                            View Details <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">150+</div>
              <div className="text-muted-foreground">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">98%</div>
              <div className="text-muted-foreground">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">15+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Awards Won</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Create Your Next Project?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss how we can bring your vision to life with our expertise and craftsmanship.
          </p>
          <Button asChild variant="secondary" size="lg" className="text-lg px-8 py-6">
            <Link to="/contact">Start Your Project</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;