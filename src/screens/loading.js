import { View, ActivityIndicator } from "react-native";
import React from "react";

const AppIndicator = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <ActivityIndicator size="large" color="#4285F3" />
    </View>
  );
};

export default AppIndicator;
