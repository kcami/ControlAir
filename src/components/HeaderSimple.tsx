import React, { useState } from "react";
import {
  Box,
  Center,
  HStack,
  StatusBar,
  Text,
  Image,
  VStack,
  Flex,
  Menu,
  Pressable,
  HamburgerIcon,
  ArrowDownIcon,
  Select,
  CheckIcon,
} from "native-base";
import Logo from "../images/logo.png";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export function HeaderSimple() {
  const [rooms, setRooms] = useState([
    "Quarto",
    "Sala",
    "Banheiro",
    "Corredor",
  ]);
  const [selectedRoom, setSelectedRoom] = useState(rooms[0]);
  const [temperature, setTemperature] = useState(20.5);
  const [humidity, setHumidity] = useState(70.5);
  return (
    <>
      <StatusBar backgroundColor='black' barStyle='light-content' />
      <HStack
        bg={{
          linearGradient: {
            colors: ["primary.300", "primary.800"],
            start: [0, 0],
            end: [1, 0],
          },
        }}
        px='4'
        justifyContent='space-between'
        alignItems='center'
        w='100%'
        safeAreaTop
      >
        <Box
          flex={1}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Image
            source={Logo}
            alt='ControlAir Logo'
            style={{
              height: "18%",
              aspectRatio: 5,
            }}
          />
          <Text mt={7} color={"white"} fontSize={"2xl"}>Adicionar novos dispositivos</Text>
        </Box>
      </HStack>
    </>
  );
}
