import { useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ItemDetails } from "./ItemDetails";

interface ItemCardProps {
  name: string;
  float: string;
  price: number;
  image: string;
}

export const ItemCard = ({ name, float, price, image }: ItemCardProps) => {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  return (
    <>
      <Card 
        className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
        onClick={() => setIsDetailsOpen(true)}
      >
        <CardContent className="p-0">
          <img src={image} alt={name} className="w-full h-48 object-cover" />
        </CardContent>
        <CardFooter className="flex flex-col items-start p-4 bg-white">
          <h3 className="font-medium text-gray-900">{name}</h3>
          <p className="text-sm text-gray-500">Float: {float}</p>
          <p className="text-lg font-bold text-primary-dark mt-2">${price.toFixed(2)}</p>
        </CardFooter>
      </Card>
      <ItemDetails
        isOpen={isDetailsOpen}
        onClose={() => setIsDetailsOpen(false)}
        item={{ name, float, price, image }}
      />
    </>
  );
};