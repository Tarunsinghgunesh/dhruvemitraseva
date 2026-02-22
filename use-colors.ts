import { View, Text } from "react-native";

interface SuccessAlertProps {
  title: string;
  message: string;
}

export function SuccessAlert({ title, message }: SuccessAlertProps) {
  return (
    <View className="bg-green-50 rounded-2xl p-6 border border-green-200 gap-3">
      <View className="flex-row items-center gap-2">
        <Text className="text-2xl">✓</Text>
        <Text className="text-base font-semibold text-green-900">{title}</Text>
      </View>

      <Text className="text-sm text-green-800 leading-relaxed">{message}</Text>
    </View>
  );
}
