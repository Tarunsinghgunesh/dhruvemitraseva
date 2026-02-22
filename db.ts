import * as Network from "expo-network";
import { Alert } from "react-native";

/**
 * Check if device has internet connection
 */
export const checkInternetConnection = async (): Promise<boolean> => {
  try {
    const isConnected = await Network.getNetworkStateAsync();
    return isConnected.isConnected ?? false;
  } catch (error) {
    console.error("Error checking network:", error);
    return false;
  }
};

/**
 * Show internet required alert
 */
export const showInternetRequiredAlert = () => {
  Alert.alert(
    "No Internet Connection",
    "Internet connection is required for this feature. Please check your connection and try again.",
    [{ text: "OK" }]
  );
};

/**
 * Show error alert
 */
export const showErrorAlert = (title: string, message: string) => {
  Alert.alert(title, message, [{ text: "OK" }]);
};

/**
 * Show success alert
 */
export const showSuccessAlert = (title: string, message: string) => {
  Alert.alert(title, message, [{ text: "OK" }]);
};

/**
 * Validate mobile number (10 digits)
 */
export const isValidMobileNumber = (mobile: string): boolean => {
  const mobileRegex = /^[0-9]{10}$/;
  return mobileRegex.test(mobile.replace(/\D/g, ""));
};

/**
 * Format mobile number to standard format
 */
export const formatMobileNumber = (mobile: string): string => {
  const cleaned = mobile.replace(/\D/g, "");
  if (cleaned.length === 10) {
    return `+91${cleaned}`;
  }
  return mobile;
};

/**
 * Validate request ID format
 */
export const isValidRequestId = (id: string): boolean => {
  return id.trim().length >= 3;
};

/**
 * Generate QR code URL for UPI payment
 */
export const generateUPIQRCode = (upiId: string, name: string): string => {
  const upiData = `upi://pay?pa=${upiId}&pn=${encodeURIComponent(name)}&cu=INR`;
  return `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(upiData)}`;
};

/**
 * Get service icon based on service name
 */
export const getServiceIcon = (serviceName: string): string => {
  const iconMap: Record<string, string> = {
    "Aadhaar Update & Print": "🆔",
    "PAN Card (New / Correction)": "💳",
    "Income / Caste / Domicile Certificate": "📜",
    "Birth & Death Certificate": "👶",
    "Ayushman Card": "🏥",
    "E-Shram Registration": "👷",
    "Scholarship & Government Job Forms": "🎓",
    "Electricity / Water / Gas Bill Payment": "💡",
    "Mobile & DTH Recharge": "📱",
    "Online Form Filling": "📝",
    "Other Services": "⚙️",
  };
  return iconMap[serviceName] || "📋";
};

/**
 * Format date to readable format
 */
export const formatDate = (date: Date): string => {
  return date.toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

/**
 * Format time to readable format
 */
export const formatTime = (date: Date): string => {
  return date.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
  });
};

/**
 * Delay function for async operations
 */
export const delay = (ms: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

/**
 * Truncate text with ellipsis
 */
export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength - 3) + "...";
};

/**
 * Get initials from name
 */
export const getInitials = (name: string): string => {
  return name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase()
    .substring(0, 2);
};
