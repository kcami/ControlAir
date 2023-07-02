import { KeyboardAvoidingView, Platform, SafeAreaView } from "react-native";
import { Header } from "../components/Header";
import AddDevices from "../components/AddDevices";
import { ScrollView, View } from "native-base";
import { HeaderSimple } from "../components/HeaderSimple";

export default function Add() {
  const scrollViewHeight = Platform.OS === "ios" ? "100%" : "80";
  return (
    <>
      <HeaderSimple title={"Adicionar novos dispositivos"}/>
      <KeyboardAvoidingView behavior={"height"}>
        <SafeAreaView>
          <ScrollView p={3}>
            <View bgColor={"transparent"}>
              <AddDevices />
            </View>
          </ScrollView>
        </SafeAreaView>
      </KeyboardAvoidingView>
    </>
  );
}
