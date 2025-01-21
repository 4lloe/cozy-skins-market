import { Header } from "@/components/Header";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 pt-24">
        <h1 className="text-4xl font-bold mb-8 text-purple-800">About CS2BEST</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-600">
              CS2BEST is your premier destination for Counter-Strike 2 skins trading. 
              Founded in 2024, we've quickly become one of the most trusted platforms 
              in the CS2 community.
            </p>
            <p className="text-lg text-gray-600">
              Our mission is to provide a secure and user-friendly marketplace where 
              players can trade their in-game items with confidence.
            </p>
          </div>
          <div>
            <img src="/placeholder.svg" alt="CS2 Gaming" className="rounded-lg shadow-xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;