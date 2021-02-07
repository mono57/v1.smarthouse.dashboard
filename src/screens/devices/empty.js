import React from "react";
import { Image } from "react-native";
import Divider from "_common/Divider";
import { StyledView, Title, StyledButton } from "_styled";

const emptyImg = require("_assets/empty1.png");

const EmptyDevice = ({ navigation }) => {
  return (
    <StyledView>
      <Divider/>

      <Image
        source={emptyImg}
        style={{ width: "100%", height: 300 }}
        resizeMode="contain"
      />
      <Divider size={30}/>
      <Title>
        You don't have devices register with your account. Please click on the
        button bellow or scan device QR Code to register one.
      </Title>
      <Divider size={70} />

      <StyledButton title="Add new device" onPress={() => navigation.navigate('AddDevice')} />
    </StyledView>
  );
};

export default EmptyDevice;
