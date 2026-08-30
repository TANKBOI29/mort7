import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';



import type { Vector } from '@/components/templates/Canvas';


interface StringVector {
  x: string;
  y: string;
}

export interface DataStore {

  target: StringVector;
  getTarget: () => Vector;
  setTarget: (x: number, y: number) => void;

  gun: StringVector;
  getGun: () => Vector;
  setGun: (x: number, y: number) => void;

}

export const useDataStore = create(
  persist(
    immer<DataStore>((set) => ({
      target: { x: '0.75', y: '0.5' },
      getTarget() {
        return {
          x: Number(this.target.x),
          y: Number(this.target.y),
        };
      },
      setTarget(x, y) {
        set((s) => {
          s.target = {
            x: String(x),
            y: String(y),
          };
        });
      },

      gun: { x: '0.25', y: '0.5' },
      getGun() {
        return {
          x: Number(this.gun.x),
          y: Number(this.gun.y),
        };
      },
      setGun(x, y) {
        set((s) => {
          s.gun = {
            x: String(x),
            y: String(y),
          };
        });
      }

    })),
    {
      name: 'data',
      version: 2,

      migrate(persistedState, version) {
        if (version === 0) {
          
          
        }

        if (version === 1) {
          persistedState = {};
        }

        return persistedState;
      },
    },
  ),
);