import { View, Text } from "react-native";
import React from "react";

import styled, { css } from "styled-components/native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { CContainer } from "../theme/style.component";
import Header from "../components/molecules/Header";
import LocationBox from "../components/atoms/LocationBox";
import { useDispatch } from "react-redux";
import { startLoading } from "../store/loaderReducer";

const Container = styled(CContainer)``;
const Main = styled.View`
  align-items: center;
  margin-top: ${hp(6.9)}px;
`;
const Spacer = styled.View`
  margin-top: ${hp(2.4)}px;
`;

const Location = () => {
  const dispatch = useDispatch();

  return (
    <Container>
      <Header
        title="my location"
        text="reload"
        iconName="reload"
        onReload={() => {
          // dispatch(startLoading());
        }}
      />
      <Main>
        <LocationBox title="my latitude" value="10,0000" />
        <Spacer />
        <LocationBox title="my longitude" value="10,0000" />
      </Main>
    </Container>
  );
};

export default Location;
