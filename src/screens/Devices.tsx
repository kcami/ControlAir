import React from "react";
import Device from "../components/Device";
import { SafeAreaView } from "react-native";
import { Header } from "../components/Header";

export default function () {
  return (
    <>
      <Header />
      <SafeAreaView>
        <Device
          temperature={0}
          device={"Teste"}
          local={"Teste"}
          isEnabled={false}
        />
      </SafeAreaView>
    </>
  );
}
