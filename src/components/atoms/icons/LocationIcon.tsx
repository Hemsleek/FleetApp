import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { useTheme } from "styled-components/native";
import { BottomTabProps } from "../../../utils/types";

const LocationIcon = (props: BottomTabProps) => {
  const {
    color: { offWhite, neonGreen },
  } = useTheme();
  return (
    <Svg width={15} height={20} fill="none" {...props}>
      <Path
        d="M8.426 19.526C10.43 17.018 15 10.94 15 7.526c0-4.14-3.36-7.5-7.5-7.5-4.14 0-7.5 3.36-7.5 7.5 0 3.414 4.57 9.492 6.574 12a1.18 1.18 0 0 0 1.852 0Zm-.926-9.5a2.502 2.502 0 0 1-2.5-2.5c0-1.379 1.121-2.5 2.5-2.5s2.5 1.121 2.5 2.5-1.121 2.5-2.5 2.5Z"
        fill={props.focused ? neonGreen : offWhite}
      />
    </Svg>
  );
};

export default LocationIcon;
