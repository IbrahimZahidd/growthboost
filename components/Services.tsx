import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const services = [
  {
    title: "Performance Marketing",
    description:
      "Data-driven campaigns that deliver measurable results and maximize ROI.",
  },
  {
    title: "Digital Strategy",
    description:
      "Comprehensive digital strategies tailored to your business goals and target audience.",
  },
  {
    title: "Analytics & Insights",
    description:
      "In-depth analysis and actionable insights to optimize your marketing efforts.",
  },
  {
    title: "Content Marketing",
    description:
      "Engaging content that resonates with your audience and drives conversions.",
  },
];

const Services = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Our Services
        </h2>
        <p className="mt-4 text-xl text-gray-600 max-w-3xl">
          We offer a comprehensive suite of digital marketing services to help
          your business thrive in the online landscape.
        </p>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
