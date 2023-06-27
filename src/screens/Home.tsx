import React from "react";
import { Platform, SafeAreaView } from "react-native";
import { ScrollView, View } from "native-base";
import { Header } from "../components/Header";
import CloudSlider from "../components/CloudSlider";
import Chart from "../components/Chart";

export default function Home() {
  const scrollViewHeight = Platform.OS === "ios" ? "100%" : "80";
  return (
    <>
      <Header />
      <SafeAreaView>
        <ScrollView h={scrollViewHeight}>
          <View>
            <CloudSlider />
            <Chart />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
