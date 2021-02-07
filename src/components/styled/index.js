import styled from "styled-components";
import { Input, Button } from "react-native-elements";
import * as COLORS from "_styles/colors";
import * as FONTS from "_styles/typography";

const BORDER = 10

export const AbstractView = styled.View`
  align-items: ${props => props.align || "center"};
  justify-content: ${props => props.justify || "center"};
  flex-direction: ${props => (props.row ? "row" : "column")};
  width: ${props => props.width || "auto"};
  height: ${props => props.height || "auto"};
  padding: ${props => props.padding || "20px"};
`;

export const View = styled(AbstractView)`
  flex: 1;
`;

export const StyledView = styled(AbstractView)`
  /* display: ${props => props.flex ? "flex" : "" } */
`;

export const Container = styled(AbstractView)`
  flex: 1;
`;

const renderColor = props => {
  switch (props.color) {
    case "primary":
      return COLORS.PRIMARY;
    case "secondary":
      return COLORS.SECONDARY;
    case "danger":
      return COLORS.DANGER;
    case "success":
      return COLORS.SUCCESS;
    default:
      return "#000";
  }
};

export const Title = styled.Text`
  font-family: Roboto-Light;
  font-size: 16px;
  font-weight: ${props => (props.bold ? "bold" : "normal")};
  text-align: ${props => props.align || "center"};
  color: ${props => renderColor(props)};
`;

export const Title1 = styled(Title)`
  font-size: 20px;
`;

export const StyledInput = styled(Input).attrs({
  placeholderTextColor: COLORS.GRAY_MEDIUM,
  labelStyle: {
    color: COLORS.BLACK,
    fontWeight: "normal",
    fontFamily: FONTS.RobotoLight,
    marginLeft: 20
  },
  inputContainerStyle: {
    backgroundColor: COLORS.WHITE,
    borderWidth: 1,
    borderRadius: BORDER,
    paddingHorizontal: 20,
    paddingTop: 5,
    marginTop: 5,
    
    // fontFamily: "Roboto-Light"
  }
})``;

export const StyledButton = styled(Button).attrs({
  containerStyle: {
    width: "100%",
    height: "auto"
  },
  buttonStyle: {
    backgroundColor: COLORS.SECONDARY,
    borderRadius: BORDER,
    // marginHorizontal: 10,
    // height: 40
  },
  titleStyle: {
    fontSize: 18
  }
})``;
