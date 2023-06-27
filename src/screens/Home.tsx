import React from "react";
import { SafeAreaView, ScrollView } from "react-native";
import { Box, HStack, NativeBaseProvider, StatusBar, Text } from "native-base";
import { Header } from "../components/Header";
import CloudSlider from "../components/CloudSlider";
import Chart from "../components/Chart";

export default function Home() {
  return (
    <>
    <Header />
      <SafeAreaView>
        <ScrollView>
          <CloudSlider />
          <Chart />
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
