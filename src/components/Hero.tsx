
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToFeatures = () => {
    const features = document.getElementById("features");
    features?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative w-full min-h-[90vh] flex flex-col items-center justify-center py-20 px-6 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-spent-100/30 to-transparent -z-10" />
      
      {/* Animated circles */}
      <div className="absolute w-72 h-72 rounded-full bg-spent-200/30 blur-3xl -top-10 -left-20 animate-float" />
      <div className="absolute w-64 h-64 rounded-full bg-spent-300/20 blur-3xl bottom-40 -right-20 animate-float" style={{ animationDelay: "-2s" }} />
      
      <div className="max-w-4xl mx-auto text-center space-y-8 animate-fadeIn">
        <h1 className="heading-xl bg-gradient-to-br from-spent-800 to-spent-600 text-transparent bg-clip-text">
          Just Three Numbers That Matter
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-700 max-w-2xl mx-auto">
          A finance app that shows only what you need to know: what you spent today, this week, and this month.
        </p>
        
        <div className="flex justify-center gap-6 pt-6">
          {/* Today */}
          <div className="number-card">
            <span className="text-gray-600 font-medium">Today</span>
            <span className="text-3xl font-bold text-spent-900">$42</span>
          </div>
          
          {/* Week */}
          <div className="number-card">
            <span className="text-gray-600 font-medium">Week</span>
            <span className="text-3xl font-bold text-spent-900">$319</span>
          </div>
          
          {/* Month */}
          <div className="number-card">
            <span className="text-gray-600 font-medium">Month</span>
            <span className="text-3xl font-bold text-spent-900">$1,843</span>
          </div>
        </div>
      </div>
      
      <div 
        onClick={scrollToFeatures}
        className="absolute bottom-10 cursor-pointer animate-bounce"
      >
        <ArrowDown className="h-10 w-10 text-spent-500" />
      </div>
    </section>
  );
};

export default Hero;
