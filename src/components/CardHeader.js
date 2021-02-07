import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Icon, Button } from "react-native-elements";


// Component pour l'entete des composants (Light, Termostat)
const Cardheader = ({ title }) => {
  return (
    <View style={[styles.cardHeader, styles.mb4]}>
      <Text style={styles.title}>
        {title}
      </Text>
      <View style={{ marginLeft: "auto" }}>
        <Button
          icon={
            <Icon 
              name="more-vert" 
              color="black" 
            />
          }
          type='clear'
        />
      </View>
    </View>
  );
};

export default Cardheader;

const styles = StyleSheet.create({
  cardHeader: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  mb4: {
    marginBottom: 10
  },
  title: {
    fontSize: 20
  }
});
