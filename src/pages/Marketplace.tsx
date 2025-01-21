import { Header } from "@/components/Header";
import { ItemCard } from "@/components/ItemCard";

const SAMPLE_ITEMS = [
  {
    id: 1,
    name: "AK-47 | Asiimov",
    float: "0.15",
    price: 150.50,
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    name: "M4A4 | Neo-Noir",
    float: "0.07",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    name: "AWP | Dragon Lore",
    float: "0.01",
    price: 1500.00,
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80"
  },
  {
    id: 4,
    name: "Desert Eagle | Blaze",
    float: "0.03",
    price: 420.69,
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80"
  }
];

const Marketplace = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 pt-24">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Marketplace</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {SAMPLE_ITEMS.map((item) => (
            <ItemCard key={item.id} {...item} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Marketplace;