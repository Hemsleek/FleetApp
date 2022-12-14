import React, { useMemo } from "react";

import styled, { css } from "styled-components/native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { FlexRow } from "../../theme/style.component";
import { Image } from "react-native";
import ArrowForward from "../atoms/icons/ArrowForward";

const Container = styled(FlexRow)`
  padding-left: ${wp(4.5)}px;
  padding-right: ${wp(6.667)}px;
`;
const ImageWrapper = styled.View`
  width: 40px;
  height: 40px;
  border-radius: 100px;
`;
const TextWrapper = styled.View`
  flex-grow: 1;
  margin-horizontal: ${wp(3.2)}px;
  justify-content: center;
`;
const FullName = styled.Text`
  font-weight: 500;
  font-size: ${(props) => props.theme.font.medium};
  line-height: 24px;
  color: #f2f2f2;
`;
const OrdersText = styled.Text`
  margin-top: ${hp(0.6)}px;
  font-weight: 400;
  font-size: ${(props) => props.theme.font.small};
  line-height: 18px;
  color: ${(props) => props.theme.color.fleetGrey};
`;

type TUsersProps = {
  fullName: string;
  orders: Array<Object>;
  avatar: any;
};

const UsersCard = ({ fullName, orders = [], avatar }: TUsersProps) => {
  const ordersCompleted = useMemo(
    () => orders.filter((order: any) => order.isCompleted).length,
    [orders]
  );

  return (
    <Container>
      <ImageWrapper>
        <Image
          source={{ uri: avatar }}
          style={{
            resizeMode: "contain",
            width: "100%",
            height: "100%",
            borderRadius: 100,
          }}
        />
      </ImageWrapper>
      <TextWrapper>
        <FullName>{fullName}</FullName>
        <OrdersText>{ordersCompleted} Orders Completed</OrdersText>
      </TextWrapper>
      <ArrowForward />
    </Container>
  );
};

export default UsersCard;
