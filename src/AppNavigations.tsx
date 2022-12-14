import React from "react";
import { Platform, StatusBar, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";
import styled, { css } from "styled-components/native";
import Loader from "./components/atoms/Loader";
import BottomNav from "./components/organisms/BottomTabs";
import { CContainer } from "./theme/style.component";

const Container = styled(CContainer)`
  flex-grow: 1;
  background-color: ${(props) => props.theme.color.bg};
  padding-top: ${Platform.OS === "android" ? StatusBar.currentHeight : 0}px;
`;

const AppNavigations = () => {
  const {
    loader: { isLoading },
  }: any = useSelector((state) => state);

  return (
    <Container>
      <SafeAreaView style={{ flexGrow: 1 }} edges={["top", "left", "right"]}>
        <BottomNav />
        {isLoading && <Loader show={isLoading} />}
      </SafeAreaView>
    </Container>
  );
};

export default AppNavigations;
