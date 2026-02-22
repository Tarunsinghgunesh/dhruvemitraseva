import { useEffect, useState } from "react";
import * as Network from "expo-network";

export interface AppState {
  isOnline: boolean;
  networkType: string | null | undefined;
  isLoading: boolean;
}

/**
 * Hook to manage app connectivity and state
 */
export function useAppState() {
  const [state, setState] = useState<AppState>({
    isOnline: true,
    networkType: null,
    isLoading: false,
  });

  useEffect(() => {
    checkNetworkStatus();
  }, []);

  const checkNetworkStatus = async () => {
    try {
      const networkState = await Network.getNetworkStateAsync();
      setState((prev) => ({
        ...prev,
        isOnline: networkState.isConnected ?? true,
        networkType: networkState.type,
      }));
    } catch (error) {
      console.error("Error checking network:", error);
      setState((prev) => ({
        ...prev,
        isOnline: true,
      }));
    }
  };

  const setLoading = (isLoading: boolean) => {
    setState((prev) => ({
      ...prev,
      isLoading,
    }));
  };

  return {
    ...state,
    setLoading,
    checkNetworkStatus,
  };
}
