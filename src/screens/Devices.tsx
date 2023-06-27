import React, { useEffect } from "react";
import Device from "../components/Device";
import { HStack, ScrollView, Spinner, View, } from "native-base";
import { Platform, SafeAreaView } from "react-native";
import { Header } from "../components/Header";
import useRooms from "../hooks/useRooms";

export default function Devices() {
  const [loading, rooms, actions] = useRooms();

  useEffect(() => {
    actions.get()
    console.log(rooms)
  }, []);

  const scrollViewHeight = Platform.OS === "ios" ? "100%" : "80";

  return (
    <>
      <Header />
      <SafeAreaView>
        <ScrollView h={scrollViewHeight}>
          {loading ? <HStack space={8} justifyContent="center" alignItems="center">
            <Spinner size="lg" />
          </HStack>
            : <View>
              {rooms.map(room => 
              <Device
                temperature={room.air_conditioners.temperature}
                device={room.sensor}
                local={room.name}
                isEnabled={false}
              />)}
            </View>}
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
