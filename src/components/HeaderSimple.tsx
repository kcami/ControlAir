import React from "react";
import {
  Box,
  HStack,
  StatusBar,
  Text,
  Image,
} from "native-base";
import Logo from "../images/logo.png";

interface Header {
  title: string;
}

export function HeaderSimple({title}: Header) {
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
          <Text mt={7} color={"white"} fontSize={"2xl"}>{title}</Text>
        </Box>
      </HStack>
    </>
  );
}
