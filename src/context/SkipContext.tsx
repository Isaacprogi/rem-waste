import { createContext, useContext, useState} from "react";
import type { Skip } from "../utils/type";

interface SkipContextType {
  skips: Skip[];
  setSkips: (skips: Skip[]) => void;
  selectedSkip: Skip | null;
  setSelectedSkip: (skip: Skip) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
}

export const SkipContext = createContext<SkipContextType | undefined>(undefined);

export const SkipProvider = ({ children }: { children: React.ReactNode }) => {
  const [skips, setSkips] = useState<Skip[]>([]);
  const [selectedSkip, setSelectedSkip] = useState<Skip | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <SkipContext.Provider
      value={{
        skips,
        setSkips,
        selectedSkip,
        setSelectedSkip,
        loading,
        setLoading,
      }}
    >
      {children}
    </SkipContext.Provider>
  );
};

export const useSkipContext = () => {
  const context = useContext(SkipContext);
  if (!context) {
    throw new Error("useSkipContext must be used within a SkipProvider");
  }
  return context;
};
