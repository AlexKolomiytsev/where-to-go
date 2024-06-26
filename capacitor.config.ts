import type { CapacitorConfig } from '@capacitor/cli'
import { KeyboardResize, KeyboardStyle } from '@capacitor/keyboard'

const config: CapacitorConfig = {
  appId: 'com.onetwogo.wheretogo',
  appName: 'where-to-go',
  webDir: 'dist',
  includePlugins: [
    '@capacitor/app',
    '@capacitor/haptics',
    '@capacitor/keyboard',
    '@capacitor/status-bar',
    '@capacitor/browser'
  ],
  plugins: {
    CapacitorHttp: {
      enabled: true
    },
    CapacitorCookies: {
      enabled: true
    },
    Keyboard: {
      resize: KeyboardResize.None,
      style: KeyboardStyle.Light,
      resizeOnFullScreen: true
    }
  }
}

export default config
