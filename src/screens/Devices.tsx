import React, { useEffect } from "react";
import Device from "../components/Device";
import { HStack, ScrollView, Spinner, View, } from "native-base";
import { Platform, SafeAreaView } from "react-native";
import { Header } from "../components/Header";
import useRooms from "../hooks/useRooms";
import { HeaderSimple } from "../components/HeaderSimple";

export default function Devices() {
  const [loading, rooms, actions] = useRooms();

  useEffect(() => {
    actions.get()
    console.log(rooms)
  }, []);

  const scrollViewHeight = Platform.OS === "ios" ? "100%" : "80";

  return (
    <>
      <HeaderSimple title="Dispositivos" />
      <SafeAreaView>
        <ScrollView h={scrollViewHeight}>
          {loading ? <HStack space={8} justifyContent="center" alignItems="center">
            <Spinner mt={"50%"} size="lg" />
          </HStack>
            : <View mt={5}>
              {rooms.map(room =>
                <Device
                  key={room.id}
                  id={room.id}
                  temperature={room.air_conditioners[0]?.temperature}
                  device={room.name}
                  local={room.air_conditioners[0]?.model}
                  isEnabled={false}
                />)}
            </View>}
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
