import { Rocket } from 'lucide-react';

const Logo = () => {
  return (
    <div className="flex items-center">
      <div className="flex items-center justify-center h-8 w-8 rounded-md bg-accent text-accent-foreground mr-2">
        <Rocket className="h-5 w-5" />
      </div>
      <span className="text-xl font-bold">MarkTechRover</span>
    </div>
  );
};

export default Logo;