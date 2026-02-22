# Dhruv E-Mitra Seva Kendra - Mobile App

A professional, fully functional Android mobile application for a local digital service center offering government services, bill payments, and support.

## Features

### Core Functionality

- **Home Screen**: Main dashboard with quick access to all services
  - Logo and branding
  - Six primary action buttons
  - Owner information and location
  - Internet connectivity detection

- **Services Section**: Browse and apply for 11 government services
  - Aadhaar Update & Print
  - PAN Card (New / Correction)
  - Income / Caste / Domicile Certificate
  - Birth & Death Certificate
  - Ayushman Card
  - E-Shram Registration
  - Scholarship & Government Job Forms
  - Electricity / Water / Gas Bill Payment
  - Mobile & DTH Recharge
  - Online Form Filling
  - Other Services
  - Direct integration with Google Forms (pre-filled service name)

- **Payment Processing**: UPI payment integration
  - UPI ID display: tarun.8240@ptyes
  - QR code generation for scanning
  - Direct UPI payment intent
  - Payment information display

- **Status Tracking**: Check application status
  - Enter mobile number or request ID
  - Real-time status message
  - WhatsApp support link

- **Support Channels**
  - WhatsApp direct chat: +919079368240
  - Website link: https://tarunsinghgunesh.github.io/dhruvemitrasevakendra/
  - Google Maps location: Brij Nagar, Bharatpur

### Design & UX

- **Professional Theme**: Blue-teal gradient color scheme
- **Responsive Layout**: Optimized for all Android screen sizes
- **Dark Mode Support**: Automatic light/dark mode switching
- **Smooth Animations**: Button press feedback and transitions
- **Offline Handling**: Internet connectivity checks and error messages
- **Loading States**: Visual indicators for async operations

## Technology Stack

- **Framework**: React Native with Expo SDK 54
- **Styling**: NativeWind (Tailwind CSS for React Native)
- **Navigation**: Expo Router
- **State Management**: React Hooks + Context API
- **Type Safety**: TypeScript
- **Testing**: Vitest

## Project Structure

```
app/
├── (tabs)/
│   ├── _layout.tsx          # Tab navigation
│   └── index.tsx            # Home screen
├── _layout.tsx              # Root layout
├── services.tsx             # Services screen
├── payment.tsx              # Payment screen
├── status.tsx               # Status check screen
components/
├── screen-container.tsx     # SafeArea wrapper
├── loading-spinner.tsx      # Loading indicator
├── error-alert.tsx          # Error component
├── success-alert.tsx        # Success component
├── ui/
│   └── icon-symbol.tsx      # Icon mapping
constants/
├── app-config.ts            # App configuration
└── theme.ts                 # Theme exports
hooks/
├── use-colors.ts            # Color palette hook
├── use-app-state.ts         # App state hook
└── use-haptics.ts           # Haptic feedback hook
lib/
├── app-utils.ts             # Utility functions
├── theme-provider.tsx       # Theme context
└── trpc.ts                  # API client
```

## Key Features Explained

### Google Form Integration

Services are pre-filled in the Google Form using the `entry.1566383754` field:
```
https://docs.google.com/forms/d/e/1FAIpQLSexE2M_ClTygKtoOGFCzTAL-FQH31nt_Hj5TRGV2b3aGhEsFg/viewform?entry.1566383754=SERVICE_NAME
```

### UPI Payment

The app generates a UPI payment intent that opens the user's preferred UPI app:
```
upi://pay?pa=tarun.8240@ptyes&pn=Tarun%20Singh&cu=INR
```

QR codes are generated using the QR Server API for easy scanning.

### Connectivity Detection

The app checks internet connectivity before opening external links and displays appropriate error messages if offline.

## Configuration

All app configuration is centralized in `constants/app-config.ts`:

- **Owner Information**: Name, phone, location
- **UPI Details**: Payment ID and name
- **External Links**: Google Form, WhatsApp, Website, Maps
- **Services List**: All 11 government services
- **Colors**: Brand colors and status colors

## Development

### Prerequisites

- Node.js 22+
- npm or pnpm
- Expo CLI

### Installation

```bash
cd /home/ubuntu/dhruv-emitra-seva-kendra
npm install
```

### Running the App

**Web Preview:**
```bash
npm run dev:metro
```

**Android (Expo Go):**
```bash
npm run android
```

**iOS (Expo Go):**
```bash
npm run ios
```

### Testing

```bash
npm test
```

## Building for Production

### Android APK

```bash
eas build --platform android
```

### Web

```bash
npm run build
```

## Customization

### Changing Colors

Edit `theme.config.js` to modify the color scheme:

```javascript
const themeColors = {
  primary: { light: '#0066CC', dark: '#0066CC' },
  secondary: { light: '#00AA88', dark: '#00AA88' },
  // ... other colors
};
```

### Updating Configuration

Edit `constants/app-config.ts` to update:
- Owner information
- UPI details
- External links
- Services list
- App branding

### Modifying Services

Update the `SERVICES` array in `constants/app-config.ts` to add or remove services.

## Deployment

The app is production-ready and can be deployed to:

1. **Google Play Store**: Using EAS Build
2. **F-Droid**: For open-source distribution
3. **Direct APK Distribution**: Via website or email

## Performance Optimization

- Lightweight bundle size (~15MB)
- Lazy loading for services
- Optimized images and assets
- Minimal dependencies
- Fast app startup time

## Accessibility

- Large touch targets (48x48 dp minimum)
- High contrast text
- Clear error messages
- Keyboard navigation support
- Screen reader compatible

## Security

- No sensitive data stored locally
- HTTPS for all external links
- Secure UPI payment intent
- No API keys exposed
- Safe area compliance

## Troubleshooting

### App Won't Load
- Check internet connection
- Clear app cache
- Reinstall the app

### Payment Not Working
- Ensure UPI app is installed
- Check UPI ID configuration
- Verify internet connection

### Forms Not Opening
- Check Google Form URL
- Verify internet connection
- Check browser availability

## Support

For issues or feature requests, contact:
- **Owner**: Tarun Singh
- **Phone**: +919079368240
- **WhatsApp**: https://wa.me/919079368240
- **Location**: Brij Nagar, Bharatpur (Near Shiv Mandir)

## License

This app is proprietary software for Dhruv E-Mitra Seva Kendra.

## Version

Current Version: 1.0.0
Release Date: February 2026
