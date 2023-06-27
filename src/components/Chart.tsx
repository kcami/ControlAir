import React from "react";
import { View, Text } from "native-base";
import { Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";

export default function Chart() {
  return (
    <View>
      <LineChart
        data={{
          labels: ["January", "February", "March", "April", "May", "June"],
          datasets: [
            {
              data: [
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
              ],
            },
          ],
        }}
        width={Dimensions.get("window").width} // from react-native
        height={220}
        yAxisLabel='$'
        yAxisSuffix='k'
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          backgroundColor: "green",
          backgroundGradientFrom: "green",
          backgroundGradientTo: "green",
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: "green.700",
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </View>
  );
}
