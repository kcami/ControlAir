import { KeyboardAvoidingView, Platform, SafeAreaView } from "react-native";
import { Header } from "../components/Header";
import AddDevices from "../components/AddDevices";
import { ScrollView, View } from "native-base";

export default function Add() {
  const scrollViewHeight = Platform.OS === "ios" ? "100%" : "80";
  return (
    <>
      <Header />
      <KeyboardAvoidingView behavior={"height"}>
        <SafeAreaView>
          <ScrollView h={scrollViewHeight}>
            <View>
              <AddDevices />
            </View>
          </ScrollView>
        </SafeAreaView>
      </KeyboardAvoidingView>
    </>
  );
}
