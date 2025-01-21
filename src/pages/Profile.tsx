import { Header } from "@/components/Header";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CreditCard, Wallet, LogOut } from "lucide-react";

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
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Inventory</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Sample inventory items */}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Profile;