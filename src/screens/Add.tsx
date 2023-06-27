import { SafeAreaView } from "react-native";
import { Header } from "../components/Header";
import AddDevices from "../components/AddDevices";

export default function Add() {
  return (
    <>
      <Header />
      <SafeAreaView>
        <AddDevices />
      </SafeAreaView>
    </>
  );
}
