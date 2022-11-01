import styled, { css } from "styled-components/native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

export const CContainer = styled.View`
  flex-grow: 1;
  background-color: ${(props) => props.theme.color.bg};
`;

export const FlexRow = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const FlexRowJustifyBetween = styled(FlexRow)`
  justify-content: space-between;
`;
