import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../Screen/HomeScreen/HomeScreen";
import FavouriteScreen from "../Screen/FavouriteScreen/FavouriteScreen";
import ProfileScreen from "../Screen/ProfieScreen/ProfileScreen";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Colors from "@/Utils/Colors";
import { FontAwesome } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
export default function TabNavigations() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Search",
          tabBarActiveTintColor: Colors.PRIMARY,
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons
              name="location-searching"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="favourite"
        component={FavouriteScreen}
        options={{
          tabBarLabel: "Favorite",
          tabBarActiveTintColor: Colors.PRIMARY,
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="favorite" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: "Profile",
          tabBarActiveTintColor: Colors.PRIMARY,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
