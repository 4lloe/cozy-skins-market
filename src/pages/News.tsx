import { Header } from "@/components/Header";

const News = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 pt-24">
        <h1 className="text-4xl font-bold mb-8 text-purple-800">Latest CS2 News</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <img src="/placeholder.svg" alt="CS2 Update" className="w-full h-64 object-cover rounded-lg" />
            <h2 className="text-2xl font-semibold text-purple-700">Major Update Coming to CS2</h2>
            <p className="text-gray-600">
              Valve announces significant changes coming to Counter-Strike 2, including new maps and weapon balancing.
              The update aims to improve player experience and competitive gameplay.
            </p>
          </div>
          <div className="space-y-4 md:mt-32">
            <img src="/placeholder.svg" alt="Tournament News" className="w-full h-64 object-cover rounded-lg" />
            <h2 className="text-2xl font-semibold text-purple-700">International Tournament Announced</h2>
            <p className="text-gray-600">
              Get ready for the biggest CS2 tournament of the year. Teams from around the world will compete
              for a prize pool of $2 million. Stay tuned for more details.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;