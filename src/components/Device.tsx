import React, { useState } from "react";
import {
  VStack,
  Box,
  Divider,
  HStack,
  Switch,
  Badge,
  Avatar,
  Text,
  Menu,
  Pressable,
  Modal,
  FormControl,
  Input,
  Button,
  Stack,
  Icon,
  useToast,
} from "native-base";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import useRoom from "../hooks/useRoom";
import "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { RoomGet } from "../@types/room";
import { AlertError } from "./AlertError";

export default function ({
  id,
  name,
  sensor,
  temperature,
  humidity,
  air_conditioner,
}: RoomGet) {
  const [_, __, actions] = useRoom();
  const toast = useToast();
  const [roomName, setRoomName] = useState(name);
  const [sensorModel, setSensorModel] = useState(sensor);
  const [airConditionerModel, setAirConditionerModel] = useState(air_conditioner.model);
  const [showModal, setShowModal] = useState(false);

  const handleRoomNameChange = (value) => {
    setRoomName(value);
  };

  const handleSensorModelChange = (value) => {
    setSensorModel(value);
  };

  const handleAirConditionerModelChange = (value) => {
    setAirConditionerModel(value);
  };

  const handleUpdateAirConditioner = () => {
    // console.log(roomName, sensorModel, airConditionerModel);
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
      actions.put(id, postObj);
      setRoomName("");
      setSensorModel("");
      setAirConditionerModel("");
    } else {
      AlertError(toast, "Campos incorretos ou não preenchidos!");
    }
  };

  return (
    <>
      <Pressable
        borderWidth={"1"}
        borderRadius={"md"}
        padding={3}
        my={2.5}
        mx={4}
        borderColor={"primary.500"}
        onPress={() => setShowModal(true)}
      >
        <HStack
          space={3}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <HStack space={2} alignItems={"center"}>
            <Box
              borderRadius={"100"}
              padding={3}
              backgroundColor={"primary.500"}
            >
              <MaterialCommunityIcons
                name='snowflake'
                color={"white"}
                size={26}
              />
            </Box>
            <Badge
              colorScheme={"success"}
              variant={"outline"}
            >{`${temperature}° C`}</Badge>
          </HStack>
          <Box px='4'>
            <Text fontSize={15}>{`${name}`}</Text>
            <Text fontSize={15} color={"gray.400"}>{`${air_conditioner.model}`}</Text>
          </Box>
          <Pressable
            accessibilityLabel='Deletar'
            onPress={() => actions.delete(id)}
          >
            <MaterialCommunityIcons
              name='delete-outline'
              color={"red"}
              size={26}
            />
          </Pressable>
        </HStack>
      </Pressable>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content maxWidth='400px'>
          <Modal.CloseButton />
          <Modal.Header>Editar dispositivo</Modal.Header>
          <Modal.Body>
            <FormControl>
              <Stack space={4}>
                <Text fontSize='xl'>Cadastro de Cômodo</Text>
                <Stack>
                  <FormControl.Label>Cômodo</FormControl.Label>
                  <Input
                    variant='outline'
                    p={2}
                    value={roomName}
                    onChangeText={handleRoomNameChange}
                  />
                </Stack>
                <Stack>
                  <FormControl.Label>Modelo do sensor</FormControl.Label>
                  <Input
                    variant='outline'
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
                <Stack mt={-2.5}>
                  <FormControl.Label>
                    Modelo do ar-condicionado
                  </FormControl.Label>
                  <Input
                    variant='outline'
                    p={2}
                    value={airConditionerModel}
                    onChangeText={handleAirConditionerModelChange}
                  />
                </Stack>
              </Stack>
            </FormControl>
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button
                variant='ghost'
                colorScheme='blueGray'
                onPress={() => {
                  setShowModal(false);
                }}
              >
                Cancel
              </Button>
              <Button
                onPress={() => {
                  setShowModal(false);
                  handleUpdateAirConditioner();
                }}
              >
                Save
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </>
  );
}
