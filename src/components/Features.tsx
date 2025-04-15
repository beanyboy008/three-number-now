
import { Smartphone, RotateCcw, Clock, EyeOff } from "lucide-react";

const FeatureCard = ({ 
  icon: Icon, 
  title, 
  description 
}: { 
  icon: React.ElementType; 
  title: string; 
  description: string;
}) => {
  return (
    <div className="flex flex-col items-start p-6 rounded-xl bg-white shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <div className="p-3 rounded-lg bg-spent-100 text-spent-700 mb-4">
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="heading-sm mb-2 text-spent-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Features = () => {
  const features = [
    {
      icon: Smartphone,
      title: "Three Numbers Only",
      description: "See your total spend for today, this week, and this month—nothing else."
    },
    {
      icon: RotateCcw,
      title: "Auto-Sync with Banks",
      description: "Connect your accounts to automatically track spending in real time."
    },
    {
      icon: Clock,
      title: "Manual Add Option",
      description: "Quickly log a cash expense in under 3 seconds."
    },
    {
      icon: EyeOff,
      title: "Zero Clutter Design",
      description: "A minimalist interface that keeps the focus on your three spend totals."
    }
  ];

  return (
    <section id="features" className="py-16 px-6 md:px-10 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="heading-lg text-center mb-12 text-spent-900">
          Simple By <span className="text-spent-600">Design</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
