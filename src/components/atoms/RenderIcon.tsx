import React from "react";
import { View } from "react-native";

// icons
import LocationIcon from "./icons/LocationIcon";
import UsersIcon from "./icons/UsersIcon";

interface IRoute {
  route: any;
  focused: boolean;
}

const RenderIcon = ({ route: { key }, focused }: IRoute) => {
  let result = <View />;

  switch (key) {
    case "users":
      return <UsersIcon focused={focused} />;
    case "location":
      return <LocationIcon focused={focused} />;

    default:
      break;
  }
  return result;
};

export default RenderIcon;
