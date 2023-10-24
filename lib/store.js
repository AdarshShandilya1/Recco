import { create } from "zustand";
const useItems = create((set)=>({
    cartItems: [],
    addItems: (item) =>
    set((state) => ({
      cartItems: [...state.cartItems, item],
    })),
    updateStatus: (s, itemId)=>set((state) => ({
        cartItems: state.cartItems.map((product) => {
            if (product.id === itemId) {
              product.status = s
            }
            return product
          }),
    })),
    togglePopup: false, 
    changeToggle: () => set((state) => ({
        togglePopup: !state.togglePopup
    })),

    selectedId: "",
    setSelectedId: (id) => set((state) => ({
        selectedId: id
    }))


}))

export default useItems