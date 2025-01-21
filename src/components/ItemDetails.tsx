import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

interface ItemDetailsProps {
  isOpen: boolean;
  onClose: () => void;
  item: {
    name: string;
    float: string;
    price: number;
    image: string;
  };
}

const marketData = [
  { date: "2024-01", price: 145 },
  { date: "2024-02", price: 152 },
  { date: "2024-03", price: 147 },
  { date: "2024-04", price: 150.50 },
];

export const ItemDetails = ({ isOpen, onClose, item }: ItemDetailsProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle>{item.name}</DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          <div>
            <img src={item.image} alt={item.name} className="w-full rounded-lg" />
            <div className="mt-4 space-y-2">
              <p className="text-sm text-gray-500">Float: {item.float}</p>
              <p className="text-2xl font-bold text-purple-800">${item.price.toFixed(2)}</p>
              <Button className="w-full bg-purple-600 hover:bg-purple-700">
                Purchase Now
              </Button>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Market History</h3>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={marketData}>
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="price" stroke="#9333ea" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};