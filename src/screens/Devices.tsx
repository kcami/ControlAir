import React, { useEffect } from "react";
import Device from "../components/Device";
import { Box, ScrollView, View, useToast } from "native-base";
import { Platform, SafeAreaView } from "react-native";
import { Header } from "../components/Header";
import { getRooms } from "../services/api";
import { AlertError } from "../components/AlertError";

export default function Devices() {
  const toast = useToast();
  async function handleGet() {
    try {
      const response = await getRooms();
      console.log(response);
    
    } catch (error) {
      AlertError(toast, "Algo deu errado!");
    }
  }

  useEffect(() => {
    handleGet();
  }, []);

  const scrollViewHeight = Platform.OS === "ios" ? "100%" : "80";

  return (
    <>
      <Header />
      <SafeAreaView>
        <ScrollView h={scrollViewHeight}>
          <View>
            <Device
              temperature={0}
              device={"Teste"}
              local={"Teste"}
              isEnabled={false}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
