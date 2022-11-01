import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
import { useTheme } from "styled-components/native";
import { BottomTabProps } from "../../../utils/types";

const UsersIcon = (props: BottomTabProps) => {
  const {
    color: { offWhite, neonGreen },
  } = useTheme();

  return (
    <Svg width={25} height={20} fill="none" {...props}>
      <G clipPath="url(#a)">
        <Path
          d="M5.625 6.25a3.124 3.124 0 1 1 0-6.25 3.124 3.124 0 1 1 0 6.25ZM20 6.25A3.124 3.124 0 1 1 20 0a3.124 3.124 0 1 1 0 6.25ZM0 11.668A4.17 4.17 0 0 1 4.168 7.5h1.668c.621 0 1.21.137 1.742.379A5.002 5.002 0 0 0 9.195 12.5H.832A.835.835 0 0 1 0 11.668Zm15.832.832h-.027a4.988 4.988 0 0 0 1.691-3.75c0-.297-.027-.586-.074-.871a4.13 4.13 0 0 1 1.742-.379h1.668A4.17 4.17 0 0 1 25 11.668c0 .46-.375.832-.832.832h-8.336Zm.418-3.75a3.751 3.751 0 0 1-7.5 0 3.751 3.751 0 0 1 7.5 0ZM5 18.957a5.208 5.208 0 0 1 5.207-5.207h4.586A5.208 5.208 0 0 1 20 18.957c0 .574-.465 1.043-1.043 1.043H6.043A1.043 1.043 0 0 1 5 18.957Z"
          fill={props.focused ? neonGreen : offWhite}
        />
      </G>
      <Defs>
        <ClipPath id="a">
          <Path fill="#fff" d="M0 0h25v20H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default UsersIcon;
