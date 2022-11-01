import { View, Text } from "react-native";
import React from "react";

import styled, { css } from "styled-components/native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { CContainer } from "../theme/style.component";

const Container = styled(CContainer)``;
const Location = () => {
  return (
    <Container>
      <Text>Location Screen</Text>
    </Container>
  );
};

export default Location;
