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

export function Header() {
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
        py='10'
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
          <Select
            selectedValue={selectedRoom}
            mt={5}
            fontSize={15}
            mx={{
              base: 0,
              md: "1",
            }}
            variant='rounded'
            onValueChange={(nextValue) => setSelectedRoom(nextValue)}
            borderColor='white'
            _selectedItem={{
              borderColor: "primary.300",
              borderWidth: "2",
              borderRadius: "10",
            }}
            color={"white"}
            w={200}
            accessibilityLabel='Selecione o quarto'
          >
            {rooms.map((item, key) => {
              return (
                <Select.Item key={key} label={`${item}`} value={`${item}`} />
              );
            })}
          </Select>
          <Flex mt={5} flex={1} flexDirection={"row"} alignItems={"center"} justifyContent={"space-between"}>
            <HStack flex={1} flexDirection={"row"} alignItems={"center"} justifyContent={"center"}>
                <MaterialCommunityIcons
                name='thermometer-lines'
                color={"white"}
                size={30}
                />
                <Text ml={2} fontSize={15} color={"white"}>{`${temperature}°C`}</Text>
            </HStack>
            <HStack flex={1} flexDirection={"row"} alignItems={"center"} justifyContent={"center"}>
                <MaterialCommunityIcons
                name='weather-rainy'
                color={"white"}
                size={30}
                />
                <Text ml={2} fontSize={15} color={"white"}>{`${humidity}%`}</Text>
            </HStack>
          </Flex>
        </Box>
      </HStack>
    </>
  );
}
