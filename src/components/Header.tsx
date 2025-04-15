
import { Button } from "@/components/ui/button";

const Header = () => {
  const scrollToForm = () => {
    const form = document.getElementById("waitlist-form");
    form?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="w-full py-4 px-6 md:px-10 lg:px-20 flex items-center justify-between">
      <div className="flex items-center">
        <h1 className="text-2xl font-bold text-spent-900">Spent</h1>
      </div>
      <Button 
        onClick={scrollToForm}
        variant="ghost" 
        size="sm"
        className="text-spent-700 hover:text-spent-900 hover:bg-spent-50"
      >
        Join Waitlist
      </Button>
    </header>
  );
};

export default Header;
