import create from "zustand"

const useStore = create((set) => ({
     warenkorb: [],
     hours: [],
     größe: "none",
     farbe: "none",
     preis: 0.0,
     hinzufügen: (artikel) => set((state) => ({ warenkorb: [...state.warenkorb, artikel] })),
     setGröße: (größe) => set((state) => ({ größe })),
     setHours: (hours) => set((state) => ({ hours })),
     setFarbe: (farbe) => set((state) => ({ farbe })),
     setPreis: (preis) => set((state) => ({ preis }))
}))

export default useStore
