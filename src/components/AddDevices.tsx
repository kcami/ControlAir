import React, { useState } from "react";
import {
  Box,
  Divider,
  FormControl,
  Input,
  Stack,
  Button,
  Text,
  Icon,
  useToast,
} from "native-base";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import useRoom from "../hooks/useRoom";
import { AlertError } from "./AlertError";

const AddDevices = () => {
  const [loading, room, actions] = useRoom();
  const toast = useToast();
  const [roomName, setRoomName] = useState("");
  const [sensorModel, setSensorModel] = useState("");
  const [airConditionerModel, setAirConditionerModel] = useState("");

  const handleRoomNameChange = (value) => {
    setRoomName(value);
  };

  const handleSensorModelChange = (value) => {
    setSensorModel(value);
  };

  const handleAirConditionerModelChange = (value) => {
    setAirConditionerModel(value);
  };

  const handleCreateAirConditioner = () => {
    console.log(roomName, sensorModel, airConditionerModel);
    if (roomName && sensorModel && airConditionerModel) {
      const postObj = {
        name: roomName,
        sensor: sensorModel,
        air_conditioners: [
          {
            model: airConditionerModel,
          },
        ],
      };
      actions.post(postObj);
    } else {
      AlertError(toast, "Campos incorretos ou não preenchidos!");
    }
  };

  return (
    <Box
      m={2}
      mb={40}
      p={10}
      backgroundColor={"white"}
      shadow={"9"}
      borderColor={"transparent"}
      borderWidth={2}
      borderRadius={20}
    >
      <FormControl>
        <Stack space={4}>
          <Text fontSize="xl">Cadastro de Cômodo</Text>
          <Stack>
            <FormControl.Label>Cômodo</FormControl.Label>
            <Input
              variant="outline"
              p={2}
              value={roomName}
              onChangeText={handleRoomNameChange}
            />
          </Stack>
          <Stack>
            <FormControl.Label>Modelo do sensor</FormControl.Label>
            <Input
              variant="outline"
              p={2}
              value={sensorModel}
              onChangeText={handleSensorModelChange}
            />
          </Stack>
          <Divider
            bg={"primary.100"}
            borderColor={"primary.600"}
            borderWidth={1}
            borderRadius={"lg"}
          />
          <Stack>
            <FormControl.Label>Modelo do ar-condicionado</FormControl.Label>
            <Input
              variant="outline"
              p={2}
              value={airConditionerModel}
              onChangeText={handleAirConditionerModelChange}
            />
          </Stack>
          <Button
            leftIcon={
              <Icon
                as={MaterialCommunityIcons}
                name="cloud"
                color="white"
                size="sm"
              />
            }
            onPress={handleCreateAirConditioner}
          >
            Adicionar ar-condicionado
          </Button>
        </Stack>
      </FormControl>
    </Box>
  );
};

export default AddDevices;
