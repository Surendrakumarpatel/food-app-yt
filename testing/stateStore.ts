
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export const statestore = create()(persist((set) => ({
    count: 0,
    increment: () => {
        set((state: any) => ({ count: state.count + 1 }))
    }
}),
{
    name: 'var-name',
    storage: createJSONStorage(() => localStorage)
}))
