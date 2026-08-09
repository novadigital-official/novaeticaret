import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Product, COUPONS } from "@/lib/data";

export interface CartItem {
  id: string; // unique item id = prodId-size-color
  product: Product;
  selectedSize: string;
  selectedColor: { name: string; hex: string };
  quantity: number;
}

interface CartState {
  items: CartItem[];
  wishlist: string[]; // product IDs
  isCartOpen: boolean;
  couponCode: string | null;
  discountAmount: number;
  
  // Actions
  addToCart: (product: Product, size: string, color: { name: string; hex: string }, quantity?: number) => void;
  removeFromCart: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  clearCart: () => void;
  toggleCart: (open?: boolean) => void;
  
  toggleWishlist: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;
  
  applyCoupon: (code: string) => { success: boolean; message: string };
  removeCoupon: () => void;
  
  // Computed helpers
  getCartSubtotal: () => number;
  getCartTotal: () => number;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      wishlist: [],
      isCartOpen: false,
      couponCode: null,
      discountAmount: 0,

      addToCart: (product, size, color, quantity = 1) => {
        const itemId = `${product.id}-${size}-${color.name}`;
        const currentItems = get().items;
        const existingIndex = currentItems.findIndex((item) => item.id === itemId);

        if (existingIndex > -1) {
          const updated = [...currentItems];
          const newQty = updated[existingIndex].quantity + quantity;
          // Check stock
          if (newQty <= product.stock) {
            updated[existingIndex].quantity = newQty;
            set({ items: updated, isCartOpen: true });
          }
        } else {
          set({
            items: [
              ...currentItems,
              {
                id: itemId,
                product,
                selectedSize: size,
                selectedColor: color,
                quantity: Math.min(quantity, product.stock),
              },
            ],
            isCartOpen: true,
          });
        }
      },

      removeFromCart: (itemId) => {
        set({ items: get().items.filter((item) => item.id !== itemId) });
      },

      updateQuantity: (itemId, quantity) => {
        if (quantity <= 0) {
          get().removeFromCart(itemId);
          return;
        }
        const updated = get().items.map((item) => {
          if (item.id === itemId) {
            const qty = Math.min(quantity, item.product.stock);
            return { ...item, quantity: qty };
          }
          return item;
        });
        set({ items: updated });
      },

      clearCart: () => {
        set({ items: [], couponCode: null, discountAmount: 0 });
      },

      toggleCart: (open) => {
        set({ isCartOpen: open !== undefined ? open : !get().isCartOpen });
      },

      toggleWishlist: (productId) => {
        const current = get().wishlist;
        if (current.includes(productId)) {
          set({ wishlist: current.filter((id) => id !== productId) });
        } else {
          set({ wishlist: [...current, productId] });
        }
      },

      isInWishlist: (productId) => {
        return get().wishlist.includes(productId);
      },

      applyCoupon: (code) => {
        const cleanCode = code.trim().toUpperCase();
        const coupon = COUPONS[cleanCode];
        const subtotal = get().getCartSubtotal();

        if (!coupon) {
          return { success: false, message: "Geçersiz kupon kodu." };
        }

        if (subtotal < coupon.minOrderAmount) {
          return {
            success: false,
            message: `Bu kupon en az ₺${coupon.minOrderAmount.toLocaleString("tr-TR")} siparişlerde geçerlidir.`,
          };
        }

        let discount = 0;
        if (coupon.discountType === "PERCENTAGE") {
          discount = (subtotal * coupon.discountValue) / 100;
        } else {
          discount = coupon.discountValue;
        }

        set({ couponCode: cleanCode, discountAmount: discount });
        return { success: true, message: `Kupon uygulandı! ₺${discount.toLocaleString("tr-TR")} indirim kazandınız.` };
      },

      removeCoupon: () => {
        set({ couponCode: null, discountAmount: 0 });
      },

      getCartSubtotal: () => {
        return get().items.reduce((total, item) => total + item.product.price * item.quantity, 0);
      },

      getCartTotal: () => {
        const subtotal = get().getCartSubtotal();
        const discount = get().discountAmount;
        const shipping = subtotal >= 5000 ? 0 : 250; // Free shipping over 5.000 TL
        return Math.max(0, subtotal - discount + shipping);
      },
    }),
    {
      name: "netero-cart-storage",
      partialize: (state) => ({ items: state.items, wishlist: state.wishlist }),
    }
  )
);
