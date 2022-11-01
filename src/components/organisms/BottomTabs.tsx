import React, { useState } from "react";

import { BottomNavigation } from "react-native-paper";

import { useTheme } from "styled-components";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

import RenderIcon from "../atoms/RenderIcon";

//screens
import UsersScreen from "../../screens/Users";
import LocationScreen from "../../screens/Location";

const BottomNav = () => {
  const {
    color: { border, navyBlue },
  } = useTheme();
  const [index, setIndex] = useState(0);
  const [routes] = useState([{ key: "users" }, { key: "location" }]);

  const renderScene = BottomNavigation.SceneMap({
    users: UsersScreen,
    location: LocationScreen,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      shifting={false}
      barStyle={{
        backgroundColor: navyBlue,
        paddingVertical: hp(1.49),
        height: hp(8.99),
        width: "100%",
        borderTopWidth: 1,
        borderTopColor: border,
      }}
      activeColor={navyBlue}
      renderIcon={({ route, focused }) => (
        <RenderIcon route={route} focused={focused} />
      )}
    />
  );
};

export default BottomNav;
