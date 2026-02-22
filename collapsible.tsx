import { ScrollView, Text, View, TouchableOpacity, Linking, Alert, ActivityIndicator } from "react-native";
import { useRouter } from "expo-router";
import * as WebBrowser from "expo-web-browser";
import { ScreenContainer } from "@/components/screen-container";
import { useColors } from "@/hooks/use-colors";
import { useState } from "react";
import { GOOGLE_FORM_BASE, GOOGLE_FORM_SERVICE_FIELD, SERVICES } from "@/constants/app-config";

export default function ServicesScreen() {
  const router = useRouter();
  const colors = useColors();
  const [loadingId, setLoadingId] = useState<number | null>(null);

  const handleServiceClick = async (serviceName: string) => {
    try {
      setLoadingId(SERVICES.find(s => s.name === serviceName)?.id ?? null);
      
      const formUrl = `${GOOGLE_FORM_BASE}?${GOOGLE_FORM_SERVICE_FIELD}=${encodeURIComponent(serviceName)}`;
      
      await WebBrowser.openBrowserAsync(formUrl);
    } catch (error) {
      Alert.alert("Error", "Could not open the service form. Please try again.");
    } finally {
      setLoadingId(null);
    }
  };

  return (
    <ScreenContainer className="bg-background">
      {/* Header */}
      <View className="flex-row items-center justify-between px-4 py-4 border-b border-border">
        <TouchableOpacity onPress={() => router.back()}>
          <Text className="text-2xl">←</Text>
        </TouchableOpacity>
        <Text className="text-xl font-bold text-foreground">Services</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
        <View className="px-4 py-4 gap-3">
          {SERVICES.map((service) => (
            <TouchableOpacity
              key={service.id}
              onPress={() => handleServiceClick(service.name)}
              disabled={loadingId === service.id}
              style={{
                backgroundColor: colors.surface,
                borderRadius: 12,
                padding: 16,
                borderWidth: 1,
                borderColor: colors.border,
                opacity: loadingId === service.id ? 0.6 : 1,
              }}
              activeOpacity={0.7}
            >
              <View className="flex-row items-center justify-between">
                <View className="flex-1 flex-row items-center gap-3">
                  <Text className="text-3xl">{service.icon}</Text>
                  <Text className="flex-1 text-base font-semibold text-foreground">
                    {service.name}
                  </Text>
                </View>
                {loadingId === service.id ? (
                  <ActivityIndicator size="small" color={colors.primary} />
                ) : (
                  <Text className="text-lg text-muted">→</Text>
                )}
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </ScreenContainer>
  );
}
