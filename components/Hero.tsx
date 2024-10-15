import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
          Boost Your Digital Performance
        </h1>
        <p className="mt-6 text-xl max-w-3xl">
          We harness the power of data-driven strategies to elevate your brand's
          online presence and drive measurable results.
        </p>
        <div className="mt-10">
          <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
