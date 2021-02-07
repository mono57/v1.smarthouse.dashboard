import React, { PureComponent } from "react";
import { View } from "react-native";

const Divider = ({size}) => {
    const height = size ? size: 20
  return (
    <View
      style={{
        height: height,
        width: "100%"
      }}
    />
  );
};

export default Divider;
