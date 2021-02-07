import React from "react";
import slides from "./data-slides";
import AppIntroSlider from "react-native-app-intro-slider";
import { Icon } from "react-native-elements";
import { Image, Text } from "react-native";
import Divider from "_common/Divider";
import * as COLORS from '_styles/colors';
import { View, Title, Title1 } from '_styled/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { SHOW_APP } from "_redux/constants";


const renderItem = ({ item }) => (
  <View style={{
    padding:20,
    textAlign: 'center',
    backgroundColor: "#fff"
  }}>
    <Image
      source={item.image}
      style={{ width: "100%", height: 300 }}
      resizeMode="contain"
    />
    <Divider />
    <Title1 primary>{item.title}</Title1>
    <Divider/>
    <Title style={{textAlign: 'center'}}>{item.text}</Title>
  </View>
);

const renderDoneButton = ({dispatch}) => (
  <Icon
    name="done"
    size={30}
    color={COLORS.SUCCESS}
    onPress={() => dispatch({type: SHOW_APP })}
  />
);

const renderNextButton = () => (
  <Icon
    name="ios-arrow-round-forward"
    type="ionicon"
    size={30}
    color={COLORS.primary}
  />
);

const renderPreviousButton = () => (
  <Icon
    name="ios-arrow-round-back"
    type="ionicon"
    size={30}
    color={COLORS.primary}
  />
);

const AppIntro = (props) => {
  return (
    <AppIntroSlider
      slides={slides}
      renderItem={renderItem}
      showNextButton
      showPrevButton
      renderNextButton={renderNextButton}
      renderPrevButton={renderPreviousButton}
      renderDoneButton={() => renderDoneButton(props)}
      dotStyle={{
        backgroundColor: COLORS.PRIMARY
      }}
      activeDotStyle={{
        backgroundColor: COLORS.SECONDARY
      }}
    />
  );
};

function mapStateToProps(state){
  return state.showApp
} 

export default connect(mapStateToProps)(AppIntro);
