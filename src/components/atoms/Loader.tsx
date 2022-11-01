import React from "react";
import { Modal } from "react-native";

import styled, { css } from "styled-components/native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import LoaderIcon from "./icons/LoaderIcon";

const Container = styled.View`
  flex-grow: 1;
  align-items: center;
  padding-top: ${hp(29.08)}px;
  background-color: rgba(15, 23, 42, 0.87);
`;
// const Container = styled.View``;

const Loader = ({ show }: { show: boolean }) => {
  return (
    <Modal visible={show} transparent>
      <Container>
        <LoaderIcon />
      </Container>
    </Modal>
  );
};

export default Loader;
