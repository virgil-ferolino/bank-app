import { create } from "zustand";

interface CountProps {
  count: number;
}
const useStore = create((set) => ({
  count: 0, // state variable
  increase: () => set((state: CountProps) => ({ count: state.count + 1 })), // method to modify state
  decrease: () => set((state: CountProps) => ({ count: state.count - 1 })), // method to modify state
  reset: () => set({ count: 0 }), // method to reset state
}));

export default useStore;
