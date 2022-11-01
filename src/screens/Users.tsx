import { View, Text } from "react-native";
import React from "react";

import styled, { css } from "styled-components/native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { CContainer } from "../theme/style.component";

const Container = styled(CContainer)`
  padding-bottom: ${hp(1.499)}px;
`;

const Users = () => {
  return (
    <Container>
      <Text>Users Screen</Text>
    </Container>
  );
};

export default Users;
