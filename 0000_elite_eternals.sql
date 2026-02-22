import { View, Text, TouchableOpacity } from "react-native";
import { useColors } from "@/hooks/use-colors";

interface ErrorAlertProps {
  title: string;
  message: string;
  onRetry?: () => void;
  onDismiss?: () => void;
}

export function ErrorAlert({
  title,
  message,
  onRetry,
  onDismiss,
}: ErrorAlertProps) {
  const colors = useColors();

  return (
    <View className="bg-red-50 rounded-2xl p-6 border border-red-200 gap-4">
      <View className="flex-row items-center gap-2">
        <Text className="text-2xl">⚠️</Text>
        <Text className="text-base font-semibold text-red-900 flex-1">{title}</Text>
      </View>

      <Text className="text-sm text-red-800 leading-relaxed">{message}</Text>

      <View className="flex-row gap-2">
        {onRetry && (
          <TouchableOpacity
            onPress={onRetry}
            style={{
              backgroundColor: colors.primary,
              borderRadius: 8,
              paddingVertical: 10,
              paddingHorizontal: 16,
              flex: 1,
            }}
            activeOpacity={0.8}
          >
            <Text className="text-sm font-semibold text-white text-center">
              Retry
            </Text>
          </TouchableOpacity>
        )}

        {onDismiss && (
          <TouchableOpacity
            onPress={onDismiss}
            style={{
              backgroundColor: colors.surface,
              borderColor: colors.border,
              borderWidth: 1,
              borderRadius: 8,
              paddingVertical: 10,
              paddingHorizontal: 16,
              flex: 1,
            }}
            activeOpacity={0.8}
          >
            <Text className="text-sm font-semibold text-foreground text-center">
              Dismiss
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}
