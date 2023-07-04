import React, { useEffect, useState } from "react";
import {
  Box,
  HStack,
  StatusBar,
  Text,
  Image,
  Flex,
  Select,
} from "native-base";
import Logo from "../images/logo.png";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import useRooms from "../hooks/useRooms";
import useRoom from "../hooks/useRoom";

export function Header(props) {
  const {setRoomID} = props
  const [loadings, rooms, actions] = useRooms();
  const [loading, room, action] = useRoom();
  const [selectedRoom, setSelectedRoom] = useState(rooms[0]?.id);
  const [roomList, setRoomList] = useState([])


  useEffect(()=>{
    console.log(roomList)
  },[roomList])

  useEffect(() => {
    const handleWebSocketMessage = (event) => {
      const message = event.data;      
      setRoomList((JSON.parse(message)).message);
    };
  
    const websocketURL = "ws://bore.pub:64995/ws";
    const websocket = new WebSocket(websocketURL);
  
    websocket.onmessage = handleWebSocketMessage;
  
    return () => {
      websocket.close();
    };
    
  }, []);

  useEffect(() => {
    actions.get();
  }, []);

  useEffect(() => {
      setRoomList(rooms)
      action.get(rooms[0]?.id);
      setSelectedRoom(rooms[0]?.id);
      setRoomID(rooms[0]?.id)
  }, [rooms]);

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
            onValueChange={(nextValue) => {
              setSelectedRoom(nextValue);
              action.get(nextValue);
              setRoomID(nextValue)
            }}
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
            {roomList.map((item, key) => {
              return (
                <Select.Item
                  key={key}
                  label={`${item.name}`}
                  value={`${item.id}`}
                />
              );
            })}
          </Select>

          <Flex
            mt={5}
            flex={1}
            flexDirection={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <HStack
              flex={1}
              flexDirection={"row"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <MaterialCommunityIcons
                name='thermometer-lines'
                color={"white"}
                size={30}
              />
              <Text
                ml={2}
                fontSize={15}
                color={"white"}
              >{`${room?.temperature}°C`}</Text>
            </HStack>
            <HStack
              flex={1}
              flexDirection={"row"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <MaterialCommunityIcons
                name='weather-rainy'
                color={"white"}
                size={30}
              />
              <Text
                ml={2}
                fontSize={15}
                color={"white"}
              >{`${room?.humidity}%`}</Text>
            </HStack>
          </Flex>
        </Box>
      </HStack>
    </>
  );
}
