import { StyleSheet } from "react-native";
import * as COLORS from './colors';

const marginSize = 10;

const baseStyle = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingVertical: 20
  },

  bgSecondary: {
    backgroundColor: COLORS.SECONDARY
  },
  bgPrimary: {
    backgroundColor: COLORS.PRIMARY
  },

  text: {
    fontFamily: 'RobotoLight'
  },

  primary: {
    color: COLORS.primary
  },
  padding20: {
    paddingHorizontal: 20,
    paddingVertical: 20
  },
  radius20: {
    borderRadius: 20
  },

  dFlex: {
    display: "flex"
  },
  flexRow: {
    flexDirection: "row"
  },
  flexColumn: {
    flexDirection: "column"
  },
  itemsCenter: {
    alignItems: "center"
  },
  contentCenter: {
    justifyContent: "center"
  },
  contentEnd: {
    justifyContent: "flex-end"
  },
  textCenter: {
    textAlign: "center"
  },
  mv10: {
    marginVertical: marginSize
  },
  mv15: {
    marginVertical: marginSize + 5
  },
  mv20: {
    marginVertical: marginSize + 10
  },
  mh10: {
    marginHorizontal: marginSize
  },
  mh15: {
    marginHorizontal: marginSize + 5
  },
  mh20: {
    marginHorizontal: marginSize + 10
  },
  size16: {
    fontSize: 16
  },
  size18: {
    fontSize: 18
  },
  btn: {
    paddingHorizontal: 8
  }
});

export default baseStyle;
