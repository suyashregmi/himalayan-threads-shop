
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Layout from "@/components/Layout/Layout";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Trash2, ArrowLeft } from "lucide-react";
import { useCart } from "@/context/CartContext";

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity, clearCart, cartTotal } = useCart();
  const navigate = useNavigate();
  
  const handleQuantityChange = (productId: string, change: number) => {
    const item = cartItems.find((item) => item.product.id === productId);
    if (item) {
      const newQuantity = item.quantity + change;
      if (newQuantity > 0) {
        updateQuantity(productId, newQuantity);
      }
    }
  };
  
  const handleCheckout = () => {
    // In a real app, this would navigate to checkout
    alert("Proceeding to checkout. This would navigate to a checkout page in a complete implementation.");
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">Your Shopping Cart</h1>
        
        {cartItems.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  {cartItems.map((item) => {
                    const discountedPrice = item.product.price - (item.product.price * item.product.discount / 100);
                    
                    return (
                      <div 
                        key={`${item.product.id}-${item.size}-${item.color}`}
                        className="flex flex-col sm:flex-row items-start sm:items-center gap-4 py-6 border-b border-gray-200 last:border-0"
                      >
                        <div className="w-24 h-24 bg-gray-100 rounded overflow-hidden">
                          <img 
                            src={item.product.image} 
                            alt={item.product.name} 
                            className="w-full h-full object-cover" 
                          />
                        </div>
                        
                        <div className="flex-1">
                          <Link 
                            to={`/product/${item.product.id}`}
                            className="text-lg font-semibold hover:text-primary transition-colors"
                          >
                            {item.product.name}
                          </Link>
                          
                          <div className="text-sm text-gray-500 mt-1">
                            {item.size && <span className="mr-2">Size: {item.size}</span>}
                            {item.color && <span>Color: {item.color}</span>}
                          </div>
                          
                          <div className="flex flex-wrap items-center gap-4 mt-3">
                            <div className="flex items-center border border-gray-300 rounded-md">
                              <button 
                                className="px-2 py-1 text-gray-600 hover:bg-gray-100"
                                onClick={() => handleQuantityChange(item.product.id, -1)}
                              >
                                -
                              </button>
                              <span className="px-3 py-1">{item.quantity}</span>
                              <button 
                                className="px-2 py-1 text-gray-600 hover:bg-gray-100"
                                onClick={() => handleQuantityChange(item.product.id, 1)}
                              >
                                +
                              </button>
                            </div>
                            
                            <button 
                              className="text-red-500 hover:text-red-700 flex items-center gap-1 text-sm"
                              onClick={() => removeFromCart(item.product.id)}
                            >
                              <Trash2 className="h-4 w-4" />
                              Remove
                            </button>
                          </div>
                        </div>
                        
                        <div className="text-right">
                          <div className="text-lg font-semibold">
                            NPR {discountedPrice * item.quantity}
                          </div>
                          {item.product.discount > 0 && (
                            <div className="text-sm text-gray-400 line-through">
                              NPR {item.product.price * item.quantity}
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
                
                <div className="bg-gray-50 p-6 flex justify-between items-center">
                  <button 
                    className="text-gray-600 hover:text-gray-800 flex items-center gap-2"
                    onClick={() => navigate(-1)}
                  >
                    <ArrowLeft className="h-4 w-4" />
                    Continue Shopping
                  </button>
                  
                  <button 
                    className="text-red-500 hover:text-red-700 flex items-center gap-2"
                    onClick={clearCart}
                  >
                    <Trash2 className="h-4 w-4" />
                    Clear Cart
                  </button>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <h2 className="text-xl font-bold mb-4">Order Summary</h2>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span>NPR {cartTotal}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Shipping</span>
                      <span>Calculated at checkout</span>
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-200 pt-4 mb-6">
                    <div className="flex justify-between font-bold text-lg">
                      <span>Total</span>
                      <span>NPR {cartTotal}</span>
                    </div>
                  </div>
                  
                  <Button className="w-full" size="lg" onClick={handleCheckout}>
                    <ShoppingBag className="mr-2 h-5 w-5" />
                    Proceed to Checkout
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-md p-12 text-center">
            <div className="flex justify-center mb-6">
              <ShoppingBag className="h-16 w-16 text-gray-300" />
            </div>
            <h2 className="text-2xl font-semibold mb-2">Your cart is empty</h2>
            <p className="text-gray-500 mb-8">Looks like you haven't added any items to your cart yet.</p>
            <Button asChild size="lg">
              <Link to="/products">Start Shopping</Link>
            </Button>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default CartPage;
