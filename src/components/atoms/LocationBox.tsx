import React from "react";

import styled, { css } from "styled-components/native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

const Container = styled.View`
  align-items: center;
  padding-vertical: ${hp(2.62)}px;
  width: ${wp(71.2)}px;
  background: ${(props) => props.theme.color.navyBlue};
  border: 1px solid ${(props) => props.theme.color.border};
  border-radius: 8px;
`;
const Title = styled.Text`
  font-weight: 400;
  font-size: ${(props) => props.theme.font.small};
  line-height: 18px;
  color: ${(props) => props.theme.color.fleetGrey};
  text-transform: capitalize;
`;
const LocationText = styled.Text`
  margin-top: ${hp(0.6)}px;
  font-weight: 700;
  font-size: 20px;
  line-height: 26px;
  color: ${(props) => props.theme.color.offWhite};
`;

type TLocationProps = {
  value: string;
  title: string;
};

const LocationBox = ({ title, value }: TLocationProps) => {
  return (
    <Container>
      <Title>{title}</Title>
      <LocationText>{value}</LocationText>
    </Container>
  );
};

export default LocationBox;
