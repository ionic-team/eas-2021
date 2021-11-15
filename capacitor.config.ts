import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.conferences.eas2021',
  appName: 'enterprise-summit-2021',
  webDir: 'www',
  bundledWebRuntime: false,
  plugins: {
    LocalNotifications: {
      iconColor: "#1B4DFF",
    },
  },
};

export default config;
