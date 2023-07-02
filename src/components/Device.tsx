import React from "react";
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
} from "native-base";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import useRoom from "../hooks/useRoom";

interface Props {
  temperature: number;
  device: string;
  local: string;
  isEnabled: boolean;
  id: string;
}

export default function (props: Props) {
  const { id, temperature, device, local, isEnabled } = props;
  const [loading, room, actions] = useRoom();
  return (
    <Box
      borderWidth={"1"}
      borderRadius={"md"}
      padding={3}
      my={2.5}
      mx={4}
      borderColor={"primary.500"}
    >
      <HStack space={3} justifyContent={"space-between"} alignItems={"center"}>
        <HStack space={2} alignItems={"center"}>
          <Box borderRadius={"100"} padding={3} backgroundColor={"primary.500"}>
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
          <Text fontSize={15}>{`${device}`}</Text>
          <Text fontSize={15} color={"gray.400"}>{`${local}`}</Text>
        </Box>
        <Menu
          trigger={(triggerProps) => {
            return (
              <Pressable
                accessibilityLabel='More options menu'
                {...triggerProps}
              >
                <MaterialCommunityIcons
                  name='dots-vertical'
                  color={"gray"}
                  size={26}
                />
              </Pressable>
            );
          }}
        >
          <Menu.Item onPress={() => {actions.delete(id)}}>Delete</Menu.Item>
          <Menu.Item>Editar</Menu.Item>
        </Menu>
      </HStack>
    </Box>
  );
}
