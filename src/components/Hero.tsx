
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Mail, TrendingUp, Calendar, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

const Hero = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const scrollToFeatures = () => {
    const features = document.getElementById("features");
    features?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Success!",
        description: "You've been added to the Spent waitlist.",
      });
      setEmail("");
      setIsLoading(false);
    }, 1500);
  };

  return (
    <section className="relative w-full min-h-[90vh] flex flex-col items-center justify-center py-20 px-6 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-spent-100/30 to-transparent -z-10" />
      
      {/* Animated circles */}
      <div className="absolute w-72 h-72 rounded-full bg-spent-200/30 blur-3xl -top-10 -left-20 animate-float" />
      <div className="absolute w-64 h-64 rounded-full bg-spent-300/20 blur-3xl bottom-40 -right-20 animate-float" style={{ animationDelay: "-2s" }} />
      
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16 animate-fadeIn">
        {/* Left content */}
        <div className="w-full md:w-1/2 text-center md:text-left space-y-8">
          <h1 className="heading-xl bg-gradient-to-br from-spent-800 to-spent-600 text-transparent bg-clip-text">
            Just Three Numbers That Matter
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700">
            A finance app that shows only what you need to know: what you spent today, this week, and this month.
          </p>
          
          {/* Waitlist Form */}
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 mt-8">
            <div className="flex-1 relative">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full border-spent-200 focus:ring-spent-500 pl-10"
              />
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            </div>
            <Button 
              type="submit" 
              disabled={isLoading}
              className="bg-spent-600 hover:bg-spent-700 text-white"
            >
              {isLoading ? "Joining..." : "Join Waitlist"}
            </Button>
          </form>
        </div>
        
        {/* Right content - App Preview */}
        <div className="w-full md:w-1/2 flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="relative w-full max-w-sm"
          >
            <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-spent-100 relative z-10">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="font-bold text-spent-800 text-xl">Spent</h3>
                  <p className="text-sm text-gray-500">Updated now</p>
                </div>
                <div className="bg-spent-500/10 p-2 rounded-full">
                  <Activity className="h-6 w-6 text-spent-600" />
                </div>
              </div>
              
              <div className="space-y-6">
                {/* Today */}
                <motion.div 
                  className="bg-gradient-to-r from-white to-spent-50 rounded-2xl p-6 border border-spent-100 shadow-sm"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <div className="bg-spent-100 p-2 rounded-lg">
                        <Calendar className="h-5 w-5 text-spent-700" />
                      </div>
                      <span className="text-gray-600 font-medium">Today</span>
                    </div>
                    <span className="text-3xl font-bold text-spent-900">$42</span>
                  </div>
                </motion.div>
                
                {/* Week */}
                <motion.div 
                  className="bg-gradient-to-r from-white to-spent-50 rounded-2xl p-6 border border-spent-100 shadow-sm"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <div className="bg-spent-200 p-2 rounded-lg">
                        <Calendar className="h-5 w-5 text-spent-700" />
                      </div>
                      <span className="text-gray-600 font-medium">Week</span>
                    </div>
                    <span className="text-3xl font-bold text-spent-900">$319</span>
                  </div>
                </motion.div>
                
                {/* Month */}
                <motion.div 
                  className="bg-gradient-to-r from-white to-spent-50 rounded-2xl p-6 border border-spent-100 shadow-sm"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <div className="bg-spent-300 p-2 rounded-lg">
                        <Calendar className="h-5 w-5 text-spent-700" />
                      </div>
                      <span className="text-gray-600 font-medium">Month</span>
                    </div>
                    <span className="text-3xl font-bold text-spent-900">$1,843</span>
                  </div>
                </motion.div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -z-10 w-full h-full bg-spent-100/30 rounded-3xl -right-5 -bottom-5 shadow-xl"></div>
            <div className="absolute -z-20 w-[90%] h-[95%] bg-spent-200/20 rounded-3xl right-8 -bottom-9 blur-sm shadow-xl"></div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll down arrow */}
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
