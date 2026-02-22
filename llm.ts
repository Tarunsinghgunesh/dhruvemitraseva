import * as Haptics from "expo-haptics";
import { Platform } from "react-native";

/**
 * Hook to trigger haptic feedback
 * Handles platform differences and provides convenient methods
 */
export function useHaptics() {
  const light = async () => {
    if (Platform.OS !== "web") {
      try {
        await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
      } catch (error) {
        console.error("Haptic error:", error);
      }
    }
  };

  const medium = async () => {
    if (Platform.OS !== "web") {
      try {
        await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
      } catch (error) {
        console.error("Haptic error:", error);
      }
    }
  };

  const success = async () => {
    if (Platform.OS !== "web") {
      try {
        await Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
      } catch (error) {
        console.error("Haptic error:", error);
      }
    }
  };

  const error = async () => {
    if (Platform.OS !== "web") {
      try {
        await Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
      } catch (error) {
        console.error("Haptic error:", error);
      }
    }
  };

  const warning = async () => {
    if (Platform.OS !== "web") {
      try {
        await Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning);
      } catch (error) {
        console.error("Haptic error:", error);
      }
    }
  };

  return { light, medium, success, error, warning };
}
