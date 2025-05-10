import { useContext } from "react";
import {SkipContext} from '../context/SkipContext'

export const useSkipContext = () => {
  const context = useContext(SkipContext);
  if (!context) {
    throw new Error("useSkipContext must be used within a SkipProvider");
  }
  return context;
};
