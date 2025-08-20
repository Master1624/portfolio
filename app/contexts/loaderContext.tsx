import { createContext, useContext } from "react";
import { useLoading } from "~/hooks/useLoading";

interface LoaderContextType {
  showLoader: boolean;
  triggerLoading: () => void;
}

const LoaderContext = createContext<LoaderContextType | null>(null);

export const LoaderProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [showLoader, triggerLoading] = useLoading();

  return (
    <LoaderContext.Provider value={{ showLoader, triggerLoading }}>
      {children}
    </LoaderContext.Provider>
  );
};

export function useLoader() {
  const context = useContext(LoaderContext);

  if (!context) {
    throw new Error("useLoader must be used within a LoaderProvider");
  }

  return context;
}
