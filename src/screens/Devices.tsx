import React, { useEffect } from "react";
import Device from "../components/Device";
import { HStack, ScrollView, Spinner, Stack, View } from "native-base";
import { Platform, SafeAreaView } from "react-native";
import { Header } from "../components/Header";
import useRooms from "../hooks/useRooms";
import { HeaderSimple } from "../components/HeaderSimple";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

export default function Devices() {
  const [loading, rooms, actions] = useRooms();

  useEffect(() => {
    actions.get();
  }, []);

  const scrollViewHeight = Platform.OS === "ios" ? "100%" : "80";
  const Stack = createStackNavigator();

  return (
    <>
      <HeaderSimple title='Dispositivos' />
      <SafeAreaView>
        <ScrollView h={scrollViewHeight}>
          {loading ? (
            <HStack space={8} justifyContent='center' alignItems='center'>
              <Spinner mt={"50%"} size='lg' />
            </HStack>
          ) : (
            <View mt={5} mb={350}>
              {rooms.map((room) => (
                <Device
                  key={room.id}
                  id={room.id}
                  name={room.name}
                  temperature={room.air_conditioners[0]?.temperature}
                  humidity={room.air_conditioners[0]?.humidity}
                  sensor={room.sensor}
                  air_conditioner = {room.air_conditioners[0]}
                />
              ))}
            </View>
          )}
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
