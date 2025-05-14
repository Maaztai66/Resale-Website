import { create } from 'zustand';

const useItemsStore = create((set) => ({
  items: [],
  fetchItems: async () => {
    try {
      const res = await fetch('http://localhost:5000/items');
      const data = await res.json();
      set({ items: data });
    } catch (err) {
      console.error('Failed to fetch items:', err);
    }
  },
}));

export default useItemsStore;
