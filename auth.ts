/**
 * App Configuration Constants
 */

// Owner Information
export const OWNER_NAME = "Tarun Singh";
export const OWNER_PHONE = "9079368240";
export const OWNER_LOCATION = "Brij Nagar, Bharatpur";
export const OWNER_LANDMARK = "Near Shiv Mandir";

// UPI Payment Details
export const UPI_ID = "tarun.8240@ptyes";
export const UPI_NAME = "Tarun Singh";
export const CURRENCY = "INR";

// Google Form
export const GOOGLE_FORM_BASE = "https://docs.google.com/forms/d/e/1FAIpQLSexE2M_ClTygKtoOGFCzTAL-FQH31nt_Hj5TRGV2b3aGhEsFg/viewform";
export const GOOGLE_FORM_SERVICE_FIELD = "entry.1566383754";

// External Links
export const WHATSAPP_LINK = `https://wa.me/${OWNER_PHONE}`;
export const WEBSITE_URL = "https://tarunsinghgunesh.github.io/dhruvemitrasevakendra/";
export const LOCATION_URL = "https://www.google.com/maps?q=27.2067169,77.5246241";

// App Information
export const APP_NAME = "Dhruv E-Mitra Seva Kendra";
export const APP_TAGLINE = "Fast • Reliable • Secure";
export const APP_VERSION = "1.0.0";

// Services List
export const SERVICES = [
  { id: 1, name: "Aadhaar Update & Print", icon: "🆔" },
  { id: 2, name: "PAN Card (New / Correction)", icon: "💳" },
  { id: 3, name: "Income / Caste / Domicile Certificate", icon: "📜" },
  { id: 4, name: "Birth & Death Certificate", icon: "👶" },
  { id: 5, name: "Ayushman Card", icon: "🏥" },
  { id: 6, name: "E-Shram Registration", icon: "👷" },
  { id: 7, name: "Scholarship & Government Job Forms", icon: "🎓" },
  { id: 8, name: "Electricity / Water / Gas Bill Payment", icon: "💡" },
  { id: 9, name: "Mobile & DTH Recharge", icon: "📱" },
  { id: 10, name: "Online Form Filling", icon: "📝" },
  { id: 11, name: "Other Services", icon: "⚙️" },
];

// Status Check Message
export const STATUS_MESSAGE = "Your application is under process. Please contact WhatsApp for updates.";

// Colors
export const COLORS = {
  primary: "#0066CC",
  secondary: "#00AA88",
  success: "#22C55E",
  warning: "#F59E0B",
  error: "#EF4444",
  info: "#3B82F6",
  whatsapp: "#25D366",
};

// Timeouts (in milliseconds)
export const NETWORK_TIMEOUT = 5000;
export const API_TIMEOUT = 10000;

// Storage Keys
export const STORAGE_KEYS = {
  LAST_STATUS_CHECK: "last_status_check",
  RECENT_SEARCHES: "recent_searches",
  APP_PREFERENCES: "app_preferences",
};
