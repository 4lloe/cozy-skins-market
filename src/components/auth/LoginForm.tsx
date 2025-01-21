import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Google, Steam } from "lucide-react";

const LoginForm = () => {
  return (
    <div className="w-full max-w-md space-y-8">
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-center text-purple-800">Login to CS2BEST</h2>
        <form className="space-y-4">
          <div>
            <Input type="email" placeholder="Email" className="w-full" />
          </div>
          <div>
            <Input type="password" placeholder="Password" className="w-full" />
          </div>
          <Button className="w-full bg-purple-600 hover:bg-purple-700">
            Sign In
          </Button>
        </form>
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">Or continue with</span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Button variant="outline" className="w-full">
            <Google className="mr-2 h-4 w-4" />
            Google
          </Button>
          <Button variant="outline" className="w-full">
            <Steam className="mr-2 h-4 w-4" />
            Steam
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;