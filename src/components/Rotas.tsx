import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../screens/Home";
import Devices from "../screens/Devices";
import Add from "../screens/Add";

const Tab = createBottomTabNavigator();

export function Rotas() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName='Add'
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarActiveTintColor: "#9AE89E",
          tabBarInactiveTintColor: "white",
          tabBarLabelStyle: {
            fontSize: 15,
            marginBottom: 10,
          },
          tabBarStyle: {
            height: 90,
            paddingHorizontal: 5,
            paddingTop: 0,
            backgroundColor: "#003f20",
            position: "absolute",
            borderTopWidth: 0,
          },
        })}
      >
        <Tab.Screen
          name='Devices'
          component={Devices}
          options={{
            tabBarLabel: "Dispositivos",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name='door-open'
                color={color}
                size={26}
              />
            ),
          }}
        />
        <Tab.Screen
          name='Home'
          component={Home}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name='home-circle'
                color={color}
                size={26}
              />
            ),
          }}
        />
        <Tab.Screen
          name='Add'
          component={Add}
          options={{
            tabBarLabel: "Adicionar",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name='plus' color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
