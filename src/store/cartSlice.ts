import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { ProductModel } from "@/models";

export interface CartItem {
  product: ProductModel;
  quantity: number;
  selectedColor?: string;
  selectedSize?: string;
}

interface CartState {
  items: CartItem[];
  isSheetOpen: boolean;
}

const initialState: CartState = {
  items: [],
  isSheetOpen: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (
      state,
      action: PayloadAction<{
        product: ProductModel;
        quantity: number;
        selectedColor?: string;
        selectedSize?: string;
      }>
    ) => {
      const { product, quantity, selectedColor, selectedSize } = action.payload;
      const existingItem = state.items.find(
        (item) =>
          item.product.id === product.id &&
          item.selectedColor === selectedColor &&
          item.selectedSize === selectedSize
      );

      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.items.push({
          product,
          quantity,
          selectedColor,
          selectedSize,
        });
      }
    },
    removeFromCart: (
      state,
      action: PayloadAction<{
        productId: number;
        selectedColor?: string;
        selectedSize?: string;
      }>
    ) => {
      const { productId, selectedColor, selectedSize } = action.payload;
      state.items = state.items.filter(
        (item) =>
          !(
            item.product.id === productId &&
            item.selectedColor === selectedColor &&
            item.selectedSize === selectedSize
          )
      );
    },
    updateQuantity: (
      state,
      action: PayloadAction<{
        productId: number;
        quantity: number;
        selectedColor?: string;
        selectedSize?: string;
      }>
    ) => {
      const { productId, quantity, selectedColor, selectedSize } =
        action.payload;
      const item = state.items.find(
        (item) =>
          item.product.id === productId &&
          item.selectedColor === selectedColor &&
          item.selectedSize === selectedSize
      );

      if (item) {
        item.quantity = Math.max(1, quantity);
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
    toggleCartSheet: (state) => {
      state.isSheetOpen = !state.isSheetOpen;
    },
    openCartSheet: (state) => {
      state.isSheetOpen = true;
    },
    closeCartSheet: (state) => {
      state.isSheetOpen = false;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  updateQuantity,
  clearCart,
  toggleCartSheet,
  openCartSheet,
  closeCartSheet,
} = cartSlice.actions;

export default cartSlice.reducer;
