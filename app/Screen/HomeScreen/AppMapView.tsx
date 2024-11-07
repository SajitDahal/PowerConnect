import { View, StyleSheet, Text } from "react-native";
import React, { useContext } from "react";
import MapView from "react-native-maps/lib/MapView";
import { UserLocationContext } from "@/app/Context/UserLocationContext";

export default function AppMapView() {
  const context = useContext(UserLocationContext);

  // If context is not available, show a fallback UI
  if (!context) {
    return (
      <View>
        <Text>Location context is unavailable</Text>
      </View>
    );
  }

  const { location, setLocation } = context;

  // If location data is unavailable, show a fallback UI
  if (
    !location ||
    location.coords.latitude === undefined ||
    location.coords.latitude === undefined
  ) {
    return (
      <View>
        <Text>Location data is unavailable</Text>
      </View>
    );
  }
  return (
    <View>
      <MapView
        style={styles.map}
        region={{
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.0422,
          longitudeDelta: 0.0412,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  map: {
    width: "100%",
    height: "100%",
  },
});
