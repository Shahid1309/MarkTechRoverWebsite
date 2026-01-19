import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ArrowLeft, ShoppingCart, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { useCart } from '@/context/CartContext';

const CartPage = () => {
  const { items, total, itemCount, increment, decrement, removeItem, clear } = useCart();

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 12 }}
      transition={{ duration: 0.25 }}
      className="bg-background min-h-screen"
    >
      <div className="max-w-6xl mx-auto px-4 pt-24 pb-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="text-sm text-muted-foreground flex items-center gap-2">
              <ShoppingCart className="h-4 w-4" /> Cart overview
            </p>
            <h1 className="text-3xl font-bold mt-1">Your Selected Services</h1>
            <p className="text-muted-foreground">Add, adjust, or remove services before you check out.</p>
          </div>
          <div className="flex items-center gap-3">
            <Link
              to="/pricing"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border hover:bg-muted transition"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to pricing
            </Link>
            {items.length > 0 && (
              <button
                onClick={clear}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted hover:bg-muted/80 transition"
              >
                Clear cart
              </button>
            )}
          </div>
        </div>

        {items.length === 0 ? (
          <div className="text-center bg-muted/50 border border-dashed border-border rounded-2xl p-10">
            <div className="flex justify-center mb-4">
              <div className="h-14 w-14 rounded-full bg-accent/10 text-accent flex items-center justify-center">
                <ShoppingCart className="h-7 w-7" />
              </div>
            </div>
            <h2 className="text-2xl font-semibold mb-2">Your cart is empty</h2>
            <p className="text-muted-foreground mb-6">
              Explore our services and add the ones you want to move forward with.
            </p>
            <Link
              to="/pricing"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-white hover:opacity-90 transition"
            >
              Browse services
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
              {items.map(item => (
                <div
                  key={item.id}
                  className="bg-card border border-border rounded-2xl p-4 flex items-start justify-between gap-4 shadow-sm"
                >
                  <div>
                    <p className="text-xs uppercase tracking-wide text-muted-foreground">{item.category}</p>
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    {item.description && <p className="text-muted-foreground text-sm mt-1">{item.description}</p>}
                    <div className="mt-3 inline-flex items-center gap-2 bg-accent/10 text-accent px-3 py-1 rounded-full text-sm">
                      <Sparkles className="h-4 w-4" />
                      {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(item.price)}
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center border border-border rounded-full overflow-hidden">
                      <button
                        onClick={() => decrement(item.id)}
                        className="p-2 hover:bg-muted transition"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="px-3 text-sm font-medium">{item.quantity}</span>
                      <button
                        onClick={() => increment(item.id)}
                        className="p-2 hover:bg-muted transition"
                        aria-label="Increase quantity"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-semibold">
                        {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(
                          item.price * item.quantity
                        )}
                      </p>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-sm text-red-500 hover:underline inline-flex items-center gap-1 mt-1"
                      >
                        <Trash2 className="h-4 w-4" />
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-card border border-border rounded-2xl p-6 shadow-sm h-fit">
              <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
              <div className="flex justify-between text-sm text-muted-foreground mb-2">
                <span>Services</span>
                <span>{itemCount}</span>
              </div>
              <div className="flex justify-between text-sm text-muted-foreground mb-2">
                <span>Estimated subtotal</span>
                <span>
                  {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(total)}
                </span>
              </div>
              <div className="flex justify-between text-base font-semibold border-t border-border pt-3 mt-3">
                <span>Total (before taxes)</span>
                <span>
                  {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(total)}
                </span>
              </div>
              <button className="w-full mt-6 px-4 py-3 rounded-full bg-accent text-white font-semibold hover:opacity-90 transition">
                Proceed to review
              </button>
              <p className="text-xs text-muted-foreground mt-3">
                We’ll confirm your requirements and share a tailored proposal based on the services in your cart.
              </p>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default CartPage;
