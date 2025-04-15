
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const WaitlistForm = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

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
    <section id="waitlist-form" className="py-20 px-6 md:px-10 lg:px-20 bg-spent-50">
      <div className="max-w-3xl mx-auto">
        <Card className="border-spent-200 shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="heading-lg text-spent-900">Join the Waitlist</CardTitle>
            <CardDescription className="text-lg text-gray-600">
              Be among the first to experience financial awareness at a glance.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 border-spent-200 focus:ring-spent-500"
                />
                <Button 
                  type="submit" 
                  disabled={isLoading}
                  className="bg-spent-600 hover:bg-spent-700 text-white"
                >
                  {isLoading ? "Joining..." : "Join Waitlist"}
                </Button>
              </div>
              <p className="text-sm text-gray-500 text-center pt-2">
                We'll notify you when early access becomes available.
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default WaitlistForm;
