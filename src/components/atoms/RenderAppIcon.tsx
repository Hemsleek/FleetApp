import React from "react";
import { View } from "react-native";

// icons
import ReloadIcon from "./icons/ReloadIcon";

export  type TIconName = 'reload'

const RenderAppIcon = ({ iconName }: {iconName:TIconName}) => {
  let result = <View />;

  switch (iconName) {
    case "reload":
      return <ReloadIcon />;

    default:
      break;
  }
  return result;
};

export default RenderAppIcon;
