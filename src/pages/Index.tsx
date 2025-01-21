import { Link } from "react-router-dom";
import { Header } from "@/components/Header";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <div className="relative h-screen">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80')] bg-cover bg-center blur-sm opacity-30" />
          <div className="relative container mx-auto px-4 flex flex-col items-center justify-center h-full text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Your Ultimate CS2 Marketplace
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl">
              Trade premium CS2 skins with confidence. Join our community of traders today.
            </p>
            <div className="flex gap-4">
              <Link
                to="/login"
                className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="px-6 py-3 bg-white text-primary border border-primary rounded-lg hover:bg-primary-softer transition-colors"
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;