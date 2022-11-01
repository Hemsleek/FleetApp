import { View, Text, ScrollView } from "react-native";
import React from "react";

import styled, { css } from "styled-components/native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { CContainer } from "../theme/style.component";
import Header from "../components/molecules/Header";
import UsersCard from "../components/molecules/UsersCard";
import { defaultUsersData } from "../data";

const Container = styled(CContainer)`
  padding-bottom: ${hp(1.499)}px;
`;

const Main = styled.View`
  flex-grow: 1;
  margin-top;${hp(3.15)}px;

`;

const Spacer = styled.View<{ isSpacer: boolean }>`
  ${(props) =>
    props.isSpacer &&
    css`
      margin-top: ${hp(5.7)}px;
    `}
`;

// const Container = styled.View``;

const Users = () => {
  return (
    <Container>
      <Header title="user collection" text="8 users" />
      <Main>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 180 }}
        >
          {defaultUsersData.map((item: any, itemIndex: number) => (
            <Spacer key={itemIndex} isSpacer={itemIndex !== 0}>
              <UsersCard {...item} />
            </Spacer>
          ))}
        </ScrollView>
      </Main>
    </Container>
  );
};

export default Users;
