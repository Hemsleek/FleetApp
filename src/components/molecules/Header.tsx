import React from "react";

import styled, { css } from "styled-components/native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { FlexRowJustifyBetween } from "../../theme/style.component";
import RenderIcon from "../atoms/RenderIcon";
import RenderAppIcon, { TIconName } from "../atoms/RenderAppIcon";

const Container = styled(FlexRowJustifyBetween)`
  padding-horizontal: ${wp(3.73)}px;
  padding-vertical: ${hp(3.07)}px;
`;
const Title = styled.Text`
  text-transform: capitalize;
  font-size: ${(props) => props.theme.font.large};
  color: ${(props) => props.theme.color.offWhite};
  font-weight: 700;
  line-height: 31px;
`;

const Wrapper = styled.Pressable`
  flex-direction: row;
  align-items: center;
`;
const MoreText = styled.Text<{ spacer: boolean }>`
  text-transform: capitalize;
  font-weight: 500;
  font-size: ${(props) => props.theme.font.medium};
  line-height: 24px;
  color: ${(props) => props.theme.color.neonGreen};

  ${(props) =>
    props.spacer &&
    css`
      margin-left: ${wp(2.13)}px;
    `}
`;

type THeaderProps = {
  title: string;
  iconName?: TIconName;
  text: string;
  onReload?: Function;
};

const Header = ({ title, iconName, text, onReload }: THeaderProps) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Wrapper onPress={() => onReload?.()}>
        {iconName && <RenderAppIcon iconName={iconName} />}
        <MoreText spacer={iconName ? true : false}>{text}</MoreText>
      </Wrapper>
    </Container>
  );
};

export default Header;
