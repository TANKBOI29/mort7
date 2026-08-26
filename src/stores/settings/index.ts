import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

export interface SettingsStore {
  legacyCalculations: boolean;
  setLegacyCalculations: (newValue: boolean) => void;
}

export const useSettingsStore = create(
  persist(
    immer<SettingsStore>((set) => ({
      legacyCalculations: false,
      setLegacyCalculations(newValue) {
        set((s) => {
          s.legacyCalculations = newValue;
        });
      },
    })),
    {
      name: 'settings',
      version: 0,
    },
  ),
);

export type KeyOfSettingsStore = keyof ReturnType<typeof useSettingsStore>;