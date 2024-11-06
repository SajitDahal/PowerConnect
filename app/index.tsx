import { Text, View } from "react-native";
import LoginScreen from "./Screen/LoginScreen/LoginScreen";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import * as SecureStore from "expo-secure-store";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigations from "./Navigations/TabNavigations";

SplashScreen.preventAutoHideAsync();
const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!;

if (!publishableKey) {
  throw new Error(
    "Missing Publishable Key. Please set EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY in your .env"
  );
}

const tokenCache = {
  async getToken(key: string) {
    try {
      return SecureStore.getItemAsync(key);
    } catch (err) {
      return null;
    }
  },
  async setToken(key: string, value: string) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      return;
    }
  },
};

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins: require("./../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Bold": require("./../assets/fonts/Poppins-Bold.ttf"),
    "Poppins-Semibold": require("./../assets/fonts/Poppins-SemiBold.ttf"),
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <ClerkProvider
      tokenCache={{
        ...tokenCache,
        saveToken: async (key: string, value: string) => {
          await tokenCache.setToken(key, value);
        },
      }}
      publishableKey={publishableKey}
    >
      <View
        style={{
          flex: 1,
        }}
      >
        <SignedIn>
          <NavigationContainer>
            <TabNavigations />
          </NavigationContainer>
        </SignedIn>
        <SignedOut>
          <LoginScreen />
        </SignedOut>
      </View>
    </ClerkProvider>
  );
}
