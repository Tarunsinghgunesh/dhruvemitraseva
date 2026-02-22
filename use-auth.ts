import { ActivityIndicator, View, Text } from "react-native";
import { useColors } from "@/hooks/use-colors";

interface LoadingSpinnerProps {
  message?: string;
  size?: "small" | "large";
  fullScreen?: boolean;
}

export function LoadingSpinner({
  message = "Loading...",
  size = "large",
  fullScreen = false,
}: LoadingSpinnerProps) {
  const colors = useColors();

  if (fullScreen) {
    return (
      <View className="flex-1 items-center justify-center bg-background">
        <ActivityIndicator size={size} color={colors.primary} />
        {message && (
          <Text className="mt-4 text-base text-muted text-center">{message}</Text>
        )}
      </View>
    );
  }

  return (
    <View className="items-center justify-center py-8">
      <ActivityIndicator size={size} color={colors.primary} />
      {message && (
        <Text className="mt-4 text-sm text-muted text-center">{message}</Text>
      )}
    </View>
  );
}
