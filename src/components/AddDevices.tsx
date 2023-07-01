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
} from "native-base";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const AddDevices = () => {
  const [deviceName, setDeviceName] = useState("");
  const [brand, setBrand] = useState("");
  const [room, setRoom] = useState("");

  const handleAddAirCondicioner = (event) => {
    
  };

  return (
    <Box m={2} mb={40} p={10} backgroundColor={"white"} shadow={"9"} borderColor={"transparent"} borderWidth={2} borderRadius={20}>
      <FormControl>
        <Stack space={5}>
          <Text fontSize='xl'>Cadastro de Cômodo</Text>
          <Stack>
            <FormControl.Label>Cômodo</FormControl.Label>
            <Input variant='outline' p={2} onChange={(event)=>{
              setRoom({...room, })
            }} />
          </Stack>
          <Stack>
            <FormControl.Label>Modelo do sensor</FormControl.Label>
            <Input variant='outline' p={2} />
          </Stack>
          <Divider
            bg={"primary.100"}
            borderColor={"primary.600"}
            borderWidth={1}
            borderRadius={"lg"}
          />
          <Stack>
            <FormControl.Label>Nome</FormControl.Label>
            <Input variant='outline' p={2} />
          </Stack>
          <Stack>
            <FormControl.Label>Modelo do ar-condicionado</FormControl.Label>
            <Input variant='outline' p={2} />
          </Stack>
          <Button
            leftIcon={
              <Icon
                as={MaterialCommunityIcons}
                name='cloud'
                color='white'
                size='sm'
              />
            }
            onPress={handleAddAirCondicioner}
          >
            Adicionar ar-condicionado
          </Button>
        </Stack>
      </FormControl>
    </Box>
  );
};

export default AddDevices;
