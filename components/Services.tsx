import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ChevronRight,
  BarChart,
  Lightbulb,
  PieChart,
  PenTool,
} from "lucide-react";

const services = [
  {
    title: "Performance Marketing",
    description:
      "Data-driven campaigns that deliver measurable results and maximize ROI.",
    icon: BarChart,
    color: "bg-blue-500",
  },
  {
    title: "Digital Strategy",
    description:
      "Comprehensive digital strategies tailored to your business goals and target audience.",
    icon: Lightbulb,
    color: "bg-green-500",
  },
  {
    title: "Analytics & Insights",
    description:
      "In-depth analysis and actionable insights to optimize your marketing efforts.",
    icon: PieChart,
    color: "bg-purple-500",
  },
  {
    title: "Content Marketing",
    description:
      "Engaging content that resonates with your audience and drives conversions.",
    icon: PenTool,
    color: "bg-orange-500",
  },
];

export default function Services() {
  return (
    <section className="flex justify-center py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <Badge variant="outline" className="px-3 py-1 text-sm font-medium">
              Our Expertise
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Our Services
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              We offer a comprehensive suite of digital marketing services to
              help your business thrive in the online landscape.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:gap-12 mt-12">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden transition-all hover:shadow-lg"
            >
              <CardHeader className="p-6">
                <div
                  className={`${service.color} inline-flex h-12 w-12 items-center justify-center rounded-lg text-white mb-4`}
                >
                  <service.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-2xl font-bold">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 pt-0">
                <p className="text-gray-500 dark:text-gray-400">
                  {service.description}
                </p>
              </CardContent>
              <div className="absolute bottom-4 right-4 opacity-0 transition-opacity group-hover:opacity-100">
                <ChevronRight className="h-6 w-6 text-gray-400" />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
