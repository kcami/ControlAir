import React, { useEffect, useState } from "react";
import { Box, Icon, Slider, Text, Stack, Badge } from "native-base";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import useRoom from "../hooks/useRoom";

export default function CloudSlider(props) {
  const {roomID} = props;
  const [onChangeValue, setOnChangeValue] = React.useState(22);
  const [onChangeEndValue, setOnChangeEndValue] = React.useState(22);
  const [_, room, actions] = useRoom();

  useEffect(()=>{
    actions.get(roomID)
  },[roomID])

  return (
    <Box alignItems='center' w='100%' my={10}>
      <Stack space={3} alignItems='center' w='75%' maxW='300'>
        <Badge
          w='100%'
          colorScheme='success'
          alignSelf='center'
          variant='outline'
        >{`${onChangeValue} °C`}</Badge>
        <Slider
          defaultValue={22}
          maxValue={35}
          minValue={10}
          colorScheme='green'
          onChange={(v) => {
            setOnChangeValue(Math.floor(v));
          }}
          onChangeEnd={(v) => {
            v && setOnChangeEndValue(Math.floor(v));
            const putObj = {"temperature": v}
            actions.putTemperature(room.air_conditioners[0].id, putObj);
          }}
        >
          <Slider.Track bg="primary.100">
            <Slider.FilledTrack bg='primary.600' />
          </Slider.Track>
          <Slider.Thumb borderWidth='0' bg='transparent'>
            <Icon
              as={MaterialCommunityIcons}
              name='cloud'
              color='primary.300'
              size='xl'
            />
          </Slider.Thumb>
        </Slider>
      </Stack>
    </Box>
  );
}
