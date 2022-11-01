import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";

const ReloadIcon = (props: SvgProps) => (
  <Svg width={16} height={16} fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        d="M4.466 4.466a5 5 0 0 1 7.04-.032L10.22 5.72A.751.751 0 0 0 10.75 7h4c.416 0 .75-.334.75-.75v-4a.749.749 0 0 0-1.281-.531l-1.3 1.3A6.998 6.998 0 0 0 1.4 5.669a1 1 0 0 0 1.884.665 4.949 4.949 0 0 1 1.182-1.868ZM.5 9.75v4a.75.75 0 0 0 1.281.531l1.3-1.3a6.999 6.999 0 0 0 9.869-.031 6.982 6.982 0 0 0 1.653-2.616 1 1 0 0 0-1.884-.665 4.95 4.95 0 0 1-1.181 1.868 5 5 0 0 1-7.041.032L5.78 10.28A.751.751 0 0 0 5.25 9h-4a.748.748 0 0 0-.75.75Z"
        fill="#4AE551"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h16v16H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default ReloadIcon;
