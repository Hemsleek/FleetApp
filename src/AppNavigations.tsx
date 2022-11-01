import React from "react";
import { Platform, StatusBar, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";
import { CContainer } from "./theme/style.component";

const Container = styled(CContainer)`
  flex-grow: 1;
  background-color: ${(props) => props.theme.color.bg};
  padding-top: ${Platform.OS === "android" ? StatusBar.currentHeight : 0}px;
`;

const AppNavigations = () => {
  return (
    <Container>
      <SafeAreaView style={{ flexGrow: 1 }} edges={["top", "left", "right"]}>
        <View>
          <Text style={{ color: "#fff" }}> Hello Fleet There</Text>
        </View>
      </SafeAreaView>
    </Container>
  );
};

export default AppNavigations;
