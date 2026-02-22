import { ScrollView, Text, View, TouchableOpacity, TextInput, Linking, Alert } from "react-native";
import { useRouter } from "expo-router";
import { ScreenContainer } from "@/components/screen-container";
import { useColors } from "@/hooks/use-colors";
import { useState } from "react";
import { WHATSAPP_LINK, STATUS_MESSAGE } from "@/constants/app-config";

export default function StatusScreen() {
  const router = useRouter();
  const colors = useColors();
  const [input, setInput] = useState("");
  const [statusMessage, setStatusMessage] = useState("");
  const [showStatus, setShowStatus] = useState(false);

  const handleCheckStatus = () => {
    if (!input.trim()) {
      Alert.alert("Error", "Please enter a mobile number or request ID");
      return;
    }

    // Display status message
    setStatusMessage(STATUS_MESSAGE);
    setShowStatus(true);
  };

  const handleWhatsAppSupport = async () => {
    try {
      await Linking.openURL(WHATSAPP_LINK);
    } catch (error) {
      Alert.alert("Error", "Could not open WhatsApp. Please install WhatsApp first.");
    }
  };

  return (
    <ScreenContainer className="bg-background">
      {/* Header */}
      <View className="flex-row items-center justify-between px-4 py-4 border-b border-border">
        <TouchableOpacity onPress={() => router.back()}>
          <Text className="text-2xl">←</Text>
        </TouchableOpacity>
        <Text className="text-xl font-bold text-foreground">Check Status</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
        <View className="flex-1 px-4 py-6 gap-6">
          {/* Input Section */}
          <View className="bg-surface rounded-2xl p-6 border border-border gap-4">
            <Text className="text-sm font-semibold text-muted uppercase">Enter Details</Text>
            
            <View className="gap-2">
              <Text className="text-sm font-semibold text-foreground">Mobile Number or Request ID</Text>
              <TextInput
                placeholder="Enter 10-digit mobile number or request ID"
                placeholderTextColor={colors.muted}
                value={input}
                onChangeText={setInput}
                keyboardType="default"
                style={{
                  backgroundColor: colors.background,
                  borderColor: colors.border,
                  borderWidth: 1,
                  borderRadius: 8,
                  paddingHorizontal: 12,
                  paddingVertical: 12,
                  fontSize: 16,
                  color: colors.foreground,
                }}
              />
            </View>

            {/* Check Status Button */}
            <TouchableOpacity
              onPress={handleCheckStatus}
              style={{
                backgroundColor: colors.primary,
                borderRadius: 8,
                paddingVertical: 12,
                paddingHorizontal: 16,
              }}
              activeOpacity={0.8}
            >
              <Text className="text-base font-semibold text-white text-center">
                Check Status
              </Text>
            </TouchableOpacity>
          </View>

          {/* Status Result */}
          {showStatus && (
            <View className="bg-green-50 rounded-2xl p-6 border border-green-200 gap-4">
              <View className="flex-row items-center gap-2">
                <Text className="text-2xl">✓</Text>
                <Text className="text-base font-semibold text-green-900">Status Found</Text>
              </View>
              
              <View className="bg-white rounded-lg p-4 gap-2">
                <Text className="text-sm text-muted">Reference:</Text>
                <Text className="text-base font-semibold text-foreground">{input}</Text>
              </View>

              <View className="bg-white rounded-lg p-4 gap-2">
                <Text className="text-sm text-muted">Status:</Text>
                <Text className="text-base font-semibold text-green-900">{statusMessage}</Text>
              </View>

              {/* Contact Support Button */}
              <TouchableOpacity
                onPress={handleWhatsAppSupport}
                style={{
                  backgroundColor: "#25D366",
                  borderRadius: 8,
                  paddingVertical: 12,
                  paddingHorizontal: 16,
                }}
                activeOpacity={0.8}
              >
                <Text className="text-base font-semibold text-white text-center">
                  💬 Contact Support on WhatsApp
                </Text>
              </TouchableOpacity>
            </View>
          )}

          {/* Info Section */}
          <View className="bg-blue-50 rounded-2xl p-6 border border-blue-200 gap-3">
            <Text className="text-sm font-semibold text-blue-900">About Status Check</Text>
            <Text className="text-xs text-blue-800 leading-relaxed">
              Enter your 10-digit mobile number or request ID to check the status of your application.{"\n\n"}
              If you don't have a request ID, use the mobile number you provided during application submission.{"\n\n"}
              For detailed updates, please contact our support team on WhatsApp.
            </Text>
          </View>

          {/* Quick Support */}
          <View className="bg-surface rounded-2xl p-6 border border-border gap-3">
            <Text className="text-sm font-semibold text-foreground">Need Help?</Text>
            <TouchableOpacity
              onPress={handleWhatsAppSupport}
              style={{
                backgroundColor: "#25D366",
                borderRadius: 8,
                paddingVertical: 12,
                paddingHorizontal: 16,
              }}
              activeOpacity={0.8}
            >
              <Text className="text-base font-semibold text-white text-center">
                💬 Chat with Support
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </ScreenContainer>
  );
}
