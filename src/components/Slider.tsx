import { Box } from "native-base";
import { useState } from "react";
import { Slider } from "native-base";


export default function CloudSlider() {
  const [value, setValue] = useState(0);
  return (
    <Box alignItems="center" w="100%">
      <Slider defaultValue={70} size="sm" colorScheme="green" w="75%" maxW="300">
        <Slider.Track bg="green.100">
          <Slider.FilledTrack bg="green.600" />
        </Slider.Track>
        <Slider.Thumb borderWidth="0" bg="transparent">
          <Icon as={MaterialCommunityIcons} name="cloud" color="green.600" size="sm" />
        </Slider.Thumb>
      </Slider>
    </Box>
  );
}
