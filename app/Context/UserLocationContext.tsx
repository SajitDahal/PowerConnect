import React, { createContext, useState, ReactNode } from "react";
import * as Location from "expo-location";

type UserLocationContextType = {
  location: Location.LocationObject | null;
  setLocation: React.Dispatch<
    React.SetStateAction<Location.LocationObject | null>
  >;
};

export const UserLocationContext =
  createContext<UserLocationContextType | null>(null);

type UserLocationProviderProps = {
  children: ReactNode;
  location: Location.LocationObject | null;
  setLocation: React.Dispatch<
    React.SetStateAction<Location.LocationObject | null>
  >;
};

export const UserLocationProvider = ({
  children,
  location,
  setLocation,
}: UserLocationProviderProps) => {
  return (
    <UserLocationContext.Provider value={{ location, setLocation }}>
      {children}
    </UserLocationContext.Provider>
  );
};
