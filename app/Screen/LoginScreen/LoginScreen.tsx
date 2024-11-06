import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Image } from "react-native";
import Colors from "./../../../Utils/Colors";
import * as WebBrowser from "expo-web-browser";
import { useWarmUpBrowser } from "@/hooks/useWarmUpBrowser";
import { useOAuth } from "@clerk/clerk-expo";

WebBrowser.maybeCompleteAuthSession();
const LoginScreen = () => {
  useWarmUpBrowser();
  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

  const onPress = async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();

      if (createdSessionId) {
        setActive?.({ session: createdSessionId });
      } else {
      }
    } catch (err) {
      console.log("oAuth Error", err);
    }
  };
  return (
    <View
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 50,
      }}
    >
      <Image
        source={require("./../../../assets/images/logo.png")}
        style={styles.logoImage}
      />

      <Image
        source={require("./../../../assets/images/loginBg.png")}
        style={styles.bgImage}
      />
      <View style={{ padding: 20 }}>
        <Text style={styles.header}>
          Welcome to Power Connect, Your gateway to convenient EV charging
          station access!
        </Text>

        <Text style={styles.desc}>
          Charge Smart, Drive Green with Power Connect!
        </Text>
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text
            style={{
              color: Colors.WHITE,
              textAlign: "center",
              fontFamily: "Poppins",
              fontSize: 16,
            }}
          >
            Login With Google
          </Text>
          <Image
            source={require("./../../../assets/images/google.png")}
            style={styles.googleLogo}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  logoImage: {
    width: 200, // Adjust the width to fit your logo
    height: 80, // Adjust the height to fit your logo
    objectFit: "contain", // Ensures the logo maintains its aspect ratio
  },

  bgImage: {
    width: "100%",
    height: 240,
    marginTop: 20,
    objectFit: "cover",
  },

  header: {
    fontSize: 24,
    fontFamily: "Poppins-Bold",
    textAlign: "center",
    marginTop: 1,
  },
  desc: {
    fontSize: 18,
    fontFamily: "Poppins",
    marginTop: 12,
    textAlign: "center",
    color: Colors.GRAY,
  },
  button: {
    backgroundColor: Colors.PRIMARY,
    padding: 16,
    display: "flex",
    flexDirection: "row",
    textAlign: "center",
    justifyContent: "center",
    borderRadius: 99,
    marginTop: 40,
  },
  googleLogo: {
    width: 25,
    height: 25,
    marginLeft: 10,
    resizeMode: "contain",
  },
});

export default LoginScreen;
