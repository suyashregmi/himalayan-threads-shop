
import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { CartItem, Product } from "@/types";
import { toast } from "@/hooks/use-toast";

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: Product, quantity?: number, size?: string, color?: string) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  cartTotal: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (
    product: Product,
    quantity = 1,
    size?: string,
    color?: string
  ) => {
    setCartItems((prevItems) => {
      // Check if item is already in cart
      const existingItemIndex = prevItems.findIndex(
        (item) => 
          item.product.id === product.id && 
          item.size === size && 
          item.color === color
      );

      if (existingItemIndex > -1) {
        // Update quantity of existing item
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex].quantity += quantity;
        
        toast({
          description: `Updated ${product.name} quantity in your cart.`,
        });
        
        return updatedItems;
      } else {
        // Add new item to cart
        toast({
          description: `Added ${product.name} to your cart.`,
        });
        
        return [...prevItems, { product, quantity, size, color }];
      }
    });
  };

  const removeFromCart = (productId: string) => {
    setCartItems((prevItems) => {
      const updatedItems = prevItems.filter(
        (item) => item.product.id !== productId
      );
      
      toast({
        description: "Item removed from your cart.",
        variant: "destructive",
      });
      
      return updatedItems;
    });
  };

  const updateQuantity = (productId: string, quantity: number) => {
    setCartItems((prevItems) => {
      return prevItems.map((item) => {
        if (item.product.id === productId) {
          return { ...item, quantity };
        }
        return item;
      });
    });
  };

  const clearCart = () => {
    setCartItems([]);
    toast({
      description: "Your cart has been cleared.",
    });
  };

  const cartTotal = cartItems.reduce(
    (total, item) => {
      const price = item.product.price - (item.product.price * item.product.discount / 100);
      return total + price * item.quantity;
    }, 
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
