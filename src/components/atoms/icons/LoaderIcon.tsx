import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";

const LoaderIcon = (props: SvgProps) => (
  <Svg width={37} height={37} fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        d="M18.5 3.083a1.542 1.542 0 0 1 1.542 1.542V9.25a1.542 1.542 0 1 1-3.084 0V4.625A1.541 1.541 0 0 1 18.5 3.083Zm0 23.125a1.542 1.542 0 0 1 1.542 1.542v4.625a1.542 1.542 0 1 1-3.084 0V27.75a1.541 1.541 0 0 1 1.542-1.542ZM33.917 18.5a1.542 1.542 0 0 1-1.542 1.542H27.75a1.542 1.542 0 0 1 0-3.084h4.625a1.542 1.542 0 0 1 1.542 1.542Zm-23.125 0a1.542 1.542 0 0 1-1.542 1.542H4.625a1.542 1.542 0 0 1 0-3.084H9.25a1.542 1.542 0 0 1 1.542 1.542Zm18.61 10.901a1.542 1.542 0 0 1-2.18 0l-3.27-3.27a1.542 1.542 0 0 1 2.18-2.18l3.27 3.269a1.54 1.54 0 0 1 0 2.181ZM13.048 13.05a1.542 1.542 0 0 1-2.18 0L7.6 9.78A1.542 1.542 0 0 1 9.78 7.6l3.269 3.27a1.541 1.541 0 0 1 0 2.18ZM7.6 29.4a1.542 1.542 0 0 1 0-2.18l3.27-3.27a1.542 1.542 0 1 1 2.18 2.18l-3.268 3.27a1.541 1.541 0 0 1-2.182 0ZM23.951 13.05a1.542 1.542 0 0 1 0-2.18l3.269-3.27a1.542 1.542 0 0 1 2.181 2.18l-3.27 3.27a1.542 1.542 0 0 1-2.18 0Z"
        fill="#F2F2F2"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h37v37H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default LoaderIcon;
