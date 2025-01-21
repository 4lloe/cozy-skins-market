import { Header } from "@/components/Header";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CreditCard, Wallet, LogOut } from "lucide-react";
import { ItemCard } from "@/components/ItemCard";

const inventoryItems = [
  {
    id: 1,
    name: "AK-47 | Asiimov",
    float: "0.21",
    price: 124.50,
    image: "https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV09-5lpKKqPrxN7LEmyVQ7MEpiLuSrYmnjQO3-UdsZGHyd4_Bd1RvNQ7T_FDrw-_ng5Pu75iY1zI97bhLsvQz/360fx360f"
  },
  {
    id: 2,
    name: "M4A4 | Neo-Noir",
    float: "0.15",
    price: 89.99,
    image: "https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhnwMzFJTwW09-vloWZh-L6OITck29Y_chOhujT8om73wXn-EVvNW_7IoWVcQ9vYVzW_1Drxu3rhZC8up_MzXZmviUg5CrZngv3308wVSkWJQ/360fx360f"
  },
  {
    id: 3,
    name: "USP-S | Kill Confirmed",
    float: "0.18",
    price: 156.00,
    image: "https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo6m1FBRp3_bGcjhQ09-jq5WYh8j_OrfdqWhe5sN4mOTE8bP4jVC9vh5yYGr7IoWVdABrYQ3Y-1m8xezp0ZTtvpjNmHpguCAhtnndzRW10x9KOvsv26KUE4Zjjg/360fx360f"
  }
];

const Profile = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 pt-24">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-6">
              <img
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
                alt="Profile"
                className="w-24 h-24 rounded-full object-cover border-4 border-primary-light"
              />
              <div>
                <h1 className="text-3xl font-bold text-gray-900">John Doe</h1>
                <p className="text-gray-600">Member since 2024</p>
              </div>
            </div>
            <Button variant="destructive" className="flex items-center gap-2">
              <LogOut className="h-4 w-4" />
              Logout
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card className="p-6">
              <div className="flex items-center space-x-4 mb-4">
                <Wallet className="h-6 w-6 text-primary" />
                <h2 className="text-xl font-semibold">Balance</h2>
              </div>
              <p className="text-3xl font-bold text-primary-dark">$1,234.56</p>
            </Card>
            
            <Card className="p-6">
              <div className="flex items-center space-x-4 mb-4">
                <CreditCard className="h-6 w-6 text-primary" />
                <h2 className="text-xl font-semibold">Payment Methods</h2>
              </div>
              <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors">
                Add Payment Method
              </button>
            </Card>
          </div>

          <section className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Inventory</h2>
              <div className="flex gap-4">
                <Button className="flex items-center gap-2 bg-[#171a21] hover:bg-[#2a475e]">
                  <img src="/steam.svg" alt="Steam" className="h-4 w-4" />
                  Connect Steam
                </Button>
                <Button variant="outline" className="flex items-center gap-2">
                  <Wallet className="h-4 w-4" />
                  Withdraw Skins
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {inventoryItems.map((item) => (
                <ItemCard
                  key={item.id}
                  name={item.name}
                  float={item.float}
                  price={item.price}
                  image={item.image}
                />
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Profile;