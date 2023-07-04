import React, { useState } from "react";
import { Platform, SafeAreaView } from "react-native";
import { ScrollView, View, Image } from "native-base";
import { Header } from "../components/Header";
import CloudSlider from "../components/CloudSlider";
import Air from "../images/ar-condicionado.png";

export default function Home() {
  const scrollViewHeight = Platform.OS === "ios" ? "100%" : "80";
  const [roomID, setRoomID] = useState(null);

  return (
    <>
      <Header setRoomID={setRoomID} />
      <SafeAreaView>
        <ScrollView h={scrollViewHeight}>
          <View>
            <CloudSlider roomID={roomID} />
            <Image
              source={Air}
              alt='ControlAir Air'
              style={{ margin: -20, alignSelf: "center" }}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
