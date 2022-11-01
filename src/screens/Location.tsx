import React, { useCallback, useEffect, useState } from "react";

import styled, { css } from "styled-components/native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { CContainer } from "../theme/style.component";
import Header from "../components/molecules/Header";
import LocationBox from "../components/atoms/LocationBox";
import { useDispatch } from "react-redux";
import { startLoading, stopLoading } from "../store/loaderReducer";
import * as Location from "expo-location";

const Container = styled(CContainer)``;
const Main = styled.View`
  align-items: center;
  margin-top: ${hp(6.9)}px;
`;
const Spacer = styled.View`
  margin-top: ${hp(2.4)}px;
`;

const defaultLocation = { coords: { longitude: 0, latitude: 0 } };

const LocationComp = () => {
  const dispatch = useDispatch();
  const [location, setLocation] = useState<any>(defaultLocation);
  const [status, requestPermission] = Location.useForegroundPermissions();

  const getLocation = useCallback(async () => {
    try {
      dispatch(startLoading());
      if (status?.granted === false) {
        let { status: currentStatus } = await requestPermission();
        if (currentStatus !== "granted") {
          setLocation(defaultLocation);
          return;
        } else {
          let _location = await Location.getCurrentPositionAsync({});
          setLocation(_location);
        }
      } else {
        let _location = await Location.getCurrentPositionAsync({});
        setLocation(_location);
      }
    } catch (error) {
    } finally {
      dispatch(stopLoading());
    }
  }, []);

  useEffect(() => {
    (async () => {
      await getLocation();
    })();

    return () => {
      setLocation(defaultLocation);
    };
  }, []);

  return (
    <Container>
      <Header
        title="my location"
        text="reload"
        iconName="reload"
        onReload={async () => await getLocation()}
      />
      <Main>
        <LocationBox title="my latitude" value={location.coords.latitude} />
        <Spacer />
        <LocationBox title="my longitude" value={location.coords.longitude} />
      </Main>
    </Container>
  );
};

export default LocationComp;
